import { TiDeleteOutline } from 'react-icons/ti';
import { Link, useParams } from 'react-router-dom';
import data from '../../data';
import style from './ProductDetail.module.css';

const ProductDetail = () => {
  const { id } = useParams();

  const info = data.filter(product => product.id.toString() == id).pop();

  return (
      <section className={style.container}>
        <img src={info?.image} alt="" loading='lazy'/>
        <Link to={'/'}>
          <TiDeleteOutline />
        </Link>
        <div className={style.infoContainer}>
            <h1>{info?.title}</h1>
            <span>{info?.condition}</span>
            <div className={style.stockPrice}>
              <h2>${info?.price} USD</h2>
              <div>
                <h3>Stock: </h3>
                <span>{info?.stock}</span>
              </div>
            </div>
          <hr />
          <p>{info?.description}</p>
        </div>
      </section>
  )
}

export default ProductDetail