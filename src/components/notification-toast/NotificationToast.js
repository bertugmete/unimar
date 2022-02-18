import { toast } from "react-toastify";
import Constants from "./helper"

export const notificationToast = (type, text) => {
  const data = {
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  };
  if (type === Constants.ERROR) {
    return toast.error(text, {
      ...data
    });
  }
  if (type === Constants.SUCCESS) {
    return toast.success(text, {
      ...data
    });
  }
  if (type === Constants.INFO) {
    return toast.info(text, {
      ...data
    });
  }
};
