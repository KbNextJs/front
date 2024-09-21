'use client';
import Header from '@/app/component/header';
import { useRouter } from 'next/navigation';
import '../../../../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css';
import '../../../public/src_css/c_slides.css';
import '../../../public/src_css/a_reset.css';
import '../../../public/src_css/fonts.css';
import '../../../public/src_css/b_style.css';
import '../../../public/src_css/ds_style.css';
import '../../../css/apply.css';
import '../../../css/select2.css';
{
    /* <link media="all" type="text/css" rel="stylesheet" href="../css/apply.css">
<link media="all" type="text/css" rel="stylesheet" href="../js/jquery-ui.css">
<link media="all" type="text/css" rel="stylesheet" href="../css/select2.css">
<link media="all" type="text/css" rel="stylesheet" href="../fullCalendar/main.min.css"> */
}
import kb_logo_sub from '../../../public/img_apply/kb_logo_sub.png';
import footer_logo_kb from '../../../public/img_apply/footer_logo_kb.png';
import sub2_1_img03 from '../../../public/design/images/sub/sub2_1_img03.jpg';
import Header2 from '@/app/component/Header2';
import family_tit from '../../../public/design/images/skin/family_tit.png';
import Footer from '@/app/component/footer';
import Family_site from '@/app/component/family_site';

const Recruit = () => {
    // 세부내용 추가 해야함
    //https://admin.kbgoldenlifecare.co.kr/recruit/main
    const router = useRouter();

    return (
        <>
            <div id="mobile-submenu">
                <li onClick={()=>router.push('/pages/recruit')}>채용시스템 홈</li>
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
                                    <a href="/pages/recruit">채용시스템 홈</a>
                                </p>
                            </div>
                        </div>
                        <div id="btn-mobile-menu"></div>
                    </div>
                    <div id="content">
                        <div id="content_w">
                            <div class="apply_title">KB골든라이프케어 채용 시스템</div>
                            <div class="apply_toptxt fw">- 채용공고</div>
                            <div class="recruit_list">
                                <li class="th_c">
                                    <span class="w_no">번호</span>
                                    <span class="w_area">사업장</span>
                                    <span class="w_sub">공고명</span>
                                    <span class="w_part">모집인원</span>
                                    <span class="w_date">공고일</span>
                                    <span class="w_date2">마감일</span>
                                    <span class="w_state">조회수</span>
                                </li>
                                <li class="">
                                    <span class="w_no">6</span>
                                    <span class="w_area">평창 카운티</span>
                                    <span class="w_sub tl">
                                        <a href="viewc2fe.html?rcrt_adv_sno=22163">평창 카운티 사우나 관리 채용</a>
                                    </span>
                                    <span class="w_part">사우나관리</span>
                                    <span class="w_date">2024.09.10</span>
                                    <span class="w_date2">채용시마감</span>
                                    <span class="w_state">63</span>
                                </li>
                                <li class="">
                                    <span class="w_no">5</span>
                                    <span class="w_area">평창 카운티</span>
                                    <span class="w_sub tl">
                                        <a href="viewadef.html?rcrt_adv_sno=22140">평창 카운티 조리원 상시 채용</a>
                                    </span>
                                    <span class="w_part">조리원</span>
                                    <span class="w_date">2024.05.02</span>
                                    <span class="w_date2">채용시마감</span>
                                    <span class="w_state">237</span>
                                </li>
                                <li class="">
                                    <span class="w_no">4</span>
                                    <span class="w_area">위례빌리지</span>
                                    <span class="w_sub tl">
                                        <a href="viewc0d5.html?rcrt_adv_sno=22133">위례 빌리지 조리원 상시 채용</a>
                                    </span>
                                    <span class="w_part">조리원</span>
                                    <span class="w_date">2024.03.25</span>
                                    <span class="w_date2">채용시마감</span>
                                    <span class="w_state">273</span>
                                </li>
                                <li class="">
                                    <span class="w_no">3</span>
                                    <span class="w_area">위례빌리지</span>
                                    <span class="w_sub tl">
                                        <a href="viewc0c3.html?rcrt_adv_sno=22108">위례 빌리지 조리사 상시 채용</a>
                                    </span>
                                    <span class="w_part">조리사</span>
                                    <span class="w_date">2024.02.01</span>
                                    <span class="w_date2">채용시마감</span>
                                    <span class="w_state">425</span>
                                </li>
                                <li class="">
                                    <span class="w_no">2</span>
                                    <span class="w_area">위례빌리지</span>
                                    <span class="w_sub tl">
                                        <a href="view4c80.html?rcrt_adv_sno=22100">위례 빌리지 요양보호사 상시 채용</a>
                                    </span>
                                    <span class="w_part">요양보호사</span>
                                    <span class="w_date">2024.01.17</span>
                                    <span class="w_date2">채용시마감</span>
                                    <span class="w_state">1465</span>
                                </li>
                                <li class="">
                                    <span class="w_no">1</span>
                                    <span class="w_area">서초 빌리지</span>
                                    <span class="w_sub tl">
                                        <a href="view8f4a.html?rcrt_adv_sno=22095">서초 빌리지 요양보호사 상시 채용</a>
                                    </span>
                                    <span class="w_part">요양보호사</span>
                                    <span class="w_date">2024.01.05</span>
                                    <span class="w_date2">채용시마감</span>
                                    <span class="w_state">1533</span>
                                </li>
                            </div>

                            <div class="clear gap10"></div>
                            <div class="page_area"></div>
                        </div>
                    </div>

                    <div id="copyright">
                        <div class="copy_gap"></div>
                        <div id="copy">
                            <div class="logo">
                                <img src={footer_logo_kb.src} />
                            </div>
                            <div class="addr">
                                서울 서초구 형촌8길 7 KB골든라이프케어&nbsp;&nbsp;&nbsp;&nbsp;대표자 :
                                전영산&nbsp;&nbsp;&nbsp;&nbsp;사업자등록번호 : 822-87-00610
                                <span>
                                    &nbsp;&nbsp;&nbsp;
                                    <span
                                        style={{ cursor: 'pointer' }}
                                        onclick="javascript:location.href='https://www.kbgoldenlifecare.co.kr/shop_info/privacy.htm'"
                                    >
                                        [개인정보 처리방침]
                                    </span>
                                </span>
                                <br />
                                Copyright kbgoldenlifecare.co.kr. All Rights Reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Recruit;
