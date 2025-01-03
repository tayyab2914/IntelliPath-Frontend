import React, { useState, useEffect, useRef } from 'react';
import '../styles/TribeThread.css';
import { Col, Row, Input, Popover, Spin } from 'antd';
import { SINGLE_THREAD_DATA } from '../../../data/TribesData';
import MyIcon from '../../../components/Icon/MyIcon';
import { FORMAT_TIMESTAMP } from '../../../utils/ReusableFunctionalities';
import MyButton from '../../../components/Button/Button';
import TribePopoverContent from './TribePopoverContent';
import { API_GET_MESSAGES } from '../../../apis/TribeApis';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const TribeThread = ({ selectedThreadId, userId = 2 }) => {
    const [ThreadData, setThreadData] = useState(SINGLE_THREAD_DATA);
    const { tribe_id } = useParams();
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);
    const [ShowSpinner, setShowSpinner] = useState(false);
    const { token, rerender_tribe_page } = useSelector((state) => state.authToken);

    // Fetch messages for the selected thread
    const getMessages = async () => {
        const response = await API_GET_MESSAGES(token, tribe_id, selectedThreadId, setShowSpinner);
        setThreadData(response);  // Ensure correct response structure
        console.log(response)
    };

    useEffect(() => {
        getMessages();
    }, [selectedThreadId]);

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

            // Update the thread data by adding the new message to the messages array
            setThreadData(prevData => ({
                ...prevData,
                messages: [...prevData.messages, newMessageData],
            }));

            setNewMessage('');
        }
    };

    // Scroll to the latest message
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [ThreadData.messages]);

    return (
        <Row className="tribes-thread-container">
            {ShowSpinner && <Spin fullscreen />}
            <Col xs={24} className="tribes-thread-header-col">
                <p className="tribes-thread-header-goal">{ThreadData?.thread_name} Thread</p>
                {userId === ThreadData?.tribe_admin && (
                    <Popover content={TribePopoverContent} trigger="click" placement="bottomRight">
                        <MyIcon type="elipsis" className={"tribe-thread-elipsis-icon"} />
                    </Popover>
                )}
            </Col>

            <Col xs={24} className="tribes-thread-messages-box">
                {ThreadData?.map((msg, index) => (
                    <div
                        key={index}
                        className={`tribes-message ${msg.user === userId ? 'tribes-message-right' : 'tribes-message-left'}`}
                    >
                        <div className="tribes-message-avatar">{msg.profile_picture}</div>
                        <div className="tribes-message-content">
                            <p className="tribes-message-content-member_name">
                                {msg.member_id === userId ? "You" : msg.user_name}
                            </p>
                            <p className="tribes-message-content-message">{msg.message}</p>
                            <p className="tribes-message-content-time">{FORMAT_TIMESTAMP(msg.timestamp)}</p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </Col>

            <Col xs={24} className="tribes-thread-input-row">
                <Input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="tribes-thread-input"
                    onPressEnter={handleSendMessage}
                />
                <MyButton variant="filled" onClick={handleSendMessage} text="Send" w="100px" h="38px" m="" />
            </Col>
        </Row>
    );
};

export default TribeThread;
