import React from 'react'
import './styles/Settings.css'
import { Col, Divider, Row } from 'antd'
import GithubAuth from '../../utils/GithubAuth';

const SettingsLinked = ({setSettingsData,SettingsData}) => {
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setSettingsData({ ...SettingsData, [name]: value});
    };
  
  return (
    <div>
      <p className='settings-heading'>Linked</p>
      <Divider/>
      <Row>
        <Col xs={5}  sm={3} lg={2} >
            <p className='setting-label'>Github</p>
        </Col>
        <Col xs={19} sm={21} lg={22}>
          
            <GithubAuth GithubURL={SettingsData.github_link}/>
        </Col>
      </Row>
    </div>
  )
}

export default SettingsLinked
