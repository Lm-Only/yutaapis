# yutaapis
Módulo SDK TypeScript/JavaScript desenvolvido para consumo do Yuta APIs; em parceria com HutaoBot


<h1 align="center">
<p>
    <img src="https://raw.githubusercontent.com/Lm-Only/yutaapis/refs/heads/main/assets/banner.jpg" alt="Yuta APIS" width="720">
</p>
  
##

> [!IMPORTANT]
> **Este módulo ainda está em desenvolvimento por Lm Only, é de certeza que algumas rotas ainda não estejam configuradas,**
> **Em breve o módulo deve estar totalmente pronto**

## Instalação

```bash
npm i yutaapis
```

## Quickstart

```javascript
// Esm - "type": "module"
import YutaApis from 'yutaapis';

const api = new YutaApis({
  apiToken: 'SEU_TOKEN' // token do Yuta obtido no site
});
```

## Index

- [Pesquisas](#pesquisas)
  - [wiki](#pesquisas-wiki)
  - [ytsearch](#pesquisas-ytsearch)
  - [gitstalk](#pesquisas-gitstalk)

- [Downloads](#downloads)
  - [ytmp3](#downloads-ytmp3)
  - [ytmp4](#downloads-ytmp4)
  - [play](#downloads-play)
  - [playvideo](#downloads-playvideo)
  - [tiktokdl](#downloads-tiktokdl)
  - [instavideo](#downloads-instavideo)
  - [pinterest](#downloads-pinterest)
  - [pinterestMp3](#downloads-pinterestmp3)
  - [pinterestVideo](#downloads-pinterestvideo)

- [IAs](#ias)
  - [gpt](#ias-gpt)
  - [gemini_pro](#ias-gemini_pro)
  - [perplexity_ai](#ias-perplexity_ai)
  - [geminivoz](#ias-geminivoz)
  - [gemini](#ias-gemini)

- [Geradores](#geradores)
  - [nick](#geradores-nick)
  - [qrcode](#geradores-qrcode)

- [Logos](#logos)
  - [logos](#logos-logos)

- [Notícias](#notícias)
  - [cnn](#notícias-cnn)
  - [esportes](#notícias-esportes)
  - [g1](#notícias-g1)
  - [ibge](#notícias-ibge)
  - [noticias_atuais](#notícias-noticias_atuais)
  - [politica](#notícias-politica)
  - [uol](#notícias-uol)

- [Plaquinhas](#plaquinhas)
  - [plaquinhas](#plaquinhas-plaquinhas)

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
await writeFile('geminivoz.bin', geminiVoz);
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

### plaquinhas
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
* Criado por: Lm Only
* Versão: beta

License MIT
