import { useEffect, useState } from "react";
import { CARD_IMG_URL, MENU_IMG_URL } from "../../constant";
import { useParams } from "react-router-dom";
import { RESTA_MENU_API_URL } from "../../constant";

const RestaList = () => {
  // not able to give null
  const [restaMenuDetails, setRestaMenuDetails] = useState([]);

  const { id } = useParams();

  useEffect(() => {
  
    getRestoList();

   const timer = setInterval(()=>{
      console.log('setInterval from RestaList')
    },1000)

   return ()=>{
    clearInterval(timer)
    }
   
  }, []);

 

  async function getRestoList() {
    const data = await fetch(
      RESTA_MENU_API_URL +
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



  return (
    <div className="flex p-5">
      <div className="p-5">
      <h2>{restaMenuDetails[1]?.restaurantA?.name}</h2>
      <img src={CARD_IMG_URL +restaMenuDetails[1]?.restaurantA?.cloudinaryImageId } width='200px' height='200px' />
      <h3>{restaMenuDetails[1]?.restaurantA?.areaName}</h3>
      <h3>{restaMenuDetails[1]?.restaurantA?.city}</h3>
      <h3>{restaMenuDetails[1]?.restaurantA?.avgRating}</h3>
      <h4> {restaMenuDetails[1]?.restaurantA?.costForTwoMessage} </h4>
      </div>
      <div className="p-5">
          <div className="p-5">
            {restaMenuDetails[0]?.restaurantMenu.map((item)=>{
              return <div >
               <ul>
                  <li key={item?.card?.info?.name?.id}>{item?.card?.info?.name}</li>
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
