import './Footer.css';



function Footer () {
    return (
      <div className="Footer">
        <div className="Footer-box">
          <h1 className="Footer-title">Contacts</h1>
          <div className="Footer-text">
            <p className="Footer-adress">Adress: 520 DARK SPURT SACRAMENTO CA 76893</p>
            <a className="Footer-contact" href='tel:+79999999999'>Tel: +7(999)999-99-99</a>
            <a className="Footer-contact" href='mailto:test@mail.ru'>Email: test@mail.ru</a>
          </div>
        </div>
        <div className="Footer-box">
          <h1 className="Footer-sale_title">SALE</h1>
          <img className="Footer-img" src="https://st.depositphotos.com/1000441/2843/i/950/depositphotos_28431103-stock-photo-30-percent-discount.jpg" alt="Sale"></img>
          <img className="Footer-img" src="https://kartinkin.net/uploads/posts/2022-02/1645162093_1-kartinkin-net-p-skidki-kartinki-2.jpg" alt="Sale"></img>
          <img className="Footer-img" src="https://thumbs.dreamstime.com/b/%D0%B2%D0%B7%D1%80%D1%8B%D0%B2%D1%87%D0%B0%D1%82%D0%BA%D0%B0-70-%D0%BF%D1%80%D0%B5%D0%B4%D0%BF%D0%BE%D1%81%D1%8B%D0%BB%D0%BE%D0%BA-%D1%81-%D0%B1%D0%B5%D0%BB%D0%B8%D0%B7%D0%BD%D1%8B-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-22685856.jpg" alt="Sale"></img>
        </div>
        <div className="Footer-box">
          <h1 className="Footer-title">Mobile devices</h1>
          <div className="Footer-text">
            <a className="Footer-link" href="https://play.google.com">
              <img className="Footer-play" src="https://xgm.guru/files/1280/152191/75.png" alt="Google Play"></img>
            </a>
            <a className="Footer-link" href="https://www.apple.com">
              <img className="Footer-play" src="https://www.iphones.ru/wp-content/uploads/2011/12/6a0120a5580826970c0162fe448992970d-800wi.jpg" alt="Google Play"></img>
            </a>
            <a className="Footer-link" href="https://consumer.huawei.com">
              <img className="Footer-play" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Huawei_AppGallery_white_badge_EN.png/440px-Huawei_AppGallery_white_badge_EN.png" alt="Google Play"></img>
            </a>
          </div> 
        </div>
      </div>
    )

}

export default Footer;