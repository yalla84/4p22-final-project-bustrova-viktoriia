import './Product.css';
import Button from '../../Components/Button/Button';
import { Link } from 'react-router-dom';

function Product({img, title, name, prise, id}) {
    return (
        <Link to={`OneProduct/${id}`} className="Product">
        <img className="Product-img" src={ img }/>
            <div className="Product-container">
              <h2 className ="Product-title common-header">{ title }</h2>
              <div className ="Product-name">{ name }</div>
              <div className="Product-price common-price">{ prise }</div>
              <div className="Product-button">
                  <Button>$Buy</Button>
               </div>
            </div>
        </Link>
    )
}

export default Product;