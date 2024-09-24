'use client';
import Header from '@/app/component/header';
import '../../../../../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css';
import '@/app/public/src_css/c_slides.css';
import '@/app/public/src_css/a_reset.css';
import '@/app/public/src_css/fonts.css';
import '@/app/public/src_css/b_style.css';
import '@/app/public/src_css/ds_style.css';
import '@/app/css/bbs.css';
import '@/app/public/design/co-basic.css';
import '@/app/public/design/default_mobile.css';
import '@/app/public/design/default_tablet.css';
import sub2_1_img01 from '@/app/public/design/images/sub/sub2_1_img01.jpg';
import sub2_1_img02 from '@/app/public/design/images/sub/sub2_1_img02.jpg';
import sub2_1_img03 from '@/app/public/design/images/sub/sub2_1_img03.jpg';
import Header2 from '@/app/component/Header2';
import ico from '@/app/public/copy/ico_image.gif';
import Footer from '@/app/component/footer';
import Family_site from '@/app/component/family_site';
import MobileHeader from '@/app/component/mobileHeader';
import ProgramList from '@/app/component/programList';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { notificationData } from '@/app/notification';
const Noty = ({ params }) => {
    // 완성
    //https://www.kbgoldenlifecare.co.kr/bbs/sub05_1

    // const router_ = useRouter();

    // const [params.id, setPageIndex useState(null);

    // useEffect(() => {
    //     console.log(notificationData);
    //     if (router_.isReady) setPageIndex((params.id) => router_.id);
    // }, []);

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
                            <div class="bbs_con">
                                <div id="scbd" class="scbd co-basic">
                                    <div class="hd_list">
                                        <div class="ui-toggle">
                                            <div class="hd">
                                                <h1>카테고리</h1>
                                                <p>
                                                    <span class="open">
                                                        열기<i class="ui-ico"></i>
                                                    </span>
                                                    <span class="close">
                                                        닫기<i class="ui-ico"></i>
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="bd">
                                                <ul>
                                                    <li>
                                                        <a href="/pages/bbs">
                                                            <strong>전체(1453)</strong>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/pages/bbs/위례빌리지">위례빌리지(387)</a>
                                                    </li>
                                                    <li>
                                                        <a href="/pages/bbs/강동케어센터">강동케어센터(306)</a>
                                                    </li>
                                                    <li>
                                                        <a href="/pages/bbs/위례케어센터">위례케어센터(513)</a>
                                                    </li>
                                                    <li>
                                                        <a href="/pages/bbs/서초 빌리지">서초 빌리지(246)</a>
                                                    </li>{' '}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="det">
                                        <div class="hgroup">
                                            <div class="title">
                                                <strong>{notificationData[params.id].title}</strong>
                                            </div>
                                            <dl>
                                                <dt>
                                                    <span class="category">{notificationData[params.id].category}</span>{' '}
                                                    <span>{notificationData[params.id].date}</span>
                                                </dt>
                                                <dd>
                                                    <span>
                                                        조회수:
                                                        {notificationData[params.id].viewCount}
                                                    </span>
                                                </dd>
                                            </dl>
                                        </div>

                                        <div class="copyurl">
                                            <a
                                                href="https://www.kbgoldenlifecare.co.kr/bbs/sub05_1/17926"
                                                target="_blank"
                                            >
                                                http://localhost:3000/pages/bbs_shop/
                                            </a>
                                            <a
                                                // href="javascript:clip('http://localhost:3000/pages/bbs_shop/x')"
                                                class="btn"
                                                title="URL COPY"
                                            >
                                                URL COPY
                                            </a>
                                        </div>

                                        <div id="conbody" class="conbody">
                                            <a href="javascript:popview('/img_up/shop_pds/kbgoldenlife/bbs/sub05_1/add_img/2024/9-wol-sik-dan-pyo1725841292.png')">
                                                <img
                                                    align="top"
                                                    alt=""
                                                    border="0"
                                                    id="userImg8909811"
                                                    src={notificationData[params.id].src}
                                                    style={{ maxWidth: '100%' }}
                                                    title=""
                                                />
                                            </a>{' '}
                                        </div>

                                        <div class="mid_design"></div>

                                        <div class="clr">
                                            <div class="sbtns">
                                                <a href="javascript:board_view_print()">출력</a>{' '}
                                            </div>
                                        </div>

                                        <div class="btngroup">
                                            <a href="javascript:goList()" class="ui-btn btn-co1">
                                                목록
                                            </a>
                                        </div>

                                        <div class="ui-toggle" rel="open">
                                            <div class="hd">
                                                <h1>댓글[0]</h1>
                                                <p>
                                                    <span class="open">
                                                        열기<i class="ui-ico"></i>
                                                    </span>
                                                    <span class="close">
                                                        닫기<i class="ui-ico"></i>
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="bd" idx="17926">
                                                <iframe
                                                    name="comment_17926"
                                                    id="comment_17926"
                                                    marginheight="0"
                                                    marginwidth="0"
                                                    src="/bbs_shop/comment_list.htm?me_popup=&auto_frame=&board_code=sub05_1&board_code=sub05_1&board_idx=17926"
                                                    width="100%"
                                                    height="100px"
                                                    style={{ border: 0 }}
                                                    border={0}
                                                    title="댓글 출력용 프레임"
                                                    scrolling="no"
                                                    allowtransparency="true"
                                                ></iframe>
                                            </div>
                                        </div>
                                        <iframe
                                            src="#"
                                            width="0"
                                            height="0"
                                            style={{ border: 0 }}
                                            title="시스템 프레임"
                                            name="ok_frame"
                                        ></iframe>

                                        <a name="comment_top"></a>
                                        <div id="scbd_cmtBody" class="scbd cmtBody">
                                            <ul class="cmtList"></ul>

                                            <form name="frmComment" onSubmit="return false">
                                                <input type="hidden" name="board_code" value="sub05_1" />
                                                <input type="hidden" name="auto_frame" value="" />
                                                <input type="hidden" name="board_idx" value="7916" />
                                                <fieldset class="cmtWrite">
                                                    <strong>댓글작성</strong>
                                                    <label>
                                                        이름{' '}
                                                        <span class="ui-input">
                                                            <input type="text" name="write_name" size="11" />
                                                        </span>
                                                    </label>
                                                    <label>
                                                        비밀번호
                                                        <span class="ui-input">
                                                            <input
                                                                type="password"
                                                                name="passwd"
                                                                size="11"
                                                                maxlength="12"
                                                            />
                                                        </span>
                                                    </label>
                                                    <dl>
                                                        <dt>
                                                            <span class="ui-input ipt-block">
                                                                <textarea
                                                                    name="content"
                                                                    onfocus="comment_default_str_chk()"
                                                                    rows="4"
                                                                ></textarea>
                                                            </span>
                                                        </dt>
                                                        <dd>
                                                            <a href="javascript:submitForm();">댓글등록</a>
                                                        </dd>
                                                    </dl>
                                                </fieldset>
                                            </form>
                                        </div>
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

export default Noty;
