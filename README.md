#Petto - Guia de Instalação e Execução

- Requisitos:

Antes de começar, você precisa ter instalado em seu computador:

Node.js (versão LTS recomendada)

Git

Um terminal (como o CMD, PowerShell ou Terminal no Mac/Linux)

Um editor de código (recomendado: Visual Studio Code)

Celular com Android ou iOS com o aplicativo Expo Go instalado (disponível na Google Play e App Store)



---

#Passo 1: Instalar o Expo CLI

Abra o CMD (Prompt de Comando) e digite:

npm install -g expo-cli

Esse comando instala a interface de linha de comando do Expo de forma global.


---

#Passo 2: Clonar o projeto existente

Execute o comando abaixo usando a url desse repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

Substitua seu-usuario e seu-repositorio pela URL correta do projeto.


---

Passo 3: Instalar as dependências

Se você já clonou o projeto, rode:

npm install

Esse comando instala todas as bibliotecas necessárias listadas no package.json.


---

Passo 4: Iniciar o projeto

Com as dependências instaladas, agora é só iniciar o servidor de desenvolvimento:

npx expo start

Esse comando abrirá uma aba no navegador com um QR Code.


---

Passo 5: Executar o app no celular

1. Instale o aplicativo Expo Go no seu celular.


2. Conecte seu celular à mesma rede Wi-Fi do computador.


3. Abra o app Expo Go e escaneie o QR Code que apareceu no navegador após o comando npx expo start.



Pronto! O app vai abrir automaticamente no seu celular.


---

Dicas úteis

Para reiniciar o app, pressione r no terminal.

Para abrir o menu de desenvolvedor, pressione d.

Para limpar o cache (caso algo dê erro), use:


npx expo start -c


---

Possíveis erros e soluções

Porta ocupada

> Erro: “Another process is using port 19000...”



Solução:

npx expo start --port 19001

O app não abre no celular

Certifique-se de que o celular e o PC estão na mesma rede Wi-Fi.

Tente usar a opção “Tunnel” em vez de “LAN” no navegador Expo.



---