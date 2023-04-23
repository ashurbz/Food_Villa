import { useState } from "react";
import { restoData } from "../../../constant";


const SearchComponent =() =>{

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
                  console.log(data)
           
                  
                }}

                
                >Search</button>
            </div>
            <h1></h1>
           

        </div>
    )
}

export default SearchComponent;