import Swal from "sweetalert2";

const Alert = (title, icon) => {
  Swal.fire({
    position: "top",
    className: "alert",
    icon: icon,
    width: 400,
    title: title,
    showConfirmButton: false,
    timer: 3000,
    toast: true,
  });
};

export default Alert;
