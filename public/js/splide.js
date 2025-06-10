new Splide('#splide', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    gap: '1.5rem',
    arrows: true,
    breakpoints: {
      1024: { perPage: 2, gap: '1rem' },
      768: { perPage: 1, gap: '0.5rem' }
    }
  }).mount();