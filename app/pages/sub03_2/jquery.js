// import $ from 'jquery';
// // import 'bxslider/dist/jquery.bxslider.min.js';
// // import 'bxslider/dist/jquery.bxslider.css';

// export default $(function slider() {
//     var slider = $('.bxslider').bxSlider({
//         auto: true,
//         pagerCustom: '#bx-pager',
//         onSlideBefore: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
//             $('.active-slide').removeClass('active-slide');
//             $('#bx-pager li a[data-slide-index = "' + currentSlideHtmlObject + '"]').addClass('active-slide');
//             if (currentSlideHtmlObject > 9) {
//                 thumbSlider.goToSlide(1);
//             } else {
//                 thumbSlider.goToSlide(0);
//             }
//         },
//         onSliderLoad: function () {
//             $('#bx-pager li a[data-slide-index = "0"]').addClass('active-slide');
//         },
//     });
//     var thumbSlider = $('#bx-pager ul').bxSlider({
//         pager: true,
//         pagerType: 'short',
//         pagerShortSeparator: '/',
//         onSliderLoad: function () {
//             $('#bx-pager').css('visibility', 'visible');
//         },
//     });
// });
