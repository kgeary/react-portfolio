const sliderOptions = {
  container: '#slider',
  mode: 'carousel', // or 'gallery'
  axis: 'horizontal', // or 'vertical'
  items: 1,
  slideBy: 1,
  gutter: 10,
  edgePadding: 0,
  fixedWidth: false,
  controls: true,
  controlsText: ['prev', 'next'],
  controlsContainer: false,
  controlsPosition: "bottom",
  navPosition: "bottom",
  nav: true,
  navContainer: false,
  navAsThumbnails: false,
  arrowKeys: false,
  speed: 500,
  autoplay: false,
  autoplayTimeout: 5000,
  autoplayDirection: 'forward',
  autoplayText: ['start', 'stop'],
  autoplayHoverPause: true,
  autoplayButton: false,
  autoplayButtonOutput: true,
  autoplayResetOnVisibility: true,
  loop: true,
  rewind: false,
  autoHeight: false,
  responsive: {
    640: {
      edgePadding: 20,
      gutter: 20,
      items: 2,
      slideBy: 2,
    },
    700: {
      gutter: 30
    },
    900: {
      items: 3,
      slideBy: 3,
    }
  },
  lazyload: true,
  touch: true,
  mouseDrag: false,
  swipeAngle: 15,
  nested: false,
  freezable: true,
  onInit: false
}

export default sliderOptions;