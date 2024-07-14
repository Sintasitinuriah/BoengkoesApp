import React from "react";
import "../buttonchat.css";

const ButtonChat = () => {
  const handleChatClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=6282133395550&text=%20Mau%20Order%20Lamonde%20Dong%20Min",
      "_blank"
    );
  };

  return (
    <button className="button-chat" onClick={handleChatClick}>
      Chat Sekarang
    </button>
  );
};

export default ButtonChat;
