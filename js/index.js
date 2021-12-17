import slideMenu from './partials/menu.js';
import renderVideo from './partials/renderVideo.js';
import menuLink from './partials/menuLink.js';
import search from './partials/search.js';

slideMenu({
	openBtn: '.header__burger-btn',
	menu: '.navigation',
	classActiveMenu: 'navigation_active',
	closeTrigger: '.navigation__link, .navigation__close',
});

renderVideo();
menuLink();
search();
