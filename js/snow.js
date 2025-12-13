// If the current date is during the week leading up to Christmas, let it snow, let it snow, let it snow!

var sf;

if (new Date().getMonth() === 11 && (new Date().getDate() >= 19 && new Date().getDate() <= 25)) {
    sf = new Snowflakes({
        color: "#a7c9d3",
        count: 100,
        speed: 1.5,
        minOpacity: 0.7,
        maxOpacity: 1,
    });
}