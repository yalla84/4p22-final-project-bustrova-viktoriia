import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import './OneProduct.css';
import Head from '../../Components/Header/Head/Head'

function OneProduct () {
    const { userId } = useParams();
    const [ product, setProduct ] = useState({});

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://api.escuelajs.co/api/v1/products/${userId}`);
            const result = await response.json();
    
            setProduct(result);
        })();

    }, [])


    return (
        <>
          <Head />
          <div className="Card">
              <div className="Card-box">
                <img className="Card-img" src={ product.images}></img>
              </div>
              <div className="Card-text">
                <h1 className="Card-title">{ product.title }</h1>
                <p className="Card-descrition">{ product.description }</p>
                <div className="Card-price common-price">{ product.price }</div>
                <div className="Card-button">
                  <button className="Card-like">
                    <img className="Card-heart" src='https://emojis.wiki/emoji-pics/twitter/orange-heart-twitter.png' alt='heart'></img>Add favorite
                  </button>
                  <button className="Card-like">
                    <img className="Card-heart" src='https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/orange_shoppictbasket_1484336514.png' alt='basket'></img>Add to cart
                  </button>
                </div>
              </div>
          </div>
        </>
    )
}

export default OneProduct;