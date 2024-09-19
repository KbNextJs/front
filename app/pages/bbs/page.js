'use client';
import Header from '@/app/component/header';
import '../../../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css';
import '../../public/src_css/c_slides.css';
import '../../public/src_css/a_reset.css';
import '../../public/src_css/fonts.css';
import '../../public/src_css/b_style.css';
import '../../public/src_css/ds_style.css';
import '../../css/bbs.css';
import '../../public/design/co-basic.css';
import '../../public/design/default_mobile.css';
import '../../public/design/default_tablet.css';
import sub2_1_img01 from '../../public/design/images/sub/sub2_1_img01.jpg';
import sub2_1_img02 from '../../public/design/images/sub/sub2_1_img02.jpg';
import sub2_1_img03 from '../../public/design/images/sub/sub2_1_img03.jpg';
import Header2 from '@/app/component/Header2';
import ico from '../../public/copy/ico_image.gif';
import Footer from '@/app/component/footer';
import Family_site from '@/app/component/family_site';
import MobileHeader from '@/app/component/mobileHeader';

const Bbs = () => {// 완성
    //https://www.kbgoldenlifecare.co.kr/bbs/sub05_1
    return (
        <>
            <Header></Header>
            <MobileHeader/>
            <div id="layout_body" class="layout_sub">
                <Header2></Header2>
                <div id="container">
                    <div class="sub_con wrap">
                        <h3 class="sub_tit">프로그램/식단표</h3>
                        <div id="bbs_wrap">
                            <div class="sub2_1 sub05_1">
                                <div class="sec1">
                                    <div class="figure">
                                        <p>
                                            <span>KB골든라이프케어 프로그램/식단표</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="bbs_con">
                                {/* <link
                                    rel="stylesheet"
                                    type="text/css"
                                    href="../img_up/shop_pds/kbgoldenlife/design/co-basic.css"
                                    media="screen"
                                /> */}

                                <div id="scbd" class="scbd co-basic">
                                    <div class="hd_list">
                                        <div class="ui-toggle">
                                            <div class="bd">
                                                <ul>
                                                    <li>
                                                        <a href="../bbs_shop/list79ba.html?me_popup=&amp;board_code=sub05_1&amp;cate_sub_idx=">
                                                            <strong>전체(1444)</strong>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="../bbs_shop/listbf44.html?me_popup=&amp;board_code=sub05_1&amp;cate_sub_idx=41079">
                                                            위례빌리지(382)
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="../bbs_shop/list3945.html?me_popup=&amp;board_code=sub05_1&amp;cate_sub_idx=41080">
                                                            강동케어센터(305)
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="../bbs_shop/listb958.html?me_popup=&amp;board_code=sub05_1&amp;cate_sub_idx=41081">
                                                            위례케어센터(511)
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="../bbs_shop/list0f2c.html?me_popup=&amp;board_code=sub05_1&amp;cate_sub_idx=45385">
                                                            서초 빌리지(245)
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="lay_hd" class="lay_hd">
                                        <div class="hgroup">
                                            <h1>
                                                <a href="../bbs_shop/listf0e4.html?me_popup=&amp;auto_frame=&amp;cate_sub_idx=0&amp;search_first_subject=&amp;list_mode=board&amp;board_code=sub05_1&amp;keyfield=&amp;key=&amp;page=&amp;y=&amp;m=">
                                                    프로그램/식단표
                                                </a>
                                            </h1>
                                            <ul>
                                                <li>
                                                    <a href="#" id="btnToggleSearch">
                                                        검색<i class="ui-ico search"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div id="toggleSearch" class="toggleSearch">
                                            <form
                                                name="search_form"
                                                method="get"
                                                action="https://www.kbgoldenlifecare.co.kr/bbs_shop/list.htm"
                                            >
                                                <input type="hidden" name="list_mode" value="board" />
                                                <input type="hidden" name="cate_sub_idx" value="0" />
                                                <input type="hidden" name="search_first_subject" value="" />
                                                <input type="hidden" name="board_code" value="sub05_1" />
                                                <input type="hidden" name="me_popup" value="0" />
                                                <input type="hidden" name="auto_frame" value="" />
                                                <input type="hidden" name="subject" />
                                                <fieldset>
                                                    <legend class="blind">게시글 검색</legend>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <select name="s_info" class="s_info_select">
                                                        <option value="all">전체</option>
                                                        <option value="subject">제목</option>
                                                        <option value="content">내용</option>
                                                    </select>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            name="search_key"
                                                            id="search_key"
                                                            maxlength="30"
                                                            value=""
                                                            placeholder="검색어"
                                                        />
                                                        <button class="ui-ico" onclick="fld_chk(this.form);">
                                                            검색
                                                        </button>
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>

                                    <div id="list_board" class="list_board">
                                        <ul class="lst-board lst-head">
                                            <li>
                                                <div class="td col_no">번호</div>
                                                <div class="td col_category">게시자</div>
                                                <div class="td col_subject">제목</div>
                                                <div class="td col_date">등록일</div>
                                                <div class="td col_hit">조회수</div>
                                            </li>
                                        </ul>

                                        <ul class="lst-board lst-body lay-notice">
                                            <li class="clr">
                                                <div class="td col_no">
                                                    <span class="td_col_no_span">공지</span>
                                                </div>
                                                <div class="td col_category"></div>
                                                <div class="td col_subject">
                                                    <a href="../bbs_shop/read49ad.html?me_popup=&amp;auto_frame=&amp;cate_sub_idx=0&amp;search_first_subject=&amp;list_mode=board&amp;board_code=sub05_1&amp;search_key=&amp;key=&amp;page=&amp;idx=17926">
                                                        <span>[식단안내] 2024년 강동케어센터 9월 식단표</span>
                                                    </a>
                                                </div>
                                                <div class="td col_name"></div>
                                                <div class="td inf col_date">2024-09-02</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>689
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">
                                                    <span class="td_col_no_span">공지</span>
                                                </div>
                                                <div class="td col_category"></div>
                                                <div class="td col_subject">
                                                    <a href="../bbs_shop/read838d.html?me_popup=&amp;auto_frame=&amp;cate_sub_idx=0&amp;search_first_subject=&amp;list_mode=board&amp;board_code=sub05_1&amp;search_key=&amp;key=&amp;page=&amp;idx=17916">
                                                        <span>
                                                            [프로그램안내] 2024년 강동케어센터 9월 프로그램 일정표
                                                        </span>
                                                    </a>
                                                </div>
                                                <div class="td col_name"></div>
                                                <div class="td inf col_date">2024-09-02</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>657
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">
                                                    <span class="td_col_no_span">공지</span>
                                                </div>
                                                <div class="td col_category"></div>
                                                <div class="td col_subject">
                                                    <a href="../bbs_shop/readb9a0.html?me_popup=&amp;auto_frame=&amp;cate_sub_idx=0&amp;search_first_subject=&amp;list_mode=board&amp;board_code=sub05_1&amp;search_key=&amp;key=&amp;page=&amp;idx=17846">
                                                        <span>
                                                            [프로그램 안내] 2024년 위례케어센터 9월 프로그램 일정표
                                                        </span>
                                                    </a>
                                                </div>
                                                <div class="td col_name"></div>
                                                <div class="td inf col_date">2024-08-29</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>687
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">
                                                    <span class="td_col_no_span">공지</span>
                                                </div>
                                                <div class="td col_category"></div>
                                                <div class="td col_subject">
                                                    <a href="../bbs_shop/readac74.html?me_popup=&amp;auto_frame=&amp;cate_sub_idx=0&amp;search_first_subject=&amp;list_mode=board&amp;board_code=sub05_1&amp;search_key=&amp;key=&amp;page=&amp;idx=17786">
                                                        <span>
                                                            [프로그램안내] 2024년 위례 빌리지 9월 프로그램 일정표
                                                        </span>
                                                    </a>
                                                </div>
                                                <div class="td col_name"></div>
                                                <div class="td inf col_date">2024-08-29</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>783
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">
                                                    <span class="td_col_no_span">공지</span>
                                                </div>
                                                <div class="td col_category"></div>
                                                <div class="td col_subject">
                                                    <a href="../bbs_shop/readb1ab.html?me_popup=&amp;auto_frame=&amp;cate_sub_idx=0&amp;search_first_subject=&amp;list_mode=board&amp;board_code=sub05_1&amp;search_key=&amp;key=&amp;page=&amp;idx=17736">
                                                        <span>
                                                            [프로그램안내] 2024년 서초 빌리지 9월 프로그램 일정표
                                                        </span>
                                                    </a>
                                                </div>
                                                <div class="td col_name"></div>
                                                <div class="td inf col_date">2024-08-27</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>814
                                                </div>
                                            </li>
                                        </ul>

                                        <ul class="lst-board lst-body">
                                            <li class="clr">
                                                <div class="td col_no">1444</div>
                                                <div class="td inf col_category">위례빌리지</div>
                                                <div class="td col_subject">
                                                    <div>
                                                        <a href="../bbs_shop/reada961.html?me_popup=&amp;auto_frame=&amp;cate_sub_idx=0&amp;search_first_subject=&amp;list_mode=board&amp;board_code=sub05_1&amp;search_key=&amp;key=&amp;page=&amp;idx=18156">
                                                            <span>[식단안내] 위례 빌리지 9월 3주차 식단표</span>

                                                            <img src={ico.src} height="12" alt="image" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="td inf col_date">2024-09-13</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>10
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">1443</div>
                                                <div class="td inf col_category">위례케어센터</div>
                                                <div class="td col_subject">
                                                    <div>
                                                        <a href="../bbs_shop/read951d.html?me_popup=&amp;auto_frame=&amp;cate_sub_idx=0&amp;search_first_subject=&amp;list_mode=board&amp;board_code=sub05_1&amp;search_key=&amp;key=&amp;page=&amp;idx=18146">
                                                            <span>[식단안내] 위례 케어센터 9월 3주차 식단표</span>

                                                            <img src={ico.src} height="12" alt="image" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="td inf col_date">2024-09-13</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>2
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">1442</div>
                                                <div class="td inf col_category">위례빌리지</div>
                                                <div class="td col_subject">
                                                    <div>
                                                        <a href="../bbs_shop/readb02c.html?me_popup=&amp;auto_frame=&amp;cate_sub_idx=0&amp;search_first_subject=&amp;list_mode=board&amp;board_code=sub05_1&amp;search_key=&amp;key=&amp;page=&amp;idx=18136">
                                                            <span>[하루의 식단] 2024년 9월 12일</span>

                                                            <img src={ico.src} height="12" alt="image" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="td inf col_date">2024-09-13</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>2
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">1441</div>
                                                <div class="td inf col_category">위례빌리지</div>
                                                <div class="td col_subject">
                                                    <div>
                                                        <a href="../bbs_shop/read86f9.html?me_popup=&amp;auto_frame=&amp;cate_sub_idx=0&amp;search_first_subject=&amp;list_mode=board&amp;board_code=sub05_1&amp;search_key=&amp;key=&amp;page=&amp;idx=18106">
                                                            <span>[하루의 식단] 2024년 9월 11일</span>

                                                            <img src={ico.src} height="12" alt="image" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="td inf col_date">2024-09-11</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>19
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">1440</div>
                                                <div class="td inf col_category">서초 빌리지</div>
                                                <div class="td col_subject">
                                                    <div>
                                                        <a href="../bbs_shop/reade7ca.html?me_popup=&amp;auto_frame=&amp;cate_sub_idx=0&amp;search_first_subject=&amp;list_mode=board&amp;board_code=sub05_1&amp;search_key=&amp;key=&amp;page=&amp;idx=18126">
                                                            <span>[오늘의 식단] 2024년 09월 11일 중식</span>

                                                            <img src={ico.src} height="12" alt="image" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="td inf col_date">2024-09-11</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>25
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">1439</div>
                                                <div class="td inf col_category">강동케어센터</div>
                                                <div class="td col_subject">
                                                    <div>
                                                        <a href="../bbs_shop/read2278.html?me_popup=&amp;auto_frame=&amp;cate_sub_idx=0&amp;search_first_subject=&amp;list_mode=board&amp;board_code=sub05_1&amp;search_key=&amp;key=&amp;page=&amp;idx=18116">
                                                            <span>[오늘의 식단] 2024년 09월 11일 중식</span>

                                                            <img src={ico.src} height="12" alt="image" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="td inf col_date">2024-09-11</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>27
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">1438</div>
                                                <div class="td inf col_category">서초 빌리지</div>
                                                <div class="td col_subject">
                                                    <div>
                                                        <a href="../bbs_shop/read8f35.html?me_popup=&amp;auto_frame=&amp;cate_sub_idx=0&amp;search_first_subject=&amp;list_mode=board&amp;board_code=sub05_1&amp;search_key=&amp;key=&amp;page=&amp;idx=18096">
                                                            <span>[식단안내] 서초 빌리지 9월 4주차 식단표</span>

                                                            <img src={ico.src} height="12" alt="image" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="td inf col_date">2024-09-10</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>27
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">1437</div>
                                                <div class="td inf col_category">위례케어센터</div>
                                                <div class="td col_subject">
                                                    <div>
                                                        <a href="../bbs_shop/read82bf.html?me_popup=&amp;auto_frame=&amp;cate_sub_idx=0&amp;search_first_subject=&amp;list_mode=board&amp;board_code=sub05_1&amp;search_key=&amp;key=&amp;page=&amp;idx=18086">
                                                            <span>[오늘의 식단] 2024년 9월 10일 중식</span>

                                                            <img src={ico.src} height="12" alt="image" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="td inf col_date">2024-09-10</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>15
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">1436</div>
                                                <div class="td inf col_category">서초 빌리지</div>
                                                <div class="td col_subject">
                                                    <div>
                                                        <a href="../bbs_shop/reade0bb.html?me_popup=&amp;auto_frame=&amp;cate_sub_idx=0&amp;search_first_subject=&amp;list_mode=board&amp;board_code=sub05_1&amp;search_key=&amp;key=&amp;page=&amp;idx=18076">
                                                            <span>[식단안내] 서초 빌리지 9월 3주차 식단표</span>

                                                            <img src={ico.src} height="12" alt="image" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="td inf col_date">2024-09-09</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>35
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">1435</div>
                                                <div class="td inf col_category">위례빌리지</div>
                                                <div class="td col_subject">
                                                    <div>
                                                        <a href="../bbs_shop/readcc98.html?me_popup=&amp;auto_frame=&amp;cate_sub_idx=0&amp;search_first_subject=&amp;list_mode=board&amp;board_code=sub05_1&amp;search_key=&amp;key=&amp;page=&amp;idx=18026">
                                                            <span>[식단안내] 위례 빌리지 9월 2주차 식단표</span>

                                                            <img src={ico.src} height="12" alt="image" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="td inf col_date">2024-09-06</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>85
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">1434</div>
                                                <div class="td inf col_category">위례케어센터</div>
                                                <div class="td col_subject">
                                                    <div>
                                                        <a href="../bbs_shop/read286d.html?me_popup=&amp;auto_frame=&amp;cate_sub_idx=0&amp;search_first_subject=&amp;list_mode=board&amp;board_code=sub05_1&amp;search_key=&amp;key=&amp;page=&amp;idx=18016">
                                                            <span>[식단안내] 위례 케어센터 9월 2주차 식단표</span>

                                                            <img src={ico.src} height="12" alt="image" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="td inf col_date">2024-09-06</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>63
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">1433</div>
                                                <div class="td inf col_category">위례빌리지</div>
                                                <div class="td col_subject">
                                                    <div>
                                                        <a href="../bbs_shop/read1627.html?me_popup=&amp;auto_frame=&amp;cate_sub_idx=0&amp;search_first_subject=&amp;list_mode=board&amp;board_code=sub05_1&amp;search_key=&amp;key=&amp;page=&amp;idx=18006">
                                                            <span>[하루의 식단] 2024년 9월 6일</span>

                                                            <img src={ico.src} height="12" alt="image" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="td inf col_date">2024-09-06</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>65
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">1432</div>
                                                <div class="td inf col_category">서초 빌리지</div>
                                                <div class="td col_subject">
                                                    <div>
                                                        <a href="../bbs_shop/read3f53.html?me_popup=&amp;auto_frame=&amp;cate_sub_idx=0&amp;search_first_subject=&amp;list_mode=board&amp;board_code=sub05_1&amp;search_key=&amp;key=&amp;page=&amp;idx=18056">
                                                            <span>[오늘의 식단] 2024년 09월 06일 중식 </span>

                                                            <img src={ico.src} height="12" alt="image" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="td inf col_date">2024-09-06</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>33
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">1431</div>
                                                <div class="td inf col_category">위례빌리지</div>
                                                <div class="td col_subject">
                                                    <div>
                                                        <a href="../bbs_shop/readb6d9.html?me_popup=&amp;auto_frame=&amp;cate_sub_idx=0&amp;search_first_subject=&amp;list_mode=board&amp;board_code=sub05_1&amp;search_key=&amp;key=&amp;page=&amp;idx=17996">
                                                            <span>[하루의 식단] 2024년 9월 5일</span>

                                                            <img src={ico.src} height="12" alt="image" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="td inf col_date">2024-09-05</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>71
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">1430</div>
                                                <div class="td inf col_category">서초 빌리지</div>
                                                <div class="td col_subject">
                                                    <div>
                                                        <a href="../bbs_shop/read15d4.html?me_popup=&amp;auto_frame=&amp;cate_sub_idx=0&amp;search_first_subject=&amp;list_mode=board&amp;board_code=sub05_1&amp;search_key=&amp;key=&amp;page=&amp;idx=18046">
                                                            <span>[오늘의 식단] 2024년 09월 05일 중식 </span>

                                                            <img src={ico.src} height="12" alt="image" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="td inf col_date">2024-09-05</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>26
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="paginate">
                                        <strong>1</strong>
                                        <a href="../bbs_shop/list54a7.html?page=2&amp;board_code=sub05_1">2</a>
                                        <a href="../bbs_shop/listcefc.html?page=3&amp;board_code=sub05_1">3</a>
                                        <a href="../bbs_shop/listdbe4.html?page=4&amp;board_code=sub05_1">4</a>
                                        <a href="../bbs_shop/list45e4.html?page=5&amp;board_code=sub05_1">5</a>
                                        <a href="../bbs_shop/list60ee.html?page=6&amp;board_code=sub05_1">6</a>
                                        <a href="../bbs_shop/liste074.html?page=7&amp;board_code=sub05_1">7</a>
                                        <a href="../bbs_shop/list3d09.html?page=8&amp;board_code=sub05_1">8</a>
                                        <a href="../bbs_shop/list2632.html?page=9&amp;board_code=sub05_1">9</a>
                                        <a href="../bbs_shop/list1749.html?page=10&amp;board_code=sub05_1">10</a>
                                        <a
                                            href="../bbs_shop/list54a7.html?page=2&amp;board_code=sub05_1"
                                            class="dir"
                                            title="다음"
                                        >
                                            <span>›</span>
                                        </a>
                                        <a
                                            href="../bbs_shop/list65b3.html?page=11&amp;board_code=sub05_1"
                                            class="dir"
                                            title="마지막"
                                        >
                                            <span>››</span>
                                        </a>
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

export default Bbs;
