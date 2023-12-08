import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrSinhVien: [],
    showError: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getValueUser: (state,action)=>{
        console.log(state)
        console.log(action)
        const user = state.arrSinhVien.find((item)=>{
            return item.id == action.payload.id;
        });
        if(!user){
            state.arrSinhVien.push(action.payload);
            state.showError = '';
        }else{
            state.showError= "Đã có mã id vui lòng tạo mã id mới"
        }
    },
    removeUser: (state,action)=>{
        const index = state.arrSinhVien.findIndex((item)=>{
            return item.id == action.payload
        });
        if(index != -1){
            state.arrSinhVien.splice(index,1)
        }
    },
    updateUser: (state, action) => {
        const index = state.arrSinhVien.findIndex((item) => {
          return item.id == action.payload.id;
        });
        if (index != -1) {
          state.arrSinhVien[index] = action.payload;
        }
      },
  }
});

export const {getValueUser,removeUser,updateUser} = userSlice.actions

export default userSlice.reducer