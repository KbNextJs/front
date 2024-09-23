'use client';
import { useState } from 'react';
import Header from '@/app/component/header';
import '../../../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css';
import '../../public/src_css/c_slides.css';
import '../../public/src_css/a_reset.css';
import '../../public/src_css/fonts.css';
import '../../public/src_css/b_style.css';
import '../../public/src_css/ds_style.css';

import sec02_2_1 from '../../public/design/images/sub/sec02_2_1.png';
import ct_name from '../../public/design/images/sub/ct_name.jpg';
import sub02_2_1_map from '../../public/design/images/sub/sub02_2_1_map.jpg';
import ico_car from '../../public/design/images/sub/ico_car.png';
import ico_bus from '../../public/design/images/sub/ico_bus.png';
import ico_parking from '../../public/design/images/sub/ico_parking.png';
import family_tit from '../../public/design/images/skin/family_tit.png';
import Footer from '@/app/component/footer';
import Header2 from '@/app/component/Header2';
import Family_site from '@/app/component/family_site';
import MobileHeader from '@/app/component/mobileHeader';

export default function Sub02_1() {
    // 완성
    return (
        <>
            <Header></Header>
            <MobileHeader></MobileHeader>
            <div id="bg_wrap"></div>
            <div id="layout_body" className="layout_sub">
                <Header2></Header2>
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
                <Family_site></Family_site>
                <Footer></Footer>
            </div>
        </>
    );
}
