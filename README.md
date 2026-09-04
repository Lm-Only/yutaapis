# yutaapis
Módulo SDK TypeScript/JavaScript desenvolvido para consumo do Yuta APIs; em parceria com HutaoBot


<h1 align="center">
<p>
    <img src="https://raw.githubusercontent.com/Lm-Only/yutaapis/refs/heads/main/assets/banner.jpg" alt="Yuta APIS" width="720">
</p>


## Instalação 

````bash
npm i yutaapis
````

## Quickstart

````javascript
// Esm - "type": "module"

import YutaApis from 'yutaapis';

const api = new YutaApis({
    apiToken: 'SEU_TOKEN' // token do Yuta obtido no site
});
````

## Testes

````javascript
// Downloads Play
const musicBuffer = await api.downloads.ytmp3('https://youtu.be/RiWTirsWTeg?is=CwxJ8AAE-LvVNEEN');
````

* By [Yuta Apis](https://yuta-apis.xyz)
* Criado por: Lm Only
* Versão: beta

License MIT
