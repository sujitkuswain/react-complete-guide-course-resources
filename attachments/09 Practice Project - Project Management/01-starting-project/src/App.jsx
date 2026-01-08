import Projects from "./components/Projects.jsx";
import {useState} from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProject from "./components/NewProject.jsx";
import DisplaySelectedProject from "./components/DisplaySelectedProject.jsx";

function App() {
    const [projectSelected, setProjectSelected] = useState()
    const [projectState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: []
    })

    function addTask(task) {
        //create task id and add to tasks array
        const taskId = Math.random();
        const newTask = {
            id: taskId,
            projectId: projectState.selectedProjectId,
            title: task
        };

        setProjectState((prevState) => {
            return {
                ...prevState,
                tasks: [...prevState.tasks, newTask]
            };
        });

    }

    function deleteTask(id) {
        //delete task from tasks array
        setProjectState((prevState) => {
            const updatedTasks = prevState.tasks.filter(task => task.id !== id);
            return {
                ...prevState,
                tasks: updatedTasks
            };
        });
    }

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

    let currentProject = null;

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

    function onProjectDelete(projectId) {
        setProjectState((prevState) => {
            const updatedProjects = prevState.projects.filter(project => project.id !== projectId);
            return {
                ...prevState,
                projects: updatedProjects,
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
        currentProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);
        content = <DisplaySelectedProject
            addTask={addTask}
            deleteTask={deleteTask}
            project={currentProject} onProjectDelete={onProjectDelete}
            tasks={projectState.tasks.filter(task => task.projectId === currentProject.id)}
        />
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <Projects
                handleSelectedProject={handleSelectedProject}
                projectList={projectState.projects}
                onProjectSelected={onProjectSelected}
                selectedProjectId={projectState.selectedProjectId}
            />
            {content}
        </main>
    );
}

export default App;
