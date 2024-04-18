import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
        const resp = await fetch('/api/auth/logout', {
            method: 'POST',
            headers: {'Content-type': 'application/json; charset=UTF-8'},
        })

        const data = await resp.json();
        if(data.error){
            throw  new Error(data.error);
        }
        localStorage.removeItem('chat-user');
        setAuthUser(null);
    } catch (err) {
        toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout};
};

export default useLogout;
