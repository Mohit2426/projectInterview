import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../redux/reducers/loginReducer';


export default configureStore({
  reducer: {
    loginReducer: loginReducer,
  },
})