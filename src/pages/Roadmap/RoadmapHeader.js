import { Col, Popconfirm, Row, Tag, Dropdown, Menu, Button, message, Spin, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import MyIcon from '../../components/Icon/MyIcon';
import { API_GENERATE_ROADMAP } from '../../apis/RoadmapApis';
import './styles/RoadmapDisplay.css'
import { useNavigate } from 'react-router-dom';
import { GET_ROADMAP_PROGRESS } from './RoadmapFunctionality';
import useWindowWidth from '../../hooks/useWindowWidth';
const RoadmapHeader = ({ RoadmapData,regenerateRoadmapHandler,deleteRoadmapHandler }) => {
    const [suggestedProjects, setSuggestedProjects] = useState(RoadmapData?.suggested_projects);
    const [LearningApproach, setLearningApproach] = useState(RoadmapData?.learning_approach);
    const [RoadmapProgress, setRoadmapProgress] = useState({});
    const windowWidth = useWindowWidth()
    const navigate = useNavigate()
    useEffect(() => {
        if (RoadmapData?.suggested_projects) {
          setSuggestedProjects(RoadmapData.suggested_projects);
        }
        if (RoadmapData?.learning_approach) {
            setLearningApproach(RoadmapData.learning_approach);
        }
        setRoadmapProgress(GET_ROADMAP_PROGRESS(RoadmapData))
    }, [RoadmapData?.suggested_projects,RoadmapData?.learning_approach]);
      


    const suggestedProjectsMenu = (
        <Menu>
                {suggestedProjects?.map((project, index) => (
                    <Menu.Item key={index}>
                        {project} {/* Displaying project name */}
                    </Menu.Item>
                ))}
        </Menu>
    );
    const LearningApproachMenu = (
        <Menu>
               { LearningApproach?.map((project, index) => (
                    <Menu.Item key={index}>
                        {project} {/* Displaying project name */}
                    </Menu.Item>
                ))}
        </Menu>
      );
  const headerIcons = () => {
  return (
    <span className="roadmap-display-header-icons">
      <Tooltip title="Regenerate Roadmap">
        <Popconfirm
          title="Are you sure you want to regenerate the roadmap?"
          onConfirm={regenerateRoadmapHandler}
          okText="Yes"
          cancelText="No"
        >
          <MyIcon type="regenerate" className="roadmap-display-header-icon-regenerate" />{" "}
        </Popconfirm>
      </Tooltip>

      <Tooltip title="Delete Roadmap">
        <Popconfirm
          title="Are you sure you want to delete the roadmap?"
          onConfirm={deleteRoadmapHandler}
          okText="Yes"
          cancelText="No"
        >
          <MyIcon type="delete" className="roadmap-display-header-icon-delete" />{" "}
        </Popconfirm>
      </Tooltip>
    </span>
  );
};



const coursesHandler =()=>{
    navigate("/courses?roadmap=true")
}
    return (
        <>
        <Row className="roadmap-display-header-row">
            <Col xs={24} xl={14} className="roadmap-display-header-goal-col">
                <p className="roadmap-display-header-goal">{RoadmapData?.roadmap_name}</p>
                
                {windowWidth<= 576 && headerIcons()}
            </Col>
            <Col xs={24} xl={10} className="roadmap-display-header-icons-col">
            {suggestedProjects?.length>0 && <Dropdown overlay={suggestedProjectsMenu} trigger={['click']}>
                    <Button className="roadmap-dropdown-button">
                        Suggested Projects <MyIcon type="dropdown" />
                    </Button>
            </Dropdown>}
            {LearningApproach?.length && <Dropdown overlay={LearningApproachMenu} trigger={['click']}>
                    <Button className="roadmap-dropdown-button">
                        Learning Approach <MyIcon type="dropdown" />
                    </Button>
            </Dropdown>}
            <Button className="roadmap-dropdown-button" onClick={coursesHandler}>
                        Courses <MyIcon type="dropdown" />
                    </Button>
            {windowWidth> 576 && headerIcons()}

                
            </Col>
            <Col xs={24} className='roadmap-display-header-progress'>
                <Tag color="cyan"> {`${RoadmapProgress?.progressPercentage || 0}% Completed`} </Tag>
                <span>{`${RoadmapProgress?.completedModules || 0 } of ${RoadmapProgress?.totalModules} Done`}</span>
            </Col>
        </Row>
        </>
    );
};

export default RoadmapHeader;
