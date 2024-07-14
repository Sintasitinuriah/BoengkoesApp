import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

const AlertifyConfirm = (title, message, onConfirm) => {
  alertify.confirm(
    title, 
    message, 
    onConfirm, 
    () => {
      alertify.error('Logout dibatalkan');
    }
  );
};

export default AlertifyConfirm;
