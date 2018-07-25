/*Scale*/

function resizeWindow() {
    var baseX = $('#scaleDiv').width();
    var baseY = $('#scaleDiv').height();

    var height = $('body').innerHeight();
    var width = $('body').innerWidth();
    var scaleY = height/baseY;
    var scaleX = width/baseX;
    var scale = 1;
    if (scaleX > scaleY){
        scale = scaleY;
    }else{
        scale = scaleX;
    }
    if (scale<1) scale = 1;
    
    $('#scaleDiv').attr('style', '-webkit-transform:scale(' + scale + ');');
}
$(window).resize(resizeWindow);