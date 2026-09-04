import YutaApis from 'yutaapis';
import { writeFile } from 'node:fs/promises';

const api = new YutaApis({
    apiToken: process.env.API_TOKEN_YUTA_GLOBAL,
});

//========= PESQUISAS ===========\\

// console.log(await api.pesquisas.wiki('Typescript));
// console.log(await api.pesquisas.ytsearch('Typescript'));
// console.log(await api.pesquisas.gitstalk('Lm-Only'));

//========= DOWNLOADS ===========\\

// console.log(await api.downloads.ytmp3('https://www.youtube.com/watch?v=osPq9Yb8xm8'));
// console.log(await api.downloads.ytmp4('https://www.youtube.com/watch?v=osPq9Yb8xm8'));
// console.log(await api.downloads.play('Hutao Edit'));
// console.log(await api.downloads.playvideo('Hutao Edit'));
// console.log(await api.downloads.tiktokdl('https://vt.tiktok.com/ZSqdPRtsE/'));
// console.log(await api.downloads.instavideo('https://www.instagram.com/p/Dc1iG74Fkgt/?img_index=9&igsi=aWYzZmFkeDdsMTN1'));
// console.log(await api.downloads.pinterest('Hutao Icon'));
// console.log(await api.downloads.pinterestMp3('https://pin.it/5decaQP2P'));
// console.log(await api.downloads.pinterestVideo('https://pin.it/5decaQP2P'));


//========= IAS ===========\\

// console.log(await api.ias.gpt('Oii tudo bem?'));
// console.log(await api.ias.gemini_pro('Oii tudo bem?'));
// console.log(await api.ias.perplexity_ai('Oii tudo bem?'));
// console.log(await api.ias.geminivoz('Oii tudo bem?'));
// console.log(await api.ias.gemini('Oii tudo bem?'));

//========= GERADORES ===========\\

// console.log(await api.geradores.nick('Lm Only'));
// console.log(await api.geradores.qrcode('Lm'));

//========= LOGOS ===========\\

// console.log(await api.logos('glitch', 'Nk'));

//========= NOTÍCIAS ===========\\

// console.log(await api.noticias.cnn());
// console.log(await api.noticias.esportes());
// console.log(await api.noticias.g1());
// console.log(await api.noticias.ibge());
// console.log(await api.noticias.noticias_atuais());
// console.log(await api.noticias.politica());
// console.log(await api.noticias.uol());

//========= PLAQUINHAS ===========\\

// console.log(await api.plaquinhas('plaq1', 'LmOnly'));

//========= STICKERS ===========\\

// console.log(await api.stickers.attp('Lm'));
// console.log(await api.stickers.brat('Lm'));
// console.log(await api.stickers.bratvid('Lm'));
// console.log(await api.stickers.figu());
// console.log(await api.stickers.figu_anime());

//========= CANVAS ===========\\

// const welcomeImg = await api.canvas.welcome({
    // text: 'Lm Only',
    // fundo: 'URL',
    // logo: 'URL'
// });

// await writeFile('./welcome.jpg', welcomeImg);
