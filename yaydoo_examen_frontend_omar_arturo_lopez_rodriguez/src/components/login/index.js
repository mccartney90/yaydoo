import "animate.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { loginSession } from "../../middleware/Authentication";
import {
   Button,
   ButtonContainer,
   Container,
   Input,
   InputContainer,
   LoginContainer,
   WelcomeText,
} from "../common/common.login.styled";
import { login } from "../services";
import "./login.css";
const Login = () => {
   const history = useHistory();

   const [email, setEmail] = useState("");
   const [emailError, setEmailError] = useState("");
   const [password, setPassword] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const MySwal = withReactContent(Swal);
   const handlerClick = async (e) => {
      if (email && password) {
         try {
            let response = await login(email, password);
            if (response) {
               console.log(response);
               let roles = response.data.user.role;
               roles = roles.map((item) => item.role);
               loginSession(true, roles.join());
               history.push("/admin/");
            }
         } catch (error) {
            console.log(error);
         }
      } else {
         setEmailError("input-error");
         setPasswordError("input-error");
         Swal.fire({
            title: "Error!",
            text: "Introduce un correo electronico y una contraseña",
            icon: "error",
            confirmButtonText: "Aceptar",
            showClass: {
               popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
               popup: "animate__animated animate__fadeOutUp",
            },
         });
      }
   };
   return (
      <Container>
         <LoginContainer>
            <WelcomeText>Login</WelcomeText>
            <InputContainer>
               <Input
                  type="text"
                  className={`${emailError}`}
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
               />
               <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className={passwordError}
                  placeholder="Password"
               />
            </InputContainer>

            <ButtonContainer>
               <Button content="INICIAR SESION" onClick={(e) => handlerClick(e)} />
            </ButtonContainer>
         </LoginContainer>
      </Container>
   );
};
export default Login;
