import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Action from '../pages/Action';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Maps from '../pages/MAPS';
import Menu from '../pages/Menu';
import Profile from '../pages/Profile';
import SplashScreen from '../pages/SplashScreen';
import AddAction from '../pages/Action/add';
import EditAction from '../pages/Action/edit';
import ViewAction from '../pages/Tickets/Action/view';
import StaffAction from '../pages/Tickets/Staff';
import AddStaffAction from '../pages/Tickets/Staff/add';
import EditStaffAction from '../pages/Tickets/Staff/edit';
import ViewStaffAction from '../pages/Tickets/Staff/view';
import Ticket from '../pages/Tickets/Ticket';
import AddTicket from '../pages/Tickets/Ticket/add';
import EditTicket from '../pages/Tickets/Ticket/edit';
import ViewTicket from '../pages/Tickets/Ticket/view';
import Staff from '../pages/Staff';
import AddStaff from '../pages/Staff/add';
import EditStaff from '../pages/Staff/edit';
import ShowAction  from '../pages/Action/show';


const Stack = createStackNavigator();
const Router = () =>{
    return(
        <Stack.Navigator initialRoutName="SplashScreen">
            <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="Menu"
            component={Menu}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="Ticket"
            component={Ticket}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="ViewTicket"
            component={ViewTicket}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="EditTicket"
            component={EditTicket}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="AddTicket"
            component={AddTicket}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="Action"
            component={Action}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="ViewAction"
            component={ViewAction}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="AddAction"
            component={AddAction}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="EditAction"
            component={EditAction}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="StaffAction"
            component={StaffAction}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="ViewStaffAction"
            component={ViewStaffAction}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="AddStaffAction"
            component={AddStaffAction}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="EditStaffAction"
            component={EditStaffAction}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="Maps"
            component={Maps}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="Staff"
            component={Staff}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="AddStaff"
            component={AddStaff}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="EditStaff"
            component={EditStaff}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="ShowAction"
            component={ShowAction}
            options={{headerShown:false}}
            />
        </Stack.Navigator>
        )
    }
    export default Router