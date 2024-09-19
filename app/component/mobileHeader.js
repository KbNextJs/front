'use client';
import { useState } from 'react';
import btn_sitemap_close from '../public/design/images/sub/btn_sitemap_close.png';
import { useRecoilState } from 'recoil';
import { headerPopupState, mobileHeaderPopupState } from '../layout';

const MobileHeader = () => {
    const [mobileMenuState, setMobileMenuState] = useRecoilState(mobileHeaderPopupState);

    
    return (
        <div id="mo_gnb" className={mobileMenuState ? 'on' : null}>
            <div class="mo_gnb_header">
                <h1>
                    <a href="../main.html">
                        <img
                            src="../img_up/shop_pds/kbgoldenlife/design/images/skin/kb_logo.png"
                            alt="KB골든라이프케어"
                        />
                    </a>
                </h1>
            </div>

            <div id="pm_a1_moall" class="pm-navigation_vertical_toggle_a1_moall">
                <ul class="dep1">
                    <li role="toggle">
                        <a href="../page/sub1_1_1.html">회사소개</a>

                        <div>
                            <ul class="dep2">
                                <li>
                                    <a href="../page/sub1_1_2.html">CEO 인사말</a>
                                </li>
                                <li>
                                    <a href="../page/sub1_1_1.html">비전체계</a>
                                </li>
                                <li>
                                    <a href="sub1_4.html">공지/공시</a>
                                </li>
                                <li>
                                    <a href="../page/sub1_1_3.html">오시는 길</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li role="toggle">
                        <a href="http://pyeongchang-county.com/" target="_blank">
                            평창카운티<span>노인복지주택</span>
                        </a>

                        <div>
                            <ul class="dep2"></ul>
                        </div>
                    </li>
                    <li role="toggle">
                        <a href="../page/sub02_1.html">
                            위례 빌리지<span>요양시설</span>
                        </a>

                        <div>
                            <ul class="dep2">
                                <li>
                                    <a href="../page/sub02_1.html">위례빌리지 소개</a>
                                </li>
                                <li>
                                    <a href="../page/sub02_3.html">서비스·시설 안내</a>
                                </li>
                                <li>
                                    <a href="../page/sub02_4.html">입소안내ㆍ접수</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li role="toggle">
                        <a href="../page/Seocho_Dis.html">
                            서초 빌리지<span>요양시설</span>
                        </a>

                        <div>
                            <ul class="dep2">
                                <li>
                                    <a href="../page/Seocho_Dis.html">서초 빌리지 소개</a>
                                </li>
                                <li>
                                    <a href="../page/Seocho_sv.html">서초서비스·시설 안내</a>
                                </li>
                                <li>
                                    <a href="../page/Seocho_Rg.html">서초입소안내ㆍ접수</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li role="toggle">
                        <a href="../page/sub03_1.html">
                            케어센터<span>주.야간보호센터</span>
                        </a>

                        <div>
                            <ul class="dep2">
                                <li>
                                    <a href="../page/sub03_1.html">서비스 소개</a>
                                </li>
                                <li>
                                    <a href="../page/sub03_2.html">강동케어센터 소개</a>
                                </li>
                                <li>
                                    <a href="../page/sub03_3.html">위례케어센터 소개</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li role="toggle">
                        <a href="../page/sub1_3_1.html">인재채용</a>

                        <div>
                            <ul class="dep2">
                                <li>
                                    <a href="../page/sub1_3_1.html">인재상</a>
                                </li>
                                <li>
                                    <a href="../page/sub1_3_2.html">직무소개</a>
                                </li>
                                <li>
                                    <a href="https://admin.kbgoldenlifecare.co.kr/recruit/main">채용공고</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li role="toggle" class="on">
                        <a href="sub05_1.html">게시판</a>

                        <div>
                            <ul class="dep2">
                                <li>
                                    <a href="../myreg/sub05_6.html">개소 예정 사업장 안내</a>
                                </li>
                                <li>
                                    <a href="sub05_1.html">프로그램/식단표</a>
                                </li>
                                <li>
                                    <a href="../page/sub1_2_1.html">자원봉사안내</a>
                                </li>
                                <li>
                                    <a href="../page/sub05_3.html">견학안내</a>
                                </li>
                                <li class="on">
                                    <a href="sub2_3_1.html">상담신청</a>
                                </li>
                                <li>
                                    <a href="../page/bl_go.html">고객의 소리</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li role="toggle">
                        <a href="../page/sub4_1.html">노인장기요양보험제도</a>

                        <div>
                            <ul class="dep2">
                                <li>
                                    <a href="../page/sub4_1.html">노인장기요양보험제도</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default MobileHeader;
