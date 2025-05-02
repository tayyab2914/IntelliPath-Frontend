import React, { useEffect, useState } from "react";
import NavbarMain from "../../../components/Navbar/NavbarMain";
import Footer from "../../../components/Footer/Footer";
import "../styles/TribeChat.css";
import TribeChatHeader from "./TribeChatHeader";
import TribeThread from "./TribeThread";
import { useParams } from "react-router-dom";
import { API_GET_THREADS_LIST } from "../../../apis/TribeApis";
import { useSelector } from "react-redux";
import { Col, Row, Spin } from "antd";

const TribeChatMain = () => {
  const [ShowSpinner, setShowSpinner] = useState(false);
  const { token, rerender_tribe_page } = useSelector(
    (state) => state.authToken
  );
  const { tribe_id } = useParams();
  const [availableThreads, setAvailableThreads] = useState([]);
  const [SelectedThread, setSelectedThread] = useState({});
    const [OnlineMembers, setOnlineMembers] = useState([]);


  const fetchThreadList = async () => {
    const response = await API_GET_THREADS_LIST(
      token,
      tribe_id,
      setShowSpinner
    );
    setAvailableThreads(response);
    const firstThread = response.threads[0];
    setSelectedThread(firstThread);
  };

  useEffect(() => {
    fetchThreadList();
  }, [tribe_id, rerender_tribe_page]);

  return (
    <div>
      <NavbarMain />
      {/* {ShowSpinner && <Spin fullscreen />} */}
      <div className="generic-container">
        <div className="tribe-chat-main">
          <Row gutter={[10,10]}>
            <Col xs={24} lg={7}>
              <TribeChatHeader
                availableThreads={availableThreads}
                setSelectedThread={setSelectedThread}
                SelectedThread={SelectedThread}
                 OnlineMembers={OnlineMembers}
              />
            </Col>
            <Col xs={24} lg={17}>
              {SelectedThread && (
                <TribeThread
                  SelectedThread={SelectedThread}
                  tribeInfo={availableThreads?.tribe}
                  setOnlineMembers={setOnlineMembers}
                />
              )}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default TribeChatMain;
