import { TbLogout2 } from "react-icons/tb";
import useLogout from "../../hooks/useLogout";
const Logout = () => {
  const {loading, logout} = useLogout();
  const logoutHandler = async() => {
    await logout();
  }
  return (
    <div className="mt-auto mb-0  bg-gray-600 rounded-0 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border-t-2 border-gray-500 h-8">
      <button className="px-2 py-2" onClick={() => logoutHandler()}>
      
      { loading 
        ? <span className="loading loading-spinner text-accent"></span>
        : <TbLogout2  className="text-white font-semibold text-lg" />
      }
        
      </button>
    </div>
  )
}

export default Logout;