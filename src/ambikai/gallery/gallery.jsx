import "./Gallery.scss";
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer'

function Gallery() {

    const navigate = useNavigate();


    return (
        <>

            <main id="Gallery">



                {/* <!-- banner區域 --> */}
                <section className="Gallery-wrapper">

                    <div className="Gallery-title">
                        <p>Gallery</p>
                    </div>

                    <div className="Gallery-intro">
                        <p><span>這些作品是在旅行途中創作的，靈感來自路上的風景與體驗。<br /> 走過不同的城市與角落，用筆記錄當下的感動。 <br />畫的不只是景色，更是旅途中自我對話的片段。

</span></p>

                    </div>
                </section>

                {/* <!-- 作品區 --> */}
                <section className="Gallery-artworks">
                    <div className="grid-container">
                        <div className="grid-item-wide">
                            <img src="./Tiger3031.png" alt="" />
                            <div className="overlay">
                                <div className="title">稻埕X虎</div>
                            </div>
                        </div>

                        <div className="grid-item">
                            <img src="./Hualien.png" alt="" />
                            <div className="overlay">
                                <div className="title">起星談</div>
                            </div></div>

                        <div className="grid-item">
                            <img src="./Papaya.png" alt="" />
                            <div className="overlay">
                                <div className="title">瓜埕囝</div>
                            </div>
                        </div>

                        <div className="grid-item-wide">
                            <img src="./Sea67.png" alt="" />
                            <div className="overlay">
                                <div className="title">觀外埕</div>
                            </div>
                        </div>


                        <div className="grid-item">
                            <img src="./Thailand.png" alt="" />
                            <div className="overlay">
                                <div className="title">泰皇宮</div>
                            </div>
                        </div>


                        <div className="grid-item">
                            <img src="./Car.png" alt="" />
                            <div className="overlay">
                                <div className="title">嘟嘟嘟</div>
                            </div>
                        </div>


                        <div className="grid-item">
                            <img src="./Food.png" alt="" />
                            <div className="overlay">
                                <div className="title">泰饞記</div>
                            </div>
                        </div>

                    </div>


                </section>

                {/* 換頁區 */}
                <section>
                    <div className="page-button">


                    </div>

                </section>
            </main >

            <Footer />

        </>
    )
}
export default Gallery