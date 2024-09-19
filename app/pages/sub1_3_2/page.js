'use client';
import Header from '@/app/component/header';
import '../../../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css';
import '../../public/src_css/c_slides.css';
import '../../public/src_css/a_reset.css';
import '../../public/src_css/fonts.css';
import '../../public/src_css/b_style.css';
import '../../public/src_css/ds_style.css';
import sub1_3_2_img01 from '../../public/design/images/sub/sub1_3_2_img01.jpg';
import sub1_3_2_ico01 from '../../public/design/images/sub/sub1_3_2_ico01.png';
import sub2_1_img03 from '../../public/design/images/sub/sub2_1_img03.jpg';
import Header2 from '@/app/component/Header2';
import family_tit from '../../public/design/images/skin/family_tit.png';
import Footer from '@/app/component/footer';
import Family_site from '@/app/component/family_site';
import MobileHeader from '@/app/component/mobileHeader';

const Sub1_3_2 = () => {
    //완성
    //https://www.kbgoldenlifecare.co.kr/page/sub1_3_2
    return (
        <>
            <Header></Header>
            <MobileHeader></MobileHeader>
            <div id="layout_body" class="layout_sub">
                <Header2></Header2>
                <div id="container">
                    <div class="sub_con wrap">
                        <h3 class="sub_tit">직무소개</h3>
                        <div class="sub1_3_2">
                            <div class="section1">
                                <h3 class="tit_section">KB골든라이프케어의 직군 및 직무를 소개 합니다.</h3>
                                <ul>
                                    <li>
                                        <div>
                                            <img src={sub1_3_2_img01.src} alt="직무소개" />
                                            <div class="box_contact">
                                                <div class="dis_table">
                                                    <p class="dis_td">
                                                        <i>
                                                            <img src={sub1_3_2_ico01.src} alt="전화아이콘" />
                                                        </i>
                                                        <span>채용문의</span>
                                                        <span>02-2135-2675</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <table>
                                                <colgroup>
                                                    <col width="25%" />
                                                    <col width="25%" />
                                                    <col width="50%" />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th colspan="2">직군</th>
                                                        <th>직무</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th colspan="2">관리직군</th>
                                                        <td>
                                                            경영관리(기획, 인사, 회계)
                                                            <br />
                                                            사업개발(사업전개, 토지매매)
                                                            <br />
                                                            운영관리(서비스품질, 매출관리)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th rowspan="2">전문직군</th>
                                                        <th class="emph">케어센터</th>
                                                        <td>
                                                            센터장
                                                            <br />
                                                            요양보호사
                                                            <br />
                                                            사회복지사,사무원
                                                            <br />
                                                            간호사,작업치료사
                                                            <br />
                                                            조리원,운전원
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th class="emph">빌리지</th>
                                                        <td>
                                                            시설장,사무국장
                                                            <br />
                                                            요양보호사
                                                            <br />
                                                            사회복지사,사무원
                                                            <br />
                                                            간호사,작업치료사
                                                            <br />
                                                            물리치료사
                                                            <br />
                                                            영양사,조리사 · 조리원
                                                            <br />
                                                            운전원,관리인,위생원
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="section2">
                                <h3 class="tit_section">직무별 상세 업무를 소개합니다.</h3>
                                <div class="tbl_wrap fst_tbl_wrap">
                                    <h4 class="tit_tbl">케어센터</h4>
                                    <table>
                                        <colgroup>
                                            <col width="25%" align="center" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>직무</th>
                                                <th>세부내용</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>센터장</th>
                                                <td>
                                                    케어센터 대표로서 이용자에게 제공되는 서비스와 이를 위한 직원관리 및
                                                    기관 운영에 총괄적인 책임을 가지고, 관련된 주요사항에 대한
                                                    의사결정등의 업무 수행
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>사회복지사</th>
                                                <td>
                                                    케어센터에서의 사례관리를 기반으로 사회복지 프로그램 기획 · 실행 및
                                                    지역사회와의 관계조정 업무 수행
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>간호사조무사</th>
                                                <td>
                                                    케어센터 이용자들의 일상적인 건강체크 및 건강관리 전반에 대한 업무
                                                    수행
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>요양보호사</th>
                                                <td>
                                                    케어플랜에 따른 케어서비스 제공 및 이용자가 편안하고 쾌적한
                                                    일상생활을 하기 위해 필요한 업무 수행
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>작업치료사</th>
                                                <td>
                                                    케어센터 이용자들이 일상생활을 영위할 수 있도록 인지적 · 신체적 기능
                                                    유지 향상을 위한 프로그램 설계, 진행 등 작업치료서비스 제공 업무
                                                    수행
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>사무원</th>
                                                <td>
                                                    운영규정에 따른 시설에서의 회계처리, 사무처리를 담당하는 역할 수행
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>조리원</th>
                                                <td>
                                                    케어센터 이용자의 건강유지를 위하여 계획된 식단을 조리, 배식하며
                                                    청결한 조리공간 위생상태 유지를 위한 역할 수행
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>운전원</th>
                                                <td>안전운전을 통한 이동 서비스 제공 및 차량 관리 업무 수행</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="fst_tbl_wrap">
                                    <h4 class="tit_tbl">빌리지</h4>
                                    <div class="tbl_wrap">
                                        <table>
                                            <colgroup>
                                                <col width="25%" align="center" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>직무</th>
                                                    <th>세부내용</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>시설장</th>
                                                    <td>
                                                        빌리지 대표로서 입소자에게 제공되는 서비스와 이를 위한 직원관리
                                                        및 기관 운영에 총괄적인 책임을 가지고, 관련된 주요사항에 대한
                                                        의사결정등의 업무 수행
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>사무국장</th>
                                                    <td>
                                                        빌리지 시설장을 보좌하여 인사 · 행정사무 전반에 관한 업무 수행
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>간호케어부장</th>
                                                    <td>
                                                        빌리지 시설장을 보좌하여 보호자 상담 및 간호 · 케어서비스 전반에
                                                        관한 업무 수행
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>교육팀장</th>
                                                    <td>빌리지 근무자 대상 교육 계획 수립 및 교육 진행 업무 수행</td>
                                                </tr>
                                                <tr>
                                                    <th>사회복지사</th>
                                                    <td>
                                                        빌리지에서의 사례관리를 기반으로 사회복지 프로그램 기획 · 실행
                                                        및 지역사회와의 관계조정 업무 수행
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>간호사</th>
                                                    <td>
                                                        빌리지 입소자의 응급상황 대응 및 건강관리 전반에 대한 업무 수행
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>요양보호사</th>
                                                    <td>
                                                        케어플랜에 따른 케어서비스 제공 및 입소자가 편안하고 쾌적한
                                                        일상생활을 하기 위해 필요한 업무 수행
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>물리 · 작업치료사</th>
                                                    <td>
                                                        빌리지 입소자들이 일상생활을 영위할 수 있도록 인지적 · 신체적
                                                        기능 유지 향상을 위한 프로그램 설계, 진행 등 물리 ·
                                                        작업치료서비스 제공 업무 수행
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>사무원</th>
                                                    <td>
                                                        운영규정에 따른 시설에서의 회계처리, 사무처리를 담당하는 역할
                                                        수행
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>영양사</th>
                                                    <td>
                                                        빌리지 입소자의 건강유지를 위하여 건강상태를 고려한 식단을
                                                        구성하고 제공하는 역할 수행
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>조리사 · 조리원</th>
                                                    <td>
                                                        빌리지 입소자의 건강유지를 위하여 계획된 식단을 조리, 배식하며
                                                        청결한 조리공간 위생상태 유지를 위한 역할 수행
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>관리인</th>
                                                    <td>
                                                        빌리지 내의 설비와 시설전체의 환경에 대해 안전을 점검하고
                                                        관리하는 역할 수행
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>위생원</th>
                                                    <td>
                                                        감염 예방을 위한 세탁물 위생 관리 및 빌리지 내 · 외부 환경의
                                                        청결 유지를 위한 역할 수행
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <h4 class="tit_tbl">카운티</h4>
                                <div class="tbl_wrap">
                                    <table>
                                        <colgroup>
                                            <col width="25%" align="center" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>직무</th>
                                                <th>세부내용</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>시설장</th>
                                                <td>
                                                    카운티 대표로서 입주자에게 제공되는 서비스와 이를 위한 직원관리 및
                                                    기관 운영에 총괄적인 책임을 가지고, 관련된 주요사항에 대한
                                                    의사결정등의 업무 수행
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>사회복지사</th>
                                                <td>
                                                    카운티 입주자의 생활 편의를 위한 컨시어지 업무 및 사회활동 프로그램
                                                    기획 · 실행 등의 업무 수행
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>사무원</th>
                                                <td>
                                                    운영규정에 따른 시설에서의 회계처리, 사무처리를 담당하는 역할 수행
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>간호사</th>
                                                <td>카운티 입주자의 응급상황 대응 및 건강관리 전반에 대한 업무 수행</td>
                                            </tr>
                                            <tr>
                                                <th>운동지도사</th>
                                                <td>
                                                    카운티 입주자의 신체적 기능 유지 향상을 위한 프로그램 설계, 진행 등
                                                    운동서비스 제공 업무 수행
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>영양사</th>
                                                <td>
                                                    카운티 입주자의 건강유지를 위하여 건강상태를 고려한 식단을 구성하고
                                                    제공하는 역할 수행
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>조리사 · 조리원</th>
                                                <td>
                                                    카운티 입주자의 건강유지를 위하여 계획된 식단을 조리, 배식하며
                                                    청결한 조리공간 위생상태 유지를 위한 역할 수행
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>시설관리</th>
                                                <td>
                                                    카운티 내의 설비와 시설전체의 환경에 대해 안전을 점검하고 관리하는
                                                    역할 수행
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>주차보안</th>
                                                <td>
                                                    카운티 입주자와 방문고객에게 주차 서비스를 제공하고 시설 내 보안을
                                                    점검하는 역할 수행
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>공용미화</th>
                                                <td>카운티 공용구역 환경이 쾌적하도록 관리하는 역할 수행</td>
                                            </tr>
                                            <tr>
                                                <th>세대미화</th>
                                                <td>카운티 세대 내부 환경이 쾌적하도록 관리하는 역할 수행</td>
                                            </tr>
                                            <tr>
                                                <th>마사지사</th>
                                                <td>
                                                    카운티 입주자의 개인별 신체상태에 따른 마사지 서비스를 제공하는 역할
                                                    수행
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>스파관리</th>
                                                <td>
                                                    카운티 스파 이용자를 안내하고 스파 내부 환경을 관리하는 역할 수행
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="section3">
                                <a href="https://kbglc.carefor.co.kr/recruit/main" class="btn_go">
                                    채용공고 바로가기
                                </a>
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

export default Sub1_3_2;
