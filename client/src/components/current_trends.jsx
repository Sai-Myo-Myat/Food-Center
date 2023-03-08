import { useEffect, useState } from "react";


import Item from "./item";
// import data from "../test_db.json"


//redux-store
import { useSelector,useDispatch } from "react-redux";
import { fetchAllFoods } from "../redux";


const CurrentTrends = () => {
    const foods = useSelector(state => state.foods.foods)
    console.log(foods)
    const dispatch = useDispatch()
    dispatch(fetchAllFoods())
    console.log(foods)
    // const [data, setData] = useState(null)
    // useEffect(() => {
    //     try {
    //         (async () => {
    //             const response = await getAllFoods();
    //             setData(response.data)
    //             console.log("response",response)
    //             console.log('data',data)
    //         })()
            
    //     } catch (error) {
    //         console.log("error in fetching foods", error)
    //     }
    // },[])
    return (
        <div>testing</div>
        // <div className="current-trends md:w-4/5">
        //      <h1 className=" md:text-4xl mb-5  font-bold text-2xl ">Current Trends</h1>
        //     <div className="items grid lg:grid-cols-4  md:grid-cols-3  grid-cols-2 gap-4  ">
        //         {
        //             data ? data.map(item => {
        //                 return (
        //                     <Item key={item.id} item={item}/>
        //                 )
        //             }) : <span>There is No Foods Available!!!</span>
        //         } 
        //     </div>
        // </div>
    )
}

export default CurrentTrends;