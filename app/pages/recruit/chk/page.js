'use client';
import Header from '@/app/component/header';
import { useRouter } from 'next/navigation';
import '../../../../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css';
import '@/app/public/src_css/c_slides.css';
import '@/app/public/src_css/a_reset.css';
import '@/app/public/src_css/fonts.css';
import '@/app/public/src_css/b_style.css';
import '@/app/public/src_css/ds_style.css';
import '@/app/css/apply.css';
import '@/app/css/select2.css';
import kb_logo_sub from '@/app/public/img_apply/kb_logo_sub.png';
import footer_logo_kb from '@/app/public/img_apply/footer_logo_kb.png';

const Chk = () => {
    // 세부내용 추가 해야함
    //https://admin.kbgoldenlifecare.co.kr/recruit/main
    const router = useRouter();

    return (
        <>
            <div id="mobile-submenu">
                <li onClick={() => router.push('/pages/recruit')}>채용시스템 홈</li>
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
                            <div class="apply_toptxt fw">- 지원자 인증</div>
                            <form id="chkFrm" name="chkFrm">
                                <table class="tbl_type1">
                                    <colgroup>
                                        <col width="25%" />
                                    </colgroup>
                                    <tr class="topline1">
                                        <td class="active text-center">지원자</td>
                                        <td class="tl">
                                            <input
                                                type="text"
                                                name="aply_man_nm"
                                                class="input_type1"
                                                style={{ width: '120px' }}
                                                maxlength="100"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="active text-center">휴대폰 번호</td>
                                        <td class="tl">
                                            <input
                                                type="text"
                                                name="mob_pno"
                                                class="input_type1"
                                                style={{ width: '120px' }}
                                                maxlength="11"
                                                data-type="number"
                                            />
                                            <div
                                                class="readyBtn"
                                                onclick="javascript:create_ath();"
                                                style={{ padding: '5px' }} //'30px'
                                            >
                                                인증번호 발송
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="active text-center">인증번호</td>
                                        <td class="tl">
                                            <input
                                                type="text"
                                                class="input_type1"
                                                name="ath_num"
                                                maxlength="20"
                                                style={{ width: '120px' }}
                                            />
                                            <span style={{ color: 'red' }} data-rel="counter_span"></span>
                                        </td>
                                    </tr>
                                </table>
                                <div class="tc">
                                    <div
                                        class="readyBtn"
                                        style={{ width: '120px' }}
                                        onClick="javascript:apply_login();"
                                    >
                                        지원자 인증
                                    </div>
                                </div>
                            </form>
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

export default Chk;
