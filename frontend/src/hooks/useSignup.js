import { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

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
      toast.success('User created successfully!');
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