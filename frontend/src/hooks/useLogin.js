import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
const useLogin = () => {
    const [loading, setLoading] = useState(false);
   const {setAuthUser} = useAuthContext();

    const isLogin = async(userName, password) => {
        debugger;
        const success = handleLoginValidation(userName, password);
        if(!success) return;
        setLoading(true);
        try{
            let resp =  await fetch('/api/auth/login', {
                method: "POST",
                headers : {
                    'Content-type': 'application/json; charset=UTF-8',
                  },
                  body : JSON.stringify({userName, password})
            });

            const data = await resp.json();
            console.log('logoin data: ', data);
            if(data.error){
                throw  new Error(data.error);
            }
            localStorage.setItem('chat-user', JSON.stringify(data));
            setAuthUser(data);
        }catch(err){
            toast.error(err.message);
        }finally{
            setLoading(false);
        }
    }

    return {loading, isLogin};
}

export default useLogin;

function handleLoginValidation(userName, password) {
    if(!userName || !password ) {
      // alert('Please fill out all fields');
      toast.error('Please fill out all fields');
      return false;
    }
   
    if(password.length < 6){
      toast.error('Password should be minimum of 6 characters long.')
      return false;
    }
  
    return true;
  }