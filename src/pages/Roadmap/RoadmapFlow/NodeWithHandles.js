import { Dropdown, Menu, message, Tooltip } from "antd";
import { Handle } from "@xyflow/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NodeWithHandles = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  
  const handleNavigate = (path) => {
    console.log(data)
    const encodedCourseName = encodeURIComponent(data.roadmap_module);
    if(data?.roadmapData?.completed_modules?.includes(data.roadmap_module))
    {
        message.success(`All Quiz attempted for ${data.roadmap_module}`)
        return
    }
    navigate(`${path}?roadmap_module=${encodedCourseName}`);
    setDropdownVisible(false);
  };
  

  const menu = (
    <Menu
      items={[
        // {
        //   key: "view",
        //   label: "View Course",
        //   onClick: () => navigate("/courses"),
        // },
        {
          key: "quiz",
          label: "Attempt Quiz",
          onClick: () => handleNavigate("/quiz"),
        },
      ]}
    />
  );

  const nodeContent = (
    <Tooltip title={data.description} placement="top">
      <div
        style={{
          ...data.style,
          backgroundColor: !data.is_minor && isHovered ? "#F3F3F3" : "white",
          cursor: !data.is_minor && isHovered ? "pointer" : "default",
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

        {data.roadmap_module}

        {!data.is_minor ? (
          <Handle type="source" position="bottom" style={{ background: "transparent", width: 0, height: 0, border: "none" }} />
        ) : (
          <Handle type="source" position="right" style={{ background: "transparent", width: 0, height: 0, border: "none" }} />
        )}
      </div>
    </Tooltip>
  );

  return data.is_minor ? nodeContent : (
    <Dropdown
      overlay={menu}
      trigger={["click"]}
      open={dropdownVisible}
      onOpenChange={(visible) => setDropdownVisible(visible)}
    >
      {nodeContent}
    </Dropdown>
  );
};
