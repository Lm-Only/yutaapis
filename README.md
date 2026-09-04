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

### Pesquisas: wiki
**O que faz:** busca informações/resumo de um termo na Wikipedia.  
```javascript
console.log(await api.pesquisas.wiki('Typescript'));
```

### Pesquisas: ytsearch
**O que faz:** pesquisa vídeos no YouTube por texto.  
```javascript
console.log(await api.pesquisas.ytsearch('Baby Shark'));
```

### Pesquisas: gitstalk
**O que faz:** consulta informações públicas de um usuário GitHub.  
```javascript
console.log(await api.pesquisas.gitstalk('Lm-Only'));
```

---

## Downloads

### Downloads: ytmp3
**O que faz:** converte/obtém áudio MP3 de um link do YouTube.  
```javascript
console.log(await api.downloads.ytmp3('https://www.youtube.com/watch?v=osPq9Yb8xm8'));
```

### Downloads: ytmp4
**O que faz:** obtém vídeo MP4 de um link do YouTube.  
```javascript
console.log(await api.downloads.ytmp4('https://www.youtube.com/watch?v=osPq9Yb8xm8'));
```

### Downloads: play
**O que faz:** busca uma música por nome e retorna o resultado em áudio.  
```javascript
console.log(await api.downloads.play('Nuts'));
```

### Downloads: playvideo
**O que faz:** busca um vídeo por nome e retorna o vídeo.  
```javascript
console.log(await api.downloads.playvideo('Hutao Edit'));
```

### Downloads: tiktokdl
**O que faz:** baixa mídia de um link do TikTok.  
```javascript
console.log(await api.downloads.tiktokdl('https://vt.tiktok.com/ZSqdPRtsE/'));
```

### Downloads: instavideo
**O que faz:** baixa vídeo a partir de link do Instagram.  
```javascript
console.log(await api.downloads.instavideo('https://www.instagram.com/p/Dc1iG74Fkgt/?img_index=9&igsi=aWYzZmFkeDdsMTN1'));
```

### Downloads: pinterest
**O que faz:** pesquisa conteúdo no Pinterest por texto.  
```javascript
console.log(await api.downloads.pinterest('Hutao Icon'));
```

### Downloads: pinterestMp3
**O que faz:** retorna áudio relacionado a conteúdo do Pinterest (quando suportado).  
```javascript
console.log(await api.downloads.pinterestMp3('https://pin.it/5decaQP2P'));
```

### Downloads: pinterestVideo
**O que faz:** retorna vídeo a partir de link do Pinterest.  
```javascript
console.log(await api.downloads.pinterestVideo('https://pin.it/5decaQP2P'));
```

---

## IAs

### IAs: gpt
**O que faz:** envia um prompt e retorna resposta gerada por IA (modelo GPT).  
```javascript
console.log(await api.ias.gpt('Oii tudo bem?'));
```

### IAs: gemini_pro
**O que faz:** envia prompt para modelo Gemini Pro.  
```javascript
console.log(await api.ias.gemini_pro('Oii tudo bem?'));
```

### IAs: perplexity_ai
**O que faz:** envia prompt para integração Perplexity AI.  
```javascript
console.log(await api.ias.perplexity_ai('Oii tudo bem?'));
```

### IAs: geminivoz
**O que faz:** endpoint Gemini com foco em recursos de voz (depende da implementação).  
```javascript
console.log(await api.ias.geminivoz('Oii tudo bem?')); // buffer
```

### IAs: gemini
**O que faz:** endpoint padrão do Gemini para respostas por prompt.  
```javascript
console.log(await api.ias.gemini('Oii tudo bem?'));
```

---

## Geradores

### Geradores: nick
**O que faz:** gera sugestões de nickname com base no nome informado.  
```javascript
console.log(await api.geradores.nick('Lm Only'));
```

### Geradores: qrcode
**O que faz:** gera um QR Code com o texto/link enviado.  
```javascript
console.log(await api.geradores.qrcode('https://github.com/Lm-Only/HutaoBot'));
```

---

## Logos

### Logos: logos
**O que faz:** cria logos com estilo e texto informados.  
```javascript
console.log(await api.logos('glitch', 'LmOnly'));
```

---

## Notícias

### Notícias: cnn
**O que faz:** retorna notícias da CNN.  
```javascript
console.log(await api.noticias.cnn());
```

### Notícias: esportes
**O que faz:** retorna notícias da categoria esportes.  
```javascript
console.log(await api.noticias.esportes());
```

### Notícias: g1
**O que faz:** retorna notícias do G1.  
```javascript
console.log(await api.noticias.g1());
```

### Notícias: ibge
**O que faz:** retorna notícias/conteúdos relacionados ao IBGE.  
```javascript
console.log(await api.noticias.ibge());
```

### Notícias: noticias_atuais
**O que faz:** retorna notícias gerais atuais.  
```javascript
console.log(await api.noticias.noticias_atuais());
```

### Notícias: politica
**O que faz:** retorna notícias de política.  
```javascript
console.log(await api.noticias.politica());
```

### Notícias: uol
**O que faz:** retorna notícias da UOL.  
```javascript
console.log(await api.noticias.uol());
```

---

## Plaquinhas

### Plaquinhas: plaquinhas
**O que faz:** gera uma plaquinha com modelo (`type`) e texto.  
```javascript
console.log(await api.plaquinhas('plaq1', 'LmOnly'));
```
> Também vai até plaq10

---

* By [Yuta Apis](https://yuta-apis.xyz)
* Criado por: Lm Only
* Versão: beta

License MIT
