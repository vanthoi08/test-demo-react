import { useState } from 'react';
import './login.scss';
import { useNavigate } from "react-router-dom";
import { postLogin } from '../../services/apiService';

import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/userAction';


const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleLogin = async () => {
        // validate
        const isValidEmail = validateEmail(email);

        if (!isValidEmail) {
            toast.error('Invalid email');
            // toast.success("hhhh");
            // toast.info("hhhh");
            return;
        }

        if (!password) {
            toast.error('Invalid password');
            return;
        }

        // submit apis

        let data = await postLogin(email, password);
        if (data && data.EC === 0) {

            dispatch(doLogin(data))
            toast.success(data.EM);
            navigate('/');

        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    }

    return (
        <div className="login-container">
            <div className='header'>
                <span>Don't have an account yet?</span>
                <button onClick={() => navigate('/register')}>Sign up</button>
            </div>
            <div className='title col-4 mx-auto'>
                Hoi Dan It 	&amp; Eric
            </div>
            <div className='welcome col-4 mx-auto'>
                Hello, who’s this?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label className=''>Email</label>
                    <input
                        type={"email"}
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}

                    />
                </div>
                <div className='form-group'>
                    <label className=''>Password</label>
                    <input
                        type={"password"}
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <span className='forgot-password'>Forgot password ?</span>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleLogin()}
                    >Login to HoiDanIT</button>
                </div>
                <div className="text-center">
                    <span className="back" onClick={() => { navigate('/') }}>
                        &#60;&#60;Go to Homepage
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Login;