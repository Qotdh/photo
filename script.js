$(document).ready(function(){
    $("img").click(function(){
        var t = $(this).attr("src");
        $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
        $("#myModal").modal();
    });

    $("video").click(function(){
        var v = $(this).find("source").attr("src");
        $(".modal-body").html("<video class='model-vid' controls><source src='"+v+"' type='video/mp4'></source></video>");
        $("#myModal").modal();  
    });
});

/*-------navbar-------*/
