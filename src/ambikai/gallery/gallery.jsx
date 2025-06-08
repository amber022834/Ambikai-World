import "./Gallery.scss";

import { useNavigate } from 'react-router-dom';


function Gallery() {
   
    const navigate = useNavigate();
    

    return (
        <>

            <main id="Gallery">

                {/* <!-- banner區域 --> */}
                <section classNameName="Gallery-wrapper">

                    <div classNameName="Gallery-title">
                        <p>Gallery</p>
                    </div>
                </section>

                {/* <!-- 作品區 --> */}
                <section classNameName="Gallery-artworks">
                    <div className="grid-container">
                        <div className="grid-item-wide">
                            <img src="/Tiger3031.png" alt="" />
                            <div className="overlay">
                                <div className="title">作品名稱</div>
                            </div>
                        </div>

                        <div className="grid-item">
                            <img src="/Hualien.png" alt="" />
                            <div className="overlay">
                                <div className="title">作品名稱</div>
                            </div></div>

                        <div className="grid-item">
                            <img src="/Papaya.png" alt="" />
                            <div className="overlay">
                                <div className="title">作品名稱</div>
                            </div>
                        </div>

                        <div className="grid-item-wide">
                            <img src="/Sea67.png" alt="" />
                            <div className="overlay">
                                <div className="title">作品名稱</div>
                            </div>
                        </div>


                        <div className="grid-item">
                            <img src="/Thailand.png" alt="" />
                            <div className="overlay">
                                <div className="title">作品名稱</div>
                            </div>
                        </div>


                        <div className="grid-item">
                            <img src="/Car.png" alt="" />
                            <div className="overlay">
                                <div className="title">作品名稱</div>
                            </div>
                        </div>


                        <div className="grid-item">
                            <img src="/Food.png" alt="" />
                            <div className="overlay">
                                <div className="title">作品名稱</div>
                            </div>
                        </div>

                    </div>


                </section>

                {/* 換頁區 */}
                <section>
                    <div classNameName="page-button">

                   
                    </div>

                </section>
            </main >

        </>
    )
}
export default Gallery