import "./Footer.scss";
// import { useNavigate } from 'react-router-dom';

function Footer() {
    // const navigate = useNavigate();

    return (
        <section id="footer">
            <button
                className="Back-to-top-button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{ cursor: 'pointer' }}
            >

            </button>

            <div className="footerwrapper"


            >
                <div className="footer-overlaytext">
                    <div className="footer-columntext">


                        <div className="aboutus">
                            <h4>Explore</h4>
                            <p>關於我</p>
                            <p>作品集</p>
                            <p>商品一覽</p>
                        </div>

                        <div className="Joinus">
                            <h4>Join</h4>
                            <p>會員登入</p>
                            <p>訂閱說明</p>
                        </div>

                        <div className="Terms">
                            <h4>Terms and Conditions</h4>
                            <p>隱私權和cookies</p>
                            <p>訂閱說明</p>
                        </div>
                    </div>

                    <div className="copyright">Copyright © 2025Ambikai</div>
                </div>
            </div>
        </section>
    )
}

export default Footer;
