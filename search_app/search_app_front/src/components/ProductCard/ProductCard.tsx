import { Link } from "react-router-dom"
import style from './ProductCard.module.css'

interface ProductInfo {
  infoProduct:{
    id: number
    image: string
    title: string
    price: number
  }
}

const ProductCard = ({infoProduct} : ProductInfo) => {

  const formattedPrice = infoProduct.price.toLocaleString();

  return (
    <Link to={`/${infoProduct.id}`} key={infoProduct.id} className={style.container}>
      <img src={infoProduct.image} alt="item" loading='lazy'/>
      <hr />
      <div className={style.infoProduct}>
        <h2>{infoProduct.title}</h2>
        <span>${formattedPrice} USD</span>
      </div>
    </Link>
  )
}

export default ProductCard