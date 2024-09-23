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
import sub02_2_1 from '../../public/design/images/sub/sub02_2_1.jpg';
import sub02_2_2 from '../../public/design/images/sub/sub02_2_2.jpg';
import sub02_2_3 from '../../public/design/images/sub/sub02_2_3.jpg';
import sub02_2_4 from '../../public/design/images/sub/sub02_2_4.jpg';
import sub02_2_5 from '../../public/design/images/sub/sub02_2_5.jpg';
import sub02_2_6 from '../../public/design/images/sub/sub02_2_6.jpg';
import sub02_2_7 from '../../public/design/images/sub/sub02_2_7.jpg';
import Header2 from '@/app/component/Header2';
import family_tit from '../../public/design/images/skin/family_tit.png';
import Footer from '@/app/component/footer';
import MobileHeader from '@/app/component/mobileHeader';

const Sub02_3 = () => {
    // 완성
    return (
        <>
            <Header></Header>
            <MobileHeader></MobileHeader>
            <div id="layout_body" className="layout_sub">
                <Header2></Header2>
                <div id="container">
                    <div className="sub_con wrap">
                        <h3 className="sub_tit">서비스·시설 안내</h3>
                        <div className="sub2_1 sub02_1 new_layout">
                            <div className="sec1">
                                <div className="figure">
                                    <p>
                                        <span>KB골든라이프케어 위례 빌리지</span>
                                        지금까지의 생활방식이 최대한 변화되지 않고 평소와 같이 <br />
                                        생활할 수 있도록, 내 집과 같이 편안한 생활을 지원하는 것을 목표로 합니다.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="sub3_2">
                            <div className="tab_nav">
                                <ul>
                                    <li className="on">
                                        <a href="/pages/sub02_3">서비스 안내</a>
                                    </li>
                                    <li>
                                        <a href="/pages/sub02_2">시설 안내</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="sec01 sub3_2">
                                <h2 className="sec_tit">위례 빌리지 서비스 안내</h2>
                                <div className="sub02_2_1">
                                    <img src={sub02_2_1.src} />
                                </div>
                                <ul className="sub02_2_2">
                                    <li>
                                        <div>
                                            <strong>
                                                <span>01</span>
                                                생활지원서비스
                                            </strong>
                                            <p>건강한 생활과 편안한 심신을 위해 따뜻한 생활지원서비스를 제공합니다.</p>
                                        </div>
                                        <ul className="list">
                                            <li>
                                                <img src={sub02_2_2.src} />
                                            </li>
                                            <li className="txt">
                                                <div>
                                                    <p>청결도움</p>
                                                    <p>배변도움</p>
                                                    <p>이동도움</p>
                                                    <p>식사도움</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div>
                                            <strong>
                                                <span>02</span>
                                                간호서비스
                                            </strong>
                                            <p>
                                                우수한 간호사가 24시간 상주하여 안심과 희망을 드리는 체계적인 건강관리를
                                                제공합니다.
                                            </p>
                                        </div>
                                        <ul className="list">
                                            <li>
                                                <img src={sub02_2_3.src} />
                                            </li>
                                            <li className="txt">
                                                <div className="col-2">
                                                    <p>24시간 간호사 상주</p>
                                                    <p>당뇨관리</p>
                                                    <p>매일 건강 체크 및 관리</p>
                                                    <p>전문간호</p>
                                                    <p>투약관리</p>
                                                    <p>건강상태 상담</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div>
                                            <strong>
                                                <span>03</span>
                                                의료지원서비스
                                            </strong>
                                            <p>
                                                신뢰할 수 있는 의료기관과의 제휴, 협약을 통해 긴급한 경우에도 신속하게
                                                대응할 수 있는 의료지원 서비스를 제공합니다.
                                            </p>
                                        </div>
                                        <ul className="list">
                                            <li>
                                                <img src={sub02_2_4.src} />
                                            </li>
                                            <li className="txt">
                                                <div className="">
                                                    <p>계약의 자문의 진료</p>
                                                    <p>가정간호서비스 연계</p>
                                                    <p>분야별 전문병원 연계</p>
                                                    <p>응급 시 대응 체계</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div>
                                            <strong>
                                                <span>04</span>
                                                재활치료서비스
                                            </strong>
                                            <p>
                                                인지, 신체기능 유지를 위해 전문 작업치료사와 물리치료사가 개별 맞춤형
                                                서비스를 제공합니다.
                                            </p>
                                        </div>
                                        <ul className="list">
                                            <li>
                                                <img src={sub02_2_5.src} />
                                            </li>
                                            <li className="txt">
                                                <div className="">
                                                    <p>인지재활</p>
                                                    <p>삼킴훈련</p>
                                                    <p>운동치료</p>
                                                    <p>열전기치료</p>
                                                    <p>공기압박치료</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div>
                                            <strong>
                                                <span>05</span>
                                                식사서비스
                                            </strong>
                                            <p>
                                                식사는 건강의 기본이며 일상의 기쁨입니다. 신뢰할 수 있는 안심 식자재와
                                                전문 영양사에 의한 균형있는 식단으로 어르신의 건강을 지원합니다.
                                            </p>
                                        </div>
                                        <ul className="list">
                                            <li>
                                                <img src={sub02_2_6.src} />
                                            </li>
                                            <li className="txt">
                                                <div className="">
                                                    <p>전문 영양사에 의한 개별 영양관리</p>
                                                    <p>개인별 상태에 따른 맞춤 식사 제공</p>
                                                    <p>친환경 고품질 식자재</p>
                                                    <p>철저한 위생관리</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div>
                                            <strong>
                                                <span>06</span>
                                                프로그램 이벤트
                                            </strong>
                                            <p>일상의 행복, 삶의 활력을 드리는 다양한 프로그램을 제공합니다.</p>
                                        </div>
                                        <ul className="list">
                                            <li>
                                                <img src={sub02_2_7.src} />
                                            </li>
                                            <li className="txt">
                                                <div className="">
                                                    <p>음악, 미술, 원예, 웃음 요리 등 다양한 여가 프로그램</p>
                                                    <p>지역사회ㆍ가족ㆍ직원 교류 프로그램</p>
                                                    <p>문화공연, 영화관람, 종교행사, 명절행사 등</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="family_site">
                    <span>
                        <img src={family_tit.src} alt="KB금융그룹" />
                    </span>
                    <a href="https://www.kbfg.com/Kor/index.jsp" target="_blank">
                        KB금융지주
                    </a>
                    <a href="https://www.kbstar.com/" target="_blank">
                        KB국민은행
                    </a>
                    <a href="http://www.kbinsure.co.kr/main.ec" target="_blank">
                        KB손해보험
                    </a>
                    <a href="http://www.kbsec.com/" target="_blank">
                        KB증권
                    </a>
                    <a href="https://card.kbcard.com/" target="_blank">
                        KB국민카드
                    </a>
                    <a href="https://www.kblife.co.kr/" target="_blank">
                        KB라이프생명
                    </a>
                    <a href="http://www.kbam.co.kr/" target="_blank">
                        KB자산운용
                    </a>
                    <a href="https://www.kbcapital.co.kr/main.kbc" target="_blank">
                        KB캐피탈
                    </a>
                    <a href="https://www.kbsavings.com/" target="_blank">
                        KB저축은행
                    </a>
                    <a href="https://kbret.co.kr/main.do" target="_blank">
                        KB부동산신탁
                    </a>
                    <a href="http://www.kbic.co.kr/" target="_blank">
                        KB인베스트먼트
                    </a>

                    <a href="http://www.kds.co.kr/kor/main/index.asp" target="_blank">
                        KB데이타시스템
                    </a>
                    <a href="https://www.kbfg.com/kbresearch/main.do" target="_blank">
                        KB경영연구소
                    </a>
                </div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Sub02_3;
