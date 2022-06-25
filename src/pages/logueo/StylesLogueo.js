
import styled from "styled-components";

export const Form = styled.form`
  margin: auto;
  padding-top: 4rem;
  position: relative;
  text-indent: 40px;
  display: flex;
  flex-direction: column;
  top: 8rem;
  width: 450px;
  height: 480px;
  border-radius: 20px;
  background: rgba(4, 4, 4, 0.05);
  box-shadow: 0.1px 0.1px 44px #ffdfdd;
  
`;

export const Button = styled.button`
  color: #fff;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;
  background-image: radial-gradient(
    circle 894px at 7% 14%,
    rgba(255, 0, 95, 1) 0.2%,
    rgba(221, 59, 59, 1) 90%
  );
`;

export const Input = styled.input`
  text-decoration: none;
  position: relative;
  width: 80%;
  display: block;
  margin: 9px auto;
  font-size: 17px;
  color: #fff;
  padding: 8px;
  border-radius: 6px;
  border: none;
  background: rgba(3, 3, 3, 0.1);
`;
