import ScrollSuave from './modules/scroll-suave.js';
import TabNav from './modules/menu-navtab.js';
import Accordion from './modules/anima-faq.js';
import Modal from  './modules/modal.js';
import initTooltip from  './modules/tooltip.js';
import initDropdownMenu from  './modules/dropdown-menu.js';
import initMenuMobile from  './modules/menu-mobile.js';
import initFuncionamento from  './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initAnimacaoScroll from './modules/anima-scroll.js';


const scrollsuave = new ScrollSuave('[data-menu="menu"] a[href^="#"');
scrollsuave.init();

const accordion = new Accordion('[data-accordion="faq"] dt');
accordion.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();

