import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
  const [currentTab, setCurrentTab] = useState();

  function onSelect(tabName) {
    setCurrentTab(tabName);
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((object) => {
              return (
                <CoreConcept
                key = {object.title}
                  {...object}
                ></CoreConcept>
              );
            })}
          </ul>
        </section>

        <section id="examples">
          <h2> Examples</h2>
          <menu>
            <TabButton
              isSelected={currentTab === "components"}
              onSelect={() => onSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={currentTab === "jsx"}
              onSelect={() => onSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={currentTab === "props"}
              onSelect={() => onSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={currentTab === "state"}
              onSelect={() => onSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {!currentTab ? (
            <p>Please select a section</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[currentTab]?.title}</h3>
              <p>{EXAMPLES[currentTab]?.description}</p>
              <pre>{EXAMPLES[currentTab]?.code}</pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
