'use client';
import Header from '@/app/component/header';
import '../../../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css';
import '../../public/src_css/c_slides.css';
import '../../public/src_css/a_reset.css';
import '../../public/src_css/fonts.css';
import '../../public/src_css/b_style.css';
import '../../public/src_css/ds_style.css';
import icoc_img__ from '../../public/design/images/sub/icoc_img__.png';
import Header2 from '@/app/component/Header2';
import family_tit from '../../public/design/images/skin/family_tit.png';
import Footer from '@/app/component/footer';
import MobileHeader from '@/app/component/mobileHeader';

const Sub02_4 = () => { //완성
    return (
        <>
            <Header></Header>
            <MobileHeader></MobileHeader>
            <div id="layout_body" class="layout_sub">
                <Header2></Header2>
                <div id="container">
                    <div class="sub_con wrap">
                        <h3 class="sub_tit">입소안내ㆍ접수</h3>
                        <div class="sub2_1 sub3_3 sub03_3">
                            <div class="sec1">
                                <div class="figure">
                                    <p>
                                        <span>KB골든라이프케어 위례빌리지</span>
                                        오픈 : 2019년 3월
                                        <br />
                                        소재지 : 서울 송파구 장지동 882-1 (위례동 주민센터 옆 위치)
                                    </p>
                                </div>
                            </div>
                            <div class="section2">
                                <h4 class="tit2">입소안내</h4>
                                <div class="tbl_wrap">
                                    <table>
                                        <colgroup>
                                            <col width="25%" align="center" />
                                            <col width="" />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <th>입소자격</th>
                                                <td>
                                                    - 노인장기요양보험 등급 판정을 받은 어르신
                                                    <br />- 일상생활수행에 도움이 필요한 어르신
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>입소절차</th>
                                                <td>
                                                    사전접수 및 입소상담 {'>'} 입소신청서 제출 {'>'} 입소계약
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="add_section">
                                <h4 class="tit2">비용안내</h4>
                                <div class="price_tbl price_tbl_pc">
                                    <table>
                                        <colgroup>
                                            <col width="10%" />
                                            <col width="16%" />
                                            <col width="16%" />
                                            <col width="16%" />
                                            <col width="16%" />
                                            <col width="16%" />
                                        </colgroup>
                                        <thead>
                                            {/* <tr>
                                                <th>4인실</th>
                                                <th>2인실</th>
                                                <th>1인실</th>
                                            </tr> */}

                                            <tr>
                                                <th colspan="2">구분</th>
                                                <th>1인실</th>
                                                <th>2인실</th>
                                                <th>4인실</th>
                                                <th>치매전담실</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colspan="2">
                                                    장기요양급여 본인 부담금
                                                    <br />
                                                    (장기요양급여비용의 20%)
                                                </td>
                                                <td>●</td>
                                                <td>●</td>
                                                <td>●</td>
                                                <td>●</td>
                                            </tr>
                                            <tr>
                                                <td rowspan="2">식대</td>
                                                <td>식비</td>
                                                <td>●</td>
                                                <td>●</td>
                                                <td>●</td>
                                                <td>●</td>
                                            </tr>
                                            <tr>
                                                <td>간식비</td>
                                                <td>●</td>
                                                <td>●</td>
                                                <td>●</td>
                                                <td>●</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">상급침실이용료</td>
                                                <td>●</td>
                                                <td>●</td>
                                                <td>-</td>
                                                <td>●</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">
                                                    합계
                                                    <br />
                                                    (본인부담금)
                                                </td>
                                                <td>270~305만원</td>
                                                <td>215~220만원</td>
                                                <td>90~93만원</td>
                                                <td>300~310만원</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p class="noti_ft">
                                        ㆍ위의 금액은 장기요양보험 제공분을 제외한 순수 본인부담금액입니다..
                                        <br />
                                        ㆍ30일 기준으로 장기요양듭급에 따라 차이가 발생합니다.
                                        <br />
                                        ㆍ미포함 비용 : 계약의사 진료비, 이/미용비, 교통비 등
                                    </p>
                                </div>
                            </div>

                            <div class="section3">
                                <h4 class="tit2">대기접수 안내</h4>

                                <div class="sec03_box">
                                    <img src={icoc_img__.src} />
                                    <p>
                                        KB골든라이프케어 위례 빌리지에 입소를 원하시는 고객님들은 아래의 대기접수 신청을
                                        통해 접수해주시기 바랍니다.
                                        <br />
                                        침실의 공실 여부에 따라 순차적으로 전화드리고 있으며, 순번 1번~10번은 시설에
                                        방문하셔서 서류 작성 및 투어를 진행하실 수 있습니다.
                                        <br />
                                        입소에 대해 궁금하신 점은 아래의 문의전화로 전화주시기 바랍니다.
                                        <br />
                                    </p>
                                </div>

                                <div class="btn_group">
                                    <a href="https://admin.kbgoldenlifecare.co.kr/waitsystem?oid=WRV" target="_blank">
                                        대기접수 신청 ㆍ 대기순번 확인하기
                                    </a>
                                </div>

                                <span></span>
                                <p>
                                    대기 접수 후<br /> 대기순번이 부여됩니다.
                                </p>
                            </div>
                            <div class="sec03_box box01 box02">
                                <span></span>
                                <p>
                                    현재 시스템 개발로 대기순번은 7월
                                    <br />
                                    하순에 홈페이지를 통해 확인하실 수 있습니다.
                                </p>
                            </div>
                            <div class="sec03_box box01">
                                <span></span>
                                <p>
                                    대기순번 1번~10번은 시설에 방문하셔서 서류
                                    <br />
                                    작성 및 투어를 진행하실 수 있습니다.
                                </p>

                                <div class="step_list"></div>
                            </div>
                            <div class="call_bnr">
                                <div class="box">
                                    KB골든라이프케어 위례 빌리지 상담전화
                                    <strong>02-1670-4720</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="family_site">
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

export default Sub02_4;
