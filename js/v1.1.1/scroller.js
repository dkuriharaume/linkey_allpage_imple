const $testElement = $('body');
const $button = $('#vel_button');
const menuHeight = $(".smart-scroll").outerHeight();
$("#scrbtn_scenes").click(()=>{
    const height = $("#scenes").offset().top - menuHeight;
    $("html").animate({scrollTop: height},500)
});
$("#scrbtn_points").click(()=>{
    const height = $("#points").offset().top - menuHeight;
    $("html").animate({scrollTop: height},500)
});
$("#scrbtn_fl").click(()=>{
    const height = $("#finelife").offset().top - menuHeight;
    $("html").animate({scrollTop: height},500)
});
$("#scrbtn_wu").click(()=>{
    const height = $("#whyus").offset().top - menuHeight;
    $("html").animate({scrollTop: height},500)
});
$("#scrbtn_plans").click(()=>{
    const height = $("#plans").offset().top - menuHeight;
    $("html").animate({scrollTop: height},500)
});
$("#scrbtn_top").click(()=>{
    const height = $("#hero").offset().top - menuHeight;
    $("html").animate({scrollTop: height},500)
});
$("#scrbtn_cases").click(()=>{
    const height = $("#cases").offset().top - menuHeight;
    $("html").animate({scrollTop: height},500)
});


