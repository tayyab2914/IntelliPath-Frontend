import { Col, Row, Select } from 'antd';
import React, { useState } from 'react';
import MyIcon from '../../../components/Icon/MyIcon';
import MyButton from '../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import useWindowWidth from '../../../hooks/useWindowWidth';
import '../styles/TribeChat.css';
import CreateTribeModal from '../TribeNavigation/CreateTribeModal';

const { Option } = Select;

const TribeChatHeader = ({ availableThreads, setSelectedThreadId }) => {
    const [openCreateTribeModal, setOpenCreateTribeModal] = useState(false);
    const navigate = useNavigate();
    const windowWidth = useWindowWidth();

    return (
        <>
            <Row className="tribes-chat-header-row">
                <Col xs={24} md={8} className="tribes-chat-header-goal-col">
                    <p className="tribes-chat-header-goal">{availableThreads?.tribe_name}</p>
                </Col>
                <Col xs={24} md={16} className="tribes-chat-header-icons-col">
                    <MyButton w={windowWidth < 576 ? "100%" : '200px'} className="tribes-chat-header-joined-tribe-btn" variant="outlined-dark" 
                        text={<span className="align-vertically-centered"><MyIcon type="shineAccent" className="suggested-user-icon" /> Suggested Users</span>} 
                        onClick={() => navigate('/user/46')} 
                    />
                    <Select className="tribes-chat-select" defaultValue={"Select Thread"}  onChange={setSelectedThreadId} size="medium">
                        {availableThreads?.map((thread) => (<Option key={thread.id} value={thread.id}>{thread.name}</Option>))}
                    </Select>
                </Col>
            </Row>
        </>
    );
};

export default TribeChatHeader;
