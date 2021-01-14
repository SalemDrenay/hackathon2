import React, { useState } from 'react'
import styled from'styled-components'
import { Link } from 'react-router-dom'


const JoinOuterContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    height: 100vh;
    align-items: center;
    background-color: #710099;
`;

const JoinInnerContainer = styled.div`
    width: 30%;
    height: 500px;
    display : flex;
    flex-direction: column;
    justify-content : space-between;
`;

const Heading = styled.div`
    color: white;
    font-size: 2.5em;
    padding-bottom: 10px;
    border-bottom: 2px solid white;
`;

const JoinInput = styled.input`
    border-radius: 5px;
    padding: 15px 20px;
    width: 90%;    
`;

const Button = styled.button`
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #B20081;
    padding: 20px;
    border-radius: 5px;
    display: inline-block;
    border: none;
    width: 100%;
`;
const Join = () =>{
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")

    return(
        <JoinOuterContainer>
        <JoinInnerContainer>
         <Heading><h3>Bienvenue !</h3></Heading>
           <JoinInput placeholder="Pseudo" type="text" onChange={(event) => setName(event.target.value)} />
            <JoinInput placeholder="Salon" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
          <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
            <Button className={'button mt-20'} type="submit">Se connecter au salon</Button>
          </Link>
          </JoinInnerContainer>
      </JoinOuterContainer>
    );
}


export default Join;
