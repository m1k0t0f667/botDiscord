import React, { useState } from 'react';
import { question, close,sent} from './import';
import "./chat.css"
import MessagePage from "../messages/Message";
import { OpenAIApi,Configuration } from 'openai';

const ChatPage=(props)=>{
  const [toggle,setToggle]=useState(false)

  const configuration = new Configuration({
    apiKey: process.env.API_KEY,
  });
  const chatGPT = new OpenAIApi(configuration);
  const [logMessage, setLogMessage]=useState([{ //  Explain things like you're talking to a software professional with 5 years of experience.
    "role": "system", "content": `Ce site est sur l'intelligence artificielle Chat GTP. Il a été publié le 1/02/2024 et confectionner par Pablo Picasso.`
  }])
  const [currentM, setCurrentM] = useState("")

  const askQuestion = async () => {
    setLogMessage((old) => [...old, {
      role: 'user',
      content: currentM
    }])
    setCurrentM('')
    
    const result= await chatGPT
    .createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [...logMessage, { // useEffect => Async
        role: 'user',
        content: currentM
      }],
      max_tokens: 100, // limit token usage
    })
    .catch((error) => {
      console.log(`OPENAI ERR: ${error.message}`);
    });
    setLogMessage((old)=>[...old, result.data.choices[0].message]);
  }

  return (
  <div className='ChatBot'>
    {!toggle
    ?<div className='ButtonChatBot'>
      <button className='Open' onClick={(e)=>setToggle(!toggle)}><img src={question} alt="question Mark" /></button>
    </div>
    :<div className='ChatBotActive'>
      <div className='ChatBotHeader'>
        <h1>Your Assistant</h1>
        <button className='Close' onClick={(e)=>setToggle(!toggle)}><img src={close} alt="Close button" /></button>
      </div>
      <div className='Messages'>
        {logMessage?.map((message,index)=> index !== 0 &&
        <div key={index} className={message.role}><MessagePage message={message.content}></MessagePage></div>
        )}
      </div>
      <div className='ChatBotFooter'>
          <textarea placeholder='Une question ?' value={currentM} onChange={(e)=>{setCurrentM(e.target.value)}}></textarea>
          <button className='Close' onClick={askQuestion}><img src={sent} alt="Send a question" /></button>
      </div>
    </div>
    }
    
  </div>)
}

export default ChatPage
