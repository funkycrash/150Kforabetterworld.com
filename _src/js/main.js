
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
      Reveal.addEventListener('fragmenthidden', function (event) {
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
  // ## Carousel
  // ##
  // #########################################
  var carousel = $('.carousel')
  var currdeg = 0

  $('.next').on('click', { d: 'n' }, rotate)
  $('.prev').on('click', { d: 'p' }, rotate)

  function rotate (e) {
    if (e.data.d === 'n') {
      currdeg = currdeg - 72
    }
    if (e.data.d === 'p') {
      currdeg = currdeg + 72
    }
    carousel.css({
      '-webkit-transform': 'rotateY(' + currdeg + 'deg)',
      '-moz-transform': 'rotateY(' + currdeg + 'deg)',
      '-o-transform': 'rotateY(' + currdeg + 'deg)',
      'transform': 'rotateY(' + currdeg + 'deg)'
    })
  }

  // var carousel = document.querySelector('.carousel')
  // var cells = carousel.querySelectorAll('.carousel__cell')
  // var cellCount // cellCount set from cells-range input value
  // var selectedIndex = 0
  // var cellWidth = carousel.offsetWidth
  // var cellHeight = carousel.offsetHeight
  // var isHorizontal = true
  // var rotateFn = isHorizontal ? 'rotateY' : 'rotateX'
  // var radius, theta
  // // console.log( cellWidth, cellHeight );

  // function rotateCarousel () {
  //   var angle = theta * selectedIndex * -1
  //   carousel.style.transform = 'translateZ(' + -radius + 'px) ' +
  //     rotateFn + '(' + angle + 'deg)'
  // }

  // var prevButton = document.querySelector('.previous-button')
  // prevButton.addEventListener('click', function () {
  //   selectedIndex--
  //   rotateCarousel()
  // })

  // var nextButton = document.querySelector('.next-button')
  // nextButton.addEventListener('click', function () {
  //   selectedIndex++
  //   rotateCarousel()
  // })

  // var cellsRange = document.querySelector('.cells-range')
  // cellsRange.addEventListener('change', changeCarousel)
  // cellsRange.addEventListener('input', changeCarousel)

  // function changeCarousel () {
  //   cellCount = cellsRange.value
  //   theta = 360 / cellCount
  //   var cellSize = isHorizontal ? cellWidth : cellHeight
  //   radius = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount))
  //   for (var i = 0; i < cells.length; i++) {
  //     var cell = cells[i]
  //     if (i < cellCount) {
  //       // visible cell
  //       cell.style.opacity = 1
  //       var cellAngle = theta * i
  //       cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + 350 + 'px)'
  //     } else {
  //       // hidden cell
  //       cell.style.opacity = 0
  //       cell.style.transform = 'none'
  //     }
  //   }

  //   rotateCarousel()
  // }
  // // set initials
  // changeCarousel()
  // setInterval(function () {
  //   selectedIndex++
  //   rotateCarousel()
  // }, 10000)

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
