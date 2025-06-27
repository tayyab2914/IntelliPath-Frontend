import { message } from "antd";
import { refetchTribeMembers, setRerenderTribePage } from "../../../redux/AuthToken/Action";
import { WEB_SOCKET_DOMAIN_NAME } from "../../../utils/GlobalSettings";

export const initializeWebSocket = (tribe_id, thread_id, token, setThreadData, onOpen, onClose,setOnlineMembers,user_attributes,dispatch,rerender_tribe_page,refetch_tribe_members) => {
    const socketUrl = `${WEB_SOCKET_DOMAIN_NAME}/ws/tribe/${tribe_id}/thread/${thread_id}/?token=${token}`;
  
    const chatSocket = new WebSocket(socketUrl);
  
    chatSocket.onopen = () => {
    //   console.log("WebSocket Connected");
      onOpen(chatSocket);
    };
  
    chatSocket.onclose = () => {
    //   console.log("WebSocket Disconnected");
      onClose();
    };
  
    chatSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
    //   console.log("WebSocket Message Received:", data);
    //   console.log(user_attributes)
      if (data.type === 'message') {
        if(data?.is_banned )
        {
            dispatch(refetchTribeMembers(!refetch_tribe_members))
            if(user_attributes?.email == data?.user)
             {
                message.error("You are currently banned from this tribe due to messaging against community guidelines.");
             }
            dispatch(setRerenderTribePage(!rerender_tribe_page))
            return
        }
        const newMessage = {
          first_name: data.first_name || 'Anonymous',
          timestamp: data.timestamp || new Date().toISOString(),
          message: data.message || '',
          profile_picture:data.profile_pic,
          user:data.id,
          is_main_user:data.id == user_attributes?.id
        };
        setThreadData((prev) => [...prev, newMessage]);
      }
      if(data.type == "online_users")
      {
        setOnlineMembers(data)
      }
    };
  
    return chatSocket;
  };
  
  export const handleSendMessage = (socket, UserAttributes, newMessage, setNewMessage) => {
    if (socket && socket.readyState === WebSocket.OPEN && newMessage.trim()) {

      const messageData = {
        id: UserAttributes?.id,
        user: UserAttributes?.user,
        first_name: UserAttributes?.first_name,
        timestamp: new Date().toISOString(),
        profile_picture:UserAttributes?.profile_picture,
        message: newMessage,
      };
      socket.send(JSON.stringify(messageData));
      setNewMessage('');
    }
  };
  