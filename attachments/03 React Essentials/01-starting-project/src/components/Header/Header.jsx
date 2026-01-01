import reactImage from "../../assets/react-core-concepts.png";
import './Header.css';

const listOfConcepts = ['Fundametnal', 'Core', 'Other'];

function getRandom(max) {
    let value = Math.floor(Math.random() * max);
    console.log(value);
    return value;
}

export default function Header() {
    let concept = listOfConcepts[getRandom(3)];
    return (
        <header>
            <img src={reactImage} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {concept} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}