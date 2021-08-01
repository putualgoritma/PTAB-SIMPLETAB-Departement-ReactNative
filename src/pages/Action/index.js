import { faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Col, Row, Rows, Table, TableWrapper } from 'react-native-table-component';
import { useSelector } from 'react-redux';
import { Btn, BtnAction, BtnAdd, BtnDelete, BtnDetail, BtnEdit, Dropdown, Footer, HeaderForm, Spinner, Title } from '../../component';
import API from '../../service';
import { Distance } from '../../utils';

const Aksi =(props) => {
    return (
        <View style ={{alignItems : 'center', justifyContent :'center', width:80}}>
            <View style={{flexDirection:'row'}}>
                <BtnAction onPress={() => props.navigation.navigate('Staff', {action_id : props.data.id})}/>
                <Distance distanceH={3}/>
                <BtnDetail onPress={() => props.navigation.navigate('ShowAction', {ticket_id : props.data.ticket_id})}/>
            </View>
            <View style={{flexDirection:'row'}}>
                <BtnEdit onPress={() => props.navigation.navigate('EditAction', {action : props.data})}/>
                <Distance distanceH={3}/>
                <BtnDelete onPress={props.delete}/>
            </View>
        </View>
    )
}

const Action = ({navigation}) => {
    const USER = useSelector((state) => state.UserReducer);
    const TOKEN = useSelector((state) => state.TokenReducer);
    const [actions, setActions] = useState()
    const [tableNo, setTableNo] = useState()
    const tableHead = ['NO', 'Deskripsi', 'Ticket', 'Aksi'];
    const [tableData, setTableData] = useState()
    const [loading, setLoading] = useState(true)
    const isFocused = useIsFocused();
    useEffect(() => {
        let isAmounted = true
        if(isAmounted){
            setLoading(true)
            actionsApi()
        }
    }, [isFocused])


    const actionsApi = () => {
        API.actions(TOKEN, USER.dapertement_id).then((result) =>{
            let data = []
            let no = []
            result.data.map((item, index) => {
                // console.log(Object.keys(result.data[index]));
                no[index] = index + 1;
                data[index] = [
                    item.description,
                    item.ticket.title,
                    [<Aksi 
                            key ={index}
                            data={item} 
                            navigation={navigation} 
                            delete={() => handleDelete(item.id)}
                        />],
                ]
            })
            // console.log(result.data);
            // console.log(data);
            setTableData(data)
            setTableNo(no)
            setLoading(false)
        }).catch((e) => {
            setLoading(false)
            console.log(e);
        })
    }

    const handleFilter = () => {
        alert('halo')
    }

     const handleDelete =($id) => {
        setLoading(true)
        API.actionsDelete($id, TOKEN).then((result) => {
            // console.log(result);
            alert(result.data.message)
            actionsApi();
            // setLoading(false)
        }).catch((e) => {
            console.log(e.request);
            setLoading(false)
        })
    }
    return (
        <View style={styles.container}>
            {loading && <Spinner/>}
                <HeaderForm/>
                <View style={{alignItems:'center', flex: 1}}>
                    <View style={{width:'90%'}}>
                        <Title title='Tindakan'/>
                        <Distance distanceV={10}/>
                        {/* <View style={{flexDirection:'row'}}>
                            <Dropdown
                                placeholder='Pilih Status'
                                width='60%'
                                data={[
                                        {label: 'Semua Status', value: ''},
                                        {label: 'Pending', value: 'pending'},
                                        {label: 'Active', value: 'active'},
                                        {label: 'Close', value: 'close'}
                                ]}
                                onChangeValue = {(item) => setStatus(item)}
                            />
                            <Distance distanceH={5}/>
                            <Btn 
                                title='Filter' 
                                width='35%'
                                icon={<FontAwesomeIcon icon={faSearch} style={{color:'#FFFFFF'}} size={ 27 }/>} 
                                onPress = {handleFilter}
                            />
                        </View> */}
                        <Distance distanceV={10}/>
                        {tableData &&  
                             <View style={{height : 'auto'}} >
                                <Table borderStyle={{borderWidth: 1, borderColor: '#E5E7E9'}}>
                                    <Row data={tableHead} flexArr={[1,2, 2, 2]} style={styles.head} textStyle={styles.text}/>
                                </Table>
             
                                {/*  table data */}
                                <ScrollView style={styles.dataWrapper}>
                                    <Table borderStyle={{borderWidth: 1, borderColor: '#E5E7E9'}}>
                                        <TableWrapper style={styles.wrapper}>
                                            <Col data={tableNo} style={styles.no} heightArr={[100]} textStyle={styles.text}/>
                                            <Rows data={tableData} flexArr={[2,2, 2]} style={styles.row} textStyle={styles.text}/>
                                        </TableWrapper>
                                    </Table>       
                                </ScrollView>
                            </View>
                        }
                    </View>
                </View>
            <Footer navigation={navigation} focus='Home'/>
       </View>
    )
}

export default Action

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
   
    head: {  height: 50,  backgroundColor: '#EAF4FA'  },
    wrapper: { flexDirection: 'row',},
    no: { flex: 1, backgroundColor: '#ffffff' },
    row: {  height: 100  },
    text: {  alignItems:'center', margin:6,paddingHorizontal:4},
    dataWrapper: { marginTop: -1 },
})
