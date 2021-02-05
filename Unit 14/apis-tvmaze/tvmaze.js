/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */


/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */
$(function() {
  $("#search-form").on("submit", async function(evt) {
    evt.preventDefault();
    let query = $("#search-query").val();
    const show_res = await axios.get(`http://api.tvmaze.com/singlesearch/shows`, {params: {
      q: query
    }});
    console.log(show_res)
    
    let col = $("<div class='col-4'/>");
    let card = $(
      `<div class="card">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs" role="tablist">
            <li class="nav-item"> 
              <a class="nav-link active" aria-controls="show" aria-current="true" href="#">Show</a>
            </li>
            <li class="nav-item episodes-all">
              <a class="nav-link" aria-controls="episodes" aria-current="false" href="#">Episodes</a>
            </li>
          </ul>
        </div> 
        <div class="tab-content mt-3">
          <div class="tab-pane" data-tab="show" role="tabpanel" style="display: block;">
            <img src= ${show_res.data.image.medium} class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${show_res.data.name}</h5>
                  <p class="card-text">${show_res.data.summary}</p>
              </div>
          </div>
          <div class="tab-pane" data-tab="episodes" role="tabpanel" aria-labelledby="episodes-tab">
          </div>
        </div>
      </div>`);
      
    $(".nav-link", card).on("click", function(e) {
      e.preventDefault();
      let tab = $(this).attr('aria-controls');
      $('.nav-link.active', card).removeClass('active');
      $(this).addClass('active');
      
      let tabAttr = `[data-tab="${tab}"]`;
      $(`.tab-pane:not(${tabAttr})`, card).hide();
      $(`.tab-pane${tabAttr}`, card).show();
    })
    
    $(".episodes-all", card).on("click", async function(evt_button) {
      evt_button.preventDefault();
      let query_ep = await axios.get(`http://api.tvmaze.com/shows/${show_res.data.id}/episodes`);
      for(let episode of query_ep.data) {
        let allEpisodes = $(`
        <li class= "p-1"> 
          <div>
            ${episode.name}
          </div>
          <div>
            (Season ${episode.season}, Episode ${episode.number})
          </div>
        </li>`)
      $('[data-tab="episodes"]').append(allEpisodes); 
      }
    });
    

    if(!show_res.data.image.medium) {
      return img.src = "https://thumbs.dreamstime.com/z/no-internet-connection-offline-error-web-page-not-loading-black-dinosaur-vector-illustration-119559692.jpg";
    };
    col.prepend(card);
    $("#shows-list").prepend(col);
  })
});
