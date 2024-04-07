import React from 'react';
import Avatar from '../../assets/avatar';
import './ChatMessage.css';

export const ChatMessage = ({ message }) => {
 return (
 <div className={`chat-message ${message.user === 'gpt' && 'chat-gpt'}`}>

  <div className='chat-message-center'>
 <div className={`avatar ${message.user === 'gpt' && 'chat-gpt'}`}>
 {message.user === 'gpt' && (
  <Avatar />
 )}
 </div>

  </div>

  <div className='message'>
   {message.message}

  </div>
 </div>
 )
}