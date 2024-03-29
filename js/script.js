import ScrollSuave from './modules/scroll-suave.js';
import TabNav from './modules/menu-navtab.js';
import Accordion from './modules/anima-faq.js';
import Modal from  './modules/modal.js';
import Tooltip from  './modules/tooltip.js';
import DropdownMenu from  './modules/dropdown-menu.js';
import MenuMobile from  './modules/menu-mobile.js';
import Funcionamento from  './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import ScrollAnima from './modules/anima-scroll.js';


const scrollsuave = new ScrollSuave('[data-menu="menu"] a[href^="#"');
scrollsuave.init();

const accordion = new Accordion('[data-accordion="faq"] dt');
accordion.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnima = new ScrollAnima('[data-scroll="anime-scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();



fetchAnimais('./animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
