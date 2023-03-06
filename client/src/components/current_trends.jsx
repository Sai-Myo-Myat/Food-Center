import Item from "./item";
import data from "../test_db.json"

const CurrentTrends = () => {
    return (
        <div className="current-trends md:w-4/5">
             <h1 className=" md:text-4xl mb-5  font-bold text-2xl ">Current Trends</h1>
            <div className="items grid lg:grid-cols-4  md:grid-cols-3  grid-cols-2 gap-4  ">
                {
                    data.map(item => {
                        return (
                            <Item key={item.id} item={item}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CurrentTrends;