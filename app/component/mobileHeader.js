'use client';
import { useState } from 'react';
import btn_sitemap_close from '../public/design/images/sub/btn_sitemap_close.png';
import { useRecoilState } from 'recoil';
import { headerPopupState, mobileHeaderPopupState, mobileHeaderPopupStateAside } from '../layout';
import kb_logo_sub from '../public/design/images/skin/kb_logo_sub.png';

const MobileHeader = () => {
    const [mobileMenuState, setMobileMenuState] = useRecoilState(mobileHeaderPopupState);
    const [mobileMenuStateAside, setMobileMenuStateAside] = useState([false, false, false, false, false, false, false]);
    const [mobileMenuPopupState, setMobileMenuPopupState] = useState([false, false, false, false, false, false, false]);

    const clickMobileMenu = (e) => {
        // console.log('모바일 메뉴 변경');
        const htmlTag = document.querySelector('html');
        const bodyTag = document.querySelector('body');
        if (mobileMenuState) {
            htmlTag.style.height = 'auto';
            htmlTag.style.overflow = 'visible';
            bodyTag.style.height = 'auto';
            bodyTag.style.overflow = 'visible';
        } else {
            htmlTag.style.height = '1047px';
            htmlTag.style.overflow = 'hidden';
            bodyTag.style.height = '1047px';
            bodyTag.style.overflow = 'hidden';
        }
        setMobileMenuState((mobileMenuState) => !mobileMenuState);
    };

    const clickeMobileMenuStateAside = (i) => {
        // console.log('mobileHeaderPopupStateAside', i, typeof i, mobileMenuPopupState);
        const newmobileMenuStateAside = [false, false, false, false, false, false, false];
        newmobileMenuStateAside[i] = !mobileMenuPopupState[i];
        // console.log('newmobileMenuStateAside', newmobileMenuStateAside);
        setMobileMenuPopupState((mobileMenuPopupState) => newmobileMenuStateAside);
    };
    return (
        <>
            {/* {console.log(mobileMenuPopupState)} */}
            <div
                id="bg_wrap"
                className={mobileMenuState ? 'on' : null}
                onClick={(e) => {
                    e.preventDefault();
                    clickMobileMenu(e);
                }}
            ></div>
            <div id="mo_gnb" className={mobileMenuState ? 'on' : null}>
                <div class="mo_gnb_header">
                    <h1>
                        <a href="../main.html">
                            <img src={kb_logo_sub.src} alt="KB골든라이프케어" />
                        </a>
                    </h1>
                </div>

                <div id="pm_a1_moall" class="pm-navigation_vertical_toggle_a1_moall">
                    <ul class="dep1">
                        <li
                            role="toggle"
                            style={mobileMenuPopupState[0] ? { display: 'active' } : { display: 'inline' }}
                        >
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                    clickeMobileMenuStateAside(0);
                                }}
                            >
                                회사소개
                            </a>

                            <div style={mobileMenuPopupState[0] ? { display: 'block' } : { display: 'none' }}>
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
                        <li
                            role="toggle"
                            style={mobileMenuPopupState[1] ? { display: 'active' } : { display: 'inline' }}
                        >
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                    clickeMobileMenuStateAside(1);
                                }}
                            >
                                위례 빌리지<span>요양시설</span>
                            </a>

                            <div style={mobileMenuPopupState[1] ? { display: 'block' } : { display: 'none' }}>
                                <ul class="dep2">
                                    <li>
                                        <a href="/pages/sub02_1">위례빌리지 소개</a>
                                    </li>
                                    <li>
                                        <a href="/pages/sub02_3">서비스·시설 안내</a>
                                    </li>
                                    <li>
                                        <a href="/pages/sub02_4">입소안내ㆍ접수</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            role="toggle"
                            style={mobileMenuPopupState[2] ? { display: 'active' } : { display: 'inline' }}
                        >
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                    clickeMobileMenuStateAside(2);
                                }}
                            >
                                서초 빌리지<span>요양시설</span>
                            </a>

                            <div style={mobileMenuPopupState[2] ? { display: 'block' } : { display: 'none' }}>
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
                        <li
                            role="toggle"
                            style={mobileMenuPopupState[3] ? { display: 'active' } : { display: 'inline' }}
                        >
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                    clickeMobileMenuStateAside(3);
                                }}
                            >
                                케어센터<span>주.야간보호센터</span>
                            </a>

                            <div style={mobileMenuPopupState[3] ? { display: 'block' } : { display: 'none' }}>
                                <ul class="dep2">
                                    <li>
                                        <a href="/pages/sub03_1">서비스 소개</a>
                                    </li>
                                    <li>
                                        <a href="/pages/sub03_2">강동케어센터 소개</a>
                                    </li>
                                    <li>
                                        <a href="../page/sub03_3.html">위례케어센터 소개</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            role="toggle"
                            style={mobileMenuPopupState[4] ? { display: 'active' } : { display: 'inline' }}
                        >
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                    clickeMobileMenuStateAside(4);
                                }}
                            >
                                인재채용
                            </a>

                            <div style={mobileMenuPopupState[4] ? { display: 'block' } : { display: 'none' }}>
                                <ul class="dep2">
                                    <li>
                                        <a href="/pages/sub1_3_1">인재상</a>
                                    </li>
                                    <li>
                                        <a href="/pages/sub1_3_2">직무소개</a>
                                    </li>
                                    <li>
                                        <a href="/pages/recruit">채용공고</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            role="toggle"
                            style={mobileMenuPopupState[5] ? { display: 'active' } : { display: 'inline' }}
                            class="on"
                        >
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                    clickeMobileMenuStateAside(5);
                                }}
                            >
                                게시판
                            </a>

                            <div style={mobileMenuPopupState[5] ? { display: 'block' } : { display: 'none' }}>
                                <ul class="dep2">
                                    <li>
                                        <a href="/pages/myreg">개소 예정 사업장 안내</a>
                                    </li>
                                    <li>
                                        <a href="/pages/bbs">프로그램/식단표</a>
                                    </li>
                                    <li>
                                        <a href="/pages/sub1_2_1">자원봉사안내</a>
                                    </li>
                                    <li>
                                        <a href="../page/sub05_3.html">견학안내</a>
                                    </li>
                                    <li class="on">
                                        <a href="/pages/sub2_3_1">상담신청</a>
                                    </li>
                                    <li>
                                        <a href="/pages/bl_go">고객의 소리</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            role="toggle"
                            style={mobileMenuPopupState[6] ? { display: 'active' } : { display: 'inline' }}
                        >
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                    clickeMobileMenuStateAside(6);
                                }}
                            >
                                노인장기요양보험제도
                            </a>

                            <div style={mobileMenuPopupState[6] ? { display: 'block' } : { display: 'none' }}>
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
        </>
    );
};
export default MobileHeader;
