
import { THEME_COLORS } from "../../../utils/AntdColors";

//!for desktop mode
const GLOBAL_SETTINGS_DESKTOP = {
    nodeStyle: {
        border: '2px solid', // Set a solid border as a fallback
        borderImage: `linear-gradient(90deg, ${THEME_COLORS.colorAccentHover}, ${THEME_COLORS.colorAccent}) 3`, // Gradient for the border
       
        borderRadius: "8px",
        padding: "10px 10px",
        textAlign:"center",
        background:'#fff',
        fontSize:"14px",
        // filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.054))',

        color: THEME_COLORS.colorMuted,
        width:"150px",
        fontWeight:"600"
    },
    edgeStyle: {
        stroke:"#a7f8fb",
        strokeWidth: 1,
        animated: true, // Optional: Add animation to edges
    }
    ,
    majorNodeWidth: 400, // Width of each major node
    majorNodeHeight: 50, // Height of each major node
    minorNodeWidth: 150, // Width of each minor node
    minorNodeHeight: 30, // Height of each minor node
    maxRowWidth: 800, // Maximum width before shifting nodes to the next line
    leftMargin: 100, // Margin from the left edge
    rightMargin: 100, // Margin from the right edge
    rowHeight: 100, // Height of each row
    minorRowHeight: 50, // Height of each row for minor nodes
    verticalSpacing: 0, // Vertical spacing between major nodes
};

//!for mobile mode
const GLOBAL_SETTINGS_MOBILE = {
    nodeStyle: {
        border: '2px solid', // Set a solid border as a fallback
        borderImage: `linear-gradient(90deg, ${THEME_COLORS.colorAccentHover}, ${THEME_COLORS.colorAccent}) 3`, // Gradient for the border
       
        borderRadius: "4px",
        background:'#fff',
        fontSize:"10px",
        padding: "10px 20px",
        textAlign:"center",
        filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.054))',

        color: THEME_COLORS.colorMuted,
        width:"150px",
        fontWeight:"600"
    },
    edgeStyle: {
        stroke: THEME_COLORS.colorAccent, // Edge color
        strokeWidth: 1,
        animated: true, // Optional: Add animation to edges
    },
    majorNodeWidth: 230, // Width of each major node
    majorNodeHeight: 50, // Height of each major node
    minorNodeWidth: 100, // Width of each minor node
    minorNodeHeight: 50, // Height of each minor node
    maxRowWidth: 800, // Maximum width before shifting nodes to the next line
    leftMargin: 20, // Margin from the left edge
    rightMargin: 100, // Margin from the right edge
    rowHeight: 100, // Height of each row
    minorRowHeight: 50, // Height of each row for minor nodes
    verticalSpacing: 0, // Vertical spacing between major nodes
};
// Function to generate nodes and edges
export const generateNodesAndEdges = (nodes, onNodeClick) => {
    
    const GLOBAL_SETTINGS = window.innerWidth < 992 ? GLOBAL_SETTINGS_MOBILE : GLOBAL_SETTINGS_DESKTOP
    const nodesArray = [];
    const edgesArray = [];
    
    let majorNodePositions = {}; // To store positions of major nodes
    
    nodes.forEach((node, index) => {
        
        // Define positions for major nodes
        let majorX, majorY;
        let parentId = null; 
        if (index === 0) {
            majorX = GLOBAL_SETTINGS.leftMargin; // Start at left margin
            majorY = GLOBAL_SETTINGS.verticalSpacing; // Start at top margin
        } else {
            // Calculate position based on previous major node and minor nodes
            const previousMajorNodeId = nodes[index - 1].id;
            const numberOfMinorNodes = nodes[index - 1].minorNodes.length;
            majorX = majorNodePositions[previousMajorNodeId].x;
            majorY = majorNodePositions[previousMajorNodeId].y + GLOBAL_SETTINGS.minorRowHeight * (Math.max(numberOfMinorNodes,1) + (node.minorNodes.length == 0 ? 1 : 0))+.2; // Move down
            parentId = nodes[index - 1].id; // Set the previous major node as the parent
        }
        
        majorNodePositions[node.id] = { x: majorX, y: majorY };
        
        nodesArray.push({
            id: node.id,
            position: { x: majorX, y: majorY },
            data: { 
                label: node.label, 
                style: {  
                    ...GLOBAL_SETTINGS.nodeStyle,  
                    backgroundColor: 'white',
                    
                },
                onClick: () => onNodeClick(node.id),
                parent: parentId ,
            },
            type: 'custom',
        });
        edgesArray.push({
            id: `e${node.id}-${parentId}`,
            source: `${parentId}`,  // Bottom handle of the parent node
            target: `${node.id}`,      // Top handle of the current node
            style: GLOBAL_SETTINGS.edgeStyle,
            type: 'step',
        });
        // Connect major node to its minor nodes
        node.minorNodes.forEach((minorNode, minorIndex) => {
            nodesArray.push({
                id: minorNode.id,
                position: { x: majorX + GLOBAL_SETTINGS.majorNodeWidth, y: majorY + ((minorIndex+1) * GLOBAL_SETTINGS.minorRowHeight) },
                data: { 
                    label: minorNode.label, 
                    style: {  
                        ...GLOBAL_SETTINGS.nodeStyle,  
                    },
                    // onClick: () => onNodeClick(minorNode.id),
                    parent: minorNode.parent,
                    is_minor: minorNode.is_minor // Pass the is_major property
                },
                type: 'custom',
            });
            
            edgesArray.push({
                id: `e${node.id}-${minorNode.id}`,
                source: node.id,
                target: minorNode.id,
                style: GLOBAL_SETTINGS.edgeStyle,
                type: 'bezier',
            });
        });
    });
    console.log(edgesArray)
    return { nodes: nodesArray, edges: edgesArray };
};