<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>coachbragim — кинотеатр</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@500;800&family=Manrope:wght@400;600;800&display=swap" rel="stylesheet">
<style>
:root{--bg:#1d0a14;--bg2:#2b1020;--card:#3a1629;--gold:#ffbf47;--cream:#fff3dd;--muted:#c9a9b5;--red:#e5384f;--ok:#4fd18b;
--h:'Unbounded','Trebuchet MS',sans-serif;--b:'Manrope','Segoe UI',Arial,sans-serif}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--cream);font-family:var(--b);line-height:1.55}
a{color:inherit;text-decoration:none}
button{font-family:inherit;cursor:pointer;border:0}
:focus-visible{outline:3px solid var(--gold);outline-offset:2px}
header{position:sticky;top:0;z-index:20;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 5vw;background:rgba(29,10,20,.92);backdrop-filter:blur(8px);border-bottom:2px solid var(--card)}
.logo{font-family:var(--h);font-weight:800;font-size:1.3rem;letter-spacing:-.5px;display:flex;align-items:center;gap:10px}
.logo i{display:inline-flex;gap:3px}
.logo i b{width:8px;height:8px;border-radius:50%;background:var(--gold);box-shadow:0 0 8px var(--gold)}
nav{display:flex;gap:22px;align-items:center}
nav a{font-weight:600;color:var(--muted)}
nav a:hover{color:var(--gold)}
.btn{background:var(--gold);color:#2a1100;font-weight:800;padding:11px 22px;border-radius:999px;transition:transform .15s}
.btn:hover{transform:translateY(-2px)}
.btn.ghost{background:transparent;color:var(--cream);border:2px solid var(--muted)}
.btn:disabled{opacity:.4;cursor:not-allowed;transform:none}
.hero{padding:9vh 5vw 8vh;background:radial-gradient(ellipse at 80% 0,#7a1f3d 0,transparent 55%),linear-gradient(var(--bg),var(--bg2));position:relative;overflow:hidden}
.hero h1{font-family:var(--h);font-weight:800;font-size:clamp(2.4rem,8vw,6rem);line-height:1;letter-spacing:-2px;max-width:900px}
.hero h1 span{color:var(--gold)}
.hero p{max-width:520px;margin:22px 0 30px;color:var(--muted);font-size:1.1rem}
.bulbs{position:absolute;left:0;right:0;bottom:0;height:14px;background:radial-gradient(circle,var(--gold) 4px,transparent 5px) 0 50%/28px 14px repeat-x;animation:blink 2.4s steps(2) infinite}
@keyframes blink{50%{opacity:.35}}
@media(prefers-reduced-motion:reduce){.bulbs{animation:none}}
section{padding:64px 5vw}
h2{font-family:var(--h);font-size:clamp(1.5rem,4vw,2.3rem);margin-bottom:28px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:26px}
.movie{cursor:pointer;transition:transform .2s}
.movie:hover{transform:translateY(-6px)}
.poster{aspect-ratio:2/3;border-radius:14px;overflow:hidden;box-shadow:0 12px 30px rgba(0,0,0,.5)}
.poster svg,.poster img{width:100%;height:100%;display:block;object-fit:cover}
.movie h3{margin-top:12px;font-size:1.05rem}
.meta{color:var(--muted);font-size:.9rem}
.price-tag{color:var(--gold);font-weight:800}
.prices{display:flex;flex-wrap:wrap;gap:18px}
.prices div{background:var(--card);padding:22px 28px;border-radius:14px;min-width:210px}
.prices b{display:block;font-family:var(--h);font-size:1.6rem;color:var(--gold)}
footer{padding:36px 5vw;border-top:2px solid var(--card);color:var(--muted);text-align:center}
.overlay{position:fixed;inset:0;background:rgba(10,2,6,.82);display:none;align-items:flex-start;justify-content:center;overflow:auto;z-index:50;padding:4vh 3vw}
.overlay.open{display:flex}
.modal{background:var(--bg2);border:2px solid var(--card);border-radius:20px;width:100%;max-width:880px;padding:28px;position:relative}
.modal.small{max-width:420px}
.x{position:absolute;right:16px;top:12px;background:none;color:var(--muted);font-size:2rem;line-height:1}
.mv{display:grid;grid-template-columns:200px 1fr;gap:24px}
@media(max-width:640px){.mv{grid-template-columns:1fr}.mv .poster{max-width:200px}nav a.hide{display:none}}
.tags span{display:inline-block;background:var(--card);padding:3px 12px;border-radius:99px;margin:0 6px 6px 0;font-size:.85rem}
.row{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0 18px}
.chip{background:var(--card);color:var(--cream);padding:9px 16px;border-radius:10px;font-weight:600}
.chip.on{background:var(--gold);color:#2a1100}
.screen{height:8px;background:linear-gradient(90deg,transparent,var(--gold),transparent);border-radius:50%;margin:20px auto 6px;max-width:420px;box-shadow:0 10px 30px rgba(255,191,71,.5)}
.scr-l{text-align:center;color:var(--muted);font-size:.8rem;margin-bottom:14px}
.seats{display:flex;flex-direction:column;gap:7px;align-items:center;overflow-x:auto;padding:4px}
.srow{display:flex;gap:6px;align-items:center}
.srow em{width:20px;color:var(--muted);font-style:normal;font-size:.8rem;text-align:center}
.seat{width:30px;height:28px;border-radius:7px 7px 3px 3px;background:#5b2a42;color:transparent;font-size:.65rem;font-weight:800}
.seat.vip{background:#7a5a14}
.seat:hover:not(.taken){background:var(--gold);color:#2a1100}
.seat.sel{background:var(--gold);color:#2a1100}
.seat.taken{background:#2a1a22;cursor:not-allowed;opacity:.5}
.legend{display:flex;gap:16px;flex-wrap:wrap;justify-content:center;margin:16px 0;font-size:.85rem;color:var(--muted)}
.legend i{display:inline-block;width:14px;height:14px;border-radius:4px;vertical-align:-2px;margin-right:5px}
.total{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;border-top:2px solid var(--card);padding-top:18px;margin-top:10px}
.total b{font-family:var(--h);color:var(--gold);font-size:1.5rem}
label{display:block;margin:12px 0 4px;font-weight:600;font-size:.9rem}
input{width:100%;padding:12px 14px;border-radius:10px;border:2px solid var(--card);background:var(--bg);color:var(--cream);font:inherit}
input:focus{border-color:var(--gold);outline:none}
.err{color:#ff8a9a;min-height:1.4em;margin-top:10px;font-size:.9rem}
.tabs{display:flex;gap:8px;margin-bottom:10px}
.ticket{display:flex;gap:16px;background:var(--card);border-radius:14px;padding:14px;margin-bottom:12px;border-left:6px solid var(--gold)}
.ticket .poster{width:64px;flex:none;border-radius:8px}
.toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:var(--ok);color:#052a16;padding:14px 24px;border-radius:999px;font-weight:800;z-index:99;display:none}
</style>
</head>
<body>

<header>
  <a href="#top" class="logo"><i><b></b><b></b><b></b></i>coachbragim</a>
  <nav>
    <a href="#afisha" class="hide">Афиша</a>
    <a href="#prices" class="hide">Цены</a>
    <button class="btn" id="authBtn">Войти</button>
  </nav>
</header>

<div class="hero" id="top">
  <h1>Кино в&nbsp;зале <span>coachbragim</span></h1>
  <p>Выбирайте фильм, сеанс и места в зале. Билет у вас в профиле за минуту.</p>
  <a href="#afisha" class="btn">Смотреть афишу</a>
  <div class="bulbs"></div>
</div>

<section id="afisha">
  <h2>Афиша</h2>
  <div class="grid" id="movies"></div>
</section>

<section id="prices" style="background:var(--bg2)">
  <h2>Цены на билеты</h2>
  <div class="prices">
    <div><b>2 500 ₸</b>Ряды A–C, ближе к экрану</div>
    <div><b>3 200 ₸</b>Ряды D–G, лучший обзор</div>
    <div><b>5 000 ₸</b>Ряд H, диваны VIP</div>
  </div>
</section>

<footer>© 2026 Кинотеатр coachbragim · Астана</footer>

<!-- Фильм + покупка -->
<div class="overlay" id="movieOv"><div class="modal" id="movieBox"></div></div>

<!-- Вход / регистрация -->
<div class="overlay" id="authOv"><div class="modal small">
  <button class="x" data-close aria-label="Закрыть">×</button>
  <div class="tabs"><button class="chip on" id="tLogin">Вход</button><button class="chip" id="tReg">Регистрация</button></div>
  <form id="authForm">
    <div id="nameWrap" style="display:none"><label for="aName">Имя</label><input id="aName" autocomplete="name"></div>
    <label for="aEmail">Эл. почта</label><input id="aEmail" type="email" required autocomplete="email">
    <label for="aPass">Пароль (от 6 символов)</label><input id="aPass" type="password" required minlength="6" autocomplete="current-password">
    <div class="err" id="authErr"></div>
    <button class="btn" style="width:100%;margin-top:8px" id="authSubmit">Войти</button>
  </form>
</div></div>

<!-- Профиль -->
<div class="overlay" id="profOv"><div class="modal small" style="max-width:560px">
  <button class="x" data-close aria-label="Закрыть">×</button>
  <h2 id="pName" style="font-size:1.4rem;margin-bottom:4px"></h2>
  <p class="meta" id="pEmail" style="margin-bottom:20px"></p>
  <h3 style="margin-bottom:12px">Мои билеты</h3>
  <div id="pTickets"></div>
  <button class="btn ghost" id="logout" style="margin-top:14px">Выйти</button>
</div></div>

<div class="toast" id="toast"></div>

<script>
/* ===== ДАННЫЕ ФИЛЬМОВ =====
   Чтобы поставить настоящий постер, добавьте поле img: "posters/film.jpg"
   (положите картинку рядом с index.html). Без img рисуется постер автоматически. */
const MOVIES=[
 {id:1,title:"Обитель зла",img:"posters/film1.jpg",genre:"Хоррор",dur:118,age:"18+",c:["#ff5e62","#2b0a3d"],desc:"Поезд, который не должен был отправляться. Двенадцать пассажиров и одна тайна до рассвета."},
 {id:2,title:"Сумерки",img:"posters/film2.jpg",genre:"Фантастика, романтика",dur:134,age:"16+",c:["#4facfe","#0b1d4a"],desc:"«Сумерки» — это популярная романтическая вампирская сага о запретной любви между обычной старшеклассницей и бессмертным вампиром, созданная писательницей Стефани Майер."},
 {id:3,title:"Анчартед",img:"posters/film3.jpg",genre:"Боевик",dur:96,age:"18+",c:["#ffd166","#d1495b"],desc:"«Анчартед: На картах не значится» (Uncharted, 2022) — это приключенческий экшен-фильм режиссёра Рубена Фляйшера, основанный на популярной серии видеоигр от Naughty Dog"},
 {id:4,title:"Человек паук:новый день",img:"posters/film4.jpg",genre:"Боевик, фентези",dur:126,age:"16+",c:["#f7971e","#3d0c02"],desc:"«Человек-паук: Новый день» — американский супергеройский блокбастер 2026 года от Marvel Studios и Sony Pictures, снятый режиссером Дестином Дэниелом Креттоном.)"},
 {id:5,title:"Закулисье",img:"posters/film5.jpg",genre:"Хоррор",dur:110,age:"18+",c:["#56ab2f","#0f3d2e"],desc:"Закулисье — это городская легенда, интернет-мем и феномен психологического хоррора о вымышленном параллельном измерении."},
 {id:6,title:"Клейфейс",img:"posters/film6.jpg",genre:"Ужасы, боевик",dur:104,age:"18+",c:["#e0c3fc","#5b2a86"],desc:"Клэйфейс — персонаж из вселенной DC Comics и главный герой одноименного полнометражного фильма 2026 года"},
 {id:7,title:"Обсессия",img:"posters/film7.webp",genre:"Ужасы, драма",dur:98,age:"18+",c:["#434343","#7a0016"],desc:"«Обсессия» — это американский малобюджетный мистический хоррор-комедия, снятый режиссером-дебютантом Карри Баркером."},
 {id:8,title:"Мстители: Судный день",img:"posters/film8.jpg",genre:"Боевик, фентези",dur:88,age:"18+",c:["#43e97b","#0a6c8f"],desc:"«Мстители: Судный день» — это масштабный американский супергеройский блокбастер 2026 года от Marvel Studios."}
];
const TIMES=["10:30","13:15","16:00","18:45","21:30"];
const DAYS=(()=>{const a=[],n=new Date();for(let i=0;i<5;i++){const d=new Date(n);d.setDate(n.getDate()+i);a.push({key:d.toISOString().slice(0,10),label:i==0?"Сегодня":i==1?"Завтра":d.toLocaleDateString("ru-RU",{day:"numeric",month:"short",weekday:"short"})})}return a})();
const ROWS="ABCDEFGH".split(""),COLS=10;
const priceOf=r=>r<3?2500:r<7?3200:5000;
const fmt=n=>n.toLocaleString("ru-RU").replace(/,/g," ")+" ₸";

/* ===== ХРАНИЛИЩЕ ===== */
const ls={get:(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},set:(k,v)=>localStorage.setItem(k,JSON.stringify(v))};
let users=ls.get("cb_users",[]),session=ls.get("cb_session",null),booked=ls.get("cb_booked",{});
const me=()=>users.find(u=>u.email===session);
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

/* ===== ПОСТЕРЫ ===== */
function poster(m){
 if(m.img)return `<div class="poster"><img src="${esc(m.img)}" alt="Постер: ${esc(m.title)}"></div>`;
 const w=m.title.split(" "),lines=[];let cur="";
 w.forEach(x=>{if((cur+" "+x).trim().length>11&&cur){lines.push(cur);cur=x}else cur=(cur+" "+x).trim()});lines.push(cur);
 const t=lines.map((l,i)=>`<text x="150" y="${300+i*38}" text-anchor="middle" font-family="Unbounded,Arial Black,sans-serif" font-weight="800" font-size="30" fill="#fff">${esc(l)}</text>`).join("");
 return `<div class="poster"><svg viewBox="0 0 300 450" role="img" aria-label="Постер: ${esc(m.title)}">
 <defs><linearGradient id="g${m.id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${m.c[0]}"/><stop offset="1" stop-color="${m.c[1]}"/></linearGradient>
 <linearGradient id="s${m.id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0.35" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".75"/></linearGradient></defs>
 <rect width="300" height="450" fill="url(#g${m.id})"/>
 <circle cx="220" cy="120" r="70" fill="#fff" opacity=".18"/><circle cx="90" cy="170" r="110" fill="#000" opacity=".15"/>
 <rect width="300" height="450" fill="url(#s${m.id})"/>${t}
 <text x="150" y="420" text-anchor="middle" font-family="Arial,sans-serif" font-size="14" fill="#ffd9a0">${esc(m.genre)} · ${m.age}</text></svg></div>`;
}

/* ===== АФИША ===== */
$("movies").innerHTML=MOVIES.map(m=>`<div class="movie" tabindex="0" role="button" data-id="${m.id}">${poster(m)}<h3>${esc(m.title)}</h3><div class="meta">${m.genre} · ${m.dur} мин · ${m.age}</div><div class="price-tag">от 2 500 ₸</div></div>`).join("");
$("movies").addEventListener("click",e=>{const c=e.target.closest(".movie");if(c)openMovie(+c.dataset.id)});
$("movies").addEventListener("keydown",e=>{if(e.key==="Enter"){const c=e.target.closest(".movie");if(c)openMovie(+c.dataset.id)}});

/* ===== ПОКУПКА БИЛЕТА ===== */
let cur={m:null,day:DAYS[0].key,time:TIMES[0],sel:[]};
function sessKey(){return cur.m.id+"|"+cur.day+"|"+cur.time}
function seedTaken(r,c){let h=0;const s=sessKey()+r+c;for(const ch of s)h=(h*31+ch.charCodeAt(0))>>>0;return h%100<22}
function isTaken(r,c){return seedTaken(r,c)||(booked[sessKey()]||[]).includes(ROWS[r]+(c+1))}
function openMovie(id){cur={m:MOVIES.find(x=>x.id===id),day:DAYS[0].key,time:TIMES[0],sel:[]};renderMovie();$("movieOv").classList.add("open")}
function renderMovie(){
 const m=cur.m;
 const days=DAYS.map(d=>`<button class="chip ${d.key===cur.day?"on":""}" data-day="${d.key}">${d.label}</button>`).join("");
 const times=TIMES.map(t=>`<button class="chip ${t===cur.time?"on":""}" data-time="${t}">${t}</button>`).join("");
 let seats="";
 ROWS.forEach((R,r)=>{seats+=`<div class="srow"><em>${R}</em>`;
  for(let c=0;c<COLS;c++){const id=R+(c+1),tk=isTaken(r,c),sl=cur.sel.includes(id);
   seats+=`<button class="seat ${r==7?"vip":""} ${tk?"taken":""} ${sl?"sel":""}" ${tk?"disabled":""} data-seat="${id}" data-r="${r}" title="${id} — ${fmt(priceOf(r))}" aria-label="Место ${id}, ${fmt(priceOf(r))}">${c+1}</button>`}
  seats+=`<em>${R}</em></div>`});
 const total=cur.sel.reduce((s,id)=>s+priceOf(ROWS.indexOf(id[0])),0);
 $("movieBox").innerHTML=`<button class="x" data-close aria-label="Закрыть">×</button>
 <div class="mv">${poster(m)}<div><h2 style="margin-bottom:10px">${esc(m.title)}</h2>
 <div class="tags"><span>${m.genre}</span><span>${m.dur} мин</span><span>${m.age}</span></div><p style="color:var(--muted);margin:10px 0 18px">${esc(m.desc)}</p>
 <b>Дата</b><div class="row">${days}</div><b>Время</b><div class="row">${times}</div></div></div>
 <h3 style="margin-top:24px">Выберите места</h3>
 <div class="screen"></div><div class="scr-l">Экран</div>
 <div class="seats">${seats}</div>
 <div class="legend"><span><i style="background:#5b2a42"></i>Свободно</span><span><i style="background:var(--gold)"></i>Выбрано</span><span><i style="background:#2a1a22"></i>Занято</span><span><i style="background:#7a5a14"></i>VIP (ряд H)</span></div>
 <div class="legend"><span>A–C: 2 500 ₸</span><span>D–G: 3 200 ₸</span><span>H: 5 000 ₸</span></div>
 <div class="total"><div>Места: <b style="font-size:1rem;font-family:var(--b)">${cur.sel.length?cur.sel.join(", "):"не выбраны"}</b><br>Итого: <b>${fmt(total)}</b></div>
 <button class="btn" id="buy" ${cur.sel.length?"":"disabled"}>Купить билет</button></div>`;
}
$("movieBox").addEventListener("click",e=>{
 const t=e.target;
 if(t.matches("[data-close]")){close("movieOv");return}
 if(t.dataset.day){cur.day=t.dataset.day;cur.sel=[];renderMovie()}
 else if(t.dataset.time){cur.time=t.dataset.time;cur.sel=[];renderMovie()}
 else if(t.dataset.seat){const i=cur.sel.indexOf(t.dataset.seat);if(i>-1)cur.sel.splice(i,1);else if(cur.sel.length<8)cur.sel.push(t.dataset.seat);else toast("Можно выбрать не больше 8 мест");renderMovie()}
 else if(t.id==="buy"){
  if(!me()){close("movieOv");openAuth("reg");toast("Войдите или зарегистрируйтесь, чтобы купить билет");return}
  const total=cur.sel.reduce((s,id)=>s+priceOf(ROWS.indexOf(id[0])),0);
  if(!confirm(`Купить места ${cur.sel.join(", ")} за ${fmt(total)}?`))return;
  const k=sessKey();booked[k]=[...(booked[k]||[]),...cur.sel];ls.set("cb_booked",booked);
  const u=me();u.tickets=u.tickets||[];
  u.tickets.unshift({movie:cur.m.id,day:cur.day,time:cur.time,seats:[...cur.sel],total,code:"CB-"+Math.random().toString(36).slice(2,8).toUpperCase()});
  ls.set("cb_users",users);cur.sel=[];close("movieOv");toast("Билет куплен! Он в вашем профиле");
 }
});

/* ===== РЕГИСТРАЦИЯ / ВХОД ===== */
let mode="login";
function openAuth(m){setMode(m);$("authErr").textContent="";$("authOv").classList.add("open")}
function setMode(m){mode=m;$("tLogin").classList.toggle("on",m==="login");$("tReg").classList.toggle("on",m==="reg");
 $("nameWrap").style.display=m==="reg"?"block":"none";$("authSubmit").textContent=m==="reg"?"Создать аккаунт":"Войти"}
$("tLogin").onclick=()=>setMode("login");$("tReg").onclick=()=>setMode("reg");
$("authForm").addEventListener("submit",e=>{
 e.preventDefault();
 const email=$("aEmail").value.trim().toLowerCase(),pass=$("aPass").value,name=$("aName").value.trim();
 if(mode==="reg"){
  if(!name){$("authErr").textContent="Введите имя";return}
  if(users.some(u=>u.email===email)){$("authErr").textContent="Эта почта уже зарегистрирована. Войдите.";return}
  users.push({name,email,pass:btoa(unescape(encodeURIComponent(pass))),tickets:[]});ls.set("cb_users",users);
 }else{
  const u=users.find(u=>u.email===email);
  if(!u||u.pass!==btoa(unescape(encodeURIComponent(pass)))){$("authErr").textContent="Неверная почта или пароль";return}
 }
 session=email;ls.set("cb_session",session);$("authForm").reset();close("authOv");updateAuth();toast("Добро пожаловать!");
});
function updateAuth(){const u=me();$("authBtn").textContent=u?u.name:"Войти"}
$("authBtn").onclick=()=>me()?openProfile():openAuth("login");

/* ===== ПРОФИЛЬ ===== */
function openProfile(){
 const u=me();$("pName").textContent="Привет, "+u.name;$("pEmail").textContent=u.email;
 $("pTickets").innerHTML=(u.tickets&&u.tickets.length)?u.tickets.map(t=>{const m=MOVIES.find(x=>x.id===t.movie);
  return `<div class="ticket">${poster(m)}<div><b>${esc(m.title)}</b><div class="meta">${t.day} · ${t.time}</div><div>Места: ${t.seats.join(", ")}</div><div class="price-tag">${fmt(t.total)}</div><div class="meta">Код: ${t.code}</div></div></div>`}).join(""):`<p class="meta">Билетов пока нет. Выберите фильм в афише.</p>`;
 $("profOv").classList.add("open");
}
$("logout").onclick=()=>{session=null;ls.set("cb_session",null);close("profOv");updateAuth()};

/* ===== ОБЩЕЕ ===== */
function close(id){$(id).classList.remove("open")}
document.querySelectorAll(".overlay").forEach(o=>o.addEventListener("mousedown",e=>{if(e.target===o)o.classList.remove("open")}));
document.querySelectorAll("[data-close]").forEach(b=>b.onclick=()=>b.closest(".overlay").classList.remove("open"));
document.addEventListener("keydown",e=>{if(e.key==="Escape")document.querySelectorAll(".overlay.open").forEach(o=>o.classList.remove("open"))});
let tt;function toast(s){const t=$("toast");t.textContent=s;t.style.display="block";clearTimeout(tt);tt=setTimeout(()=>t.style.display="none",3000)}
updateAuth();
</script>
</body>
</html>
