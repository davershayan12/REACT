import { useState } from "react"

interface Props {
    name: string
    age: number
    isMarried: boolean

}

export const Person = (props: Props) => {
    const [isShowInfo, setShowInfo] = useState<string | null>(null);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowInfo(event.target.value);
    }

    return (
        <div>
            {isShowInfo == props.name  && (<>
                <p>name: {props.name}</p>
                <p>age: {props.age}</p>
                <p>This Person: {props.isMarried ? "is married" : "is single"}</p>
            </>)
            }
            <p>{""}
                {props.name} Bio: { isShowInfo !== props.name ? "Bio not avalible" : isShowInfo}
            </p>
            <input onChange={handleChange}></input>
        </div>
    );
}