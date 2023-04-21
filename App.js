import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <>
      <a href="/">
        <img
          className="logo"
          src="https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"
        ></img>
      </a>
    </>
  );
};

const NavItems = () => {
  return (
    <>
      <ul className="nav-items">
        <li>Home</li>
        <li>Help</li>
        <li>Profile</li>
      </ul>
    </>
  );
};

const Cart = () => {
  return (
    <>
      <img
        className="cart"
        alt="cart-icon"
        src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png"
      ></img>
    </>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header-container">
      <div className="left">
        <div className="logo-container">
          <Title />
        </div>
      </div>
      <div className="right">
        <div className="cart-container">
          <Cart />
        </div>
        <div className="nav-items-container">
          <NavItems />
        </div>
      </div>
    </div>
  );
};

const restoData = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "332240",
      name: "Tossin Pizza",
      uuid: "2e65d85c-1865-4974-959c-9eee66abf431",
      city: "2",
      area: "Sector 22",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "ct99zza9nwstbe4yovax",
      cuisines: ["Pizzas", "Italian", "Beverages", "Desserts"],
      tags: [],
      costForTwo: 60000,
      costForTwoString: "₹600 FOR TWO",
      deliveryTime: 45,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "25-35 MINS",
      lastMileTravel: 5,
      slugs: {
        restaurant: "tossin-pizza-tossin_palam-vihar-tossin_palam-vihar",
        city: "gurgaon",
      },
      cityState: "2",
      address: "SCO 89, 1st Floor, HUDA Market, Sector 22, Gurgaon",
      locality: "Sector 22",
      parentId: 1778,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Flat ₹125 off",
        shortDescriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6420000~p=1~eid=00000187-a290-fc51-00ae-17af0093013d",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "332240",
        deliveryTime: 45,
        minDeliveryTime: 25,
        maxDeliveryTime: 35,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },

  {
    type: "restaurant",
    data: {
      type: "F",
      id: "71113",
      name: "Ramesh Dhaba & Chinar Sweets",
      uuid: "09c92415-2c77-40a9-aef3-48ffd85d3e98",
      city: "2",
      area: "Udyog Vihar",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "cguljexnnuo6nszrk7os",
      cuisines: ["North Indian"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 32,
      minDeliveryTime: 32,
      maxDeliveryTime: 32,
      slaString: "32 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "ramesh-dhaba-chinar-sweets-udyog-vihar-palam-vihar",
        city: "gurgaon",
      },
      cityState: "2",
      address:
        "Plot 128, Phase 1, Udyog Vihar Sector 20 ,Near Chokola Gurgaon ",
      locality: "Palam Vihar",
      parentId: 15769,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT125 off",
        shortDescriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "71113",
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "617840",
      name: "Junction Pizza",
      uuid: "a2690470-db2c-438e-95fe-9190299c3c39",
      city: "2",
      area: "Kapas Hera",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "g1zsddc89qeq65bimmk9",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: "33 MINS",
      lastMileTravel: 0.699999988079071,
      slugs: {
        restaurant: "junction-pizza-palam-vihar-palam-vihar",
        city: "gurgaon",
      },
      cityState: "2",
      address:
        "14,Ground Floor, Gali No-3, Jindal Colony Samalka Extn. Near Kapashera Chawk Delhi - 110037, VASANT VIHAR, New Delhi, , Delhi, 110037",
      locality: "Vasant Vihar",
      parentId: 301400,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "617840",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 0.699999988079071,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "60565",
      name: "Chaayos Chai+Snacks=Relax",
      uuid: "a0dc17f7-301f-4f3e-8d56-9ad72fb16369",
      city: "4",
      area: "Aerocity",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "0a6f66d75eb042123e34d89bef7189ce",
      cuisines: [
        "Bakery",
        "Beverages",
        "Chaat",
        "Desserts",
        "Fast Food",
        "Home Food",
        "Italian",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "Sweets",
      ],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 37,
      minDeliveryTime: 37,
      maxDeliveryTime: 37,
      slaString: "37 MINS",
      lastMileTravel: 5,
      slugs: {
        restaurant: "chaayos-worldmark-1-hospitality-district-vasant-kunj",
        city: "delhi",
      },
      cityState: "4",
      address:
        "G 10A, GF, WorldMark - 1, Hospitality District, Indira Gandhi International Airport, New Delhi",
      locality: "Worldmark 1",
      parentId: 281782,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6514969~p=4~eid=00000187-a290-fc51-00ae-17b00093045a",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "60565",
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "225698",
      name: "Delhi 38",
      uuid: "5efe5f16-40e0-4dd2-9e73-ef6b8437b643",
      city: "2",
      area: "Rajokari",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "hktdbx3szmxjgqesrns1",
      cuisines: ["Chinese", "Italian", "North Indian"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 38,
      minDeliveryTime: 38,
      maxDeliveryTime: 38,
      slaString: "38 MINS",
      lastMileTravel: 1.5,
      slugs: {
        restaurant: "delhi-38-rajouri-garden-rajouri-garden",
        city: "gurgaon",
      },
      cityState: "2",
      address:
        "599, opp chandra garden, Near Grand Westend greens, Rajokari, New Delhi -38.",
      locality: "Chandra Garden",
      parentId: 69788,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "225698",
        deliveryTime: 38,
        minDeliveryTime: 38,
        maxDeliveryTime: 38,
        lastMileTravel: 1.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "410651",
      name: "Waffle  The Umrao",
      uuid: "4f6ca014-3956-4474-b090-b063b2bf4fad",
      city: "4",
      area: "Samalkha",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "hiqwegd875uieko79gsv",
      cuisines: ["Bakery"],
      tags: [],
      costForTwo: 80000,
      costForTwoString: "₹800 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "29 MINS",
      lastMileTravel: 0.8999999761581421,
      slugs: {
        restaurant: "waffle---the-umrao-vasant-kunj-vasant-kunj",
        city: "delhi",
      },
      cityState: "4",
      address:
        "THE UMRAO, N.H.48, SAMALKHA, NEAR RAJOKRI CROSSING, VASANT VIHAR, New Delhi, Delhi-110037",
      locality: "Rajokri Road ",
      parentId: 259024,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "410651",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 0.8999999761581421,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
];

const RestoCard = ({ props }) => {
  const { name, cloudinaryImageId, cuisines, avgRating } = props;

  return (
    <div className="card-container">
      <div className="resto-image">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/" +
            cloudinaryImageId
          }
        ></img>
      </div>
      <div className="resto-name">
        <h2>{name}</h2>
      </div>
      <div className="cuisines">
        <span>{cuisines.join()}</span> 
      </div>
      <div className="rating">
        <h4>{avgRating} Stars</h4>
      </div>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="resto-card">
      {restoData.map((details) => {
        return <RestoCard props={details.data} key={details.data.id} />;
      })}
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
