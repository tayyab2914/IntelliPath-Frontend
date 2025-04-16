import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/TribeThread.css';
import { Col, Row, Input, Spin, Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setRerenderTribePage } from '../../../redux/AuthToken/Action';
import { API_DELETE_THREAD, API_GET_MESSAGES } from '../../../apis/TribeApis';
import TribeMessage from './TribeMessage';
import MyIcon from '../../../components/Icon/MyIcon';
import MyButton from '../../../components/Button/Button';
import { API_GET_USER_ATTRIBUTE } from '../../../apis/CoreApis';
import { initializeWebSocket, handleSendMessage } from './WebSocketFunctionality';
import OnlineMembersList from './OnlineMembersList';

const TribeThread = ({ SelectedThread, tribeInfo,setOnlineMembers}) => {
  const [ThreadData, setThreadData] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [ShowSpinner, setShowSpinner] = useState(false);
  const [socket, setSocket] = useState(null);
  const [UserAttributes, setUserAttributes] = useState();
  const messagesEndRef = useRef(null);
  const { tribe_id } = useParams();
  const { token, rerender_tribe_page } = useSelector((state) => state.authToken);
  const dispatch = useDispatch();

  const fetchMessages = async () => {
      const response = await API_GET_MESSAGES(token, tribe_id, SelectedThread?.id);
      setThreadData(response);
      console.log('API_GET_MESSAGES',response)
  };

  const fetchUserData = async () => {
    const response = await API_GET_USER_ATTRIBUTE(token);
    setUserAttributes(response);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    const chatSocket = initializeWebSocket( tribe_id, SelectedThread?.id, token, setThreadData, (socket) => setSocket(socket), () => setSocket(null), setOnlineMembers);
    fetchMessages();
    return () => {
      if (chatSocket) chatSocket.close();
    };
  }, [SelectedThread, initializeWebSocket]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [ThreadData]);

  const handleDeleteThread = async () => {
    try {
      await API_DELETE_THREAD(token, SelectedThread?.id);
      dispatch(setRerenderTribePage(!rerender_tribe_page));
    } catch (error) {
      console.error('Error deleting thread:', error);
    }
  };
  return (
    <Row className="t-t-container">

      <Col xs={24} className="t-t-header-col">
        <p className="t-t-header-goal">{SelectedThread?.name} Thread</p>
        <span>
        {tribeInfo?.is_admin && (
          <Popconfirm title="Are you sure you want to delete this thread?" onConfirm={handleDeleteThread} okText="Yes" cancelText="No" > <MyIcon type="delete" className="t-t-delete-thread-icon" /> </Popconfirm>
        )}
        </span>
      </Col>

      <Col xs={24} className="t-t-header-description">{SelectedThread?.description}</Col>
      
      <Col xs={24} className="t-t-messages-box">
        {ThreadData?.map((msg, index) => ( <TribeMessage key={index} msg={msg} currentUserID={UserAttributes?.id}/> ))}
        <div ref={messagesEndRef} />
      </Col>

      <Col xs={24} className="t-t-input-row">
      <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="t-t-input"
            onPressEnter={() => handleSendMessage(socket, UserAttributes, newMessage, setNewMessage)}
        />

        <MyButton onClick={()=>handleSendMessage(socket,UserAttributes,newMessage,setNewMessage)} text="Send" w="150px" h="40px" />
      </Col>

    </Row>
  );
};

export default TribeThread;
