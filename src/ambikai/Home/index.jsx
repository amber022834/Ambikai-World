import "./Home.scss";
import ReactPlayer from "react-player";
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpa } from '@fortawesome/free-solid-svg-icons';

function Home() {
    // const { id } = useParams();
    // const article = cardsData.find(card => card.id === id); 
    const navigate = useNavigate();

    return (
        <>

            <main id="Herosection">
                <div className="floatingPrince">
                    <img src="./images/prince.png" />
                </div>

                <div className="floatingCircle">
                    <img src="./images/circle.png" alt="" />
                </div>


                {/* <!-- 介紹區 --> */}
                <section className="Herosection">

                    <div className="slogan">
                        <h4>Ambikai's World 旅繪筆記</h4>
                        <p>畫畫x教學x探索世界</p>
                    </div>


                    <div className="floatingCircle">
                        <img src="./images/circle.png" alt="" aria-hidden="true" />
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
                        <img src="./images/cloud-sky.png" alt="線條" />
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

                        {/* <button className="more-Aboutme">更多品牌故事</button> */}
                    </div>

                    <div className="floating-fog">
                        <img src="./images/sky-fog.png" alt="fog" />
                        <span className="dot1"></span>
                        <span className="dot2"></span>
                    </div>

                    <div className="selfie">
                        <img src="./images/red-flower.png" alt="" className="red-flower" />
                        <img src="./images/selfie.jpg" alt="畫家照片" className="selfie-pic" />
                    </div>


                </section>

                <section className="Gallery">

                    <div className="Gallery-content">
                        <h4>作品 Gallery</h4>
                    </div>

                    <div class="spaceship-track">

                        <img src="./images/Hualien.png" alt="圖1" class="trailing-image" />
                        <img src="./images/Car.png" alt="圖2" class="trailing-image" />
                        <img src="./images/Thailand.png" alt="圖3" class="trailing-image" />
                        <div class="connector-line"></div>


                        <div class="spaceship-container">
                            <button onClick={() => navigate("/gallery")}>
                                <img src="./images/spaceship.png" alt="飛行船" class="spaceship" />
                            </button>
                            <span class="spaceship-text">看更多作品</span>
                        </div>
                    </div>

                </section>

                <section className="Onlineclass" >


                    <div className="Onlineclass-content">
                        <h4>Ambikai的線上課程</h4>
                        <p>目前有Procreate、色鉛筆、代針筆課程，輕鬆學畫畫，跟我一起創作吧！</p>
                        <button className="more-Aboutme">查看課程</button>
                    </div>

                    <div className="floating-fog">
                        <img src="./images/sky-fog.png" alt="" />
                    </div>


                </section>


                <section className="Article">
                    <div className="Article-content">
                        <div className="planet-yellow">
                            <img src="./images/planet-yellow.png" alt="" />
                        </div>
                        <h4>旅繪筆記 Travel journels</h4>
                    </div>



                    <div>
                        <div class="card-container">
                            <div className="notebook-card">
                                <div className="card-image-wrapper">
                                    <img src="./images/tokyo-blossom.jpg" alt="記憶照片" className="card-image" />
                                </div>

                                <div className="card-content">
                                    <div className="card-note">
                                        <h3 className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            旅繪x東京  <img src="./images/pointer.png" alt="" />
                                        </h3>

                                        <p className="card-description">這趟東京旅行，我拿著色鉛筆慢慢畫出眼前的風景。櫻花沒有濃彩，卻帶著淡淡的粉紅，像是在紙上輕輕暈開的顏色。每一片花瓣，每一陣微風，都被我細心地描繪成一幅柔和的畫。走在街頭巷尾，感覺自己像個畫家，用溫暖的筆觸紀錄下這座城市的春天，讓這些美好時刻能一直留存在心裡。</p>
                                        <button className="Readmore" onClick={() => navigate("/Article")}>Read more&gt;&gt;</button>
                                    </div>

                                    <div className="card-date">
                                        <p>2023/4/5 東京</p>
                                    </div>
                                </div>



                            </div>

                            <div className="notebook-card">
                                <div className="card-image-wrapper">
                                    <img src="./images/Greece.jpg" alt="記憶照片" className="card-image" />
                                </div>

                                <div className="card-content">
                                    <div className="card-note">
                                        <h3 className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            旅繪x希臘  <img src="./images/pointer.png" alt="" />
                                        </h3>
                                        <p className="card-description">自助希臘的旅程中，我用畫筆記錄著每一段海岸線與純白房舍的故事。從碧藍無垠的海面，到石階小巷中的斑駁牆面，每一處風景都有時間的印記，靜靜述說著歷史與生活的韻味。透過色彩與線條，我將這些美麗的瞬間化為永恆，讓希臘的光影和氣息，在畫布上生動綻放。</p>
                                        <button className="Readmore" onClick={() => navigate("/Article")}>Read more&gt;&gt;</button>
                                    </div>

                                    <div className="card-date">
                                        <p>2024/7/20 米克諾斯</p>
                                    </div>
                                </div>



                            </div>


                            <div className="notebook-card">
                                <div className="card-image-wrapper">
                                    <img src="./images/Thailand.jpg" alt="記憶照片" className="card-image" />
                                </div>

                                <div className="card-content">
                                    <div className="card-note">
                                        <h3 className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            旅繪x泰國  <img src="./images/pointer.png" alt="" />
                                        </h3>
                                        <p className="card-description">這次去泰國一定要來鄭王廟走走，真的超有味道。那座金色的佛塔超級亮眼，拍照超美。我還帶著畫具，坐在廟裡一邊看風景一邊畫畫，捕捉那種光影和寧靜感，感覺整個旅行都更有靈魂了。這裡不只是個觀光景點，還能讓人心情放鬆，像是在跟這座城市深度聊天一樣。</p>
                                        <button className="Readmore" onClick={() => navigate("/Article")}>Read more&gt;&gt;</button>
                                    </div>

                                    <div className="card-date">
                                        <p>2024/8/20 曼谷</p>
                                    </div>
                                </div>

                            </div>

                            <div className="notebook-card">
                                <div className="card-image-wrapper">
                                    <img src="./images/Hualien-beach.jpg" alt="記憶照片" className="card-image" />
                                </div>

                                <div className="card-content">
                                    <div className="card-note">
                                        <h3 className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            旅繪x台灣  <img src="./images/pointer.png" alt="" />
                                        </h3>
                                        <p className="card-description">一路搭車到花蓮，藍天白雲、山海相伴，每一個角落都超級美。我帶著畫具，找了個安靜的海邊坐下，慢慢用筆記錄眼前的海浪和山巒，感覺像把旅程變成一幅幅獨一無二的畫作。花蓮的自然風光和純樸的人情味，讓我畫畫的靈感源源不絕。</p>
                                        <button className="Readmore" onClick={() => navigate("/Article")}>Read more&gt;&gt;</button>
                                    </div>

                                    <div className="card-date">
                                        <p>2025/4/28 花蓮</p>
                                    </div>
                                </div>

                            </div>




                            {/* <div className="floatingCircle">
                                <img src="./circle.png" alt="" aria-hidden="true" />
                            </div> */}
                        </div>
                    </div>

                    <div className="floating-line-article">
                        <img src="./images/cloud-sky.png" alt="線條" />
                    </div>

                </section>


                <section className="contact">

                </section>





                <Footer />


            </main >









        </>
    )
}
export default Home