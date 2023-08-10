import { useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import SearchBar from '../components/SearchBar/SearchBar';

interface Products {
  product: string
}

function Home() {

  const [ productName, setProduct ] = useState<Products['product']>('');

  return (
    <div className="App">
      <SearchBar product={{productName, setProduct}} />
      <ProductList products={productName} />
    </div>
  );
}

export default Home;