'use client';
import Header from '@/app/component/header';
import '../../../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css';
import '../../public/src_css/c_slides.css';
import '../../public/src_css/a_reset.css';
import '../../public/src_css/fonts.css';
import '../../public/src_css/b_style.css';
import '../../public/src_css/ds_style.css';
import '../../css/apply.css';
import '../../css/select2.css';
{
    /* <link media="all" type="text/css" rel="stylesheet" href="../css/apply.css">
<link media="all" type="text/css" rel="stylesheet" href="../js/jquery-ui.css">
<link media="all" type="text/css" rel="stylesheet" href="../css/select2.css">
<link media="all" type="text/css" rel="stylesheet" href="../fullCalendar/main.min.css"> */
}
import kb_logo_sub from '../../public/img_apply/kb_logo_sub.png';
import footer_logo_kb from '../../public/img_apply/footer_logo_kb.png';
import sub2_1_img03 from '../../public/design/images/sub/sub2_1_img03.jpg';
import Header2 from '@/app/component/Header2';
import family_tit from '../../public/design/images/skin/family_tit.png';
import Footer from '@/app/component/footer';
import Family_site from '@/app/component/family_site';

const Recruit = () => { // 세부내용 추가 해야함
    //https://admin.kbgoldenlifecare.co.kr/recruit/main
    return (
        <>
            <div id="mobile-submenu">
                <li onClick="location.href='main-2.html'">채용시스템 홈</li>
            </div>
            <div id="wrap">
                <div id="grid_pos">
                    <div id="head">
                        <div id="header">
                            <div class="logo">
                                <a href="http://www.kbgoldenlifecare.co.kr/">
                                    <img src={kb_logo_sub.src} width="442" height="52" />
                                </a>
                            </div>
                            <div class="topm">
                                <p>
                                    <a href="main.html">채용시스템 홈</a>
                                </p>
                            </div>
                        </div>
                        <div id="btn-mobile-menu"></div>
                    </div>

                    <div id="content">
                        <div id="content_w">
                            <div class="apply_title">KB골든라이프케어 채용 시스템</div>
                            <div class="apply_toptxt fw">- 원하시는 메뉴를 선택해주세요.</div>
                            <div class="recruit_btn_pos">
                                <div class="recruit_box" onClick="location.href='list.html'">
                                    <p>채용지원</p>
                                </div>
                                <div class="recruit_box" onClick="location.href='chk_rst.html'">
                                    <p>지원확인</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="copyright">
                        <div class="copy_gap"></div>
                        <div id="copy">
                            <div class="logo">
                                <img src={footer_logo_kb.src} />
                            </div>
                            <div class="addr">
                                서울 서초구 형촌8길 7 KB골든라이프케어&nbsp;&nbsp;&nbsp;&nbsp;대표자 :
                                전영산&nbsp;&nbsp;&nbsp;&nbsp;사업자등록번호 : 822-87-00610
                                <span>
                                    &nbsp;&nbsp;&nbsp;
                                    <span
                                        style={{ cursor: 'pointer' }}
                                        onclick="javascript:location.href='https://www.kbgoldenlifecare.co.kr/shop_info/privacy.htm'"
                                    >
                                        [개인정보 처리방침]
                                    </span>
                                </span>
                                <br />
                                Copyright kbgoldenlifecare.co.kr. All Rights Reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Recruit;
