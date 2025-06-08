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

            <div
                className="footerwrapper"
                
              
            >
                <div className="footer-overlaytext">
                    <div className="footer-columntext">
                        

                        <div className="aboutus">
                            <h4>關於我們</h4>
                            <p>我們如何運作</p>
                            <p>聯絡我們</p>
                            <p>常見問題</p>
                        </div>

                        <div className="law">
                            <h4>條款與條件</h4>
                            <p>隱私政策</p>
                            <p>服務條款</p>
                        </div>
                    </div>

                    <div className="copyright">Copyright © 2025 FITNAVI All rights reserved.</div>
                </div>
            </div>
        </section>
    )
}

export default Footer;
