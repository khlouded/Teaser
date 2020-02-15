//Scroll Logic
//edits
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
            // var element4 = Math.abs(wScroll - $(".sec-final").position().top);
        } else {
            $('.sec-final').removeClass('visible-show');
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
            // console.log(element2)
            $('.tagline h1').css({ 
                'transform':'translateY(0px)'
            });
            $('.tagline').css({ 
                'background-color':'rgba(0,0,0,0)'
            });
            $('.com-center h1 span:nth-child(even)').css({ 
                'transform':'translateY(' + element2/4 + 'px) rotate(' + element2/30 + 'deg)'
            });
            $('.com-center h1 span:nth-child(odd)').css({ 
                'transform':'translateY(' + -element2/4 + 'px) rotate(' + -element2/30 + 'deg)'
            });   
            $('.tag-four').css({ 
                'opacity': 0
            });
        } else if (wScroll >= ($(".sec-final").position().top) + $(".sec-final").innerHeight()*.7 ){// This statement is inbetween .7 of section and end
            $('.tagline').css({ 
                'background-color':'rgba(0,0,0,0)'
            });
            $('.tagline h1').css({ 
                'transform':'translateY(0px)'
            });
            $('.com-center h1 span').css({ 
                'transform':'translateY(0px) rotate(0deg)'
            });
            $('.nav-arrow').css({ 
                'opacity': 1 
            });

            $('.tag-four').css({ 
                'opacity': 1 
            });
            
        } else if (wScroll >= ($(".sec-three").position().top + $(".sec-three").innerHeight()*startTrans) && wScroll <= ($(".sec-three").position().top + $(".sec-three").innerHeight()*endTrans) || wScroll <= ($(".sec-two").position().top) + $(".sec-two").innerHeight()*endTrans && wScroll >= ($(".sec-two").position().top + $(".sec-two").innerHeight()*startTrans) ) {
            $('.tagline h1').css({ 
                'transform':'translateY(0)'
            });
            $('.tagline').css({ 
                'background-color':'rgba(0,0,0,0)'
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
            $('.tag-four').css({ 
                'opacity': 0
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
    
    // Helvetica Neue TESTING HERE CHANGE AFTER

    // Change on mac
    

    $(".variable span").each(function(){
        var helvetica = 'Helvetica URL'; // check to see what it is actually called once we get the fonts
        var parabole = 'Parabole Regular';
        var fonts = [helvetica, parabole]; //an array with the different possible fonts
        var randomFont = fonts[Math.floor(Math.random()*fonts.length)]; //This spits out a random choice between helvetica and parabole
        var currentElement = $(this); //this targets every current element, and iterates it from the first to the last. Since we used lettery
        var size = currentElement.css("font-size"); // this gets the size of the element so that we can manipulate it later
        // console.log(size);
        var mac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

        if (mac) {
            currentElement.css("font-family", randomFont + ", \"Helvetica Neue\", \"Helvetica Neue Light\", \"HelveticaNeue-Light\", Helvetica, \"open sans\", sans-serif");//This sets the css property with the randomFont. The bread and butter of the function
        } else {
            currentElement.css("font-family", randomFont + ", \"Helvetica Neue\", \"Helvetica Neue Light\", \"HelveticaNeue-Light\", Helvetica, Roboto, sans-serif");//This sets the css property with the randomFont. The bread and butter of the function
        }

        if (currentElement.css("font-family") == "\'Helvetica URL\', \"Helvetica Neue\", \"Helvetica Neue Light\", \"HelveticaNeue-Light\", Helvetica, Roboto, sans-serif" || currentElement.css("font-family") == "\'Helvetica URL\', \"Helvetica Neue\", \"Helvetica Neue Light\", \"HelveticaNeue-Light\", Helvetica, Roboto, \"sans-serif\"" || currentElement.css("font-family") == "\"Helvetica URL\", \"Helvetica Neue\", \"Helvetica Neue Light\", HelveticaNeue-Light, Helvetica, Roboto, sans-serif" || currentElement.css("font-family") == "\'Helvetica URL\', \"Helvetica Neue\", \"Helvetica Neue Light\", HelveticaNeue-Light, Helvetica, Roboto, sans-serif" || currentElement.css("font-family") == "\'Helvetica Neue\', \"Helvetica Neue\", \"Helvetica Neue Light\", HelveticaNeue-Light, Helvetica, Roboto, sans-serif"
        || currentElement.css("font-family") == "\"Helvetica Neue\", \"Helvetica URL\", \"Helvetica Neue Light\", HelveticaNeue-Light, Helvetica, Roboto, sans-serif") {
            // console.log("Helvetica");
            currentElement.css({'font-size':"calc( " + size + " * 0.981)"});
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

    // if ($('.tagline p').hasClass('no-opacity')) {
    //     cursorScroll.removeClass("no-opacity");
    // } else {
    //     cursorScroll.addClass("no-opacity");
    // }


// set the starting position of the cursor outside of the screen
}
function macResponse() {

    var mac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

    if (mac) {
        $('.pat-one .variable span').css({
            'margin': '-5vw',
        });		
        $('.pat-three .variable span').css({
            'margin': '-2vw',
        });		
    } else {
        $('.pat-one .variable span').css({
            'margin': '-10vw',
        });		
        $('.pat-three .variable span').css({
            'margin': '-5vw',
        });		
    }
    var isMobile = false; //initiate as false
        // device detection https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device

    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
        isMobile = true;
        $(".cursor--small").css({
            'opacity' : '0'
        })
        
    }
}

//The reason why we set everything as a function and used these is to ensure that we check the scroll position before we load the page, in order to load the transformations accordingly
$(window).scroll(function() {
    customCursor();
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
    favIcon();
    detectIEEdge();
    macResponse();
});
// this allows for resize changes, so that we can redu all of the items
$(window).resize(function() {
    customCursor();
    navScroll();
    navOpen();
    strokeFont();
    ranFont();        
});