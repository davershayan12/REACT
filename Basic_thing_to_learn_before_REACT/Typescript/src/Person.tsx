export const Person = (props) => {
    return (
        <div>
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>This Person: {props.isMarried ? "is married" : "is single"}</p>
        </div>
    );
}