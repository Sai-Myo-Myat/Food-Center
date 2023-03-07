import image from '../image/image.jpg'

const Item = ({item}) => {
    return (
        <a href={`/detail/${item.id}`}>
            <div className="item p-2 bg-gray-200 rounded">
                <div className="bg-gray-200 w-full h-32 rounded md:mb-5" style={{backgroundImage:`url(${image})`,backgroundRepeat: 'no-repeat', backgroundSize: "contain", backgroundPosition: 'center'}}></div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <h4 className="text-md">price - {item.price}</h4>
                <h4 className="text-md font-bold">Rating - {item.rating} stars</h4>
                {/* <h4 className="text-md">Added At - {item.add_at}</h4> */}
                
            </div>
        </a>
    )
}

export default Item;