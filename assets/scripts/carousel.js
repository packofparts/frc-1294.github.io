const images = ["http://www.team1294.org/img/carousel/wowslider/16141082923_5ba28a67d5_o.jpg",
    "http://www.team1294.org/img/carousel/wowslider/20140424_firstroboticsworldchampionships_0203.jpg",
    "http://www.team1294.org/img/carousel/wowslider/img_7066.jpg"];

const $container = $("div#main-carousel");

for (let i = 0; i < images.length; i++) {
    let alt_text = "Slideshow Image " + (i + 1);
    let element = $("<img>", {src: images[i], alt: alt_text, title: alt_text});
    $container.append(element);
}

$("#main-carousel").slick({
    autoplay: true,
    autoplaySpeed: 5000
});
