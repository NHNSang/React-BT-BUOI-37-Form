import * as Yup from 'yup'
export const validateUser = Yup.object({
    maSv: Yup.string().required("Vui lòng không bỏ trống id"),
    hoTen: Yup.string().required("Vui lòng nhập họ tên"),
    soDienThoai: Yup.string().matches( /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
    "Vui lòng nhập đúng định dạng sdt").required("Vui lòng không bỏ trống"),
    email: Yup.string().email('Vui lòng nhập đúng định dạng email').required("Vui lòng không bỏ trống"),
})