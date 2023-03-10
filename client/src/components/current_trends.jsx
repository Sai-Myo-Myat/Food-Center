import { useEffect, useState } from "react";


import Item from "./item";
// import data from "../test_db.json"


//redux-store
import { useSelector,useDispatch } from "react-redux";

//selector 
import { selectAllFoods } from "../redux/selector";


const CurrentTrends = () => {
    
    const data = useSelector(selectAllFoods)
    console.log(data,"data")
    return (
        <div className="current-trends md:w-4/5">
             <h1 className=" md:text-4xl mb-5  font-bold text-2xl ">Current Trends</h1>
            <div className="items grid lg:grid-cols-4  md:grid-cols-3  grid-cols-2 gap-4  ">
                {
                    data ? data.map(item => {
                        return (
                            <Item key={item.id} item={item}/>
                        )
                    }) : <span>There is No Foods Available!!!</span>
                } 
            </div>
        </div>
    )
}

export default CurrentTrends;