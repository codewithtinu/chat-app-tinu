import { useState } from "react";
import toast from "react-hot-toast";
const useLogin = () => {
    const [loading, setLoading] = useState(false);

    const isLogin = async({userName, password}) => {
        const success = handelLoginValidation({userName, password});
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
            consoel.log('login hook = ', data);
            
        }catch(err){
            toast.error(err.message);
        }finally{
            setLoading(false);
        }
    }

    return {loading, isLogin};
}

export default useLogin;

function handelLoginValidation({userName, password}){
    
    if(!userName || !password){
        toast.error('Please fill all fields');
        return false;
    }
    if(password.length < 6){
        toast.error('Password must be at least 6 characters long');
        return false;
    }
}