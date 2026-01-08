import NewTask from "./NewTask.jsx";

export default function Tasks({addTask, deleteTask, tasks}) {
    return (
        <section>
            <h2 className="text-xl font-bold uppercase text-gray-600 mb-4">Tasks</h2>
            <NewTask addTask={addTask}/>
            {tasks.length === 0 && <p className="text-base mt-2">There is no tasks in this project yet, add a task.</p>}
            {tasks.length > 0 &&
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}
                            className="flex justify-between items-center mt-2 p-2 bg-stone-200 rounded-sm">
                            <span className="text-stone-700">{task.title}</span>
                            <button className="text-stone-600 hover:text-red-900"
                                    onClick={() => deleteTask(task.id)}>Delete
                            </button>
                        </li>
                    ))}
                </ul>}
        </section>
    )
}