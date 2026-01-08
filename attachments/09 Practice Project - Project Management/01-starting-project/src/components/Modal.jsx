import {useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";
import Button from "./Button.jsx";

export default function Modal({ref, children}) {
    const modal = useRef();

    useImperativeHandle(ref, () => {
            return {
                open() {
                    modal.current.showModal()
                }
            }
        }
    );

    return createPortal(
        <dialog ref={modal} className="backdrop:bg-stone-900/90 p-4 shadow-md rounded-xl">
            {children}
            <form method="dialog">
                <Button>Close</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
}