import YutaApis from 'yutaapis';
import { writeFile } from 'node:fs/promises';

const api = new YutaApis({
    apiToken: process.env.API_TOKEN_YUTA_GLOBAL,
});

//========= PESQUISAS ===========\\

console.log(await api.pesquisas.wiki('Typescript));
console.log(await api.pesquisas.ytsearch('Typescript'));
console.log(await api.pesquisas.gitstalk('Lm-Only'));

//========= DOWNLOADS ===========\\

console.log(await api.downloads.ytmp3('https://www.youtube.com/watch?v=osPq9Yb8xm8'));
console.log(await api.downloads.ytmp4('https://www.youtube.com/watch?v=osPq9Yb8xm8'));
console.log(await api.downloads.play('Hutao Edit'));
console.log(await api.downloads.playvideo('Hutao Edit'));
console.log(await api.downloads.tiktokdl('https://vt.tiktok.com/ZSqdPRtsE/'));
console.log(await api.downloads.instavideo('https://www.instagram.com/p/Dc1iG74Fkgt/?img_index=9&igsi=aWYzZmFkeDdsMTN1'));
console.log(await api.downloads.pinterest('Hutao Icon'));
console.log(await api.downloads.pinterestMp3('https://pin.it/5decaQP2P'));
console.log(await api.downloads.pinterestVideo('https://pin.it/5decaQP2P'));


//========= IAS ===========\\

console.log(await api.ias.gpt('Oii tudo bem?'));
console.log(await api.ias.gemini_pro('Oii tudo bem?'));
console.log(await api.ias.perplexity_ai('Oii tudo bem?'));
console.log(await api.ias.geminivoz('Oii tudo bem?'));
console.log(await api.ias.gemini('Oii tudo bem?'));

//========= GERADORES ===========\\

console.log(await api.geradores.nick('Lm Only'));
console.log(await api.geradores.qrcode('Lm'));

//========= LOGOS ===========\\

console.log(await api.logos('glitch', 'Nk'));

//========= NOTÍCIAS ===========\\

console.log(await api.noticias.cnn());
console.log(await api.noticias.esportes());
console.log(await api.noticias.g1());
console.log(await api.noticias.ibge());
console.log(await api.noticias.noticias_atuais());
console.log(await api.noticias.politica());
console.log(await api.noticias.uol());

//========= PLAQUINHAS ===========\\

console.log(await api.plaquinhas('plaq1', 'LmOnly'));

//========= STICKERS ===========\\

console.log(await api.stickers.attp('Lm'));
console.log(await api.stickers.brat('Lm'));
console.log(await api.stickers.bratvid('Lm'));
console.log(await api.stickers.figu());
console.log(await api.stickers.figu_anime());

//========= CANVAS ===========\\

const welcomeImg = await api.canvas.welcome({
    text: "Bem-vindo(a) ao servidor!",
    fundo: "https://raw.githubusercontent.com/Lm-Only/yutaapis/refs/heads/main/assets/banner.jpg",
    logo: "https://raw.githubusercontent.com/Lm-Only/yutaapis/refs/heads/main/assets/banner.jpg"
});
await writeFile('./welcome.jpg', welcomeImg);

const cardLevelUp = await api.canvas.levelup({
    fundo: "https://raw.githubusercontent.com/Lm-Only/yutaapis/refs/heads/main/assets/banner.jpg",
    logo: "https://raw.githubusercontent.com/Lm-Only/yutaapis/refs/heads/main/assets/banner.jpg",
    nome: "Lm-Only",
    oldlevel: "14",
    level: "15",
    xp: "4500",
    nextxp: "5000"
});
await writeFile('./levelup.jpg', cardLevelUp);

const cardPing = await api.canvas.ping({
    fundo: "https://raw.githubusercontent.com/Lm-Only/yutaapis/refs/heads/main/assets/banner.jpg",
    logo: "https://raw.githubusercontent.com/Lm-Only/yutaapis/refs/heads/main/assets/banner.jpg",
    uptime: "2d 5h 12m",
    memoria: "512MB / 2GB",
    latencia: "45ms",
    status: "Online",
    velocidade: "100 Mbps"
});
await writeFile('./ping.jpg', cardPing);

const cardPerfil = await api.canvas.perfil({
    fundo: "https://raw.githubusercontent.com/Lm-Only/yutaapis/refs/heads/main/assets/banner.jpg",
    logo: "https://raw.githubusercontent.com/Lm-Only/yutaapis/refs/heads/main/assets/banner.jpg",
    nome: "Lm-Only",
    subnome: "@lmonly",
    custom_status: "Desenvolvendo Yuta APIs"
});
await writeFile('./perfil.jpg', cardPerfil);

const cardGoodbye = await api.canvas.goodbye({
    fundo: "https://raw.githubusercontent.com/Lm-Only/yutaapis/refs/heads/main/assets/banner.jpg",
    perfil: "https://raw.githubusercontent.com/Lm-Only/yutaapis/refs/heads/main/assets/banner.jpg",
    titulo: "Adeus!",
    legenda: "Sentiremos sua falta"
});
await writeFile('./goodbye.jpg', cardGoodbye);

const cardShip = await api.canvas.ship({
    avatar1: "https://raw.githubusercontent.com/Lm-Only/yutaapis/refs/heads/main/assets/banner.jpg",
    avatar2: "https://raw.githubusercontent.com/Lm-Only/yutaapis/refs/heads/main/assets/banner.jpg",
    porcentagem: "85%",
    fundo: "https://raw.githubusercontent.com/Lm-Only/yutaapis/refs/heads/main/assets/banner.jpg"
});
await writeFile('./ship.jpg', cardShip);

const cardQc = await api.canvas.qc({
    avatar: "https://raw.githubusercontent.com/Lm-Only/yutaapis/refs/heads/main/assets/banner.jpg",
    nick: "Lm-Only",
    message: "Mensagem de teste para o quote."
});
await writeFile('./qc.png', cardQc);

const cardSaiu = await api.canvas.saiu({
    fundo: "https://raw.githubusercontent.com/Lm-Only/yutaapis/refs/heads/main/assets/banner.jpg",
    logo: "https://raw.githubusercontent.com/Lm-Only/yutaapis/refs/heads/main/assets/banner.jpg",
    text: "Lm-Only saiu do grupo."
});
await writeFile('./saiu.jpg', cardSaiu);
