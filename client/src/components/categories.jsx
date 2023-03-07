import Category from "./category";

const Categories = () => { 
    const category_list = ["coffee","cold-drinks","burger","pizza"]
    return (
        <div className="text-black md:h-full md:w-1/5 w-full flex md:flex-row flex-col">
            <div className="w-1/3 flex  md:items-center md:justify-end">
                <h1 className="tracking-widest md:text-xl md:-rotate-90 text-center font-bold text-2xl ">Categories</h1>
            </div>
            <div className=" category-items w-full  md:flex md:flex-col md:flex-wrap md:justify-evenly md:items-center grid grid-cols-2 mr-5">
                {category_list.map(category => (
                    <Category category={category} key={category} />
                ))}
            </div>
        </div>
    )
}

export default Categories;