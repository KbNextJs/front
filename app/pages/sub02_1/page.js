'use client';
import { useState } from 'react';
import Header from '@/app/component/header';
import '../../../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css';
import '../../public/src_css/c_slides.css';
import '../../public/src_css/a_reset.css';
import '../../public/src_css/fonts.css';
import '../../public/src_css/b_style.css';
import '../../public/src_css/ds_style.css';
import kb_logo from '../../public/design/images/skin/kb_logo.png';
import btn_sitemap_close from '../../public/design/images/sub/btn_sitemap_close.png';
import kb_logo_sub from '../../public/design/images/skin/kb_logo_sub.png';
import mobile_btn from '../../public/design/images/skin/mobile_btn.png';
import ico_sitemap from '../../public/design/images/skin/ico_sitemap.png';
import sec02_2_1 from '../../public/design/images/sub/sec02_2_1.png';
import ct_name from '../../public/design/images/sub/ct_name.jpg';
import sub02_2_1_map from '../../public/design/images/sub/sub02_2_1_map.jpg';
import ico_car from '../../public/design/images/sub/ico_car.png';
import ico_bus from '../../public/design/images/sub/ico_bus.png';
import ico_parking from '../../public/design/images/sub/ico_parking.png';
import family_tit from '../../public/design/images/skin/family_tit.png';
import footer_logo from '../../public/design/images/skin/footer_logo.png';
import { useRecoilState } from 'recoil';
import { headerPopupState } from '../../layout';

export default function site1() {
    const [menuState, setMenuState] = useRecoilState(headerPopupState);

    const clickMenu = () => {
        console.log('메뉴 변경');
        setMenuState((menuState) => !menuState);
    };

    return (
        <>
            <Header></Header>
            <div id="bg_wrap"></div>
            <div id="layout_body" className="layout_sub">
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
                <div id="container">
                    <div className="sub_con wrap">
                        <h3 className="sub_tit">위례빌리지 소개</h3>
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
                            <div className="sec2" style={{ border: 'none' }}>
                                <div className="sec_tit">인사말</div>
                                <div className="contents">
                                    <div className="figure">
                                        <img src={sec02_2_1.src} />
                                    </div>
                                    <div className="dscr">
                                        <p>
                                            위례 빌리지로 이사를 오신 날, 어르신은 잔뜩 긴장하셨습니다.
                                            <br />
                                            익숙하지 않은 환경과 새로운 얼굴들이 두려운 듯 방에서 나오지를 않으시니...
                                            <br />
                                            애타는 마음으로 어르신 방을 들락날락 합니다. <br />
                                            일주일이 지나, 거실에 나와 박수를 치며 신나게 노래를 부르시는 모습에 <br />
                                            마음이 뿌듯해지고 우리 직원들의 노력에 박수를 보냅니다.
                                            <span className="blank"></span>
                                            가족이 되어 드립니다. <br />
                                            건강을 지켜 드립니다. <br />
                                            삶의 수고에 보답하는 행복한 집이 되어드리겠습니다.
                                        </p>
                                        <p className="ct_name">
                                            <img src={ct_name.src} />
                                            원장 <strong>조아영</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="center_notice">
                                <h2>센터 공지사항</h2>
                                <div className="notice_list">
                                    <ul>
                                        <li>
                                            <div>
                                                <a href="../bbs_shop/read78dc.html?board_code=sub05_1&amp;idx=18156&amp;cate_sub_idx=41079">
                                                    [식단안내] 위례 빌리지 9월 3주차 식단표
                                                </a>
                                                <span className="date">2024-09-13</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <a href="../bbs_shop/read7b1e.html?board_code=sub05_1&amp;idx=18136&amp;cate_sub_idx=41079">
                                                    [하루의 식단] 2024년 9월 12일
                                                </a>
                                                <span className="date">2024-09-13</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <a href="../bbs/sub1_4.html" className="more">
                                    더보기
                                </a>
                            </div>
                            <div className="banners">
                                <ul>
                                    <li>
                                        <div>위례빌리지 1670-4720</div>
                                    </li>
                                    <li>
                                        <div>
                                            <a href="../bbs/sub2_3_1.html">위례빌리지 상담신청</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="sec4">
                                <h4 className="sec_tit">위례빌리지의 특징</h4>
                                <ul className="orange">
                                    <li>
                                        <div>
                                            <div className="txt">
                                                <div>
                                                    <strong>
                                                        <p>
                                                            {'"'}가까운 거리{'"'}
                                                        </p>
                                                    </strong>
                                                    <p>
                                                        가족 지인분들과 <br />
                                                        언제든지 만날 수 있습니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="txt">
                                                <div>
                                                    <strong>
                                                        <p>
                                                            {'"'}안전하고 쾌적한 환경{'"'}
                                                        </p>
                                                    </strong>
                                                    <p>
                                                        내 집과 같은 편안하고
                                                        <br />
                                                        안전하며 쾌적한 환경을 <br />
                                                        제공합니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="txt">
                                                <div>
                                                    <strong>
                                                        <p>
                                                            {'"'}체계적인 건강관리{'"'}
                                                        </p>
                                                    </strong>
                                                    <p>
                                                        안심과 희망을 드리는 <br />
                                                        체계적인 건강관리를 <br />
                                                        제공합니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="sec4">
                                <h4 className="sec_tit">시설개요</h4>
                                <div className="table_wrap">
                                    <table>
                                        <colgroup>
                                            <col width="20%" />
                                            <col width="*" />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <th>시설명</th>
                                                <td>KB 골든라이프케어 위례 빌리지</td>
                                            </tr>
                                            <tr>
                                                <th>주소</th>
                                                <td>서울시 송파구 위례광장로 220</td>
                                            </tr>
                                            <tr>
                                                <th>개원일</th>
                                                <td>2019.3.8</td>
                                            </tr>
                                            <tr>
                                                <th>시설정원</th>
                                                <td>125명 (1인실 59명 / 2인실 38명 / 4인실 28명)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="sec4">
                                <h4 className="sec_tit">이용안내</h4>
                                <div className="table_wrap">
                                    <table>
                                        <colgroup>
                                            <col width="20%" />
                                            <col width="*" />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <th>이용자격</th>
                                                <td>
                                                    노인장기요양 시설등급 판정 어르신
                                                    <br />
                                                    치매, 뇌졸중, 만성질환 등으로 일상생활 수행에 도움이 필요하신 어르신
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>이용절차</th>
                                                <td>
                                                    홈페이지에 입소대기 신청 {'->'} 전화상담(대기순번 10번 이내) {'->'}{' '}
                                                    방문상담
                                                    {'->'}입소확정
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>이용비용</th>
                                                <td>
                                                    장기요양 총 급여비 중 본인부담금 (20%)
                                                    <br />
                                                    상급침실료, 식사비, 간식비, 미용비 등은 본인 부담금
                                                    <br />
                                                    *자세한 비용은 입소안내에서 확인하실 수 있습니다.
                                                    <a href="sub02_4.html" className="btn_link">
                                                        입소안내 ·접수 바로가기
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="sec5">
                                <h4 className="sec_tit">오시는길</h4>
                                <div className="contents clr">
                                    <div className="dis_table">
                                        <div className="dis_th">KB골든라이프케어 위례빌리지</div>
                                        <div className="dis_td">서울시 송파구 위례광장로 220</div>
                                    </div>
                                    <div className="figure">
                                        <img src={sub02_2_1_map.src} alt="오시는길" />
                                    </div>
                                    <div className="dscr">
                                        <dl>
                                            <dt>
                                                <img src={ico_car.src} alt="자가용" />
                                            </dt>
                                            <dd>
                                                <p>
                                                    <strong>자가용 이용시</strong>
                                                    서울시 송파구 위례광장로 220 또는 kb골든라이프케어 위례 빌리지 검색
                                                    <br />
                                                    (송파)위례동 주민센터 옆 위치
                                                </p>
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>
                                                <img src={ico_bus.src} alt="버스" />
                                            </dt>
                                            <dd>
                                                <p>
                                                    <strong>대중교통 이용시</strong>
                                                    지하철 8호선 장지역에서 440번, 333번 버스 이용
                                                    <br />
                                                    4번째 정류장 (위례동 주민센터, 스타힐스 아파트) 하차
                                                </p>
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>
                                                <img src={ico_parking.src} alt="주차안내" />
                                            </dt>
                                            <dd>
                                                <p>
                                                    <strong>주차안내</strong>
                                                    지상 및 지하주차 가능
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
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
            </div>
        </>
    );
}
