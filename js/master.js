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
        var sectionOne = $('.section1 .sectionText').offset().top;
        var sectionTwo = $('.section2 .sectionText').offset().top;
        var sectionThree = $('.section3 .sectionText').offset().top;
        var sectionFour = $('.section4 .sectionText').offset().top;
        var windowLocal = $(window).scrollTop();
        
        if (sectionOne > windowLocal)
        {
            $('.sideBtn').removeClass('activeBtn');
            $('.sectionOne').addClass('activeBtn').delay(500);
            $('.leftSectionText').delay(1000).removeClass('fadeInLeftBig, rotateInDownLeft, fadeInDownBig').hide();
            $('.rightSectionText').delay(1000).removeClass('fadeInRightBig, rotateInDownRight, fadeInUpBig').hide();
        }
        else if (sectionTwo > windowLocal)
        {
            $('.sideBtn').removeClass('activeBtn');
            $('.sectionTwo').delay(500).addClass('activeBtn');
            $('.section2 .leftSectionText').delay(1000).addClass('fadeInLeftBig animated').show();
            $('.section2 .rightSectionText').delay(1000).addClass('fadeInRightBig animated').show();
            $('.leftSectionText').removeClass('fadeOutLeftBig');
            $('.rightSectionText').removeClass('fadeOutRightBig');
        }
        else if (sectionThree > windowLocal)
        {
            $('.sideBtn').removeClass('activeBtn');
            $('.sectionThree').delay(500).addClass('activeBtn');
            $('.section3 .leftSectionText').delay(1000).addClass('rotateInDownLeft animated').show();
            $('.section3 .rightSectionText').delay(1000).addClass('rotateInDownRight animated').show();
        }
        else if (sectionFour > windowLocal)
        {
            $('.sideBtn').removeClass('activeBtn');
            $('.sectionFour').delay(500).addClass('activeBtn');
            $('.section4 .leftSectionText').delay(1000).addClass('fadeInDownBig animated').show();
            $('.section4 .rightSectionText').delay(1000).addClass('fadeInUpBig animated').show();
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


