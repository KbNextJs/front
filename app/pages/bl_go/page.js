import Header from '@/app/component/header';
import Header2 from '@/app/component/Header2';
import Family_site from '@/app/component/family_site';
import Footer from '@/app/component/footer';
import '../../../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css';
import '../../public/src_css/c_slides.css';
import '../../public/src_css/a_reset.css';
import '../../public/src_css/fonts.css';
import '../../public/src_css/b_style.css';
import '../../public/src_css/ds_style.css';
import '../../css/bl_go.css';
import bl_go_li_bg_1 from '../../public/design/ds_img/bl_go_li_bg_1.png';
import bl_go_li_bg_2 from '../../public/design/ds_img/bl_go_li_bg_2.png';
import bl_go_li_bg_3 from '../../public/design/ds_img/bl_go_li_bg_3.png';
import bl_go_li_bg_4 from '../../public/design/ds_img/bl_go_li_bg_4.png';
import MobileHeader from '@/app/component/mobileHeader';

const Bl_go = () => {
    //https://www.kbgoldenlifecare.co.kr/page/bl_go 고객의 소리 페이지
    return (
        <>
            <Header></Header>
            <MobileHeader />
            <div id="layout_body" class="layout_sub">
                <Header2></Header2>
                <div class="sub_con wrap">
                    <div class="container">
                        <div class="bl_go_area">
                            <h1>고객의 소리</h1>
                            <div class="bl_go_area_text_box">
                                <h2>KB골든라이프케어 고객의소리</h2>
                                <p>
                                    KB골든라이프케어는 고객의 소중한 의견에 귀 기울이겠습니다.
                                    <br class="bl_go_br_none" />
                                    고객님의 칭찬,제안, 불편 모두에 감사드리며
                                    <br class="bl_go_br_none" />더 나은 서비스로 보답하겠습니다.
                                </p>
                            </div>
                        </div>
                        <div class="bl_go_area_nav">
                            <h3>고객의 소리 절차</h3>
                            <ul>
                                <li>
                                    <div class="bl_go_nav_1">
                                        <img src={bl_go_li_bg_1.src} />
                                        <p>고객의소리 접수</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="bl_go_nav_1">
                                        <img src={bl_go_li_bg_2.src} />
                                        <p>상담사 확인</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="bl_go_nav_1">
                                        <img src={bl_go_li_bg_3.src} />
                                        <p>해당부서 전달</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="bl_go_nav_1">
                                        <img src={bl_go_li_bg_4.src} />
                                        <p>원인분석및 조치</p>
                                    </div>
                                </li>
                            </ul>
                            <div class="bl_go_nav_text_box">
                                <dl>
                                    <dt>·</dt>
                                    <dd>
                                        <span>나의 글 확인하기</span> 메뉴를 통해 고객의 소리 답변 확인이 가능합니다.
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>·</dt>
                                    <dd>답변일로부터 1개월간 유효합니다.</dd>
                                </dl>
                            </div>
                        </div>
                        <div class="bl_go_button">
                            <a href="/pages/csboard">고객의 소리 접수 및 답변 확인하기</a>
                        </div>
                    </div>
                </div>
                <Family_site></Family_site>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Bl_go;
