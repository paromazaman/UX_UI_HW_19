console.log("js file loaded!");

$(document).on("mouseover", ".profPic",function(){
    var tmpAnimation = 0;
    var element = $(".profPic");

    
    

    $({degrees: tmpAnimation - 360}).animate({degrees: tmpAnimation}, {

        duration: 2000,

        step: function(now) {

            element.css({

                transform: 'rotate(' + now + 'deg)'

            });

        }

    });
});

$(document).on("click","img", function(){
    console.log("YOU CLICKED ON img");
});