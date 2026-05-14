import { useEffect, useState } from 'react';
import { Navbar1 } from './components/NavBar';
import SearchBar from './components/SearchBar';
import { ProductCard } from './components/ProductCard';
import { SkeletonCard } from './components/SkeletonCard';


const App = () => {
  const [products, setProducts] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (isMounted) {
          const response = await fetch('https://dummyjson.com/products');
          const data = await response.json();
          setProducts(data.products);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredProducts = products?.filter((product) =>
    product.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (

    <div className='p-4'>
      <Navbar1 />

      <div className='my-8 flex items-center justify-between gap-4 flex-col'>
        <h1 className='text-4xl font-bold'>Products</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {loading && (
        <div className="grid gap-4 p-2 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      )}
      {error && <p>{error.message}</p>}
      {filteredProducts && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-2">
          {filteredProducts.map((product, index) => (
            <ProductCard key={`${product.id}-${index}`} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App