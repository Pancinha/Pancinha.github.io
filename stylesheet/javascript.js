$(document).ready(function(){  //DESCE IMPRESSORAS
    $("h2").click(function(){
        $("#contcon").slideToggle("slow");
    });
});
$(document).ready(function(){  //DESCE IMPRESSORAS
    $(".topics1").click(function(){
        $("#Knowledge, #backInfo").slideToggle("slow");
    });
});
$(document).ready(function(){  //DESCE IMPRESSORAS
    $(".topics2").click(function(){
        $(".nameOfService,.infoService,.backService").slideToggle("slow");
    });
});
$(document).ready(function(){  //DESCE IMPRESSORAS
    $(".topics3").click(function(){
        $("#allProjects, .backProjects").slideToggle("slow");
    });
});

$(document).ready(function(){  //DESCE IMPRESSORAS
    $("#intro").click(function(){
        $("#allProjects, .backProjects,#Knowledge, #backInfo,.nameOfService,.infoService,.backService").slideUp("slow");
    });
});

$(document).ready(function(){  //DESCE IMPRESSORAS
    $("img").click(function(){
        $("#allProjects, .backProjects,#Knowledge, #backInfo,.nameOfService,.infoService,.backService").slideUp("slow");
    });
});



let time = 5000,
   currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

