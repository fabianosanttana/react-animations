import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
    100% { transform:rotate(360deg); }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 20px;
  max-width: 700px;
  background: rgb(29, 30, 32);
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  max-width: 300px;

  ${({ status }) =>
    status === false &&
    css`
      ${Button} {
        background-image: linear-gradient(to left, #c00, #9e0505);
      }

      ${Input} {
        border: 2px solid #c00;
        caret-color: #c00;

        &:focus {
          border: 2px solid #c00;
          caret-color: #c00;
        }
      }
    `}

  ${({ status }) =>
    status === true &&
    css`
      ${Button} {
        background-image: linear-gradient(to left, #4caf50, #2a8e2e);
      }

      ${Input} {
        border: 2px solid #4caf50;
        caret-color: #4caf50;

        &:focus {
          border: 2px solid #4caf50;
          caret-color: #4caf50;
        }
      }
    `}
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  font-size: 12px;
  background: rgb(54, 54, 59);
  border: 2px solid rgb(97, 97, 97);
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  color: #fff;
  text-indent: 20px;
  margin-bottom: 15px;

  &:focus {
    border: 2px solid #00a4bd;
    caret-color: #00a4bd;
  }
`;

export const Button = styled.button`
  user-select: none;
  transition: all 0.2s ease;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  cursor: pointer;
  color: #fff;
  background-image: linear-gradient(to left, #00a4bd, rgb(0, 189, 165));
  border: none;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &:disabled {
    cursor: initial;
    opacity: 0.65;
  }

  &:disabled:hover {
    opacity: 0.82;
  }

  &:not(:disabled):hover {
    filter: brightness(1.1);
  }

  ${({ loading }) =>
    loading === true &&
    css`
      &:after {
        content: "";
        height: 25px;
        width: 25px;
        border-radius: 50%;
        justify-self: flex-start;
        display: table;
        border-left: 2px solid #fafafa;
        border-top: 2px solid #fafafa;
        animation: ${rotate} 1s cubic-bezier(0.54, 0.23, 0.57, 0.93) infinite;
      }
    `}
`;

export const Divider = styled.div`
  flex: 6;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const FlexContainer = styled.div`
  flex-direction: column;
  display: flex;
  flex-flow: nowrap;
`;

export const RangeInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  display: inline-block;
  width: 18em;
  height: 0.5em;
  position: relative;
  left: 4em;
  border-radius: 5px;
  background-color: rgb(16, 16, 16);
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    all: unset;
    -webkit-appearance: none;
    border: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgb(0, 189, 165);
    transition: 0.3s ease-in-out;
  }
`;
