
import { CARD_IMG_URL } from "../../../constant";


const RestoCard = ({props}) => {


  
    const {name,cloudinaryImageId,cuisines,avgRating} =props;

    
    
        return(
      <div className="w-52 overflow-hidden bg-pink-50 rounded-lg" >
        <div className="resto-image">
          <img className="rounded-md" width="180px" src={CARD_IMG_URL + cloudinaryImageId} ></img>
        </div>
        <div className="resto-name">
          <h2>{name}</h2>
        </div>
     
           <span> {cuisines.join()}</span> 
    
       
        <div className="rating">
        <h4>
            {avgRating} Stars
        </h4>
     
        </div>
    
      </div>
        )
    };

    export default RestoCard;