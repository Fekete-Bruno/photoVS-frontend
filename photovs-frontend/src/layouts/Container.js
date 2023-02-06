import styled from "styled-components";

export default styled.div`
    height: 100vh;
    max-height: ${props => props.height || '600px'};

    width: 100%;
    max-width: ${props => props.width || '600px'};

    border-radius: 20px;
    box-shadow: 6px 6px 12px 6px rgba(0,0,0,0.2);

    display: flex;
    overflow: hidden;

    background-color: rgb(82, 113, 255);
`;