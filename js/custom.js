// $(document).scroll(function() {
//     var y = $(document).scrollTop(), //get page y value 
//     sticky = $("#my_sticky");
//     boundTarget= $("#sticky_bound_target");
//     var sticky_orig_offsetTop;
//     var isStuck = false;
//     if(y>= sticky.offset().top && y <boundTarget.offset().top)
//     {
//         if(!isStuck){
//             isStuck=true;
//             sticky_orig_offsetTop = sticky.offset().top;
//             if(!sticky.hasClass("sticky-top"))
//             sticky.addClass("sticky-top");
//         }
//     } 
//     // else {
//     //     if(sticky.hasClass("sticky-top"))
//     //         sticky.removeClass("sticky-top");
//     // }
//     if(isStuck){
//         if(y >=boundTarget.offset().top||y < sticky_orig_offsetTop){
//             isStuck =false;
//             // sticky_orig_offsetTop = null;
//             if(sticky.hasClass("sticky-top"))
//                 sticky.removeClass("sticky-top");
//         }
//     }
// });