// Interface FR/EN – le contenu de fond (articles, historique) reste en français, comme l'original.
// Choix de langue gardé en mémoire de la page uniquement (pas de cookie, pas de localStorage).
const EN={nav_home:"Home",nav_pres:"About",nav_members:"Members",nav_ham:"Amateur radio",nav_act:"Activities",nav_traffic:"Operating",nav_tech:"Technical",nav_links:"Links",
tagline:"South Brabant section of the UBA",hero_lead:"Local UBA section in Ottignies-Louvain-la-Neuve. Meeting on the first Friday of each month and a section net every Sunday.",
btn_meet:"Monthly meeting",btn_contact:"Contact us",h_meet:"Section meeting",meet_long:"First Friday of the month, from 7:45 pm",meet_when:"1st Friday of the month, from 7:45 pm",
h_qso:"Section net",qso_when:"Sundays from 9:30 local time",qso_note:"(“144.575 Mcs” on the old site)",h_committee:"Committee",treasurer:"Treasurer",secretary:"Secretary",webmaster:"Webmaster",
h_hist:"BTS history",hist_txt:"A history of the section is available as a PDF (French). See also the About page.",h_ethics:"Ethics and procedures",h_news:"News",
news_none:"the old site has no news section; the latest activity listed dates from 2010 (HF SSB field day).",h_some_links:"Some links",h_timeline:"Milestones",
f_meet:"Meeting",legal:"Legal notice",nocookie:"No cookies, no trackers",mock:"Mockup – not published",enote:"Interface in English; articles and documents are in French.",filter:"Filter articles…"};
const FR={};
document.querySelectorAll('[data-i18n]').forEach(e=>FR[e.dataset.i18n]??=e.textContent);
function setLang(l){document.documentElement.lang=l;
 document.querySelectorAll('[data-i18n]').forEach(e=>{const k=e.dataset.i18n;const v=(l==='en'?EN:FR)[k];if(v!==undefined)e.textContent=v;});
 document.querySelectorAll('[data-i18n-ph]').forEach(e=>e.placeholder=l==='en'?EN.filter:'Filtrer les articles…');
 const n=document.querySelector('.enote');if(n)n.hidden=l!=='en';
 document.querySelectorAll('.lang button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===l));
 document.querySelectorAll('a[href*=".html"]:not([href^="http"])').forEach(a=>{const u=a.getAttribute('href').split('#');a.href=u[0].split('?')[0]+(l==='en'?'?lang=en':'')+(u[1]?'#'+u[1]:'')});}
document.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>setLang(b.dataset.lang));
if(new URLSearchParams(location.search).get('lang')==='en')setLang('en');
