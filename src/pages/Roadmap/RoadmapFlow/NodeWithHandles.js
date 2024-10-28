import { ReactFlow, useNodesState, useEdgesState, addEdge, Handle } from "@xyflow/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const NodeWithHandles = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (data.onClick) {
      const encodedCourseName = encodeURIComponent(data.label);
      navigate(`/courses?course_name=${encodedCourseName}`);
      data.onClick();
    }
  };
  console.log(data);

  return (
    <>
      <div style={{ ...data.style, backgroundColor: !data.is_minor && isHovered ? "#F3F3F3" : "white", cursor: !data.is_minor && isHovered ? "pointer" : "arrow", }} onClick={handleClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >

        {!data.is_minor ? (
          <Handle type="target" position="top" style={{ background: "transparent", width: 0, height: 0, border: "none", }} />
        ) : (
          <Handle type="target" position="left" style={{ background: "transparent", width: 0, height: 0, border: "none", }} />
        )}

        {data.label}

        {!data.is_minor ? (
          <Handle type="source" position="bottom" style={{ background: "transparent", width: 0, height: 0, border: "none", }} />
        ) : (
          <Handle type="source" position="right" style={{ background: "transparent", width: 0, height: 0, border: "none", }} />
        )}
      </div>
    </>
  );
};
