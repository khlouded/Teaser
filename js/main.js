
// general use notes  Put each logic section into a class and then output that class in the following
// 
console.log("working")// verification

//Scroll Logic
function navScroll() {
    $(window).scroll(function() {//adding a scroll function to the window therefore when ever you scroll the window it will activate the contents of this function
        var wScroll = $(window).scrollTop(); // a variable that is a number that describes how far you have scrolled
        
        console.log(wScroll);//This is just to check the scroll value if I need number information. I think this is based on pixels.
    });

    //Visibility Logic
    //This uses breakpoints of each section. When we scroll to one section, then the display of the other section would show up or dissapear. I need to decide weather the breakpoints are based on the end or the start of a section, as if it's display: none, then that section might not exists in the DOM
};
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
});