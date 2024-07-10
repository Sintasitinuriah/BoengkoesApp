import React, { useState } from 'react';
import '../HelpCenter.css';

const HelpCenter = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');
      // Simulate a response from support
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { sender: 'support', text: 'Terima kasih atas pesan Anda. Kami akan segera merespon.' }
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chat">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ketik pesan Anda..."
        />
        <button onClick={sendMessage}>Kirim</button>
      </div>
    </div>
  );
};

export default HelpCenter;
