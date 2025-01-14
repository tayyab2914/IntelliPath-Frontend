import React, { useEffect, useState } from 'react';
import NavbarMain from '../../../components/Navbar/NavbarMain';
import Footer from '../../../components/Footer/Footer';
import '../styles/TribeChat.css';
import TribeChatHeader from './TribeChatHeader';
import TribeThread from './TribeThread';
import { useParams } from 'react-router-dom';
import { API_GET_THREADS_LIST } from '../../../apis/TribeApis';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';

const TribeChatMain = () => {
    const [ShowSpinner, setShowSpinner] = useState(false);
    const { token, rerender_tribe_page } = useSelector((state) => state.authToken);
    const { tribe_id } = useParams();
    const [availableThreads, setAvailableThreads] = useState([]);
    const [SelectedThread, setSelectedThread] = useState({});

    const fetchThreadList = async () => {
        const response = await API_GET_THREADS_LIST(token, tribe_id, setShowSpinner);
        console.log('fetchThreadList', response);
        setAvailableThreads(response);
    };

    useEffect(()=>{
        console.log(SelectedThread)
    })
    useEffect(() => {
        fetchThreadList();
    }, [tribe_id, rerender_tribe_page]);

    return (
        <div>
            <NavbarMain />
            {ShowSpinner && <Spin fullscreen />}
            <div className="generic-container">
                <div className="tribe-chat-main">
                    <TribeChatHeader
                        availableThreads={availableThreads}
                        setSelectedThread={setSelectedThread}
                        SelectedThread={SelectedThread}
                    />
                    {SelectedThread && (
                        <TribeThread
                            SelectedThread={SelectedThread}
                            tribeInfo = {availableThreads?.tribe}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TribeChatMain;
