Este foi o segundo projeto em TypeScript que eu realizei durante o curso da Trybe. 
Nele foi trabalhado com a Programação Orientada à Objeto seguindo os princípios da arquitetura do SOLID para
criar um jogo de RPG, tendo sido desenvolvido utilizando TypeScript em Node.js e sendo rodado dentro de um container Docker.


Para acessar o repositório esse projeto, clone o repositório, acesse a pasta e inicie o conteiner docker
seguindo os passos abaixo:
- git clone git@github.com:FernandaGrein/BackEnd-project-Trybers-And-Dragons.git
- cd BackEnd-project-Trybers-And-Dragons
- docker-compose up -d
- docker exec -it trybers_and_dragons bash
- npm install 

Foram cumpridos os seguintes requisitos: 
- Primeiramente foram criadas classes abstratas que seriam os modelos para as classes que delas Herdam,
foram cridas 3 classes abstradas: Races, Archetypes e Battle.
- Também foram criadas  3 interfaces: Fighter, SimpleFighter e Energy delimitando as propriedades e comportamentos mínimos esperados pelos personagens.
- Por fim foram criadas as classes que herdam das classes abstratas e aquelas que implementam as interfaces existentes.
Dessa foram foram criados vários personagens com suas própias caracteríticas, bem como, batalhas que podem ser entre um lutador contra outro,
ou um lutador contra vários outros. 
