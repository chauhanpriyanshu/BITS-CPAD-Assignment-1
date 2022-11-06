import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { PureComponent, useEffect } from 'react'
import styles from './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, loginUserInit } from './../../store/auth/actions';

function SignIn(props) {
  const dispatch = useDispatch();
  const state = useSelector(state=>{
    return {auth : state.Auth}
  })
  const [text, onChangeText] = React.useState("");
  const [password, onChangePassword] = React.useState("");


  const handleLoginUser = () => {
    dispatch(loginUser({
      "userdetail":[text,password]
    }))
  }

  useEffect(() => {
    if(state.auth.loginUserSuccess==true){
      dispatch(loginUserInit())
      props.route.params.setisSignedIn(true)
    }
    if(state.auth.loginUserFailure==true){
      dispatch(loginUserInit())
    }
  }, [state.auth])

  return (
    <View className={styles["sign-in-wrapper"]}>
        <Text className={styles["heading-text"]}>SCHOOL VACCINATION TRACKER</Text>
        <View className={styles["form-wrapper"]}>
            <View className={styles["form-input-wrapper"]}>
                <Text className={styles["textbox-label"]}>Username:</Text>
                <TextInput className={styles["input-textbox"]} onChangeText={onChangeText} value={text} />
                <Text className={styles["textbox-label"]}>Password:</Text>
                <TextInput secureTextEntry className={styles["input-textbox"]} onChangeText={onChangePassword} value={password} />
            </View>
            <TouchableOpacity className={styles["login-btn"]} title={"Login"} onPress={()=>{handleLoginUser()}}><Text className={styles["login-btn-text"]}>Login</Text></TouchableOpacity>
        </View>
    </View>
  )
}

export default SignIn