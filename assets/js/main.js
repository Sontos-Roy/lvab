$(document).ready(function(){
  filterBtn2(); 
  Dropdowns();
  
});


function Dropdowns(){
  $('.dp-menu-sm > a.nav-link').click(function(e){
    e.preventDefault();
    $(this).parent('.dp-menu-sm').find('.sub-menu-sm').stop().slideToggle('fast');
  });
  $('.nav-toggler').click(function(){
    $('.sidebar').addClass('open');
    $('.overlay-side').stop().fadeIn();
  });
  $('.overlay-side').click(function(){
    $('.sidebar').removeClass('open');
    $(this).stop().fadeOut();
  });

  $('.sidebar .navbar-nav .submenu').click(function(){
    $(this).find('a').click(function(e){
      e.preventDefault;
    })
    $(this).toggleClass('active');
    $(this).find('.submenu-content').slideToggle();
  })
  
}

function filterBtn2(){
  $('#tabs-filter .btn').on('click', function(){
    let category = $(this).attr('filter-id');
    
    if (category == 'all') {
      $('.tab-filter-box .gal-cont').show();
    } else {
      $('.tab-filter-box .gal-cont').hide();
      $('.tab-filter-box .gal-cont.' + category).show();
    }
  });
}



$(document).scroll(function(){

  var scroll_pos = $(window).scrollTop()
if(scroll_pos > 200){
  $("#scroll-top").fadeIn("medium");
  $("#scroll-top").on("click", function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });

}else{
$("#scroll-top").fadeOut("medium");
}
});



Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs : {
    type: "classic"
  }
});  

