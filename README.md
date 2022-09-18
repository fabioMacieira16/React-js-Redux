# Sobre este curso
Curso React Js do zero ao avançado na pratica
Aprenda React JS na pratica a criar aplicações completas do extremo ZERO ao avançado!

# Informações e links do curso
Professor : Matheus Fraga
Link: https://www.udemy.com/course/curso-reactjs/learn/lecture/17423714#overview

SIGA-ME NO INSTAGRAM:
https://www.instagram.com/fabiovitormacieira/

# O que você aprenderá
    Você aprenderá criar aplicações com React Js do zero ao avançado
    Aprender a criar sistemas e aplicações de forma certa.
    Sistemas completos com rotas, estados isolado, Componentes
    Dominar todo poder do React JS
    Há algum requisito ou pré-requisito para o curso?
    Conhecimento básico de HTML
    Para quem é este curso:
    Qualquer pessoa que deseja aprender de forma prática a criar aplicações com React JS
    Programadores que desejam aprender a trabalhar com React JS do zero ao avançado
    Programadores que desejem aprender a desenvolver aplicações profissionais

# Conteúdos abordados no curso
O que é o Redux
 > Biblioteca javascripts totalmente separada do react.
 > controle dos estados globais
    > O estado tem mais de um dono?
    > O estado é manipulado por mais de um componentes?
    > As ações dos usuarios em outros components causam efeitos nos estados ?]

Redux é um controlador de estados geral para sua aplicação.

 - Compartilhar estados entre vários componentes diferentes se torna uma coisa muito fácil quando o utilizamos. O Redux é basicamente divido em 3 partes: store, reducers e actions.

 A store
    -"store" é o nome dado pelo Facebook para o conjunto de estados da sua aplicação. Vamos pensar na store como um grande centro de informações, que possui disponibilidade para receber e entregar exatamente o que o seu componente requisita (seja uma função, ou uma informação propriamente dita). A store é um objeto JavaScript que possui todos os estados dos seus componentes.

Os reducers

 - Cada dado da store deve ter o seu próprio reducer, por exemplo: o dado "user" teria o seu reducer, chamado  só para User. Um reducer é encarregado de lidar com todas as ações, como algum componente pedindo para alterar algum dado da store.    

 Actions

 - Actions são responsáveis por requisitar algo para um reducer. Elas devem ser sempre funções puras, dizendo de uma forma leiga, ou seja elas devem APENAS enviar os dados ao reducer, nada além disso. Disparar uma ação apenas levando os dados que você deseja enviar e o reducer vai receber e usar os dados.