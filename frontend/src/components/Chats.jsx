import Header from './header/Header'
import Conversations from './conversations/Conversations'
import SendMessage from './message/SendMessage'

const Chats = () => {
  return (
    <div className="flex flex-col py-0 px-0 items-center justify-between w-2/3">
        <Header />
        <Conversations/>
        <SendMessage />
    </div>
  )
}

export default Chats;