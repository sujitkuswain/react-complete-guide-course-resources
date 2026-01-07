import Projects from "./components/Projects.jsx";
import {useState} from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProject from "./components/NewProject.jsx";

function App() {
    const [projectSelected, setProjectSelected] = useState()
    const [projectState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: []
    })

    function handleSelectedProject() {
        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: null
            };
        });
    }

    function saveProject(project) {
        const newProject = {
            ...project,
            id: Math.random()
        };

        setProjectState((prevState) => {
            return {
                ...prevState,
                projects: [...prevState.projects, newProject],
                selectedProjectId: undefined
            };
        });
    }

    function onProjectSelected(projectId) {
        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: projectId
            };
        });
    }

    function onProjectCancel() {
        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined
            };
        });
    }

    let content = null;
    if (projectState.selectedProjectId === null) {
        content = <NewProject saveProject={saveProject} handleCancelProject={onProjectCancel}/>;
    } else if (projectState.selectedProjectId === undefined) {
        content = <NoProjectSelected handleSelectedProject={handleSelectedProject}/>;
    } else {
        content = <div className="w-2/3 mt-16">Project with id {projectState.selectedProjectId} Details Here</div>;
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <Projects
                handleSelectedProject={handleSelectedProject}
                projectList={projectState.projects}
                onProjectSelected={onProjectSelected}
            />
            {content}
        </main>
    );
}

export default App;
