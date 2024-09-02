export const categoryColor = (category: string) => {
  switch (category) {
    case "SaaS":
      return "blue";
    case "AI":
      return "red";
    case "Gaming":
      return "green";
    case "FinTech":
      return "purple";
    case "HealthTech":
      return "pink";
    case "EdTech":
      return "orange";
    case "Other":
      return "gray";
  }
};
