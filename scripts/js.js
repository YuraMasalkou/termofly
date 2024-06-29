


$(document).ready(function () {

    $('.center').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '0',
        //             slidesToShow: 2
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });

    //слайдер

// плавный переход по якорям


        $("a[href*='#']").on("click", function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top

            }, 777);
            if (document.documentElement.clientWidth <= 768){
                close.style.display= 'none'
                burger.style.display= 'block'
                menu.style.display= 'none'
            }

            document.querySelector('body').style.overflow = "visible"
            e.preventDefault();
            return false;
        });




    const getScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('slick-slide') || e.target.classList.contains('rev1') && e.target.parentNode.classList.contains('slick-slide')) {

            document.querySelector('.slider-block-backgr').classList.add('block-active');
            document.querySelector('.icons').setAttribute('src', 'images/o1+.jpg');

            document.querySelector('body').style.overflow = "hidden"
            document.querySelector('body').style.paddingRight = getScrollbarWidth + "px";
        }
        if (e.target.classList.contains('form-close') || e.target.classList.contains('slider-block-backgr')) {
            document.querySelector('.slider-block-backgr').classList.remove('block-active');
            document.querySelector('body').style.paddingRight = "0";
            document.querySelector('body').style.overflow = "visible";
            document.querySelector('.icons').removeAttribute('src');
        }

    })

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('slick-slide') || e.target.classList.contains('rev2') && e.target.parentNode.classList.contains('slick-slide')) {

            document.querySelector('.slider-block-backgr').classList.add('block-active');
            document.querySelector('.icons').setAttribute('src', 'images/02+.jpg');
            document.querySelector('body').style.paddingRight = getScrollbarWidth + "px";
            document.querySelector('body').style.overflow = "hidden"
        }
        if (e.target.classList.contains('form-close') || e.target.classList.contains('slider-block-backgr')) {
            document.querySelector('.slider-block-backgr').classList.remove('block-active');
            document.querySelector('body').style.paddingRight = "0";
            document.querySelector('body').style.overflow = "visible"
            document.querySelector('.icons').removeAttribute('src');
        }

    })

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('slick-slide') || e.target.classList.contains('rev3') && e.target.parentNode.classList.contains('slick-slide')) {

            document.querySelector('.slider-block-backgr').classList.add('block-active');
            document.querySelector('.icons').setAttribute('src', 'images/o3+.jpg');
            document.querySelector('body').style.paddingRight = getScrollbarWidth + "px";
            document.querySelector('body').style.overflow = "hidden"
        }
        if (e.target.classList.contains('form-close') || e.target.classList.contains('slider-block-backgr')) {
            document.querySelector('.slider-block-backgr').classList.remove('block-active');
            document.querySelector('body').style.paddingRight = "0";
            document.querySelector('body').style.overflow = "visible";
            document.querySelector('.icons').removeAttribute('src' );
        }

    })

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('ac-sert-img') || e.target.classList.contains('s-img1') && e.target.parentNode.classList.contains('ac-sert-img')) {

            document.querySelector('.slider-block-backgr').classList.add('block-active');
            document.querySelector('.icons').setAttribute('src', 'images/s2+.jpg');
            document.querySelector('body').style.paddingRight = getScrollbarWidth + "px";
            document.querySelector('body').style.overflow = "hidden"
        }
        if (e.target.classList.contains('form-close') || e.target.classList.contains('slider-block-backgr')) {
            document.querySelector('.slider-block-backgr').classList.remove('block-active');
            document.querySelector('body').style.paddingRight = "0";
            document.querySelector('body').style.overflow = "visible";
            document.querySelector('.icons').removeAttribute('src' );
        }

    })
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('ac-sert-img') || e.target.classList.contains('s-img2') && e.target.parentNode.classList.contains('ac-sert-img')) {

            document.querySelector('.slider-block-backgr').classList.add('block-active');
            document.querySelector('.icons').setAttribute('src', 'images/s1+.jpg');
            document.querySelector('body').style.paddingRight = getScrollbarWidth + "px";
            document.querySelector('body').style.overflow = "hidden"
        }
        if (e.target.classList.contains('form-close') || e.target.classList.contains('slider-block-backgr')) {
            document.querySelector('.slider-block-backgr').classList.remove('block-active');
            document.querySelector('body').style.paddingRight = "0";
            document.querySelector('body').style.overflow = "visible";
            document.querySelector('.icons').removeAttribute('src' );
        }

    })
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('btn-header')) {
            document.querySelector('.callback-open-form').classList.add('block-active');
        }
        if (e.target.classList.contains('form-close') || e.target.classList.contains('callback-open-form')) {
            document.querySelector('.callback-open-form').classList.remove('block-active');

        }
        if (e.target.classList.contains('form-close') || e.target.classList.contains('callback-thank') || e.target.classList.contains('th-btn')) {
            document.querySelector('.callback-thank').classList.remove('block-active');
            document.querySelector('.callback-open-form').classList.remove('block-active');
        }

    })

    let burger = document.getElementById('burger');
    let close = document.getElementById('m-close');
    let menu = document.getElementById('m-header-block');
    burger.onclick = function (){
        close.style.display= 'block'
        burger.style.display= 'none'
        menu.style.display= 'block'

        document.querySelector('body').style.overflow = "hidden"
    };
    close.onclick = function (){
        close.style.display= 'none'
        burger.style.display= 'block'
        menu.style.display= 'none'

        document.querySelector('body').style.overflow = "visible"
    }


    //только буквы в форме "Имя"
    $('body').on('input', '.input-words', function () {
        this.value = this.value.replace(/[^a-zа-яё\s]/gi, '');
    });


    $('#f1').submit(function (e) {
        e.preventDefault();
        let name = $('#name');
        let phone = $('#phone');
        let hasError = false;
        $('.error-input').hide();
        // if (!link.val()) {
        //     link.next().show();
        //     hasError = true;
        //     link.css('border', '1px solid red');
        //
        // }
        if (!phone.val()) {
            phone.next().show();
            hasError = true;
            phone.css('border', '1px solid red');

        }
        if (phone.val().length < 17) {

            phone.next().show();
            console.log(phone.next())
            phone.next().innerHTML = "Введите корректный номер телефона";
            hasError = true;
            phone.css('border', '1px solid red');

        }

        if (!hasError) {
            $.ajax({
                url: "/form_ask_us_ru.php",
                type: "POST",
                data: $('#f1').serialize(),
                success: function (response) {
                    //обработка успешной отправки
                    // $('.callback-overlay2').addClass('callback-overlay-active');
                    // popup.html('Ваше сообщение успешно отправлено!');
                    // let thank = document.querySelector('#thank');
                    // thank.classList.toggle("form-active");
                    //
                    // function clearForm () {
                    //     thank.classList.toggle("form-active");
                    // }
                    // setTimeout(clearForm, 3000)
                    $('#phone').val('');
                    $('#name').val('');
                    document.querySelector('.callback-thank').classList.add('block-active');

                },
                error: function (response) {

                    alert('Возникла ошибка при отправке формы. Попробуйте еще раз!');
                    location.reload();

                }
            });
        }
    });
    $('#f2').submit(function (e) {
        e.preventDefault();
        let name = $('#name1');
        let phone = $('#phone1');
        let hasError = false;
        $('.error-input').hide();
        // if (!link.val()) {
        //     link.next().show();
        //     hasError = true;
        //     link.css('border', '1px solid red');
        //
        // }
        if (!phone.val()) {
            phone.next().show();
            hasError = true;
            phone.css('border', '1px solid red');

        }
        if (phone.val().length < 17) {

            phone.next().show();
            console.log(phone.next())
            phone.next().innerHTML = "Введите корректный номер телефона";
            hasError = true;
            phone.css('border', '1px solid red');

        }

        if (!hasError) {
            $.ajax({
                url: "/form_ask_us_ru2.php",
                type: "POST",
                data: $('#form2').serialize(),
                success: function (response) {
                    //обработка успешной отправки
                    // $('.callback-overlay2').addClass('callback-overlay-active');
                    // popup.html('Ваше сообщение успешно отправлено!');
                    // let thank = document.querySelector('#thank');
                    // thank.classList.toggle("form-active");
                    //
                    // function clearForm () {
                    //     thank.classList.toggle("form-active");
                    // }
                    // setTimeout(clearForm, 3000)
                    $('#phone1').val('');
                    $('#name1').val('');
                    document.querySelector('.callback-thank').classList.add('block-active');

                },
                error: function (response) {

                    alert('Возникла ошибка при отправке формы. Попробуйте еще раз!');
                    location.reload();

                }
            });
        }
    });
    $('#form3').submit(function (e) {
        e.preventDefault();
        let name = $('#name3');
        let phone = $('#phone3');
        let hasError = false;
        $('.error-input').hide();
        // if (!link.val()) {
        //     link.next().show();
        //     hasError = true;
        //     link.css('border', '1px solid red');
        //
        // }
        if (!phone.val()) {
            phone.next().show();
            hasError = true;
            phone.css('border', '1px solid red');

        }
        if (phone.val().length < 17) {

            phone.next().show();
            console.log(phone.next())
            phone.next().innerHTML = "Введите корректный номер телефона";
            hasError = true;
            phone.css('border', '1px solid red');

        }

        if (!hasError) {
            $.ajax({
                url: "/form_ask_us_ru3.php",
                type: "POST",
                data: $('#form3').serialize(),
                success: function (response) {
                    //обработка успешной отправки
                    // $('.callback-overlay2').addClass('callback-overlay-active');
                    // popup.html('Ваше сообщение успешно отправлено!');
                    // let thank = document.querySelector('#thank');
                    // thank.classList.toggle("form-active");
                    //
                    // function clearForm () {
                    //     thank.classList.toggle("form-active");
                    // }
                    // setTimeout(clearForm, 3000)
                    $('#phone3').val('');
                    $('#name3').val('');
                    document.querySelector('.callback-open-form').classList.remove('block-active');
                    document.querySelector('.callback-thank').classList.add('block-active');

                },
                error: function (response) {

                    alert('Возникла ошибка при отправке формы. Попробуйте еще раз!');
                    location.reload();

                }
            });
        }
    });

    //маска телефона

    var eventCalllback = function (e) {
        var el = e.target,
            clearVal = el.dataset.phoneClear,
            pattern = el.dataset.phonePattern,
            matrix_def = "+375(__)___-__-__",
            matrix = pattern ? pattern : matrix_def,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = e.target.value.replace(/\D/g, "");
        // if (clearVal !== 'false' && e.type === 'blur') {
        //     if (val.length < matrix.match(/([\_\d])/g).length) {
        //         e.target.value = '';
        //         return;
        //     }
        // }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCalllback);
        }
    }
});