# 🤔 Por que fizemos assim?

Algumas das decisões que tomamos no desenvolvimento do durumim UI.

## 📦 Por que usamos react-icons?

Na V1 do Durumim, decidimos usar o react-icons como nossa biblioteca de ícones porque:

1. **Rapidez de implementação** - Não precisamos desenhar um conjunto completo de ícones para começar
2. **Variedade** - Já temos acesso a milhares de ícones de alta qualidade
3. **Familiaridade** - Muitos desenvolvedores já conhecem essa biblioteca

Mas calma lá! Temos planos ambiciosos para o futuro. A ideia é que o durumim tenha seu próprio conjunto de ícones, com uma identidade única. Enquanto isso, nosso componente `Icon` já funciona como uma abstração que vai facilitar essa transição no futuro.

## 🌙 Por que tudo está em modo dark?

Ah, você percebeu! Sim, a V1 do durumim está sendo construída com foco no tema escuro porque:

1. **Tendência** - Vamos admitir, dark mode é o novo normal
2. **Foco inicial** - Precisávamos escolher uma direção para começar
3. **É mais legal** - Ok, isso é subjetivo, mas gostamos mais assim! 😎

Não se preocupe! O modo claro (light mode) está na lista de prioridades. Estamos construindo o sistema de design pensando em suportar múltiplos temas desde o início, usando tokens de design que serão adaptados para ambos os modos.

## 🧪 Cadê os testes?

Você não está vendo testes porque... bem, eles ainda não estão lá! 😅

Na primeira fase do projeto, estamos focando em:
1. **Construir componentes funcionais**
2. **Estabelecer padrões de design**
3. **Criar uma documentação clara**

Testes são SUPER importantes e estão no nosso radar. Nas próximas versões, implementaremos:
- Testes unitários
- Testes de integração
- Testes de acessibilidade
- E muito mais!

## 📱 E o React Native?

O suporte para React Native também está nos planos! A ideia é compartilhar a mesma linguagem visual e tokens de design entre plataformas web e mobile, tornando a experiência consistente independentemente de onde o seu app roda.

## 💬 Algo a acrescentar?

Este projeto é um trabalho em andamento e estamos sempre abertos a feedback. Se você tem sugestões, críticas ou ideias para o durumim UI, adoraríamos ouvir! 