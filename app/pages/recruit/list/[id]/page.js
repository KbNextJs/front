'use client';
import { useRouter } from 'next/navigation';
import '../../../../../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css';
import '@/app/public/src_css/c_slides.css';
import '@/app/public/src_css/a_reset.css';
import '@/app/public/src_css/fonts.css';
import '@/app/public/src_css/b_style.css';
import '@/app/public/src_css/ds_style.css';
import '@/app/css/apply.css';
import '@/app/css/select2.css';
import kb_logo_sub from '@/app/public/img_apply/kb_logo_sub.png';
import footer_logo_kb from '@/app/public/img_apply/footer_logo_kb.png';

const Recruit = ({ params }) => {
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

                    {/* ------------ params.id에 따라 다른 콘텐츠 추가 부분------------ */}
                    {params.id + '페이지'}

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
