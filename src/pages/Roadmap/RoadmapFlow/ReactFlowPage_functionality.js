
import { THEME_COLORS } from "../../../utils/AntdColors";

//!for desktop mode
const GLOBAL_SETTINGS_DESKTOP = {
    nodeStyle: {
        border: '2px solid', // Set a solid border as a fallback
       
        borderRadius: "8px",
        padding: "10px 10px",
        textAlign:"center",
        background:'#fff',
        fontSize:"16px",
        // filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.054))',

        color: THEME_COLORS.colorMuted,
        width:"100%",
        fontWeight:"600"
    },
    edgeStyle: {
        strokeWidth: 2,
        animated: true, // Optional: Add animation to edges
    }
    ,
    majorNodeWidth: 150, // Width of each major node
    majorNodeHeight: 50, // Height of each major node
    minorNodeWidth: 300, // Width of each minor node
    minorNodeHeight: 30, // Height of each minor node
    maxRowWidth: 800, // Maximum width before shifting nodes to the next line
    leftMargin: 0, // Margin from the left edge
    rightMargin: 100, // Margin from the right edge
    rowHeight: 170, // Height of each row
    minorRowHeight: 50, // Height of each row for minor nodes
    verticalSpacing: 0, // Vertical spacing between major nodes
};

//!for mobile mode
const GLOBAL_SETTINGS_MOBILE = {
    nodeStyle: {
        border: '2px solid', // Set a solid border as a fallback
        borderImage: `linear-gradient(90deg, ${THEME_COLORS.colorAccentHover}, ${THEME_COLORS.colorAccent}) 3`,
       
        borderRadius: "4px",
        background:'#fff',
        fontSize:"10px",
        padding: "10px 20px",
        textAlign:"center",
        filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.054))',

        color: THEME_COLORS.colorMuted,
        width:"200px",
        fontWeight:"600"
    },
    edgeStyle: {
        strokeWidth: 2,
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
export const GET_BORDER_COLOR = (roadmapData, category)=>{
            if (roadmapData?.completed_modules?.includes(category)) {
                return 'linear-gradient(90deg, #50ff19, #50ff19) 3';
              } else {
                return `linear-gradient(90deg, ${THEME_COLORS.colorAccent}, ${THEME_COLORS.colorAccent}) 3`;
              }
        
}
export const GET_STROKE_COLOR = (roadmapData, category)=>{
       
            if (roadmapData?.completed_modules?.includes(category)) {
                return 'rgb(51, 221, 0)';
              } else {
                return `${THEME_COLORS.colorAccentHover}`;
              }
        
}

export const generateNodesAndEdges = (roadmapData, onNodeClick) => {

    if (!roadmapData || typeof roadmapData !== "object") {
        console.error("Invalid roadmapData:", roadmapData);
        return { nodes: [], edges: [] };
    }

    if (!roadmapData.roadmap || typeof roadmapData.roadmap !== "object") {
        console.error("Invalid roadmap structure:", roadmapData.roadmap);
        return { nodes: [], edges: [] };
    }

    const GLOBAL_SETTINGS = window.innerWidth < 992 ? GLOBAL_SETTINGS_MOBILE : GLOBAL_SETTINGS_DESKTOP;
    
    const nodesArray = [];
    const edgesArray = [];
    let majorNodePositions = {};
    
    let index = 0;
    let prevMajorNode = null;

    Object.keys(roadmapData.roadmap).forEach((category) => {
        const majorNodeId = `major-${index + 1}`;
        let majorX, majorY;

        if (index === 0) {
            majorX = GLOBAL_SETTINGS.leftMargin;
            majorY = GLOBAL_SETTINGS.verticalSpacing;
        } else {
            majorX = prevMajorNode.x;
            // majorY = prevMajorNode.y + GLOBAL_SETTINGS.rowHeight;
            majorY = prevMajorNode.y + 210;
        }

        prevMajorNode = { x: majorX, y: majorY };
        majorNodePositions[majorNodeId] = prevMajorNode;
        
        GET_BORDER_COLOR(roadmapData,category)
        nodesArray.push({
            id: majorNodeId,
            position: { x: majorX, y: majorY },
            data: {
                roadmap_module: category,
                style: {
                    ...GLOBAL_SETTINGS.nodeStyle,
                    borderImage: GET_BORDER_COLOR(roadmapData, category),
                },
                onClick: () => onNodeClick(category),
                roadmapData:roadmapData,
            },
            type: 'custom',
        });
        if (index > 0) {
            edgesArray.push({
                id: `e${index}-${index - 1}`,
                source: `major-${index}`,
                target: `major-${index + 1}`,
                style: {
                    ...GLOBAL_SETTINGS.edgeStyle,
                    stroke: GET_STROKE_COLOR(roadmapData, category),
                },
                type: 'step',
            });
        }

        let minorIndex = 0;
        if (typeof roadmapData.roadmap[category] === "object") {
            Object.entries(roadmapData.roadmap[category]).forEach(([topic, description]) => {
                const minorNodeId = `minor-${index + 1}-${minorIndex + 1}`;
                const minorX = majorX + GLOBAL_SETTINGS.majorNodeWidth + 400;
                const minorY = majorY + (minorIndex *( GLOBAL_SETTINGS.minorRowHeight+10));
                // const minorY = majorY + (minorIndex * GLOBAL_SETTINGS.minorRowHeight);

                nodesArray.push({
                    id: minorNodeId,
                    position: { x: minorX, y: minorY },
                    data: {
                        roadmap_module: topic,
                        style: {
                            ...GLOBAL_SETTINGS.nodeStyle,
                            borderImage: GET_BORDER_COLOR(roadmapData, category),
                        },
                        is_minor:true,
                        description:description,
                        onClick: () => onNodeClick(minorNodeId),
                    },
                    type: 'custom',
                });

                edgesArray.push({
                    id: `e${majorNodeId}-${minorNodeId}`,
                    source: majorNodeId,
                    target: minorNodeId,
                    style: {
                        ...GLOBAL_SETTINGS.edgeStyle,
                        stroke: GET_STROKE_COLOR(roadmapData, category),
                    },
                    type: 'bezier',
                });

                minorIndex++;
            });
        }

        index++;
    });

    return { nodes: nodesArray, edges: edgesArray };
};