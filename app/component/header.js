'use client';
import { useState } from 'react';
import btn_sitemap_close from '../public/design/images/sub/btn_sitemap_close.png';
import { useRecoilState } from 'recoil';
import { headerPopupState, mobileHeaderPopupState } from '../layout';

const Header = () => {
    const [menuState, setmenuState] = useRecoilState(headerPopupState);
    const [mobileMenuState, setMobileMenuState] = useRecoilState(mobileHeaderPopupState);
    const clickMenu = () => {
        console.log('메뉴 변경');
        setmenuState((menuState) => !menuState);
    };
    return (
        <div id="sitemap" className={menuState ? 'on' : null}>
            <div className="wrap" class={mobileMenuState ? 'on' : null}>
                <a href="#" id="btnSitemapCl" onClick={() => clickMenu()}>
                    <img src={btn_sitemap_close.src} alt="닫기" />
                </a>
                <ul class="dep1">
                    <li>
                        <a>회사소개 </a>
                        <div>
                            <ul class="dep2">
                                <li>
                                    <a>CEO 인사말 </a>
                                </li>{' '}
                                <li>
                                    <a>비전체계 </a>
                                </li>{' '}
                                <li>
                                    <a>공지/공시 </a>
                                </li>{' '}
                                <li>
                                    <a>오시는 길 </a>
                                </li>{' '}
                            </ul>
                        </div>
                    </li>{' '}
                    <li>
                        <a href="" target="_blank">
                            평창카운티<span>노인복지주택</span>{' '}
                        </a>
                        <div>
                            <ul class="dep2"></ul>
                        </div>
                    </li>{' '}
                    <li>
                        <a href="/pages/sub02_1">
                            위례 빌리지<span>요양시설</span>{' '}
                        </a>
                        <div>
                            <ul class="dep2">
                                <li>
                                    <a href="/pages/sub02_1">위례빌리지 소개 </a>
                                </li>{' '}
                                <li>
                                    <a href="/pages/sub02_3">서비스·시설 안내 </a>
                                </li>{' '}
                                <li>
                                    <a href="/pages/sub02_4">입소안내ㆍ접수 </a>
                                </li>{' '}
                            </ul>
                        </div>
                    </li>{' '}
                    <li>
                        <a>
                            서초 빌리지<span>요양시설</span>{' '}
                        </a>
                        <div>
                            <ul class="dep2">
                                <li>
                                    <a>서초 빌리지 소개 </a>
                                </li>{' '}
                                <li>
                                    <a>서초서비스·시설 안내 </a>
                                </li>{' '}
                                <li>
                                    <a>서초입소안내ㆍ접수 </a>
                                </li>{' '}
                            </ul>
                        </div>
                    </li>{' '}
                    <li>
                        <a href="/pages/sub03_1">
                            케어센터<span>주.야간보호센터</span>{' '}
                        </a>
                        <div>
                            <ul class="dep2">
                                <li>
                                    <a href="/pages/sub03_1">서비스 소개 </a>
                                </li>{' '}
                                <li>
                                    <a href="/pages/sub03_2">강동케어센터 소개 </a>
                                </li>{' '}
                                <li>
                                    <a>위례케어센터 소개 </a>
                                </li>{' '}
                            </ul>
                        </div>
                    </li>{' '}
                    <li>
                        <a href="/pages/sub1_3_1">인재채용 </a>
                        <div>
                            <ul class="dep2">
                                <li>
                                    <a href="/pages/sub1_3_1">인재상 </a>
                                </li>{' '}
                                <li>
                                    <a href="/pages/sub1_3_2">직무소개 </a>
                                </li>{' '}
                                <li>
                                    <a href="/pages/recruit">채용공고 </a>
                                </li>{' '}
                            </ul>
                        </div>
                    </li>{' '}
                    <li>
                        <a href="/pages/bbs">게시판 </a>
                        <div>
                            <ul class="dep2">
                                <li>
                                    <a href="/pages/myreg">개소 예정 사업장 안내 </a>
                                </li>{' '}
                                <li>
                                    <a href="/pages/bbs">프로그램/식단표 </a>
                                </li>{' '}
                                <li>
                                    <a href="/pages/sub1_2_1">자원봉사안내 </a>
                                </li>{' '}
                                <li>
                                    <a>견학안내 </a>
                                </li>{' '}
                                <li>
                                    <a href="/pages/sub2_3_1">상담신청 </a>
                                </li>{' '}
                                <li>
                                    <a href="/pages/bl_go">고객의 소리 </a>
                                </li>{' '}
                            </ul>
                        </div>
                    </li>{' '}
                    <li>
                        <a>노인장기요양보험제도 </a>
                        <div>
                            <ul class="dep2">
                                <li>
                                    <a>노인장기요양보험제도 </a>
                                </li>{' '}
                            </ul>
                        </div>
                    </li>{' '}
                </ul>
            </div>
        </div>
    );
};
export default Header;
