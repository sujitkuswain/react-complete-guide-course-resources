import TabButton from "../TabButton/TabButton.jsx";
import {useState} from "react";
import {EXAMPLES} from "../../data";
import Section from "../Section/Section.jsx";
import Tabs from "../Tabs/Tabs.jsx";

export default function Examples() {
    const [topic, setTopic] = useState();

    function handleClick(selectedTopic) {
        setTopic(selectedTopic);
    }

    let topicContent = <p>Select a topic</p>;
    if (topic) {
        topicContent =
            <div id="tab-content">
                <h3>{EXAMPLES[topic].title}</h3>
                <p>{EXAMPLES[topic].description}</p>
                <pre>
                            <code>{EXAMPLES[topic].code}</code>
                        </pre>
            </div>;
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs
                ButtonWrapper="menu"
                buttons={
                    <>
                        <TabButton
                            isCurrentlySelected={topic === "components"}
                            onClick={() => handleClick("components")}>Components</TabButton>
                        <TabButton
                            isCurrentlySelected={topic === "jsx"}
                            onClick={() => handleClick("jsx")}>JSX</TabButton>
                        <TabButton
                            isCurrentlySelected={topic === "props"}
                            onClick={() => handleClick("props")}>Props</TabButton>
                        <TabButton
                            isCurrentlySelected={topic === "state"}
                            onClick={() => handleClick("state")}>State</TabButton>
                    </>
                }
            >

                {topicContent}
            </Tabs>
        </Section>
    )
}