var cosinesSlider = tns({
  container: '.new-cosines-slider', // main slider container class name
  items: 3,     // number of items to be display at a time
  slideBy: 1, // how many item should be slide out
  autoplay: true,
  autoplayButtonOutput: false, // to hide the play and stop btn that come by  default when autoplay is enabled
  speed: 500, // transition speed to the next slide
  // controlsContainer: "<class name>", // another way of styling the control btn
  navPosition: "bottom", // to position the indicator or nav button
  gutter: 20, // space between each slide items
  rewind: false,
  // responsiveness during screen break point
  autoplayDirection: "forward",
  responsive: {
    // from small screen from 0px up to screen of size of 500px
    0: {
      items: 1.5,
      nav: false //hide indicator/nav button
    },

    // from small screen from 500px up to screen of size of 768px
    500: {
      items: 2,
      nav: true
    },

    // from small screen from 768px upward
    768: {
      items: 3,
      nav: true,
    },
  }
})

