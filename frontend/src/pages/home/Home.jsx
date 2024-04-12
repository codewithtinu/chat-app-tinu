import Chats from "../../components/Chats"
import Sidebar from "../../components/Sidebar"

const Home = () => {
  return (
    <div className="lg:w-[850px] md:w-[640px] sm:w-[420px] flex flex-row items-center   bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-400 py-0 px-0 justify-between m-0">
        {/* Sidebar - search|userList|Logout */}
        <Sidebar />
        {/* Messages - Header|Conversation|sendMessage */}
        <Chats />
    </div>
  )
}

export default Home