import { useState } from 'react';
import './login.scss';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        alert('login');
    }

    return (
        <div className="login-container">
            <div className='header'>
                Don't have an account yet?
            </div>
            <div className='title col-4 mx-auto'>
                Hoi Dan It
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
            </div>
        </div>
    )
}
export default Login;