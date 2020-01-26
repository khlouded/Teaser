//Scroll Logic
function navScroll() {
    //therefore when ever you scroll the window it will activate the contents of this function
        var wScroll = $(window).scrollTop(); // a variable that is a number that describes how far you have scrolled
        
        // console.log(wScroll);//This is just to check the scroll value if I need number information. I think this is based on pixels.
            //Visibility Logic
            //This uses breakpoints of each section. When we scroll to one section, then the display of the other section would show up or dissapear. I need to decide weather the breakpoints are based on the end or the start of a section, as if it's display: none, then that section might not exists in the DOM

        //Breakpoints
        //Section One
        // var windowHeight = window.innerHeight;
        // For percentage of scroll I can just multiply by that value so 50% = *.5 or 90% = *.9
        
        // If the scroll position is passed the bottom of section one
        // With this method, we have the space of the windowHeight inbetween each transition. Hopefully it's not noticeable
        // If the scroll position is passed the bottom of start (THIS IS SECTION ONE)

        //Main visibility logic and pattern logic
        if (wScroll <= ($(".sec-one").position().top + $(".sec-one").innerHeight()) && wScroll >= ($(".sec-one").position().top) ) {
            $('.sec-one').addClass('visible-show');
            var element1 = Math.abs(wScroll - $(".sec-one").position().top);
            // console.log(element1 + " break one");
        } else {
            $('.sec-one').removeClass('visible-show');
        }
        // If the scroll position is passed the bottom of section one (THIS IS SECTION TWO)
        if (wScroll >= ($(".sec-one").position().top + $(".sec-one").innerHeight()) && wScroll <= ($(".sec-two").position().top + $(".sec-two").innerHeight())) { //so what i'm doing is finding the position of the bottom of the first element and comparing that to the scroll value
            $('.sec-one').removeClass('visible-show');
            $('.sec-two').addClass('visible-show');
            $('.com-mid').css({ 
                'transform':'translateX(' + wScroll/2 + 'px)'
            });
            $('.com-bot').css({ 
                'transform':'translateX(' + -wScroll/2 + 'px)'
            });
            $('.com-top').css({ 
                'transform':'translateX(' + -wScroll/2 + 'px)'
            });
            var element2 = Math.abs(wScroll - $(".sec-two").position().top);
            // console.log(element2 + " break two");
        } else {
            $('.sec-two').removeClass('visible-show');
        }
        // If the scroll position is passed the bottom of section two (THIS IS SECTION THREE)
        if (wScroll >= ($(".sec-two").position().top + $(".sec-two").innerHeight()) && wScroll <= ($(".sec-three").position().top + $(".sec-three").innerHeight()) ) {
            // console.log("Section-Three");
            $('.sec-two').removeClass('visible-show');
            $('.sec-three').addClass('visible-show');
            var element3 = Math.abs(wScroll - $(".sec-three").position().top);
            // console.log(element3 + " break three");
            //upside down
            $('.com-mleft').css({ 
                'transform':'translateY(' + element3*2 + 'px)  rotate(180deg)'
            });
            $('.com-right').css({ 
                'transform':'translateY(' + element3*2 + 'px)  rotate(180deg)'
            });
            $('.com-left').css({ 
                'transform':'translateY(' + -element3/2 + 'px)'
            });
            $('.com-mright').css({ 
                'transform':'translateY(' + -element3/2 + 'px)'
            });
        } else {
            $('.sec-three').removeClass('visible-show');
        }
        //If the scroll position is passed the bottom of section three (THIS IS SECTION FOUR)

        if (wScroll >= ($(".sec-three").position().top + $(".sec-three").innerHeight()) ) {
            // console.log("Section-Four");
            $('.sec-three').removeClass('visible-show');
            $('.sec-final').addClass('visible-show');
            $(".cursor-scroll").addClass("no-opacity");
            // var element4 = Math.abs(wScroll - $(".sec-final").position().top);
        } else {
            $('.sec-final').removeClass('visible-show');
            // $(".cursor-scroll").removeClass("no-opacity");
        }
        var startTrans = 0.05;
        var endTrans = 0.95;
        //additional animations
        //10% into the first section, the word scroll will dissappear
        if (wScroll <= ($(".sec-one").position().top + $(".sec-one").innerHeight() * startTrans) ) {
            $('.tagline p').removeClass('no-opacity');
        } else {
            $('.tagline p').addClass('no-opacity');
        }
        //Transitional Breakpoints creating opacity overlays and tagline transforms
        // the variable allows for the end of the section be set to zero
        if (wScroll <= ($(".sec-one").position().top + $(".sec-one").innerHeight()) && wScroll >= ($(".sec-one").position().top) + $(".sec-one").innerHeight()*endTrans) { // This statement is inbetween .95 of section one and the bottom of section one
            var element1 = Math.abs(wScroll - (($(".sec-one").position().top) + $(".sec-one").innerHeight()*endTrans));
            Number.prototype.clamp = function(min, max) {
                return Math.min(Math.max(this, min), max);
            };            
            $('.tagline h1').css({ 
                'transform':'translateY(' + -element1*1 + 'px)'
            });
            $('.tagline').css({ 
                'background-color':'rgba(0, 0, 0,'+ element1/200 +')'
            });
        } else if (  wScroll >= ($(".sec-two").position().top) && wScroll <= ($(".sec-two").position().top + $(".sec-two").innerHeight()*startTrans)) { //this statement is inbetween the top of section 2 and .05 of section 2
            var element1 = Math.abs(wScroll - ($(".sec-two").position().top + $(".sec-two").innerHeight()*startTrans));

            $('.tagline h1').css({ 
                'transform':'translateY(' + element1*1 + 'px)'
            });
            $('.tagline').css({ 
                'background-color':'rgba(0, 0, 0,'+  element1/200+')'
            });

        } else if (wScroll <= $(".sec-two").position().top + $(".sec-two").innerHeight() && wScroll >= ($(".sec-two").position().top) + $(".sec-two").innerHeight()*endTrans ) {// This statement is inbetween .95 of section two and the bottom of section two
            var element1 = Math.abs(wScroll - (($(".sec-two").position().top) + $(".sec-two").innerHeight()*endTrans));
            $('.tagline h1').css({ 
                'transform':'translateY(' + -element1*1 + 'px)'
            });
            $('.tagline').css({ 
                'background-color':'rgba(0, 0, 0,'+  element1/200+')'
            });
            console.log(element1/100)
        } else if (  wScroll >= ($(".sec-three").position().top) && wScroll <= ($(".sec-three").position().top + $(".sec-three").innerHeight()*startTrans)) { //this statement is inbetween the top of section 3 and .05 of section 3
            var element1 = Math.abs(wScroll - ($(".sec-three").position().top + $(".sec-three").innerHeight()*startTrans));
            $('.tagline h1').css({ 
                'transform':'translateY(' + element1*1 + 'px)'
            });
            $('.tagline').css({ 
                'background-color':'rgba(0, 0, 0,'+ element1/200+')'
            });

        } else if (wScroll <= $(".sec-three").position().top + $(".sec-three").innerHeight() && wScroll >= ($(".sec-three").position().top) + $(".sec-three").innerHeight()*endTrans ) {// This statement is inbetween .95 of section three and the bottom of section three
            var element1 = Math.abs(wScroll - (($(".sec-three").position().top) + $(".sec-three").innerHeight()*endTrans));
            $('.tagline h1').css({ 
                'transform':'translateY(' + -element1*1 + 'px)'
            });
            $('.tagline').css({ 
                'background-color':'rgba(0, 0, 0,'+ element1/200+')'
            });
            $('.nav-arrow').css({ 
                'opacity': 1 + -element1/200
            });   
        } else if (  wScroll >= ($(".sec-final").position().top) && wScroll <= ($(".sec-final").position().top + $(".sec-final").innerHeight()*.7)) { //this statement is inbetween the top of section 4 and .7 of section 4
            var element2 = Math.abs(wScroll - ($(".sec-final").position().top + $(".sec-final").innerHeight()*.7));
            console.log(element2)
            $('.com-center h1 span:nth-child(even)').css({ 
                'transform':'translateY(' + element2/4 + 'px) rotate(' + element2/30 + 'deg)'
            });
            $('.com-center h1 span:nth-child(odd)').css({ 
                'transform':'translateY(' + -element2/4 + 'px) rotate(' + -element2/30 + 'deg)'
            });   
        } else if (wScroll >= ($(".sec-final").position().top) + $(".sec-final").innerHeight()*.7 ){// This statement is inbetween .7 of section
            $('.tagline').css({ 
                'transform':'translateY(0px)',
                'background-color':'rgba(0,0,0,0)'
            });
            $('.com-center h1 span').css({ 
                'transform':'translateY(0px) rotate(0deg)'
            });
            $('.nav-arrow').css({ 
                'opacity': 1 
            });
        } else {
            $('.tagline').css({ 
                'transform':'translateY(0px)',
                'background-color':'rgba(0,0,0,0)'
            });
            $('.com-center h1 span').css({ 
                'transform':'translateY(0px) rotate(0deg)'
            });
            $('.nav-arrow').css({ 
                'opacity': 1 
            });
        }
        //removing the module button
        if (  wScroll >= ($(".sec-final").position().top)) {
            $('.nav-arrow').css({ 
                'display':'none'
            });     
        } else {
            $('.nav-arrow').css({ 
                'display':'flex'
            });     
        }
}
// Navigation Logic
function navOpen() {
    $(".arrow").click(function(){  //clicking on the menu item
			$("nav.module").addClass("visible-grid");
    });
    $(".close").click(function(){  //clicking on the menu item
        $("nav.module").removeClass("visible-grid");
    });
}

// Random font family

function ranFont() {
    $(".variable").lettering(); // this breaks the text up into spans, with classes (in css we can target even or odd with :nth-child(even))

    $(".variable span").each(function(){
        var helvetica = "Helvetica Neue Lt Std"; // check to see what it is actually called once we get the fonts
        var parabole = 'Parabole Regular';
        var fonts = [helvetica, parabole]; //an array with the different possible fonts
        var randomFont = fonts[Math.floor(Math.random()*fonts.length)]; //This spits out a random choice between helvetica and parabole
        var currentElement = $(this); //this targets every current element, and iterates it from the first to the last. Since we used lettery
        var size = currentElement.css("font-size"); // this gets the size of the element so that we can manipulate it later
        // console.log(size);
        currentElement.css("font-family", randomFont + ", sans serif");//This sets the css property with the randomFont. The bread and butter of the function

        if (currentElement.css("font-family") == "\"Helvetica Neue Lt Std\", \"sans serif\"" || currentElement.css("font-family") == "\"Helvetica Neue\", \"sans serif\"" ||currentElement.css("font-family") == "\"Helvetica Neue\", sans serif" || currentElement.css("font-family") == "Helvetica Neue, sans serif"  ) {
            // console.log("Helvetica");
            currentElement.css({'font-size':"calc( " + size + " * 0.98)"});
        } else {
            currentElement.css('font-size',size);
            // console.log("Parabole")
        }
    });
}

// Stroke vs Fill
//currently this isn't working
function strokeFont()  {
    $(".stroke span").each(function(){
        var stroke = "#ffffff00";
        var fill = "#fff";
        var style = [stroke, fill, fill];
        var randomStyle = style[Math.floor(Math.random()*style.length)];

        var currentElement = $(this);
        currentElement.css("color", randomStyle);
    });
}
//this changes the entire page, making the user experience different for everyone
function ranColor()  {
    $(".invert").each(function(){
        var stroke = "#ffffff00";
        var fill = "#fff";
        var style = [stroke, fill];
        var randomStyle = style[Math.floor(Math.random()*style.length)];
    
        var currentElement = $(this);
        currentElement.css("background-color", randomStyle);
    });
}

function favIcon() {
    //instead of using a plugin
        var favicon_images = [
            'imgs/favicon/favicon000.png',
            'imgs/favicon/favicon002.png',
            'imgs/favicon/favicon004.png',
            'imgs/favicon/favicon006.png',
            'imgs/favicon/favicon008.png',
            'imgs/favicon/favicon010.png',
            'imgs/favicon/favicon012.png',         
            'imgs/favicon/favicon014.png',
            'imgs/favicon/favicon016.png',           
            'imgs/favicon/favicon018.png',          
            'imgs/favicon/favicon020.png',           
            'imgs/favicon/favicon022.png',          
            'imgs/favicon/favicon024.png',           
            'imgs/favicon/favicon026.png',
            'imgs/favicon/favicon028.png',
            'imgs/favicon/favicon030.png',
            'imgs/favicon/favicon032.png',
            'imgs/favicon/favicon034.png',
            'imgs/favicon/favicon036.png',
            'imgs/favicon/favicon038.png',
            'imgs/favicon/favicon040.png',
            'imgs/favicon/favicon042.png',
            'imgs/favicon/favicon044.png',
            'imgs/favicon/favicon046.png',
            'imgs/favicon/favicon048.png',
            'imgs/favicon/favicon050.png',
            'imgs/favicon/favicon052.png',
            'imgs/favicon/favicon054.png',
            'imgs/favicon/favicon056.png',
            'imgs/favicon/favicon058.png',
            'imgs/favicon/favicon060.png',
            'imgs/favicon/favicon062.png',
            'imgs/favicon/favicon064.png',
            'imgs/favicon/favicon066.png',
            'imgs/favicon/favicon068.png',
            'imgs/favicon/favicon070.png',
            'imgs/favicon/favicon072.png',
            'imgs/favicon/favicon074.png',
            'imgs/favicon/favicon076.png',
            'imgs/favicon/favicon078.png',
            'imgs/favicon/favicon080.png',
            'imgs/favicon/favicon082.png',
            'imgs/favicon/favicon084.png',
            'imgs/favicon/favicon086.png',
            'imgs/favicon/favicon088.png',
            'imgs/favicon/favicon090.png',
            'imgs/favicon/favicon092.png',
            'imgs/favicon/favicon094.png',
            'imgs/favicon/favicon096.png',
            'imgs/favicon/favicon098.png'
        ],
    image_counter = 0; // To keep track of the current image

    setInterval(function() {
    $("link[rel='icon']").remove();
    $("link[rel='shortcut icon']").remove();
    $("head").append('<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/png">');

    // If last image then goto first image
    // Else go to next image    
    if(image_counter == favicon_images.length -1)
    image_counter = 0;
    else
    image_counter++;
    }, 100);   
}

//Check browsers
function detectIEEdge() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        $(".invert").css("display", "none")
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        $(".invert").css("display", "none")
    }
    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        $(".invert").css("display", "none")
    }
    // other browser
    return false;
}
// This is the function that creates the cursor
function customCursor() {
    var moveControl = $(window);
    cursor1 = $(".cursor--small");
    cursorText = $(".cursor-text");
    cursorScroll = $(".cursor-scroll");
    cursorClick = $(".cursor-click");
    // cursorConnect = $(".cursor-connect");
    cursorClose = $(".cursor-close");
    cursorDate = $(".cursor-date");

    moveControl.mousemove(function(e){
        var valueX = e.clientX;
        var valueY = e.clientY;
        cursor1.css({
            "transform" : 'translate3D(' + valueX + 'px,' + valueY + 'px,0)'
        });
    });
    $(".arrow, .close, .social, .mail, .date").mouseleave(function(){ //LEAVE
        cursorScroll.removeClass("no-opacity");
        cursorClick.addClass("no-opacity");
        // cursorConnect.addClass("no-opacity");		
        cursorClose.addClass("no-opacity");		
        cursorDate.addClass("no-opacity");
        cursor1.css({
            'width' : '90px',
            'height' : '90px',
            'left' : '-45px',
            'top' : '-45px',
            'mix-blend-mode' : 'difference',
            'opacity' : '1'
        });
        cursorText.css({
            'font-size' : '.6em',
            'mix-blend-mode' : 'difference',
            'color' : '#fff'
        });	
    });
    // If the mouse goes over the mousenter function
    $(".arrow").mouseenter(function(){
        cursorScroll.addClass("no-opacity");
        cursorClick.removeClass("no-opacity");	
        cursorClose.addClass("no-opacity");		
        cursorDate.addClass("no-opacity");
        cursor1.css({
            'width' : '50px',
            'height' : '50px',
            'left' : '-25px',
            'top' : '-25px',
            'mix-blend-mode' : 'normal',
            'opacity' : '.9'
        });	
        cursorText.css({
            'font-size' : '.4em'
        });	
    });

    //close button hover
    $(".close").mouseenter(function(){
        cursorScroll.addClass("no-opacity");
        cursorClick.addClass("no-opacity");	
        cursorClose.removeClass("no-opacity");	
        cursorDate.addClass("no-opacity");	
        cursor1.css({
            'width' : '50px',
            'height' : '50px',
            'left' : '-25px',
            'top' : '-25px',
            'mix-blend-mode' : 'normal',
            'opacity' : '.9'
        });
        cursorText.css({
            'font-size' : '.4em',
        });	
    });
    //social hover
    $(".social, .mail").mouseenter(function(){
        cursorScroll.addClass("no-opacity");
        cursorClick.addClass("no-opacity");
        // cursorConnect.removeClass("no-opacity");		
        cursorClose.addClass("no-opacity");	
        cursorDate.addClass("no-opacity");	
        cursor1.css({
            'width' : '10px',
            'height' : '10px',
            'left' : '-5px',
            'top' : '-5px',
            'mix-blend-mode' : 'normal',
            // 'opacity' : '1'
        });		
        cursorText.css({
            'font-size' : '.4em',
        });	
    });
    //date hover
    $(".date").mouseenter(function(){
        cursorScroll.addClass("no-opacity");
        cursorClick.addClass("no-opacity");	
        cursorClose.addClass("no-opacity");	
        cursorDate.removeClass("no-opacity");	
        cursor1.css({
            'mix-blend-mode' : 'normal',
            'opacity' : '.9'
        });				
    });
    $(document).click(function() {
        cursor1.css({
            'width' : '150px',
            'height' : '150px',
            'left' : '-75px',
            'top' : '-75px',

        });
        setTimeout(function () { 
            cursor1.css({           
                'width' : '90px',
                'height' : '90px',
                'left' : '-45px',
                'top' : '-45px'
            });
        }, 100);
    });

    if ($('.tagline p').hasClass('no-opacity')) {
        cursorScroll.removeClass("no-opacity");
    } else {
        cursorScroll.addClass("no-opacity");
    }


// set the starting position of the cursor outside of the screen
}
//The reason why we set everything as a function and used these is to ensure that we check the scroll position before we load the page, in order to load the transformations accordingly
$(window).scroll(function() {
    customCursor()
    navScroll();
    navOpen();
});
// These functions check a variety of things and runs the previously mentioned function. 
$(document).ready(function() {
    customCursor()
    navScroll();
    navOpen();
    strokeFont();
    ranFont();
    ranColor();
    favIcon()
    detectIEEdge()

});
// this allows for resize changes, so that we can redu all of the items
$(window).resize(function() {
    customCursor()
    navScroll();
    navOpen();
    strokeFont();
    ranFont();    
    ranColor();
    
});