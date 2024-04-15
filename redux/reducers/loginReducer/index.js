import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'loginReducer',
  initialState: {
    value: 0,
  },
  reducers: {
    loginSuccess: (state,action) => {
      console.log("🚀 ~ action:", action);
      state.name = action?.payload
    },
    groupDataSuccess:(state,action)=>{
        state.groupData=action?.payload
    },
    dataSet:(state,action)=>{
      state.dataforRender=action?.payload
  }
  },
})
export const {loginSuccess,groupDataSuccess,dataSet} = loginSlice.actions

export default loginSlice.reducer