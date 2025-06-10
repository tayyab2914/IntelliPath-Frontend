

import { Col, Row } from 'antd'
import React, { useState } from 'react'
import MyButton from '../../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { PlusOutlined   } from "@ant-design/icons";
import useWindowWidth from '../../../hooks/useWindowWidth'
import CreateTribeModal from './CreateTribeModal'

const TribeHeader = ({type}) => {
    const [OpenCreateTribeModal, setOpenCreateTribeModal] = useState(false);
    const navigate =useNavigate()
    const windowWidth= useWindowWidth()
  return (
    <>
    {type == "Explore" && <Row className="tribes-explore-header-row">
        <Col xs={24} md={8} className="tribes-explore-header-goal-col">
            <p className="tribes-explore-header-goal">Explore Tribes</p>
        </Col>
        <Col xs={24} md={16} className="tribes-explore-header-icons-col">
            <MyButton w={windowWidth < 576 ? "100%" :'200px'} className={"tribes-explore-header-joined-tribe-btn"} variant='outlined-dark' text={"Joined Tribes"} onClick={()=>navigate('/tribes')}/>
            <MyButton w={windowWidth < 500 ? "100%" :'200px'} className={"tribes-explore-header-create-tribe-btn"} variant='filled' onClick={()=>setOpenCreateTribeModal(true)} text={<><PlusOutlined /> Create Tribe</>}/>
        </Col>
    </Row>}
    {type == "Joined" && <Row className="tribes-explore-header-row">
        <Col xs={24} md={8} className="tribes-explore-header-goal-col">
            <p className="tribes-explore-header-goal">Joined Tribes</p>
        </Col>
        <Col xs={24} md={16} className="tribes-explore-header-icons-col">
            <MyButton w={windowWidth < 576 ? "100%" :'200px'} className={"tribes-explore-header-joined-tribe-btn"} variant='outlined-dark' text={"Explore Tribes"} onClick={()=>navigate('/tribes/explore')}/>
            <MyButton w={windowWidth < 500 ? "100%" :'200px'} className={"tribes-explore-header-create-tribe-btn"} variant='filled' onClick={()=>setOpenCreateTribeModal(true)} text={<><PlusOutlined /> Create Tribe</>}/>
        </Col>
    </Row>}
    {OpenCreateTribeModal && <CreateTribeModal visible={OpenCreateTribeModal} onClose={() => setOpenCreateTribeModal(false)} />}
    
    </>

  )
}

export default TribeHeader

