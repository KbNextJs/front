'use client';
import Header from '@/app/component/header';
import '../../../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css';
import '../../public/src_css/c_slides.css';
import '../../public/src_css/a_reset.css';
import '../../public/src_css/fonts.css';
import '../../public/src_css/b_style.css';
import '../../public/src_css/ds_style.css';
import sub2_1_img01 from '../../public/design/images/sub/sub2_1_img01.jpg';
import sub2_1_img02 from '../../public/design/images/sub/sub2_1_img02.jpg';
import sub2_1_img03 from '../../public/design/images/sub/sub2_1_img03.jpg';
import Header2 from '@/app/component/Header2';
import Footer from '@/app/component/footer';
import Family_site from '@/app/component/family_site';

const Sub03_1 = () => {
    return (
        <>
            <Header></Header>
            <div id="layout_body" class="layout_sub">
                <Header2></Header2>
                <div id="container">
                    <div class="sub_con wrap">
                        <h3 class="sub_tit">서비스 소개</h3>
                        <div class="sub2_1 sub03_3">
                            <div class="sec1">
                                <div class="figure">
                                    <p>
                                        <span>KB골든라이프케어 케어센터</span>
                                        케어센터는 어르신이 가능한 오랫동안 집에서 일상 생활을
                                        <br />
                                        유지하실 수 있도록 자립생활을지원하는 것을 목표로 합니다.
                                    </p>
                                </div>
                                <p class="dscr">
                                    <strong>케어센터 만의 특별한 서비스</strong>
                                    하루 중 일정한 시간 동안 케어센터에서 이용자의 활동을 지원하고, 신체 및 인지 기능의
                                    유지 향상을 위한 다양한 프로그램과 식사 서비스를 제공하는 서비스입니다.
                                </p>
                            </div>
                            <div class="sec2">
                                <div class="sec_tit">
                                    <span>01.</span>
                                    안전하면서 편안한 생활환경
                                </div>
                                <div class="contents">
                                    <div class="figure">
                                        <img src={sub2_1_img01.src} alt="안전하면서 편안한 생활환경" />
                                    </div>
                                    <div class="dscr">
                                        <dl>
                                            <dt>어르신들이 안전하고 편안하게 생활 할 수 있는 시설환경</dt>
                                            <dd>최고의 전문가 그룹과 함께 어르신의 안전을 최우선으로 고려한 설계</dd>
                                            <dd>친환경 자재의 사용</dd>
                                            <dd>편안한 휴식 공간 및 수면실</dd>
                                        </dl>
                                        <dl>
                                            <dt>건강하고 즐거운 식사</dt>
                                            <dd>
                                                신뢰할 수 있는 안심 식자재와 전문 영양사에 의한 균형 있는 식단으로
                                                어르신 건강 지원
                                            </dd>
                                            <dd>이용자의 상태에 따른 맞춤 식사</dd>
                                            <dd>단체급식 형태에서 탈피하여 어르신 개별 식기 사용으로 자존감 증대</dd>
                                        </dl>
                                        <dl>
                                            <dt>보호자에게 알림 서비스</dt>
                                            <dd>매일 가족과의 정보 교환을 통해 센터에서의 생활 및 건강상태를 공유</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div class="sec3">
                                <div class="sec_tit">
                                    <span>02.</span>한 분 한 분 맞춤 케어 서비스
                                </div>
                                <div class="contents">
                                    <div class="figure">
                                        <img src={sub2_1_img02.src} alt="한 분 한 분 맞춤 케어 서비스" />
                                    </div>
                                    <div class="dscr">
                                        <dl>
                                            <dt>케어플랜을 통한 맞춤 케어</dt>
                                            <dd>
                                                보호자와 함께 어르신의 상태와 목표에 맞게 서비스 계획(케어플랜)을
                                                수립하고 그 계획에 따라 서비스 제공
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>전문가에 의한 케어 서비스</dt>
                                            <dd>
                                                요양보호사, 간호사, 작업치료사 등 각 분야의 전문가가 이용자 한 분 한 분
                                                의 생활을 지원
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>충실한 기본케어</dt>
                                            <dd>
                                                일본의 노인케어 선진 노하우를 바탕으로 철저한 3대 기본케어 (식사, 배설,
                                                청결) 서비스 제공
                                            </dd>
                                            <dd>청결과 혈액순환에 도움이 되고 즐거움이 있는 입욕 서비스</dd>
                                        </dl>
                                        <dl>
                                            <dt>체계적인 건강관리와 의료연계</dt>
                                            <dd>
                                                간호인력이 혈압체크, 복약지원 등 건강을 관리하고 보호자에게 충분한 정보
                                                제공
                                            </dd>
                                            <dd>
                                                신뢰할 수 있는 의료기관과의 연계를 통해 만일의 경우에도 신속히 대응할 수
                                                있는 의료지원 체계
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div class="sec4">
                                <div class="sec_tit">
                                    <span>03.</span>
                                    활력과 즐거움을 드리는 프로그램
                                </div>
                                <div class="contents">
                                    <div class="figure">
                                        <img src={sub2_1_img03.src} alt="활력과 즐거움을 드리는 프로그램" />
                                    </div>
                                    <div class="dscr">
                                        <dl>
                                            <dt>선택할 수 있는 다양한 소그룹 활동</dt>
                                            <dd>활력과 즐거움을 느낄 수 있는 다양한 소그룹 활동</dd>
                                            <dd>자율적인 선택을 통해 진행 되는「오감 즐거움 프로그램」</dd>
                                        </dl>
                                        <dl>
                                            <dt>전문적인 인지∙ 신체 기능 유지 및 향상 프로그램</dt>
                                            <dd>작업치료사에 의한 신체기능 유지 및 증진 프로그램</dd>
                                            <dd>Smart Care Room 에서 진행되는 최첨단 전산기기를 활용한 프로그램</dd>
                                        </dl>
                                        <dl>
                                            <dt>치매 어르신을 위한 치매전담 서비스</dt>
                                            <dd>치매 전문교육을 이수한 치매 전담인력 배치</dd>
                                            <dd>치매 어르신의 신체 ∙ 인지 기능의 유지, 개선을 위한 맞춤형 프로그램</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>

                            <div class="sec3 sec_program">
                                <div class="sec_tit">
                                    <span>04.</span>
                                    케어센터 프로그램
                                </div>
                                <p class="sec_tit_dscr">
                                    KB골든라이프케어 케어센터 프로그램은 2014년부터 KB금융그룹이 지원하여 전국의 30여개
                                    수행기관에서 <br />
                                    시행하고 있는 KB국민건강총명학교 프로그램을 기반으로 해외 선진프로그램과 접목하여
                                    설계되었습니다.
                                </p>
                                <div class="table_wrap">
                                    <table class="center">
                                        <colgroup>
                                            <col width="10%" />
                                            <col width="20%" />
                                            <col width="11.66%" />
                                            <col width="11.66%" />
                                            <col width="11.66%" />
                                            <col width="11.66%" />
                                            <col width="11.66%" />
                                            <col width="11.66%" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th colspan="2">시간</th>
                                                <th>월</th>
                                                <th>화</th>
                                                <th>수</th>
                                                <th>목</th>
                                                <th>금</th>
                                                <th>토</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colspan="2">08:30 ~10:15</td>
                                                <td colspan="6">
                                                    건강체크 및 티타임
                                                    <br />
                                                    오전 송영
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">10:15 ~ 10:45</td>
                                                <td colspan="6">시니어건강체조</td>
                                            </tr>
                                            <tr>
                                                <td rowspan="2" colspan="2">
                                                    10:50 ~ 11:50
                                                </td>
                                                <td colspan="6" class="point2">
                                                    작업치료(Occupational Therapy)
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6" class="point2">
                                                    전산화 인지재활,인지워크북
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">11:50 ~ 12:00</td>
                                                <td colspan="6">구강체조</td>
                                            </tr>
                                            <tr>
                                                <td>점심</td>
                                                <td>12:00 ~ 13:30</td>
                                                <td colspan="6">점심식사 및 산책</td>
                                            </tr>
                                            <tr>
                                                <td rowspan="2" colspan="2">
                                                    13:30 ~ 14:30
                                                </td>
                                                <td colspan="6" class="point3">
                                                    인지기능 활성화&심리정서지원 프로그램
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6" class="point3">
                                                    요리교실, 민요교실, 공예교실, 종이접기, 영화관람, 미술치료,
                                                    음악치료, 원예치료 등
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">14:30 ~ 15:00</td>
                                                <td colspan="6">오후 간식</td>
                                            </tr>
                                            <tr>
                                                <td rowspan="2" colspan="2">
                                                    15:00 ~ 16:00
                                                </td>
                                                <td colspan="6" class="point4">
                                                    신체기능 활성화 프로그램
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6" class="point4">
                                                    두뇌체조, 실버체조, 밴드체조, 시니어요가, 한국무용, 놀이치료,
                                                    실내스포츠교실 등
                                                </td>
                                            </tr>
                                            <tr>
                                                <td rowspan="3" colspan="2">
                                                    16:20 ~ 17:20
                                                </td>
                                                <td colspan="6" class="point2">
                                                    치매예방교실 ‘브레인톡톡’
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6" class="point2">
                                                    언어교실, 산수교실, 서예교실, 사회적응교실, 놀이교실, 뷰티테라피교실
                                                    등
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">오후송영</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">17:20 ~ 17:30</td>
                                                <td colspan="6">구강 체조</td>
                                            </tr>
                                            <tr>
                                                <td>저녁</td>
                                                <td>17:30 ~ 18:30</td>
                                                <td colspan="6">저녁식사</td>
                                            </tr>
                                            <tr>
                                                <td rowspan="3" colspan="2">
                                                    18:30 ~ 21:00
                                                </td>
                                                <td colspan="6" class="point5">
                                                    자율형선택 프로그램
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6" class="point5">
                                                    물리치료, 웃음치료, 족욕, TV시청 등
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6" class="">
                                                    저녁송영
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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

export default Sub03_1;
