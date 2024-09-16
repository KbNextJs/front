'use client';
import { useRecoilState } from 'recoil';
import { headerPopupState } from '../layout';
import kb_logo_sub from '../public/design/images/skin/kb_logo_sub.png';
import mobile_btn from '../public/design/images/skin/mobile_btn.png';
import ico_sitemap from '../public/design/images/skin/ico_sitemap.png';
const Header2 = () => {
    const [menuState, setmenuState] = useRecoilState(headerPopupState);

    const clickMenu = () => {
        console.log('메뉴 변경');
        setmenuState((menuState) => !menuState);
    };

    return (
        <div id="header" className="header_sub">
            <div className="wrap h_wrap">
                <h1>
                    <a href="../main.html">
                        <img src={kb_logo_sub.src} alt="KB골든라이프" />
                    </a>
                    <a href="#" id="btn_mobile_gnb">
                        <img src={mobile_btn.src} alt="mobile_button" />
                    </a>
                </h1>
                <div className="gnb gnb_sub">
                    <ul className="dep1">
                        <li className="dep1_item">
                            <a href="sub1_1_1.html"> 회사소개 </a>
                            <div className="dep2_0">
                                <ul className="dep2">
                                    <li>
                                        <a href="sub1_1_2.html">CEO 인사말</a>
                                    </li>
                                    <li>
                                        <a href="sub1_1_1.html">비전체계</a>
                                    </li>
                                    <li>
                                        <a href="../bbs/sub1_4.html">공지/공시</a>
                                    </li>
                                    <li>
                                        <a href="sub1_1_3.html">오시는 길</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="dep1_item">
                            <a href="http://pyeongchang-county.com/" target="_blank">
                                평창카운티<span>노인복지주택</span>
                            </a>
                            <div className="dep2_1">
                                <ul className="dep2"></ul>
                            </div>
                        </li>
                        <li className="dep1_item">
                            <a href="sub02_1.html" className="on">
                                {' '}
                                위례 빌리지<span>요양시설</span>{' '}
                            </a>
                            <div className="dep2_2">
                                <ul className="dep2">
                                    <li>
                                        <a href="sub02_1.html" className="on">
                                            위례빌리지 소개
                                        </a>
                                    </li>
                                    <li>
                                        <a href="sub02_3.html">서비스·시설 안내</a>
                                    </li>
                                    <li>
                                        <a href="sub02_4.html">입소안내ㆍ접수</a>
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
                            <a href="sub03_1.html">
                                {' '}
                                케어센터<span>주.야간보호센터</span>{' '}
                            </a>
                            <div className="dep2_4">
                                <ul className="dep2">
                                    <li>
                                        <a href="sub03_1.html">서비스 소개</a>
                                    </li>
                                    <li>
                                        <a href="sub03_2.html">강동케어센터 소개</a>
                                    </li>
                                    <li>
                                        <a href="sub03_3.html">위례케어센터 소개</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="dep1_item">
                            <a href="sub1_3_1.html"> 인재채용 </a>
                            <div className="dep2_5">
                                <ul className="dep2">
                                    <li>
                                        <a href="sub1_3_1.html">인재상</a>
                                    </li>
                                    <li>
                                        <a href="sub1_3_2.html">직무소개</a>
                                    </li>
                                    <li>
                                        <a href="https://admin.kbgoldenlifecare.co.kr/recruit/main">채용공고</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="dep1_item">
                            <a href="../bbs/sub05_1.html"> 게시판 </a>
                            <div className="dep2_6">
                                <ul className="dep2">
                                    <li>
                                        <a href="../myreg/sub05_6.html">개소 예정 사업장 안내</a>
                                    </li>
                                    <li>
                                        <a href="../bbs/sub05_1.html">프로그램/식단표</a>
                                    </li>
                                    <li>
                                        <a href="sub1_2_1.html">자원봉사안내</a>
                                    </li>
                                    <li>
                                        <a href="sub05_3.html">견학안내</a>
                                    </li>
                                    <li>
                                        <a href="../bbs/sub2_3_1.html">상담신청</a>
                                    </li>
                                    <li>
                                        <a href="bl_go.html">고객의 소리</a>
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
                            <a href="#" id="btnSitemap" onClick={() => clickMenu()}>
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
