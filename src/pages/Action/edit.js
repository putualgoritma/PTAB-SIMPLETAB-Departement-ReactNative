import React, { useEffect, useState } from 'react'
import {View,ImageBackground,StyleSheet,ScrollView} from 'react-native'
import {HeaderInput,Footer,Title,Txt,Btn,TxtArea,Searchable, Spinner} from '../../component'
import { Distance } from '../../utils';
import API from '../../service';
import { useSelector } from 'react-redux';
import Select2 from 'react-native-select-two';


const EditAction =({navigation, route})=>{
    const image = require('../../assets/img/BackgroundInput.png')
    const TOKEN = useSelector((state) => state.TokenReducer);
    const [loading, setLoading] = useState(false)
    const [dapertement, setDapertement] = useState(null)

    const [form, setForm] = useState({
        description : route.params.action.description,
        action_id : route.params.action.id
    })

    const handleForm = (key, value) => {
        setForm({
            ...form, 
            [key] : value
        })
    }

    const handleAction = () => {
        if(form.description !== '' && form.dapertement_id !== ''){
            setLoading(true)
            API.actionUpdate(form, TOKEN).then(result => {
                if(result.message.constructor === Array){
                    alert( result.message.toString())
                }else{
                    alert(result.message)
                    navigation.navigate('Action')
                }
                setLoading(false)
                console.log('hasl result',result);
            }) .catch((e) => {
                console.log('error 1 ',e.request);
                setLoading(false)
            })
        }else{
            alert('mohon lengkapi data terlebih dahulu')
        }
    }


    return(
        <View style={styles.container}>
            {loading && <Spinner/>}
            <ImageBackground source={image} style={styles.image}>
                {/* <ScrollView keyboardShouldPersistTaps = 'always'> */}
                    <HeaderInput/>
                    <View style={{alignItems:'center', flex : 1}}>
                        <View style={{width:'90%'}}>
                            <View style={styles.baseBoxShadow} >
                                <View style={styles.boxShadow} >
                                    <Title title='Edit Tindakan' paddingVertical={5}/>
                                    <Txt title='Deskripsi'/>
                                    <TxtArea placeholder='Masukan Deskripsi' onChangeText={item => handleForm('description', item)} value={form.description}/>
                                    <View style={{alignItems:'center'}}>
                                        <Distance distanceV={10}/>
                                        <Btn title='Simpan' onPress={handleAction}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                {/* </ScrollView> */}
            </ImageBackground>
                <Footer navigation={navigation} focus='Home'/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    baseBoxShadow : {
        alignItems : 'center',
        paddingVertical : 20,
    },
    boxShadow : {
        backgroundColor : '#ffffff',
        width : '100%',
        paddingHorizontal:20,
        paddingVertical : 30,
        borderRadius:10,
        backgroundColor:'#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 3,
    }
})

export default EditAction