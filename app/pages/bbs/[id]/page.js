'use client';
import Header from '@/app/component/header';
import '../../../../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css';
import '@/app/public/src_css/c_slides.css';
import '@/app/public/src_css/a_reset.css';
import '@/app/public/src_css/fonts.css';
import '@/app/public/src_css/b_style.css';
import '@/app/public/src_css/ds_style.css';
import '@/app/css/bbs.css';
import '@/app/public/design/co-basic.css';
import '@/app/public/design/default_mobile.css';
import '@/app/public/design/default_tablet.css';
import Header2 from '@/app/component/Header2';
import Footer from '@/app/component/footer';
import Family_site from '@/app/component/family_site';
import MobileHeader from '@/app/component/mobileHeader';
import { programListData } from '@/app/programListData';
import ProgramList from '@/app/component/programList';
import { notificationData } from '@/app/notification';
import NotificationList from '@/app/component/notificationList';
const Bbs_shop = ({ params }) => {
    // 완성
    const programListDataCategory = programListData.filter((e, i) => e.category === decodeURIComponent(params.id));
    return (
        <>
            <Header></Header>
            <MobileHeader />
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
                            <div class="hd_list">
                                <div class="ui-toggle">
                                    <div class="bd">
                                        <ul>
                                            <li
                                                style={
                                                    decodeURIComponent(params.id) === '전체'
                                                        ? {
                                                              display: 'block',
                                                              color: '#fff',
                                                              background: '#fcaf17',
                                                              fontWeight: 'normalizeConfig',
                                                          }
                                                        : null
                                                }
                                            >
                                                <a href="/pages/bbs">전체(1453)</a>
                                            </li>
                                            <li
                                                style={
                                                    decodeURIComponent(params.id) === '위례빌리지'
                                                        ? {
                                                              display: 'block',
                                                              color: '#fff',
                                                              background: '#fcaf17',
                                                              fontWeight: 'normalizeConfig',
                                                          }
                                                        : null
                                                }
                                            >
                                                <a href="/pages/bbs/위례빌리지">위례빌리지(387)</a>
                                            </li>
                                            <li
                                                style={
                                                    decodeURIComponent(params.id) === '강동케어센터'
                                                        ? {
                                                              display: 'block',
                                                              color: '#fff',
                                                              background: '#fcaf17',
                                                              fontWeight: 'normalizeConfig',
                                                          }
                                                        : null
                                                }
                                            >
                                                <a href="/pages/bbs/강동케어센터">강동케어센터(306)</a>
                                            </li>
                                            <li
                                                style={
                                                    decodeURIComponent(params.id) === '위례케어센터'
                                                        ? {
                                                              display: 'block',
                                                              color: '#fff',
                                                              background: '#fcaf17',
                                                              fontWeight: 'normalizeConfig',
                                                          }
                                                        : null
                                                }
                                            >
                                                <a href="/pages/bbs/위례케어센터">위례케어센터(513)</a>
                                            </li>
                                            <li
                                                style={
                                                    decodeURIComponent(params.id) === '빌리지'
                                                        ? {
                                                              display: 'block',
                                                              color: '#fff',
                                                              background: '#fcaf17',
                                                              fontWeight: 'normalizeConfig',
                                                          }
                                                        : null
                                                }
                                            >
                                                <a href="/pages/bbs/서초 빌리지">서초 빌리지(246)</a>
                                            </li>{' '}
                                        </ul>
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
                                            {notificationData.map((e, i) => {
                                                return (
                                                    <NotificationList
                                                        key={i}
                                                        index={i + 1}
                                                        title={e.title}
                                                        date={e.date}
                                                        viewCount={e.viewCount}
                                                    ></NotificationList>
                                                );
                                            })}
                                        </ul>
                                        <ul class="lst-board lst-body">
                                            {programListDataCategory.map((e, i) => {
                                                return (
                                                    <ProgramList
                                                        key={i}
                                                        index={i + 1}
                                                        category={e.category}
                                                        title={e.title}
                                                        date={e.date}
                                                        viewCount={e.viewCount}
                                                    ></ProgramList>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <div class="paginate">
                                        <strong>1</strong>
                                        {/* <a href="../bbs_shop/list54a7.html?page=2&amp;board_code=sub05_1">2</a>
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
                                        </a> */}
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

export default Bbs_shop;
