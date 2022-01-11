import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Lottie from "react-lottie";

import {Image, Container, Form, Input, Button, Animation, Signup, Span, ForgotPassword, Title} from "./styles";
import api from "../../services/api"
import SignupValidation from "../../utils/validation/SignupValidation ";
import Message from "../../components/Message";

import * as animationData from '../../assets/animations/88796-loading-animation-gradient-line-1.json';
import successAnimation from "../../assets/animations/67000-checkmark.json";
import Logo from "../../assets/images/logo.png";
function Cadastro(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const optionsLoading = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      const optionsSuccess = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    async function HandleSubmit(){
        setLoading(true);
       const data = { email, name, password, phone};

       try {

           await SignupValidation(data);
           handleRequest(data);
           
       } catch(err){
        setLoading(false);
        Message(err.errors[0]);
       }
        
       async function handleRequest(data) {
           await api.post("/user", data)
           .then(response => {
               Message(response.data.message);
               setTimeout(() => {
                   setLoading(false);
            setSuccess(true);
        }, 2000);
     }).catch(error => {
       
         Message(error.response.statusText = "Usuário não encontrado!", "warn");
         setTimeout(() => {
            setLoading(false)
        }, 2000);
     })
       }
       
        }

        async function handleAuthenticated(){
            let token = await localStorage.getItem("over_token");

            if(token){
                window.location = "/";
            }
        }
        useEffect(() => {
            handleAuthenticated()
        },[])
        
    return(
        <Container>
            {
                success ? 
                <>
                    <h1>Deu certo!</h1>
                    <Lottie options={optionsSuccess}/>
                </>

                :

                <Form>
                    <ToastContainer/>
                    <Image src={Logo} alt="logo web"/>
    
                    <Title>Cadastre-se!</Title>
                    <Input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)}  required/>
                    <Input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}  required/>
                    <Input type="number" placeholder="Celular" onChange={(e) => setPhone(e.target.value)}  required/>
                    <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                    <ForgotPassword href="/forgot-password">
                        Esqueceu sua senha?
                    </ForgotPassword>
                    <Button 
                        onClick={HandleSubmit}
                        >
                            {loading ? 
                            <Animation>
    
                                <Lottie options={optionsLoading}/>
                            </Animation>
                        :
                            "Entrar"
                        }
                    </Button>
                        <Signup href="/signup">Ainda não tem cadastro? <Span>Cadastre-se!</Span></Signup>
                    
                </Form>

    
            }

        </Container>
    )
};

export default Cadastro;