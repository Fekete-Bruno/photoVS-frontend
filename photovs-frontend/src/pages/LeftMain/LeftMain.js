import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import logo from '../../assets/images/photoversus.png';
import {RxAvatar} from 'react-icons/rx';
import { AvatarBox, Left } from "../../components/Main";


export default function LeftMain({setPage}) {
    const { userData } = useContext(UserContext);
    const {avatar_url,username} = userData.user;

    return(
        <Left>
            <img src={logo} alt="logo" width="90%"/>
                <ul>
                    <li onClick={()=>setPage('main')}>
                        Main
                    </li>
                    <li>
                        My Polls (soon!)
                    </li>
                    
                    <li onClick={()=>setPage('creator')}>
                        Create Polls (soon!)
                    </li>
                </ul>
            <AvatarBox>
                {avatar_url.length!==0?<img alt="avatar" src={avatar_url} height='64px'/>:<RxAvatar size='64px'/>}
                <p>@{username}</p>
            </AvatarBox>
        </Left>
    );
}