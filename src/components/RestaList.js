import { useEffect, useState } from "react";
import { CARD_IMG_URL, MENU_IMG_URL } from "../../constant";
import { useParams } from "react-router-dom";

const RestaList = () => {
  // not able to give null
  const [restaMenuDetails, setRestaMenuDetails] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getRestoList();
  }, []);

  async function getRestoList() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6738274&lng=77.1642584&restaurantId=" +
        id
    );
    const json = await data.json();

    setRestaMenuDetails([
      {
        restaurantMenu:
          json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card?.itemCards,
      },
      {
        restaurantA: json?.data?.cards[0]?.card?.card?.info,
      },
    ]);
  }

  console.log(restaMenuDetails[0]?.restaurantMenu)
  console.log()

  return (
    <div className="resta-details-container">
      <div className="resta-details">
      <h2>{restaMenuDetails[1]?.restaurantA?.name}</h2>
      <img src={CARD_IMG_URL +restaMenuDetails[1]?.restaurantA?.cloudinaryImageId } width='200px' height='200px' />
      <h3>{restaMenuDetails[1]?.restaurantA?.areaName}</h3>
      <h3>{restaMenuDetails[1]?.restaurantA?.city}</h3>
      <h3>{restaMenuDetails[1]?.restaurantA?.avgRating}</h3>
      <h4> {restaMenuDetails[1]?.restaurantA?.costForTwoMessage} </h4>
      </div>
      <div className="resta-menu">
         <div>
            {restaMenuDetails[0]?.restaurantMenu.map((item)=>{
              return <div>
               <ul>
                  <li>{item?.card?.info?.name}</li>
                  </ul>
                  <div>
                     {item?.card?.info?.price/100} Rs
                  </div>
               <img src={MENU_IMG_URL+item?.card?.info.imageId}/>
               
               
               <span> {item?.card?.info.description} </span>

               
               </div>
            })}
         </div>
      </div>
    </div>
  );
};

export default RestaList;
