'use client';
import Header from '@/app/component/header';
import { useRecoilState } from 'recoil';
import { headerPopupState } from '../../layout';
import kb_logo from '../../public/design/images/skin/kb_logo.png';
import '../../../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css';
import '../../public/src_css/c_slides.css';
import '../../public/src_css/a_reset.css';
import '../../public/src_css/fonts.css';
import '../../public/src_css/b_style.css';
import '../../public/src_css/ds_style.css';
import kb_logo_sub from '../../public/design/images/skin/kb_logo_sub.png';
import mobile_btn from '../../public/design/images/skin/mobile_btn.png';
import ico_sitemap from '../../public/design/images/skin/ico_sitemap.png';

import sub3_2_f_101 from '../../public/design/images/sub/sub3_2_f_101.jpg';
import sub3_2_f_101_m from '../../public/design/images/sub/sub3_2_f_101_m.jpg';
import sub3_2_f_102 from '../../public/design/images/sub/sub3_2_f_102.jpg';
import sub3_2_f_102_m from '../../public/design/images/sub/sub3_2_f_102_m.jpg';
import sub3_2_f_103 from '../../public/design/images/sub/sub3_2_f_103.jpg';
import sub3_2_f_103_m from '../../public/design/images/sub/sub3_2_f_103_m.jpg';
import sub3_2_f_104 from '../../public/design/images/sub/sub3_2_f_104.jpg';
import sub3_2_f_105_m from '../../public/design/images/sub/sub3_2_f_105_m.jpg';
import sub3_2_f_105 from '../../public/design/images/sub/sub3_2_f_105.jpg';
import sub3_2_f_106 from '../../public/design/images/sub/sub3_2_f_106.jpg';
import sub3_2_f_106_m from '../../public/design/images/sub/sub3_2_f_106_m.jpg';
import sub3_2_f_107 from '../../public/design/images/sub/sub3_2_f_107.jpg';
import sub3_2_f_107_m from '../../public/design/images/sub/sub3_2_f_107_m.jpg';
import sub3_2_f_108 from '../../public/design/images/sub/sub3_2_f_108.jpg';
import sub3_2_f_108_m from '../../public/design/images/sub/sub3_2_f_108_m.jpg';
import Header2 from '@/app/component/Header2';
import family_tit from '../../public/design/images/skin/family_tit.png';
import Footer from '@/app/component/footer';
import MobileHeader from '@/app/component/mobileHeader';
import Family_site from '@/app/component/family_site';

const Sub02_2 = () => {
    // 완성
    return (
        <>
            <Header></Header>
            <MobileHeader></MobileHeader>
            <div id="layout_body" className="layout_sub">
                <Header2></Header2>
                <div id="container">
                    <div class="sub_con wrap">
                        {/* <style>
                        .sub3_2 .dscr {
                            font-size: 20px;
                            text-align: center;
                        }
                        .sec_tit {
                            margin-bottom: 10px;
                            font-size: 24px !important;
                            color: #000 !important;
                            display: inline-block;
                            border-bottom: 2px solid #000;
                        }
                        .m_img {
                            display: none;
                        }
                        .txt_wrap {
                            margin-bottom: 20px;
                        }
                        .section2 .sec2_01_wrap {
                            float: left;
                            width: 50%;
                        }
                        .section2 .sec2_01_wrap .Img_wrap {
                            margin-right: 10px;
                        }
                        .section2 .sec2_02_wrap {
                            float: left;
                            width: 50%;
                        }
                        .section2 h5 {
                            color: #fcaf17;
                            margin: 10px 0;
                        }
                        .section5 h5 {
                            color: #fcaf17;
                        }

                        .sub3_2 .section2 {
                            margin-bottom: 40px;
                        }
                        .sub3_2 .section3 {
                            padding-top: 20px;
                        }
                        .sub3_2 .section3 .txt p {
                            margin: 10px 0;
                        }
                        .sub3_2 .section3,
                        .sub3_2 .section4,
                        .sub3_2 .section5,
                        .sub3_2 .section6,
                        .sub3_2 .section7 {
                            margin-bottom: 40px;
                        }
                        .section4 {
                            padding-top: 20px;
                        }
                        .section4 .Img_wrap .Img > div {
                            float: left;
                            width: 50%;
                        }
                        .section4 .Img_wrap .Img figure {
                            margin-right: 10px;
                            text-align: center;
                        }

                        .section5 {
                            padding-top: 20px;
                        }
                        .section5 .Img_wrap .Img > div {
                            float: left;
                            width: 50%;
                        }
                        .section5 .Img_wrap .Img figure {
                            margin-right: 10px;
                        }
                        .section6 {
                            padding-top: 20px;
                        }

                        .section7 {
                            padding-top: 20px;
                        }
                        .section7 .Img_wrap .Img > div {
                            float: left;
                            width: 50%;
                        }
                        .section7 .Img_wrap .Img figure {
                            margin-right: 10px;
                        }

                        @media screen and (max-width: 768px) {
                            .m_img {
                                display: block;
                            }
                            .pc_img {
                                display: none;
                            }
                            .section2 .sec2_01_wrap,
                            .section2 .sec2_02_wrap {
                                width: 100%;
                                margin-bottom: 20px;
                            }
                            .section2 img,
                            .section3 img,
                            .section4 img,
                            .section5 img,
                            .section6 img,
                            .section7 img {
                                width: 100%;
                                height: auto;
                            }
                            .section4 .Img_wrap .Img > div,
                            .section5 .Img_wrap .Img > div,
                            .section7 .Img_wrap .Img > div {
                                width: 100%;
                                margin-bottom: 10px;
                            }
                            .sub3_2 .dscr {
                                font-size: 18px;
                            }
                            .sub3_2 .dscr_txt {
                                font-size: 14px;
                            }
                            .section2 p,
                            .section3 p,
                            .section4 p,
                            .section5 p,
                            .section5 span,
                            .section6 span {
                                font-size: 14px;
                            }
                        }
                        @media screen and (max-width: 480px) {
                            .sub3_2 .dscr {
                                font-size: 15px;
                            }
                            .sec_tit {
                                font-size: 15px !important;
                            }
                        }
                    </style> */}

                        <h3 class="sub_tit">서비스·시설 안내</h3>
                        <div class="sub2_1 sub02_1 new_layout">
                            <div class="sec1">
                                <div class="figure figure_ds">
                                    <p>
                                        <span>KB골든라이프케어 위례 빌리지</span>
                                        지금까지의 생활방식이 최대한 변화되지 않고 평소와 같이 <br />
                                        생활할 수 있도록, 내 집과 같이 편안한 생활을 지원하는 것을 목표로 합니다.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="sub3_2">
                            <div class="tab_nav">
                                <ul>
                                    <li>
                                        <a href="/pages/sub02_3">서비스 안내</a>
                                    </li>
                                    <li class="on">
                                        <a href="/pages/sub02_2">시설 안내</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="section1">
                                <p class="dscr">“내 집과 같은 편안한 환경을 제공합니다”</p>
                                <p class="dscr_txt">
                                    건강을 위해 친환경 자재를 사용하였습니다.
                                    <br />
                                    배리어 프리 설계로 실내의 턱을 모두 없애고 모든 문에 손가락 끼임 방지 기능을
                                    적용하여 안전을 고려했습니다.
                                    <br />
                                    건강한 생활을 위해 온도와 습도를 항상 유지할 수 있는 시스템을 적용하였습니다.
                                </p>
                            </div>

                            <div class="section2">
                                <h4 class="sec_tit emph">침실</h4>
                                <div class="Img_wrap">
                                    <div class="Img">
                                        <figure>
                                            <img src={sub3_2_f_101.src} class="pc_img" />
                                            <img src={sub3_2_f_101_m.src} class="m_img" />
                                        </figure>
                                    </div>
                                </div>
                                <div class="txt_wrap">
                                    <div class="txt">
                                        <h5>1인실.</h5>
                                        <p>
                                            침실 별 욕실이 설치되어 있는 프라이빗하고 쾌적한 공간입니다.
                                            <br />
                                            익숙한 가구를 들여오고 취향에 따라 좋아하는 커튼을 선택해 자신만의
                                            생활공간을 꾸밀 수 있습니다.
                                            <br />
                                            가족들과 침실에서 자유롭게 면회하실 수 있습니다.
                                            <br />
                                        </p>
                                    </div>
                                </div>
                                <div class="Img_wrap">
                                    <div class="Img">
                                        <figure>
                                            <img src={sub3_2_f_102.src} class="pc_img" />
                                            <img src={sub3_2_f_102_m.src} class="m_img" />
                                        </figure>
                                    </div>
                                </div>
                                <div class="txt_wrap">
                                    <div class="txt">
                                        <h5>2인실.</h5>
                                        <p>
                                            2명이 생활하기에 충분한 공간으로 개인별 사생활 보호가 가능합니다.
                                            <br />
                                            일부 개인가구를 들여오실 수 있습니다.
                                            <br />
                                            부부가 함께 입소를 원하시는 분을 위한 부부실도 있습니다.
                                            <br />
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="section3">
                                <h4 class="sec_tit emph">거실</h4>
                                <div class="txt_wrap">
                                    <div class="txt">
                                        <p>
                                            햇살이 드는 따듯한 분위기의 거실에서 직원과 어르신이 한 가족처럼 소통하고
                                            생활합니다.
                                            <br />
                                            탁 트린 열린 공간을 위해 거실에 큰 창문을 설치하여 수변공원, 광장 등의 주변
                                            경관을 <br />
                                            조망하면서 삶의 활력과 마음의 편안함을 느낄 수 있습니다.
                                        </p>
                                    </div>
                                </div>
                                <div class="Img_wrap">
                                    <div class="Img">
                                        <figure>
                                            <img src={sub3_2_f_103.src} class="pc_img" />
                                            <img src={sub3_2_f_103_m.src} class="m_img" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div class="section4">
                                <h4 class="sec_tit emph">물리치료실</h4>
                                <div class="txt_wrap">
                                    <div class="txt">
                                        <p>
                                            신체 및 인지기능 유지향상과 통증관리를 위해 전문 작업치료사와 물리치료사가
                                            개별 맞춤형 서비스를 제공합니다.
                                        </p>
                                    </div>
                                </div>
                                <div class="Img_wrap">
                                    <div class="Img">
                                        <figure>
                                            <img src={sub3_2_f_104.src} />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div class="section5">
                                <h4 class="sec_tit emph">프로그램실</h4>
                                <div class="txt_wrap">
                                    <div class="txt">
                                        <p>
                                            층마다 마련된 프로그램실은 맞춤형 프로그램을 위한 소그룹 공간으로 활용됩니다
                                            <br />
                                            프로그램실에서 진행되는 다양한 프로그램을 통해 하루를 즐겁고 활기차게 보내실
                                            수 있습니다.
                                        </p>
                                    </div>
                                </div>
                                <div class="Img_wrap">
                                    <div class="Img">
                                        <figure>
                                            <img src={sub3_2_f_105.src} class="pc_img" />
                                            <img src={sub3_2_f_105_m.src} class="m_img" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div class="section6">
                                <h4 class="sec_tit emph">공용공간</h4>
                                <div class="txt_wrap">
                                    <div class="txt">
                                        <p>
                                            가족과 지인을 반갑게 맞이하기 위해 1층에 편안한 로비공간을 조성하였습니다.
                                            <br />
                                            1층에 마련된 커뮤니티 공간은 어르신들이 고립되지 않고 지역사회와 소통할 수
                                            있는 기회를 열어줍니다.
                                        </p>
                                    </div>
                                </div>
                                <div class="Img_wrap">
                                    <div class="Img">
                                        <figure>
                                            <img src={sub3_2_f_106.src} class="pc_img" />
                                            <img src={sub3_2_f_106_m.src} class="m_img" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div class="section7">
                                <h4 class="sec_tit emph">1층 로비</h4>
                                <div class="Img_wrap">
                                    <div class="Img">
                                        <figure>
                                            <img src={sub3_2_f_107.src} class="pc_img" />
                                            <img src={sub3_2_f_107_m.src} class="m_img" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div class="section8">
                                <h4 class="sec_tit emph">시설 외관</h4>
                                <div class="Img_wrap">
                                    <div class="Img">
                                        <div class="Img01">
                                            <figure>
                                                <img src={sub3_2_f_108.src} class="pc_img" />
                                                <img src={sub3_2_f_108_m.src} class="m_img" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Family_site></Family_site>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Sub02_2;
