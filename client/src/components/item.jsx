import image from '../image/image.jpg'

const Item = ({item}) => {
    return (
        <a href={`/detail/${item.id}`}>
            <div className="item p-2 bg-secondary rounded">
                <div className="bg-secondary w-full h-32 rounded md:mb-5" style={{backgroundImage:`url(${image})`,backgroundRepeat: 'no-repeat', backgroundSize: "contain", backgroundPosition: 'center'}}></div>
                <h3 className="text-md font-bold">{item.title}</h3>
                <p className="text-base">price - {item.price}</p>
            </div>
        </a>
    )
}

export default Item;