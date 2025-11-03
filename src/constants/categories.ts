export interface CategoryConfig {
  name: string;
  displayName: string;
  icon: string;
  route: string;
  description?: string;
}

export const CATEGORY_CONFIG: Record<string, CategoryConfig> = {
  sdlc: {
    name: "sdlc",
    displayName: "SDLC",
    icon: "🔄",
    route: "/sdlc",
    description: "Software Development Life Cycle management and automation",
  },
  telecom: {
    name: "telecom",
    displayName: "Telecom",
    icon: "📡",
    route: "/telecom",
    description: "Telecommunications infrastructure and network management",
  },
  healthcare: {
    name: "healthcare",
    displayName: "Healthcare",
    icon: "🏥",
    route: "/healthcare",
    description: "Healthcare systems and patient data management",
  },
  hr: {
    name: "hr",
    displayName: "Human Resources",
    icon: "👥",
    route: "/hr",
    description: "HR operations and employee management solutions",
  },
};

// Helper function to get display config for a category
export const getCategoryConfig = (categoryName: string): CategoryConfig => {
  const lowerName = categoryName.toLowerCase();
  return (
    CATEGORY_CONFIG[lowerName] || {
      name: categoryName,
      displayName: categoryName.toUpperCase(),
      icon: "📁",
      route: `/${lowerName}`,
      description: `${categoryName} category`,
    }
  );
};
