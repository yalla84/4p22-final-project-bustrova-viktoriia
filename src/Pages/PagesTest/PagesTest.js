import './PagesTest.css';
import Product from '../Product/Product';
import { useEffect, useState, useMemo } from 'react';
import Head from '../../Components/Header/Head/Head';
import Footer from '../../Components/Footer/Footer'



function PageTest () {
    const [ products, setProducts ] = useState([]);

    const [ selectedCategory, setSelectedCategory] = useState();

    useEffect(() => {
       fetch('https://api.escuelajs.co/api/v1/products')
       .then((response) => response.json())
       .then((result) => {
        setProducts(result);
       })
    }, []);
    

    function getFilteredList() {
        if (!selectedCategory) {
            return products;
        }
        return products.filter((Product) => Product.category.name === selectedCategory)
    }
   
    let filteredList = useMemo(getFilteredList, [selectedCategory, products])

    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
    }

    return (
      <div className="Page" id="header_1">
        <Head />
        <div className="Filter-container">
        <div className="Filter-title">Filter by Category:</div>
        <div>
          <select className="Filter-select"
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            <option value="Furniture">Furniture</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothes">Clothes</option>
            <option value="Shoes">Shoes</option>
            <option value="Others">Others</option>
          </select>
        </div>
      </div>
          <div className="Card-container">
            {
              filteredList.map((item, index) => {
                return <div key={index}>
                          <Product title={item.category.name}
                                 name={item.title}
                                 id={item.id}
                                 img={item.category.image}
                                 prise={item.price}/>
                        </div>
              })
            }
          </div>
          <a className="Page-up" href='#header_1'>Back to top</a>
        <Footer />
      </div>
    )
}

export default PageTest;