'use client';
import '../../../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css';
import '../../public/src_css/c_slides.css';
import '../../public/src_css/a_reset.css';
import '../../public/src_css/fonts.css';
import '../../public/src_css/b_style.css';
import '../../public/src_css/ds_style.css';
import '../../css/csboard.css';
import kb_logo_sub from '../../public/img_apply/kb_logo_sub.png';
import footer_logo_kb from '../../public/img_apply/footer_logo_kb.png';

const Csboard = () => {
    // 완성
    //https://www.kbgoldenlifecare.co.kr/page/sub1_2_1
    return (
        <>
            <div id="mobile-submenu">
                <li onClick="location.href='/csboard'">홈</li>
                <li ofc_id="B0022026" onclick="sel_ofc(this);" style={{ cursor: 'pointer' }}>
                    서초빌리지
                </li>
                <li ofc_id="B0022027" onclick="sel_ofc(this);" style={{ cursor: 'pointer' }}>
                    위례빌리지
                </li>
                <li ofc_id="B0076736" onclick="sel_ofc(this);" style={{ cursor: 'pointer' }}>
                    은평빌리지
                </li>
                <li ofc_id="B0022025" onclick="sel_ofc(this);" style={{ cursor: 'pointer' }}>
                    강동케어센터
                </li>
                <li ofc_id="B0022028" onclick="sel_ofc(this);" style={{ cursor: 'pointer' }}>
                    위례케어센터
                </li>
                <li ofc_id="C0000001" onclick="sel_ofc(this);" style={{ cursor: 'pointer' }}>
                    평창 카운티
                </li>
            </div>
            <div id="wrap">
                <div id="grid_pos">
                    <div id="head">
                        <div id="header">
                            <div class="logo">
                                <a href="/">
                                    <img src={kb_logo_sub.src} width="442" height="52" />
                                </a>
                            </div>
                            <div class="topm">
                                <p>
                                    <a class="active" href="/csboard">
                                        홈
                                    </a>
                                </p>
                                <p ofc_id="B0022026" onclick="sel_ofc(this);" style={{ cursor: 'pointer' }}>
                                    서초빌리지
                                </p>
                                <p ofc_id="B0022027" onclick="sel_ofc(this);" style={{ cursor: 'pointer' }}>
                                    위례빌리지
                                </p>
                                <p ofc_id="B0076736" onclick="sel_ofc(this);" style={{ cursor: 'pointer' }}>
                                    은평빌리지
                                </p>
                                <p ofc_id="B0022025" onclick="sel_ofc(this);" style={{ cursor: 'pointer' }}>
                                    강동케어센터
                                </p>
                                <p ofc_id="B0022028" onclick="sel_ofc(this);" style={{ cursor: 'pointer' }}>
                                    위례케어센터
                                </p>
                                <p ofc_id="C0000001" onclick="sel_ofc(this);" style={{ cursor: 'pointer' }}>
                                    평창 카운티
                                </p>
                            </div>
                        </div>
                        <div id="btn-mobile-menu"></div>
                    </div>
                    <div id="content">
                        <div id="content_w">
                            <div class="apply_title">고객의소리</div>
                            <div id="div_csboard_main">
                                <div class="apply_toptxt fw">- 원하시는 기관을 선택해주세요.</div>

                                <div class="csb_btn_pos">
                                    <div class="csb_icon_box">
                                        <p ofc_id="B0022026" onclick="sel_ofc(this);">
                                            서초빌리지
                                            <br />
                                            <span>서초빌리지는 24시간 집과 같이 머무시는 요양시설입니다.</span>
                                            <br />
                                            TEL : 02-6284-4000
                                        </p>
                                    </div>
                                    <div class="csb_icon_box">
                                        <p ofc_id="B0022027" onclick="sel_ofc(this);">
                                            위례빌리지
                                            <br />
                                            <span>위례빌리지는 24시간 집과 같이 머무시는 요양시설입니다.</span>
                                            <br />
                                            TEL : 1670-4720
                                        </p>
                                    </div>
                                    <div class="csb_icon_box">
                                        <p ofc_id="B0076736" onclick="sel_ofc(this);">
                                            은평빌리지
                                            <br />
                                            <span>은평빌리지는 24시간 집과 같이 머무시는 요양시설입니다.</span>
                                            <br />
                                            TEL : 010-8990-8566
                                        </p>
                                    </div>
                                    <div class="csb_icon_box">
                                        <p ofc_id="B0022025" onclick="sel_ofc(this);">
                                            강동케어센터
                                            <br />
                                            <span>
                                                강동케어센터는 오전에서 저녁시간까지 이용하시는 주야간보호센터입니다.
                                            </span>
                                            <br />
                                            TEL : 02-2135-5465
                                        </p>
                                    </div>
                                    <div class="csb_icon_box">
                                        <p ofc_id="B0022028" onclick="sel_ofc(this);">
                                            위례케어센터
                                            <br />
                                            <span>
                                                위례케어센터는 오전에서 저녁시간까지 이용하시는 주야간보호센터입니다.
                                            </span>
                                            <br />
                                            TEL : 02-6412-4827
                                        </p>
                                    </div>
                                    <div class="csb_icon_box">
                                        <p ofc_id="C0000001" onclick="sel_ofc(this);">
                                            평창 카운티
                                            <br />
                                            <span>
                                                평창 카운티는 오전에서 저녁시간까지 이용하시는 주야간보호센터입니다.
                                            </span>
                                            <br />
                                            TEL : 02-6273-2600
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div id="div_sel_ofc"></div>
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
                        서울 강남구 강남대로 298 6층, KB골든라이프케어 KB골든라이프케어&nbsp;&nbsp;&nbsp;&nbsp;대표자 :
                        안상봉&nbsp;&nbsp;&nbsp;&nbsp;사업자등록번호 : 822-87-00610
                        <span>
                            <a href="https://www.kbgoldenlifecare.co.kr/shop_info/privacy.htm">[개인정보 처리방침]</a>
                        </span>
                        <br />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Csboard;
