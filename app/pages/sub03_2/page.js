'use client';
// 슬라이드 구현 해야함
import React, { useState, useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '@/app/component/header';
import '../../../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css';
import '../../public/src_css/c_slides.css';
import '../../public/src_css/a_reset.css';
import '../../public/src_css/fonts.css';
import '../../public/src_css/b_style.css';
import '../../public/src_css/ds_style.css';
import '../../css/sub03_2.css';

import sec03_2_1 from '../../public/design/images/sub/sec03_2_1.png';
import ct_name from '../../public/design/images/sub/ct_name.jpg';
import mission_icon from '../../public/design/images/ds_img/mission_icon.png';
import _icon from '../../public/design/images/ds_img/_icon.png';
import vision_icon from '../../public/design/images/ds_img/vision_icon.png';
import care_center011490590851 from '../../public/design/images/my_xml/care_center011490590851.jpg';
import bg_movie from '../../public/design/images/sub/bg_movie.png';
import kbeoteo from '../../public/design/images/my_xml/kb-eo-teo-441487586049.jpg';
import chang51487591213 from '../../public/design/images/my_xml/chang51487591213.jpg';
import kbeoteo071487586141 from '../../public/design/images/my_xml/kb-eo-teo-071487586141.jpg';
import kbeoteo091487586131 from '../../public/design/images/my_xml/kb-eo-teo-091487586131.jpg';
import my_xml0114875861491487925776 from '../../public/design/images/my_xml/0114875861491487925776.jpg';
import kbeoteo101487586126 from '../../public/design/images/my_xml/kb-eo-teo-101487586126.jpg';
import kbeoteo131487586122 from '../../public/design/images/my_xml/kb-eo-teo-131487586122.jpg';
import kbeoteo141487586117 from '../../public/design/images/my_xml/kb-eo-teo-141487586117.jpg';
import kbeoteo161487586111 from '../../public/design/images/my_xml/kb-eo-teo-161487586111.jpg';
import kbeoteo171487586106 from '../../public/design/images/my_xml/kb-eo-teo-171487586106.jpg';
import kbeoteo191487586092 from '../../public/design/images/my_xml/kb-eo-teo-191487586092.jpg';
import kbeoteo231487586087 from '../../public/design/images/my_xml/kb-eo-teo-231487586087.jpg';
import kbeoteo291487586082 from '../../public/design/images/my_xml/kb-eo-teo-291487586082.jpg';
import kbeoteo321487586077 from '../../public/design/images/my_xml/kb-eo-teo-321487586077.jpg';
import kbeoteo331487586073 from '../../public/design/images/my_xml/kb-eo-teo-331487586073.jpg';
import kb_center1487593553 from '../../public/design/images/my_xml/kb_center1487593553.jpg';
import kbeoteo371487586064 from '../../public/design/images/my_xml/kb-eo-teo-371487586064.jpg';
import kbeoteo381487586058 from '../../public/design/images/my_xml/kb-eo-teo-381487586058.jpg';
import water__c3_w150_h100 from '../../thum_img/kbgoldenlife/my_xml/501d4548eca1f3fa717fb24c238c12f0_water__c3_w150_h100.jpg';
import bg_movie_thumb from '../../public/design/images/sub/bg_movie_thumb.png';
import ffb21d171dae64c49fe712adee982_water__c3_w150_h100 from '../../thum_img/kbgoldenlife/my_xml/898ffb21d171dae64c49fe712adee982_water__c3_w150_h100.jpg';
import f8aae39e1d68f31b968a2b2320e835a_water__c3_w150_h100 from '../../thum_img/kbgoldenlife/my_xml/5f8aae39e1d68f31b968a2b2320e835a_water__c3_w150_h100.jpg';
import c1d799063601f53a5b7e075189c432_water__c3_w150_h100 from '../../thum_img/kbgoldenlife/my_xml/65c1d799063601f53a5b7e075189c432_water__c3_w150_h100.jpg';
import ccad6879ffe531cf38a51fc8598e3d5d_water__c3_w150_h100 from '../../thum_img/kbgoldenlife/my_xml/ccad6879ffe531cf38a51fc8598e3d5d_water__c3_w150_h100.jpg';
import ee4953a26b32396d6b89e3f950418429_water__c3_w150_h100 from '../../thum_img/kbgoldenlife/my_xml/ee4953a26b32396d6b89e3f950418429_water__c3_w150_h100.jpg';
import a7b894f6d896c329abd88de25d627e3d_water__c3_w150_h100 from '../../thum_img/kbgoldenlife/my_xml/a7b894f6d896c329abd88de25d627e3d_water__c3_w150_h100.jpg';
import e8c430b3d784ec56e9de4fd6ff55cce_water__c3_w150_h100 from '../../thum_img/kbgoldenlife/my_xml/5e8c430b3d784ec56e9de4fd6ff55cce_water__c3_w150_h100.jpg';
import f788547e7661b4b6cd6078ed4f96e0ad_water__c3_w150_h100 from '../../thum_img/kbgoldenlife/my_xml/f788547e7661b4b6cd6078ed4f96e0ad_water__c3_w150_h100.jpg';
import ae285fb8b7c09ad7e0b1e1fbf1cf0f_water__c3_w150_h100 from '../../thum_img/kbgoldenlife/my_xml/92ae285fb8b7c09ad7e0b1e1fbf1cf0f_water__c3_w150_h100.jpg';
import bece32e9736dbf4a55581ccfca442_water__c3_w150_h100 from '../../thum_img/kbgoldenlife/my_xml/905bece32e9736dbf4a55581ccfca442_water__c3_w150_h100.jpg';
import b84572725816ae2d779fc4e19d99be9a_water__c3_w150_h100 from '../../thum_img/kbgoldenlife/my_xml/b84572725816ae2d779fc4e19d99be9a_water__c3_w150_h100.jpg';
import ee94749637822d0ce48819c9d524ebe6_water__c3_w150_h100 from '../../thum_img/kbgoldenlife/my_xml/ee94749637822d0ce48819c9d524ebe6_water__c3_w150_h100.jpg';
import d20f77ff830c2b6464cf53afce7c5a65_water__c3_w150_h100 from '../../thum_img/kbgoldenlife/my_xml/d20f77ff830c2b6464cf53afce7c5a65_water__c3_w150_h100.jpg';
import ac0b7db0c7c23da4ff1f501687ebd_water__c3_w150_h100 from '../../thum_img/kbgoldenlife/my_xml/233ac0b7db0c7c23da4ff1f501687ebd_water__c3_w150_h100.jpg';
import f1d4b1639e810f0481ec6d753441afd3_water__c3_w150_h100 from '../../thum_img/kbgoldenlife/my_xml/f1d4b1639e810f0481ec6d753441afd3_water__c3_w150_h100.jpg';
import f373c212a6e476f1d90d18a2cbf394_water__c3_w150_h100 from '../../thum_img/kbgoldenlife/my_xml/59f373c212a6e476f1d90d18a2cbf394_water__c3_w150_h100.jpg';
import ab3b9b3f8bab83394d902e9e726e5d67_water__c3_w150_h100 from '../../thum_img/kbgoldenlife/my_xml/ab3b9b3f8bab83394d902e9e726e5d67_water__c3_w150_h100.jpg';
import fcc22976921b715eb71fa7d49ba84a_water__c3_w150_h100 from '../../thum_img/kbgoldenlife/my_xml/45fcc22976921b715eb71fa7d49ba84a_water__c3_w150_h100.jpg';

import sub2_2_1_map from '../../public/design/images/sub/sub2_2_1_map.jpg';
import ico_car from '../../public/design/images/sub/ico_car.png';
import ico_bus from '../../public/design/images/sub/ico_bus.png';
import ico_train from '../../public/design/images/sub/ico_train.png';
import ico_parking from '../../public/design/images/sub/ico_parking.png';

import Header2 from '@/app/component/Header2';
import Footer from '@/app/component/footer';
import Family_site from '@/app/component/family_site';
import MobileHeader from '@/app/component/mobileHeader';

const Sub03_2 = () => {
    const imgRef = useRef(null);
    const [imgHeight, setImgHeight] = useState(null);
    const sImgRef = useRef(null);
    const [sImgHeight, setSImgHeight] = useState(null);
    const [isClient, setIsClient] = useState(false);
    const [slideState, setSlideState] = useState(0);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        setImgHeight((imgHeight) => imgRef.current.offsetHeight);
    }, [imgRef]);

    useEffect(() => {
        setSImgHeight((sImgHeight) => sImgRef.current.offsetHeight);
    }, [sImgRef]);

    const clickPre = () => {
        console.log('pre');
        if (slideState === 0) setSlideState((slideState) => -1900);
        else setSlideState((slideState) => slideState + 100);
    };

    const clickNex = () => {
        console.log('nex');
        if (slideState <= -1900) setSlideState((slideState) => 0);
        else setSlideState((slideState) => slideState - 100);
    };

    return (
        <>
            <Header></Header>
            <MobileHeader></MobileHeader>
            <div id="layout_body" class="layout_sub">
                <Header2></Header2>
                <div id="container">
                    <div class="sub_con wrap">
                        <h3 class="sub_tit">강동케어센터 소개</h3>
                        <div class="sub2_1 sub03_1 new_layout">
                            <div class="sec1">
                                <div class="figure">
                                    <p>
                                        <span>KB골든라이프케어 강동케어센터</span>
                                        케어센터는 어르신이 가능한 오랫동안 집에서 일상생활을 <br />
                                        유지하실 수 있도록 자립 생활을 지원하는 목표로 합니다.
                                    </p>
                                </div>
                            </div>
                            <div class="sec2">
                                <div class="sec_tit">인사말</div>
                                <div class="contents">
                                    <div class="figure">
                                        <img src={sec03_2_1.src} />
                                    </div>
                                    <div class="dscr">
                                        <p>
                                            안녕하세요.KB골든라이프케어 강동케어센터 진현화 센터장입니다. <br />
                                            KB강동케어센터는 안전하면서 편안한 생활환경을 조성하고, 이용하시는 <br />
                                            어르신을 위한 케어서비스를 계획하고 활력과 즐거움을 드리는 프로그램을 <br />
                                            계획하여 제공해드리고 있습니다. 저희 KB강동케어센터의 장점을 지켜 <br />
                                            우리 어르신들께서 보다 쾌적한 환경과 질 높은 서비스를 이용하시기에 <br />
                                            즐겁고 편안한 안식처가 될 수 있도록 열심히 노력하겠습니다. <br />
                                            또한, KB강동케어센터를 이용하시는 어르신들께서 따뜻함 속에서
                                            <br />
                                            생활하시도록 아름다운 노후에 동행하는 센터가 되도록 최선을 다하겠습니다.{' '}
                                            <br />
                                            항상 변함없이 KB강동케어센터를 사랑해주시고 이용해주시는 <br />
                                            어르신들과 가족분들께 깊은 감사의 말씀을 드리며, 건강과 행복을 기원드립니다.
                                            <br />
                                            <span class="blank"></span>
                                        </p>
                                        <p class="ct_name">
                                            <img src={ct_name.src} />
                                            센터장 <strong>진현화</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="dr_area">
                                <div class="title">
                                    <p>강동케어센터의 미션과 비전</p>
                                </div>
                                <div class="container">
                                    <ul>
                                        <li class="li">
                                            <div class="top_box">
                                                <img src={mission_icon.src} />
                                                <p>MISSION</p>
                                            </div>
                                            <div class="bottom_box">
                                                <p>
                                                    <span>고객이 최대한 오래 가족과 함께</span>
                                                    <span>집에서 생활할 수 있도록 지원한다</span>
                                                </p>
                                            </div>
                                        </li>
                                        <li class="plus">
                                            <img src={_icon.src} />
                                        </li>
                                        <li class="li">
                                            <div class="top_box">
                                                <img src={vision_icon.src} />
                                                <p>VISION</p>
                                            </div>
                                            <div class="bottom_box">
                                                <p>
                                                    <span>강동구 주민들이 가장 이용하고 싶어지는 기관,</span>
                                                    <span>만족도 1위 기관</span>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="sec4">
                                <h4 class="sec_tit">강동케어센터의 특징</h4>
                                <ul class="orange">
                                    <li>
                                        <div>
                                            <div className="txt">
                                                <div>
                                                    <strong>
                                                        <span>01.</span>
                                                        <p>
                                                            {'"'}편안한 생활공간{'"'}
                                                        </p>
                                                    </strong>
                                                    <p>
                                                        멋진 전망과 통창으로 들어오는 <br />
                                                        햇살이 있는 편안한 생활공간 입니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="txt">
                                                <div>
                                                    <strong>
                                                        <span>02.</span>
                                                        <p>
                                                            {'"'}맞춤 케어서비스{'"'}
                                                        </p>
                                                    </strong>
                                                    <p>
                                                        케어플랜, 전문가를 통한 <br />
                                                        맞춤케어서비스를 제공합니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="txt">
                                                <div>
                                                    <strong>
                                                        <span>03.</span>
                                                        <p>
                                                            {'"'}활력과 즐거운 <br />
                                                            프로그램{'"'}
                                                        </p>
                                                    </strong>
                                                    <p>
                                                        전문적이고 다양한 프로그램으로 <br />
                                                        즐거운 하루를 보내실 수 있도록 지원합니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div class="center_slide">
                                <div>
                                    <div id="bx-slider">
                                        <div class="bx-wrapper">
                                            <div
                                                class="bx-viewport"
                                                style={{
                                                    width: '100%',
                                                    overflow: 'hidden',
                                                    position: 'relative',
                                                    height: imgHeight,
                                                }}
                                            >
                                                <ul class="bxslider">
                                                    {' '}
                                                    <li style={{ transform: `translate(0, ${slideState}% )` }}>
                                                        <a>
                                                            <img src={care_center011490590851.src} alt="" />
                                                        </a>
                                                    </li>
                                                    <li style={{ transform: `translate(0, ${slideState}% )` }}>
                                                        <a>
                                                            <img src={bg_movie.src} />
                                                            <iframe
                                                                width="100%"
                                                                height="100%"
                                                                src="https://www.youtube.com/embed/h7NTnsnsjXU?version=2&amp;autoplay=0&amp;loop=1&amp;showinfo=0&amp;rel=0"
                                                                frameborder="0"
                                                                allowfullscreen
                                                            ></iframe>
                                                        </a>
                                                    </li>
                                                    <li style={{ transform: `translate(0, ${slideState}% )` }}>
                                                        <a>
                                                            <img ref={imgRef} src={kbeoteo.src} alt="" />
                                                        </a>
                                                    </li>
                                                    <li style={{ transform: `translate(0, ${slideState}% )` }}>
                                                        <a>
                                                            <img src={chang51487591213.src} alt="" />
                                                        </a>
                                                    </li>
                                                    <li style={{ transform: `translate(0, ${slideState}% )` }}>
                                                        <a>
                                                            <img src={kbeoteo071487586141.src} alt="" />
                                                        </a>
                                                    </li>
                                                    <li style={{ transform: `translate(0, ${slideState}% )` }}>
                                                        <a>
                                                            <img src={kbeoteo091487586131.src} alt="" />
                                                        </a>
                                                    </li>
                                                    <li style={{ transform: `translate(0, ${slideState}% )` }}>
                                                        <a>
                                                            <img src={my_xml0114875861491487925776.src} alt="" />
                                                        </a>
                                                    </li>
                                                    <li style={{ transform: `translate(0, ${slideState}% )` }}>
                                                        <a>
                                                            <img src={kbeoteo101487586126.src} alt="" />
                                                        </a>
                                                    </li>
                                                    <li style={{ transform: `translate(0, ${slideState}% )` }}>
                                                        <a>
                                                            <img src={kbeoteo131487586122.src} alt="" />
                                                        </a>
                                                    </li>
                                                    <li style={{ transform: `translate(0, ${slideState}% )` }}>
                                                        <a>
                                                            <img src={kbeoteo141487586117.src} alt="" />
                                                        </a>
                                                    </li>
                                                    <li style={{ transform: `translate(0, ${slideState}% )` }}>
                                                        <a>
                                                            <img src={kbeoteo161487586111.src} alt="" />
                                                        </a>
                                                    </li>
                                                    <li style={{ transform: `translate(0, ${slideState}% )` }}>
                                                        <a>
                                                            <img src={kbeoteo171487586106.src} alt="" />
                                                        </a>
                                                    </li>
                                                    <li style={{ transform: `translate(0, ${slideState}% )` }}>
                                                        <a>
                                                            <img src={kbeoteo191487586092.src} alt="" />
                                                        </a>
                                                    </li>
                                                    <li style={{ transform: `translate(0, ${slideState}% )` }}>
                                                        <a>
                                                            <img src={kbeoteo231487586087.src} alt="" />
                                                        </a>
                                                    </li>
                                                    <li style={{ transform: `translate(0, ${slideState}% )` }}>
                                                        <a>
                                                            <img src={kbeoteo291487586082.src} alt="" />
                                                        </a>
                                                    </li>
                                                    <li style={{ transform: `translate(0, ${slideState}% )` }}>
                                                        <a>
                                                            <img src={kbeoteo321487586077.src} alt="" />
                                                        </a>
                                                    </li>
                                                    <li style={{ transform: `translate(0, ${slideState}% )` }}>
                                                        <a>
                                                            <img src={kbeoteo331487586073.src} alt="" />
                                                        </a>
                                                    </li>
                                                    <li style={{ transform: `translate(0, ${slideState}% )` }}>
                                                        <a>
                                                            <img src={kb_center1487593553.src} alt="" />
                                                        </a>
                                                    </li>
                                                    <li style={{ transform: `translate(0, ${slideState}% )` }}>
                                                        <a>
                                                            <img src={kbeoteo371487586064.src} alt="" />
                                                        </a>
                                                    </li>
                                                    <li style={{ transform: `translate(0, ${slideState}% )` }}>
                                                        <a>
                                                            <img src={kbeoteo381487586058.src} alt="" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="bx-controls bx-has-controls-direction">
                                                <div class="bx-controls-direction">
                                                    <a class="bx-prev" onClick={() => clickPre()}>
                                                        Prev
                                                    </a>
                                                    <a class="bx-next" onClick={() => clickNex()}>
                                                        Next
                                                    </a>
                                                </div>
                                                <div class="bx-pager bx-default-pager"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="bx-pager" style={{ visibility: 'visible' }}>
                                        <div class="bx-wrapper" style={{ maxWidth: '100%' }}>
                                            <div
                                                class="bx-viewport"
                                                aria-live="polite"
                                                style={
                                                    isClient
                                                        ? window.innerWidth > 1140
                                                            ? { height: imgHeight }
                                                            : { height: sImgHeight * 2 }
                                                        : null
                                                }
                                            >
                                                <ul>
                                                    <li aria-hidden="false">
                                                        <div>
                                                            <a data-slide-index="0" href="#">
                                                                <img
                                                                    ref={sImgRef}
                                                                    src={water__c3_w150_h100.src}
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a data-slide-index="1" href="#">
                                                                <div class="ytb position_relative_overflow_hidden">
                                                                    <img src={bg_movie_thumb.src} />
                                                                    <img
                                                                        src="../../img.youtube.com/vi/h7NTnsnsjXU/0.jpg"
                                                                        alt=""
                                                                        class="position_absolute_left_0_top_20_width_100_height_140"
                                                                    />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a data-slide-index="2" href="#">
                                                                <img
                                                                    src={
                                                                        ffb21d171dae64c49fe712adee982_water__c3_w150_h100.src
                                                                    }
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a data-slide-index="3" href="#">
                                                                <img
                                                                    src={
                                                                        f8aae39e1d68f31b968a2b2320e835a_water__c3_w150_h100.src
                                                                    }
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a data-slide-index="4" href="#">
                                                                <img
                                                                    src={
                                                                        c1d799063601f53a5b7e075189c432_water__c3_w150_h100.src
                                                                    }
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a data-slide-index="5" href="#">
                                                                <img
                                                                    src={
                                                                        ccad6879ffe531cf38a51fc8598e3d5d_water__c3_w150_h100.src
                                                                    }
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a data-slide-index="6" href="#">
                                                                <img
                                                                    src={
                                                                        ee4953a26b32396d6b89e3f950418429_water__c3_w150_h100.src
                                                                    }
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a data-slide-index="7" href="#">
                                                                <img
                                                                    src={
                                                                        a7b894f6d896c329abd88de25d627e3d_water__c3_w150_h100.src
                                                                    }
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a data-slide-index="8" href="#">
                                                                <img
                                                                    src={
                                                                        e8c430b3d784ec56e9de4fd6ff55cce_water__c3_w150_h100.src
                                                                    }
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a data-slide-index="9" href="#">
                                                                <img
                                                                    src={
                                                                        f788547e7661b4b6cd6078ed4f96e0ad_water__c3_w150_h100.src
                                                                    }
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li aria-hidden="true">
                                                        <div>
                                                            <a data-slide-index="10" href="#">
                                                                <img
                                                                    src={
                                                                        ae285fb8b7c09ad7e0b1e1fbf1cf0f_water__c3_w150_h100.src
                                                                    }
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a data-slide-index="11" href="#">
                                                                <img
                                                                    src={
                                                                        fcc22976921b715eb71fa7d49ba84a_water__c3_w150_h100.src
                                                                    }
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a data-slide-index="12" href="#">
                                                                <img
                                                                    src={
                                                                        bece32e9736dbf4a55581ccfca442_water__c3_w150_h100.src
                                                                    }
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a data-slide-index="13" href="#">
                                                                <img
                                                                    src={
                                                                        b84572725816ae2d779fc4e19d99be9a_water__c3_w150_h100.src
                                                                    }
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a data-slide-index="14" href="#">
                                                                <img
                                                                    src={
                                                                        ee94749637822d0ce48819c9d524ebe6_water__c3_w150_h100.src
                                                                    }
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a data-slide-index="15" href="#">
                                                                <img
                                                                    src={
                                                                        d20f77ff830c2b6464cf53afce7c5a65_water__c3_w150_h100.src
                                                                    }
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a data-slide-index="16" href="#">
                                                                <img
                                                                    src={
                                                                        ac0b7db0c7c23da4ff1f501687ebd_water__c3_w150_h100.src
                                                                    }
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a data-slide-index="17" href="#">
                                                                <img
                                                                    src={
                                                                        f1d4b1639e810f0481ec6d753441afd3_water__c3_w150_h100.src
                                                                    }
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a data-slide-index="18" href="#">
                                                                <img
                                                                    src={
                                                                        f373c212a6e476f1d90d18a2cbf394_water__c3_w150_h100.src
                                                                    }
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a data-slide-index="19" href="#">
                                                                <img
                                                                    src={
                                                                        ab3b9b3f8bab83394d902e9e726e5d67_water__c3_w150_h100.src
                                                                    }
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="bx-controls bx-has-controls-direction bx-has-pager">
                                                <div class="bx-controls-direction">
                                                    <a class="bx-prev">Prev</a>
                                                    <a class="bx-next">Next</a>
                                                </div>
                                                <div class="bx-pager bx-default-pager">1/2</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="center_notice">
                                <h2>센터 공지사항</h2>
                                <div class="notice_list">
                                    <ul>
                                        <li>
                                            <div>
                                                <a href="../bbs_shop/read97c7.html?board_code=sub05_1&amp;idx=18116&amp;cate_sub_idx=41080">
                                                    [오늘의 식단] 2024년 09월 11일 중식
                                                </a>
                                                <span class="date">2024-09-11</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <a href="../bbs_shop/read1ba6.html?board_code=sub05_1&amp;idx=18066&amp;cate_sub_idx=41080">
                                                    [오늘의 식단] 2024년 09월 05일 중식{' '}
                                                </a>
                                                <span class="date">2024-09-05</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <a href="../bbs/sub1_4.html" class="more">
                                    더보기
                                </a>
                            </div>
                            <div class="banners">
                                <ul>
                                    <li>
                                        <div>강동케어센터(주·야간 보호센터) 02-2135-5465</div>
                                    </li>
                                    <li>
                                        <div>
                                            <a href="../bbs/sub2_3_1.html">강동케어센터 상담신청</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div class="sec4">
                                <h4 class="sec_tit">시설개요</h4>
                                <div class="table_wrap">
                                    <table>
                                        <colgroup>
                                            <col width="20%" />
                                            <col width="*" />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <th>시설명</th>
                                                <td>KB 골든라이프케어 강동케어센터</td>
                                            </tr>
                                            <tr>
                                                <th>주소</th>
                                                <td>서울시 강동구 강동대로 143-52 6층 (성내동)</td>
                                            </tr>
                                            <tr>
                                                <th>개원일</th>
                                                <td>2017.01.02</td>
                                            </tr>
                                            <tr>
                                                <th>시설정원</th>
                                                <td>49명</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="sec4">
                                <h4 class="sec_tit">이용안내</h4>
                                <div class="table_wrap">
                                    <table>
                                        <colgroup>
                                            <col width="20%" />
                                            <col width="*" />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <th>이용자격</th>
                                                <td>
                                                    - 노인장기요양보험 등급 판정 어르신
                                                    <br />- 노인장기요양등급이 없더라도 일상생활 수행에 도움이 필요하신
                                                    어르신
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>이용절차</th>
                                                <td>
                                                    이용상담<span class="arr"></span>이용신청서 작성
                                                    <span class="arr"></span>이용계약<span class="arr"></span>서비스개시
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>이용비용</th>
                                                <td>
                                                    - 장기요양 총급여비에 대하여 공단부담금 85%, 본인부담금 15%
                                                    <br />
                                                    - 식사비, 간식비 등 비급여는 본인 부담
                                                    <br />* 이용 비용은 등급, 이용 시간, 이용일, 경감 여부 등에 따라
                                                    다르므로 상담을 통해 안내 받으시기 바랍니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>운영시간</th>
                                                <td>월~금 : 오전8시 ~오후10시 / 토요일 : 오전 8시~오후6시</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="sub3_3">
                                    <div class="btn_group">
                                        <a
                                            href="https://admin.kbgoldenlifecare.co.kr/waitsystem?oid=KDC"
                                            target="_blank"
                                        >
                                            대기접수 신청 ㆍ 대기순번 확인하기
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="sec5">
                                <h4 class="sec_tit">오시는길</h4>
                                <div class="contents clr">
                                    <div class="dis_table">
                                        <div class="dis_th">KB골든라이프케어 강동케어센터</div>
                                        <div class="dis_td">서울시 강동구 강동대로 143-52 6층</div>
                                    </div>
                                    <div class="figure">
                                        <img src={sub2_2_1_map.src} alt="오시는길" />
                                    </div>
                                    <div class="dscr">
                                        <dl>
                                            <dt>
                                                <img src={ico_car.src} alt="자가용" />
                                            </dt>
                                            <dd>
                                                <p>
                                                    <strong>자가용 이용시</strong>
                                                    잠실방면 : 천호동 방면으로 오시다가 풍납사거리에서 우회전
                                                    <br />
                                                    천호동 방면 : 잠실방면으로 오시다가 풍납사거리에서 좌회전
                                                    <br />
                                                    올림픽대로 이용시 : 올림픽대교 남단 사거리 좌회전 후 풍납사거리에서
                                                    우회전
                                                    <br />
                                                    고속도로 이용시 : 서울외곽순환도로 서하남 IC에서 나온 후 3Km직진
                                                </p>
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>
                                                <img src={ico_bus.src} alt="버스" />
                                            </dt>
                                            <dd>
                                                <p>
                                                    <strong>버스 이용시</strong>
                                                    파란버스 : 340, 341, 342
                                                    <br />
                                                    초록버스 : 3212,3214,3220,3318,3319,3411
                                                    <br />
                                                    일반버스 : 16,30,30-1,30-3,70,112,112-1,112-5
                                                </p>
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>
                                                <img src={ico_train.src} alt="지하철" />
                                            </dt>
                                            <dd>
                                                <p>
                                                    <strong>지하철 이용시</strong>
                                                    8호선 강동구청역 ③번 출구
                                                    <br />
                                                    3번 출구에서 직진 200m(도보5분 거리)
                                                    <br />
                                                    2호선 잠실역에서 8호선으로 환승 후 강동구청역 하차
                                                    <br />
                                                    5호선 천호역에서 8호선으로 환승 후 강동구쳥역 하차
                                                </p>
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>
                                                <img src={ico_parking.src} alt="주차안내" />
                                            </dt>
                                            <dd>
                                                <p>
                                                    <strong>주차안내</strong>
                                                    지하 주차장 주차 가능, 주차비 1시간무료, 시간당 1,000원
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
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

export default Sub03_2;
