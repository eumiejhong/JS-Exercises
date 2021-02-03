
$(function(){
    $("#keyword-form").on("submit", async function(evt) {
        evt.preventDefault();
        let keywordVal = $("#giphy-keyword").val();
        const res = await axios.get("https://api.giphy.com/v1/gifs/search", {params: {
            q: keywordVal,
            api_key: "mnnKX0jwaxVDFFJSAFfwwqW4BHAS7LzY",
            limit: 1
        }});
        img = $("<img class = img-fluid alt= Responsive image/>")
        img.attr('src', res.data.data[0].images.original.url);
        const col = $("<div class = col-4/>");
        col.append(img);
        $(".row").append(col);
    });
    $("#keyword-form").on("reset", function(evt) {
        evt.preventDefault();
        $("#gif-area").empty();
    })
});