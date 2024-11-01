import React, { useState, useEffect, useRef } from 'react';
import '../styles/TribeThread.css';
import { Col, Row, Input, Popover } from 'antd';
import { SINGLE_THREAD_DATA } from '../../../data/TribesData';
import MyIcon from '../../../components/Icon/MyIcon';
import { FORMAT_TIMESTAMP } from '../../../utils/ReusableFunctionalities';
import MyButton from '../../../components/Button/Button';
import TribePopoverContent from './TribePopoverContent';

const TribeThread = ({ selectedThreadId, userId = 46 }) => {
    const [ThreadData, setThreadData] = useState(SINGLE_THREAD_DATA);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null); // Reference for the messages container

    // Handler for sending a message
    const handleSendMessage = () => {
        if (newMessage.trim()) {
            const newMessageData = {
                member_id: userId,
                member_name: "Current User",
                member_avatar: <MyIcon type="avatar" size="sm" />,
                time: Date.now(),
                message: newMessage
            };
            setThreadData(prevData => ({ ...prevData, messages: [...prevData.messages, newMessageData] }));
            setNewMessage('');
        }
    };

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [ThreadData.messages]);

    return (
        <Row className="tribes-thread-container">
            <Col xs={24} className="tribes-thread-header-col">
                <p className="tribes-thread-header-goal">{ThreadData?.thread_name} Thread</p>
                {userId == ThreadData?.thread_admin &&
               <Popover content={TribePopoverContent} trigger="click" placement='bottomRight'>
               <MyIcon type="elipsis" className={"tribe-thread-elipsis-icon"}/>
           </Popover>
                }
            </Col>

            <Col xs={24} className="tribes-thread-messages-box">
                {ThreadData.messages.map((msg, index) => (
                    <div key={index} className={`tribes-message ${msg.member_id === userId ? 'tribes-message-right' : 'tribes-message-left'}`}>
                        <div className="tribes-message-avatar">{msg.member_avatar}</div>
                        <div className="tribes-message-content">
                            <p className='tribes-message-content-member_name'>{msg.member_id === userId ? "You" : msg.member_name}</p>
                            <p className='tribes-message-content-message'>{msg.message}</p>
                            <p className='tribes-message-content-time'>{FORMAT_TIMESTAMP(msg.time)}</p>
                        </div>
                    </div>
                ))}
                {/* Empty div at the end for scrolling */}
                <div ref={messagesEndRef} />
            </Col>

            <Col xs={24} className="tribes-thread-input-row">
                <Input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type a message..." className="tribes-thread-input" onPressEnter={handleSendMessage} />
                <MyButton variant={"filled"} onClick={handleSendMessage} text={"Send"} w='100px' h='38px' m='' />
            </Col>
        </Row>
    );
};

export default TribeThread;
