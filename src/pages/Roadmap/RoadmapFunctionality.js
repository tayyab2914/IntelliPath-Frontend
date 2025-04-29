export const ROADMAP_NOTIFICATION_BUTTON_DATA = (navigate) => [
  {
    label: "Proceed to Onboarding",
    type: "primary", // Adjusted type to "primary" for visibility
    onClick: () => {
      navigate("/onboarding");
    },
  },
];
export const GET_ROADMAP_PROGRESS = (RoadmapData) => {
    console.log("GET_ROADMAP_PROGRESS", RoadmapData);
  
    const roadmap = RoadmapData?.roadmap || {}; // safe fallback to empty object
    const totalModules = Object.keys(roadmap).length;
    
    if (!RoadmapData?.completed_modules) {
      return { progressPercentage: 0, totalModules, completedModules: 0 };
    }
  
    const completedModules = RoadmapData.completed_modules.length;
    const progressPercentage = Math.round((completedModules / totalModules) * 100);
  
    return { progressPercentage, totalModules, completedModules };
  };
  