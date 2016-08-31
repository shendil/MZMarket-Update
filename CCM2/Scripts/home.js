$('document').ready(function () {

    //Commentary slide function

    $('.commentary-txt').on('click', function () {      
        if ($('.commentary-details').hasClass('openCommentary')) {
            $('.commentary-details').removeClass('openCommentary');
        }
        else {
            $('.commentary-details').addClass('openCommentary');
        }
    });

    $('.main-menu ul li').on('click', function () {
        $('.main-menu').removeClass('open');
        $(this).siblings().removeClass('activeMenu');
        $(this).addClass('activeMenu');
    });

    //Getting Todays Date
    var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	dayOfMonth = objToday.getDate(),
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear();	
    var today = dayOfWeek + ", "+ curMonth + " " + dayOfMonth +  ", " + curYear;
    $('#TodayDate').text(today);
    //$('#TodayDate').text(moment().format('dddd, Do MMMM, YYYY'));

});