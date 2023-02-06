import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/Auth";
import { Row, Title  } from "../../layouts/StyledContainer";
import logo from '../../assets/images/photoversus.png'
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useSignUp from "../../hooks/useSignUp";
import Input from "../../components/Input";
import Form from "../../layouts/Form";
import Button from "../../layouts/Button";


export default function SignUp() {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [avatar_url,setAvatar_url] = useState('');
    const {loadingSignup, signUp} = useSignUp();
    
    async function submitForm(e) {
        e.preventDefault();
        if(password!==confirmPassword || password.length<=6) {
            toast.warn("The passwords must be equal and with 6 or more characters!")
        } else {
            try {
                await signUp(email, password, avatar_url, username);
                toast.success('User created! Please log');
                navigate('/sign-in');   
            } catch (error) {
                toast.error('Error: '+ (error.response?.data?.message || error.message));
            }
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
                <Title>Sign up</Title>
            </Row>
            <Row>
                <Form onSubmit={submitForm}>
                    <Input className="log" type="email" placeholder="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                    <Input className="log" type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} required />
                    <Input className="log" type="url" placeholder="Avatar Url" value={avatar_url} onChange={(e)=>setAvatar_url(e.target.value)} />
                    <Input className="log" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                    <Input className="log" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required />
                    <Button disabled={loadingSignup} type="submit">Sign Up!</Button>
                </Form>
            </Row>
            <Row>
                <Link to="/sign-in">Click here if you already have an account!</Link>
            </Row>
        </AuthLayout>
    );
}