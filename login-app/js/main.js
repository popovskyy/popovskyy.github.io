$(window).ready(function() {
    var modalWrapper = $('.modal-wrapper'),
        modalContent = $('.modal-content'),
        body = $('body'),
        signInBtn = $('.sign-in-btn'),
        signUpBtn = $('.sign-up-btn'),
        showHideBtn = $('.show-hide-btn'),
        activeTab,
        primaryBtn = $('.primary-btn');

    function showModal(btn) {
        btn.click(function() {
            btn.addClass('active-btn');
            modalWrapper.fadeIn('slow');
            modalContent.addClass('active-modal');

            if (btn === signInBtn) {
                activeTab = 0;
            }

            if (btn === signUpBtn) {
                activeTab = 1;
            }

            modalTabs(activeTab);
        });
    }

    body.on('click keyup', function(event) {
        if (!$(event.target).closest('.active-modal').length && !$(event.target).is('.active-modal') && !$(event.target).is('.primary-btn') || event.key === "Escape") {
            modalWrapper.hide();
            modalContent.removeClass('active-modal');
            primaryBtn.removeClass('active-btn');
            $('.tabs-links li').removeClass('active');
            $('.tabs-content').removeClass('active');
        }
    });

    showHideBtn.click(function () {
        if ($(this).siblings('.password').attr('type') === 'text') {
            $(this).siblings('.password').attr('type', 'password');
            $(this).text('Show')
        }
        else {
            $(this).siblings('.password').attr('type', 'text');
            $(this).text('Hide')
        }
    });

    function modalTabs(curent) {
        $('.tabs-links li').eq(curent).addClass('active');
        $('.tabs-content').eq(curent).addClass('active');

        $('.tabs-links').on('click', 'li:not(.active)', function() {
            $(this).addClass('active').siblings().removeClass('active');
            $(this).closest('.modal-tabs').find('.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
        });
    }

    $('.forgot-link').click(function (e) {
        e.preventDefault();
        $('.form-wrapper').toggle();
    });

    $('.submit').click(function (e) {
        e.preventDefault();
        $('.input-email:visible').each(function () {
            if (validateEmail($(this).val()) && $(this).val() !== '') {
               $(this).css('border-color', 'green');
               $(this).siblings('.control').text('');
            }
            else {
                $(this).css('border-color', 'red');
                $(this).siblings('.control').text('Please enter valid email');
            }
        });

        $('.input-name:visible').each(function () {
            if (validateName($(this).val()) && $(this).val() !== '') {
                $(this).css('border-color', 'green');
                $(this).siblings('.control').text('');
            }
            else {
                $(this).css('border-color', 'red');
                $(this).siblings('.control').text('Please enter valid name');
            }
        });

        $('.password:visible').each(function () {
            if (validatePassword($(this).val()) && $(this).val() !== '') {
                $(this).css('border-color', 'green');
                $(this).siblings('.control').text('');

                if ($('.password:visible').length === 2 && $('.password:visible').eq(0).val() !== $('.password:visible').eq(1).val() && $('.password:visible').val() !== '') {
                    $('.password:visible').eq(1).css('border-color', 'red');
                    $('.password:visible').eq(1).siblings('.control').text("Password doesn't match");
                }
            }
            else {
                $(this).css('border-color', 'red');
                $(this).siblings('.control').text('Please enter valid password');
            }
        });
    });

    showModal(signInBtn);
    showModal(signUpBtn);
});

function validateEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    return emailReg.test(email);
}

function validateName(name) {
    var nameReg = /^[A-Za-z][A-Za-z0-9]{2,}?$/;

    return nameReg.test(name);
}
function validatePassword(password) {
    var passReg = /^(?=.*[0-9])(?=.*[a-zA-Z])\w{3,}$/;

    return passReg.test(password);
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQod2luZG93KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICB2YXIgbW9kYWxXcmFwcGVyID0gJCgnLm1vZGFsLXdyYXBwZXInKSxcbiAgICAgICAgbW9kYWxDb250ZW50ID0gJCgnLm1vZGFsLWNvbnRlbnQnKSxcbiAgICAgICAgYm9keSA9ICQoJ2JvZHknKSxcbiAgICAgICAgc2lnbkluQnRuID0gJCgnLnNpZ24taW4tYnRuJyksXG4gICAgICAgIHNpZ25VcEJ0biA9ICQoJy5zaWduLXVwLWJ0bicpLFxuICAgICAgICBzaG93SGlkZUJ0biA9ICQoJy5zaG93LWhpZGUtYnRuJyksXG4gICAgICAgIGFjdGl2ZVRhYixcbiAgICAgICAgcHJpbWFyeUJ0biA9ICQoJy5wcmltYXJ5LWJ0bicpO1xuXG4gICAgZnVuY3Rpb24gc2hvd01vZGFsKGJ0bikge1xuICAgICAgICBidG4uY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBidG4uYWRkQ2xhc3MoJ2FjdGl2ZS1idG4nKTtcbiAgICAgICAgICAgIG1vZGFsV3JhcHBlci5mYWRlSW4oJ3Nsb3cnKTtcbiAgICAgICAgICAgIG1vZGFsQ29udGVudC5hZGRDbGFzcygnYWN0aXZlLW1vZGFsJyk7XG5cbiAgICAgICAgICAgIGlmIChidG4gPT09IHNpZ25JbkJ0bikge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVRhYiA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChidG4gPT09IHNpZ25VcEJ0bikge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVRhYiA9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vZGFsVGFicyhhY3RpdmVUYWIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBib2R5Lm9uKCdjbGljayBrZXl1cCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmICghJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5hY3RpdmUtbW9kYWwnKS5sZW5ndGggJiYgISQoZXZlbnQudGFyZ2V0KS5pcygnLmFjdGl2ZS1tb2RhbCcpICYmICEkKGV2ZW50LnRhcmdldCkuaXMoJy5wcmltYXJ5LWJ0bicpIHx8IGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgbW9kYWxXcmFwcGVyLmhpZGUoKTtcbiAgICAgICAgICAgIG1vZGFsQ29udGVudC5yZW1vdmVDbGFzcygnYWN0aXZlLW1vZGFsJyk7XG4gICAgICAgICAgICBwcmltYXJ5QnRuLnJlbW92ZUNsYXNzKCdhY3RpdmUtYnRuJyk7XG4gICAgICAgICAgICAkKCcudGFicy1saW5rcyBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICQoJy50YWJzLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHNob3dIaWRlQnRuLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykuc2libGluZ3MoJy5wYXNzd29yZCcpLmF0dHIoJ3R5cGUnKSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcucGFzc3dvcmQnKS5hdHRyKCd0eXBlJywgJ3Bhc3N3b3JkJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnRleHQoJ1Nob3cnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLnBhc3N3b3JkJykuYXR0cigndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAkKHRoaXMpLnRleHQoJ0hpZGUnKVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBtb2RhbFRhYnMoY3VyZW50KSB7XG4gICAgICAgICQoJy50YWJzLWxpbmtzIGxpJykuZXEoY3VyZW50KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoJy50YWJzLWNvbnRlbnQnKS5lcShjdXJlbnQpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAkKCcudGFicy1saW5rcycpLm9uKCdjbGljaycsICdsaTpub3QoLmFjdGl2ZSknLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcubW9kYWwtdGFicycpLmZpbmQoJy50YWJzLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJykuZXEoJCh0aGlzKS5pbmRleCgpKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICQoJy5mb3Jnb3QtbGluaycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLmZvcm0td3JhcHBlcicpLnRvZ2dsZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnLnN1Ym1pdCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLmlucHV0LWVtYWlsOnZpc2libGUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZUVtYWlsKCQodGhpcykudmFsKCkpICYmICQodGhpcykudmFsKCkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnYm9yZGVyLWNvbG9yJywgJ2dyZWVuJyk7XG4gICAgICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuY29udHJvbCcpLnRleHQoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JvcmRlci1jb2xvcicsICdyZWQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuY29udHJvbCcpLnRleHQoJ1BsZWFzZSBlbnRlciB2YWxpZCBlbWFpbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuaW5wdXQtbmFtZTp2aXNpYmxlJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGVOYW1lKCQodGhpcykudmFsKCkpICYmICQodGhpcykudmFsKCkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JvcmRlci1jb2xvcicsICdncmVlbicpO1xuICAgICAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5jb250cm9sJykudGV4dCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnYm9yZGVyLWNvbG9yJywgJ3JlZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5jb250cm9sJykudGV4dCgnUGxlYXNlIGVudGVyIHZhbGlkIG5hbWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnBhc3N3b3JkOnZpc2libGUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZVBhc3N3b3JkKCQodGhpcykudmFsKCkpICYmICQodGhpcykudmFsKCkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JvcmRlci1jb2xvcicsICdncmVlbicpO1xuICAgICAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5jb250cm9sJykudGV4dCgnJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJCgnLnBhc3N3b3JkOnZpc2libGUnKS5sZW5ndGggPT09IDIgJiYgJCgnLnBhc3N3b3JkOnZpc2libGUnKS5lcSgwKS52YWwoKSAhPT0gJCgnLnBhc3N3b3JkOnZpc2libGUnKS5lcSgxKS52YWwoKSAmJiAkKCcucGFzc3dvcmQ6dmlzaWJsZScpLnZhbCgpICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAkKCcucGFzc3dvcmQ6dmlzaWJsZScpLmVxKDEpLmNzcygnYm9yZGVyLWNvbG9yJywgJ3JlZCcpO1xuICAgICAgICAgICAgICAgICAgICAkKCcucGFzc3dvcmQ6dmlzaWJsZScpLmVxKDEpLnNpYmxpbmdzKCcuY29udHJvbCcpLnRleHQoXCJQYXNzd29yZCBkb2Vzbid0IG1hdGNoXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdib3JkZXItY29sb3InLCAncmVkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmNvbnRyb2wnKS50ZXh0KCdQbGVhc2UgZW50ZXIgdmFsaWQgcGFzc3dvcmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzaG93TW9kYWwoc2lnbkluQnRuKTtcbiAgICBzaG93TW9kYWwoc2lnblVwQnRuKTtcbn0pO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsKSB7XG4gICAgdmFyIGVtYWlsUmVnID0gL14oW1xcdy1cXC5dK0AoW1xcdy1dK1xcLikrW1xcdy1dezIsNH0pPyQvO1xuXG4gICAgcmV0dXJuIGVtYWlsUmVnLnRlc3QoZW1haWwpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZU5hbWUobmFtZSkge1xuICAgIHZhciBuYW1lUmVnID0gL15bQS1aYS16XVtBLVphLXowLTldezIsfT8kLztcblxuICAgIHJldHVybiBuYW1lUmVnLnRlc3QobmFtZSk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKSB7XG4gICAgdmFyIHBhc3NSZWcgPSAvXig/PS4qWzAtOV0pKD89LipbYS16QS1aXSlcXHd7Myx9JC87XG5cbiAgICByZXR1cm4gcGFzc1JlZy50ZXN0KHBhc3N3b3JkKTtcbn1cbiJdLCJmaWxlIjoibWFpbi5qcyJ9
