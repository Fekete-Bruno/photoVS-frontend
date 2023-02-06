import MainLayout, { AvatarBox, Center, Left, Right } from "../../components/Main";
import logo from '../../assets/images/photoversus.png'
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import {RxAvatar} from 'react-icons/rx'
import LeftMain from "../LeftMain/LeftMain";
import CenterMain from "../CenterMain/CenterMain";
import RightMain from "../RightMain/RightMain";

export default function Main() {
    const [page,setPage] = useState('main');
    const { userData } = useContext(UserContext);
    const {avatar_url,username} = userData.user;

    return(
        <MainLayout>

            <LeftMain setPage={setPage}/>
            
            <CenterMain page={page} />
            
            <RightMain page={page} />
        </MainLayout>
    );
}