## Documentation source

Aqui é onde fica alguns exemplos básicos de como configurar o módulo do [YutaApis](https://yuta-apis.xyz)

Vale ressaltar que estes exemplos são apenas uma forma pra você entender melhor o modo de uso do módulo.

## Exemplos

### 1 - Como dar os primeiros passos

* Primeiro crie uma pasta de teste ou acesse a pasta do seu projeto/bot
```bash
cd ./seu-projeto-exemplo
```
* Depois instale o módulo do [YutaApis](https://yuta-apis.xyz) através do npm
```bash
npm i yutaapis
```

### 2 - Como importar no projeto?

* Você deve importar o módulo do [YutaApis](https://yuta-apis.xyz) assim como qualquer outro módulo
```javascript
import YutaApis from 'yutaapis';
```

* Se seu código é do tipo commonjs, use assim:
```javascript
const { default: YutaApis } = require('yutaapis'); 
```

### 3 - Como dar início na API?
* O módulo do [YutaApis](https://yuta-apis.xyz) é uma classe que guarda as configurações, rotas e algumas opções.
* Então você deve iniciar da maneira clássica **(sem paramêtros)**
```javascript
const api = new YutaApis(); // apenas exemplo
```

### 4 - Quais parâmetros devo adicionar a classe?
* Alguns parâmetros são obrigatórios
* Já outros são apenas opções conforme sua escolha
* **Veja o exemplo:**

```javascript
 // substitua pelo seu token do Yuta Apis
const token = process.env.TOKEN;

const api = new YutaApis({
    /** OBRIGATÓRIO */
    apiToken: token,

    /** Apenas se quiser **/
    logger: true,
    messageInvalidToken: 'Token errado'
});
```

### 5 - O que significa os parâmetros logger e messageInvalidToken?
* Estes parâmetros são apenas opções para personalizar mensagens que o módulo lança como aviso

---

* ``logger`` é um boleano (true/false) que você configura se caso quiser que a mensagem de aviso seja exibida ou não. Por padrão ele já exibe no console.
* ``messageInvalidToken`` é opção que permite você personalizar a mensagem de aviso no console quando o API TOKEN não é o do [YutaApis](https://yuta-apis.xyz) ou não está configurada corretamente. Por padrão ele já envia uma mensagem de aviso no próprio console.

### 6 - Verificações mais controladas
* Você pode verificar se um token segue os padrões do Api token do [YutaAPIs](https://yuta-apis.xyz) ou não. 
* **EXEMPLO:**
```javascript
import YutaApis, { isYutaApiToken } from 'yutaapis';

const token = process.env.TOKEN;

if (!isYutaApiToken(token)) {
    console.log('Api token inválida!');
    process.exit(1);
}
```

# Finalizando

### Exemplo completo
```javascript
import YutaApis, { isYutaApiToken } from 'yutaapis';

const token = process.env.TOKEN;
const modoEstrito = false;

if (modoEstrito && !isYutaApiToken(token)) {
    console.log('Api Token não está configurada corretamente!');
    process.exit(1);
}

const api = new YutaApis({
    apiToken: token,
    logger: true // true is default
    messageInvalidToken: 'Exemplo de log quando o token não está configurado corretamente'
});

console.log(await api.geradores.nick('Lm Only'));
```

* Por fim é isso, o resto da documentação está centralizado no [README.md](../README.md) principal.
