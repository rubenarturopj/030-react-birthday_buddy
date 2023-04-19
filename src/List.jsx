import Person from "./Person";

const List = ({ people }) => {
    return (
        <section>
            {people.map((person) => {
                return <Person key={person.id} {...person} />; // {...person} ????? new way to pass the object directly
            })}
        </section>
    );
};

export default List;
