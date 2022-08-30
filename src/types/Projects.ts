interface Project {
    no: number;
    id: string;
    projectName: string;
    projectDescription: string;
    projectType: string;
    projectTechnology: {
        frontend: Array<string>;
        backend: Array<string>;
    };
    photos: Array<{
        photoId: number;
        photoName: string;
        photoUrl: string;
        photoTitle: string;
        photoDescription: string;
    }>;
}

export default Project;
