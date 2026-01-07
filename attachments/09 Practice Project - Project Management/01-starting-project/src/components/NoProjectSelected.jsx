import NoProjects from '../assets/no-projects.png';
import Button from "./Button.jsx";

export default function NoProjectSelected({handleSelectedProject}) {
    return (
        <div className="w-2/3 mt-24 text-center">
            <img src={NoProjects} alt="No Project selected" className="w-16 h-16 object-contain mx-auto"/>
            <h2 className="text-xl text-stone-500 my-4 font-bold">No project selected</h2>
            <p className="mb-4 text-stone-400">Select a project or create new.</p>
            <p className="mt-8">
                <Button onClick={handleSelectedProject}>Create new</Button>
            </p>
        </div>
    );
}