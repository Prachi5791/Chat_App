import { ToastContainer } from "react-toastify";
// const { ToastContainer } = require("react-toastify");
import "react-toastify/dist/ReactToastify.css";


const Notification = () =>{
    return (
        <div className="">
            <ToastContainer position="bottom-right"/>
        </div>
    )
}

export default Notification