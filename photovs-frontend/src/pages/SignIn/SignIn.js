import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/Auth";
import { Row, Title  } from "../../layouts/StyledContainer";
import logo from '../../assets/images/photoversus.png'
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Input from "../../components/Input";
import Form from "../../layouts/Form";
import Button from "../../layouts/Button";
import useSignIn from "../../hooks/useSignIn";
import UserContext from "../../contexts/UserContext";


export default function SignIn() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const {loadingSignIn, signIn} = useSignIn();
    const { setUserData } = useContext(UserContext); 
    
    async function submitForm(e) {
        e.preventDefault();
        try {
            const userData = await signIn(email,password);
            setUserData(userData);
            toast.success('Welcome to PhotoVS!');
            navigate('/main');   
        } catch (error) {
            toast.error('Error: '+ (error.response?.data?.message || error.message));
        }
    }

    const navigate = useNavigate();
    
    useEffect(()=>{
        if(localStorage.userData){
            navigate('/main');
        }
    },[]);
    
    return(
        <AuthLayout>
            <Row>
                <img src={logo} height="150"/>
                <Title>Login</Title>
            </Row>
            <Row>
                <Form onSubmit={submitForm}>
                    <Input className="log" type="email" placeholder="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                    <Input className="log" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                    <Button disabled={loadingSignIn} type="submit">Log In!</Button>
                </Form>
            </Row>
            <Row>
                <Link to="/sign-up">Click here if you don't have an account!</Link>
            </Row>
        </AuthLayout>
    );
}