import { Dropdown, Menu, message, Tooltip } from "antd";
import { Handle } from "@xyflow/react";
import { useNavigate } from "react-router-dom";

export const NodeWithHandles = ({ data }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    const encodedCourseName = encodeURIComponent(data.roadmap_module);
    if (data?.roadmapData?.completed_modules?.includes(data.roadmap_module)) {
      message.success(`All Quiz attempted for ${data.roadmap_module}`);
      return;
    }
    navigate(`${path}?roadmap_module=${encodedCourseName}`);
  };

  const menu = (
    <Menu
      items={[
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
          backgroundColor: !data.is_minor ? "#fff" : "#fafafa",
          cursor: !data.is_minor ? "pointer" : "default",
        }}
      >
        <Handle
          type="target"
          position={data.is_minor ? "left" : "top"}
          style={{ background: "transparent", width: 0, height: 0, border: "none" }}
        />

        {data.roadmap_module}

        <Handle
          type="source"
          position={data.is_minor ? "right" : "bottom"}
          style={{ background: "transparent", width: 0, height: 0, border: "none" }}
        />
      </div>
    </Tooltip>
  );

  return data.is_minor ? (
    nodeContent
  ) : (
    <Dropdown overlay={menu} trigger={["hover", "click"]}>
      {nodeContent}
    </Dropdown>
  );
};
