import RestoCard from "../Card/RestoCard";
// import  SearchComponent from "../Search/SearchComponent";
import { restoData } from "../../../constant";
import { useState } from "react";

const BodyComponent = () => {

    function filterData(searchData,searchText){
        const filterData=searchData.filter((data)=>{
          return data.data.name.includes(searchText) 
     
       }
      
       )
    
       return filterData;
     
      
   }
 

    const [searchText,setSearchText] = useState(""); 
    const [searchData,setSearchData] = useState(restoData);
   
    return(
        
            <>
            <div className="search">
        

   

        <div className="search-container">
            <div className="search-bar">
                <input type="text" placeholder="Search Here..."
                value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}
                />
           
            </div>

            <div className="search-button">
                <button type="button"
                onClick={()=>{
            const data= filterData(searchData,searchText)
                  setSearchData(data);
                 
           
                  
                }}

                
                >Search</button>
            </div>
            <h1></h1>
           

        </div>
    
            </div>
            <div className="resto-card">
                {searchData.map((details)=>{
                 

                return  <RestoCard props={details.data} key={details.data.id}  />
                })}

            </div>

            </>

   
       
    )
};

export default BodyComponent;