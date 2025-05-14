import { WEB_SOCKET_DOMAIN_NAME } from "../../../utils/GlobalSettings";

export const initializeWebSocket = (tribe_id, thread_id, token, setThreadData, onOpen, onClose,setOnlineMembers) => {
    const socketUrl = `${WEB_SOCKET_DOMAIN_NAME}/ws/tribe/${tribe_id}/thread/${thread_id}/?token=${token}`;
  
    const chatSocket = new WebSocket(socketUrl);
  
    chatSocket.onopen = () => {
      console.log("WebSocket Connected");
      onOpen(chatSocket);
    };
  
    chatSocket.onclose = () => {
      console.log("WebSocket Disconnected");
      onClose();
    };
  
    chatSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'message') {
        const newMessage = {
          first_name: data.first_name || 'Anonymous',
          timestamp: data.timestamp || new Date().toISOString(),
          message: data.message || '',
          profile_picture:data.profile_pic,
          user:data.id,
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
      console.log('handleSendMessage',UserAttributes,messageData)
      socket.send(JSON.stringify(messageData));
      setNewMessage('');
    }
  };
  