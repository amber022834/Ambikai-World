import "./Home.scss";
import ReactPlayer from "react-player";
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer'


function Home() {
    // const { id } = useParams();
    // const article = cardsData.find(card => card.id === id); 
    const navigate = useNavigate();

    return (
        <>

            <main id="Herosection">
                <div className="floatingPrince">
                    <img src="./prince.png" />
                </div>

                {/* <div className="floatingCircle">
                    <img src="/circle.png" alt="" />
                </div> */}


                {/* <!-- 介紹區 --> */}
                <section className="Herosection">

                    <div className="slogan">
                        <h4>Ambikai's World 旅繪筆記</h4>
                        <p>畫畫x教學x探索世界</p>
                    </div>


                    <div className="floatingCircle">
                        <img src="./circle.png" alt="" aria-hidden="true" />
                    </div>



                    <div className="video-wrapper"
                        style={{
                            position: 'relative',
                            width: '100%',        // 寬度改成 50%
                            height: '40rem',
                            paddingBottom: '30%', // 16:9 比例
                            margin: '0 auto 0 auto'
                        }}
                    >
                        <video
                            src="https://res.cloudinary.com/diyvjhezu/video/upload/v1749658859/zumbkn5utipfp0nyv75i.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                border: 'none',
                                objectFit: 'cover',

                            }}
                        />

                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(97, 93, 93, 0.2)',  // 半透明黑色遮罩
                                pointerEvents: 'none',  // 讓 overlay 不阻擋影片互動（如果需要）
                            }}
                        />
                    </div>

                    <div className="floating-line">
                        <img src="./cloud-sky.png" alt="線條" />
                    </div>



                    <div class="wave-to-aboutme">
                        <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
                            <path d="M0,96 C360,0 1080,180 1440,96 L1440,0 L0,0 Z" fill="#FFF5DF" />
                        </svg>
                    </div>
                </section>



                <section className="Aboutme">
                    <div className="Aboutme-content">
                        <h4>關於我 About me</h4>
                        <p>我從小就喜歡畫畫，一開始只是興趣，
                            一路畫到出社會後，發現繪畫成為生活中不可或缺的部分。
                            後來在一邊旅行一邊畫畫的過程中，決定轉職全職畫家，把熱愛的事變成每天都在做的工作！
                            在創作的過程中，我也發現，分享繪畫經歷也是有趣的事。
                            於是開始設計線上課程，將自己的經驗與方法整理出來，幫助更多人認識繪畫、享受創作的樂趣。
                            目前透過網站和線上課程，分享畫畫技巧，希望讓大家更輕易開始畫畫~</p>

                        <button className="more-Aboutme">更多品牌故事</button>
                    </div>

                    <div className="floating-fog">
                        <img src="./sky-fog.png" alt="" />
                    </div>

                    <div className="selfie">
                        <img src="./red-flower.png" alt="" className="red-flower" />
                        <img src="./selfie.jpg" alt="畫家照片" className="selfie-pic" />
                    </div>

                    {/* <div className="News">
                        <p>📢 旅行繪畫展 7/5–7/21 Mania Artpace，限量手繪小卡送完為止！</p>
                        <p>📢 繪畫課程開放報名中！早鳥報名享85折優惠，名額有限！</p>
                        <p>📢 畫攤快閃登場！7/13・7/14 台北Cutton市集，限定手繪小品＆現場繪畫互動！</p>

                    </div>  */}
                </section>

                <section className="Gallery">
                    <div className="Gallery-content">
                        <h4>作品 Gallery</h4>
                    </div>

                    <div class="spaceship-track">

                        <img src="./Hualien.png" alt="圖1" class="trailing-image" />
                        <img src="./Car.png" alt="圖2" class="trailing-image" />
                        <img src="./Thailand.png" alt="圖3" class="trailing-image" />
                        <div class="connector-line"></div>


                        <div class="spaceship-container">
                            <button onClick={() => navigate("/gallery")}>
                                <img src="./spaceship.png" alt="飛行船" class="spaceship" />
                            </button>
                            <span class="spaceship-text">看更多作品</span>
                        </div>
                    </div>

                </section>

                <section className="Article">
                    <div className="Article-content">
                        <h4>旅繪筆記 Travel journels</h4>
                    </div>

                    <div>
                        <div class="card-container">
                            <div className="notebook-card">
                                <div className="card-image-wrapper">
                                    <img src="./tokyo-blossom.jpg" alt="記憶照片" className="card-image" />
                                </div>
                                <div className="card-note">
                                    <h3 className="card-title">小日記標題</h3>
                                    <p className="card-description">這是一段關於日常的筆記式描述，像是寫在筆記本的一頁。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                

                <Footer />


            </main >









        </>
    )
}
export default Home