import { Col, Popconfirm, Row, Tag, Dropdown, Menu, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import MyIcon from '../../components/Icon/MyIcon';

const RoadmapHeader = ({ RoadmapData }) => {
    const [suggestedProjects, setSuggestedProjects] = useState(RoadmapData?.suggested_projects);

    useEffect(() => {
        console.log(RoadmapData)
        setSuggestedProjects(RoadmapData?.suggested_projects)
    }, [RoadmapData]);

    const deleteRoadmapHandler = () => {
        console.log("DELETE ROADMAP CLICKED");
    };

    const regenerateRoadmapHandler = () => {
        console.log("REGENERATE ROADMAP CLICKED");
    };

    const suggestedProjectsMenu = (
        <Menu>
            {suggestedProjects?.length > 0 ? (
                suggestedProjects?.map((project, index) => (
                    <Menu.Item key={index}>
                        {project} {/* Displaying project name */}
                    </Menu.Item>
                ))
            ) : (
                <Menu.Item disabled>No suggested projects</Menu.Item>
            )}
        </Menu>
    );

    return (
        <Row className="roadmap-display-header-row">
            <Col xs={18} className="roadmap-display-header-goal-col">
                <p className="roadmap-display-header-goal">{RoadmapData?.roadmap_name}</p>
            </Col>
            <Col xs={6} className="roadmap-display-header-icons-col">
                <Popconfirm 
                    title="Are you sure you want to regenerate the roadmap?" 
                    onConfirm={regenerateRoadmapHandler} 
                    okText="Yes" 
                    cancelText="No"
                >
                    <MyIcon type="regenerate" className="roadmap-display-header-icon-regenerate" />
                </Popconfirm>
                <Popconfirm 
                    title="Are you sure you want to delete the roadmap?" 
                    onConfirm={deleteRoadmapHandler} 
                    okText="Yes" 
                    cancelText="No"
                >
                    <MyIcon type="delete" className="roadmap-display-header-icon-delete" />
                </Popconfirm>

                {/* Dropdown for suggested projects */}
                <Dropdown overlay={suggestedProjectsMenu} trigger={['click']}>
                    <Button className="roadmap-dropdown-button">
                        Suggested Projects <MyIcon type="dropdown" />
                    </Button>
                </Dropdown>
            </Col>
        </Row>
    );
};

export default RoadmapHeader;
