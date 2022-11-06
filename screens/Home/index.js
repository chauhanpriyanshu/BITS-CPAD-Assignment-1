import { Button, Image, Text, TouchableOpacity, View } from 'react-native'
import { connect, useDispatch, useSelector } from 'react-redux';
import React, { PureComponent, useState } from 'react'
import style from './styles.scss';
import { useEffect } from 'react';
import { getAnalyticsData, getAnalyticsDataInit } from '../../store/drive/actions';

export default function Home(props) {
  const dispatch = useDispatch();
  const state = useSelector(state=>{
    return {vaccDrive : state.VaccDrive}
  })

  const [analytics, setanalytics] = useState(undefined)

  useEffect(() => {
    dispatch(getAnalyticsData())
  }, [])

  // useEffect(() => {
  //   console.log(state.vaccDrive.analyticsData)
  // }, [state.vaccDrive])
  
  
  useEffect(() => {
    if(state.vaccDrive.getAnalyticsSuccess==true){
      setanalytics(state.vaccDrive.analyticsData)
      dispatch(getAnalyticsDataInit())
    }
    if(state.vaccDrive.getAnalyticsFailure==true){
      dispatch(getAnalyticsDataInit())
    }
  }, [state.vaccDrive])

  return (
    <View className={style["home-wrapper"]}>
      <Text className={style["testing-text"]}>School Vaccination Tracker</Text>
      {
        !!analytics
        &&
        <View className={style["analytics-cards-wrapper"]}>
          <View className={style["analytics-card"]}>
            <Image className={style["graphic"]} source={require('../../assets/students.png')} />
            <Text className={style["title"]}>Total Students</Text>
            <Text className={style["counter"]}>{analytics.totalStudents}</Text>
          </View>
          <View className={style["analytics-card"]}>
            <Image className={style["graphic"]} source={require('../../assets/students-checked.png')} />
            <Text className={style["title"]}>Vaccinated</Text>
            <Text className={style["counter"]}>{analytics.totalVaccinated}</Text>
          </View>
          <View className={style["analytics-card"]}>
            <Image className={style["graphic"]} source={require('../../assets/students-not-checked.png')} />
            <Text className={style["title"]}>Not Vaccinated</Text>
            <Text className={style["counter"]}>{analytics.totalNotVaccinated}</Text>
          </View>
        </View>
      }
      <View className={style["cta-wrapper"]}>
        <TouchableOpacity className={style["cta-btn"]} title={"Add Student"} onPress={() => props.navigation.navigate('View Drives')}>
          <Image className={style["graphic-small"]} source={require('../../assets/clipboard.png')} />
          <Text className={style["cta-btn-text"]}>Drive Details</Text>
        </TouchableOpacity>
        <TouchableOpacity className={style["cta-btn"]} title={"Add Student"} onPress={() => props.navigation.navigate('View Students')}>
          <Image className={style["graphic-small"]} source={require('../../assets/student-outline.png')} />
          <Text className={style["cta-btn-text"]}>Student Details</Text>
        </TouchableOpacity>
        <TouchableOpacity className={style["cta-btn"]} title={"Add Student"} onPress={()=>{props.route.params.setisSignedIn(false)}}>
          <Image className={style["graphic-small"]} source={require('../../assets/exit.png')} />
          <Text className={style["cta-btn-text"]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}