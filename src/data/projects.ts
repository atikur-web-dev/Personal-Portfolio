import fileSharingImg from '../assets/file-sharing-app.jpg.png';

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
  hasLivePreview: boolean;
  imageUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "File Sharing App",
    description: "Full-stack file sharing application with authentication, file upload/download, shareable links, and validation. Built with production-grade folder structure and error handling.",
    techStack: ["MERN", "TypeScript", "Tailwind CSS", "JWT", "Multer"],
    githubLink: "https://github.com/atikur-web-dev/Project-File-Sharing-App-MERN-Stack-.git",
    liveLink: "https://file-sharing-app.demo.com",
    hasLivePreview: true,
    imageUrl: fileSharingImg
  }
];