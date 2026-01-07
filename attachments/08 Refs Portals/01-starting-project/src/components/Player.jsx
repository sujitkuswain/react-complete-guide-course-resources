import {useRef, useState} from "react";

export default function Player() {
    const inputName = useRef();
    const [userName, setUserName] = useState("unknown entity");

    return (
        <section id="player">
            <h2>Welcome {userName}</h2>
            <p>
                <input type="text" ref={inputName}/>
                <button onClick={() => {
                    setUserName(inputName.current.value);
                    inputName.current.value = '';
                }}>Set Name
                </button>
            </p>
        </section>
    );
}
