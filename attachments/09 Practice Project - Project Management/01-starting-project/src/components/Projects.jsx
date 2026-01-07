import Button from "./Button.jsx";

export default function Projects({handleSelectedProject, projectList, onProjectSelected}) {
    return (
        <aside className="w-1/3 md:w-72 bg-stone-900 text-stone-50 rounded-r-xl px-8 py-16">
            <h2 className="mb-8 font-bold md:text-xl text-stone-200 uppercase">Your Projects</h2>
            <div>
                <Button onClick={handleSelectedProject}>+ Add Project</Button>
            </div>
            <ul className="mt-8">
                {
                    projectList.map(project => (
                        <li key={project.id}
                            onClick={() => onProjectSelected(project.id)}>
                            <button
                                className="w-full px-2 py-1 my-1 rounded-sm text-left text-stone-400 hover:text-stone-200 hover:bg-stone-800 ">{project.title}</button>
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
}