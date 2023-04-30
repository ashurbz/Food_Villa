import RestoCard from "../Card/RestoCard";
// import  SearchComponent from "../Search/SearchComponent";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";

const BodyComponent = () => {
const [searchText, setSearchText] = useState("");
const [searchData, setSearchData] = useState([]);
const [allResta , setAllResta] = useState([])




  function filterData(allResta, searchText) {
    const filterData = allResta.filter((data) => {
      return data.data.name.toLowerCase().includes(searchText.toLowerCase());
    });

    return filterData;
  }
  
  useEffect(()=>{
    Api();

  },[])



const Api = async function (){
   const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5805244377767&lng=77.04774208366871&page_type=DESKTOP_WEB_LISTING');
   const jsonData =await data.json()

   setSearchData(jsonData?.data?.cards[2]?.data?.data?.cards);
   setAllResta(jsonData?.data?.cards[2]?.data?.data?.cards);
   
}


  
  return searchData.length ==0 ? (<Shimmer/>) :    (
    <>
   
      <div className="search">
        <div className="search-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search Here..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </div>
              
          <div className="search-button">
            <button
              type="button"
              onClick={() => {
                const data = filterData(allResta, searchText);
                setSearchData(data);
              }}
            >
              Search
            </button>
          </div>
          <h1></h1>
        </div>
      </div>
      <div className="resto-card">
        {searchData.map((details) => {
          return <div className="card-container"> <Link key={details.data.id} to={'/resto/' + details.data.id} >
           <RestoCard props={details.data} />;
          </Link>
          </div>
         
        })}
      </div>
    </>
  
  );
};

export default BodyComponent;
