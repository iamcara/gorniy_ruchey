function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

$(document).ready(function(){
    var headerHeight = $('header').height();
    $(window).scroll(function () {
    	let scroll = $(window).scrollTop();
    	// Изменяем цвет шапки по мере прокрутки
    	$('header').css('background-color', 'rgba(23, 28, 40, ' + (scroll / headerHeight*2.5) + ')');
    });
    // Когда шапка исчезает с экрана, окрашиваем ее полностью
    
    $(window).scroll(function () {
    	let scroll = $(window).scrollTop();
    	if (scroll >= headerHeight*2) {
    		$('header').css('background-color', '#171c28');
    	}
    });
    // Когда шапка исчезает с экрана, окрашиваем ее полностью

    $(".menu-btn").click(function() {
        $("body").toggleClass("open");
        
        if ($("body").hasClass("open"))
            $("body").css("overflow", "hidden");
        else
            $("body").css("overflow", "");
    });

    $('#switchTime input').change(function() {
        $('* .dark-theme').toggleClass('light-theme', $(this).is(':checked'));
    });
})