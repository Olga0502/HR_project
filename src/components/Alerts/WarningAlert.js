import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import infocircle from '../../imgs/info-circle.png'
import { NavLink } from 'react-router-dom';

const WarningAlert = () => {
    return (
      <div>
        <Alert severity="warning" className="warning">
          <AlertTitle><strong>Вы уже откликнулись.</strong></AlertTitle>
          Для просмотра всех заявок перейдите на вкладку <NavLink to="/request">Мои заявки</NavLink>.
          {/* <img src={infocircle} className='info-circle'></img> */}
        </Alert>
      </div>);
  }
  
  export default WarningAlert;