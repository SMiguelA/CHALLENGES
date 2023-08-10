import dataProducts from '../../data'
import ProductCard from '../ProductCard/ProductCard'
import style from './ProductList.module.css'

interface ProductsList{
  products: string
}

const ProductList = ({products}:ProductsList) => {

  const results = dataProducts.filter(product => product.title.toLowerCase().includes(products.toLocaleLowerCase()))

  return (
    <section className={style.container}>
      {
        results?.map(item => 
          <ProductCard infoProduct={{
            id:item.id,
            image: item.image,
            title: item.title,
            price: item.price
          }} />
        )
      }
    </section>
  )
}

export default ProductList