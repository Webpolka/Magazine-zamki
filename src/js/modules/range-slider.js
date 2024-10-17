function rangeSlider() {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
            $("#minRange").val(ui.values[0] + " ₽");
            $("#maxRange").val(ui.values[1] + " ₽");
        }
    });
    $("#minRange").val($("#slider-range").slider("values", 0) + " ₽");
    $("#maxRange").val($("#slider-range").slider("values", 1) + " ₽");
}

export default rangeSlider;
