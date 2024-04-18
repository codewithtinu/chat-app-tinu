import { useState } from "react";
import { NavLink } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

   const {loading, isLogin} = useLogin();
  const handleLogin = async(e) => {
    e.preventDefault();
    console.log('UI login: ', userName, password);
    // console.log('Login: ', isLogin);
    await isLogin(userName, password);
  }
  return (
    <div className="lg:w-[450px] md:w-[400px] flex flex-col items-center justify-center  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-400 py-4 px-4">
        <h3 className="block text-2xl font-semibold text-blue-600 ">Log In</h3>
        <form className="w-full px-4" onSubmit={handleLogin}>
        
        <label className="form-control w-full mb-1">
          <div className="label">
            <span className="label-text text-gray-100">User Name</span>
          </div>
          <input
            type="text"
            placeholder="User Name / Email"
            className="input input-bordered w-full  h-10"
            value = {userName}
            onChange = {(e) => setUserName( e.target.value)}
          />
        </label>
        <label className="form-control w-full mb-1">
          <div className="label">
            <span className="label-text text-gray-100">Password</span>
          </div>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full  h-10"
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
          />
        </label>
        <NavLink to="/signup" className="text-white">Not Sign up yet? <span className="text-blue-800 underline font-semibold">Sign in</span> here.</NavLink>
        <button className="btn btn-warning w-full mt-3 mb-3 text-red-800">
          {
            loading 
            ? <span className="loading loading-spinner text-accent"></span>
            : 'Sign In'
          }
        </button>
      </form>
    </div>
  )
}

export default Login