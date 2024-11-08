# Exemplo de site estático React

Esse é um exemplo de site estático exibindo meu currículo,
com a ideia de mostrar um pouco da minha ideia de uma arquitetura escalável e testável.
As principais tecnologias usadas foram:

* React: biblioteca de UI 
* Typescript: camada de tipagem para JS
* Vite: bundler
* Cypress: para testes (o router -- vide abaixo -- torna Cypress mais conveniente para testes do que Jest)
* TanStack Router: permite organizar as rotas pelo sistema de arquivos, deixando a estrutura mais clara
* PicoCSS: biblioteca CSS (depende de Sass)
* i18next: internacionalização
* date-fns: biblioteca para lidar com datas
* ESLint: linter
* Prettier: formatador

Para rodar o site, recomendo o uso do `pnpm`. `npm` e `yarn` não foram testados mas deveriam funcionar. Uma vez instaladas as dependências com `pnpm install`, basta rodar, em 2 terminais separados:

```
# Inicia o site
pnpm run dev

# Inicia cypress para rodar os testes
pnpm run cy:open
```
