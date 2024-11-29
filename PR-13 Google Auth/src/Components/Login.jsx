import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { auth, database, provider } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();

    const handlelogin = async () => {
        let user = await createUserWithEmailAndPassword(auth, email, password);

        if (user) {
            navigate('/dashboard', { state: { displayName: name, email:email } });
        }

    };

    const handleGoogle = async () => {
        const users = await signInWithPopup(auth, provider);
        const user = users.user;
        await setDoc(doc(database, 'users', user.uid), {
            name: user.displayName,
            email: user.email,
        });

        if (users) {
            navigate('/dashboard', { state: { displayName: user.displayName, email: user.email } });
        }
    };

    return (
        <div className='main1'>
            <div className="main">
                <div className='div1'>
                    <div className="form">
                        <div className="txt">
                            <center>
                                <h1>Welcome Back</h1>
                                <p>Log in to continue your journey with us.</p>

                                <div className="login-form">
                                    <input
                                        type="text"
                                        className="input1"
                                        placeholder="Enter UserName"
                                        onChange={(e) => setName(e.target.value)}
                                    /> <br /><br />
                                    <input
                                        type="text"
                                        className="input1"
                                        placeholder="Enter Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    /> <br /> <br />
                                    <input
                                        type="password"
                                        className="input1"
                                        placeholder="Enter Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />  <br /><br />
                                    <button className="btn" onClick={handlelogin}>
                                        Sign In
                                    </button> 
                                        <br /><br />
                                    <button className="btn" onClick={handleGoogle}> <img src="/logo.png" alt=""  className='logo'/>
                                        Sign In with Google
                                    </button>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
