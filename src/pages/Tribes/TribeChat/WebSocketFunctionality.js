export const initializeWebSocket = (tribe_id, thread_id, token, setThreadData, onOpen, onClose) => {
    const socketUrl = `ws://localhost:8000/ws/tribe/${tribe_id}/thread/${thread_id}/?token=${token}`;
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
        };
        setThreadData((prev) => [...prev, newMessage]);
      }
    };
  
    return chatSocket;
  };
  
  export const handleSendMessage = (socket, UserAttributes, newMessage, setNewMessage) => {
    if (socket && socket.readyState === WebSocket.OPEN && newMessage.trim()) {
      const messageData = {
        id: UserAttributes?.id,
        first_name: UserAttributes?.first_name,
        timestamp: new Date().toISOString(),
        message: newMessage,
      };
      socket.send(JSON.stringify(messageData));
      setNewMessage('');
    }
  };
  