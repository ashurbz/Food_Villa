import { CARD_IMG_URL } from "../../../constant";

const RestoCard = ({props}) => {

  
    const {name,cloudinaryImageId,cuisines,avgRating} =props;
     
        return(
      <div >
        <div className="resto-image">
          <img  src={CARD_IMG_URL + cloudinaryImageId} ></img>
        </div>
        <div className="resto-name">
          <h2>{name}</h2>
        </div>
        <div className="cuisines">
           <h3> {cuisines.join()}</h3> 
    
        </div>
        <div className="rating">
        <h4>
            {avgRating} Stars
        </h4>
        </div>
    
      </div>
        )
    };

    export default RestoCard;