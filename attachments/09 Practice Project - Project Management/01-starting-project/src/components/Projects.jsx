import Button from "./Button.jsx";

export default function Projects({handleSelectedProject, projectList, onProjectSelected, selectedProjectId}) {
    return (
        <aside className="w-1/3 md:w-72 bg-stone-900 text-stone-50 rounded-r-xl px-8 py-16">
            <h2 className="mb-8 font-bold md:text-xl text-stone-200 uppercase">Your Projects</h2>
            <div>
                <Button onClick={handleSelectedProject}>+ Add Project</Button>
            </div>
            <ul className="mt-8">
                {
                    projectList.map(project => {
                        //conditionally apply a class if the project is selected based on current selectedProjectId
                        const classNames = "w-full text-left px-4 py-2 mb-2 rounded-sm hover:bg-stone-700 " +
                            "hover:text-stone-100 " +
                            (selectedProjectId === project.id ? "bg-stone-700 text-stone-100 font-semibold" : "bg-stone-800 text-stone-400");

                        return (
                            <li key={project.id}
                                onClick={() => onProjectSelected(project.id)}>
                                <button
                                    className={classNames}>{project.title}</button>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}