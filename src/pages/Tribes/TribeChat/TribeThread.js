import { useState, useEffect, useRef } from 'react';
import '../styles/TribeThread.css';
import { Col, Row, Input, Popconfirm, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setRerenderTribePage } from '../../../redux/AuthToken/Action';
import { API_DELETE_THREAD, API_GET_MESSAGES } from '../../../apis/TribeApis';
import TribeMessage from './TribeMessage';
import MyIcon from '../../../components/Icon/MyIcon';
import MyButton from '../../../components/Button/Button';
import { initializeWebSocket, handleSendMessage } from './WebSocketFunctionality';
import TribeMembersDropdownContent from './AdminOptions.js/TribeMembersDropdownContent';
import AutoTextCropper from '../../../components/AutoTextCropper/AutoTextCropper';

const TribeThread = ({ SelectedThread, tribeInfo, setOnlineMembers }) => {
  const [ThreadData, setThreadData] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [socket, setSocket] = useState(null);
  const messagesEndRef = useRef(null);
  const { tribe_id } = useParams();
  const { token, rerender_tribe_page, user_attributes, refetch_tribe_members } = useSelector((state) => state.authToken);
  const dispatch = useDispatch();
  const socketRef = useRef(null);

  const bannedUntil = tribeInfo?.banned_upto_time ? new Date(tribeInfo.banned_upto_time) : null;
  const isBanned = bannedUntil && bannedUntil > new Date();

  const fetchMessages = async () => {
    const response = await API_GET_MESSAGES(token, tribe_id, SelectedThread?.id);
    const updatedMessages = response?.map(msg => ({ ...msg, is_main_user: msg.user === user_attributes?.id }));
    setThreadData(updatedMessages);
  };

  const initializeSocket = () => {
    if (socketRef.current) {
      socketRef.current.close();
    }
    const chatSocket = initializeWebSocket( tribe_id, SelectedThread?.id, token, setThreadData, (socket) => { setSocket(socket); socketRef.current = socket; },  () => { setSocket(null); socketRef.current = null; }, setOnlineMembers, user_attributes, dispatch, rerender_tribe_page, refetch_tribe_members );
    return chatSocket;
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        if (!socket || socket.readyState !== WebSocket.OPEN) {
          initializeSocket();
          fetchMessages();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    initializeSocket();
    fetchMessages();

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (socketRef.current) {
        socketRef.current.close();
      }
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
        <p className="t-t-header-goal"><AutoTextCropper text={`${SelectedThread?.name} Thread`} TooltipTitle={`${SelectedThread?.name} Thread`} textStyles={{fontSize:"20px"}}/></p>
        <span className="t-t-header-options">
          <TribeMembersDropdownContent tribeId={tribe_id} />

          {tribeInfo?.is_admin && (
            <Popconfirm title="Are you sure you want to delete this thread?" onConfirm={handleDeleteThread} okText="Yes" cancelText="No" placement="bottomRight" >
              <MyIcon type="delete" className="t-t-delete-thread-icon" />
            </Popconfirm>
          )}
        </span>
      </Col>

      <Col xs={24} className="t-t-header-description">
        {SelectedThread?.description}
      </Col>

      <Col xs={24} className="t-t-messages-box">
        {ThreadData?.map((msg, index) => (
          <TribeMessage  key={index}  msg={msg}  currentUserID={user_attributes?.id}  showRight={msg.is_main_user}  />
        ))}
        <div ref={messagesEndRef} />
      </Col>

      {isBanned ? <Col xs={24} className="t-t-input-row">
       <Tag color='red' className='t-t-ban-tag'>
            {"You are currently banned from messaging until "} <strong>{bannedUntil.toLocaleString()}</strong> {"due to messaging against community guidelines."}
      </Tag>

      </Col>:
      <Col xs={24} className="t-t-input-row">
        <Input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type a message..." className="t-t-input" onPressEnter={() =>  handleSendMessage(socket, user_attributes, newMessage, setNewMessage) } />

        <MyButton onClick={() => handleSendMessage(socket, user_attributes, newMessage, setNewMessage) } text="Send" w="150px" h="40px" />
      </Col>}
    </Row>
  );
};

export default TribeThread;
