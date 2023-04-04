import { memo } from "react";
import { Handle, Position } from "reactflow";
import "./CustomNode.css";
export default memo(({ isConnectable, icon, title, subtitle }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div className="expent-customnode-wrapper">
        <div>
          <img src={icon} alt="icons" />
        </div>
        <div className="expent-nodes-heading">
          <p className="expent-node-title">{title}</p>
          <p className="expent-node-subtitle">{subtitle}</p>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
    </>
  );
});
