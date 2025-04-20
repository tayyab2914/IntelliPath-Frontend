import React, { useDebugValue, useState } from 'react';
import { EllipsisOutlined, EditOutlined, DeleteOutlined, TeamOutlined, CommentOutlined, PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Popover, Modal, Button, Popconfirm, Spin } from 'antd';
import '../styles/TribeAdminOptions.css';
import { useDispatch, useSelector } from 'react-redux';
import { setRerenderTribePage } from '../../../redux/AuthToken/Action';
import { API_DELETE_TRIBE } from '../../../apis/TribeApis';
import { useNavigate, useParams } from 'react-router-dom';
import EditTribeModal from './AdminOptions.js/EditTribeModal';
import ViewMembersModal from './AdminOptions.js/TribeMembersDropdownContent';
import NewThreadModal from './AdminOptions.js/NewThreadModal';

const TribeAdminOptions = () => {
    const { token, rerender_tribe_page} = useSelector((state) => state.authToken)
    const dispatch=useDispatch()
    const navigate = useNavigate()
        const { tribe_id } = useParams();
    // State for modals
    const [ShowSpinner, setShowSpinner] = useState(false);
    const [isEditModalVisible, setEditModalVisible] = useState(false);
    const [isCreateThreadModalVisible, setCreateThreadModalVisible] = useState(false);
    const [popoverVisible, setPopoverVisible] = useState(false);

    const showEditModal = () => {
        setEditModalVisible(true);
        setPopoverVisible(false); 
    };
   
    const showCreateThreadModal = () => {
        setCreateThreadModalVisible(true);
        setPopoverVisible(false); 
    };
    const handleCancel = () => {
        setEditModalVisible(false);
        setCreateThreadModalVisible(false);
    };

    const deleteTribeHandler = async () => {
        await API_DELETE_TRIBE(token,tribe_id,setShowSpinner)
        navigate('/tribes')
    }

    const content = (
        <div className='tribe-admin-options'>
            <p onClick={showEditModal}><EditOutlined /> Edit Tribe</p>
            <Popconfirm placement="rightBottom" title="Delete Tribe" description="Are you sure you delete this tribe?" okText="Yes" cancelText="No" onConfirm={deleteTribeHandler}>
                <p><DeleteOutlined /> Delete Tribe</p>
            </Popconfirm>
            
            <p onClick={showCreateThreadModal}><PlusOutlined /> Create Thread</p>
            
        </div>
    );

    return (
        <div className='tribe-admin-options-popover'>
        {ShowSpinner && <Spin fullscreen/>}
            <Popover content={content} trigger="click" visible={popoverVisible} onVisibleChange={setPopoverVisible} placement='bottomLeft'>
                <EllipsisOutlined rotate={90} className="tribe-chat-admin-icon" onClick={() => setPopoverVisible(!popoverVisible)} />
            </Popover>

            <EditTribeModal visible={isEditModalVisible} onClose={handleCancel}/>
           
            <NewThreadModal visible={isCreateThreadModalVisible} onClose={handleCancel}/>

        </div>
    );
};

export default TribeAdminOptions;
