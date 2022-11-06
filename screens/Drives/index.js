import { Alert, Button, Image, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { PureComponent, useEffect, useState } from 'react'
import style from './styles.scss';
import { Table, Row, Rows } from 'react-native-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { addDriveDetail, addDriveDetailInit, getDriveDetails, getDriveDetailsInit, updateDriveDetail, updateDriveDetailInit } from '../../store/drive/actions';

export default function Drives() {
  const dispatch = useDispatch();
  const state = useSelector(state=>{
    return {vaccDrive : state.VaccDrive}
  })
  const header = ['Vaccine Name', 'Vaccination Date', 'Total Vaccines', 'Actions']
  const [data, setdata] = useState(undefined)
  const [modalVisible, setModalVisible] = useState(false);
  const [vaccineName, onChangeVaccineName] = React.useState("");
  const [date, onChangeDate] = React.useState("");
  const [vaccineTotal, onChangeVaccineTotal] = React.useState("");
  const [modalType, setmodalType] = useState("")

  useEffect(() => {
    dispatch(getDriveDetails())
  }, [])


  useEffect(() => {
    if(state.vaccDrive.getDriveDetailsSuccess==true){
      let dataArr = [];
      state.vaccDrive.vaccinationData.map((item,index)=>{
        dataArr.push([
          item.name,
          item.vaccinationDate,
          item.vaccinationCount,
          <TouchableOpacity onPress={()=>{handleModalOpen("edit", item)}} className={style["table-cta-btn"]}>
            <Image className={style["table-graphic"]} source={require('../../assets/edit.png')} />
          </TouchableOpacity>
        ])
      })
      setdata(dataArr)
      dispatch(getDriveDetailsInit())
    }
    if(state.vaccDrive.getDriveDetailsFailure==true){
      dispatch(getDriveDetailsInit())
    }
    if(state.vaccDrive.addDriveDetailsSuccess==true){
      dispatch(addDriveDetailInit())
      dispatch(getDriveDetails())
      setModalVisible(!modalVisible)
      onChangeVaccineName("")
      onChangeDate("")
      onChangeVaccineTotal("")
      Alert.alert("Drive data added successfully")
    }
    if(state.vaccDrive.addDriveDetailsFailure==true){
      Alert.alert("Error in data submission. Please try again later.")
      dispatch(addDriveDetailInit())
    }
    if(state.vaccDrive.updateDriveDetailsSuccess==true){
      dispatch(updateDriveDetailInit())
      dispatch(getDriveDetails())
      setModalVisible(!modalVisible)
      onChangeVaccineName("")
      onChangeDate("")
      onChangeVaccineTotal("")
      Alert.alert("Drive data edited successfully")
    }
    if(state.vaccDrive.updateDriveDetailsFailure==true){
      Alert.alert("Error in data updation. Please try again later.")
      dispatch(updateDriveDetailInit())
    }
  }, [state.vaccDrive])

  const handleAddDrive = () => {
    dispatch(addDriveDetail({
      "drive":[vaccineName,date,Number(vaccineTotal)]
    }))
  }

  const handleEditDrive = () => {
    dispatch(updateDriveDetail({
      "drive":[date,Number(vaccineTotal),vaccineName]
    }))
  }

  const handleModalOpen = (type, data) => {
    setmodalType(type)
    if(type=="add"){
      onChangeVaccineName("")
      onChangeDate("")
      onChangeVaccineTotal("")
    }
    if(type=="edit"){
      onChangeVaccineName(data.name)
      onChangeDate(data.vaccinationDate)
      onChangeVaccineTotal(String(data.vaccinationCount))
    }
    setModalVisible(!modalVisible)
  }

  return (
    <View className={style["drive-wrapper"]}>
      <Text className={style["testing-text"]}>Vaccination Drives</Text>
      <View>
        {
          !!data
          &&
          <Table className={style["table"]} borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row style={styles.head} textStyle={styles.headText} data={header} />
            <Rows textStyle={styles.text} data={data} />
          </Table>
        }
      </View>
      <View className={style["cta-wrapper"]}>
        <TouchableOpacity className={style["cta-btn"]} title={"Add Drive"} onPress={()=>{handleModalOpen("add")}}><Text className={style["cta-btn-text"]}>Add Drive</Text></TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add Drive</Text>
            <View className={style["form-input-wrapper"]}>
              <Text className={style["textbox-label"]}>Vaccine Name:</Text>
              <TextInput className={style["input-textbox"]} onChangeText={onChangeVaccineName} value={vaccineName} />
              <Text className={style["textbox-label"]}>Vaccination Drive Date:</Text>
              <TextInput className={style["input-textbox"]} onChangeText={onChangeDate} value={date} />
              <Text className={style["textbox-label"]}>Total Vaccines:</Text>
              <TextInput className={style["input-textbox"]} onChangeText={onChangeVaccineTotal} value={vaccineTotal} />
            </View>
            {
              modalType=="add"
              &&
              <Pressable style={[styles.button, styles.buttonClose]} onPress={() => handleAddDrive()}>
                <Text style={styles.textStyle}>Submit Data</Text>
              </Pressable>
            }
            {
              modalType=="edit"
              &&
              <Pressable style={[styles.button, styles.buttonClose]} onPress={() => handleEditDrive()}>
                <Text style={styles.textStyle}>Edit Data</Text>
              </Pressable>
            }
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: '#f1f8ff' },
  headText: { textAlign: 'center', fontWeight:'bold', fontSize: 12 },
  text: { margin: 6, fontSize: 12, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' },centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 24
  }
});