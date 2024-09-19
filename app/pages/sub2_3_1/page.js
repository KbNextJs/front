'use client';
import Header from '@/app/component/header';
import '../../../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css';
import '../../public/src_css/c_slides.css';
import '../../public/src_css/a_reset.css';
import '../../public/src_css/fonts.css';
import '../../public/src_css/b_style.css';
import '../../public/src_css/ds_style.css';
import '../../css/sub2_3_1.css';
import '../../public/co-basic.css';
import '../../public/default_mobile.css';
import '../../public/default_tablet.css';
import ico_secret from '../../public/copy/ico_secret.png';
import sub2_1_img02 from '../../public/design/images/sub/sub2_1_img02.jpg';
import sub2_1_img03 from '../../public/design/images/sub/sub2_1_img03.jpg';
import Header2 from '@/app/component/Header2';
import family_tit from '../../public/design/images/skin/family_tit.png';
import Footer from '@/app/component/footer';
import Family_site from '@/app/component/family_site';
import MobileHeader from '@/app/component/mobileHeader';

const Sub2_3_1 = () => {
    //https://www.kbgoldenlifecare.co.kr/bbs/sub2_3_1  상담 신청 페이지
    return (
        <>
            <Header></Header>
            <MobileHeader></MobileHeader>
            <div id="layout_body" class="layout_sub">
                <Header2></Header2>
                <div id="container">
                    <div class="sub_con wrap">
                        <h3 class="sub_tit">상담신청</h3>
                        <div id="bbs_wrap">
                            <div class="bbs_hd bbs2_3">
                                <div class="txt_box">
                                    KB골든라이프케어 케어센터와 빌리지에 대한 문의 사항과 연락처를 남겨 주시면
                                    <br />
                                    빠른 시간내로 답변 드릴 수 있도록 노력하겠습니다.
                                    <br />
                                    빌리지, 케어센터의 대기접수는 홈페이지를 통해 직접 접수해주셔야합니다.
                                    <br />
                                    상담신청 게시판으로 대기접수를 요청해주셔도 접수가 되지 않는 점 유의해주시기
                                    바랍니다.
                                    <br />
                                    <a href="https://kbglc.carefor.co.kr/waitsystem" class="">
                                        대기접수신청 바로가기
                                    </a>
                                </div>
                            </div>
                            <div class="bbs_con">
                                <div id="scbd" class="scbd co-basic">
                                    <div id="lay_hd" class="lay_hd">
                                        <div class="hgroup">
                                            <h1>
                                                <a href="../bbs_shop/list360f.html?me_popup=&amp;auto_frame=&amp;cate_sub_idx=0&amp;search_first_subject=&amp;list_mode=board&amp;board_code=sub2_3_1&amp;keyfield=&amp;key=&amp;page=&amp;y=&amp;m=">
                                                    상담신청
                                                </a>
                                            </h1>
                                            <ul>
                                                <li>
                                                    <a href="#" id="btnToggleSearch">
                                                        검색<i class="ui-ico search"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:writeArticle()">
                                                        글쓰기<i class="ui-ico write"></i>
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
                                                <input type="hidden" name="board_code" value="sub2_3_1" />
                                                <input type="hidden" name="me_popup" value="0" />
                                                <input type="hidden" name="auto_frame" value="" />
                                                <input type="hidden" name="subject" />
                                                <fieldset>
                                                    <legend class="blind">게시글 검색</legend>
                                                    <select name="s_info">
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
                                                <div class="td col_category">구분</div>
                                                <div class="td col_subject">제목</div>
                                                <div class="td col_date">등록일</div>
                                                <div class="td col_hit">조회수</div>
                                            </li>
                                        </ul>

                                        <ul class="lst-board lst-body lay-notice"></ul>

                                        <ul class="lst-board lst-body">
                                            <li class="clr">
                                                <div class="td col_no">6</div>
                                                <div class="td inf col_category">위례케어센터</div>
                                                <div class="td col_subject">
                                                    <div>
                                                        <a href="Javascript:secret_read2('17966')">
                                                            <span>문의드립니다.</span>
                                                            <span class="cmt">[1]</span>
                                                            <img src={ico_secret.src} height="12" alt="secret" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="td inf col_date">2024-09-04</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>6
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">5</div>
                                                <div class="td inf col_category">위례케어센터</div>
                                                <div class="td col_subject">
                                                    <div>
                                                        <a href="Javascript:secret_read2('17936')">
                                                            <span>상담신청</span>
                                                            <span class="cmt">[1]</span>
                                                            <img src={ico_secret.src} height="12" alt="secret" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="td inf col_date">2024-09-02</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>7
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">4</div>
                                                <div class="td inf col_category">서초 빌리지</div>
                                                <div class="td col_subject">
                                                    <div>
                                                        <a href="Javascript:secret_read2('17636')">
                                                            <span>입소비용및 대기기간 문의</span>

                                                            <img src={ico_secret.src} height="12" alt="secret" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="td inf col_date">2024-08-16</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>5
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">3</div>
                                                <div class="td inf col_category">강동케어센터</div>
                                                <div class="td col_subject">
                                                    <div>
                                                        <a href="Javascript:secret_read2('17306')">
                                                            <span>입소대기문의입니다</span>

                                                            <img src={ico_secret.src} height="12" alt="secret" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="td inf col_date">2024-07-31</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>9
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">2</div>
                                                <div class="td inf col_category">서초 빌리지</div>
                                                <div class="td col_subject">
                                                    <div>
                                                        <a href="Javascript:secret_read2('17236')">
                                                            <span>입주문의</span>

                                                            <img src={ico_secret.src} height="12" alt="secret" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="td inf col_date">2024-07-29</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>1
                                                </div>
                                            </li>
                                            <li class="clr">
                                                <div class="td col_no">1</div>
                                                <div class="td inf col_category">강동케어센터</div>
                                                <div class="td col_subject">
                                                    <div>
                                                        <a href="Javascript:secret_read2('17216')">
                                                            <span>문의 드립니다</span>

                                                            <img src={ico_secret.src} height="12" alt="secret" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="td inf col_date">2024-07-29</div>
                                                <div class="td inf col_hit">
                                                    <span class="txt">조회수:</span>6
                                                </div>
                                            </li>
                                        </ul>

                                        <div class="write_btn_wrap">
                                            <a href="javascript:writeArticle()" class="write_btn">
                                                상담신청
                                            </a>
                                        </div>
                                    </div>

                                    <div class="paginate">
                                        <strong>1</strong>
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

export default Sub2_3_1;
