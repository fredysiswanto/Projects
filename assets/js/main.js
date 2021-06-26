const base_url = () => {
  return window.location.host === 'http://127.0.0.1:5500/'
    ? 'http://127.0.0.1:5500/'
    : 'https://fredysiswanto.github.io/projects';
  // return data;
};
const dataListProjects = [
  {
    id: 0,
    title: 'JS-SpotifyAPI',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos.',
    url: '/src/JS-SpotifyAPI',
    img: '/src/JS-SpotifyAPI/img.jpg',
  },
  {
    id: 1,
    title: 'breakout game',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos.',
    url: '/src/breakout-game',
    img: '/src/breakout-game/img.jpg',
  },
  {
    id: 2,
    title: 'custom video player',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos.',
    url: '/src/custom-video-player',
    img: '/src/custom-video-player/img.jpg',
  },
  {
    id: 3,
    title: 'dom array methods',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos.',
    url: '/src/dom-array-methods',
    img: '/src/dom-array-methods/img.jpg',
  },
  {
    id: 4,
    title: 'exchange-rate',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos.',
    url: '/src/exchange-rate',
    img: '/src/exchange-rate/img.jpg',
  },
  {
    id: 5,
    title: 'expense-tracker',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos.',
    url: '/src/expense-tracker',
    img: '/src/expense-tracker/img.jpg',
  },
  {
    id: 6,
    title: 'form-validator',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos.',
    url: '/src/form-validator',
    img: '/src/form-validator/img.jpg',
  },
  {
    id: 7,
    title: 'hangman',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos.',
    url: '/src/hangman',
    img: '/src/hangman/img.jpg',
  },
  {
    id: 8,
    title: 'infinite_scroll_blog',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos.',
    url: '/src/infinite_scroll_blog',
    img: '/src/infinite_scroll_blog/img.jpg',
  },
  {
    id: 9,
    title: 'lyrics-search',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos.',
    url: '/src/lyrics-search',
    img: '/src/lyrics-search/img.jpg',
  },
  {
    id: 10,
    title: 'meal-finder',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos.',
    url: '/src/meal-finder',
    img: '/src/meal-finder/img.jpg',
  },
  {
    id: 11,
    title: 'memory-cards',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos.',
    url: '/src/memory-cards',
    img: '/src/memory-cards/img.jpg',
  },
  {
    id: 12,
    title: 'modal-menu-slider',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos.',
    url: '/src/modal-menu-slider',
    img: '/src/modal-menu-slider/img.jpg',
  },
  {
    id: 13,
    title: 'movie-seat-booking',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos.',
    url: '/src/movie-seat-booking',
    img: '/src/movie-seat-booking/img.jpg',
  },
  {
    id: 14,
    title: 'music-player',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos.',
    url: '/src/music-player',
    img: '/src/music-player/img.jpg',
  },
  {
    id: 15,
    title: 'new-year-countdown',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos.',
    url: '/src/new-year-countdown',
    img: '/src/new-year-countdown/img.jpg',
  },
  {
    id: 16,
    title: 'relaxer-app',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos.',
    url: '/src/relaxer-app',
    img: '/src/relaxer-app/img.jpg',
  },
  {
    id: 17,
    title: 'sortable-list',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos.',
    url: '/src/sortable-list',
    img: '/src/sortable-list/img.jpg',
  },
  {
    id: 18,
    title: 'speak-number-guess',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos.',
    url: '/src/speak-number-guess',
    img: '/src/speak-number-guess/img.jpg',
  },
  {
    id: 19,
    title: 'speech-text-reader',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos.',
    url: '/src/speech-text-reader',
    img: '/src/speech-text-reader/img.jpg',
  },
  {
    id: 20,
    title: 'typing-game',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos.',
    url: '/src/typing-game',
    img: '/src/typing-game/img.jpg',
  },
];

const listProjects = document.getElementById('list-projects');
let elems = '';
dataListProjects.forEach((project) => {
  elems += `
  <div class="col">
  <div class="card shadow-sm">
    <img
      src="${base_url() + project.img}"
      alt=""
      width="100%"
      height="225"/>
    <div class="card-body">
      <h3>${project.title}</h3>
      <div class="d-flex justify-content-center align-items-center" >
        <div class="btn-group">
        <a href="${
          base_url() + project.url
        }" class="btn btn-sm btn-primary" target='_blank'>view</a>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
});
listProjects.innerHTML = elems;

// console.log(window.location.host);
// console.log(base_url(), 'base');
