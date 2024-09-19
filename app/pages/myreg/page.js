'use client';
import Header from '@/app/component/header';
import '../../../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css';
import '../../public/src_css/c_slides.css';
import '../../public/src_css/a_reset.css';
import '../../public/src_css/fonts.css';
import '../../public/src_css/b_style.css';
import '../../public/src_css/ds_style.css';
import village01 from '../../public/design/images/sub/add/village01.png';
import village02 from '../../public/design/images/sub/add/village02.png';
import village03 from '../../public/design/images/sub/add/village03.png';
import Header2 from '@/app/component/Header2';
import family_tit from '../../public/design/images/skin/family_tit.png';
import Footer from '@/app/component/footer';
import Family_site from '@/app/component/family_site';
import MobileHeader from '@/app/component/mobileHeader';

const Myreg = () => { //완성
    //https://www.kbgoldenlifecare.co.kr/myreg/sub05_6
    return (
        <>
            <Header></Header>
            <MobileHeader></MobileHeader>
            <div id="layout_body" class="layout_sub">
                <Header2></Header2>
                <div id="container">
                    <div class="sub_con wrap">
                        <h3 class="sub_tit">개소 예정 사업장 안내</h3>
                        <div id="bbs_wrap">
                            <div class="bbs_hd bbs_05_6">
                                <div class="txt_box">
                                    KB골든라이프케어 신규 사업장의 입소 신청 알림 받기 원하시는 경우, <br />
                                    아래에 정보를 남겨주시면 사업장 입소 신청이 시작될 때 문자로 알림을 드리겠습니다.
                                </div>
                            </div>
                        </div>

                        <div class="sub05_6_con_wrap">
                            <div class="con con1">
                                <h4>1{')'} 개소 예정 사업장 안내</h4>
                                <p class="yellow">빌리지란?</p>
                                <p class="info_text">
                                    노인장기요양 시설등급 판정을 받으셨거나, 치매, 뇌졸증, 만성질환 등으로 일상생활
                                    수행에 도움이 필요하신 어르신을 대상으로 서비스를 제공하는 “요양시설” 입니다.
                                </p>
                                <p class="info_gray">※ 개소예정시기는 공사 일정에 따라 다소 변경될 수 있음</p>
                                <ul class="village_list">
                                    <li>
                                        <div class="img_wrap">
                                            <img src={village01.src} alt="은평빌리지 이미지" />
                                        </div>
                                        <div class="text_wrap">
                                            <h5>은평 빌리지</h5>
                                            <ul>
                                                <li>ㅇ 개소예정시기 : 2025년 4월</li>
                                                <li>ㅇ 정원 : 총 144명 (1인실 56명, 2인실 88명)</li>
                                                <li>ㅇ 위치 : 서울시 은평구 진관동 158-28 일원</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="img_wrap">
                                            <img src={village02.src} alt="광교빌리지 이미지" />
                                        </div>
                                        <div class="text_wrap">
                                            <h5>광교 빌리지</h5>
                                            <ul>
                                                <li>ㅇ 개소예정시기 : 2025년 7월</li>
                                                <li>ㅇ 정원 : 총 180명 (1인실 80명, 2인실 100명)</li>
                                                <li>ㅇ 위치 : 경기도 수원시 원천동 566번지</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="img_wrap">
                                            <img src={village03.src} alt="강동빌리지 이미지" />
                                        </div>
                                        <div class="text_wrap">
                                            <h5>강동 빌리지</h5>
                                            <ul>
                                                <li>ㅇ 개소예정시기 : 2025년 10월</li>
                                                <li>ㅇ 정원 : 총 144명 (1인실 48명, 2인실 96명)</li>
                                                <li>ㅇ 위치 : 서울시 강동구 강일동 99-9일원</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div class="con con2">
                                <h4>2) 입소 신청 알림 받기</h4>
                                <p class="info_text">
                                    KB골든라이프케어 빌리지는 개소시점에서 6개월 이전부터 입소 신청을 받고 있습니다.{' '}
                                    <br />
                                    아래 알림 신청을 등록하시면, 입소 신청이 시작되는 시점을 문자로 안내받으실 수
                                    있습니다.
                                </p>
                                <form name="myreg_form" enctype="multipart/form-data" class="myreg_form">
                                    <input type="hidden" name="tmp_name" value="tmp_val" />
                                    <input type="hidden" name="this_domain" />
                                    <input type="hidden" name="post_action" />
                                    <input type="hidden" name="bu_id" value="" />
                                    <input type="hidden" name="y" />
                                    <input type="hidden" name="idx" />
                                    <input type="hidden" name="me_popup" />
                                    <input type="hidden" name="mode" />
                                    <input type="hidden" name="myreg_code" value="sub05_6" />
                                    <input type="hidden" name="user_app_subject" value="" />
                                    <input type="hidden" name="user_app_goods_name" value="" />
                                    <input type="hidden" name="user_app_price" value="" />
                                    <input type="hidden" name="captcha_str_hash" value="" />
                                    <input type="hidden" name="form_sess_id" value="4knf8u7mnn9klndjd4r67h0gu4" />
                                    <input type="hidden" name="use_emoney_ok" id="use_emoney_ok" value="0" />
                                    <input type="hidden" name="s_t30" id="nicednb_enc_str" value="" />
                                    <ul class="form_wrap">
                                        <li>
                                            <div class="title">
                                                <p>이름</p>
                                            </div>
                                            <div class="write">
                                                <input type="text" name="s_v1" id="s_v1" />
                                            </div>
                                        </li>
                                        <li>
                                            <div class="title">
                                                <p>연락처</p>
                                            </div>
                                            <div class="write">
                                                <input type="text" name="s_v2" id="s_v2" />
                                            </div>
                                        </li>
                                        <li class="select">
                                            <div class="title">
                                                <p>
                                                    알림 희망 사업장
                                                    <br />
                                                    <span class="gray">(+ 중복 선택 가능)</span>
                                                </p>
                                            </div>
                                            <div class="write">
                                                <label class="display_inline_block_cursor_pointer">
                                                    <input
                                                        type="checkbox"
                                                        name="s_v3_0"
                                                        id="s_v3_0"
                                                        value="은평 빌리지"
                                                    />
                                                    <span>은평 빌리지</span>
                                                </label>
                                                <label class="display_inline_block_cursor_pointer">
                                                    <input
                                                        type="checkbox"
                                                        name="s_v3_1"
                                                        id="s_v3_1"
                                                        value="광교 빌리지"
                                                    />
                                                    <span>광교 빌리지</span>
                                                </label>
                                                <label class="display_inline_block_cursor_pointer">
                                                    <input
                                                        type="checkbox"
                                                        name="s_v3_2"
                                                        id="s_v3_2"
                                                        value="강동 빌리지"
                                                    />
                                                    <span>강동 빌리지</span>
                                                </label>
                                            </div>
                                        </li>
                                        <li class="agree agree1">
                                            <div class="title">
                                                <p>개인정보활용동의</p>
                                            </div>
                                            <div class="write">
                                                <div class="info_box">
                                                    <ol>
                                                        <li>
                                                            1. 개인정보 수집, 이용 목적 : 골든라이프케어 입소 신청 알림
                                                            발송
                                                        </li>
                                                        <li>
                                                            2. 수집 · 이용할 개인정보의 내용 : 신청자의 성명, 연락처,
                                                            알림 희망 사업장
                                                        </li>
                                                        <li>
                                                            3. 개인정보의 보유 · 이용기간 : 해당 사업장 입소 신청 오픈
                                                            후 1개월
                                                        </li>
                                                    </ol>
                                                </div>
                                                <label class="display_inline_block_cursor_pointer">
                                                    <input type="checkbox" name="s_v4_0" id="s_v4_0" value="O" />
                                                    <span>O</span>
                                                </label>
                                            </div>
                                        </li>
                                        <li class="agree agree2">
                                            <div class="title">
                                                <p>
                                                    마케팅 및 광고
                                                    <br />
                                                    수신동의에 관한 사항 <br />
                                                    (선택)
                                                </p>
                                            </div>
                                            <div class="write">
                                                <div class="info_box">
                                                    <p>
                                                        ※ 동의하시는 경우 새로운 사업장 오픈, 서비스 홍보 등으로 연락을
                                                        받아보실 수 있습니다. <br />
                                                        본 동의는 필수적이지 않으며, 동의를 거부하실 수 있습니다. 또한
                                                        동의하시더라도 당사 운영관리부(02-2135-2681)을 통해 철회하여
                                                        언제든지 마케팅
                                                        <br />
                                                        활동에 대한 중지를 요청할 수 있습니다.
                                                    </p>
                                                </div>
                                                <label class="display_inline_block_cursor_pointer">
                                                    <input type="checkbox" name="s_v5_0" id="s_v5_0" value="O" />
                                                    <span>O</span>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </form>
                                <div class="submit_btn_wrap">
                                    <a href="javascript:myreg_form_chk()">입소 신청 알림 받기</a>
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

export default Myreg;
