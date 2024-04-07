import { useState } from 'react';
import { makeRequest } from './api/api';
import { ChatMessage } from './components/ChatMessage/ChatMessage';
import { SideMenu } from './components/SideMenu/SideMenu';
import './styles/App.css';
import './styles/reset.css';

function App() {
  const [input, setInput] = useState([""]);
  const [chatlog, setChatlog] = useState([
    {
      user: 'gpt',
      message: 'Olá!'
    }
  ]);

  async function handleSubmit(e) {
    e.preventDefault()
    let response = await makeRequest({prompt: input})

    response = response.data.split('\n').map(line => <p>{line}</p>)

    setChatlog([
      ...chatlog, {
        user: 'me',
        message: `${input}`
      },
      { user: 'gpt',
        message: response
      }
    ])

    setInput('')
  }

  return (
    <div className="App">
      <SideMenu />
       <section className='chatbox'>
        <div  className='chat-log'>
          {chatlog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <div className='chat-input-holder'>
          <form onSubmit={handleSubmit}>
            <input className='chat-input-textarea' rows='1' type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="digite sua mensagem" />
          </form>
        </div>
       </section>
    </div>
  );
}

export default App;
