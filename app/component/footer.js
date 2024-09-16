import footer_logo from '../public/design/images/skin/footer_logo.png';

const Footer = () => {
    return (
        <div id="footer">
            <div className="wrap">
                <dl className="dis_table">
                    <dt className="dis_td f_logo">
                        <a href="../main.html">
                            <img src={footer_logo.src} alt="KB골든라이프케어" />
                        </a>
                    </dt>
                    <dd className="dis_td f_copy">
                        <p>
                            서울 강남구 강남대로 298 6층 KB골든라이프케어<span></span>대표자 : 안상봉
                            <span></span>
                            <br />
                            사업자등록번호 : 822-87-00610
                            <span>
                                <a href="../shop_info/privacy.html">[개인정보 처리방침]</a>
                            </span>
                        </p>
                        <p>Copyright kbgoldenlifecare.co.kr. All Rights Reserved.</p>
                    </dd>
                </dl>
            </div>
        </div>
    );
};

export default Footer;
