import localFont from "next/font/local";
import "./main.css";
import Head from 'next/head';
// import $ from 'jquery';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>kbgoldenlifecare개발2일차</title>
        <link rel="shortcut icon" href="./img_up/shop_pds/kbgoldenlife/etc/kbgoldenlife1487641368.ico" />
        {/* <script type="text/javascript" src="./img_up/_addon/jquery/1.11.3/jquery.min.js"></script> */}
        {/* <link rel="stylesheet" href="css/head_basic.css" type="text/css" media="all" />
        <link rel="stylesheet" href="css/head_logout.css" type="text/css" media="all" /> */}
        {/* <script type="text/javascript"></script> 
        <script type="text/javascript" src="./js/all_defaultbcfe.js?v=22"></script>
        <script type="text/javascript"></script>
        <script type="text/javascript" src="./img_up/shop_pds/kbgoldenlife/etc/navi_category_all.js"></script>
        <script type="text/javascript" src="./img_up/shop_pds/kbgoldenlife/etc/goods_category_all.js"></script>
        <script type="text/javascript" src="./img_up/shop_pds/kbgoldenlife/etc/board_list.js"></script>
        <script type="text/javascript" src="./js/all_default2.js"></script>
        <script type="text/javascript" src="./js/google_map840f.js?ver=10"></script>
        <script type="text/javascript" src="./js/load_frame77ae.js?ver=2"></script>
        <script type="text/javascript" src="./js/head_logout.js"></script>
        <script type="text/javascript" id='./naver_map_js' ></script>
        <script type="text/javascript" id='./dynamic_js' ></script>
        <script src="./img_up/shop_pds/kbgoldenlife/design/js/jquery.bxslider-rahisified.js"></script>
        <script src="../mattstow.com/experiment/responsive-image-maps/jquery.rwdImageMaps.min.js"></script> */}

        <link rel="stylesheet" href="../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css"/>  
        {/* <script src="../cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script><script type="text/javascript" src="img_up/_addon/_plugin/FlexSlider/2.5.0/jquery.flexslider-min.js"></script> */}
        {/* <link rel="stylesheet" type="text/css" href="img_up/shop_pds/kbgoldenlife/src_css/c_slides.css" />
        <link rel="stylesheet" type="text/css" href="img_up/shop_pds/kbgoldenlife/src_css/a_reset.css" />
        <link rel="stylesheet" type="text/css" href="img_up/shop_pds/kbgoldenlife/src_css/fonts.css" />
        <link rel="stylesheet" type="text/css" href="img_up/shop_pds/kbgoldenlife/src_css/b_style.css" />
        <link rel="stylesheet" type="text/css" href="img_up/shop_pds/kbgoldenlife/src_css/ds_style.css" /> */}
        {/* <script type="text/javascript"></script> */}
        {/* <script type="text/javascript" src="../tradingworks-scripts.s3.ap-northeast-1.amazonaws.com/js/igw-tw-web-min-v1.8.js"></script> */}
        {/* <script type="text/javascript"> */}
            {/* IGATrackingPush(); */}
        {/* </script> */}
      </head>
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
      <body>
        {children}
      </body>
    </html>
  );
}
