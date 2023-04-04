(function ($) {
  ('use strict');

  /*[ Load page ]
    ===========================================================*/
  $('.animsition').animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    loading: true,
    loadingParentElement: 'html',
    loadingClass: 'animsition-loading-1',
    loadingInner: '<div class="cp-spinner cp-meter"></div>',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ['animation-duration', '-webkit-animation-duration'],
    overlay: false,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: 'html',
    transition: function (url) {
      window.location.href = url;
    },
  });

  /*[ Back to top ]
    ===========================================================*/
  var windowH = $(window).height() / 2;

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > windowH) {
      $('#myBtn').css('display', 'flex');
    } else {
      $('#myBtn').css('display', 'none');
    }
  });

  $('#myBtn').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 300);
  });

  /*[ Select ]
    ===========================================================*/
  $('.selection-1').select2({
    minimumResultsForSearch: 20,
    dropdownParent: $('#dropDownSelect1'),
  });

  /*[ Daterangepicker ]
    ===========================================================*/
  $('.my-calendar').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    locale: {
      format: 'DD/MM/YYYY',
    },
  });

  var myCalendar = $('.my-calendar');
  var isClick = 0;

  $(window).on('click', function () {
    isClick = 0;
  });

  $(myCalendar).on('apply.daterangepicker', function () {
    isClick = 0;
  });

  $('.btn-calendar').on('click', function (e) {
    e.stopPropagation();

    if (isClick == 1) isClick = 0;
    else if (isClick == 0) isClick = 1;

    if (isClick == 1) {
      myCalendar.focus();
    }
  });

  $(myCalendar).on('click', function (e) {
    e.stopPropagation();
    isClick = 1;
  });

  $('.daterangepicker').on('click', function (e) {
    e.stopPropagation();
  });

  /*[ Play video 01]
    ===========================================================*/
  var srcOld = $('.video-mo-01').children('iframe').attr('src');

  $('[data-target="#modal-video-01"]').on('click', function () {
    $('.video-mo-01').children('iframe')[0].src += '&autoplay=1';

    setTimeout(function () {
      $('.video-mo-01').css('opacity', '1');
    }, 300);
  });

  $('[data-dismiss="modal"]').on('click', function () {
    $('.video-mo-01').children('iframe')[0].src = srcOld;
    $('.video-mo-01').css('opacity', '0');
  });

  /*[ Fixed Header ]
    ===========================================================*/
  var header = $('header');
  var logo = $(header).find('.logo img');
  var linkLogo1 = $(logo).attr('src');
  var linkLogo2 = $(logo).data('logofixed');

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 5 && $(this).width() > 992) {
      $(logo).attr('src', linkLogo2);
      $(header).addClass('header-fixed');
    } else {
      $(header).removeClass('header-fixed');
      $(logo).attr('src', linkLogo1);
    }
  });

  /*[ Show/hide sidebar ]
    ===========================================================*/
  $('body').append('<div class="overlay-sidebar trans-0-4"></div>');
  var ovlSideBar = $('.overlay-sidebar');
  var btnShowSidebar = $('.btn-show-sidebar');
  var btnHideSidebar = $('.btn-hide-sidebar');
  var sidebar = $('.sidebar');

  $(btnShowSidebar).on('click', function () {
    $(sidebar).addClass('show-sidebar');
    $(ovlSideBar).addClass('show-overlay-sidebar');
  });

  $(btnHideSidebar).on('click', function () {
    $(sidebar).removeClass('show-sidebar');
    $(ovlSideBar).removeClass('show-overlay-sidebar');
  });

  $(ovlSideBar).on('click', function () {
    $(sidebar).removeClass('show-sidebar');
    $(ovlSideBar).removeClass('show-overlay-sidebar');
  });

  /*[ Isotope ]
    ===========================================================*/
  var $topeContainer = $('.isotope-grid');
  var $filter = $('.filter-tope-group');

  // filter items on button click
  $filter.each(function () {
    $filter.on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $topeContainer.isotope({ filter: filterValue });
    });
  });

  // init Isotope
  $(window).on('load', function () {
    var $grid = $topeContainer.each(function () {
      $(this).isotope({
        itemSelector: '.isotope-item',
        percentPosition: true,
        animationEngine: 'best-available',
        masonry: {
          columnWidth: '.isotope-item',
        },
      });
    });
  });

  var labelGallerys = $('.label-gallery');

  $(labelGallerys).each(function () {
    $(this).on('click', function () {
      for (var i = 0; i < labelGallerys.length; i++) {
        $(labelGallerys[i]).removeClass('is-actived');
      }

      $(this).addClass('is-actived');
    });
  });

  var menuContainer = $('.menu-container');
  const menuData = [
    { name: 'Súp cua hạt sen', price: 200, menu: 1 },
    { name: 'Nem nướng + chả giò + gỏi củ lai dừa', price: 450, menu: 1 },
    { name: 'Nai né', price: 300, menu: 1 },
    { name: 'Tai tượng chiên', price: 350, menu: 1 },
    { name: 'Lẩu cá bớp', price: 500, menu: 1 },
    { name: 'Rau câu', price: 80, menu: 1 },

    { name: 'Chả giò + gỏi sen', price: 300, menu: 2 },
    { name: 'Mực xào', price: 350, menu: 2 },
    { name: 'Bò nấu tiêu bánh mì', price: 350, menu: 2 },
    { name: 'Đà điểu lúc lắc', price: 350, menu: 2 },
    { name: 'Lẩu thái hải sản', price: 400, menu: 2 },
    { name: 'Trái cây', price: 100, menu: 2 },

    { name: 'Súp măng tây', price: 200, menu: 3 },
    { name: 'Gà hấp xôi', price: 360, menu: 3 },
    { name: 'Tôm rang me', price: 400, menu: 3 },
    { name: 'Nai né', price: 300, menu: 3 },
    { name: 'Lẩu cá kèo', price: 500, menu: 3 },
    { name: 'Trái cây', price: 100, menu: 3 },

    { name: 'Gỏi giò bóp thâu', price: 350, menu: 4 },
    { name: 'Ếch chiên nước mắm', price: 300, menu: 4 },
    { name: 'Tôm hấp bia', price: 400, menu: 4 },
    { name: 'Sườn heo nấu đậu', price: 360, menu: 4 },
    { name: 'Lẩu hải sản', price: 400, menu: 4 },
    { name: 'Rau câu dừa', price: 80, menu: 4 },

    { name: 'Gỏi ngó sen + cá trứng chiên', price: 300, menu: 5 },
    { name: 'Gà hấp đông cô + xôi', price: 400, menu: 5 },
    { name: 'Nai né', price: 300, menu: 5 },
    { name: 'Tai tượng chiên', price: 350, menu: 5 },
    { name: 'Lẩu thái', price: 400, menu: 5 },
    { name: 'Rau câu trái dừa', price: 170, menu: 5 },

    { name: 'Súp tôm trứng cút', price: 200, menu: 6 },
    { name: 'Gỏi dừa tôm thịt', price: 300, menu: 6 },
    { name: 'Thát lát hấp nấm kim', price: 420, menu: 6 },
    { name: 'Bò nấu tiêu + bánh mì', price: 300, menu: 6 },
    { name: 'Lẩu gà lá giang', price: 500, menu: 6 },
    { name: 'Chè nhãn lục', price: 200, menu: 6 },

    { name: 'Súp bắp cua hạt sen', price: 200, menu: 7 },
    { name: 'Đà điểu né', price: 350, menu: 7 },
    { name: 'Gà hấp + xôi', price: 360, menu: 7 },
    { name: 'Chép giòn om dưa', price: 560, menu: 7 },
    { name: 'Lẩu thái', price: 400, menu: 7 },
    { name: 'Rau câu ca cao', price: 180, menu: 7 },

    { name: 'Khai vị Phúc Lộc Thọ', price: 500, menu: 8 },
    { name: 'Gỏi gà xe phay', price: 360, menu: 8 },
    { name: 'Mực hấp hành gừng', price: 350, menu: 8 },
    { name: 'Cá lóc hấp bầu', price: 300, menu: 8 },
    { name: 'Lẩu cá tầm măng chua', price: 500, menu: 8 },
    { name: 'Bánh flan', price: 110, menu: 8 },

    { name: 'Gỏi gà xe phay', price: 460, menu: 9 },
    { name: 'Giò heo muối chiên giòn', price: 460, menu: 9 },
    { name: 'Thát lát hấp kim châm', price: 420, menu: 9 },
    { name: 'Bò nấu đậu + bánh mì', price: 360, menu: 9 },
    { name: 'Lẩu thái hải sản', price: 400, menu: 9 },
    { name: 'Rau câu thái', price: 150, menu: 9 },

    { name: 'Gỏi nấm tuyết + chả giò', price: 350, menu: 10 },
    { name: 'Gà hấp + xôi', price: 360, menu: 10 },
    { name: 'Cá chẽm chưng tương', price: 360, menu: 10 },
    { name: 'Tôm càng nướng', price: 750, menu: 10 },
    { name: 'Lẩu ếch', price: 400, menu: 10 },
    { name: 'Dưa lưới Nhật', price: 210, menu: 10 },

    { name: 'Gỏi bò bóp thâu', price: 350, menu: 11 },
    { name: 'Dê hấp tía tô', price: 450, menu: 11 },
    { name: 'Tôm nướng 20 con', price: 600, menu: 11 },
    { name: 'Cá mú hấp', price: 680, menu: 11 },
    { name: 'Lẩu cua đồng hải sản', price: 500, menu: 11 },
    { name: 'Rau câu', price: 80, menu: 11 },

    { name: 'Súp cua tuyết nhĩ', price: 250, menu: 12 },
    { name: 'Cua lột rang muối', price: 700, menu: 12 },
    { name: 'Dê hấp tía tô', price: 450, menu: 12 },
    { name: 'Tôm sú hấp 20 con', price: 600, menu: 12 },
    { name: 'Lẩu chép giòn', price: 560, menu: 12 },
    { name: 'Chè nhãn lục hạt sen', price: 200, menu: 12 },

    { name: 'Gỏi củ dừa + mực giòn + thát lát', price: 500, menu: 13 },
    { name: 'Bê hấp rau rừng', price: 460, menu: 13 },
    { name: 'Cá mú hấp Hồng Kông', price: 580, menu: 13 },
    { name: 'Tôm sú hấp bia 20 con', price: 600, menu: 13 },
    { name: 'Lẩu cua đồng bắp bò', price: 500, menu: 13 },
    { name: 'Bánh flan', price: 110, menu: 13 },

    { name: 'Thát lát + cá trứng + nem nướng', price: 500, menu: 14 },
    { name: 'Bắp bò hoa hấp cải chua', price: 420, menu: 14 },
    { name: 'Tôm càng nướng', price: 750, menu: 14 },
    { name: 'Gà bó xôi', price: 500, menu: 14 },
    { name: 'Lẩu cá tằm', price: 560, menu: 14 },
    { name: 'Nho Mỹ', price: 180, menu: 14 },

    { name: 'Gỏi củ dừa + thát lát', price: 660, menu: 15 },
    { name: 'Bê hấp rau rừng', price: 460, menu: 15 },
    { name: 'Tôm càng nướng', price: 750, menu: 15 },
    { name: 'Gà hấp lá chanh + xôi', price: 360, menu: 15 },
    { name: 'Lẩu cá chình măng chua', price: 700, menu: 15 },
    { name: 'Bánh flan', price: 110, menu: 15 },

    { name: 'Gỏi dê tái chanh', price: 450, menu: 16 },
    { name: 'Bồ câu quay bánh bao', price: 600, menu: 16 },
    { name: 'Cá chình nướng', price: 850, menu: 16 },
    { name: 'Báp bò hầm', price: 500, menu: 16 },
    { name: 'Lẩu cua thát lát', price: 550, menu: 16 },
    { name: 'Nho Mỹ', price: 180, menu: 16 },

    {
      name: 'Gỏi sen + nem nướng + tôm chiên + mực chiên',
      price: 600,
      menu: 17,
    },
    { name: 'Tôm nướng 20 con', price: 600, menu: 17 },
    { name: 'Heo sữa quay bánh bao', price: 950, menu: 17 },
    { name: 'Heo rừng xào sả', price: 400, menu: 17 },
    { name: 'Cá chình nấu chuối', price: 700, menu: 17 },
    { name: 'Nho Mỹ', price: 180, menu: 17 },

    { name: 'Gỏi tiến vua', price: 300, menu: 18 },
    { name: 'Heo sữa quay 1/2 con', price: 950, menu: 18 },
    { name: 'Cua rang me 5 con', price: 900, menu: 18 },
    { name: 'Cá chép giòn om dưa', price: 560, menu: 18 },
    { name: 'Gà tiềm ớt hiểm', price: 600, menu: 18 },
    { name: 'Chè khúc bạch', price: 200, menu: 18 },

    {
      name: 'Tôm + mực chiên giòn + cua lột xác muối + chả giò Mayoe',
      price: 800,
      menu: 19,
    },
    { name: 'Tôm sú hấp loại lớn', price: 600, menu: 19 },
    { name: 'Gà hấp tỏi đen + xôi', price: 750, menu: 19 },
    { name: 'Cá mú hấp', price: 680, menu: 19 },
    { name: 'Bồ câu tiềm', price: 700, menu: 19 },
    { name: 'Trái cây thập cẩm', price: 100, menu: 19 },

    { name: 'Súp bào ngư', price: 500, menu: 20 },
    { name: 'Cá mú đủ chưng tương', price: 720, menu: 20 },
    { name: 'Bồ câu hấp trái dừa (10 con)', price: 1200, menu: 20 },
    { name: 'Dê ủ muối', price: 500, menu: 20 },
    { name: 'Ba ba om chuối', price: 680, menu: 20 },
    { name: 'Dưa lưới Nhật', price: 210, menu: 20 },

    { name: 'Gỏi bò ngũ sắc', price: 400, menu: 21 },
    { name: 'Cua gạch hấp', price: 920, menu: 21 },
    { name: 'Cá tầm nướng', price: 600, menu: 21 },
    { name: 'Dúi hấp', price: 1800, menu: 21 },
    { name: 'Gà nòi hầm sả', price: 600, menu: 21 },
    { name: 'Nho Mỹ', price: 180, menu: 21 },

    { name: 'Gỏi gà nguyên con', price: 360, menu: 22 },
    { name: 'Tôm càng hấp', price: 750, menu: 22 },
    { name: 'Cua 2 da hấp 10 con', price: 1800, menu: 22 },
    { name: 'Heo sữa quay bánh bao', price: 950, menu: 22 },
    { name: 'Lẩu chép giòn nấu riêu', price: 600, menu: 22 },
    { name: 'Rau câu trái dừa', price: 170, menu: 22 },

    { name: 'Súp sò điệp Nhật', price: 980, menu: 23 },
    { name: 'Cua hấp nước dừa (10 con)', price: 1800, menu: 23 },
    { name: 'Gà hấp tỏi đen', price: 750, menu: 23 },
    { name: 'Cá mú hấp Hồng Kông', price: 680, menu: 23 },
    { name: 'Lẩu kim chi bắp bò', price: 600, menu: 23 },
    { name: 'Chè nhãn lục hạt sen', price: 200, menu: 23 },

    { name: 'Súp bào ngư hải sâm', price: 980, menu: 24 },
    { name: 'Cá chình nướng', price: 850, menu: 24 },
    { name: 'Tôm càng hấp', price: 750, menu: 24 },
    { name: 'Heo sữa quay 1/2 con', price: 950, menu: 24 },
    { name: 'Lẩu cua nấu bầu (10 con)', price: 1900, menu: 24 },
    { name: 'Chè khúc bạch', price: 200, menu: 24 },
  ];

  for (let i = 0; i < menuData.length; i += 12) {
    const sumFirstMenu =
      menuData[i].price +
      menuData[i + 1].price +
      menuData[i + 2].price +
      menuData[i + 3].price +
      menuData[i + 4].price +
      menuData[i + 5].price;

    const sumSecondMenu =
      menuData[i + 6].price +
      menuData[i + 7].price +
      menuData[i + 8].price +
      menuData[i + 9].price +
      menuData[i + 10].price +
      menuData[i + 11].price;
    menuContainer.append(`
        <div class="row ${i === 0 ? 'p-t-108' : ''}">
          <div class="col-md-10 col-lg-6 p-r-35 p-r-15-lg m-l-r-auto">
            <div class="wrap-item-mainmenu p-b-22">
              <h3 class="tit-mainmenu tit10 p-b-25">MENU ${
                parseInt(i / 6) + 1
              } - (${new Intl.NumberFormat('en-DE').format(
      sumFirstMenu * 1000
    )})</h3>
              <div class="menu-note txt23">Quý khách có thể tự do chọn các món trong menu</div>
              <!-- Item mainmenu -->
              <div class="item-mainmenu m-b-24">
                <div class="flex-w flex-b m-b-3">
                  <a href="#" class="name-item-mainmenu txt21 disabled-link">
                    ${menuData[i].name}
                  </a>
                  <div class="line-item-mainmenu bg3-pattern"></div>
                  <div class="price-item-mainmenu txt22">${
                    menuData[i].price
                  }k<span>
                      <input
                        data-id="1"
                        data-name="${menuData[i].name}"
                        data-price=${menuData[i].price}
                        class="menu_checked checkbox-custom"
                        type="checkbox"
                        value=""
                      /><span class="checkbox-custom-dummy"></span>
                    </span></div>
                </div>
              </div>
              <!-- Item mainmenu -->
              <div class="item-mainmenu m-b-24">
                <div class="flex-w flex-b m-b-3">
                  <a href="#" class="name-item-mainmenu txt21 disabled-link">
                    ${menuData[i + 1].name}
                  </a>

                  <div class="line-item-mainmenu bg3-pattern"></div>

                  <div class="price-item-mainmenu txt22">${
                    menuData[i + 1].price
                  }k<span>
                      <input
                        data-id="2"
                        data-name="${menuData[i + 1].name}"
                        data-price=${menuData[i + 1].price}
                        class="menu_checked checkbox-custom"
                        type="checkbox"
                        value=""
                      /><span class="checkbox-custom-dummy"></span>
                    </span></div>
                </div>
              </div>
              <!-- Item mainmenu -->
              <div class="item-mainmenu m-b-24">
                <div class="flex-w flex-b m-b-3">
                  <a href="#" class="name-item-mainmenu txt21 disabled-link">
                    ${menuData[i + 2].name}
                  </a>

                  <div class="line-item-mainmenu bg3-pattern"></div>

                  <div class="price-item-mainmenu txt22">${
                    menuData[i + 2].price
                  }k<span>
                      <input
                        data-id="2"
                        data-name="${menuData[i + 2].name}"
                        data-price=${menuData[i + 2].price}
                        class="menu_checked checkbox-custom"
                        type="checkbox"
                        value=""
                      /><span class="checkbox-custom-dummy"></span>
                    </span></div>
                </div>
              </div>
              <!-- Item mainmenu -->
              <div class="item-mainmenu m-b-24">
                <div class="flex-w flex-b m-b-3">
                  <a href="#" class="name-item-mainmenu txt21 disabled-link">
                    ${menuData[i + 3].name}
                  </a>

                  <div class="line-item-mainmenu bg3-pattern"></div>

                  <div class="price-item-mainmenu txt22">${
                    menuData[i + 3].price
                  }k<span>
                      <input
                        data-id="2"
                        data-name="${menuData[i + 3].name}"
                        data-price=${menuData[i + 3].price}
                        class="menu_checked checkbox-custom"
                        type="checkbox"
                        value=""
                      /><span class="checkbox-custom-dummy"></span>
                    </span></div>
                </div>
              </div>
              <!-- Item mainmenu -->
              <div class="item-mainmenu m-b-24">
                <div class="flex-w flex-b m-b-3">
                  <a href="#" class="name-item-mainmenu txt21 disabled-link">
                    ${menuData[i + 4].name}
                  </a>

                  <div class="line-item-mainmenu bg3-pattern"></div>

                  <div class="price-item-mainmenu txt22">${
                    menuData[i + 4].price
                  }k<span>
                      <input
                        data-id="2"
                        data-name="${menuData[i + 4].name}"
                        data-price=${menuData[i + 4].price}
                        class="menu_checked checkbox-custom"
                        type="checkbox"
                        value=""
                      /><span class="checkbox-custom-dummy"></span>
                    </span></div>
                </div>
              </div>
              <!-- Item mainmenu -->
              <div class="item-mainmenu m-b-24">
                <div class="flex-w flex-b m-b-3">
                  <a href="#" class="name-item-mainmenu txt21 disabled-link">
                    ${menuData[i + 5].name}
                  </a>

                  <div class="line-item-mainmenu bg3-pattern"></div>

                  <div class="price-item-mainmenu txt22">${
                    menuData[i + 5].price
                  }k<span>
                      <input
                        data-id="2"
                        data-name="${menuData[i + 5].name}"
                        data-price=${menuData[i + 5].price}
                        class="menu_checked checkbox-custom"
                        type="checkbox"
                        value=""
                      /><span class="checkbox-custom-dummy"></span>
                    </span></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-10 col-lg-6 p-r-35 p-r-15-lg m-l-r-auto">
            <div class="wrap-item-mainmenu p-b-22">
              <h3 class="tit-mainmenu tit10 p-b-25">MENU ${
                parseInt(i / 6) + 2
              } - (${new Intl.NumberFormat('en-DE').format(
      sumSecondMenu * 1000
    )})</h3>
              <div class="menu-note txt23">Quý khách có thể tự do chọn các món trong menu</div>
              <!-- Item mainmenu -->
              <div class="item-mainmenu m-b-24">
                <div class="flex-w flex-b m-b-3">
                  <a href="#" class="name-item-mainmenu txt21 disabled-link">
                    ${menuData[i + 6].name}
                  </a>

                  <div class="line-item-mainmenu bg3-pattern"></div>

                  <div class="price-item-mainmenu txt22">${
                    menuData[i + 6].price
                  }k<span>
                      <input
                        data-id="2"
                        data-name="${menuData[i + 6].name}"
                        data-price=${menuData[i + 6].price}
                        class="menu_checked checkbox-custom"
                        type="checkbox"
                        value=""
                      /><span class="checkbox-custom-dummy"></span>
                    </span></div>
                </div>
              </div>

              <!-- Item mainmenu -->
              <div class="item-mainmenu m-b-24">
                <div class="flex-w flex-b m-b-3">
                  <a href="#" class="name-item-mainmenu txt21 disabled-link">
                    ${menuData[i + 7].name}
                  </a>

                  <div class="line-item-mainmenu bg3-pattern"></div>

                  <div class="price-item-mainmenu txt22">${
                    menuData[i + 7].price
                  }k<span>
                      <input
                        data-id="2"
                        data-name="${menuData[i + 7].name}"
                        data-price=${menuData[i + 7].price}
                        class="menu_checked checkbox-custom"
                        type="checkbox"
                        value=""
                      /><span class="checkbox-custom-dummy"></span>
                    </span></div>
                </div>
              </div>

              <!-- Item mainmenu -->
              <div class="item-mainmenu m-b-24">
                <div class="flex-w flex-b m-b-3">
                  <a href="#" class="name-item-mainmenu txt21 disabled-link">
                    ${menuData[i + 8].name}
                  </a>

                  <div class="line-item-mainmenu bg3-pattern"></div>

                  <div class="price-item-mainmenu txt22">${
                    menuData[i + 8].price
                  }k<span>
                      <input
                        data-id="2"
                        data-name="${menuData[i + 8].name}"
                        data-price=${menuData[i + 8].price}
                        class="menu_checked checkbox-custom"
                        type="checkbox"
                        value=""
                      /><span class="checkbox-custom-dummy"></span>
                    </span></div>
                </div>
              </div>

              <!-- Item mainmenu -->
              <div class="item-mainmenu m-b-24">
                <div class="flex-w flex-b m-b-3">
                  <a href="#" class="name-item-mainmenu txt21 disabled-link">
                    ${menuData[i + 9].name}
                  </a>

                  <div class="line-item-mainmenu bg3-pattern"></div>

                  <div class="price-item-mainmenu txt22">${
                    menuData[i + 9].price
                  }k<span>
                      <input
                        data-id="2"
                        data-name="${menuData[i + 9].name}"
                        data-price=${menuData[i + 9].price}
                        class="menu_checked checkbox-custom"
                        type="checkbox"
                        value=""
                      /><span class="checkbox-custom-dummy"></span>
                    </span></div>
                </div>
              </div>

              <!-- Item mainmenu -->
              <div class="item-mainmenu m-b-24">
                <div class="flex-w flex-b m-b-3">
                  <a href="#" class="name-item-mainmenu txt21 disabled-link">
                    ${menuData[i + 10].name}
                  </a>

                  <div class="line-item-mainmenu bg3-pattern"></div>

                  <div class="price-item-mainmenu txt22">${
                    menuData[i + 10].price
                  }k<span>
                      <input
                        data-id="2"
                        data-name="${menuData[i + 10].name}"
                        data-price=${menuData[i + 10].price}
                        class="menu_checked checkbox-custom"
                        type="checkbox"
                        value=""
                      /><span class="checkbox-custom-dummy"></span>
                    </span></div>
                </div>
              </div>

              <!-- Item mainmenu -->
              <div class="item-mainmenu m-b-24">
                <div class="flex-w flex-b m-b-3">
                  <a href="#" class="name-item-mainmenu txt21 disabled-link">
                    ${menuData[i + 11].name}
                  </a>

                  <div class="line-item-mainmenu bg3-pattern"></div>

                  <div class="price-item-mainmenu txt22">${
                    menuData[i + 11].price
                  }k<span>
                      <input
                        data-id="2"
                        data-name="${menuData[i + 11].name}"
                        data-price=${menuData[i + 11].price}
                        class="menu_checked checkbox-custom"
                        type="checkbox"
                        value=""
                      /><span class="checkbox-custom-dummy"></span>
                    </span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    `);
  }
})(jQuery);
