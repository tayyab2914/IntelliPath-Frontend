import React, { useState, useCallback, useEffect } from "react";
import "../styles/RoadmapDisplay.css";
import { ReactFlow, useNodesState, useEdgesState, addEdge } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Row, Col } from "antd";
import { generateNodesAndEdges } from "./ReactFlowPage_functionality";
import { IMAGES } from "../../../data/ImageData";
import TitleMain from "../../../components/Title/TitleMain";
import { NodeWithHandles } from "./NodeWithHandles";
import useWindowWidth from "../../../hooks/useWindowWidth";
import RoadmapHeader from "../RoadmapHeader";

const nodeTypes = { custom: NodeWithHandles };

const RoadmapDisplay = ({ RoadmapData,regenerateRoadmapHandler,deleteRoadmapHandler}) => {
    const windowWidth = useWindowWidth();
    const handleNodeClick = (nodeId) => {
        alert(`Node clicked: ${nodeId}`);
    };

    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    useEffect(() => {
        if (RoadmapData && typeof RoadmapData === "object" && Object.keys(RoadmapData).length > 0) {
            const { nodes: newNodes, edges: newEdges } = generateNodesAndEdges(RoadmapData, handleNodeClick);
            setNodes(newNodes);
            setEdges(newEdges);
        }
    }, [RoadmapData]);
    

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    return (
        <>
            <div className="generic-container">
                <TitleMain
                    title="Your Pathway to Mastery"
                    description="Navigate your educational journey with clear milestones and tailored resources."
                />
            </div>
            <div className="roadmap-display-main">
                <div className="generic-container">
                    <RoadmapHeader RoadmapData={RoadmapData} regenerateRoadmapHandler={regenerateRoadmapHandler} deleteRoadmapHandler={deleteRoadmapHandler}/>

                    <Row>
                        {windowWidth < 992 && (
                            <Col xs={24} lg={8} className="roadmap-display-image">
                                <img src={IMAGES.roadmap2} alt="" />
                            </Col>
                        )}
                        <Col xs={24} lg={15}>
                            <div className="reactflow-container">
                                <ReactFlow
                                    nodes={nodes}
                                    edges={edges}
                                    nodeTypes={nodeTypes}
                                    onNodesChange={onNodesChange}
                                    onEdgesChange={onEdgesChange}
                                    onConnect={onConnect}
                                    zoomOnScroll={true}
                                    zoomOnPinch={true}
                                    fitView
                                    nodesDraggable={false}      
                                />
                            </div>
                        </Col>
                        {windowWidth >= 992 && (
                            <Col xs={24} lg={9} className="roadmap-display-image">
                                <img src={IMAGES.roadmap2} alt="" />
                            </Col>
                        )}
                    </Row>
                </div>
            </div>
        </>
    );
};

export default RoadmapDisplay;
