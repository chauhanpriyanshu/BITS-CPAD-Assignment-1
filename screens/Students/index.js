import { Alert, Button, Image, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { PureComponent, useEffect, useState } from 'react'
import { Table, Row, Rows } from 'react-native-table-component';
import style from './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addStudentDetail, addStudentDetailInit, getStudentsDetails, getStudentsDetailsInit, updateStudentDetail, updateStudentDetailInit } from '../../store/drive/actions';

export default function Students() {
  const dispatch = useDispatch();
  const state = useSelector(state=>{
    return {vaccDrive : state.VaccDrive}
  })
  const header = ['Student Name', 'Vaccine Name', 'Vaccination Date', 'Vaccinated', 'Actions']
  const [data, setdata] = useState(undefined)
  const [modalVisible, setModalVisible] = useState(false);
  const [studentName, onChangestudentName] = React.useState("");
  const [vaccineName, onChangeVaccineName] = React.useState("");
  const [date, onChangeDate] = React.useState("");
  const [vaccineStatus, onChangevaccineStatus] = React.useState("");
  const [modalType, setmodalType] = useState("")

  useEffect(() => {
    dispatch(getStudentsDetails())
  }, [])

  useEffect(() => {
    if(state.vaccDrive.getStudentDetailsSuccess==true){
      let dataArr = [];
      state.vaccDrive.studentData.map((item,index)=>{
        dataArr.push([
          item.name,
          item.vaccineName,
          item.vaccinationDate,
          item.isVaccinated,
          <TouchableOpacity onPress={()=>{handleModalOpen("edit", item)}} className={style["table-cta-btn"]}>
            <Image className={style["table-graphic"]} source={require('../../assets/edit.png')} />
          </TouchableOpacity>
        ])
      })
      setdata(dataArr)
      dispatch(getStudentsDetailsInit())
    }
    if(state.vaccDrive.getStudentDetailsFailure==true){
      dispatch(getStudentsDetailsInit())
    }
    if(state.vaccDrive.addStudentDetailsSuccess==true){
      dispatch(addStudentDetailInit())
      dispatch(getStudentsDetails())
      setModalVisible(!modalVisible)
      onChangevaccineStatus("")
      onChangeDate("")
      onChangeVaccineName("")
      onChangestudentName("")
      Alert.alert("Student data added successfully")
    }
    if(state.vaccDrive.addStudentDetailsFailure==true){
      Alert.alert("Error in data submission. Please try again later.")
      dispatch(addStudentDetailInit())
    }
    if(state.vaccDrive.updateStudentDetailsSuccess==true){
      dispatch(updateStudentDetailInit())
      dispatch(getStudentsDetails())
      setModalVisible(!modalVisible)
      onChangevaccineStatus("")
      onChangeDate("")
      onChangeVaccineName("")
      onChangestudentName("")
      Alert.alert("Student data edited successfully")
    }
    if(state.vaccDrive.updateStudentDetailsFailure==true){
      Alert.alert("Error in data updation. Please try again later.")
      dispatch(updateStudentDetailInit())
    }
  }, [state.vaccDrive])

  const handleAddStudent = () => {
    dispatch(addStudentDetail({
      "students": [studentName,date,vaccineStatus,vaccineName]
    }))
  }

  const handleEditStudent = () => {
    dispatch(updateStudentDetail({
      "student":  [date,vaccineStatus,vaccineName,studentName]
    }))
  }

  const handleModalOpen = (type, data) => {
    setmodalType(type)
    if(type=="add"){
      onChangevaccineStatus("")
      onChangeDate("")
      onChangeVaccineName("")
      onChangestudentName("")
    }
    if(type=="edit"){
      onChangevaccineStatus(data.isVaccinated)
      onChangeDate(data.vaccinationDate)
      onChangestudentName(data.name)
      onChangeVaccineName(data.vaccineName)
      onChangeDate(data.vaccinationDate)
    }
    setModalVisible(!modalVisible)
  }

  return (
    <ScrollView className={style["students-wrapper"]}>
      <Text className={style["testing-text"]}>Students List</Text>
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
        <TouchableOpacity className={style["cta-btn"]} title={"Add Student"} onPress={()=>{handleModalOpen("add")}}><Text className={style["cta-btn-text"]}>Add Student</Text></TouchableOpacity>
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
              <Text className={style["textbox-label"]}>Student Name:</Text>
              <TextInput className={style["input-textbox"]} onChangeText={onChangestudentName} value={studentName} />
              <Text className={style["textbox-label"]}>Vaccine Name:</Text>
              <TextInput className={style["input-textbox"]} onChangeText={onChangeVaccineName} value={vaccineName} />
              <Text className={style["textbox-label"]}>Vaccination Drive Date:</Text>
              <TextInput className={style["input-textbox"]} onChangeText={onChangeDate} value={date} />
              <Text className={style["textbox-label"]}>Vaccination Status:</Text>
              <TextInput className={style["input-textbox"]} onChangeText={onChangevaccineStatus} value={vaccineStatus} />
            </View>
            {
              modalType=="add"
              &&
              <Pressable style={[styles.button, styles.buttonClose]} onPress={() => handleAddStudent()}>
                <Text style={styles.textStyle}>Submit Data</Text>
              </Pressable>
            }
            {
              modalType=="edit"
              &&
              <Pressable style={[styles.button, styles.buttonClose]} onPress={() => handleEditStudent()}>
                <Text style={styles.textStyle}>Edit Data</Text>
              </Pressable>
            }
          </View>
        </View>
      </Modal>
      </ScrollView>
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