$(document).ready(function () {
  $('#arRoot').hide()
  $('#vrRoot').hide()

  
  $('.intro__ar').on('click', function() {
    $(this).toggleClass('active')
    $('.intro__vr').toggleClass('disactive')
    $('#arRoot').toggle()
  })

  $('.intro__vr').on('click', function() {
    $(this).toggleClass('active')
    $('.intro__ar').toggleClass('disactive')
    $('#vrRoot').toggle()
  })

  function delay(ms) {
    return new Promise(r => {
      setTimeout(r, ms)
    })
  }
  
  delay(2000).then(()=>{    
    $('html').addClass('AI-animating')
  })

  $('#back').click(async function(e){
    e.preventDefault();

    let link = this.href
    $('html').addClass('is-animating')

    delay(1000).then(()=>{
      window.location.href = link
    })
  })

  
});