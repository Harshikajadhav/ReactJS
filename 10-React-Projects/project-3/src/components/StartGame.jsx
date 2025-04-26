// StartGame.jsx
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const StartGame = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/play');
  };

  return (
    <Container>
      <div><img src="/images/dices.png" alt="dice" /></div>
      <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={handleClick}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame;

// Styled Components
const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  bottom: none;
  font-size: 16px;
  cursor: pointer;
  transition: 0.4s ease-in-out;

  &:hover {
    background: #ffffff;
    color: #000000;
    border: 1px solid #000000;
    transition: 0.3s ease-in-out;
  }
`;
