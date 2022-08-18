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
}

export default Project;
