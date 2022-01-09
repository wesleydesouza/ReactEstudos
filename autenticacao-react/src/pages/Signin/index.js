import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Lottie from "react-lottie";

import {Image, Container, Form, Input, Button, Animation, Signup, Span, ForgotPassword} from "./styles";
import api from "../../services/api"
import SigninValidation from "../../utils/validation/SigninValidation";
import Message from "../../components/Message";

import * as animationData from '../../assets/animations/88796-loading-animation-gradient-line-1.json';
import Logo from "../../assets/images/logo.png";
function Signin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    async function HandleSubmit(){
        setLoading(true);
       const data = {email, password};

       let validation = await SigninValidation(data);

        if(validation){

            await api.post("/signin", data)
                .then(response => {
                    localStorage.setItem("over_name", response.data.user.name);
                    localStorage.setItem("over_token", response.data.token);
                 Message(response);
                 setTimeout(() => {
                    setLoading(false);
                    handleAuthenticated();
                }, 2000);
             }).catch(error => {
                 Message(error.response.statusText = "Usuário não encontrado!", "warn");
                 setTimeout(() => {
                    setLoading(false)
                }, 2000);
             })
          }else {
            Message("Preencha um email válido e uma senha de no mínimo 6 caracteres!", "error");
            setTimeout(() => {
                setLoading(false)
            }, 2000);
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
            <Form>
                <ToastContainer/>
                <Image src={Logo} alt="logo web"/>
                <Input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}  required/>
                <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                <ForgotPassword href="/forgot-password">
                    Esqueceu sua senha?
                </ForgotPassword>
                <Button 
                    onClick={HandleSubmit}
                    >
                        {loading ? 
                        <Animation>

                            <Lottie options={defaultOptions}
                                height={40}
                                width={40}
                            />
                        </Animation>
                    :
                        "Entrar"
                    }
                </Button>
                    <Signup href="/signup">Ainda não tem cadastro? <Span>Cadastre-se!</Span></Signup>
                
            </Form>


        </Container>
    )
};

export default Signin;