function slick_on_mobile(e,i){$(window).on("load resize",function(){if(!(768<$(window).width()))return e.hasClass("slick-initialized")?void 0:e.slick(i);e.hasClass("slick-initialized")&&e.slick("unslick")})}$(".slides").slick({dots:!0,arrows:!1,fade:!0,cssEase:"ease-in-out",autoplay:!0}),$(".complect-store").slick({dots:!0,arrows:!0,slidesToShow:3,slidesToScroll:3,infinite:!1,autoplay:!0,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,infinite:!1}}]}),$("#close-nav").click(function(){$(".navbar-wrapper").hide(400),$("body").removeClass("fixedPosition")}),$("#burger-menu").click(function(){event.preventDefault(),$(".navbar-wrapper").show(400)}),$("#burger-menu-foot").click(function(){event.preventDefault(),$(".navbar-wrapper").show(),$("body").addClass("fixedPosition")}),$(document).mouseup(function(e){$(".navbar-wrapper").is(e.target)||0!==$(".navbar-wrapper").has(e.target).length||($(".navbar-wrapper").hide(400),$("body").removeClass("fixedPosition"))}),$("#prev-slide").click(function(){event.preventDefault(),$("body").removeClass("fixedPosition"),$(".slides").slick("slickPrev")}),$("#next-slide").click(function(){event.preventDefault(),$(".slides").slick("slickNext")}),$("#prev-slide-store").click(function(){event.preventDefault(),$("#vapeStore").slick("slickPrev")}),$("#next-slide-store").click(function(){event.preventDefault(),$("#vapeStore").slick("slickNext")}),$("#prev-slide-complect").click(function(){event.preventDefault(),$(".complect-store").slick("slickPrev")}),$("#next-slide-complect").click(function(){event.preventDefault(),$(".complect-store").slick("slickNext")}),$("#toOil").click(function(){event.preventDefault(),$("body").removeClass("fixedPosition"),$(".navbar-wrapper").hide(400),$("html,body").animate({scrollTop:$("#targetOil").offset().top},"slow")}),$("#toService").click(function(){event.preventDefault(),$("body").removeClass("fixedPosition"),$(".navbar-wrapper").hide(400),$("html,body").animate({scrollTop:$("#targetServices").offset().top},"slow")}),$("#toContact").click(function(){event.preventDefault(),$("body").removeClass("fixedPosition"),$(".navbar-wrapper").hide(400),$("html,body").animate({scrollTop:$("#map").offset().top},"slow")}),$("#toAddr").click(function(){event.preventDefault(),$("body").removeClass("fixedPosition"),$(".navbar-wrapper").hide(400),$("html,body").animate({scrollTop:$("#map").offset().top},"slow")}),$("#Riduna").click(function(){event.preventDefault(),$("body").removeClass("fixedPosition"),$(".navbar-wrapper").hide(400),$("html,body").animate({scrollTop:$(".olive-for-vape").offset().top},"slow")}),$(".whant-to-buy").click(function(){event.preventDefault(),$("html,body").animate({scrollTop:$("#map").offset().top},"slow")}),$slick_slider=$("#vapeStore"),settings_slider={dots:!0,arrows:!0},settings_slider_service={dots:!1,arrows:!0},slick_on_mobile($slick_slider,settings_slider),slick_on_mobile($("#service-slider"),settings_slider_service),$(window).on("load resize",function(){$(window).width()<768?$("#burger-menu").click(function(){event.preventDefault(),$(".navbar-wrapper").show(300),$("body").addClass("fixedPosition")}):$("#burger-menu").click(function(){event.preventDefault(),$(".navbar-wrapper").show(300),$("body").removeClass("fixedPosition")})}),$("#toVapes").click(function(){event.preventDefault(),$("body").removeClass("fixedPosition"),$(".navbar-wrapper").hide(400),$("html,body").animate({scrollTop:$("#targetVape").offset().top},"slow")}),$(function(){$(window).scroll(function(){var e=$(".header-content").height();$(this).scrollTop()>=e?$("#text-menu").css("visibility","hidden"):$(this).scrollTop()<=e&&$("#text-menu").css("visibility","visible")})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic2xpY2tfb25fbW9iaWxlIiwic2xpZGVyIiwic2V0dGluZ3MiLCIkIiwid2luZG93Iiwib24iLCJ3aWR0aCIsImhhc0NsYXNzIiwic2xpY2siLCJkb3RzIiwiYXJyb3dzIiwiZmFkZSIsImNzc0Vhc2UiLCJhdXRvcGxheSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiaW5maW5pdGUiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImNsaWNrIiwiaGlkZSIsInJlbW92ZUNsYXNzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNob3ciLCJhZGRDbGFzcyIsImRvY3VtZW50IiwibW91c2V1cCIsImUiLCJpcyIsInRhcmdldCIsImhhcyIsImxlbmd0aCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCIkc2xpY2tfc2xpZGVyIiwic2V0dGluZ3Nfc2xpZGVyIiwic2V0dGluZ3Nfc2xpZGVyX3NlcnZpY2UiLCJzY3JvbGwiLCJhVG9wIiwiaGVpZ2h0IiwidGhpcyIsImNzcyJdLCJtYXBwaW5ncyI6IkFBdUtBLFNBQVNBLGdCQUFnQkMsRUFBUUMsR0FDN0JDLEVBQUVDLFFBQVFDLEdBQUcsY0FBZSxXQUN4QixLQUF3QixJQUFwQkYsRUFBRUMsUUFBUUUsU0FPZCxPQUFLTCxFQUFPTSxTQUFTLDBCQUFyQixFQUNXTixFQUFPTyxNQUFNTixHQVBoQkQsRUFBT00sU0FBUyxzQkFDaEJOLEVBQU9PLE1BQU0sYUExSzdCTCxFQUFFLFdBQVdLLE1BQU0sQ0FDZkMsTUFBSyxFQUNMQyxRQUFRLEVBQ1JDLE1BQU0sRUFDTkMsUUFBUyxjQUNUQyxVQUFVLElBR2RWLEVBQUUsbUJBQW1CSyxNQUFNLENBQ3ZCQyxNQUFLLEVBQ0xDLFFBQVEsRUFDUkksYUFBYyxFQUNkQyxlQUFnQixFQUNoQkMsVUFBVSxFQUNWSCxVQUFVLEVBQ1ZJLFdBQVksQ0FDUixDQUNJQyxXQUFZLElBQ1poQixTQUFVLENBQ05Z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QyxjQUFlQyxpQkFDaEN0QyxnQkFBaUJHLEVBQUUsbUJBQW9Cb0MseUJBbUJ2Q3BDLEVBQUVDLFFBQVFDLEdBQUcsY0FBZSxXQUNwQkYsRUFBRUMsUUFBUUUsUUFBVSxJQUNwQkgsRUFBRSxnQkFBZ0JnQixNQUNkLFdBQ0lHLE1BQU1DLGlCQUNOcEIsRUFBRSxtQkFBbUJxQixLQUFLLEtBQzFCckIsRUFBRSxRQUFRc0IsU0FBUyxtQkFNM0J0QixFQUFFLGdCQUFnQmdCLE1BQ2QsV0FDSUcsTUFBTUMsaUJBQ05wQixFQUFFLG1CQUFtQnFCLEtBQUssS0FDMUJyQixFQUFFLFFBQVFrQixZQUFZLHFCQVF0Q2xCLEVBQUUsWUFBWWdCLE1BQU0sV0FDaEJHLE1BQU1DLGlCQUNOcEIsRUFBRSxRQUFRa0IsWUFBWSxpQkFDdEJsQixFQUFFLG1CQUFtQmlCLEtBQUssS0FDMUJqQixFQUFFLGFBQWE4QixRQUFRLENBQ2ZDLFVBQVcvQixFQUFFLGVBQWVnQyxTQUFTQyxLQUN6QyxVQUdSakMsRUFBRSxXQUNFQSxFQUFFQyxRQUFRb0MsT0FBTyxXQUNiLElBQUlDLEVBQU90QyxFQUFFLG1CQUFtQnVDLFNBQzdCdkMsRUFBRXdDLE1BQU1ULGFBQWFPLEVBQ3BCdEMsRUFBRSxjQUFjeUMsSUFBSSxhQUFjLFVBRTdCekMsRUFBRXdDLE1BQU1ULGFBQWFPLEdBQzFCdEMsRUFBRSxjQUFjeUMsSUFBSSxhQUFjIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiQoJy5zbGlkZXMnKS5zbGljayh7XG4gICAgZG90czp0cnVlLFxuICAgIGFycm93czogZmFsc2UsXG4gICAgZmFkZTogdHJ1ZSxcbiAgICBjc3NFYXNlOiAnZWFzZS1pbi1vdXQnLFxuICAgIGF1dG9wbGF5OiB0cnVlXG59KTtcblxuJCgnLmNvbXBsZWN0LXN0b3JlJykuc2xpY2soe1xuICAgIGRvdHM6dHJ1ZSxcbiAgICBhcnJvd3M6IHRydWUsXG4gICAgc2xpZGVzVG9TaG93OiAzLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBdXG59KTtcblxuJCgnI2Nsb3NlLW5hdicpLmNsaWNrKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLm5hdmJhci13cmFwcGVyJykuaGlkZSg0MDApO1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJmaXhlZFBvc2l0aW9uXCIpO1xuICAgIH1cbik7XG5cbiQoJyNidXJnZXItbWVudScpLmNsaWNrKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLm5hdmJhci13cmFwcGVyJykuc2hvdyg0MDApO1xuICAgIH1cbik7XG5cbiQoJyNidXJnZXItbWVudS1mb290JykuY2xpY2soXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKCcubmF2YmFyLXdyYXBwZXInKS5zaG93KCk7XG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyhcImZpeGVkUG9zaXRpb25cIik7XG4gICAgfVxuKTtcblxuJChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbihlKVxue1xuICAgIGlmICghJCgnLm5hdmJhci13cmFwcGVyJykuaXMoZS50YXJnZXQpICYmICQoJy5uYXZiYXItd3JhcHBlcicpLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKVxuICAgIHtcbiAgICAgICAgJCgnLm5hdmJhci13cmFwcGVyJykuaGlkZSg0MDApO1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJmaXhlZFBvc2l0aW9uXCIpO1xuICAgIH1cbn0pO1xuXG5cbiQoJyNwcmV2LXNsaWRlJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcImZpeGVkUG9zaXRpb25cIik7XG4gICAgJCgnLnNsaWRlcycpLnNsaWNrKCdzbGlja1ByZXYnKTtcblxufSk7XG5cbiQoJyNuZXh0LXNsaWRlJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy5zbGlkZXMnKS5zbGljaygnc2xpY2tOZXh0Jyk7XG59KTtcblxuXG4kKCcjcHJldi1zbGlkZS1zdG9yZScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcjdmFwZVN0b3JlJykuc2xpY2soJ3NsaWNrUHJldicpO1xufSk7XG5cbiQoJyNuZXh0LXNsaWRlLXN0b3JlJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJyN2YXBlU3RvcmUnKS5zbGljaygnc2xpY2tOZXh0Jyk7XG59KTtcblxuJCgnI3ByZXYtc2xpZGUtY29tcGxlY3QnKS5jbGljayhmdW5jdGlvbigpe1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnLmNvbXBsZWN0LXN0b3JlJykuc2xpY2soJ3NsaWNrUHJldicpO1xufSk7XG5cbiQoJyNuZXh0LXNsaWRlLWNvbXBsZWN0JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy5jb21wbGVjdC1zdG9yZScpLnNsaWNrKCdzbGlja05leHQnKTtcbn0pO1xuXG5cblxuJChcIiN0b09pbFwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcImZpeGVkUG9zaXRpb25cIik7XG4gICAgJCgnLm5hdmJhci13cmFwcGVyJykuaGlkZSg0MDApO1xuICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI3RhcmdldE9pbFwiKS5vZmZzZXQoKS50b3B9LFxuICAgICAgICAnc2xvdycpO1xufSk7XG5cbiQoXCIjdG9TZXJ2aWNlXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKFwiZml4ZWRQb3NpdGlvblwiKTtcbiAgICAkKCcubmF2YmFyLXdyYXBwZXInKS5oaWRlKDQwMCk7XG4gICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjdGFyZ2V0U2VydmljZXNcIikub2Zmc2V0KCkudG9wfSxcbiAgICAgICAgJ3Nsb3cnKTtcbn0pO1xuXG4kKFwiI3RvQ29udGFjdFwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcImZpeGVkUG9zaXRpb25cIik7XG4gICAgJCgnLm5hdmJhci13cmFwcGVyJykuaGlkZSg0MDApO1xuICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI21hcFwiKS5vZmZzZXQoKS50b3B9LFxuICAgICAgICAnc2xvdycpO1xufSk7XG5cbiQoXCIjdG9BZGRyXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKFwiZml4ZWRQb3NpdGlvblwiKTtcbiAgICAkKCcubmF2YmFyLXdyYXBwZXInKS5oaWRlKDQwMCk7XG4gICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjbWFwXCIpLm9mZnNldCgpLnRvcH0sXG4gICAgICAgICdzbG93Jyk7XG59KTtcblxuJChcIiNSaWR1bmFcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJmaXhlZFBvc2l0aW9uXCIpO1xuICAgICQoJy5uYXZiYXItd3JhcHBlcicpLmhpZGUoNDAwKTtcbiAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChcIi5vbGl2ZS1mb3ItdmFwZVwiKS5vZmZzZXQoKS50b3B9LFxuICAgICAgICAnc2xvdycpO1xufSk7XG5cblxuXG4kKCcud2hhbnQtdG8tYnV5JykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI21hcFwiKS5vZmZzZXQoKS50b3B9LFxuICAgICAgICAnc2xvdycpO1xufSk7XG5cblxuJHNsaWNrX3NsaWRlciA9ICQoJyN2YXBlU3RvcmUnKTtcbnNldHRpbmdzX3NsaWRlciA9IHtcbiAgICBkb3RzOiB0cnVlLFxuICAgIGFycm93czogdHJ1ZVxuICAgIC8vIG1vcmUgc2V0dGluZ3Ncbn07XG5zZXR0aW5nc19zbGlkZXJfc2VydmljZSA9IHtcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBhcnJvd3M6IHRydWVcbiAgICAvLyBtb3JlIHNldHRpbmdzXG59O1xuXG5zbGlja19vbl9tb2JpbGUoICRzbGlja19zbGlkZXIsIHNldHRpbmdzX3NsaWRlcik7XG5zbGlja19vbl9tb2JpbGUoICQoJyNzZXJ2aWNlLXNsaWRlcicpLCBzZXR0aW5nc19zbGlkZXJfc2VydmljZSk7XG5cbi8vIHNsaWNrIG9uIG1vYmlsZVxuZnVuY3Rpb24gc2xpY2tfb25fbW9iaWxlKHNsaWRlciwgc2V0dGluZ3Mpe1xuICAgICQod2luZG93KS5vbignbG9hZCByZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY4KSB7XG4gICAgICAgICAgICBpZiAoc2xpZGVyLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVyLnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICghc2xpZGVyLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2xpZGVyLnNsaWNrKHNldHRpbmdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuXG4kKHdpbmRvdykub24oJ2xvYWQgcmVzaXplJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAgICQoJyNidXJnZXItbWVudScpLmNsaWNrKFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhci13cmFwcGVyJykuc2hvdygzMDApO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyhcImZpeGVkUG9zaXRpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIGVsc2Uge1xuXG4gICAgICAgICQoJyNidXJnZXItbWVudScpLmNsaWNrKFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhci13cmFwcGVyJykuc2hvdygzMDApO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcImZpeGVkUG9zaXRpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cblxuICAgIH1cbn0pO1xuXG4kKFwiI3RvVmFwZXNcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJmaXhlZFBvc2l0aW9uXCIpO1xuICAgICQoJy5uYXZiYXItd3JhcHBlcicpLmhpZGUoNDAwKTtcbiAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChcIiN0YXJnZXRWYXBlXCIpLm9mZnNldCgpLnRvcH0sXG4gICAgICAgICdzbG93Jyk7XG59KTtcblxuJChmdW5jdGlvbigpe1xuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGFUb3AgPSAkKCcuaGVhZGVyLWNvbnRlbnQnKS5oZWlnaHQoKTtcbiAgICAgICAgaWYoJCh0aGlzKS5zY3JvbGxUb3AoKT49YVRvcCl7XG4gICAgICAgICAgICAkKCcjdGV4dC1tZW51JykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCk8PWFUb3ApIHtcbiAgICAgICAgICAgICQoJyN0ZXh0LW1lbnUnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsiXX0=