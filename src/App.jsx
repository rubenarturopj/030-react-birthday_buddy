import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
    const [peopleBackUp, setPeopleBackUp] = useState(data);
    const [people, setPeople] = useState(data);
    const [resetReady, setResetReady] = useState(false);
    return (
        <main>
            <section className="container">
                <h3>{people.length} birthdays today 🎈🥳🎉</h3>
                <List people={people} />
                {resetReady ? (
                    <button
                        type="button"
                        className="btn btn-block"
                        onClick={() => {
                            setPeople(peopleBackUp);
                            setResetReady(false);
                        }}
                    >
                        Reset birthdays
                    </button>
                ) : (
                    <button
                        type="button"
                        className="btn btn-block"
                        onClick={() => {
                            setPeople([]);
                            setResetReady(true);
                        }}
                    >
                        clear all
                    </button>
                )}
            </section>
        </main>
    );
};
export default App;
