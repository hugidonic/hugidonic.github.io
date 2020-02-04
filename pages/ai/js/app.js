// $('#fullpage').fullpage();
function delay(ms) {
  return new Promise(r => {
    setTimeout(r, ms)
  })
}

$(document).ready(function() {
  $('html').addClass('AI-animating')

  $('#back').click(async function(e){
    e.preventDefault();

    let link = this.href
    $('html').addClass('is-animating')

    delay(1000).then(()=>{
      window.location.href = link
    })
  })
})


