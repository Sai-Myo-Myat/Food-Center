import { useParams } from "react-router";
import data from '../test_db.json'
import image from '../image/image.jpg'

const DetailPage = () => {
    const {_id} = useParams();
    console.log(_id)
    const item = data.find(i => i.id == _id);
    return (
        <div className="p-5 h-full w-full">
            <div className="image-container w-full h-2/4 mb-5">
                <div className="w-full h-full" style={{backgroundImage: `url(${image})`,backgroundRepeat: 'no-repeat', backgroundSize: "contain", backgroundPosition: 'center'}}></div>
            </div>
            <h1  className="font-bold md:text-4xl text-xl">{item.title}</h1>
            <p>{item.description}</p>
            <h3 className="font-bold">Rating: {item.rating}</h3>
            <h2 className="font-bold">price: {item.price}</h2>
            <div className="buttons mt-10">
                <button className="bg-secondary text-black py-2 px-4 rounded-xl">
                    Add To Cart
                </button>
            </div>
        </div>
    )
}

export default DetailPage;