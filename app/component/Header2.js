'use client';
import { useRecoilState } from 'recoil';
import { headerPopupState, mobileHeaderPopupState } from '../layout';
import kb_logo_sub from '../public/design/images/skin/kb_logo_sub.png';
import mobile_btn from '../public/design/images/skin/mobile_btn.png';
import ico_sitemap from '../public/design/images/skin/ico_sitemap.png';
import '../../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css';
import '../public/src_css/c_slides.css';
import '../public/src_css/a_reset.css';
import '../public/src_css/fonts.css';
import '../public/src_css/b_style.css';
import '../public/src_css/ds_style.css';
const Header2 = () => {
    const [menuState, setmenuState] = useRecoilState(headerPopupState);
    const [mobileMenuState, setMobileMenuState] = useRecoilState(mobileHeaderPopupState);

    const clickMenu = (e) => {
        console.log('메뉴 변경', menuState, mobileMenuState);
        e.preventDefault();
        setmenuState((menuState) => !menuState);
    };
    const clickMobileMenu = () => {
        console.log('모바일 메뉴 변경');
        const htmlTag = document.querySelector('html');
        const bodyTag = document.querySelector('body');
        if (mobileMenuState) {
            htmlTag.style.height = 'auto';
            htmlTag.style.overflow = 'visible';
            bodyTag.style.height = 'auto';
            bodyTag.style.overflow = 'visible';
        } else {
            htmlTag.style.height = '1047px';
            htmlTag.style.overflow = 'hidden';
            bodyTag.style.height = '1047px';
            bodyTag.style.overflow = 'hidden';
        }
        setMobileMenuState((mobileMenuState) => !mobileMenuState);
    };

    return (
        <div id="header" className="header_sub">
            <div className="wrap h_wrap">
                <h1>
                    <a href="/">
                        <img src={kb_logo_sub.src} alt="KB골든라이프" />
                    </a>
                    <a href="#" onClick={clickMobileMenu} id="btn_mobile_gnb">
                        <img src={mobile_btn.src} alt="mobile_button" />
                    </a>
                </h1>
                <div className="gnb gnb_sub">
                    <ul className="dep1">
                        <li className="dep1_item">
                            <a> 회사소개 </a>
                            <div className="dep2_0">
                                <ul className="dep2">
                                    <li>
                                        <a>CEO 인사말</a>
                                    </li>
                                    <li>
                                        <a>비전체계</a>
                                    </li>
                                    <li>
                                        <a>공지/공시</a>
                                    </li>
                                    <li>
                                        <a>오시는 길</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="dep1_item">
                            <a target="_blank">
                                평창카운티<span>노인복지주택</span>
                            </a>
                            <div className="dep2_1">
                                <ul className="dep2"></ul>
                            </div>
                        </li>
                        <li className="dep1_item">
                            <a href="/pages/sub02_1" className="on">
                                {' '}
                                위례 빌리지<span>요양시설</span>{' '}
                            </a>
                            <div className="dep2_2">
                                <ul className="dep2">
                                    <li>
                                        <a href="/pages/sub02_1" className="on">
                                            위례빌리지 소개
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/pages/sub02_3">서비스·시설 안내</a>
                                    </li>
                                    <li>
                                        <a href="/pages/sub02_4">입소안내ㆍ접수</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="dep1_item">
                            <a href="Seocho_Dis.html">
                                {' '}
                                서초 빌리지<span>요양시설</span>{' '}
                            </a>
                            <div className="dep2_3">
                                <ul className="dep2">
                                    <li>
                                        <a href="Seocho_Dis.html">서초 빌리지 소개</a>
                                    </li>
                                    <li>
                                        <a href="Seocho_sv.html">서초서비스·시설 안내</a>
                                    </li>
                                    <li>
                                        <a href="Seocho_Rg.html">서초입소안내ㆍ접수</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="dep1_item">
                            <a href="/pages/sub03_1">
                                {' '}
                                케어센터<span>주.야간보호센터</span>{' '}
                            </a>
                            <div className="dep2_4">
                                <ul className="dep2">
                                    <li>
                                        <a href="/pages/sub03_1">서비스 소개</a>
                                    </li>
                                    <li>
                                        <a href="/pages/sub03_2">강동케어센터 소개</a>
                                    </li>
                                    <li>
                                        <a href="sub03_3.html">위례케어센터 소개</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="dep1_item">
                            <a href="/pages/sub1_3_1"> 인재채용 </a>
                            <div className="dep2_5">
                                <ul className="dep2">
                                    <li>
                                        <a href="/pages/sub1_3_1">인재상</a>
                                    </li>
                                    <li>
                                        <a href="/pages/sub1_3_2">직무소개</a>
                                    </li>
                                    <li>
                                        <a href="/pages/recruit">채용공고</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="dep1_item">
                            <a href="/pages/bbs"> 게시판 </a>
                            <div className="dep2_6">
                                <ul className="dep2">
                                    <li>
                                        <a href="/pages/myreg">개소 예정 사업장 안내</a>
                                    </li>
                                    <li>
                                        <a href="/pages/bbs">프로그램/식단표</a>
                                    </li>
                                    <li>
                                        <a href="/pages/sub1_2_1">자원봉사안내</a>
                                    </li>
                                    <li>
                                        <a href="sub05_3.html">견학안내</a>
                                    </li>
                                    <li>
                                        <a href="/pages/sub2_3_1">상담신청</a>
                                    </li>
                                    <li>
                                        <a href="/pages/bl_go">고객의 소리</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="dep1_item">
                            <a href="sub4_1.html"> 노인장기요양보험제도 </a>
                            <div className="dep2_7">
                                <ul className="dep2">
                                    <li>
                                        <a href="sub4_1.html">노인장기요양보험제도</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" id="btnSitemap" onClick={(e) => clickMenu(e)}>
                                <img src={ico_sitemap.src} alt="사이트맵" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="sub_gnb">
                <div className="dep2"></div>
                <div className="dep3"></div>
            </div>
        </div>
    );
};
export default Header2;
