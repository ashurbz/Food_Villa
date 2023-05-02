import RestoCard from "../Card/RestoCard";
// import  SearchComponent from "../Search/SearchComponent";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";
import { RESTA_LIST_API_URL } from "../../../constant";
import useConnectivityCheck from "../../utils/useConnectivityCheck";

const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [allResta, setAllResta] = useState([]);

  function filterData(allResta, searchText) {
    const filterData = allResta.filter((data) => {
      return data.data.name.toLowerCase().includes(searchText.toLowerCase());
    });

    return filterData;
  }



  useEffect(() => {
    Api();
  }, []);

  const Api = async function () {
    const data = await fetch(RESTA_LIST_API_URL);
    const jsonData = await data.json();

    setSearchData(jsonData?.data?.cards[2]?.data?.data?.cards);
    setAllResta(jsonData?.data?.cards[2]?.data?.data?.cards);
  };

  const isConnected = useConnectivityCheck();

  if(!isConnected){
   return <h1>Please Check Your Internet Connection</h1>
  }

  return searchData.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search">
        <div className="flex py-2 px-2">
          <div className="px-5">
            <input
            className="p-3 outline-none bg-pink-50 rounded-md"
              type="text"
              placeholder="Search Here..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </div>

          <div className="rounded-lg bg-purple-800 text-white p-2 hover:bg-green-700 cursor-pointer"
            
          
              onClick={() => {
                const data = filterData(allResta, searchText);
                setSearchData(data);
              }}
          >
              Search
            </div>
          </div>
          <h1></h1>
        </div>
      
      <div className="flex justify-around  flex-wrap p-5">
        {searchData.map((details) => {
          return (
            <div className="p-4 w-60">
              {" "}
              <Link key={details.data.id} to={"/resto/" + details.data.id}>
                <RestoCard props={details.data} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
