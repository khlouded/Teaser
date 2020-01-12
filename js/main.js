
// general use notes  Put each logic section into a class and then output that class in the following
// 
// console.log("working")// verification

//Scroll Logic
function navScroll() {
    $(window).scroll(function() {//adding a scroll function to the window therefore when ever you scroll the window it will activate the contents of this function
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

        if (wScroll <= ($(".sec-one").position().top + $(".sec-one").innerHeight() * 0.1) ) {
            $('.tagline p').removeClass('no-opacity');
        } else {
            $('.tagline p').addClass('no-opacity');
        }
        if (wScroll <= ($(".sec-one").position().top + $(".sec-one").innerHeight()) && wScroll >= ($(".sec-one").position().top) ) {
            $('.sec-one').addClass('visible-show');
            var element1 = Math.abs(wScroll - $(".sec-one").position().top);
            console.log(element1 + " break one");
            // console.log(element);
        } else {
            $('.sec-one').removeClass('visible-show');
        }
        // If the scroll position is passed the bottom of section one (THIS IS SECTION TWO)
        if (wScroll >= ($(".sec-one").position().top + $(".sec-one").innerHeight()) && wScroll <= ($(".sec-two").position().top + $(".sec-two").innerHeight())) { //so what i'm doing is finding the position of the bottom of the first element and comparing that to the scroll value
            // console.log("Section-Two");
            $('.sec-one').removeClass('visible-show');
            $('.sec-two').addClass('visible-show');
            $('.com-mid').css({ 
                'transform':'translateX(' + wScroll/2 + 'px)'// testing transform movement
            });
            $('.com-bot').css({ 
                'transform':'translateX(' + -wScroll/2 + 'px)'// testing transform movement
            });
            $('.com-top').css({ 
                'transform':'translateX(' + -wScroll/2 + 'px)'// testing transform movement
            });
            var element2 = Math.abs(wScroll - $(".sec-two").position().top);
            console.log(element2 + " break two");
        } else {
            // console.log("Section-One");
            $('.sec-two').removeClass('visible-show');
        }
        // If the scroll position is passed the bottom of section two (THIS IS SECTION THREE)
        if (wScroll >= ($(".sec-two").position().top + $(".sec-two").innerHeight()) && wScroll <= ($(".sec-three").position().top + $(".sec-three").innerHeight()) ) {//so what i'm doing is finding the position of the bottom of the first element and comparing that to the scroll value
            // console.log("Section-Three");
            $('.sec-two').removeClass('visible-show');
            $('.sec-three').addClass('visible-show');
            var element3 = Math.abs(wScroll - $(".sec-three").position().top);
            console.log(element3 + " break three");
            //upside down
            $('.com-mleft').css({ 
                'transform':'translateY(' + element3*3 + 'px)  rotate(180deg)'// testing transform movement
            });
            $('.com-right').css({ 
                'transform':'translateY(' + element3*3 + 'px)  rotate(180deg)'// testing transform movement
            });
            $('.com-left').css({ 
                'transform':'translateY(' + -element3 + 'px)'// testing transform movement
            });
            $('.com-mright').css({ 
                'transform':'translateY(' + -element3 + 'px)'// testing transform movement
            });
        } else {
            $('.sec-three').removeClass('visible-show');
        }
        //If the scroll position is passed the bottom of section three (THIS IS SECTION FOUR)
        if (wScroll >= ($(".sec-three").position().top + $(".sec-three").innerHeight()) && wScroll <= ($(".sec-final").position().top + $(".sec-final").innerHeight())) {//so what i'm doing is finding the position of the bottom of the first element and comparing that to the scroll value
            // console.log("Section-Three");
            
            $('.sec-three').removeClass('visible-show');
            $('.sec-final').addClass('visible-show');
            var element4 = Math.abs(wScroll - $(".sec-final").position().top);
            console.log(element4  + " break four");
        } else {
            $('.sec-final').removeClass('visible-show');
        }
    });
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

window.setInterval(function(){
    ranFont()
}, 2000);

// I guess, if font-family: helvetica neue - than the jquery plugin will activate with all of the ranomized settings
// Useful snips document.getElementById("fontfamily").style.fontFamily;
// https://stackoverflow.com/questions/21862759/how-do-i-generate-a-random-font-to-a-line-of-text-every-time-page-is-refreshed


//The reason why we set everything as a function and used these is to ensure that we check the scroll position before we load the page, in order to load the transformations accordingly
$(window).scroll(function() {
    navScroll();
    navOpen();
});

$(document).ready(function() {
    navScroll();
    navOpen();
    ranFont();
});
$(window).resize(function() {
    navScroll();
    navOpen();
    ranFont();
});