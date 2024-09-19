'use client';
import Header from '@/app/component/header';
import '../../../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css';
import '../../public/src_css/c_slides.css';
import '../../public/src_css/a_reset.css';
import '../../public/src_css/fonts.css';
import '../../public/src_css/b_style.css';
import '../../public/src_css/ds_style.css';
import sub1_3_1_img01 from '../../public/design/images/sub/sub1_3_1_img01.png';
import sub1_3_1_img02 from '../../public/design/images/sub/sub1_3_1_img02.png';
import sub1_3_1_img03 from '../../public/design/images/sub/sub1_3_1_img03.png';
import sub1_3_1_img04 from '../../public/design/images/sub/sub1_3_1_img04.png';

import Header2 from '@/app/component/Header2';
import family_tit from '../../public/design/images/skin/family_tit.png';
import Footer from '@/app/component/footer';
import Family_site from '@/app/component/family_site';
import MobileHeader from '@/app/component/mobileHeader';

const Sub1_3_1 = () => {
    //완성
    //https://www.kbgoldenlifecare.co.kr/page/sub1_3_1
    return (
        <>
            <Header></Header>
            <MobileHeader></MobileHeader>
            <div id="layout_body" class="layout_sub">
                <Header2></Header2>
                <div id="container">
                    <div class="sub_con wrap">
                        <h3 class="sub_tit">인재상</h3>
                        <div class="sub1_3_1">
                            <div class="section1">
                                <p class="emph_txt">
                                    어르신을 공경하는 마음가짐과
                                    <br />
                                    자신의 일에 대한 <span>열정</span>과 <span>자부심</span>을 가진 인재
                                </p>
                            </div>
                            <div class="section2">
                                <dl class="dl01">
                                    <dt class="ico">
                                        <img src={sub1_3_1_img01.src} alt="considerate" />
                                    </dt>
                                    <dd class="tit">
                                        Considerate<span>배려하는</span>
                                    </dd>
                                    <dd class="con">
                                        <span class="line"></span>
                                        <ul class="list">
                                            <li>주위 사람들에게 친절하고 항상 배려하는 마음가짐을 가진 인재</li>
                                            <li>동료들과 격의 없이 소통하고 팀워크를 소중하게 생각하는 인재</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl class="dl02">
                                    <dt class="ico">
                                        <img src={sub1_3_1_img02.src} alt="considerate" />
                                    </dt>
                                    <dd class="tit">
                                        Active<span>실천/열정적인</span>
                                    </dd>
                                    <dd class="con">
                                        <span class="line"></span>
                                        <ul class="list">
                                            <li>KB골든라이프케어의 핵심가치를 함께 공감하고 실천할 수 있는 인재</li>
                                            <li>KB골든라이프케어 케어 원칙을 함께 공감하고 실천할 수 있는 인재</li>
                                            <li>자신의 일에 대한 열정, 자부심을 가지고 있는 인재</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl class="dl03">
                                    <dt class="ico">
                                        <img src={sub1_3_1_img03.src} alt="considerate" />
                                    </dt>
                                    <dd class="tit">
                                        Respectful<span>존중하는</span>
                                    </dd>
                                    <dd class="con">
                                        <span class="line"></span>
                                        <ul class="list">
                                            <li>어르신을 공경하고 존경하는 마음가짐을 가진 인재</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl class="dl04">
                                    <dt class="ico">
                                        <img src={sub1_3_1_img04.src} alt="considerate" />
                                    </dt>
                                    <dd class="tit">
                                        Expert<span>전문적인</span>
                                    </dd>
                                    <dd class="con">
                                        <span class="line"></span>
                                        <ul class="list">
                                            <li>
                                                자신의 업무에 관한 전문적인 지식과 스킬을 갖추고 배우고자 하는 의지가
                                                강한 인재
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
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

export default Sub1_3_1;
