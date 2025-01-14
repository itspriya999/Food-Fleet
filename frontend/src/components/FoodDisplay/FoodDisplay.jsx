// import React, { useContext } from 'react'
// import './FoodDisplay.css'
// import FoodItem from '../FoodItem/FoodItem'
// import { StoreContext } from '../../Context/StoreContext'

// const FoodDisplay = ({category}) => {

//   const {food_list} = useContext(StoreContext);

//   return (
//     <div className='food-display' id='food-display'>
//       <h2>Top dishes near you</h2>
//       <div className='food-display-list'>
//         {food_list.map((item)=>{
//           if (category==="All" || category===item.category) {
//             return <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>
//           }
//         })}
//       </div>
//     </div>
//   )
// }

// export default FoodDisplay


import React, { useContext } from 'react';
import './FoodDisplay.css';
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../Context/StoreContext';

const FoodDisplay = ({ category }) => {
  const { food_list = [] } = useContext(StoreContext); // Safeguard: default to an empty array.
  console.log("Food List in FoodDisplay:", food_list); // Debug log.

  // Handle loading or empty state.
  if (!food_list || food_list.length === 0) {
    return <p>Loading dishes... Please wait!</p>;
  }

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item) => {
          // Check category and render the item.
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={item._id}
                image={item.image}
                name={item.name}
                desc={item.description}
                price={item.price}
                id={item._id}
              />
            );
          }
          return null; // Skip rendering if the item doesn't match the category.
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
