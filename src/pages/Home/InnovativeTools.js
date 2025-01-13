import React from 'react'
import './styles/InnovativeTools.css'
import { Col, Row } from 'antd'
import MyIcon from '../../components/Icon/MyIcon'
import { useNavigate } from 'react-router-dom'
import { INNOVATIVE_TOOLS_DATA } from '../../data/HomeData'
import useSpeech from '../../utils/WebSpeech.js/functionalities/useSpeech'

const InnovativeTools = () => {
    const {speakWord} = useSpeech()
const navigate = useNavigate()
  return (
    <div className='generic-container'>
        <div className="innovative-tools-main">
            <p className='it-heading'  >Innovative Tools for Success</p>
            <p className='it-description'  >Unlock your potential with IntelliPath's suite of innovative tools designed to enhance your learning experience.</p>
            
            <Row  gutter={[15, 30]}>
            {INNOVATIVE_TOOLS_DATA.map(({name,description,path,icon})=><>
                <Col className="gutter-row" xs={12}sm={8}lg={6} onClick={()=>navigate(path)}>
                    <div className="it-card-inner" data-aos="fade-right">
                        <MyIcon type={icon} size='xl'/>
                        <p className='it-card-title'  onMouseEnter={()=>speakWord(name)}>{name}</p>
                        <p className='it-card-description'  onMouseEnter={()=>speakWord(description)}>{description}</p>
                    </div>
                </Col>

            </>)}
    </Row>
        </div>
    </div>
  )
}

export default InnovativeTools
