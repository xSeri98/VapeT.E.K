$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

  $(window).load(function() {
    $(document).ready(function() {
    $('#imageGallery').lightSlider({
        gallery:false,
        item:1,
        loop:true,
        slideMargin:0,
        auto:true,
        pause: 10000,
        enableDrag: false,
        currentPagerPosition:'left'  
    });  
  });
});    