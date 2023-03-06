const Categories = () => {
    return (
        <div className="text-black md:h-full md:w-1/5 w-full flex md:flex-row flex-col">
            <div className="w-1/3 flex  md:items-center md:justify-end">
                <h1 className="tracking-widest md:text-xl md:-rotate-90 text-center font-bold text-2xl ">Categories</h1>
            </div>
            <div className=" category-items w-full  md:flex md:flex-col md:flex-wrap md:justify-evenly md:items-center grid grid-cols-2 mr-5">
                <div className="bg-secondary text-black lg:p-5 p-3  m-2 rounded-3xl">ice-cream</div>
                <div className="bg-secondary text-black  m-2 lg:p-5 p-3  rounded-3xl">ice-cream</div>
                <div className="bg-secondary text-black lg:p-5 p-3  m-2  rounded-3xl">ice-cream</div>
                <div className="bg-secondary text-black lg:p-5 p-3 m-2 rounded-3xl">ice-cream</div>
            </div>
        </div>
    )
}

export default Categories;