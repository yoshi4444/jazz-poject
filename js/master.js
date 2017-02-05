$(document).ready(function()
{
    /* Start Function for scroll to top Btn */
    
    var navTop = $('#bodySection').offset().top;
    var scrollNav = function() {
        var scrollToTop = $(window).scrollTop();
        
        if(scrollToTop > navTop) 
        {
            $('#scrollTopBtn').addClass('show');
        }
        else
        {
            $('#scrollTopBtn').removeClass('show');
        }
    };
    scrollNav();
    
    $(window).scroll(function(){ scrollNav(); });
    
    $('#scrollTopBtn').click(function()
    {
        $('html, body').animate({ scrollTop:0 }, 600);
    });
    
    /* End Function for scroll to top Btn */
    
    /* Start Hide or Show Header on Scroll */
    
    var topNav = 0;
    
    $(window).scroll(function() 
    {
        var windowPage = $(this).scrollTop();
        if (windowPage > topNav) 
        {
            $('#topNavFull').slideUp();
        } 
        else 
        {
           $('#topNavFull').slideDown();
        }
        topNav = windowPage;
    });
    
    /* End Hide or Show Header on Scroll */
    
    /* Start add activeBtn for sideBtn */
    $('.sideBtn').click(function()
    {
        $(this).addClass('activeBtn');
    });
    
    $(window).scroll(function()
    {
        var sectionOne = $('.section1').offset().top;
        var sectionTwo = $('.section2').offset().top;
        var sectionThree = $('.section3').offset().top;
        var sectionFour = $('.section4').offset().top;
        var windowLocal = $(window).scrollTop();
        
        if (sectionOne > windowLocal)
        {
            $('.sideBtn').removeClass('activeBtn');
            $('.sectionOne').addClass('activeBtn').delay(500);
            $('.leftSectionText').addClass('fadeOutLeftBig');
            $('.rightSectionText').addClass('fadeOutRightBig');
            $('.leftSectionText').delay(1000).removeClass('fadeInLeftBig');
            $('.rightSectionText').delay(1000).removeClass('fadeInRightBig');
        }
        else if (sectionTwo > windowLocal)
        {
            $('.sideBtn').removeClass('activeBtn');
            $('.sectionTwo').delay(500).addClass('activeBtn');
            $('.leftSectionText').delay(1000).addClass('fadeInLeftBig animated');
            $('.rightSectionText').delay(1000).addClass('fadeInRightBig animated');
            $('.leftSectionText').removeClass('fadeOutLeftBig');
            $('.rightSectionText').removeClass('fadeOutRightBig');
        }
        else if (sectionThree > windowLocal)
        {
            $('.sideBtn').removeClass('activeBtn');
            $('.sectionThree').delay(500).addClass('activeBtn');
        }
        else if (sectionFour > windowLocal)
        {
            $('.sideBtn').removeClass('activeBtn');
            $('.sectionFour').delay(500).addClass('activeBtn');
        }
    });
    
    /* End add activeBtn for sideBtn */
    
});

function changeSection(e)
{
    var sectionName = $(e).attr('data-name');
    $('html, body').animate({
    scrollTop: $('.'+sectionName).offset().top - 50
    }, 500);
    $('.sideBtn').removeClass('activeBtn');
}


