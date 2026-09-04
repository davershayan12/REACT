export const Counter =()=>{
    let count =0
    const handleCLick=()=>{
        count =count=1;
        console.log(count)
    }
    return <button onClick={handleCLick} >count:{count} </button>

}