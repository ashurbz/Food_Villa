
const Shimmer = () =>{
    return(
        <div className="shimmer-container">
           {Array(10).fill("").map((e,index)=>{
            return <div className="shimmer-card" key={index}>

            </div>
            
           })} 
        </div>
    )
}

export default Shimmer;