import React,{useState} from 'react'
import { SafeAreaView,ScrollView ,StyleSheet,View,Text,StatusBar, TouchableOpacity,TextInput} from 'react-native'
import Appbar from '../components/Appbar';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
const FDose=()=>{
    const [place, setPlace] = useState('');
    const [username, setusername] = useState('');
    return(
        <View style={styles.mainView}>
         <Appbar/>
         {/* <ScrollView> */}
          <View style={styles.mainView}>
              
              <View style={styles.container}>
                  <TouchableOpacity>
              <SimpleLineIcons
            style={styles.iconItem}
            name="user"
            size={80}
            color='white'
            />
            </TouchableOpacity>
            <View style={{flexDirection:'row'}}>
          <Text style={styles.txt}>Name         :</Text>
          <TextInput
                 style={styles.txtInput}
                 placeholder=" Name"
                 placeholderTextColor="grey"
                 underlineColorAndroid="transparent"
            
                 onChangeText={name => setusername(name)}></TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.txt}>vaccinated:</Text>
          <TextInput
                 style={styles.txtInput}
                 placeholder=" 1st Dose"
                 placeholderTextColor="black"
                 underlineColorAndroid="transparent"
            
                 onChangeText={name => setusername(name)}></TextInput>

          </View>
         
              </View>
              <View style={styles.container1}>
             <TouchableOpacity>
              <AntDesign
            style={styles.iconItem2}
            name="qrcode"
            size={50}
            color='white'
             />
             </TouchableOpacity>
               <Text style={styles.txt1}>Immune by first dose</Text>
               <Text style={styles.txt1}>Last Update:Wed 19 May,04:28PM</Text>
               <TouchableOpacity>
               <Foundation
            style={styles.iconItem1}
            name="refresh"
            size={20}
            color='white'
             />
              </TouchableOpacity>
              
              </View>
              <View style={styles.container2}>
<Text style={{fontSize:14,fontWeight:'bold',textAlign:'center',padding:4}}>Immune by first dose until 02/11/2021</Text>
              </View>
             
             <View style={styles.container3}>
            
             <TextInput
             style={styles.textInput}
                 placeholder="From"
                 placeholderTextColor="black"
                 underlineColorAndroid="transparent"
                  onChangeText={name => setPlace(name)}>
                </TextInput>
                <TextInput
             style={styles.textInput1}
                 placeholder="To"
                 placeholderTextColor="black"
                 underlineColorAndroid="transparent"
                  onChangeText={place=> setPlace(place)}>
                </TextInput>
             </View>
             <View>
             <TouchableOpacity style={styles.button}
             
         onPress={() => navigation.navigate('')}>
            <Text
              style={styles.buttonTxt}>
              Detail
            </Text>
          </TouchableOpacity>
             </View>
              </View>   
              {/* </ScrollView> */}
        </View>
    );
}
export default FDose;
const styles=StyleSheet.create({
    mainView:{
        display:'flex',
        flex:1,
        backgroundColor:'white'
    },
    container:{
        backgroundColor:'#90ee90',
        height:'70%',
        bottom:'75%',
        width:'80%',
        left:'10%',
        right:'10%',
        flexDirection:'column'
    },
    iconItem:{
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        top:'10%'
    },
    txt:{
        fontWeight:'bold',
        fontSize:18,
        left:'10%',
        top:'2%',marginTop: StatusBar.currentHeight || 0,
         color:'white',
         
    },
    txtInput: {
         top:'10%',
         left:'30%',
         width: '60%',
         height: 40,
         elevation: 0,
         borderRadius: 2,
         //borderWidth: 1,
         //borderColor: 'black',
         //alignSelf:'center',
         //alignItems:'center'
       },
    container1:{
        backgroundColor:'#90ee90',
        height:'20%',
        bottom:'70%',
        width:'80%',
        left:'10%',
        right:'10%',
       // flexDirection:'row',
        borderWidth:1,
        borderTopRightRadius:7,
        borderTopLeftRadius:7
    },
    txt1:{
       color:'white',
       left:'21%',
      bottom:'80%'
       //marginTop: StatusBar.currentHeight || 1, 
    },
    iconItem1:{
       left:'93%' ,
       bottom:89
    },
    iconItem2:{
        padding:8
    },
    container2:{
        backgroundColor:'white',
        height:'10%',
        bottom:'70%',
        width:'80%',
        left:'10%',
        right:'10%',
        borderWidth:1,
        borderBottomRightRadius:7,
        borderBottomLeftRadius:7
    },
    container3:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
text:{
    color:'black',
    bottom:'40%',
    left:'90%'
},
textInput:{
    bottom:'60%',
    height:'20%',
    width:'30%',
    borderWidth:1,
    alignSelf:'center',
    left:'20%'

},
textInput1:{
    bottom:'60%',
    height:'20%',
    width:'30%',
    borderWidth:1,
    alignSelf:'center',
    right:'10%'

},
button:{
   bottom: '94%',
    left: '24%',
    width: 100,
    height: 40,
    alignSelf:'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor:'red',
  },
  buttonTxt:{
    color: 'white',
    fontWeight: 'bold',
    top:8,
    fontSize: 16,
    alignItems: 'center',
    textAlign: 'center',
  },
})