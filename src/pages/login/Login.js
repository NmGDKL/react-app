import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import MealLogin from '../../assets/meal2.svg'
import { Button, FormBox, Header, Image, TextInput, Wrapper, PasswordBox } from './style';
import Swal from 'sweetalert2';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const username = "naim";
const password = "1258";

const Login = () => {
  const [userName, setUsername] = useState();
  const [passWord, setPassword] = useState();
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (userName === username && passWord === password) {
      navigate('/react-app/home');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid username or password!',
      })
    }
  } 

  const handleShowPass = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  }

  return (
    <div>
        <Wrapper>
            <FormBox onSubmit={handleClick}>
                <Image src={MealLogin}/>
                <Header>{"<NAİM/>"} Recipe</Header>
                <PasswordBox>
                  <TextInput onChange={(e)=>setUsername(e.target.value)}  placeholder='Username' type='text' required></TextInput>
                    <TextInput placeholder='Password' type={showPass ? "text" : "password" }onChange={(e)=>setPassword(e.target.value)} required></TextInput> 
                    <span onClick={handleShowPass}> {showPass ? <AiFillEye/> : <AiFillEyeInvisible/>}</span>
                    <Button type='submit'>LOGIN</Button>
                </PasswordBox>
            </FormBox>
        </Wrapper>
    </div>
  )
}

export default Login