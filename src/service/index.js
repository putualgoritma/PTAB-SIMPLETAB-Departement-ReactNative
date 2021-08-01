import Config from 'react-native-config';
import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';

// GET
const actions = (token, id) => Get('/api/close/dapertement/actions/list/' + id, false, token)
const dapertements =(token) => Get('/api/close/admin/dapertements', false, token)
const tickets =(token) => Get('/api/close/admin/tickets', false, token)
const actionStaffs =(data, token) => Get(`/api/close/admin/actionStaffs/${data}`, false, token)
const actionStaffLists =(data, token) => Get(`/api/close/admin/actionStaffLists/${data}`, false, token)
const actionTicket =(data, token) => Get(`/api/close/dapertement/actions/ticket/${data}`, false, token)
//POST
const login = (data) => Post('/api/open/admin/login', false, data);
const actionsStaffStore = (data, token) => Post('/api/close/admin/actionStaffStore', false, data, token);
//PUT
const actionUpdate = (data, token) => Put('/api/close/dapertement/actions/edit', false, data, token);
const actionStaffUpdate = (data, token) => Put(`/api/close/admin/actionStaffUpdate`, false, data, token);

// delete
const actionsDelete = (id, token) => Delete(`/api/close/admin/actions/${id}`, false, token);
const actionStaffDestroy = (data, token) => Delete(`/api/close/admin/actionStaffDestroy/${data.action_id}/${data.staff_id}`, false, token);
const API = {
     login,
     actions,
     dapertements,
     tickets,
     actionUpdate,
     actionStaffs,
     actionStaffLists,
     actionsStaffStore,
     actionStaffUpdate,
     actionStaffDestroy,
     actionTicket,
     actionsDelete
}

export default API;