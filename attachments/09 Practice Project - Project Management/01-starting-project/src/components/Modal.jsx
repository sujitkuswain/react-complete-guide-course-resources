import {useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";

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
        <dialog ref={modal}>
            {children}
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
}