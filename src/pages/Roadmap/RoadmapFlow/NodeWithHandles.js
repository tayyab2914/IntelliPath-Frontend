import { ReactFlow, Handle } from "@xyflow/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, Menu, Button } from "antd";

export const NodeWithHandles = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    const encodedCourseName = encodeURIComponent(data.label);
    navigate(`${path}?course_name=${encodedCourseName}`);
    setDropdownVisible(false);
  };

  const menu = (
    <Menu
      items={[
        {
          key: "view",
          label: "View Course",
          onClick: () => handleNavigate("/courses"),
        },
        {
          key: "quiz",
          label: "Attempt Quiz",
          onClick: () => handleNavigate("/quiz"),
        },
      ]}
    />
  );

  return (
    <Dropdown
      overlay={menu}
      trigger={["click"]}
      open={dropdownVisible}
      onOpenChange={(visible) => setDropdownVisible(visible)}
    >
      <div
        style={{
          ...data.style,
          backgroundColor: !data.is_minor && isHovered ? "#F3F3F3" : "white",
          cursor: !data.is_minor && isHovered ? "pointer" : "arrow",
        }}
        onClick={() => !data.is_minor && setDropdownVisible(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!data.is_minor ? (
          <Handle type="target" position="top" style={{ background: "transparent", width: 0, height: 0, border: "none" }} />
        ) : (
          <Handle type="target" position="left" style={{ background: "transparent", width: 0, height: 0, border: "none" }} />
        )}

        {data.label}

        {!data.is_minor ? (
          <Handle type="source" position="bottom" style={{ background: "transparent", width: 0, height: 0, border: "none" }} />
        ) : (
          <Handle type="source" position="right" style={{ background: "transparent", width: 0, height: 0, border: "none" }} />
        )}
      </div>
    </Dropdown>
  );
};
