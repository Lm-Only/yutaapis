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
  apiToken: process.env.TOKEN // token do Yuta obtido no site
});

const gitstalkResult = await api.pesquisas.gitstalk('Lm-Only'); // Promise<Object>

if (!gitstalkResult.status) {
    console.error(gitstalkResult.msg || 'Error na API');
    process.exit();
}

console.log(gitstalkResult);
```

## Para que serve esse módulo?

<details>

<summary>
     <b>Saiba aqui...</b>
 </summary>

* Este módulo foi desenvolvido inteiramente em Typescript por **Lm Only** com o foco principal em ajudar aos usuários do [Yuta APIs](https://yuta-apis.xyz) a usarem a API de uma forma mais simples e fácil. ✨️

* Uma das **principais características** desse módulo, é a forma de como ele é usado, principalmente para quem programa usando o **VScode.** 🧑‍💻 Essa característica ajuda ao dev a **entender** o que tal rota recebe e o que ela retorna. 💎

* Além disso, o módulo evita que a mesma coisa se **repita várias vezes.** Veja o Exemplo:

## Antes 
```javascript
// Veja o código todo deslizando pra direita
const response = await fetch("https://yuta-apis.xyz/api/geradores/gerar-nicks?text=Lm+Only&apitoken=SEU_TOKEN");
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

- [Pesquisas](#pesquisas)
  - [wiki](#wiki)
  - [ytsearch](#ytsearch)
  - [gitstalk](#gitstalk)

- [Downloads](#downloads)
  - [ytmp3](#ytmp3)
  - [ytmp4](#ytmp4)
  - [play](#play)
  - [playvideo](#playvideo)
  - [tiktokdl](#tiktokdl)
  - [instavideo](#instavideo)
  - [pinterest](#pinterest)
  - [pinterestMp3](#pinterestmp3)
  - [pinterestVideo](#pinterestvideo)

- [IAs](#ias)
  - [gpt](#gpt)
  - [gemini_pro](#gemini_pro)
  - [perplexity_ai](#perplexity_ai)
  - [geminivoz](#geminivoz)
  - [gemini](#gemini)

- [Geradores](#geradores)
  - [nick](#nick)
  - [qrcode](#qrcode)

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
