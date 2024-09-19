'use client';
import Image from 'next/image';
import React, { useState, useCallback } from 'react';
import './css/main.css';
import './public/src_css/c_slides.css';
import './public/src_css/a_reset.css';
import './public/src_css/fonts.css';
import './public/src_css/b_style.css';
import './public/src_css/ds_style.css';
import './css/jquery.bxslider.css';

import Header from './component/header';
import Header2 from './component/Header2';
import Family_site from './component/family_site';
import Footer from './component/footer';
import img_overcon_txt from './public/design/images/main/img_overcon_txt.png';
import img_overcon_txt2 from './public/design/images/main/img_overcon_txt2.png';
import jeong1700617901 from './public/design/my_xml/mo_-choe-jong-su-jeong1700617901.jpg';
import il1563155780 from './public/design/my_xml/me-in-bi-ju-eol-chu-ga_-mo-ba-il1563155780.jpg';
import main_txt021487582982 from './public/design/my_xml/main_txt021487582982.png';
import mobile_slide021487760659 from './public/design/my_xml/mobile_slide021487760659.jpg';
import main_txt031488505989 from './public/design/my_xml/main_txt031488505989.png';
import mobile_slide031488505989 from './public/design/my_xml/mobile_slide031488505989.jpg';
import ico_bbs_more from './public/design/images/main/ico_bbs_more.gif';
import c1_w540_h147 from './thum_img/kbgoldenlife/my_xml/908c2c1867fd4c0d1bdedfd9c7bd34bd_water__c1_w540_h147.png';
import MobileHeader from './component/mobileHeader';

export default function Home() {
    return (
        <>
            <Header></Header>
            <MobileHeader></MobileHeader>
            <div id="layout_body" className="layout_main">
                <Header2></Header2>
                <div id="main_visual">
                    <div id="flex_a0_mainvis" className="flex-container">
                        <div className="flexslider">
                            <ul className="slides main_slides">
                                <li className="item_0 item_h">
                                    <div className="wrap">
                                        <a href="http://pyeongchang-county.com/" target="_blank"></a>
                                        <p>
                                            <img src="#" alt="" />
                                        </p>
                                    </div>
                                    <a href="http://pyeongchang-county.com/" target="_blank" className="mo_slide_item">
                                        <img src={jeong1700617901.src} alt="평창" />
                                    </a>
                                </li>

                                <li className="item_1 item_e">
                                    <div className="wrap">
                                        <a href="page/sub3_3.html"></a>
                                        <p>
                                            <img src="#" alt="" />
                                        </p>
                                    </div>
                                    <a href="page/sub3_3.html" className="mo_slide_item">
                                        <img src={il1563155780.src} alt="메인비주얼" />
                                    </a>
                                </li>

                                <li className="item_2 item_f">
                                    <div className="wrap">
                                        <a href="page/Seocho_Rg.html"></a>
                                        <p>
                                            <img src="#" alt="" />
                                        </p>
                                    </div>
                                    <a href="page/Seocho_Rg.html" className="mo_slide_item"></a>
                                </li>

                                <li className="item_3 item_b">
                                    <div className="wrap">
                                        <a href="page/sub2_2_1.html"></a>
                                        <p>
                                            <img src={main_txt021487582982.src} alt="" />
                                        </p>
                                    </div>
                                    <a href="page/sub2_2_1.html" className="mo_slide_item">
                                        <img src={mobile_slide021487760659.src} alt="메인비주얼03" />
                                    </a>
                                </li>

                                <li className="item_4 item_g">
                                    <div className="wrap">
                                        <a href="page/sub03_1.html"></a>
                                        <p>
                                            <img src="#" alt="" />
                                        </p>
                                    </div>
                                    <a href="page/sub03_1.html" className="mo_slide_item"></a>
                                </li>

                                <li className="item_5 item_a">
                                    <div className="wrap">
                                        <a href="#"></a>
                                        <p>
                                            <img src={main_txt031488505989.src} alt="" />
                                        </p>
                                    </div>
                                    <a href="#" className="mo_slide_item">
                                        <img src={mobile_slide031488505989.src} alt="메인비주얼02" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="container">
                    <div className="main_con">
                        <div className="section sec2">
                            <div className="wrap">
                                <ul>
                                    <li>
                                        <dl>
                                            <dt>
                                                <a href="http://pyeongchang-county.com/" target="_blank">
                                                    <p>카운티 안내</p>
                                                </a>
                                            </dt>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>
                                                <a href="/page/sub02_4">
                                                    <p>빌리지 입소안내</p>
                                                </a>
                                            </dt>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>
                                                <a href="/page/sub03_1">
                                                    <p>케어센터 이용안내</p>
                                                </a>
                                            </dt>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>
                                                <a href="/shop_contents/myreg_form.htm?myreg_code=sub05_6">
                                                    <p>개소 예정 사업장 안내</p>
                                                </a>
                                            </dt>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>
                                                <a href="https://admin.kbgoldenlifecare.co.kr/recruit/main">
                                                    <p>채용공고</p>
                                                </a>
                                            </dt>
                                        </dl>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="section sec5">
                            <div className="section sec1">
                                <div className="wrap overcon">
                                    <dl className="clr">
                                        <dt className="dis_table">
                                            <div className="dis_td txt">
                                                <img
                                                    src={img_overcon_txt.src}
                                                    alt="kb골든라이프케어 4대원칙"
                                                    className="pc_overtit"
                                                />
                                                <img
                                                    src={img_overcon_txt2.src}
                                                    alt="kb골든라이프케어 4대원칙"
                                                    className="mo_overtit"
                                                />
                                            </div>
                                        </dt>
                                        <dd className="dis_table item1">
                                            <p className="dis_td">
                                                <span>1.</span> 어르신의 존엄적 생활을 존중하고 지원 합니다.
                                            </p>
                                        </dd>
                                        <dd className="dis_table item2">
                                            <p className="dis_td">
                                                <span>2.</span> 이론과 근거에 기반한 전문 케어서비스를 제공합니다.
                                            </p>
                                        </dd>
                                        <dd className="dis_table item3">
                                            <p className="dis_td">
                                                <span>3.</span> 어르신 한 분 한 분 에 대한 맞춤케어를 제공합니다.
                                            </p>
                                        </dd>
                                        <dd className="dis_table item4">
                                            <p className="dis_td">
                                                <span>4.</span> 안전하고 편안하고 깨끗한 환경을 항상 유지합니다.
                                            </p>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="wrap">
                                <div className="box_wrap clr">
                                    <div className="box box1">
                                        <div className="inner">
                                            <div className="notice">
                                                <h4 className="box_tit">
                                                    공지사항
                                                    <a href="/bbs/sub1_4">
                                                        <span>더보기</span>
                                                        <img src={ico_bbs_more.src} alt="더보기" />
                                                    </a>
                                                </h4>
                                                <div className="notice_con">
                                                    <div className="pm-board_list_bd_lis">
                                                        <ul>
                                                            <li>
                                                                <a href="/bbs_shop/read.htm?board_code=sub1_4&idx=17386&cate_sub_idx=0">
                                                                    <dl>
                                                                        <dt>
                                                                            KB골든라이프케어 평창 카운티 분양대행사 선정
                                                                            입찰 재공고 (긴급){' '}
                                                                        </dt>
                                                                        <dd>2024-08-01 </dd>
                                                                    </dl>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/bbs_shop/read.htm?board_code=sub1_4&idx=17226&cate_sub_idx=28886">
                                                                    <dl>
                                                                        <dt>
                                                                            KB골든라이프케어 평창 카운티 종합광고 대행
                                                                            용역 입찰 공고{' '}
                                                                        </dt>
                                                                        <dd>2024-07-29 </dd>
                                                                    </dl>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/bbs_shop/read.htm?board_code=sub1_4&idx=15136&cate_sub_idx=28886">
                                                                    <dl>
                                                                        <dt>KB골든라이프케어 비즈니스 제휴 </dt>
                                                                        <dd>2024-04-17 </dd>
                                                                    </dl>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/bbs_shop/read.htm?board_code=sub1_4&idx=12726&cate_sub_idx=28886">
                                                                    <dl>
                                                                        <dt>
                                                                            KB골든라이프케어 식자재 납품 업체 선정 입찰
                                                                            공고{' '}
                                                                        </dt>
                                                                        <dd>2023-11-15 </dd>
                                                                    </dl>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box box2">
                                        <div className="inner">
                                            <ul>
                                                <li className="banner">
                                                    <div>
                                                        <div id="flex_m1_banner" className="flex-container">
                                                            <div className="flexslider">
                                                                <ul className="slides">
                                                                    <li>
                                                                        <a href="https://kbglc.carefor.co.kr/recruit/main ">
                                                                            <img
                                                                                src={c1_w540_h147.src}
                                                                                alt="채용공고"
                                                                            />{' '}
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="recruit">
                                                    <div className="recruit_con">
                                                        <h4 className="title_text">
                                                            KB골든라이프케어와 함께할{' '}
                                                            <span className="big">파트너 기업</span>을 찾습니다.
                                                        </h4>
                                                        <p className="info_text">
                                                            마케팅 제휴 및 비즈니스 제안과 관련하여서는
                                                            <br /> 아래 메일로 문의주시기 바랍니다.
                                                        </p>
                                                        <p className="mail">kbglc00610@kbgoldenlifecare.co.kr</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section sec4">
                            <div className="wrap">
                                <ul>
                                    <li className="item1">
                                        <a className="inner" href="/page/sub1_1_1">
                                            <div className="dscr">
                                                <h5>회사소개</h5>
                                                <p>비전, 미션, 핵심가치를 소개 합니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="item2">
                                        <a className="inner" href="/page/sub1_2_1">
                                            <div className="dscr">
                                                <h5>자원봉사</h5>
                                                <p>KB골든라이프케어 자원봉사에 대해 소개합니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="item3">
                                        <a className="inner" href="/page/sub1_3_1">
                                            <div className="dscr">
                                                <h5 className="mo_txt">인재상</h5>
                                                <p>KB골든라이프가 추구하는 인재상</p>
                                                <h5 className="pc_txt">인재상</h5>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Family_site />
                <Footer></Footer>
            </div>
        </>
    );
}
