import Input from "./Input.jsx";
import {useRef} from "react";
import Modal from "./Modal.jsx";

export default function NewProject({saveProject, handleCancelProject}) {
    const titleRef = useRef('');
    const descriptionRef = useRef('');
    const dueDateRef = useRef('');
    const modal = useRef();

    function handleSaveProject() {
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const dueDate = dueDateRef.current.value;

        //Add validation if needed
        if (title.trim() === '' || dueDate.trim() === '' || description.trim() === '') {
            modal.current.open();
            return;
        }

        saveProject({
            title,
            description,
            dueDate
        });
    }

    return (
        <>
            <Modal ref={modal}>
                <h2 className="text-xl text-stone-700 my-4 font-bold">Error</h2>
                <p className="mb-4 text-stone-600">All fields are required!</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <div>
                    <menu className="flex justify-end gap-4 items-center">
                        <li>
                            <button onClick={handleCancelProject}
                                    className="text-stone-800 hover:text-stone-950">Cancel
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={handleSaveProject}
                                className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-lg">Save
                            </button>
                        </li>
                    </menu>
                    <div>
                        <Input type="text" ref={titleRef} label="Title"/>
                        <Input ref={descriptionRef} label="Description" isTextarea/>
                        <Input type="date" ref={dueDateRef} label="Due Date"/>
                    </div>
                </div>
            </div>
        </>
    )
}