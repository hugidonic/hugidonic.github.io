

$(document).ready(function() {
  function delay(ms) {
    return new Promise(r => {
      setTimeout(r, ms)
    })
  }

  $('a.btn').click(async function(e){
    e.preventDefault();

    let link = this.href
    $('html').addClass('is-animating')

    delay(1000).then(()=>{
      window.location.href = link
    })
  })
})