
export const ROADMAP_NOTIFICATION_BUTTON_DATA = (navigate) => [
  {
    label: "Proceed to Onboarding",
    type: "primary", // Adjusted type to "primary" for visibility
    onClick: () => {
      navigate("/onboarding");
    },
  },
];
