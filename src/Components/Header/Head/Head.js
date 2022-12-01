import './Head.css';
import Input from '../../Input/Input';
import Basket from '../Basket/Basket';
import { Link } from 'react-router-dom';

function Head () {
    return (
      <div className="Head">
        <div className="Head-box">
          <img className="Head-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYEwHmzqRPXfgSm6b0SbZHM7XA3COp4H9pOA&usqp=CAU" alt='Logo'></img>
          <h1 className="Head-title">Shop-Shop</h1>
        </div>
        <div className="Head-pages">
          <ul className="Head-list">
            <li className="Head-text">
              <Link to="/" className='Head-link'>Home</Link>
            </li>
            <li className="Head-text">
              <Link to="/Callback" className='Head-link'>Callback</Link>
            </li>
            <li className="Head-text">
              <Link to="/PageTest" className='Head-link'>Catalog</Link>
            </li>
          </ul>
        </div>
        <div className="Head-basket">
          <Input id="text" type="text" placeholder="Search..." name="text" />
          <Basket />
        </div>
      </div>
    )

}

export default Head;