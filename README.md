# Teste Frontend - Tropa Digital

Este projeto foi desenvolvido como parte do teste para a vaga de Frontend na Tropa Digital. Consiste em uma aplicação com tela de login e dashboard interno, seguindo o layout disponibilizado no Figma.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos
- **TypeScript**: Superset JavaScript que adiciona tipagem estática
- **Styled Components**: Biblioteca para estilização de componentes com CSS-in-JS
- **React Hooks**: Para gerenciamento de estado e ciclo de vida dos componentes

## Estrutura do Projeto

O projeto segue a estrutura de diretórios do Next.js App Router:

```
src/
├── app/
│   ├── dashboard/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AuthCheck.tsx
│   ├── Dashboard.tsx
│   └── LoginForm.tsx
└── lib/
    └── registry.tsx
```

## Funcionalidades Implementadas

1. **Tela de Login**:
   - Layout fiel ao design do Figma
   - Formulário com validação de campos
   - Autenticação simulada (sem integração com API)
   - Redirecionamento para o dashboard após login bem-sucedido

2. **Dashboard**:
   - Layout fiel ao design do Figma
   - Menu lateral com navegação
   - Tabela de eventos com dados simulados
   - Proteção de rota (redirecionamento para login se não autenticado)
   - Funcionalidade de logout

3. **Responsividade**:
   - Layout adaptável para dispositivos móveis e desktop
   - Menu lateral colapsável em telas menores

Desenvolvido por [Luiz Eduardo Gomes Dias] para o teste da Tropa Digital.
