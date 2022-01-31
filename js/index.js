$(function () {

  $(window).scroll(function() {
    $('header').css({left: 0 - $(this).scrollLeft()});
    $('.footer_bg_wrap').css({left: 0 - $(this).scrollLeft()});
  });

  const showAnim = gsap.from('header', { 
    yPercent: -200,
    paused: true,
    duration: 0.5
  }).progress(1);
  
  ScrollTrigger.create({
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    },
  });

  $('.notification .close_btn').click(function(e){
    e.preventDefault();
    $('.notification_wrap').remove();
  });


  const bannerSwiper = new Swiper(".bannerSwiper", {
    effect: "fade",
    grabCursor: false,
    loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: true
    // },
    navigation: {
      nextEl: ".banner-btn-next",
      prevEl: ".banner-btn-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });
  
  bannerSwiper.on('slideChangeTransitionStart', function () {
    $('.bannerSwiper .swiper-slide').removeClass('on');
    aniTxt01();
  });

  bannerSwiper.on('slideChangeTransitionEnd', function () {
    $('.bannerSwiper .swiper-slide').addClass('on');
  });
  
  function aniTxt01(){
    txtMotion = gsap.from('.bannerSwiper .swiper-slide-active .split_text',{
      yPercent:120,
      rotation:12,
      opacity:0,
      stagger:0.3,
      duration:1
    });
    txtMotion = gsap.from('.bannerSwiper .swiper-slide-active .txt_wrap p',{
      yPercent:120,
      opacity:0,
      duration:1,
      delay:1,
    });
    txtMotion = gsap.from('.bannerSwiper .swiper-slide-active .btn',{
      yPercent:120,
      opacity:0,
      duration:1,
      delay:1.5,
    });
  }
  aniTxt01();


  $('.aniTxt02').each(function(index, item) {
    el = $(this).find('.split_text');
    gsap.from(el, {
      scrollTrigger:{
        trigger: item,
        start:"top 50%", // element-start browser-start
        //end:"bottom top",
        //markers: true
      },  
      yPercent:120,
      rotation:12,
      opacity:0,
      stagger:0.3,
      duration:1,
    });
  });


const menusSwiper = new Swiper(".menusSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 60,
    scrollbar: {
      el: ".menus-scrollbar",
      hide: false,
    },
    navigation: {
      nextEl: ".menus-btn-next",
      prevEl: ".menus-btn-prev",
    },
  });

  $('.staggerMotion').each(function(index, item){ 
    el = $(this).find('.swiper-slide');
    gsap.from(el, {
      scrollTrigger:{
        trigger: item,
        start:"top 50%", // element-start browser-start
      },  
      opacity: 0,
      yPercent: 50,
      stagger: 0.1,
      duration: 1,
    });
  });

  $('.txtMotion').each(function(index, item) {
    el = $(this).find('*');
    gsap.from(el, {
      scrollTrigger:{
        trigger: item,
        start:"top 50%", // element-start browser-start
      },  
      opacity: 0,
      yPercent: 50,
      stagger: 0.1,
      duration: 1,
    });
  });

  $('.imgMotion').each(function(index, item) {
    if($(this).hasClass('right')) {

      gsap.from(item, {
        scrollTrigger:{
          trigger: item,
          start:"top 100%", // element-start browser-start
          end:"50% 50%",
          scrub: 1,
        },  
        opacity: 0,
        rotation:30,
        xPercent: -5,
        yPercent:50,
        stagger: 0.1,
        duration: 1,
      });
    }
    else{
      gsap.from(item, {
        scrollTrigger:{
          trigger: item,
          start:"top 100%", // element-start browser-start
          end:"50% 50%",
          scrub: 1,
        },  
        opacity: 0,
        rotation:-30,
        xPercent: 5,
        yPercent:50,
        stagger: 0.1,
        duration: 1,
      });
    }
  });

  gsap.to('.marquee_left', {
    scrollTrigger :{
      trigger: '.footer_marquee',
      start:"-10% bottom",
      end:"bottom bottom",
      scrub: 1,
    },
    xPercent: 60,
  });
  gsap.to('.marquee_right', {
    scrollTrigger :{
      trigger: '.footer_marquee',
      start:"-10% bottom",
      end:"bottom bottom",
      scrub: 1,
    },
    xPercent: -60,
  });

  //footer_banner 
    gsap.from('.footer_banner .txt_wrap .split_text, .footer_banner .txt_wrap .split_span,  .footer_banner .txt_wrap .btn', {
      scrollTrigger:{
        trigger: '.footer_bg_wrap',
        start:"top top", // element-start browser-start
        end: "+=1500",
        scrub: 1,
        pin: ".footer_bg_wrap",
        pinSpacing: false,
        anticipatePin: true,
      }, 
      yPercent:100,
      rotation:12,
      opacity:0,
      stagger:0.3,
      duration:1
    });
    gsap.from('.footer_bg img', {
      scrollTrigger:{
        trigger: '.footer_bg_wrap',
        start:"top top", // element-start browser-start
        end: "+=1500",
        scrub: 1,
        pin: ".footer_bg_wrap",
      }, 
      scale: 1.3,
    });

    gsap.from('.footer_banner .footer_banner_img', {
      scrollTrigger:{
        trigger: '.footer_bg_wrap',
        start:"top top", // element-start browser-start
        end: "+=1500",
        scrub: 1,
        pin: ".footer_bg_wrap",
      },  
      //scale: 1.3,
      yPercent:50,
      rotation:12,
      opacity:0,
      stagger:0.3,
      duration:1
    });


  $('.fadeInMotion').each(function(index, item) {
    el = $(this).find('.motionApply');
    gsap.from(el, {
      scrollTrigger:{
        trigger: item,
        start:"-15% 10%", // element-start browser-start
      },  
      opacity: 0,
      yPercent: 50,
      duration: 1.5,
    });
  });


const monthSwiper = new Swiper(".monthSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 60,
    scrollbar: {
      el: ".month-scrollbar",
      hide: false,
    },
    navigation: {
      nextEl: ".month-btn-next",
      prevEl: ".month-btn-prev",
    },
  });

  function imgRotatePrev(image, image_odd){
    $('.imgRotate').each(function(index, item) {
      el = $(this).find(image);
      el_2 = $(this).find(image_odd);
      gsap.to(el, {
        rotate: 2,
        duration: 0.3,
      });
      gsap.to(el_2, {
        rotate: -2,
        duration: 0.3,
      })
    });
  }
imgRotatePrev('.swiper-slide .img_wrap .image', '.swiper-slide.is_odd .img_wrap .image');
  function imgRotateNext(image, image_odd){
    $('.imgRotate').each(function(index, item) {
      el = $(this).find(image);
      el_2 = $(this).find(image_odd);
      gsap.to(el, {
        rotate: -2,
        duration: 0.3,
      });
      gsap.to(el_2, {
        rotate: 2,
        duration: 0.3,
      })
    });
  }

monthSwiper.on('slideNextTransitionStart', function() {
  if($('.swiper-slide .img_wrap').hasClass('on')) {
    $('.swiper-slide .img_wrap, .swiper-slide.is_odd .img_wrap').removeClass('on');
    imgRotatePrev('.swiper-slide .img_wrap .image', '.swiper-slide.is_odd .img_wrap .image');
  }
  else{
    $('.swiper-slide .img_wrap, .swiper-slide.is_odd .img_wrap').addClass('on');
    imgRotateNext('.swiper-slide .img_wrap .image', '.swiper-slide.is_odd .img_wrap .image' );
  }
  
});
monthSwiper.on('slidePrevTransitionStart', function() {
  if($('.swiper-slide .img_wrap').hasClass('on')) {
    $('.swiper-slide .img_wrap, .swiper-slide.is_odd .img_wrap').removeClass('on');
    imgRotatePrev('.swiper-slide .img_wrap .image', '.swiper-slide.is_odd .img_wrap .image');
  }
  else{
    $('.swiper-slide .img_wrap, .swiper-slide.is_odd .img_wrap').addClass('on');
  imgRotateNext('.swiper-slide .img_wrap .image', '.swiper-slide.is_odd .img_wrap .image' );
  }
  
});



const flavourSwiper = new Swiper(".flavourSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 60,
  });


const productsSwiper = new Swiper(".productsSwiper", {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    slidesPerGroup: 1,
    speed: 500,
    paginationClickable: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".products-btn-next",
      prevEl: ".products-btn-prev",
    },
  });


  const readySwiper = new Swiper(".readySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 100,
  });
  

$('.recipes_hover').hover(function() {
  $('.menu_recipes').stop().css({
    visibility: 'visible'
  });
}, function() {
  $('.menu_recipes').stop().css({
    visibility: 'hidden'
  });
});



// function swiperMotion() {
//   const swiperLength = $('weeksSwiper .swipper-wrapper').length;
//   const swiperIndex = $('weeksSwiper .weeks-slide').index();
//   for(i = 0; i <= swiperLength; i++) {
//     if(i%2 === swiperIndex){
//       console.log('adfs');
//       $('.weeks-slide a .img_wrap .image.on').addClass('on');
//     }
//     else{
//       $('.weeks-slide a .img_wrap .image.on').removeClass('on');
//     }
//   }
// }


// $('.weeksSwiper .swiper_controls .weeks-btn-next').click(function() {
//   swiperMotion();
// });


}); //end