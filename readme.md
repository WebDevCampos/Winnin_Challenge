# Desafio Winnin

### Sistema que traz informações do subreddit [reactjs](https://www.reddit.com/r/reactjs/)

#### Biblioteca Utilizada:
 - [React](https://pt-br.reactjs.org/)

#### Dependências: 
- [date-fns](https://date-fns.org/docs/Getting-Started)
- [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start)

### O que aprendi com este desafio:
 - Estive  em contato com este desafio por uma semana ou mais e como sou iniciante em React, aprendi muitos dos fundamentos como **Componentização**, **Roteamento**, **Reatividade**.
 - Pude estudar mais sobre **Hooks** e tive contato com **styled components**.
 - Também pude entender melhor como trabalhar com o serviço de *deploy* do [Netlify](https://www.netlify.com/) e tive contato com o [Next JS](https://nextjs.org/), mas preferi construir a aplicação com o [Vite](https://vitejs.dev/).
 - Organizei a estrutura do projeto de modo que componentes e *pages* ficassem distintos.  

### O que eu não consegui aprender neste desafio (ainda)

 - Não compreendo totalmente as regras dos **Hooks**, e por isso não consegui fazer com que a função que conecta com a [API do Reddit](https://www.reddit.com/dev/api/) tivesse responsabilidade única, repetindo em vários locais do projeto. 
 - Mesmo tendo visto **styled components**, ainda não consegui implantar de forma satisfatória no projeto. Pretendo, nessa semana, aprofundar meus estudos nesses tópicos.

### O que melhorar na semana que vem (28/03 a 01/04)
 - [x] <sub>Feito dia 29/03/22</sub> Organizar os estilos, de preferência utilizando os **styled-components** 
 - [x] <sub>Feito dia 29/03/22</sub> Procurar otimizar as funções de **fetch**
 - [x] <sub>Feito dia 31/03/22</sub> Entender melhor as **renderizações condicionais** e **Hooks** como o **useEffect**.
 
### Considerações finais (por hora)

Obrigado ao pessoal da [Winnin](https://www.winnin.com/) por disponibilizar este desafio. Iniciantes como eu sentem dificuldades em entender o que as empresas realmente procuram nos desenvolvedores e realizar um projeto assim, com requisitos e objetivos claros, me faz perceber quais caminhos devo buscar para aprimorar minhas competências.
Estou feliz por ter realizado esses estudos e por ter aprendido mais. 

#### Dias 28/03 a 01/04
Consegui aplicar os styled-components e otimizar a função que busca as informações, chamando em cada botão suas respectivas categorias. Não preciso criar um `fetch` para cada categoria, apenas invocar a função e passar os parâmetros. Queria poder isolar essa função e chamá-la em outro componente, mas ainda não obtive o resultado desejado. Estudei mais sobre **Hooks**, julguei que o **useContext** fosse a melhor solução, mas ainda não poude compreendê-lo. Desfiz o **roteamento** pretendo refazê-lo.
  
#### Dias 04/04 a 08/04/2022
