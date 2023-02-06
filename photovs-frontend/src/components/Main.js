import styled from "styled-components";
import { Page } from "../layouts/Page";
import { StyledContainer as Container} from "../layouts/StyledContainer";


export default function MainLayout({ children }) {
  return (
    <Page>
      <StyledContainer width="90vw" height="90vh" padding>
        {children}
      </StyledContainer>
    </Page>
  );
}

const StyledContainer = styled(Container)`
    padding: 0;
    flex-direction: row;
    align-items: flex-start;
    &>*{
        padding-top: 20px;
    }
    overflow: hidden;
    position: relative;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 15%;
    padding: 20px;
`;

export const AvatarBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 25%;
    width: 100%;
    &>*{
        margin: 6px;
    }
    &>img{
        border-radius: 50%;
    }
`;

export const Center = styled.div`
    position: absolute;
    top:0;
    right:${props=>props.page==='main'?'0':'-101vw'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width:85%;
    padding: 20px;
    border-radius: 12px 0 0 12px;
    background-color: rgb(46,38,75);
    transition: all ease-in-out 1.2s;
`;


export const Right = styled.div`
    position: absolute;
    top:0;
    right:${props=>props.page==='creator'?'0':'-101vw'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 85%;
    padding: 20px;
    border-radius: 12px 0 0 12px;
    background-color: rgb(35,38,49);
    transition: all ease-in-out 1.5s;
`;