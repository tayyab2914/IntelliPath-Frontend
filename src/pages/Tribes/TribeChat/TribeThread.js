import React, { useState, useEffect, useRef } from 'react';
import '../styles/TribeThread.css';
import { Col, Row, Input, Popover, Spin, Popconfirm } from 'antd';
import { SINGLE_THREAD_DATA } from '../../../data/TribesData';
import MyIcon from '../../../components/Icon/MyIcon';
import { FORMAT_TIMESTAMP } from '../../../utils/ReusableFunctionalities';
import MyButton from '../../../components/Button/Button';
import { API_DELETE_THREAD, API_GET_MESSAGES } from '../../../apis/TribeApis';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setRerenderTribePage } from '../../../redux/AuthToken/Action';

const TribeThread = ({ SelectedThread, tribeInfo,userId = 2 }) => {
    const [ThreadData, setThreadData] = useState(SINGLE_THREAD_DATA);
    const { tribe_id } = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);
    const [ShowSpinner, setShowSpinner] = useState(false);
    const { token, rerender_tribe_page } = useSelector((state) => state.authToken);

    const getMessages = async () => {
        const response = await API_GET_MESSAGES(token, tribe_id, SelectedThread?.id, setShowSpinner);
        setThreadData(response);  
    };

    useEffect(() => {
        console.log(SelectedThread)
        getMessages();
    }, [SelectedThread?.id]);

    // Handle sending a new message
    const handleSendMessage = () => {
        if (newMessage.trim()) {
            const newMessageData = {
                member_id: userId,
                member_name: "Current User",
                member_avatar: <MyIcon type="avatar" size="sm" />,
                time: Date.now(),
                message: newMessage,
            };

            setThreadData(prevData => ({ ...prevData, messages: [...prevData.messages, newMessageData], }));

            setNewMessage('');
        }
    };

    const deleteThreadHandler = async()=>{
            await API_DELETE_THREAD(token,SelectedThread?.id,setShowSpinner)
            dispatch(setRerenderTribePage(!rerender_tribe_page))
    }
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [ThreadData?.messages]);

    return (
        <Row className="t-t-container">
            {ShowSpinner && <Spin fullscreen />}
            <Col xs={24} className="t-t-header-col">
                <p className="t-t-header-goal">{SelectedThread?.name} Thread</p>
                {tribeInfo?.is_admin && (
                    <Popconfirm title="Are you sure you want to delete this thread?" onConfirm={deleteThreadHandler} okText="Yes" cancelText="No">
                         <MyIcon type={"delete"} className={'t-t-delete-thread-icon'}/>
                    </Popconfirm>
                )}
            </Col>
            <Col xs={24} className="t-t-header-col">
                <p className="t-t-header-description">{SelectedThread?.description}</p>  
            </Col>
            <Col xs={24} className="t-t-messages-box">
                {ThreadData?.length > 0 && ThreadData?.map((msg, index) => (
                    <div
                        key={index}
                        className={`tribes-message ${msg.user === userId ? 't-m-right' : 't-m-left'}`}
                    >
                        <div className="t-m-avatar">{msg.profile_picture}</div>
                        <div className="t-m-content">
                            <p className="t-m-content-member_name">
                                {msg.member_id === userId ? "You" : msg.user_name}
                            </p>
                            <p className="t-m-content-message">{msg.message}</p>
                            <p className="t-m-content-time">{FORMAT_TIMESTAMP(msg.timestamp)}</p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </Col>

            <Col xs={24} className="t-t-input-row">
                <Input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="t-t-input"
                    onPressEnter={handleSendMessage}
                />
                <MyButton variant="filled" onClick={handleSendMessage} text="Send" w="100px" h="38px" m="" />
            </Col>
        </Row>
    );
};

export default TribeThread;
