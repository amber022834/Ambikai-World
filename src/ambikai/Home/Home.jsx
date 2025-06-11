import "./Home.scss";
import ReactPlayer from "react-player";
import { useNavigate } from 'react-router-dom';


function Home() {
    // const { id } = useParams();
    // const article = cardsData.find(card => card.id === id); 
    const navigate = useNavigate();

    return (
        <>

            <main id="card9">

                <div className="floatingCircle">
                    <img src="/circle.png" alt="" />
                </div>


                {/* <!-- banner區域 --> */}
                <section className="Aboutme">

                    {/* <div className="Aboutme-content">
                        <h4>關於我 About me</h4>
                        <p></p>
                    </div> */}

                    <div className="banner-wrapper">
                        <img src="/images/banner.png" alt="Banner" />
                    </div>

                </section>

                <section className="Gallery">
                    <h2>作品區</h2>
                </section>

                <section className="Article">
                    <h2>文章區</h2>
                </section>


            </main >

        </>
    )
}
export default Home