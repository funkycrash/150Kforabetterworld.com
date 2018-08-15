
$(document).ready(function () {


  // Loading the music
  var sound = new Howl({
    src: ['/assets/music/background_music.mp3'],
    loop: true,
    onload: function () {
      $('#first').show()
      // Slideshow initialization
      Reveal.initialize({
        controls: false,
        autoSlide: 5000,
        autoPlayMedia: true
      })

      // Add bounce effects on some fragments
	    Reveal.addEventListener('fragmentshown', function (event) {
        if ($(event.fragment).hasClass('bounce')) {
          $(event.fragment).find('img').addClass('animation-target')
        }
      })
      Reveal.addEventListener( 'fragmenthidden', function( event ) {
        if ($(event.fragment).hasClass('bounce')) {
          $(event.fragment).find('img').removeClass('animation-target')
        }
      })
    }
  })

  sound.play()

  // Fade out the music during video slide (on slide 9)
  Reveal.addEventListener('slidechanged', function (event) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    if (event.indexh === 5) {
      sound.fade(1.0, 0.2, 3)
    }
    if (event.indexh === 4 || event.indexh === 6) {
      sound.fade(0.2, 1.0, 3)
    }
  })

  // #########################################
  // ##
  // ## Functional Javascript
  // ##
  // #########################################

  $('.speaker').click(function (e) {
    e.preventDefault()
    if ($(this).hasClass('mute')) {
      sound.play()
      $(this).removeClass('mute')
    } else {
      sound.pause()
      $(this).addClass('mute')
    }
  })

  setTimeout(function () {
    $('.slide-background:first-of-type').addClass('zoom')
  }, 200)
})
