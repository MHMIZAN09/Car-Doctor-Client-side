import { useContext } from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
import { AuthContext } from '../providers/AuthProvider';
const Login = () => {
    const { signIn } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="min-h-screen hero bg-base-200">
            <div className="flex-col hero-content lg:flex-row">
                <div className="w-1/2 text-center lg:text-left">

                    <img src={login} alt="" />
                </div>
                <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
                    <h1 className="text-3xl font-bold text-center">Login now!</h1>
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="mt-6 form-control">
                            {/* <button className="btn btn-primary">Login</button> */}
                            <input type='Submit' value='login' className="btn btn-primary" />
                        </div>
                    </form>
                    <p className='my-4 text-center'>create an account? <Link to="/signup" className="text-orange-400">SignUp</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;