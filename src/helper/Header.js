import React from "react";
import { StyleSheet, TouchableOpacity, View,Text } from 'react-native';
import Back from '../assest/svg/Back.svg';
import { StylesGloble } from "./GlobleCss";
import { useNavigation } from "@react-navigation/native";



const Header = (props) =>{
    const navigation = useNavigation();
    return(

     
            <View style={{flexDirection:"row",padding:20,alignItems:'center'}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Back />
            </TouchableOpacity>

            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <Text style={{...StylesGloble.font20700000000,}}>{props.name}</Text>
            </View>
  
        </View>

    )
}


const styles = StyleSheet.create({
   textstyle:{

   } 
})
export default Header;







