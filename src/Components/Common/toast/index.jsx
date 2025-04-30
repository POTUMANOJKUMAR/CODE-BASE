// utils/toast.js or wherever you prefer
import { toast } from "react-toastify";

export const showToast = ({
  type = "success",
  message = "",
  position = "top-right",
  duration = 3000,
}) => {
  toast(message, {
    type,              // 'success', 'error', 'info', 'warning'
    position,          // 'top-right', 'top-center', etc.
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
