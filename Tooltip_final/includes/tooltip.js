

//


$(document).ready(function () {


    $(".tooltip").on("mouseover", showHTML)


    function showHTML() {

        if ($(this).attr('data-tip-type') == 'text') {

            //alert("Hello")

            $('#tooltip_container').html($(this).attr('data-tip-source'))

        }
        if ($(this).attr('data-tip-type') == 'html') {

            var elementToGet = "#" + $(this).attr('data-tip-source')
            var newHTML = $(elementToGet).html()
            $('#tooltip_container').html(newHTML);

        }
        
        $('#tooltip_container').css({'display':'block','opacity':0}).animate({opacity:1},250);
       

        
    }

});



var tooltipWidth = $('#tooltip_container').outerWidth();
var tooltipHeight = $('#tooltip_container').outerHeight();

$(document).ready(function () {

    $(".tooltip").on("mousemove", onMouseeMove)

})

function onMouseeMove(evt) {

     //width detection
     //cursor is on the right side
    var pageWidth = $('body').width();
    if (evt.pageX > pageWidth / 2) {
        $('#tooltip_container').css('left', (evt.pageX - tooltipWidth + 20) + 'px');
        // we are on the left side
    } else {
        $('#tooltip_container').css('left', (evt.pageX - 20) + 'px');
    }
    //height detection
   if (evt.pageY > 100) {
        $('#tooltip_container').css('top', (evt.pageY - (tooltipHeight + 20)) + 'px');
 } else {
        $('#tooltip_container').css('top', (evt.pageY + 20) + 'px');
    }

    $('#tooltip_container').css('left',(evt.pageX-15)+'px')
    $('#tooltip_container').css('top',(evt.pageY+15)+'px')



}


$(document).ready(function() {

    $(".tooltip").on("mouseout", onMouseeOut)

})

function onMouseeOut() {
    ('#tooltip_container').animate({opacity:0},250, function(){
    $('#tooltip_container').css('display','none').html('')
    })
}

/*
II solution
$(document).ready(function () {


    
    $(".tooltip").mousemove(function(e){

        var tooltipWidth = $('#tooltip_container').outerWidth();
        var tooltipHeight = $('#tooltip_container').outerHeight();

        $('#tooltip_container').css('left',e.pageX-20+'px')
        $('#tooltip_container').css('top',e.pageY+20+'px')



    })

})

*/