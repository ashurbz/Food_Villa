import { MENU_IMG_URL } from "../../constant";

const FoodItems = (props) =>{


    const {name,description,imageId} = props?.items?.card?.info;
    console.log(imageId)

    return(
        <div>
            <div className="w-32 h-auto p-5 m-5 border-black border-solid border-2">
            <img src={MENU_IMG_URL + imageId}/>
       <h3>{name}</h3>
       <span>{description}</span>
            </div>
      

        </div>
    )
}

export default FoodItems;
