(function ($) {
    var navigationClickHandler = function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        console.log(target);
        $(window).scrollTo($(target), 800);
    };
    var popupCloseClickHandler = function (e) {
        e.preventDefault();
        $('#overlay').fadeOut(500, function () {
            $(this).remove();
        });
    };

    var validateForm = function(){
        var $form = $('#contact-form');
        var nameElement = $form.find('input[name=name]');
        var emailElement = $form.find('input[name=email]');
        var subjectElement = $form.find('input[name=subject]');
        var messageElement = $form.find('textarea[name=message]');
        var isValid = true;

        var emailPattern = /^[^.][A-Za-z0-9._%-]+[^.]@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

        if(!$.trim(nameElement.val())){
            isValid = false;
            nameElement.addClass('validation-error');
        } else {
            nameElement.removeClass('validation-error');
        }

        if(!$.trim(emailElement.val()) || !emailPattern.test($.trim(emailElement.val()))){
            isValid = false;
            emailElement.addClass('validation-error');
        } else {
            emailElement.removeClass('validation-error');
        }

        if(!$.trim(subjectElement.val())){
            isValid = false;
            subjectElement.addClass('validation-error');
        } else {
            subjectElement.removeClass('validation-error');
        }

        if(!$.trim(messageElement.val())){
            isValid = false;
            messageElement.addClass('validation-error');
        } else {
            messageElement.removeClass('validation-error');
        }

        if(isValid){
            $form.submit();
        }
    };

    var submitFormClickHandler = function(e){
        e.preventDefault();

        console.log('clicked');

        validateForm();
    };
    $('.nav-wrapper ul a, .button-cta').on('click', navigationClickHandler);
    $('#overlay .btn-close').on('click', popupCloseClickHandler);
    $('#btn-form-submit').on('click', submitFormClickHandler);

    $(document).ready(function(){

        $('#section-1').css('min-height', $(window).height() + 'px');

        $('<img src="img/bg-section-1.png">').load(function() {
            $('#loading-overlay').fadeOut(300, function(){
                $(this).remove();
            });
        });
    });
})(jQuery);