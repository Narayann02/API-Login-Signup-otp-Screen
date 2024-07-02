// // import React from 'react';
// // import {StyleSheet, Text, TextInput, View} from 'react-native';
// // import {StylesGloble} from './GlobleCss';

// // const TextField = props => {
// //   const {
// //     label,
// //     errorText,
// //     value,
// //     style,
// //     type,
// //     onBlur,
// //     Placeholder,
// //     name,
// //     star,
// //     multiline,
// //     keypadtype,
// //     numberOfLines,
// //     onFocus,
// //     ...restOfProps
// //   } = props;
// //   return (
// //     <View>
// //       <Text style={{...styles.label}}>{name}</Text>

// //       <View style={{...styles.input,marginTop:10,}}>
// //         <TextInput
// //           placeholder={Placeholder}
// //           keyboardType={keypadtype}
// //           placeholderTextColor={'#5D5D5D'}
// //           style={{marginLeft:10,marginRight:10,fontSize:16,fontWeight:'500',color:'#5D5D5D'}}
// //         />
// //       </View>
// //     </View>
// //   );
// // };
// // const styles = StyleSheet.create({
// //   label: {
// //     color: '#242A37',
// //     fontSize: 14,
// //     fontWeight: '500',
// //   },
// //   input: {

// //     height:48,
// //     borderColor:'#5D5D5D',
// //     borderWidth:1,
// //     borderRadius:8,

// //   },
// // });

// // export default TextField;

// import React, {useEffect, useRef, useState} from 'react';
// import {
//   Text,
//   TextInput,
//   StyleSheet,
//   View,
//   Animated,
//   Easing,
//   Image,
//   TouchableWithoutFeedback,
// } from 'react-native';

// const Textfield = props => {
//   const {
//     label,
//     errorText,
//     value,
//     style,
//     type,
//     onBlur,
//     Placeholder,
//     name,
//     star,
//     multiline,
//     numberOfLines,
//     maxLength,
//     onFocus,
//     ...restOfProps
//   } = props;
//   const [isFocused, setIsFocused] = useState(false);
//   const inputRef = useRef(null);
//   const focusAnim = useRef(new Animated.Value(0)).current;
//   let securetext = false;
//   let keypadtype = 'default';
//   let multilineobj = false;

//   useEffect(() => {
//     Animated.timing(focusAnim, {
//       toValue: isFocused || !!value ? 1 : 0,
//       duration: 150,
//       easing: Easing.bezier(0.4, 0, 0.2, 1),
//       useNativeDriver: true,
//     }).start();
//   }, [focusAnim, isFocused, value]);

//   let color = '#B9C4CA';
//   if (errorText) {
//     color = '#B00020';
//   }

//   if (type == 'email') {
//     securetext = false;
//     keypadtype = 'email-address';
//     multilineobj = false;
//   } else if (type == 'phone') {
//     securetext = false;
//     keypadtype = 'phone-pad';
//     multilineobj = false;
//   } else if (type == 'number') {
//     securetext = false;
//     keypadtype = 'numeric';
//     multilineobj = false;
//   } else if (type == 'password') {
//     securetext = true;
//     keypadtype = 'default';
//     multilineobj = false;
//   } else {
//     securetext = false;
//     keypadtype = 'default';
//     multilineobj = false;
//   }

//   const checkvalue = text => {
//     if (text == '') {
//       return false;
//     } else if (text == null) {
//       return false;
//     } else if (text == undefined) {
//       return false;
//     } else {
//       return true;
//     }
//   };

//   return (
//     <View style={{position: 'relative'}}>
//       <Text style={styles.label}>{name}</Text>

//       <TextInput
//         style={styles.input2}
//         ref={inputRef}
//         multiline={multiline}
//         keyboardType={keypadtype}
//         placeholder={Placeholder}
//         placeholderTextColor="#B0B0B0"
//         type={type}
//         {...restOfProps}
//         secureTextEntry={securetext}
//         value={value}
//         onBlur={event => {
//           setIsFocused(false);
//           onBlur?.(event);
//         }}
//         maxLength={maxLength}
//         onFocus={event => {
//           setIsFocused(true);
//           onFocus?.(event);
//         }}
//         numberOfLines={numberOfLines}
//       />

//       {!!errorText && <Text style={styles.error}>{errorText}</Text>}
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   input2: {
//     padding: 10,
//     borderRadius: 8,
//     fontSize: 16,
//     fontWeight: '400',
//     color: '#5D5D5D',

//     paddingLeft: 15,
//     borderWidth: 1,
//     borderColor: '#5D5D5D',
//     height: 50,
//     marginTop: 2,
//   },
//   labelContainer: {
//     position: 'absolute',

//     top: -10,
//     left: -15,
//   },
//   borderview: {
//     borderColor: '#9846D7',
//     borderWidth: 1,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: '500',
//     marginBottom: 8,
//     color: '#242A37',
//   },
//   error: {
//     marginTop: 4,
//     marginLeft: 12,
//     fontSize: 16,
//     color: '#B00020',
//     fontFamily: 'Poppins-Regular',
//   },
//   newlable: {
//     zIndex: 999,
//     position: 'absolute',
//     top: 16,
//     left: 14,
//   },
// });

// export default Textfield;









//etra
import React, { useEffect, useRef, useState } from 'react'
import { Text,TextInput,StyleSheet,View,Animated,Easing,Image, TouchableWithoutFeedback} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';



const TextField = (props) => {
    const { label,errorText, value,style,type, onBlur,Placeholder,name,star,maxLength,multiline,numberOfLines,editable, onFocus,...restOfProps} = props
    const [isFocused, setIsFocused] = useState(false)
    const inputRef = useRef(null)
    const focusAnim = useRef(new Animated.Value(0)).current
    let securetext = false;
    let keypadtype='default';
    let multilineobj = true;

    useEffect(() => {
        Animated.timing(focusAnim, {
            toValue: isFocused || !!value ? 1 : 0,
            duration: 150,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
            useNativeDriver: true,
        }).start()
    }, [focusAnim, isFocused, value])

    let color =  '#B9C4CA'
    if (errorText) {
        color = '#B00020'
    }


    if (type=='email') {
        securetext = false;
        keypadtype='email-address';
        multilineobj = false;
    }
    else if (type=='phone') {
        securetext = false;
        keypadtype='phone-pad';
        multilineobj = false;
    }
    else if (type=='number') {
        securetext = false;
        keypadtype='numeric';
        multilineobj = false;
    }
    else if (type=='password') {
        securetext = true;
        keypadtype='default';
        multilineobj = false;
    }
    else{
        securetext = false;
        keypadtype='default';
        multilineobj = true;
    }

    const checkvalue = (text)=>{
        if(text==''){
            return false;
        } else if(text==null){
            return false;
        } else if(text==undefined){
            return false;
        }else{
            return true;
        }
    }
    
   
    
    return (
        <View style={{position:"relative"}}>
            <Text style={styles.label}>{name} <Text style={{color:"#FF6A6A"}}>{star}</Text></Text>
            <TextInput
                style={[checkvalue(value)==true?styles.input2 :styles.input]}
                ref={inputRef}
                multiline={multiline}
                keyboardType={keypadtype}
                placeholder={Placeholder}
                placeholderTextColor="#5D5D5D"
                
            
                type={type}
                {...restOfProps}
                secureTextEntry={securetext}
                value={value}
                onBlur={(event) => {
                    setIsFocused(false)
                    onBlur?.(event)
                }}
                onFocus={(event) => {
                    setIsFocused(true)
                    onFocus?.(event)
                }}
                numberOfLines={numberOfLines}
                maxLength={maxLength}
                editable={editable}
            />
           
            {!!errorText && <Text style={styles.error}>{errorText}</Text>}
        </View>
    )
}
const styles = StyleSheet.create({
    input2:{
        padding:10,
        backgroundColor:"#ffffff",
        borderColor:"#9846D7",
        borderWidth:1,
        borderRadius: 10,
        fontSize: 16,
        color:"#000000"
    },
    input: {
        padding:10,
        backgroundColor:"#ffffff",
        borderColor:"#5D5D5D",
        borderWidth:1,
        borderRadius: 10,
        fontSize: 14,
        fontWeight:'500',
        color:"#5D5D5D"
    },
    labelContainer: {
        position: 'absolute',
      
        top:-10,
        left:-15

    },
    borderview:{
        borderColor:"#CC0076",
        borderWidth:1,
    },
    label: {
        fontSize: 14,
        fontWeight:'500',
        marginBottom:10,
        color:"#242A37"
    },
    error: {
        marginTop: 4,
        marginLeft: 12,
        fontSize: 12,
        color: '#B00020',
        fontFamily:'Poppins-Regular',
    },
    newlable:{
        zIndex:999,
        position:'absolute',
        top:16,
        left:14
    },
})

export default TextField;
