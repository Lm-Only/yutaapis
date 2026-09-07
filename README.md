# Yuta APIs
Módulo SDK TypeScript/JavaScript desenvolvido para consumo do [Yuta APIs](https://yuta-apis.xyz); em parceria com a [HutaoBot](https://github.com/Lm-Only/HutaoBot)


<h1 align="center">
<p>
    <img src="https://raw.githubusercontent.com/Lm-Only/yutaapis/refs/heads/main/assets/banner.jpg" alt="Yuta APIS" width="720">
</p>
  
##

<details>
    <summary>
        <b>Créditos...</b>
    </summary>

## Desenvolvedor 🧑‍💻
<div align="center">
  <table>
    <tr>
      <td align="right" valign="middle" style="padding-right: 15px;">
        <img src="https://github.com/Lm-Only.png?size=120" width="120" height="120" style="border: 3px solid #8A2BE2; border-radius: 50%;">
      </td>
      <td align="left" valign="middle">
        <h2 style="margin: 0; font-family: monospace; color: #8A2BE2;">
          Lm Only
        </h2>
        <p style="margin: 5px 0; color: #cfcfcf; font-family: monospace; font-size: 14px;">
  Criador do módulo
        </p>
        <p style="margin: 8px 0 0 0;">
           <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="Typescript"/>
          <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
          <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" />
          <img src="https://img.shields.io/badge/Fastify-000000?style=flat-square&logo=fastify&logoColor=white" alt="Fastify" />
          <img src="https://img.shields.io/badge/Bash-4EAA25?style=flat-square&logo=gnu-bash&logoColor=white" alt="Shell" />
        </p>
      </td>
    </tr>
  </table>
</div>

## Criador do Yuta APIs 👑
<div align="center">
  <table>
    <tr>
      <td align="right" valign="middle" style="padding-right: 15px;">
        <img src="https://github.com/Nk-Petrov.png?size=120" width="120" height="120" style="border: 3px solid #8A2BE2; border-radius: 50%;">
      </td>
      <td align="left" valign="middle">
        <h2 style="margin: 0; font-family: monospace; color: #8A2BE2;">
          Lm Only
        </h2>
        <p style="margin: 5px 0; color: #cfcfcf; font-family: monospace; font-size: 14px;">
            Criador da API
        </p>
        <p style="margin: 8px 0 0 0;">
          <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
          <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" />
            <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white" alt="Express" />
        </p>
      </td>
    </tr>
  </table>
</div>
    
</details>

> [!IMPORTANT]
> **Algumas rotas podem estar em falta, pelo motivo de não estarem funcionando. As rotas registradas estão funcionando perfeitamente e prontas pra uso**

## Instalação

```bash
npm i yutaapis
```

## Quickstart

* ESM
```javascript
// Esm - "type": "module"
import YutaApis from 'yutaapis';
```
> Se seu projeto for do tipo ESM
---

* CJS
```javascript
const { default: YutaApis } = require('yutaapis');
```
> Ou se for do tipo padrão (maioria)
---

## Usage
```javascript
const api = new YutaApis({
  apiToken: process.env.TOKEN // token do Yuta obtido no site
});

const gitstalkResult = await api.pesquisas.gitstalk('Lm-Only'); // Promise<Object>

if (!gitstalkResult.status) {
    console.error(gitstalkResult.msg || 'Error na API');
    process.exit();
}

console.log(gitstalkResult);
```

##

> [!NOTE]
> Afinal de contas, **Para que este módulo serve? 🤔**

<details>

<summary>
     <b>Saiba aqui...👇</b>
 </summary>

* Este módulo foi desenvolvido inteiramente em Typescript por **Lm Only** com o foco principal em ajudar aos usuários do [Yuta APIs](https://yuta-apis.xyz) a usarem a API de uma forma mais simples e fácil. ✨️

* Uma das **principais características** desse módulo, é a forma de como ele é usado, principalmente para quem programa usando o **VScode.** 🧑‍💻 Essa característica ajuda ao dev a **entender** o que tal rota recebe e o que ela retorna. 💎

* Além disso, o módulo evita que a mesma coisa se **repita várias vezes.** Veja o Exemplo:

## Antes 
```javascript
// Veja o código todo deslizando pra direita
const url = "https://yuta-apis.xyz/api/geradores/gerar-nicks?text=Lm+Only&apitoken=SEU_TOKEN";
const response = await fetch(url);
const contentType = response.headers.get("content-type") || "";
const result = contentType.includes("json")
  ? await response.json()
  : await response.blob();

console.log(result);
```
## Depois 👇
```javascript
const nicks = await api.geradores.nick('Lm Only');
console.log(nicks);
```

## Resumo - Script 1° 🥰

* A primeira opção deixava o código **poluído** e **difícil de entender**. 💔
* E se pararmos para analisar, essa rota era apenas um simples **gerador de nick** 🙌
* Logicamente você vai ter que passar as mesmas coisas toda vez que usar alguma rota nova. 🙏🏼 (tipo, link do site + nome da rota + endpoint) 😶‍🌫️
* Imagine com rotas que **requerem** mais coisas, isso iria causar um **problema visual** KKKKKKKK 😹

## Resumo - Script 2° 🤩
* **Com base no segundo Script, o foco é facilitar a vida do usuário e a legibilidade do código. 💝**
> **Legibilidade se trata daquilo que é legível, algo que é fácil de ser entendido**

## Finalizando 💖
* O módulo tem um **sistema inteligente** que sabe quando der erro; retornar JSON (isso se no caso deveria retornar uma mídia)
* Também ele detecta se tal rota tem **variações**, para evitar acesso inválido.
* Por fim, peço que use um editor de código profissional para o uso do módulo. (VScode por exemplo)

</details>

# Sumário 

- [Api](https://yuta-apis.xyz)
  - [planos](https://yuta-apis.xyz/planos)
  - [login](https://yuta-apis.xyz/login)

- [Exemplos](https://github.com/Lm-Only/yutaapis/tree/main/examples)
  - [Scripts](https://github.com/Lm-Only/yutaapis/blob/main/examples/example.js)

- [Pesquisas](#pesquisas)
  - [wiki](#wiki)
  - [ytsearch](#ytsearch)
  - [gitstalk](#gitstalk)
  - [filmesSearch](#filmessearch)
  - [lyrics_search](#lyrics_search)
  - [pensador](#pensador)
  - [playstore](#playstore)
  - [wallpaper](#wallpaper)
  - [google](#google)

- [Downloads](#downloads)
  - [ytmp3](#ytmp3)
  - [ytmp4](#ytmp4)
  - [play](#play)
  - [playvideo](#playvideo)
  - [tiktokdl](#tiktokdl)
  - [tiktokMp3](#tiktokmp3)
  - [tiktokMp4](#tiktokmp4)
  - [instavideo](#instavideo)
  - [facebook](#facebook)
  - [facebookMp3](#facebookmp3)
  - [facebookMp4](#facebookmp4)
  - [pinterest](#pinterest)
  - [pinterestMp3](#pinterestmp3)
  - [pinterestMp4](#pinterestmp4)
  - [pinterestVideo](#pinterestvideo)
  - [tiktok_foto](#tiktok_foto)
  - [mediafire](#mediafire)
  - [spotifyMp3](#spotifymp3)
  - [spotifyPlay](#spotifyplay)

- [IAs](#ias)
  - [gpt](#gpt)
  - [gemini_pro](#gemini_pro)
  - [perplexity_ai](#perplexity_ai)
  - [geminivoz](#geminivoz)
  - [gemini](#gemini)

- [Geradores](#geradores)
  - [nick](#nick)
  - [qrcode](#qrcode)

- [Animes](#animes)
  - [hentai_video](#hentai_video)
  - [hentai_video2](#hentai_video2)
  - [metadinha](#metadinha)
  - [quotesanimes](#quotesanimes)

- [Logos](#logos)
  - [logos](#logos-logos)

- [Notícias](#notícias)
  - [cnn](#cnn)
  - [esportes](#esportes)
  - [g1](#g1)
  - [ibge](#ibge)
  - [noticias_atuais](#noticias_atuais)
  - [politica](#politica)
  - [uol](#uol)

- [Plaquinhas](#plaquinhas)
  - [plaquinhas](#plaq)

- [Stickers](#stickers)
  - [attp](#attp)
  - [brat](#brat)
  - [bratvid](#bratvid)
  - [figu](#figu)
  - [figu_anime](#figu_anime)
  - [figu_coreana](#figu_coreana)
  - [figu_desenho](#figu_desenho)
  - [figu_emoji](#figu_emoji)
  - [figu_engracadas](#figu_engracadas)
  - [figu_raiva](#figu_raiva)
  - [figu_roblox](#figu_roblox)

- [Canvas](#canvas)
  - [welcome](#welcome)
  - [cardMusic](#cardmusic)
  - [bemvindo](#bemvindo)
  - [levelup](#levelup)
  - [ping](#ping)
  - [perfil](#perfil)
  - [goodbye](#goodbye)
  - [ship](#ship)
  - [qc](#qc)
  - [saiu](#saiu)

- [Outros](#outros)
  - [ascii](#ascii)
  - [clima](#clima)
  - [emoji_mix](#emoji_mix)
  - [signo](#signo)
  - [traduzir](#traduzir)
  - [ip](#ip)
  - [encurtarLink](#encurtarlink)
  - [frasesAmor](#frasesamor)
  - [hd](#hd)
  - [hd2](#hd2)
  - [totext](#totext)
  - [textImg](#textimg)
  - [meme](#meme)
  - [buscarLocal](#buscarlocal)
  - [shazam](#shazam)

- [Upload](#upload)
  - [api.upload](#apiupload)

---

## Tipagem complementar

### logos (LogosOptions)
Gera uma logo a partir de um efeito válido do tipo `LogosOptions`.

**Assinatura:** `api.logos(nomeDoEfeito: LogosOptions, textoPraLogo: string) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const logo = await api.logos('glitch', 'LmOnly');

if (logo && logo instanceof ArrayBuffer) {
  await writeFile('logo.png', Buffer.from(logo));
} else {
  console.log(logo);
}
```

### plaq (PlaqParams)
Gera plaquinha usando o tipo `PlaqParams` e texto aceito pela API/tipos.

**Assinatura:** `api.plaquinhas(Plaq: PlaqParams, TextinhoRs: PlaqTextExample) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const plaquinha = await api.plaquinhas('plaq1', 'Lm amor');

if (plaquinha && plaquinha instanceof ArrayBuffer) {
  await writeFile('plaquinha.png', Buffer.from(plaquinha));
} else {
  console.log(plaquinha);
}
```

---

## Pesquisas (funcionalidades adicionais)

### filmesSearch
Pesquisa filmes por nome.

**Assinatura:** `api.pesquisas.filmesSearch(query: string) => Promise<DefaultResultJSON>`

```javascript
const filmesSearch = await api.pesquisas.filmesSearch('Your Name');

if (!filmesSearch.status) {
  console.log(filmesSearch.msg);
} else {
  console.log(filmesSearch.resultado || filmesSearch.result);
}
```

Retorno esperado: JSON (`DefaultResultJSON`) com campos como `status`, `msg` e dados em `resultado`/`result`.

### lyrics_search
Busca letra de música por texto.

**Assinatura:** `api.pesquisas.lyrics_search(query: string) => Promise<LetraMusicaResult>`

```javascript
const lyrics = await api.pesquisas.lyrics_search('Nuts lil peep');

console.log(lyrics.status);
console.log(lyrics.result?.[0]?.titulo);
console.log(lyrics.result?.[0]?.artista);
console.log(lyrics.result?.[0]?.letra);
```

Retorno esperado: JSON (`LetraMusicaResult`) com array `result` contendo `titulo`, `artista`, `image`, `link` e `letra`.

### pensador
Pesquisa frases no Pensador.

**Assinatura:** `api.pesquisas.pensador(query: string) => Promise<PensadorSearchResult>`

```javascript
const pensador = await api.pesquisas.pensador('amor');

console.log(pensador.total);
console.log(pensador.resultados?.[0]?.frase);
```

Retorno esperado: JSON (`PensadorSearchResult`) com `total` e `resultados`.

### playstore
Pesquisa apps na Play Store.

**Assinatura:** `api.pesquisas.playstore(nome: string) => Promise<PlayStoreSearchResult>`

```javascript
const playstore = await api.pesquisas.playstore('whatsapp');

console.log(playstore.total);
console.log(playstore.resultado?.[0]?.nome);
console.log(playstore.resultado?.[0]?.desenvolvedor);
console.log(playstore.resultado?.[0]?.link);
```

Retorno esperado: JSON (`PlayStoreSearchResult`) com `total` e `resultado` (`nome`, `imagem`, `desenvolvedor`, `estrelas`, `link`).

### wallpaper
Busca wallpapers por texto.

**Assinatura:** `api.pesquisas.wallpaper(query: string) => Promise<WallpaperResult>`

```javascript
const wallpaper = await api.pesquisas.wallpaper('Hu Tao');

console.log(wallpaper.total);
console.log(wallpaper.resultado?.[0]?.title);
console.log(wallpaper.resultado?.[0]?.image);
```

Retorno esperado: JSON (`WallpaperResult`) com `total` e `resultado` (`title`, `type`, `source`, `image`).

### google
Busca resultados de pesquisa (Google).

**Assinatura:** `api.pesquisas.google(query: string) => Promise<GoogleResult>`

```javascript
const google = await api.pesquisas.google('Lm Only github');

console.log(google.result?.abstract);
console.log(google.result?.answer);
console.log(google.result?.url);
console.log(google.result?.related?.[0]?.FirstURL);
```

Retorno esperado: JSON (`GoogleResult`) com `result.abstract`, `result.answer`, `result.url` e `result.related`.

---

## Downloads (funcionalidades adicionais)

> [!TIP]
> Nas rotas de mídia que retornam `DefaultResultBuffer`, o retorno pode ser `ArrayBuffer` **ou** JSON de erro (`{ status, msg }`) **ou** `null`.

### tiktokMp3
Baixa áudio MP3 de um link do TikTok.

**Assinatura:** `api.downloads.tiktokMp3(url: string) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const tiktokMp3 = await api.downloads.tiktokMp3('https://vt.tiktok.com/ZSqRRu4Dn/');

if (tiktokMp3 && tiktokMp3 instanceof ArrayBuffer) {
  await writeFile('tiktok.mp3', Buffer.from(tiktokMp3));
} else {
  console.log(tiktokMp3);
}
```

### tiktokMp4
Baixa vídeo MP4 de um link do TikTok.

**Assinatura:** `api.downloads.tiktokMp4(url: string) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const tiktokMp4 = await api.downloads.tiktokMp4('https://vt.tiktok.com/ZSqRRu4Dn/');

if (tiktokMp4 && tiktokMp4 instanceof ArrayBuffer) {
  await writeFile('tiktok.mp4', Buffer.from(tiktokMp4));
} else {
  console.log(tiktokMp4);
}
```

### facebook
Retorna dados de mídia de um link do Facebook.

**Assinatura:** `api.downloads.facebook(url: string) => Promise<DefaultResultJSON>`

```javascript
const facebook = await api.downloads.facebook('https://www.facebook.com/watch/?v=1234567890');
console.log(facebook.status);
console.log(facebook.resultado || facebook.result);
```

Retorno esperado: JSON (`DefaultResultJSON`) com dados de mídia no `result`/`resultado`.

### facebookMp3
Baixa o áudio do vídeo do Facebook.

**Assinatura:** `api.downloads.facebookMp3(url: string) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const facebookMp3 = await api.downloads.facebookMp3('https://www.facebook.com/watch/?v=1234567890');

if (facebookMp3 && facebookMp3 instanceof ArrayBuffer) {
  await writeFile('facebook.mp3', Buffer.from(facebookMp3));
} else {
  console.log(facebookMp3);
}
```

### facebookMp4
Baixa o vídeo do Facebook em MP4.

**Assinatura:** `api.downloads.facebookMp4(url: string) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const facebookMp4 = await api.downloads.facebookMp4('https://www.facebook.com/watch/?v=1234567890');

if (facebookMp4 && facebookMp4 instanceof ArrayBuffer) {
  await writeFile('facebook.mp4', Buffer.from(facebookMp4));
} else {
  console.log(facebookMp4);
}
```

### pinterestMp4
Baixa vídeo MP4 de um link do Pinterest.

**Assinatura:** `api.downloads.pinterestMp4(url: string) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const pinterestMp4 = await api.downloads.pinterestMp4('https://pin.it/5decaQP2P');

if (pinterestMp4 && pinterestMp4 instanceof ArrayBuffer) {
  await writeFile('pinterest.mp4', Buffer.from(pinterestMp4));
} else {
  console.log(pinterestMp4);
}
```

### tiktok_foto
Extrai fotos de um post do TikTok.

**Assinatura:** `api.downloads.tiktok_foto(url: string) => Promise<TiktokFotoResult>`

```javascript
const tiktokFoto = await api.downloads.tiktok_foto('https://www.tiktok.com/@user/photo/1234567890123456789');

console.log(tiktokFoto.total);
console.log(tiktokFoto.resultado?.image1);
console.log(tiktokFoto.resultado?.image2);
```

Retorno esperado: JSON (`TiktokFotoResult`) com `total` e `resultado` no formato `{ image1, image2, ... }`.

### mediafire
Extrai metadados e links de download de arquivos Mediafire.

**Assinatura:** `api.downloads.mediafire(url: string) => Promise<MediafireResult>`

```javascript
const mediafire = await api.downloads.mediafire('https://www.mediafire.com/file/arquivo/file');

console.log(mediafire.result?.[0]?.filename);
console.log(mediafire.result?.[0]?.filesizeH);
console.log(mediafire.result?.[0]?.url);
```

Retorno esperado: JSON (`MediafireResult`) com array `result` contendo `filename`, `filesize`, `mimetype`, `url` e outros metadados.

### spotifyMp3
Baixa MP3 a partir de link do Spotify.

**Assinatura:** `api.downloads.spotifyMp3(url: string) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const spotifyMp3 = await api.downloads.spotifyMp3('https://open.spotify.com/track/4PTG3Z6ehGkBFwjybzWkR8');

if (spotifyMp3 && spotifyMp3 instanceof ArrayBuffer) {
  await writeFile('spotify.mp3', Buffer.from(spotifyMp3));
} else {
  console.log(spotifyMp3);
}
```

### spotifyPlay
Pesquisa música no Spotify e retorna metadados + link de download.

**Assinatura:** `api.downloads.spotifyPlay(query: string) => Promise<SpotifyPlayResult>`

```javascript
const spotifyPlay = await api.downloads.spotifyPlay('Nuts Lil Peep');

console.log(spotifyPlay.result?.title);
console.log(spotifyPlay.result?.artist);
console.log(spotifyPlay.result?.album);
console.log(spotifyPlay.result?.download_url);
```

Retorno esperado: JSON (`SpotifyPlayResult`) com `result.title`, `artist`, `duration`, `thumbnail`, `album`, `url` e `download_url`.

---

## Animes

### hentai_video
Retorna vídeo hentai aleatório.

**Assinatura:** `api.animes.hentai_video() => Promise<DefaultResultJSON>`

```javascript
const hentaiVideo = await api.animes.hentai_video();
console.log(hentaiVideo.status);
console.log(hentaiVideo.resultado || hentaiVideo.result);
```

### hentai_video2
Retorna outra variação de vídeo hentai aleatório.

**Assinatura:** `api.animes.hentai_video2() => Promise<DefaultResultJSON>`

```javascript
const hentaiVideo2 = await api.animes.hentai_video2();
console.log(hentaiVideo2.status);
console.log(hentaiVideo2.resultado || hentaiVideo2.result);
```

### metadinha
Retorna imagens de metadinha.

**Assinatura:** `api.animes.metadinha() => Promise<DefaultResultJSON>`

```javascript
const metadinha = await api.animes.metadinha();
console.log(metadinha.status);
console.log(metadinha.resultado || metadinha.result);
```

### quotesanimes
Retorna frase/citação de anime.

**Assinatura:** `api.animes.quotesanimes() => Promise<DefaultResultJSON>`

```javascript
const quotesanimes = await api.animes.quotesanimes();
console.log(quotesanimes.status);
console.log(quotesanimes.resultado || quotesanimes.result);
```

---

## Stickers

> [!TIP]
> Todas as rotas de stickers retornam `DefaultResultBuffer` (`ArrayBuffer | { status, msg } | null`).

### attp
Gera sticker de texto estilo ATTP.

**Assinatura:** `api.stickers.attp(text: string) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const attp = await api.stickers.attp('Yuta APIs');
if (attp && attp instanceof ArrayBuffer) await writeFile('attp.webp', Buffer.from(attp));
else console.log(attp);
```

### brat
Gera sticker imagem estilo BRAT.

**Assinatura:** `api.stickers.brat(text: string) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const brat = await api.stickers.brat('Yuta APIs');
if (brat && brat instanceof ArrayBuffer) await writeFile('brat.webp', Buffer.from(brat));
else console.log(brat);
```

### bratvid
Gera sticker em vídeo estilo BRAT.

**Assinatura:** `api.stickers.bratvid(text: string) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const bratvid = await api.stickers.bratvid('Yuta APIs');
if (bratvid && bratvid instanceof ArrayBuffer) await writeFile('bratvid.mp4', Buffer.from(bratvid));
else console.log(bratvid);
```

### figu
Retorna figurinha aleatória.

**Assinatura:** `api.stickers.figu() => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const figu = await api.stickers.figu();
if (figu && figu instanceof ArrayBuffer) await writeFile('figu.webp', Buffer.from(figu));
else console.log(figu);
```

### figu_anime
Retorna figurinha aleatória de anime.

**Assinatura:** `api.stickers.figu_anime() => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const figuAnime = await api.stickers.figu_anime();
if (figuAnime && figuAnime instanceof ArrayBuffer) await writeFile('figu_anime.webp', Buffer.from(figuAnime));
else console.log(figuAnime);
```

### figu_coreana
Retorna figurinha aleatória coreana.

**Assinatura:** `api.stickers.figu_coreana() => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const figuCoreana = await api.stickers.figu_coreana();
if (figuCoreana && figuCoreana instanceof ArrayBuffer) await writeFile('figu_coreana.webp', Buffer.from(figuCoreana));
else console.log(figuCoreana);
```

### figu_desenho
Retorna figurinha aleatória de desenho.

**Assinatura:** `api.stickers.figu_desenho() => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const figuDesenho = await api.stickers.figu_desenho();
if (figuDesenho && figuDesenho instanceof ArrayBuffer) await writeFile('figu_desenho.webp', Buffer.from(figuDesenho));
else console.log(figuDesenho);
```

### figu_emoji
Retorna figurinha aleatória de emoji.

**Assinatura:** `api.stickers.figu_emoji() => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const figuEmoji = await api.stickers.figu_emoji();
if (figuEmoji && figuEmoji instanceof ArrayBuffer) await writeFile('figu_emoji.webp', Buffer.from(figuEmoji));
else console.log(figuEmoji);
```

### figu_engracadas
Retorna figurinha aleatória engraçada.

**Assinatura:** `api.stickers.figu_engracadas() => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const figuEngracadas = await api.stickers.figu_engracadas();
if (figuEngracadas && figuEngracadas instanceof ArrayBuffer) await writeFile('figu_engracadas.webp', Buffer.from(figuEngracadas));
else console.log(figuEngracadas);
```

### figu_raiva
Retorna figurinha aleatória de raiva.

**Assinatura:** `api.stickers.figu_raiva() => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const figuRaiva = await api.stickers.figu_raiva();
if (figuRaiva && figuRaiva instanceof ArrayBuffer) await writeFile('figu_raiva.webp', Buffer.from(figuRaiva));
else console.log(figuRaiva);
```

### figu_roblox
Retorna figurinha aleatória de Roblox.

**Assinatura:** `api.stickers.figu_roblox() => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const figuRoblox = await api.stickers.figu_roblox();
if (figuRoblox && figuRoblox instanceof ArrayBuffer) await writeFile('figu_roblox.webp', Buffer.from(figuRoblox));
else console.log(figuRoblox);
```

---

## Canvas

> [!TIP]
> Todas as rotas de canvas retornam `DefaultResultBuffer` (`ArrayBuffer | { status, msg } | null`).

### welcome
Gera imagem de boas-vindas.

**Assinatura:** `api.canvas.welcome(opts: WelcomeOpts) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const welcome = await api.canvas.welcome({
  fundo: 'https://i.imgur.com/7xv0L8Y.jpeg',
  text: 'Seja bem-vindo(a)!',
  logo: 'https://i.imgur.com/cM8mVYQ.png'
});

if (welcome && welcome instanceof ArrayBuffer) await writeFile('welcome.png', Buffer.from(welcome));
else console.log(welcome);
```

### cardMusic
Gera card com informações de música.

**Assinatura:** `api.canvas.cardMusic(opts: CardMusicOpts) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const cardMusic = await api.canvas.cardMusic({
  fundo: 'https://i.imgur.com/7xv0L8Y.jpeg',
  avatar: 'https://i.imgur.com/cM8mVYQ.png',
  titulo: 'Nuts',
  author: 'Lil Peep',
  atual: '01:14',
  total: '03:25'
});

if (cardMusic && cardMusic instanceof ArrayBuffer) await writeFile('cardmusic.png', Buffer.from(cardMusic));
else console.log(cardMusic);
```

### bemvindo
Gera card de bem-vindo.

**Assinatura:** `api.canvas.bemvindo(opts: BemVindoOpts) => Promise<DefaultResultBuffer>`
> Observação: o campo obrigatório é `lengenda` (com **n**) conforme o tipo `BemVindoOpts`.

```javascript
import { writeFile } from 'node:fs/promises';

const bemvindo = await api.canvas.bemvindo({
  fundo: 'https://i.imgur.com/7xv0L8Y.jpeg',
  perfil: 'https://i.imgur.com/cM8mVYQ.png',
  lengenda: 'Chegou no servidor!',
  titulo: 'Bem-vindo(a)'
});

if (bemvindo && bemvindo instanceof ArrayBuffer) await writeFile('bemvindo.png', Buffer.from(bemvindo));
else console.log(bemvindo);
```

### levelup
Gera card de evolução de nível.

**Assinatura:** `api.canvas.levelup(opts: CardLevelUpOpts) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const levelup = await api.canvas.levelup({
  fundo: 'https://i.imgur.com/7xv0L8Y.jpeg',
  nome: 'Lm Only',
  logo: 'https://i.imgur.com/cM8mVYQ.png',
  level: '20',
  oldlevel: '19',
  xp: '1000',
  nextxp: '1500'
});

if (levelup && levelup instanceof ArrayBuffer) await writeFile('levelup.png', Buffer.from(levelup));
else console.log(levelup);
```

### ping
Gera card de status/ping.

**Assinatura:** `api.canvas.ping(opts: PingOpts) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const ping = await api.canvas.ping({
  fundo: 'https://i.imgur.com/7xv0L8Y.jpeg',
  logo: 'https://i.imgur.com/cM8mVYQ.png',
  uptime: '1h 32m',
  memoria: '120MB',
  latencia: '85ms',
  status: 'online',
  velocidade: '1.2x'
});

if (ping && ping instanceof ArrayBuffer) await writeFile('ping.png', Buffer.from(ping));
else console.log(ping);
```

### perfil
Gera card de perfil.

**Assinatura:** `api.canvas.perfil(opts: CardPerfilOpts) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const perfil = await api.canvas.perfil({
  fundo: 'https://i.imgur.com/7xv0L8Y.jpeg',
  logo: 'https://i.imgur.com/cM8mVYQ.png',
  nome: 'Lm Only',
  subnome: 'Developer',
  custom_status: 'Codando com Yuta APIs'
});

if (perfil && perfil instanceof ArrayBuffer) await writeFile('perfil.png', Buffer.from(perfil));
else console.log(perfil);
```

### goodbye
Gera card de despedida.

**Assinatura:** `api.canvas.goodbye(opts: GoodbyeOpts) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const goodbye = await api.canvas.goodbye({
  fundo: 'https://i.imgur.com/7xv0L8Y.jpeg',
  perfil: 'https://i.imgur.com/cM8mVYQ.png',
  legenda: 'Até a próxima!',
  titulo: 'Goodbye'
});

if (goodbye && goodbye instanceof ArrayBuffer) await writeFile('goodbye.png', Buffer.from(goodbye));
else console.log(goodbye);
```

### ship
Gera card de ship entre dois perfis.

**Assinatura:** `api.canvas.ship(opts: ShipOpts) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const ship = await api.canvas.ship({
  avatar1: 'https://i.imgur.com/cM8mVYQ.png',
  avatar2: 'https://i.imgur.com/Hf4L3Qf.png',
  porcentagem: 87,
  fundo: 'https://i.imgur.com/7xv0L8Y.jpeg'
});

if (ship && ship instanceof ArrayBuffer) await writeFile('ship.png', Buffer.from(ship));
else console.log(ship);
```

### qc
Gera quote card (QC).

**Assinatura:** `api.canvas.qc(opts: QcOpts) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const qc = await api.canvas.qc({
  avatar: 'https://i.imgur.com/cM8mVYQ.png',
  nick: 'Lm Only',
  message: 'Yuta APIs é brabo!'
});

if (qc && qc instanceof ArrayBuffer) await writeFile('qc.png', Buffer.from(qc));
else console.log(qc);
```

### saiu
Gera card de saída.

**Assinatura:** `api.canvas.saiu(opts: SaiuOpts) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const saiu = await api.canvas.saiu({
  fundo: 'https://i.imgur.com/7xv0L8Y.jpeg',
  text: 'Volte sempre!',
  logo: 'https://i.imgur.com/cM8mVYQ.png'
});

if (saiu && saiu instanceof ArrayBuffer) await writeFile('saiu.png', Buffer.from(saiu));
else console.log(saiu);
```

---

## Outros

> [!TIP]
> Algumas funções deste grupo retornam JSON específico e outras retornam `DefaultResultBuffer`.

### ascii
Converte texto em arte ASCII.

**Assinatura:** `api.outros.ascii(text: string) => Promise<AsciiResult>`

```javascript
const ascii = await api.outros.ascii('Yuta');
console.log(ascii.resultado?.[0]?.result);
```

### clima
Consulta clima de uma cidade.

**Assinatura:** `api.outros.clima(cidade: string) => Promise<ClimaResult>`

```javascript
const clima = await api.outros.clima('São Paulo');
console.log(clima.result?.cidade);
console.log(clima.result?.temperatura);
console.log(clima.result?.clima);
```

### emoji_mix
Combina dois emojis em uma imagem.

**Assinatura:** `api.outros.emoji_mix(emoji1: string, emoji2: string) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const emojiMix = await api.outros.emoji_mix('😺', '🔥');
if (emojiMix && emojiMix instanceof ArrayBuffer) await writeFile('emoji_mix.png', Buffer.from(emojiMix));
else console.log(emojiMix);
```

### signo
Retorna previsão de signo.

**Assinatura:** `api.outros.signo(signo: string) => Promise<DefaultResultJSON>`

```javascript
const signo = await api.outros.signo('aries');
console.log(signo.status);
console.log(signo.resultado || signo.result);
```

### traduzir
Traduz texto para outro idioma.

**Assinatura:** `api.outros.traduzir(traduzirOpts: { text: string; idioma: TraduzirLanguages }) => Promise<DefaultResultJSON>`

```javascript
const traduzir = await api.outros.traduzir({
  text: 'Olá mundo',
  idioma: 'en'
});

console.log(traduzir.status);
console.log(traduzir.resultado || traduzir.result);
```

### ip
Consulta dados de um IP.

**Assinatura:** `api.outros.ip(ip: string) => Promise<DefaultResultJSON>`

```javascript
const ip = await api.outros.ip('8.8.8.8');
console.log(ip.status);
console.log(ip.resultado || ip.result);
```

### encurtarLink
Encurta uma URL.

**Assinatura:** `api.outros.encurtarLink(url: string) => Promise<EncurtalinkResult>`

```javascript
const encurtarLink = await api.outros.encurtarLink('https://github.com/Lm-Only/yutaapis');
console.log(encurtarLink.result?.[0]?.original);
console.log(encurtarLink.result?.[0]?.encurtado);
```

### frasesAmor
Retorna frases de amor aleatórias.

**Assinatura:** `api.outros.frasesAmor() => Promise<FrasesAmorResult>`

```javascript
const frasesAmor = await api.outros.frasesAmor();
console.log(frasesAmor.total);
console.log(frasesAmor.resultados?.[0]);
```

### hd
Aplica melhoria HD em imagem por URL.

**Assinatura:** `api.outros.hd(imagem: string) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const hd = await api.outros.hd('https://i.imgur.com/cM8mVYQ.png');
if (hd && hd instanceof ArrayBuffer) await writeFile('hd.png', Buffer.from(hd));
else console.log(hd);
```

### hd2
Segunda variação de melhoria HD em imagem por URL.

**Assinatura:** `api.outros.hd2(imagem: string) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const hd2 = await api.outros.hd2('https://i.imgur.com/cM8mVYQ.png');
if (hd2 && hd2 instanceof ArrayBuffer) await writeFile('hd2.png', Buffer.from(hd2));
else console.log(hd2);
```

### totext
Transcreve áudio para texto.

**Assinatura:** `api.outros.totext(url: string) => Promise<TotextResult>`

```javascript
const totext = await api.outros.totext('https://yuta-apis.xyz/upload/site/dca3bd2318318b25677a4ed7.mp3');

console.log(totext.tipo);
console.log(totext.resultado?.texto);
console.log(totext.resultado?.idioma);
```

### textImg
Converte texto em imagem.

**Assinatura:** `api.outros.textImg(text: string) => Promise<DefaultResultBuffer>`

```javascript
import { writeFile } from 'node:fs/promises';

const textImg = await api.outros.textImg('Yuta APIs');
if (textImg && textImg instanceof ArrayBuffer) await writeFile('textimg.png', Buffer.from(textImg));
else console.log(textImg);
```

### meme
Retorna um meme aleatório.

**Assinatura:** `api.outros.meme() => Promise<MemeResult>`

```javascript
const meme = await api.outros.meme();
console.log(meme.result?.title);
console.log(meme.result?.image);
```

### buscarLocal
Busca localização por texto.

**Assinatura:** `api.outros.buscarLocal(q: string) => Promise<BuscarLocalResult>`

```javascript
const buscarLocal = await api.outros.buscarLocal('São Paulo');
console.log(buscarLocal.result?.nome);
console.log(buscarLocal.result?.latitude);
console.log(buscarLocal.result?.longitude);
```

### shazam
Identifica música por URL de áudio.

**Assinatura:** `api.outros.shazam(url: string) => Promise<ShazamResult>`

```javascript
const resultado = await api.outros.shazam('https://yuta-apis.xyz/upload/site/dca3bd2318318b25677a4ed7.mp3');

console.log(resultado.resultado.titulo);
console.log(resultado.resultado.artista);
console.log(resultado.resultado.album);
console.log(resultado.resultado.thumb);
```

Retorno esperado: JSON (`ShazamResult`) com `resultado.titulo`, `resultado.artista`, `resultado.album`, `resultado.gravadora` e `resultado.thumb`.

---

## Upload

### api.upload
Faz upload de um arquivo (`ArrayBuffer`) para obter link público.

**Assinatura pública:** `api.upload(buffer: ArrayBuffer, name: string, mimeType?: string) => Promise<UploadResult>`

```javascript
import { readFile } from 'node:fs/promises';

const fileBuffer = await readFile('./test/ptt.mp3');
const file = fileBuffer.buffer.slice(
  fileBuffer.byteOffset,
  fileBuffer.byteOffset + fileBuffer.byteLength
);

const upload = await api.upload(file, 'ptt.mp3', 'audio/mpeg');

console.log(upload.link);
console.log(upload.resultado.link);
```

Retorno esperado: JSON (`UploadResult`) com `status`, `criador`, `link` e `resultado.link`.

---

## Pesquisas

### wiki
Busca informações/resumo de um termo na Wikipedia.
```javascript
const wiki = await api.pesquisas.wiki('Typescript');
console.log(wiki);
```

### ytsearch
Pesquisa vídeos no YouTube por texto.
```javascript
const ytsearch = await api.pesquisas.ytsearch('Baby Shark');
console.log(ytsearch);
```

### gitstalk
Consulta informações públicas de um usuário GitHub.
```javascript
const gitstalk = await api.pesquisas.gitstalk('Lm-Only');
console.log(gitstalk);
```

---

## Downloads

### ytmp3
Baixa áudio MP3 de um link do YouTube.
```javascript
const ytmp3 = await api.downloads.ytmp3('https://www.youtube.com/watch?v=osPq9Yb8xm8');
// buffer
```

Exemplo salvando em arquivo:
```javascript
import { writeFile } from 'node:fs/promises';

const ytmp3 = await api.downloads.ytmp3('https://www.youtube.com/watch?v=osPq9Yb8xm8');
await writeFile('ytmp3.mp3', ytmp3);
```

### ytmp4
Baixa vídeo MP4 de um link do YouTube.
```javascript
const ytmp4 = await api.downloads.ytmp4('https://www.youtube.com/watch?v=osPq9Yb8xm8');
// buffer
```

Exemplo salvando em arquivo:
```javascript
import { writeFile } from 'node:fs/promises';

const ytmp4 = await api.downloads.ytmp4('https://www.youtube.com/watch?v=osPq9Yb8xm8');
await writeFile('ytmp4.mp4', ytmp4);
```

### play
Busca uma música por nome e retorna o resultado em áudio.
```javascript
const play = await api.downloads.play('Nuts');
// buffer
```

Exemplo salvando em arquivo:
```javascript
import { writeFile } from 'node:fs/promises';

const play = await api.downloads.play('Nuts');
await writeFile('play.mp3', play);
```

### playvideo
Busca um vídeo por nome e retorna o vídeo.
```javascript
const playvideo = await api.downloads.playvideo('Hutao Edit');
// buffer
```

Exemplo salvando em arquivo:
```javascript
import { writeFile } from 'node:fs/promises';

const playvideo = await api.downloads.playvideo('Hutao Edit');
await writeFile('playvideo.mp4', playvideo);
```

### tiktokdl
Baixa mídia de um link do TikTok.
```javascript
const tiktokdl = await api.downloads.tiktokdl('https://vt.tiktok.com/ZSqRRu4Dn/');
console.log(tiktokdl);
```

### instavideo
Baixa vídeo a partir de link do Instagram.
```javascript
const instavideo = await api.downloads.instavideo('https://www.instagram.com/p/Dc1iG74Fkgt/');
console.log(instavideo);
```

### pinterest
Pesquisa conteúdo no Pinterest por texto.
```javascript
const pinterest = await api.downloads.pinterest('Hutao Icon');
// buffer
```

Exemplo salvando em arquivo:
```javascript
import { writeFile } from 'node:fs/promises';

const pinterest = await api.downloads.pinterest('Hutao Icon');
await writeFile('pinterest.jpg', pinterest);
```

### pinterestMp3
Retorna áudio relacionado a conteúdo do Pinterest (quando suportado).
```javascript
const pinterestMp3 = await api.downloads.pinterestMp3('https://pin.it/5decaQP2P');
// buffer
```

Exemplo salvando em arquivo:
```javascript
import { writeFile } from 'node:fs/promises';

const pinterestMp3 = await api.downloads.pinterestMp3('https://pin.it/5decaQP2P');
await writeFile('pinterest.mp3', pinterestMp3);
```

### pinterestVideo
Retorna vídeo a partir de link do Pinterest.
```javascript
const pinterestVideo = await api.downloads.pinterestVideo('https://pin.it/5decaQP2P');
console.log(pinterestVideo);
```

---

## IAs

### gpt
Envia um prompt e retorna resposta gerada por IA (modelo GPT).
```javascript
const gpt = await api.ias.gpt('Oii tudo bem?');
console.log(gpt);
```

### gemini_pro
Envia prompt para modelo Gemini Pro.
```javascript
const geminiPro = await api.ias.gemini_pro('Oii tudo bem?');
console.log(geminiPro);
```

### perplexity_ai
Envia prompt para integração Perplexity AI.
```javascript
const perplexityAi = await api.ias.perplexity_ai('Oii tudo bem?');
console.log(perplexityAi);
```

### geminivoz
Endpoint Gemini com foco em recursos de voz (depende da implementação).
```javascript
const geminiVoz = await api.ias.geminivoz('Oii tudo bem?');
// buffer
```

Exemplo salvando em arquivo:
```javascript
import { writeFile } from 'node:fs/promises';

const geminiVoz = await api.ias.geminivoz('Oii tudo bem?');
await writeFile('geminivoz.mp3', geminiVoz);
```

### gemini
Endpoint padrão do Gemini para respostas por prompt.
```javascript
const gemini = await api.ias.gemini('Oii tudo bem?');
console.log(gemini);
```

---

## Geradores

### nick
Gera sugestões de nickname com base no nome informado.
```javascript
const nick = await api.geradores.nick('Lm Only');
console.log(nick);
```

### qrcode
Gera um QR Code com o texto/link enviado.
```javascript
const qrcode = await api.geradores.qrcode('https://github.com/Lm-Only/HutaoBot');
// buffer
```

Exemplo salvando em arquivo:
```javascript
import { writeFile } from 'node:fs/promises';

const qrcode = await api.geradores.qrcode('https://github.com/Lm-Only/HutaoBot');
await writeFile('qrcode.png', qrcode);
```

---

## Logos

### logos
Cria logos com estilo e texto informados.
```javascript
const logos = await api.logos('glitch', 'LmOnly');
// buffer
```

Exemplo salvando em arquivo:
```javascript
import { writeFile } from 'node:fs/promises';

const logos = await api.logos('glitch', 'LmOnly');
await writeFile('logo.png', logos);
```

---

## Notícias

### cnn
Retorna notícias da CNN.
```javascript
const cnn = await api.noticias.cnn();
console.log(cnn);
```

### esportes
Retorna notícias da categoria esportes.
```javascript
const esportes = await api.noticias.esportes();
console.log(esportes);
```

### g1
Retorna notícias do G1.
```javascript
const g1 = await api.noticias.g1();
console.log(g1);
```

### ibge
Retorna notícias/conteúdos relacionados ao IBGE.
```javascript
const ibge = await api.noticias.ibge();
console.log(ibge);
```

### noticias_atuais
Retorna notícias gerais atuais.
```javascript
const noticiasAtuais = await api.noticias.noticias_atuais();
console.log(noticiasAtuais);
```

### politica
Retorna notícias de política.
```javascript
const politica = await api.noticias.politica();
console.log(politica);
```

### uol
Retorna notícias da UOL.
```javascript
const uol = await api.noticias.uol();
console.log(uol);
```

---

## Plaquinhas

### plaq
Gera uma plaquinha com modelo (`type`) e texto.
```javascript
const plaquinha = await api.plaquinhas('plaq1', 'LmOnly');
// buffer
```

Exemplo salvando em arquivo:
```javascript
import { writeFile } from 'node:fs/promises';

const plaquinha = await api.plaquinhas('plaq1', 'LmOnly');
await writeFile('plaquinha.png', plaquinha);
```
> Também vai até plaq10

---

* By [Yuta Apis](https://yuta-apis.xyz)
* Criado por: Lm Only & Nk Petrov
* Versão: beta

License MIT
