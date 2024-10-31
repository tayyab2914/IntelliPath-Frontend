import React, { useState, useCallback } from "react";
import "../styles/RoadmapDisplay.css";
import { ReactFlow, useNodesState, useEdgesState, addEdge } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Row, Col, Tag } from "antd";
import { generateNodesAndEdges } from "./ReactFlowPage_functionality";
import { IMAGES } from "../../../data/ImageData";
import TitleMain from "../../../components/Title/TitleMain";
import { NodeWithHandles } from "./NodeWithHandles";
import { ROADMAP_DATA } from "../../../data/RoadmapData";
import useWindowWidth from "../../../hooks/useWindowWidth";
import RoadmapHeader from "../RoadmapHeader";

const nodeTypes = { custom: NodeWithHandles };

const RoadmapDisplay = () => {
    const [roadmapData, setroadmapData] = useState(ROADMAP_DATA);
  const windowWidth = useWindowWidth()
    const handleNodeClick = (nodeId) => {
      alert(`Node clicked RoadmapDisplay: ${nodeId}`);
    };

    const { nodes: initialNodes, edges: initialEdges } = generateNodesAndEdges( roadmapData?.techs, handleNodeClick );

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback( (params) => setEdges((eds) => addEdge(params, eds)), [setEdges] );

  return (
    < >
      <div className="generic-container">
        <TitleMain title="Your Pathway to Mastery" description="Navigate your educational journey with clear milestones and tailored resources." />
      </div>
      <div className="roadmap-display-main">
      <div className="generic-container ">
        <RoadmapHeader ROADMAP_DATA={roadmapData} />

        <Row>
          {windowWidth < 992 && ( <Col xs={24} lg={8} className="roadmap-display-image"> <img src={IMAGES.roadmap2} alt="" /> </Col> )}
          <Col xs={24} lg={15}>
            <div className="reactflow-container">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                zoomOnScroll={false}
                zoomOnPinch={false}
                //   panOnScroll={false}
                //   panOnDrag={false}
                fitView
              />
            </div>
          </Col>
          {windowWidth >= 992 && (<Col xs={24} lg={9} className="roadmap-display-image"><img src={IMAGES.roadmap2} alt="" /></Col>)}
        </Row>
      </div></div>
    </>
  );
};

export default RoadmapDisplay;
