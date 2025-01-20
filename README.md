# Teste-Frontend
Antes de começar, você precisa de algumas ferramentas instaladas:

Node.js:Isso incluirá o npm, que é o gerenciador de pacotes do Node.js.
Editor de Código: Use um editor como VS Code.

Abra o terminal e crie um novo projeto React usando Vite ou Create React App.
Com Vite (recomendado para melhor desempenho):
npm create vite@latest login-form

Ou com Create React App:
npx create-react-app login-form

Entre na pasta do projeto
cd login-form

Instale as dependências necessárias para o código:
npm install react-hook-form @hookform/resolvers yup react-icons

Substitua o conteúdo de App.jsx ou App.js:
Copie o código do componente Login e cole no arquivo App.jsx ou crie um arquivo separado para ele (como Login.jsx).

Crie o arquivo Login.css:
Este arquivo estiliza o formulário. Adicione regras CSS para a classe .container, .input-field, .errors, etc. 

Inicie o servidor de desenvolvimento:
npm run dev
Ou, se você estiver usando o Create React App:
npm start

Digite teste@teste.com como e-mail e 123456 como senha para ver a mensagem de sucesso.
Teste outros inputs para validar a exibição de erros.

Se ocorrer algum erro:
Certifique-se de que todas as dependências estão instaladas (react-icons, react-hook-form, etc.).
Verifique o console do navegador para mensagens de erro.
Confirme que o arquivo Login.css está corretamente importado.
