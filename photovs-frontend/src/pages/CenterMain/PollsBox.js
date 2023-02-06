import styled from "styled-components";
import { Grid } from 'react-loader-spinner';
import PollCard from "./PollCard";

export default function PollsBox({polls,pollsLoading}) {
    return(
        <PollsBoxDiv>
        {
            pollsLoading?<Grid color="darkblue"/>:
            <>{
                polls.map(poll => {return <PollCard key={poll.id} poll={poll} /> })
            }</>
        }
        </PollsBoxDiv>
    );
}

const PollsBoxDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 90%;
    width: 100%;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-thumb {
    border: 1px solid grey;
    background: rgb(25, 38, 97);
    border-radius: 10px;
    }
`;