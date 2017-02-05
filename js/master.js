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
    
    
    
    $('.section1').waypoint(function() {
        $('.sideBtn').removeClass('activeBtn');
        $('.sectionOne').addClass('activeBtn');
        $('.leftSectionText').removeClass('fadeInLeftBig animated').hide();
        $('.rightSectionText').removeClass('fadeInRightBig animated').hide();
        $('.leftSectionText').addClass('fadeOutLeftBig');
        $('.rightSectionText').addClass('fadeOutRightBig');
        },
        {
            offset: '0%'
    });
    $('.section2').waypoint(function() {
        $('.sideBtn').removeClass('activeBtn');
        $('.sectionTwo').addClass('activeBtn');
        $('.section2 .leftSectionText').addClass('fadeInLeftBig animated').show();
        $('.section2 .rightSectionText').addClass('fadeInRightBig animated').show();
        $('.leftSectionText').removeClass('fadeOutLeftBig');
        $('.rightSectionText').removeClass('fadeOutRightBig');
        },
        {
            offset: '50%'
    });
    $('.section3').waypoint(function() {
        $('.sideBtn').removeClass('activeBtn');
        $('.sectionThree').addClass('activeBtn');
        $('.section3 .leftSectionText').addClass('fadeInLeftBig animated').show();
        $('.section3 .rightSectionText').addClass('fadeInRightBig animated').show();
        $('.leftSectionText').removeClass('fadeOutLeftBig');
        $('.rightSectionText').removeClass('fadeOutRightBig');
        },
        {
            offset: '50%'
    });
    $('.section4').waypoint(function() {
        $('.sideBtn').removeClass('activeBtn');
        $('.sectionFour').addClass('activeBtn');
        $('.section4 .leftSectionText').addClass('fadeInLeftBig animated').show();
        $('.section4 .rightSectionText').addClass('fadeInRightBig animated').show();
        $('.leftSectionText').removeClass('fadeOutLeftBig');
        $('.rightSectionText').removeClass('fadeOutRightBig');
        },
        {
            offset: '50%'
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


