export interface ProjectImage {
  url: string;
  captionKey: string; // Translation key path (e.g., PROJECTS.ITEMS.kipuview.features[0])
}

export interface ProjectItem {
  id: string;
  category: 'fullstack' | 'frontend' | 'backend' | 'desktop';
  tecnologies: string[];
  github?: string;
  demo?: string;
  images: ProjectImage[];
}
