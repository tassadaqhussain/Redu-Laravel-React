import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import ProductReducer from './poducts';
import ShopReducer from './shops';
import PruductJson from '../components/ProductJson';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    users: UserReducer,
    products:ProductReducer,
    productJson:PruductJson,
    activeUser: ActiveUserReducer,
    shops:ShopReducer

});

export default allReducers
