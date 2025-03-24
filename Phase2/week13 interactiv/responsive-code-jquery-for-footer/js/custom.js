


let plus = $(".footer-link-wrapper h3");
plus.on("click", function () {
if ($(window).width()< 768){
$(this).next('ul').slidetoggle();
$(this).toggleclass('expanded');
}})
console.log($(window).width());
$(window).on('resize',function (){
location.reload();
})
