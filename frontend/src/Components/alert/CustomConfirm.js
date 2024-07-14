import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import CSS
import toastr from 'toastr';

const CustomConfirm = (title, message, onConfirm) => {
  confirmAlert({
    title: title, // Use custom title
    message: message,
    buttons: [
      {
        label: 'Ya',
        onClick: onConfirm
      },
      {
        label: 'Tidak',
        onClick: () => toastr.info('Logout dibatalkan')
      }
    ]
  });
};

export default CustomConfirm;
