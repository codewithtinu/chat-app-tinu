const Conversations = () => {
  return (
    <>
      <div className="w-full h-96 overflow-scroll overflow-y-auto overflow-x-hidden px-4">
        <div className="chat chat-start w-full m-5">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header justify-start text-white">
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">Hey</div>
          <div className="chat-footer opacity-50 text-amber-200">Delivered</div>
        </div>
        <div className="chat chat-end w-full">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header text-white">
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble chat-bubble-info text-white">Hi </div>
          <div className="chat-footer opacity-50 text-amber-200">
            Seen at 12:46
          </div>
        </div>

        <div className="chat chat-start w-full m-5">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header justify-start text-white">
            <time className="text-xs opacity-50">12:47</time>
          </div>
          <div className="chat-bubble">How are you?</div>
          <div className="chat-footer opacity-50 text-amber-200">Delivered</div>
        </div>

        <div className="chat chat-end w-full">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header text-white">
            <time className="text-xs opacity-50">12:47</time>
          </div>
          <div className="chat-bubble chat-bubble-info text-white">
            i am fine, what about you?
          </div>
          <div className="chat-footer opacity-50 text-amber-200">
            Seen at 12:47
          </div>
        </div>
        <div className="chat chat-start w-full m-5">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header justify-start text-white">
            <time className="text-xs opacity-50">12:47</time>
          </div>
          <div className="chat-bubble">How are you?</div>
          <div className="chat-footer opacity-50 text-amber-200">Delivered</div>
        </div>
      </div>
    </>
  );
};

export default Conversations;
