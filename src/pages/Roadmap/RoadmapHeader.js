import { Col, Popconfirm, Row, Tag } from 'antd'
import React from 'react'
import MyIcon from '../../components/Icon/MyIcon'

const RoadmapHeader = ({ROADMAP_DATA}) => {
    const deleteRoadmapHandler =()=>{
        console.log("DELETE ROADMAP CLICKED")
    }
    const regenerateRoadmapHandler =()=>{
        console.log("REGENERATE  ROADMAP CLICKED")
    }
  return (
    <Row className="roadmap-display-header-row">
        <Col xs={18} className="roadmap-display-header-goal-col">
            <p className="roadmap-display-header-goal">{ROADMAP_DATA?.goal}</p>
            <Tag color="cyan" className="roadmap-display-header-progress-tag"> {(ROADMAP_DATA?.techs_completed / ROADMAP_DATA?.techs_total) * 100}% Completed </Tag>
            <span className="roadmap-display-header-completion"> {ROADMAP_DATA?.techs_completed} of {ROADMAP_DATA?.techs_total} Done </span>
        </Col>
        <Col xs={6} className="roadmap-display-header-icons-col">
            <Popconfirm title="Are you sure you want to regenerate the roadmap?" onConfirm={regenerateRoadmapHandler} okText="Yes" cancelText="No" className='roadmap-popconfirm'>
                <MyIcon type={"regenerate"} className="roadmap-display-header-icon-regenerate" onClick={regenerateRoadmapHandler}/>
            </Popconfirm>
            <Popconfirm title="Are you sure you want to delete the roadmap?" onConfirm={deleteRoadmapHandler} okText="Yes" cancelText="No" >
                <MyIcon type={"delete"} className="roadmap-display-header-icon-delete" onClick={deleteRoadmapHandler}/>
            </Popconfirm>
        </Col>
    </Row>
  )
}

export default RoadmapHeader
