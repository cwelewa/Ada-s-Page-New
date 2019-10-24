var modal = document.getElementById('myModal');
var imgSection = document.getElementById('modalPhase');
var close = document.getElementsByClassName('closing')[0];



///
imgSection.onclick = function(){
    modal.style.display = 'block';
}

close.onclick = function(){
    modal.style.display = 'none';
}

window.oncick = function(event){
    if (event.tagert == modal){
        modal.style.display = 'none';
    }
}



var modalTwo = document.getElementById('myModalTwo');
var imgSectiontwo = document.getElementById('modalPhaseTwo');
var closeTwo = document.getElementsByClassName('closingtwo')[0];


imgSectiontwo.onclick = function(){
    modalTwo.style.display = 'block';
}
closeTwo.onclick = function(){
    modalTwo.style.display = 'none';
}
window.onclick = function(event){
    if (event.target == modalTwo){
        modalTwo.style.display = 'none;'
    }
}

//  $('.slider-for-rtl').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav'
// });
// $('.slider-nav-rtl').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });

// $('.here').slick({
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });