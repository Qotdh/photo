window.addEventListener('load', function() {
    const images = document.images;
    const totalImages = images.length;
    let imagesLoaded = 0;

    // التحقق من تحميل كل صورة
    function imageLoaded() {
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
            document.getElementById('preloader').style.display = 'none';
            document.documentElement.style.overflow = 'visible'; // إظهار محتوى الصفحة بعد التحميل
            document.body.style.overflow = 'visible'; 
        }
    }

    // إذا لم يكن هناك صور في الصفحة
    if (totalImages === 0) {
        imageLoaded();
    } else {
        // ربط حدث التحميل بكل صورة
        for (let i = 0; i < totalImages; i++) {
            if (images[i].complete) {
                imageLoaded();
            } else {
                images[i].addEventListener('load', imageLoaded);
                images[i].addEventListener('error', imageLoaded); // في حالة خطأ التحميل
            }
        }
    }
});

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
