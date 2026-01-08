import Tasks from "./Tasks.jsx";

export default function DisplaySelectedProject({project, onProjectDelete, addTask, deleteTask, tasks}) {
    return (
        <div className="w-[35rem] mt-8">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl text-stone-600 mb-2 font-bold">{project.title}</h1>
                    <button className="text-stone-600 hover:text-red-900"
                            onClick={() => onProjectDelete(project.id)}>Delete
                    </button>
                </div>
                <p className="mb-4 text-stone-400">{project.dueDate}</p>
                <p className="whitespace-pre-wrap text-stone-600">{project.description}</p>
            </header>
            <Tasks
                addTask={addTask}
                deleteTask={deleteTask}
                tasks={tasks}
            />
        </div>
    )
}