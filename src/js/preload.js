let preload = new Array();

preload[0] = "/assets/images/showcase-3.jpg";
preload[1] = "/assets/images/showcase-4.jpg";
preload[2] = "/assets/images/showcase-5.jpg";
preload[3] = "/assets/images/showcase-9.jpg";
preload[4] = "/assets/images/showcase-11.jpg";

let loadedimages = new Array();
for (let i = 0; i < preload.length; i++) {
    loadedimages[i] = new Image();
    loadedimages[i].src = preload[i];
}