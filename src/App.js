import React from "react";
import './App.css';
import './chatbot.css';
import Chatbot from 'react-chatbot-kit';

import MessageParser from './chatbot/MessageParser';
import ActionProvider from './chatbot/ActionProvider';
import Config from './chatbot/config';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';


function App() {
  return (
    <div className="App">


     

      <IconButton>
        <ForumIcon fontSize="large" className="chat__Button" data-bs-toggle="modal" data-bs-target="#exampleModal" />
      </IconButton>


      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" style={{ left: "380px", bottom:"-10px", maxheight: "200px" }}>
          <div className="modal-content" style={{ width: "280px" }}>
         

            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ position: "relative", left: "240px", padding: "10px" }}></button>
         

            <div style={{ maxwidth: "300px" }}>

              <Chatbot
                config={Config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />


            </div>

          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
