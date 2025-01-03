import React, { useEffect, useState } from 'react';
import NavbarMain from '../../../components/Navbar/NavbarMain';
import Footer from '../../../components/Footer/Footer';
import '../styles/TribeChat.css';
import TribeChatHeader from './TribeChatHeader';
import { SINGLE_TRIBE_DATA } from '../../../data/TribesData';
import TribeThread from './TribeThread';
import { useParams } from 'react-router-dom';
import { API_GET_THREADS_LIST } from '../../../apis/TribeApis';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';

const TribeChatMain = () => {
    const [TribeData, setTribeData] = useState(SINGLE_TRIBE_DATA);
    const [ShowSpinner, setShowSpinner] = useState(false);
    const { token, rerender_tribe_page } = useSelector((state) => state.authToken);
    const { tribe_id } = useParams();
    const [availableThreads, setAvailableThreads] = useState([]);
    const [selectedThreadId, setSelectedThreadId] = useState(null);

    const fetchThreadList = async () => {
        const response = await API_GET_THREADS_LIST(token, tribe_id, setShowSpinner);
        setAvailableThreads(response);
    };

    useEffect(() => {
        fetchThreadList();
    }, [tribe_id, rerender_tribe_page]);

    useEffect(()=>{
        console.log(selectedThreadId)
    },[selectedThreadId])
    return (
        <div>
            <NavbarMain />
            {ShowSpinner && <Spin fullscreen />}
            <div className="generic-container">
                <div className="tribe-chat-main">
                    <TribeChatHeader
                        availableThreads={availableThreads}
                        setSelectedThreadId={setSelectedThreadId}
                    />
                    {selectedThreadId && (
                        <TribeThread selectedThreadId={selectedThreadId} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TribeChatMain;
