import { useState } from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function PollCard({poll}){
    const [active,setActive] = useState(false);
    const [selected,setSelected] = useState('');
    return(
        <>
            {active?
            <ActivePoll>
                <ActiveTitle><div>{poll.title}</div> <CloseCircle onClick={()=>setActive(!active)}/></ActiveTitle>
                <DescriptionContainer>{poll.description}</DescriptionContainer>
                <ImagesContainer>
                    <Img 
                        src={poll.img_a_url} 
                        alt={poll.img_a_title}
                        onClick={()=>setSelected('a')}
                        selector={selected==='a'?true:undefined}
                    />
                    <Img 
                        src={poll.img_b_url} 
                        alt={poll.img_b_title}
                        onClick={()=>setSelected('b')}
                        selector={selected==='b'?true:undefined}
                    />
                </ImagesContainer>
            </ActivePoll>
            :
            <PollTitle onClick={()=>setActive(!active)}>
                <div>
                    {poll.title}
                </div>
                <div>
                    @{poll.users.username}
                </div>
            </PollTitle>}
            
        </>
    );
}

const DescriptionContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 24px;
`;

const Img = styled.img`
    border: ${props => props.selector?'3px green solid':'none'} ;
`;

const ImagesContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-start;
    margin: 12px;
    &>img{
        margin-left: 12px;
        width: 100%;
        height: calc();
        object-fit: cover;
        border-radius: 3px;
        &:hover{
            cursor: pointer;
        }
        &:active{
            transform: translateY(3px);
        }
    }
`;

export const CloseCircle = styled(AiOutlineCloseCircle)`
    border-radius: 50%;
    &:hover{
        cursor: pointer;
        background-color: rgba(255,255,255,0.25);
    }
    &:active{
        transform: translateY(3px);
    }
`;

export const ActiveTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 12px 24px;
    font-size: 24px;
    margin-top: 10px;
`;

const ActivePoll = styled.div`
    width:95%;
    background: rgb(25, 38, 97);
    border-radius: 5px;
    border: 1px solid grey;
    margin-top: 12px;
    padding: 6px;
`;

const PollTitle = styled.div`
    background: rgb(25, 38, 97);
    border: 1px solid grey;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    width: 80%;
    height: 32px;
    margin-top: 10px;
    &:hover{
        cursor: pointer;
        background: rgba(25, 38, 97, 0.5);
    }
    &:active{
        transform: translateY(3px);
    }
`;