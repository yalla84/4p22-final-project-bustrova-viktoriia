import Head from '../../Components/Header/Head/Head';
import Footer from '../../Components/Footer/Footer';
import './Home.css';

function Home () {
    return (
        <>
            <Head></Head>
            <div className="Home">
                <img className="Home-img" src="https://internationalwealth.info/wp-content/uploads/2019/12/online-shop.jpg" alt='foto'></img>
                <img className="Home-img" src="https://optomby.com/wp-content/uploads/2019/06/Internet-magazin.jpg" alt='foto'></img>
                <img className="Home-img" src="https://beseller.by/assets/images/rantabelniy-sait-magazina/sozdat-sait-i-zarabotat.png" alt='foto'></img>
                <img className="Home-img" src="https://www.alltime.ru/obj/article/image-blog/Bazovyy_muzhskoy_garderob/Bazovyy_muzhskoy_garderob_1.jpg" alt='foto'></img>
                <img className="Home-img" src="https://design-homes.ru/images/galery/2436/khranenie-bez-shkafov_5f5d34e1a5534.jpg" alt='foto'></img>
                <img className="Home-img" src="https://img.dmclk.ru/s1200x800q80/blog/xIme80ttPA-Z9wcN.jpg" alt='foto'></img>
            </div>
            <Footer></Footer>
        </>

    )
}

export default Home;