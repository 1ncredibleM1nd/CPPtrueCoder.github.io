$(document).ready(function(){
  $('.carousel').bxSlider({responsive: true,touchEnabled:true,pager:true,    auto:true,  speed: 600} );

});
$(document).ready(function(){
  $('.testimonials_container').bxSlider({responsive: true,touchEnabled:true,pager:true,    auto:true,  speed: 1000} );

});


new WOW().init();


let iter=0;
$('#showall').click(function() {
iter++;
 let x =document.getElementById('container'+iter);
if (x.className==="hiden"){
	x.classList.remove("hiden");
	x.classList.add("portfolio_container");

}
if(iter==3){
	let y= document.getElementById('showall');
	y.classList.add("button_hide");
}
});



