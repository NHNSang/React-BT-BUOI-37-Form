import React from "react";
import { useFormik } from "formik";
import { validateUser } from "../util/validation";
import{useDispatch, useSelector} from "react-redux"
import Table from "./Table";
import {getValueUser, updateUser} from './../redux/slice/userSlice'
const Form = () => {
  // maSv, hoTen, soDienThoai, email
  const {showError} = useSelector((state)=>state.userSlice);
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      maSv: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
    onSubmit: (values,{resetForm}) => {
      console.log(values);
      dispatch(getValueUser(values))
      resetForm()
    },
    validationSchema: validateUser,
  });

  const { handleChange , handleBlur, handleSubmit, values, errors, touched , setValues , resetForm} = formik
  return (
    <div className="container">
      <h1 className="text-center py-3">Bài tập React Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="form-group col-6">
          <label htmlFor="maSv">Mã sinh viên</label>
          <input
            type="number"
            name="maSv"
            className="form-control"
            id="maSv"
            aria-describedby="emailHelp"
            placeholder="Nhập mã sinh viên"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.maSv}
          />
          {errors.maSv && touched.maSv ? (<p className="text-danger">{errors.maSv}</p>) : null}
        </div>
        <div className="form-group col-6">
          <label htmlFor="hoTen">Họ và tên</label>
          <input
            type="text"
            name="hoTen"
            className="form-control"
            id="hoTen"
            aria-describedby="emailHelp"
            placeholder="Nhập họ và tên"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.hoTen}
          />
          {errors.hoTen && touched.hoTen ? (<p className="text-danger">{errors.hoTen}</p>) : null}

        </div>
        <div className="form-group col-6">
          <label htmlFor="soDienThoai">Số điện thoại</label>
          <input
            type="number"
            name="soDienThoai"
            className="form-control"
            id="soDienThoai"
            aria-describedby="emailHelp"
            placeholder="Nhập số điện thoại"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.soDienThoai}
          />
          {errors.soDienThoai && touched.soDienThoai ? (<p className="text-danger">{errors.soDienThoai}</p>) : null}

        </div>
        <div className="form-group col-6">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Nhập email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email ? (<p className="text-danger">{errors.email}</p>) : null}
        </div>

        </div>
        <p className="text-danger">{showError}</p>
        <button type="submit" className="btn btn-primary my-3">
          Thêm sinh viên
        </button>
        <button
        onClick={()=>{
          dispatch(updateUser(values))
          resetForm()
        }}
         type="button" className="btn btn-success my-3 mx-3">
          Cập nhập sinh viên
        </button>
      </form>
      <div>
        <Table setValues={setValues}></Table>
      </div>
    </div>
   
  );
};

export default Form;
