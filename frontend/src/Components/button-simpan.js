import React from 'react';
import '../button-simpan.css'; // Pastikan path ini sesuai dengan lokasi file CSS Anda

const ButtonSimpan = ({ onClick, children }) => {
  return (
    <div className="button-simpan">
      <button type="button" onClick={onClick}>
        {children || 'Simpan'}
      </button>
    </div>
  );
};

export default ButtonSimpan;
