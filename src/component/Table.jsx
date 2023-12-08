import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice/userSlice";

const Table = ({setValues}) => {
  const { arrSinhVien } = useSelector((state) => {
    console.log(state); 
    return state.userSlice;
  });
  const dispatch = useDispatch()
  return (
    <div>
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">Mã sinh viên</th>
            <th scope="col">Tên</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Email</th>
            <th scope="col">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>  
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
                <button className="btn btn-danger mx-2">Xoá</button>
                <button className="btn btn-warning mx-2">Sửa</button>
            </td>
          </tr> */}
          {arrSinhVien.map((item,index)=>{
            return (
                <tr key={index}>
                    <th scope="row">{item.maSv}</th>
                    <td>{item.hoTen}</td>
                    <td>{item.soDienThoai}</td>
                    <td>{item.email}</td>
                    <td>
                        <button
                        onClick={()=>{
                        dispatch(removeUser(item.id))
                        }}
                         className="btn btn-danger mx-2">Xoá</button>
                        <button 
                        onClick={()=>{
                            setValues(item)
                        }}
                         className="btn btn-warning mx-2">Sửa</button>
                    </td>
                </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
