import ReactFlow, {
  Controls,
  applyEdgeChanges,
  applyNodeChanges,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";
import { useState, useCallback } from "react";
import CustomNode from "../../components/custom-node/CustomNode";
import optionsIcon from "../../assets/images/Options.png";
import columnIcon from "../../assets/images/Column.png";
import descriptionIcon from "../../assets/images/Description.png";
import WorkflowIcons from "../../components/workflow-icons/WorkflowIcons";
import WorkflowHeader from "../../components/workflow-header/WorkflowHeader";

const initialNodes = [
  {
    id: "1",
    position: { x: 150, y: 0 },
    data: { label: "Start" },
    type: "input",
    style: {
      backgroundColor: "white",
      color: "black",
      borderRadius: "16px",
      width: "auto",
      padding: ".5rem 1rem",
    },
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: "Requirement Selection" },
    type: "requirementSelection",
  },

  {
    id: "3",
    position: { x: 0, y: 200 },
    type: "questionnaireNode",
  },
  {
    id: "4",
    position: { x: 0, y: 300 },
    data: { label: "Collaborator" },
    type: "collaboratorFeedbackOneNode",
  },
  {
    id: "5",
    position: { x: -350, y: 300 },
    data: { label: "Collaborator" },
    type: "collaboratorFeedbackTwoNode",
  },
  {
    id: "6",
    position: { x: 350, y: 300 },
    data: { label: "Collaborator" },
    type: "collaboratorFeedbackThreeNode",
  },
];
const initialEdges = [
  { id: "1-2", source: "1", target: "2" },
  { id: "2-3", source: "2", target: "3" },
  {
    id: "3-4",
    source: "3",
    target: "4",
    label: "Add Condition",
    type: "step",
  },
  { id: "3-5", source: "3", target: "5", type: "step" },
  { id: "3-6", source: "3", target: "6", type: "step" },
];

const nodeTypes = {
  requirementSelection: () => (
    <CustomNode
      icon={columnIcon}
      title={"Requirement Selection"}
      subtitle={"Permission, form type and +1"}
    />
  ),

  questionnaireNode: () => (
    <CustomNode
      icon={optionsIcon}
      title={"Questionnaire"}
      subtitle={"Permission, form type and +1"}
    />
  ),
  collaboratorFeedbackOneNode: () => (
    <CustomNode
      icon={descriptionIcon}
      title={"Collaborator Feedback_1"}
      subtitle={"Permission, form type and +1"}
    />
  ),
  collaboratorFeedbackTwoNode: () => (
    <CustomNode
      icon={descriptionIcon}
      title={"Collaborator Feedback_2"}
      subtitle={"Permission, form type and +1"}
    />
  ),
  collaboratorFeedbackThreeNode: () => (
    <CustomNode
      icon={descriptionIcon}
      title={"Collaborator Feedback_3"}
      subtitle={"Permission, form type and +1"}
    />
  ),
};

let nodeId = 7;
export default function ProcurementWorkflow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const reactFlowInstance = useReactFlow();

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onClick = useCallback(() => {
    const id = `${++nodeId}`;
    const newNode = {
      id,
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
      data: {
        label: `Node ${id}`,
      },
    };

    reactFlowInstance.addNodes(newNode);
  }, []);

  return (
    <div>
      <WorkflowHeader />

      <div
        style={{
          height: "calc(100vh - 84px)",
          width: "100%",
          position: "relative",
        }}
      >
        <button
          style={{
            position: "absolute",
            left: "50%",
            top: "10px",
            zIndex: "10",
            padding: "0.5rem 1rem",
            borderRadius: ".5rem",
            cursor: "pointer",
            backgroundColor: "transparent",
            color: "#ffffff",
          }}
          onClick={onClick}
        >
          Add Node
        </button>

        <ReactFlow
          fitView
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
        >
          <Controls />
        </ReactFlow>

        <WorkflowIcons />
      </div>
    </div>
  );
}
