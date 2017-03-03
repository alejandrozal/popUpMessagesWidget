(function($) {
    //var self = $(this);
    var methods = {
        init : function(sex, bgColor) {
            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            var m = [//man
                'Валерий Фе****'
                , 'Владислав Ко****'
                , 'Владимир Ма****'
                , 'Валентин Ди****'
                , 'Валерий Ще******'
                , 'Иван Ба*****'
                , 'Вячеслав Ку****'
                , 'Михаил Ро*****'
                , 'Сергей Во*****'
                , 'Дмитрий Де*****'
                , 'Вячеслав Шу****'
                , 'Дима Ав*****'
                , 'Денис Ми***'
                , 'Евгений Ма*****'
                , 'Виталий Ми****'
                , 'Даниил Те*****'
                , 'Влад Бу*****'
                , 'Иван Гр*****'
                , 'Алексей Ре*****'
                , 'Владимир Су****'
                , 'Вадим Тр*****'
                , 'Вадим Га*****'
                , 'Евгений Го****'
                , 'Евгений Ба****'
                , 'Сергей Жу***'
                , 'Влад Че*****'
                , 'Владислав Ни****'
                , 'Виктор Че*****'
                , 'Олег Як*****'
                , 'Дмитрий Гл*****'
                , 'Василий Кр****'
                , 'Антон За****'
                , 'Антон Бе****'
                , 'Илья Со****'
                , 'Сергей Ми****'
                , 'Дмитрий Да****'
                , 'Владислав Ра****'
                , 'Дмитрий Вл*****'
                , 'Иван Ма*****'
                , 'Павел Пр*****'
                , 'Никита Ки****'
                , 'Максим Ша*****'
                , 'Ярослав Ко****'
                , 'Илья См*****'
                , 'Андрей Ле****'
                , 'Андрей Ни*****'
                , 'Артём Ре****'
                , 'Анатолий Ти*****'
                , 'Ярослав За*****'
                , 'Василий Гу****'];
            var w = [//girl
                'Анна Па*****'
                , 'Алина Ер*****'
                , 'Александра Ло****'
                , 'Елена Бы****'
                , 'Марина Ел****'
                , 'Анна Мо****'
                , 'Ксения Кр*****'
                , 'Алена Бо****'
                , 'Виктория Ка****'
                , 'Маргарита Бе****'
                , 'Анна Ры*****'
                , 'Дарья Са*****'
                , 'Алла Кр*****'
                , 'Евгения Ко****'
                , 'Антонина Пе****'
                , 'Ирина Со****'
                , 'Алена Во****'
                , 'Валентина Бу****'
                , 'Вика Др****'
                , 'Валерия Ло****'
                , 'Кристина Со****'
                , 'Наталья Го*****'
                , 'Марина Ма*****'
                , 'Катерина Ля****'
                , 'Анастасия Ле*****'
                , 'Екатерина Во*****'
                , 'Наталья Ло****'
                , 'Валентина Ля****'
                , 'Вероника Ан****'
                , 'Викуся Пр*****'
                , 'Мария Ша****'
                , 'Василиса Ма****'
                , 'Ольга Дм****'
                , 'Виктория Ни****'
                , 'Дарья Пе****'
                , 'Татьяна Ко****'
                , 'Валентина Ко****'
                , 'Оля Са******'
                , 'Лилия Ма*****'
                , 'Ирина Пе*****'
                , 'Анна Да*******'
                , 'Анастасия Во****'
                , 'Полина Гр****'
                , 'Мария Ко****'
                , 'Кристина До****'
                , 'Юлия Пу****'
                , 'Татьяна Ла****'
                , 'Валерия Лу****'
                , 'Анастасия Шп****'
                , 'Алёна Ши****'];
            window.leftAmount = 100;
            //alert(sex);
            switch (sex) {
                case 1:
                    nameList = m;
                    break
                case 2:
                    nameList = w;
                    break
                default:
                    nameList = m.concat(w);
            }

            $('body').append('<div id = "widgetPopUpMessages" class="yved yvedf1" style="display:none; background-color: '+((bgColor) ? (bgColor) : ("#fffc00"))+' !important;">  <div class="yvedvt" /> <div class="yvedt"> </div></div> </div>');
            setTimeout(function () {
                setInterval(
                    function () {

//                        if (sex == 'both') {
//                            var whichAr = getRandomInt(1, 2);
//                            switch (whichAr) {
//                                case 1:
//                                    nameList = m
//                                    break;
//                                case 2:
//                                    nameList = w;
//                            }
//                        }
                        window.tmp = getRandomInt(1, 10);
                        window.leftAmount -= window.tmp;
                        if (window.leftAmount < 0) return false;
                        //$.each( nameList, function(index, value) {
                        $('#widgetPopUpMessages').html('<img src="data:image/png;base64,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CBQRERERERERERERERERERERERERERERERERERERERERERERERERERERkXT+BwgNz+wz7NsnAAAAAElFTkSuQmCC" alt="" class="yvedi" /> Наш покупатель ' + nameList[getRandomInt(1, nameList.length - 1)] + ' сделал(а) заказ на сумму <span class="displayCurrentPrice"> ' + window.tmp * 990 + ' Р.</span>, заказано ' + window.tmp + ' шт.<br><br>По акции осталось всего ' + window.leftAmount + ' шт.<br>');
                        $('#widgetPopUpMessages').fadeIn(500).delay(6000).fadeOut(500);
                    }, 15000); //25000 - задержка в мс меду показами уведомлений
            }, 10); //10000 - задержка в мс перед показом первого уведомления
        },

        remove : function (){
            $('body').find('div[id="widgetPopUpMessages"]').remove();
        }
    };

    $.fn.popUpMessagesWidget = function(methodOrOptions) {
        if ( methods[methodOrOptions] ) {
            return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
            // Default to "init"
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.popUpMessagesWidget' );
        }
    };
})(jQuery);