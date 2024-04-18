import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async({fullName, userName, password, confirmedPassword, gender}) => {
    const success = handleSignupValidation({fullName, userName, password, confirmedPassword, gender});

    if(!success) return;
    setLoading(true);
    try{
      const res = await fetch('/api/auth/signin', {
        method: "POST",
        headers : {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body : JSON.stringify({fullName, userName, password, confirmedPassword, gender})
      })
      const data =  await res.json();
      console.log('signUP data: ', data);
      if(data.error){
        throw  new Error(data.error);
      }

      localStorage.setItem('chat-user', JSON.stringify(data));
      setAuthUser(data);
      // toast.success('User created successfully!');
    }catch(err){
      toast.error(err.message);
    }finally{
      setLoading(false)
    }
  }

  return {loading, signup};
}

export default useSignup;

function handleSignupValidation({fullName, userName, password, confirmedPassword, gender}) {
  if(!fullName || !userName || !password || !confirmedPassword || !gender) {
    // alert('Please fill out all fields');
    toast.error('Please fill out all fields');
    return false;
  }
  if(password !== confirmedPassword){
    toast.error('Password do not match!');
    return false;
  }
  if(password.length < 6){
    toast.error('Password should be minimum of 6 characters long.')
    return false;
  }

  return true;
}