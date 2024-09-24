'use client';
import Header from '@/app/component/header';
import '../../../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css';
import '../../public/src_css/c_slides.css';
import '../../public/src_css/a_reset.css';
import '../../public/src_css/fonts.css';
import '../../public/src_css/b_style.css';
import '../../public/src_css/ds_style.css';
import '../../css/volunteer.css';
import sub2_1_img01 from '../../public/design/images/sub/sub2_1_img01.jpg';
import sub2_1_img02 from '../../public/design/images/sub/sub2_1_img02.jpg';
import sub2_1_img03 from '../../public/design/images/sub/sub2_1_img03.jpg';
import Header2 from '@/app/component/Header2';
import family_tit from '../../public/design/images/skin/family_tit.png';
import Footer from '@/app/component/footer';
import Family_site from '@/app/component/family_site';
import MobileHeader from '@/app/component/mobileHeader';

const Volunteer = () => {
    // 완성
    //https://www.kbgoldenlifecare.co.kr/page/sub1_2_1
    return (
        <>
            <>
                <Header></Header>
                <MobileHeader></MobileHeader>
                <div id="layout_body" class="layout_sub">
                    <Header2></Header2>
                    <div id="container">
                        <div class="sub_con wrap">
                            <h3 class="sub_tit">자원봉사 신청</h3>
                            <div class="bbs_hd bbs1_2_3">
                                <div class="txt_box">
                                    <strong> KB골든라이프케어와 함께 할 자원봉사자를 모집합니다! </strong>
                                    자원봉사는 따듯한 마음과 자발적 의지만 있다면,
                                    <br />
                                    참여 할 수 있습니다.
                                </div>
                            </div>

                            <div class="glores-A-customize-form">
                                <form name="myreg_form" enctype="multipart/form-data" style={{ margin: 0 }}>
                                    <input type="hidden" name="tmp_name" value="tmp_val" />
                                    <input type="hidden" name="this_domain" />
                                    <input type="hidden" name="post_action" />
                                    <input type="hidden" name="bu_id" value="" />
                                    <input type="hidden" name="y" />
                                    <input type="hidden" name="idx" />
                                    <input type="hidden" name="me_popup" />
                                    <input type="hidden" name="mode" />
                                    <input type="hidden" name="myreg_code" value="volunteer" />
                                    <input type="hidden" name="user_app_subject" value="" />
                                    <input type="hidden" name="user_app_goods_name" value="" />
                                    <input type="hidden" name="user_app_price" value="" />
                                    <input type="hidden" name="captcha_str_hash" value="" />
                                    <input type="hidden" name="form_sess_id" value="4knf8u7mnn9klndjd4r67h0gu4" />
                                    <input type="hidden" name="use_emoney_ok" id="use_emoney_ok" value="0" />
                                    <input type="hidden" name="s_t30" id="nicednb_enc_str" value="" />
                                    <h4 class="glores-A-title">KB골든라이프케어 자원봉사 신청서 양식</h4>
                                    <table class="glores-A-form">
                                        <colgroup>
                                            <col width="20%" />
                                            <col width="*" />
                                            <col width="20%" />
                                            <col width="*" />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <th>
                                                    신청구분 <i>*</i>
                                                </th>
                                                <td colspan="3">
                                                    <select name="s_v8" id="s_v8">
                                                        <option value="">선택해주세요.</option>
                                                        <option value="강동케어센터">강동케어센터</option>
                                                        <option value="위례빌리지">위례빌리지</option>
                                                        <option value="서초 빌리지">서초 빌리지</option>
                                                        <option value="위례 케어센터">위례 케어센터</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    단체구분 <i>*</i>
                                                </th>
                                                <td colspan="3">
                                                    <select name="s_v9" id="s_v9">
                                                        <option value="">선택해주세요.</option>
                                                        <option value="개인">개인</option>
                                                        <option value="단체">단체</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    봉사분야 <i>*</i>
                                                </th>
                                                <td colspan="3">
                                                    <label style={{ display: 'inline-block', cursor: 'pointer' }}>
                                                        <input
                                                            type="checkbox"
                                                            name="s_v10_0"
                                                            id="s_v10_0"
                                                            value="프로그램진행(재능기부)  EX.공연, 웃음치료, 미술치료, 가요교실 등"
                                                        />
                                                        <span>
                                                            프로그램진행(재능기부) EX.공연, 웃음치료, 미술치료, 가요교실
                                                            등
                                                        </span>
                                                    </label>
                                                    <label style={{ display: 'inline-block', cursor: 'pointer' }}>
                                                        <input
                                                            type="checkbox"
                                                            name="s_v10_1"
                                                            id="s_v10_1"
                                                            value="프로그램 보조(어르신 케어 보조)"
                                                        />
                                                        <span>프로그램 보조(어르신 케어 보조)</span>
                                                    </label>
                                                    <label style={{ display: 'inline-block', cursor: 'pointer' }}>
                                                        <input
                                                            type="checkbox"
                                                            name="s_v10_2"
                                                            id="s_v10_2"
                                                            value="송영보조 (어르신 맞이, 준비보조)"
                                                        />
                                                        <span>송영보조 (어르신 맞이, 준비보조)</span>
                                                    </label>
                                                    <label style={{ display: 'inline-block', cursor: 'pointer' }}>
                                                        <input
                                                            type="checkbox"
                                                            name="s_v10_3"
                                                            id="s_v10_3"
                                                            value="사무보조 (행정업무 보조)"
                                                        />
                                                        <span>사무보조 (행정업무 보조)</span>
                                                    </label>
                                                    <label style={{ display: 'inline-block', cursor: 'pointer' }}>
                                                        <input
                                                            type="checkbox"
                                                            name="s_v10_4"
                                                            id="s_v10_4"
                                                            value="목욕지원 (목욕서비스 보조)"
                                                        />
                                                        <span>목욕지원 (목욕서비스 보조)</span>
                                                    </label>
                                                    <label style={{ display: 'inline-block', cursor: 'pointer' }}>
                                                        <input
                                                            type="checkbox"
                                                            name="s_v10_5"
                                                            id="s_v10_5"
                                                            value="식사지원 (식사서비스 보조)"
                                                        />
                                                        <span>식사지원 (식사서비스 보조)</span>
                                                    </label>
                                                    <label style={{ display: 'inline-block', cursor: 'pointer' }}>
                                                        <input
                                                            type="checkbox"
                                                            name="s_v10_6"
                                                            id="s_v10_6"
                                                            value="환경미화 (시설 청결관리 보조)"
                                                        />
                                                        <span>환경미화 (시설 청결관리 보조)</span>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>이름</th>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="s_v11"
                                                        id="s_v11"
                                                        style={{ width: '100%' }}
                                                    />
                                                </td>
                                                <th>성별</th>
                                                <td class="gender">
                                                    <label style={{ display: 'inline-block', cursor: 'pointer' }}>
                                                        <input type="radio" name="s_v12" id="s_v12_0" value="남" />
                                                        <span>남</span>
                                                    </label>
                                                    <label style={{ display: 'inline-block', cursor: 'pointer' }}>
                                                        <input type="radio" name="s_v12" id="s_v12_1" value="여" />
                                                        <span>여</span>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    이메일 <i>*</i>
                                                </th>
                                                <td colspan="3">
                                                    <input
                                                        type="text"
                                                        name="s_v13"
                                                        id="s_v13"
                                                        style={{ width: '100%' }}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    연락처 <i>*</i>
                                                </th>
                                                <td colspan="3">
                                                    <input
                                                        type="text"
                                                        name="s_v14"
                                                        id="s_v14"
                                                        style={{ width: '100%' }}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    원하는 자원봉사 내용
                                                    <br />/ 질문사항 <i>*</i>
                                                </th>
                                                <td colspan="3">
                                                    <textarea
                                                        name="s_t2"
                                                        id="s_t2"
                                                        style={{ width: '100%', height: '200px' }}
                                                    ></textarea>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colspan="4">
                                                    <div class="glores-A-agree-wrap glores-A-mgt">
                                                        <div class="glores-A-agree">
                                                            <h5>&#60;개인정보 수집 및 이용 동의&#62;</h5>
                                                            <p>
                                                                ○ 개인정보 수집ㆍ이용 목적
                                                                <br />
                                                                - KB골든라이프케어 자원봉사 신청 및 수행
                                                                <br />
                                                                <br />
                                                                ○ 개인정보 수집 항목
                                                                <br />
                                                                - 성명, 이메일주소, 전화번호, 성별
                                                                <br />
                                                                <br />
                                                                ○ 개인정보 보유 및 이용기간
                                                                <br />
                                                                - 자원봉사 실시 및 종료 후 즉시 파기
                                                                <br />
                                                                <br />
                                                                ○ 개인정보 수집 동의 거부의 권리
                                                                <br />- 개인정보 수집ㆍ이용에 대해 동의를 거부할 권리가
                                                                있으나, 동의 거부 시 자원봉사 신청 및 수행과 관련하여
                                                                제한을 받을 수 있음
                                                            </p>
                                                        </div>
                                                        <div class="agree-check-box">
                                                            <input
                                                                type="checkbox"
                                                                name="myreg_privacy_chk"
                                                                id="myreg_privacy_chk"
                                                                value="1"
                                                            />
                                                            <span>
                                                                <input
                                                                    type="radio"
                                                                    name="myreg_privacy_radio"
                                                                    id="myreg_privacy_radio1"
                                                                />
                                                                <label for="myreg_privacy_radio1">동의합니다.</label>
                                                            </span>
                                                            <span>
                                                                <input
                                                                    type="radio"
                                                                    name="myreg_privacy_radio"
                                                                    id="myreg_privacy_radio2"
                                                                />
                                                                <label for="myreg_privacy_radio2">
                                                                    동의하지 않습니다.
                                                                </label>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </form>
                                <div class="glores-A-btn-wrap">
                                    <a href="javascript:myreg_form_chk()" class="btn btn_filled">
                                        자원봉사 신청하기
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Family_site></Family_site>
                    <Footer></Footer>
                </div>
            </>
        </>
    );
};

export default Volunteer;
