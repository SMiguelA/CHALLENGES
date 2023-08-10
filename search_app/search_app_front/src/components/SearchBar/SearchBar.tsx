import { BiSearchAlt } from 'react-icons/bi';
import style from './SeaerchBar.module.css';

interface SearchBarProps {
  product: {
    productName: string;
    setProduct: React.Dispatch<React.SetStateAction<string>>;
  }
}

const SearchBar = ({product} : SearchBarProps) => {

  const { productName, setProduct } = product

  const handlerChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setProduct(value)
  }

  return (
    <section className={style.container}>
      <div>
        <h1>Search App</h1>
        <div className={style.inputCont}>
          <BiSearchAlt />
          <input type="text" value={productName} placeholder="Search product..." onChange={handlerChange}/>
        </div>
      </div>
    </section>
  )
}

export default SearchBar