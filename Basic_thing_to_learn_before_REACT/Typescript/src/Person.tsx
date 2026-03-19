import { useState } from "react"

interface Props {
    name: string
    age: number
    isMarried: boolean

}

export const Person = (props: Props) => {
    const [isShowInfo, setShowInfo] = useState<boolean>(false);
    const toggleInfo = () => {
        setShowInfo((prev) => !prev)
    }
    return (
        <div>
            {isShowInfo && (<>
                <p>name: {props.name}</p>
                <p>age: {props.age}</p>
                <p>This Person: {props.isMarried ? "is married" : "is single"}</p>
            </>)
            }
            <button onClick={toggleInfo}>Click me</button>
        </div>
    );
}