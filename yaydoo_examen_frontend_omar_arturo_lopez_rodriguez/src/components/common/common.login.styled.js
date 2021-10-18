import styled from "styled-components";

// login
export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%;
   width: 100%;
`;
export const LoginContainer = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   height: 80vh;
   width: 30vw;
   color: #ccc;
   text-transform: uppercase;
   letter-spacing: 0.4rem;
`;

export const WelcomeText = styled.h2`
   margin: 3rem 0 2rem 0;
`;

export const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   height: 20%;
   width: 100%; ;
`;

export const ButtonContainer = styled.div`
   margin: 1rem 0 2rem 0;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const LoginWith = styled.h5`
   cursor: pointer;
`;

export const HorizontalRule = styled.hr`
   width: 90%;
   height: 0.3rem;
   border-radius: 0.8rem;
   border: none;
   background: linear-gradient(to right, #14163c 0%, #03217b 79%);
   background-color: #ebd0d0;
   margin: 5rem 0 1rem 0;
   backdrop-filter: blur(25px);
`;

export const IconsContainer = styled.div`
   display: flex;
   justify-content: space-evenly;
   margin: 2rem 0 3rem 0;
   width: 80%;
`;

export function Input({ type, value, placeholder, onChange, className }) {
   return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} className={className} />;
}

const StyledInput = styled.input`
   background: rgba(255, 255, 255, 0.15);
   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
   border-radius: 1rem;
   width: 80%;
   height: 3rem;
   padding: 1rem;
   border: none;
   outline: none;
   color: #3c354e;
   font-size: 1rem;
   margin: 10px;
   font-weight: bold;
   &:focus {
      display: inline-block;
      box-shadow: 0 0 0 0.2rem #5275f3;
      backdrop-filter: blur(12rem);
      border-radius: 1rem;
   }
   &::placeholder {
      color: #b9abe099;
      font-weight: 100;
      font-size: 1rem;
   }
`;

export const Button = ({ content, onClick }) => {
   return <StyledButton onClick={onClick}>{content}</StyledButton>;
};

const StyledButton = styled.button`
   background: linear-gradient(to right, #1ed493 0%, #1ed493 79%);
   text-transform: uppercase;
   letter-spacing: 0.2rem;
   width: 65%;
   height: 3rem;
   border: none;
   color: white;
   border-radius: 1rem;
   cursor: pointer;
   margin: 10px;
`;

export const Icon = ({ color, children }) => {
   return <StyledIcon background={color}>{children}</StyledIcon>;
};

const StyledIcon = styled.div`
   height: 3.5rem;
   width: 3.5rem;
   background: ${(props) => props.background};
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 4rem;
   color: white;
   cursor: pointer;
   svg {
      width: 1.5rem;
      height: 1.5rem;
   }
`;
