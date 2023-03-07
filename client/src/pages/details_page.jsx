import { useEffect,useState } from "react";
import { useParams } from "react-router";
import image from '../image/image.jpg'
import { getOneFood } from "../../api/api_handler";

const DetailPage = () => {
    const {_id} = useParams();
    const [data, setData] = useState(null)

    useEffect(() => {
        try {
            (async () => {
                const response = await getOneFood(_id);
                setData(response.data)
                console.log("response",response)
                console.log('data',data)
            })()
            
        } catch (error) {
            console.log("error in fetching one food", error)
        }
    },[])

    return (
      <>
        {data ? 
        <div className="p-5 h-full w-full">
            <div className="image-container w-full h-2/4 mb-5">
                <div className="w-full h-full" style={{backgroundImage: `url(${image})`,backgroundRepeat: 'no-repeat', backgroundSize: "contain", backgroundPosition: 'center'}}></div>
            </div>
            <h1  className="font-bold md:text-4xl text-xl">{data.title}</h1>
            <p>{data.description}</p>
            <h3 className="font-bold">Rating: {data.rating} stars</h3>
            <h2 className="font-bold">price: {data.price}</h2>
            <div className="buttons mt-10">
                <button className="bg-secondary text-black py-2 px-4 rounded-xl">
                    Add To Cart
                </button>
            </div>
        </div>
        
        : <h1>There is no data with this id: {_id}</h1>
       }
      </>
    )
}

export default DetailPage;