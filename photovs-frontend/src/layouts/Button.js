import styled from "styled-components";

const Button = styled.button`
    width: 100%;
    height: 32px;
    font-size: 16px;
    background-color: rgb(25, 38, 97);
    border: 2px white solid;
    border-radius: 6px;
    color: #ffffff;
    &:hover{
        cursor: pointer;
        background-color: rgba(25, 38, 97, 0.8);
    }
    &:active{
        transform: translateY(4px);
    }
`;

export default Button;