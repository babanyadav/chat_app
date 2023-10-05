import React , {useState} from 'react'
import styled from "styled-components";
import Picker from "emoji-picker-react"
import { IoMdSend } from "react-icons/io"
import { BsEmojiSmileFill } from "react-icons/bs"



export default function ChatInput({handleSendMessage}) {
    const [showEmojiPicker,setShowEmojiPicker]=useState(false);
    const [msg,setMsg]=useState('');

    const handleEmojiPickerHideShow = () =>{
        setShowEmojiPicker(!showEmojiPicker);
    }

    const handleEmojiClick = (emoji,event) =>{
        let message=msg;
        message +=emoji.emoji;
        setMsg(message);
    }

    const sendChat = (event) =>{
        event.preventDefault();
        if(msg.length>0){
            handleSendMessage(msg);
            setMsg("");
        }
    }


  return (
    <Container>
        <div className="button-container">
            <div className="emoji">
                <BsEmojiSmileFill  onClick={handleEmojiPickerHideShow} />
                {
                    showEmojiPicker && 

                    <Picker  
                    onEmojiClick={handleEmojiClick} 
                    searchDisabled={true}
                    height={300}
                    width={250}
                    />
                }
                
            </div>
        </div>
        <form className="input-container" onSubmit={(e) => sendChat(e)}>
            <input type="text" placeholder="Type Your Message Here" 
            spellCkeck={false}
            value={msg} 
            onChange={e => setMsg(e.target.value) } />
            <button className='submit'>
                <IoMdSend />
            </button>
        </form>
    </Container>
  )
}

const Container = styled.div`
display:grid;
grid-template-columns:5% 95%;
align-items:center;
background-color:#080420;
padding:0.2rem;
padding-bottom:0.3rem;
.button-container{
    display:flex;
    align-items:center;
    color:white;
    gap:1rem;

    .emoji{
        position:relative;
        svg{
            font-size:1.5rem;
            color:#ffff00c8;
            cursor:pointer;
        }
        .EmojiPickerReact{
            position:absolute;
            top:-330px;
            --epr-emoji-gap:0.1rem;
            --epr-bg-color:transparent;
            --epr-category-label-bg-color:transparent;
            --epr-emoji-size:25px;
            box-shadow:0 10px 7px #9a86f3;
            border-color:#9186f3;
            .epr-body::-webkit-scrollbar{
                background-color:#080420;
                width:5px;
                &-thumb{
                    background-color:#9a86f3;
                }
            }
            
            }

            .epr-preview{
                display:none;
            }
        }
    }

}

.input-container{
    width:100%;
    border-radius:2rem;
    display:flex;
    align-items:center;
    gap:0.2rem;
    background-color:#ffffff34;
    input{
        width:90%;
        height:80%;
        background-color:transparent;
        color:white;
        border:none;
        padding-left:1rem;
        font-size:1.2rem;
        &::selection{
            background-color:#9a86f3;
        }
        &:focus{
            outline:none;
        }
    }
    button{
        padding:0.3rem 2rem;
        border-radius:2rem;
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:#9a86f3;
        border:none;

        svg{
            font-size:2rem;
            color:white;

        }

    }
}

`;