import React, { useEffect, useState } from 'react';
import { Col, Row, Select } from 'antd';
import MyIcon from '../../../components/Icon/MyIcon';
import MyButton from '../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import useWindowWidth from '../../../hooks/useWindowWidth';
import '../styles/TribeChat.css';
import TribeAdminOptions from './TribeAdminOptions';
const { Option } = Select;

const TribeChatHeader = ({ availableThreads, setSelectedThread,SelectedThread }) => {
    const {tribe, threads} = availableThreads
    const [defaultThread, setDefaultThread] = useState(null);
    const navigate = useNavigate();
    const windowWidth = useWindowWidth();

    useEffect(() => {
        if (threads?.length > 0) {
            const firstThread = threads[0];
            setDefaultThread(firstThread);
            setSelectedThread(firstThread); 
        }
    }, [availableThreads]);

    const handleThreadChange = (threadId) => {
        const selectedThread = threads.find((thread) => thread.id === threadId);
        setSelectedThread(selectedThread); 
    };

    return (
        <Row className="tribes-chat-header-row">
            <Col xs={24} md={8} className="tribes-chat-header-goal-col">
                <p className="tribes-chat-header-goal">{tribe?.name}</p>
            </Col>
            <Col xs={24} md={16} className="tribes-chat-header-icons-col">
                <MyButton
                    w={windowWidth < 576 ? '100%' : '200px'}
                    className="tribes-chat-header-joined-tribe-btn"
                    variant="outlined-dark"
                    text={ <span className="align-vertically-centered"> <MyIcon type="shineAccent" className="suggested-user-icon" /> Suggested Users </span> }
                    onClick={() => navigate('/user/46')}
                />
                <Select
                    className="tribes-chat-select"
                    value={SelectedThread?.id || 'No threads available'}  
                    onChange={handleThreadChange}
                    size="medium"
                >
                    {threads?.map((thread) => ( <Option key={thread.id} value={thread.id}> {thread.name} </Option>))}
                </Select>
                {tribe?.is_admin && <TribeAdminOptions/>}
            </Col>
        </Row>
    );
};

export default TribeChatHeader;
