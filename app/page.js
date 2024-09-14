import Image from "next/image";
import styles from "./page.module.css";
// window.$ = window.jQuery = require("jquery");
import './css/head_basic.css';
import './css/head_logout.css';
import './public/src_css/c_slides.css';
import './public/src_css/a_reset.css';
import './public/src_css/fonts.css';
import './public/src_css/b_style.css';
import './public/src_css/ds_style.css';
import './css/jquery.bxslider.css';

import footer_logo from './public/design/images/skin/footer_logo.png'; 
import btn_sitemap_close from './public/design/images/sub/btn_sitemap_close.png';
import ico_sitemap from './public/design/images/skin/ico_sitemap.png'; 
import kb_logo from './public/design/images/skin/kb_logo.png'; 
import mobile_btn from './public/design/images/skin/mobile_btn.png'; 
import img_overcon_txt from './public/design/images/main/img_overcon_txt.png'; 
import img_overcon_txt2 from './public/design/images/main/img_overcon_txt2.png'; 
import family_tit from './public/design/images/skin/family_tit.png'; 


// import kbpopup from './public/images/pop/kb_popup.png'
export default function Home() {
  
  return (
    <>
      <div id="sitemap">
        <div class="wrap">
          <a href="#" id="btnSitemapCl">
            <img
              src={btn_sitemap_close.src}
              alt="닫기"
            />
          </a>
          <ul class="dep1">
            <li>
              <a href="/page/sub1_1_1">회사소개 </a>
            </li>
            <div>
              <ul class="dep2">
                <li>
                  <a href="/page/sub1_1_2">CEO 인사말 </a>
                </li>
                <li>
                  <a href="/page/sub1_1_1">비전체계 </a>
                </li>
                <li>
                  <a href="/bbs/sub1_4">공지/공시 </a>
                </li>
                <li>
                  <a href="/page/sub1_1_3">오시는 길 </a>
                </li>
              </ul>
            </div>
            <li>
              <a href="http://pyeongchang-county.com/" target="_blank">
                평창카운티<span>노인복지주택</span>{" "}
              </a>
              <div>
                <ul class="dep2"></ul>
              </div>
            </li>
            <li>
              <a href="/page/sub02_1">
                위례 빌리지<span>요양시설</span>{" "}
              </a>
              <div>
                <ul class="dep2">
                  <li>
                    <a href="/page/sub02_1">위례빌리지 소개 </a>
                  </li>
                  <li>
                    <a href="/page/sub02_3">서비스·시설 안내 </a>
                  </li>
                  <li>
                    <a href="/page/sub02_4">입소안내ㆍ접수 </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/page/Seocho_Dis">
                서초 빌리지<span>요양시설</span>{" "}
              </a>
              <div>
                <ul class="dep2">
                  <li>
                    <a href="/page/Seocho_Dis">서초 빌리지 소개 </a>
                  </li>
                  <li>
                    <a href="/page/Seocho_sv">서초서비스·시설 안내 </a>
                  </li>
                  <li>
                    <a href="/page/Seocho_Rg">서초입소안내ㆍ접수 </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/page/sub03_1">
                케어센터<span>주.야간보호센터</span>{" "}
              </a>
              <div>
                <ul class="dep2">
                  <li>
                    <a href="/page/sub03_1">서비스 소개 </a>
                  </li>
                  <li>
                    <a href="/page/sub03_2">강동케어센터 소개 </a>
                  </li>
                  <li>
                    <a href="/page/sub03_3">위례케어센터 소개 </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/page/sub1_3_1">인재채용 </a>
              <div>
                <ul class="dep2">
                  <li>
                    <a href="/page/sub1_3_1">인재상 </a>
                  </li>
                  <li>
                    <a href="/page/sub1_3_2">직무소개 </a>
                  </li>
                  <li>
                    <a href="https://admin.kbgoldenlifecare.co.kr/recruit/main">
                      채용공고{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/bbs/sub05_1">게시판 </a>
              <div>
                <ul class="dep2">
                  <li>
                    <a href="/myreg/sub05_6">개소 예정 사업장 안내 </a>
                  </li>
                  <li>
                    <a href="/bbs/sub05_1">프로그램/식단표 </a>
                  </li>
                  <li>
                    <a href="/page/sub1_2_1">자원봉사안내 </a>
                  </li>
                  <li>
                    <a href="/page/sub05_3">견학안내 </a>
                  </li>
                  <li>
                    <a href="/bbs/sub2_3_1">상담신청 </a>
                  </li>
                  <li>
                    <a href="/page/bl_go">고객의 소리 </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/page/sub4_1">노인장기요양보험제도 </a>
              <div>
                <ul class="dep2">
                  <li>
                    <a href="/page/sub4_1">노인장기요양보험제도 </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div id="pm_a1_moall" class="pm-navigation_vertical_toggle_a1_moall">
        <ul class="dep1">
          <li role="toggle">
            <a href="/page/sub1_1_1">회사소개</a>

            <div>
              <ul class="dep2">
                <li>
                  <a href="/page/sub1_1_2">CEO 인사말</a>
                </li>
                <li>
                  <a href="/page/sub1_1_1">비전체계</a>
                </li>
                <li>
                  <a href="/bbs/sub1_4">공지/공시</a>
                </li>
                <li>
                  <a href="/page/sub1_1_3">오시는 길</a>
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
            <a href="/page/sub02_1">
              위례 빌리지<span>요양시설</span>
            </a>

            <div>
              <ul class="dep2">
                <li>
                  <a href="/page/sub02_1">위례빌리지 소개</a>
                </li>
                <li>
                  <a href="/page/sub02_3">서비스·시설 안내</a>
                </li>
                <li>
                  <a href="/page/sub02_4">입소안내ㆍ접수</a>
                </li>
              </ul>
            </div>
          </li>
          <li role="toggle">
            <a href="/page/Seocho_Dis">
              서초 빌리지<span>요양시설</span>
            </a>

            <div>
              <ul class="dep2">
                <li>
                  <a href="/page/Seocho_Dis">서초 빌리지 소개</a>
                </li>
                <li>
                  <a href="/page/Seocho_sv">서초서비스·시설 안내</a>
                </li>
                <li>
                  <a href="/page/Seocho_Rg">서초입소안내ㆍ접수</a>
                </li>
              </ul>
            </div>
          </li>
          <li role="toggle">
            <a href="/page/sub03_1">
              케어센터<span>주.야간보호센터</span>
            </a>

            <div>
              <ul class="dep2">
                <li>
                  <a href="/page/sub03_1">서비스 소개</a>
                </li>
                <li>
                  <a href="/page/sub03_2">강동케어센터 소개</a>
                </li>
                <li>
                  <a href="/page/sub03_3">위례케어센터 소개</a>
                </li>
              </ul>
            </div>
          </li>
          <li role="toggle">
            <a href="/page/sub1_3_1">인재채용</a>

            <div>
              <ul class="dep2">
                <li>
                  <a href="/page/sub1_3_1">인재상</a>
                </li>
                <li>
                  <a href="/page/sub1_3_2">직무소개</a>
                </li>
                <li>
                  <a href="https://admin.kbgoldenlifecare.co.kr/recruit/main">
                    채용공고
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li role="toggle">
            <a href="/bbs/sub05_1">게시판</a>

            <div>
              <ul class="dep2">
                <li>
                  <a href="/myreg/sub05_6">개소 예정 사업장 안내</a>
                </li>
                <li>
                  <a href="/bbs/sub05_1">프로그램/식단표</a>
                </li>
                <li>
                  <a href="/page/sub1_2_1">자원봉사안내</a>
                </li>
                <li>
                  <a href="/page/sub05_3">견학안내</a>
                </li>
                <li>
                  <a href="/bbs/sub2_3_1">상담신청</a>
                </li>
                <li>
                  <a href="/page/bl_go">고객의 소리</a>
                </li>
              </ul>
            </div>
          </li>
          <li role="toggle">
            <a href="/page/sub4_1">노인장기요양보험제도</a>

            <div>
              <ul class="dep2">
                <li>
                  <a href="/page/sub4_1">노인장기요양보험제도</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* </div> */}

      <div id="layout_body" class="layout_main">
        <div id="header" class="header_main">
          <div class="wrap h_wrap">
            <h1>
              <a href="/main">
                <img
                  src={kb_logo.src}
                  alt="KB골든라이프"
                />
              </a>
              <a href="" id="btn_mobile_gnb">
                <img
                  src={mobile_btn.src}
                  alt="mobile_button"
                />
              </a>
            </h1>
            <div class="gnb gnb_main">
              <ul class="dep1">
                <li>
                  <a href="/page/sub1_1_1">회사소개 </a>
                  <div>
                    <ul class="dep2">
                      <li>
                        <a href="/page/sub1_1_2">CEO 인사말</a>
                      </li>
                      <li>
                        <a href="/page/sub1_1_1">비전체계</a>
                      </li>
                      <li>
                        <a href="/bbs/sub1_4">공지/공시</a>
                      </li>
                      <li>
                        <a href="/page/sub1_1_3">오시는 길</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="http://pyeongchang-county.com/" target="_blank">
                    평창카운티<span>노인복지주택</span>{" "}
                  </a>
                  <div>
                    <ul class="dep2"></ul>
                  </div>
                </li>
                <li>
                  <a href="/page/sub02_1">
                    위례 빌리지<span>요양시설</span>{" "}
                  </a>
                  <div>
                    <ul class="dep2">
                      <li>
                        <a href="/page/sub02_1">위례빌리지 소개</a>
                      </li>
                      <li>
                        <a href="/page/sub02_3">서비스·시설 안내</a>
                      </li>
                      <li>
                        <a href="/page/sub02_4">입소안내ㆍ접수</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/page/Seocho_Dis">
                    서초 빌리지<span>요양시설</span>{" "}
                  </a>
                  <div>
                    <ul class="dep2">
                      <li>
                        <a href="/page/Seocho_Dis">서초 빌리지 소개</a>
                      </li>
                      <li>
                        <a href="/page/Seocho_sv">서초서비스·시설 안내</a>
                      </li>
                      <li>
                        <a href="/page/Seocho_Rg">서초입소안내ㆍ접수</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/page/sub03_1">
                    케어센터<span>주.야간보호센터</span>{" "}
                  </a>
                  <div>
                    <ul class="dep2">
                      <li>
                        <a href="/page/sub03_1">서비스 소개</a>
                      </li>
                      <li>
                        <a href="/page/sub03_2">강동케어센터 소개</a>
                      </li>
                      <li>
                        <a href="/page/sub03_3">위례케어센터 소개</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/page/sub1_3_1">인재채용 </a>
                  <div>
                    <ul class="dep2">
                      <li>
                        <a href="/page/sub1_3_1">인재상</a>
                      </li>
                      <li>
                        <a href="/page/sub1_3_2">직무소개</a>
                      </li>
                      <li>
                        <a href="https://admin.kbgoldenlifecare.co.kr/recruit/main">
                          채용공고
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/bbs/sub05_1">게시판 </a>
                  <div>
                    <ul class="dep2">
                      <li>
                        <a href="/myreg/sub05_6">개소 예정 사업장 안내</a>
                      </li>
                      <li>
                        <a href="/bbs/sub05_1">프로그램/식단표</a>
                      </li>
                      <li>
                        <a href="/page/sub1_2_1">자원봉사안내</a>
                      </li>
                      <li>
                        <a href="/page/sub05_3">견학안내</a>
                      </li>
                      <li>
                        <a href="/bbs/sub2_3_1">상담신청</a>
                      </li>
                      <li>
                        <a href="/page/bl_go">고객의 소리</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/page/sub4_1">노인장기요양보험제도 </a>
                  <div>
                    <ul class="dep2">
                      <li>
                        <a href="/page/sub4_1">노인장기요양보험제도</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#" id="btnSitemap">
                    <img
                      src={ico_sitemap.src}
                      alt="사이트맵"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="main_visual">
          <div id="flex_a0_mainvis" class="flex-container">
            <div class="flexslider">
              <ul class="slides main_slides">
                <li class="item_0 item_h">
                  {" "}
                  {/*style="background-image:url(/img_up/shop_pds/kbgoldenlife/design/my_xml/pc_-choe-jong-su-jeong_-eo-gi-su-je1701133076.jpg);"*/}
                  <div class="wrap">
                    <a
                      href="http://pyeongchang-county.com/"
                      target="_blank"
                    ></a>
                    <p>
                      <img src="" alt="" />
                    </p>
                  </div>
                  <a
                    href="http://pyeongchang-county.com/"
                    target="_blank"
                    class="mo_slide_item"
                  >
                    <img
                      src="./img_up/shop_pds/kbgoldenlife/design/my_xml/mo_-choe-jong-su-jeong1700617901.jpg"
                      alt="평창"
                    />
                  </a>
                </li>

                <li class="item_1 item_e">
                  {" "}
                  {/*style="background-image:url(/img_up/shop_pds/kbgoldenlife/design/my_xml/me-in-bi-ju-eol-chu-ga1563155780.jpg);"*/}
                  <div class="wrap">
                    <a href="http://www.kbgoldenlifecare.co.kr/page/sub3_3"></a>
                    <p>
                      <img src="" alt="" />
                    </p>
                  </div>
                  <a
                    href="http://www.kbgoldenlifecare.co.kr/page/sub3_3"
                    class="mo_slide_item"
                  >
                    <img
                      src="./img_up/shop_pds/kbgoldenlife/design/my_xml/me-in-bi-ju-eol-chu-ga_-mo-ba-il1563155780.jpg"
                      alt="메인비주얼"
                    />
                  </a>
                </li>

                <li class="item_2 item_f">
                  {" "}
                  {/*style="background-image:url(/img_up/shop_pds/kbgoldenlife/design/my_xml/kb_main_v1609205514.png);"*/}
                  <div class="wrap">
                    <a href="https://www.kbgoldenlifecare.co.kr/page/Seocho_Rg"></a>
                    <p>
                      <img src="" alt="" />
                    </p>
                  </div>
                  <a
                    href="https://www.kbgoldenlifecare.co.kr/page/Seocho_Rg"
                    class="mo_slide_item"
                  ></a>
                </li>

                <li class="item_3 item_b">
                  {" "}
                  {/*style="background-image:url(/img_up/shop_pds/kbgoldenlife/design/my_xml/main_visual021487582982.jpg);"*/}
                  <div class="wrap">
                    <a href="/page/sub2_2_1"></a>
                    <p>
                      <img
                        src="./img_up/shop_pds/kbgoldenlife/design/my_xml/main_txt021487582982.png"
                        alt=""
                      />
                    </p>
                  </div>
                  <a href="/page/sub2_2_1" class="mo_slide_item">
                    <img
                      src="./img_up/shop_pds/kbgoldenlife/design/my_xml/mobile_slide021487760659.jpg"
                      alt="메인비주얼03"
                    />
                  </a>
                </li>

                <li class="item_4 item_g">
                  {" "}
                  {/*style="background-image:url(/img_up/shop_pds/kbgoldenlife/design/my_xml/je-mok--eum-11588142451.png);"*/}
                  <div class="wrap">
                    <a href="/page/sub03_1"></a>
                    <p>
                      <img src="" alt="" />
                    </p>
                  </div>
                  <a href="/page/sub03_1" class="mo_slide_item"></a>
                </li>

                <li class="item_5 item_a">
                  {" "}
                  {/*style="background-image:url(/img_up/shop_pds/kbgoldenlife/design/my_xml/pc_slide031488520314.jpg);"*/}
                  <div class="wrap">
                    <a href="#"></a>
                    <p>
                      <img
                        src="./img_up/shop_pds/kbgoldenlife/design/my_xml/main_txt031488505989.png"
                        alt=""
                      />
                    </p>
                  </div>
                  <a href="#" class="mo_slide_item">
                    <img
                      src="./img_up/shop_pds/kbgoldenlife/design/my_xml/mobile_slide031488505989.jpg"
                      alt="메인비주얼02"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="container">
          <div class="main_con">
            <div class="section sec2">
              <div class="wrap">
                <ul>
                  <li>
                    <dl>
                      <dt>
                        <a
                          href="http://pyeongchang-county.com/"
                          target="_blank"
                        >
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

            <div class="section sec5">
              <div class="section sec1">
                <div class="wrap overcon">
                  <dl class="clr">
                    <dt class="dis_table">
                      <div class="dis_td txt">
                        <img
                          src={img_overcon_txt.src}
                          alt="kb골든라이프케어 4대원칙"
                          class="pc_overtit"
                        />
                        <img
                          src={img_overcon_txt2.src}
                          alt="kb골든라이프케어 4대원칙"
                          class="mo_overtit"
                        />
                      </div>
                    </dt>
                    <dd class="dis_table item1">
                      <p class="dis_td">
                        <span>1.</span> 어르신의 존엄적 생활을 존중하고 지원
                        합니다.
                      </p>
                    </dd>
                    <dd class="dis_table item2">
                      <p class="dis_td">
                        <span>2.</span> 이론과 근거에 기반한 전문 케어서비스를
                        제공합니다.
                      </p>
                    </dd>
                    <dd class="dis_table item3">
                      <p class="dis_td">
                        <span>3.</span> 어르신 한 분 한 분 에 대한 맞춤케어를
                        제공합니다.
                      </p>
                    </dd>
                    <dd class="dis_table item4">
                      <p class="dis_td">
                        <span>4.</span> 안전하고 편안하고 깨끗한 환경을 항상
                        유지합니다.
                      </p>
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="wrap">
                <div class="box_wrap clr">
                  <div class="box box1">
                    <div class="inner">
                      <div class="notice">
                        <h4 class="box_tit">
                          공지사항
                          <a href="/bbs/sub1_4">
                            <span>더보기</span>
                            <img
                              src="./img_up/shop_pds/kbgoldenlife/design/images/main/ico_bbs_more.gif"
                              alt="더보기"
                            />
                          </a>
                        </h4>
                        <div class="notice_con">
                          <div class="pm-board_list_bd_lis">
                            <ul>
                              <li>
                                <a href="/bbs_shop/read.htm?board_code=sub1_4&idx=17386&cate_sub_idx=0">
                                  <dl>
                                    <dt>
                                      KB골든라이프케어 평창 카운티 분양대행사
                                      선정 입찰 재공고 (긴급){" "}
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
                                      용역 입찰 공고{" "}
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
                                      KB골든라이프케어 식자재 납품 업체 선정
                                      입찰 공고{" "}
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
                  <div class="box box2">
                    <div class="inner">
                      <ul>
                        <li class="banner">
                          <div>
                            <div id="flex_m1_banner" class="flex-container">
                              <div class="flexslider">
                                <ul class="slides">
                                  <li>
                                    <a href="https://kbglc.carefor.co.kr/recruit/main ">
                                      <img
                                        src="./thum_img/kbgoldenlife/my_xml/908c2c1867fd4c0d1bdedfd9c7bd34bd_water__c1_w540_h147.png"
                                        alt="채용공고"
                                      />{" "}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="recruit">
                          <div class="recruit_con">
                            <h4 class="title_text">
                              KB골든라이프케어와 함께할{" "}
                              <span class="big">파트너 기업</span>을 찾습니다.
                            </h4>
                            <p class="info_text">
                              마케팅 제휴 및 비즈니스 제안과 관련하여서는
                              <br /> 아래 메일로 문의주시기 바랍니다.
                            </p>
                            <p class="mail">
                              kbglc00610@kbgoldenlifecare.co.kr
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="section sec4">
              <div class="wrap">
                <ul>
                  <li class="item1">
                    <a class="inner" href="/page/sub1_1_1">
                      <div class="dscr">
                        <h5>회사소개</h5>
                        <p>비전, 미션, 핵심가치를 소개 합니다.</p>
                      </div>
                    </a>
                  </li>
                  <li class="item2">
                    <a class="inner" href="/page/sub1_2_1">
                      <div class="dscr">
                        <h5>자원봉사</h5>
                        <p>KB골든라이프케어 자원봉사에 대해 소개합니다.</p>
                      </div>
                    </a>
                  </li>
                  <li class="item3">
                    <a class="inner" href="/page/sub1_3_1">
                      <div class="dscr">
                        <h5 class="mo_txt">인재상</h5>
                        <p>KB골든라이프가 추구하는 인재상</p>
                        <h5 class="pc_txt">인재상</h5>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="family_site">
          <span>
            <img
              src={family_tit.src}
              alt="KB금융그룹"
            />
          </span>
          <a href="https://www.kbfg.com/Kor/index.jsp" target="_blank">
            KB금융지주
          </a>
          <a href="https://www.kbstar.com/" target="_blank">
            KB국민은행
          </a>
          <a href="http://www.kbinsure.co.kr/main.ec" target="_blank">
            KB손해보험
          </a>
          <a href="http://www.kbsec.com/" target="_blank">
            KB증권
          </a>
          <a href="https://card.kbcard.com" target="_blank">
            KB국민카드
          </a>
          <a href="https://www.kblife.co.kr/" target="_blank">
            KB라이프생명
          </a>
          <a href="http://www.kbam.co.kr/" target="_blank">
            KB자산운용
          </a>
          <a href="https://www.kbcapital.co.kr/main.kbc" target="_blank">
            KB캐피탈
          </a>
          <a href="https://www.kbsavings.com/" target="_blank">
            KB저축은행
          </a>
          <a href="https://kbret.co.kr/main.do" target="_blank">
            KB부동산신탁
          </a>
          <a href="http://www.kbic.co.kr/" target="_blank">
            KB인베스트먼트
          </a>

          <a href="http://www.kds.co.kr/kor/main/index.asp" target="_blank">
            KB데이타시스템
          </a>
          <a href="https://www.kbfg.com/kbresearch/main.do" target="_blank">
            KB경영연구소
          </a>
        </div>
        <div id="footer">
          <div class="wrap">
            <dl class="dis_table">
              <dt class="dis_td f_logo">
                <a href="/main">
                  <img
                    src={footer_logo.src}
                    alt="KB골든라이프케어"
                  />
                </a>
              </dt>
              <dd class="dis_td f_copy">
                <p>
                  서울 강남구 강남대로 298 6층 KB골든라이프케어<span></span>
                  대표자 : 안상봉<span></span>
                  <br />
                  사업자등록번호 : 822-87-00610{" "}
                  <span>
                    <a href="/shop_info/privacy.htm">[개인정보 처리방침]</a>
                  </span>
                </p>
                <p>Copyright kbgoldenlifecare.co.kr. All Rights Reserved.</p>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      {/* <div class="popup_layer">
        <div class="popup_con">
          <a
            href="https://www.kbgoldenlifecare.co.kr/shop_contents/myboard_read.htm?load_type=&page_idx=0&tag_on=&h_search_c=0&h_search_v=&me_popup=&myboard_code=sub1_3_3&page_limit=200&idx=195727&page=1&category_idx="
            target=""
          >
            <img
              align="top"
              alt=""
              src={kbpopup.src}
              title=""
            />{" "}
            style="width:100%; border-width: 0px; border-style: solid;"
          </a>
          <span class="btn_pop_close">닫기</span>
        </div>
      </div> */}
    </>
  );
}