import {useRef, useState} from "react";
import Modal from "./Modal.jsx";

export default function NewTask({addTask}) {

    const [task, setTask] = useState('');
    const modal = useRef();

    function handleOnChange(e) {
        setTask(e.target.value);
    }

    function handleOnAdd() {
        if (task.trim() === '') {
            modal.current.open();
            return;
        }
        addTask(task);
        setTask('');
    }

    return (
        <>
            <Modal ref={modal}>
                <h2 className="text-xl text-stone-700 my-4 font-bold">Error</h2>
                <p className="mb-4 text-stone-600">All fields are required!</p>
            </Modal>
            <div className="flex items-center gap-4">
                <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text" onChange={handleOnChange}
                       value={task}/>
                <button className=" text-stone-700 hover:text-stone-950" onClick={handleOnAdd}>Add</button>
            </div>
        </>
    )
}