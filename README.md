# Teste Frontend - Tropa Digital

Este projeto foi desenvolvido como parte do teste para a vaga de Frontend na Tropa Digital. Consiste em uma aplicação com tela de login e dashboard interno, seguindo fielmente o layout disponibilizado no Figma.

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

## Como Executar o Projeto Localmente

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd tropa-digital-test
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse a aplicação em `http://localhost:3000`

## Instruções para Deploy na Vercel

Para publicar este projeto na Vercel:

1. Crie uma conta na [Vercel](https://vercel.com) caso ainda não tenha
2. Faça o upload do projeto para um repositório Git (GitHub, GitLab ou Bitbucket)
3. Na Vercel, clique em "New Project" e importe o repositório
4. Mantenha as configurações padrão e clique em "Deploy"
5. Após o deploy, a Vercel fornecerá uma URL pública para acesso à aplicação

## Credenciais para Teste

A aplicação utiliza autenticação simulada. Qualquer combinação de email/senha será aceita para fins de demonstração.

## Considerações sobre o Desenvolvimento

O projeto foi desenvolvido com foco na fidelidade visual ao layout do Figma, na experiência do usuário e na organização do código. A escolha do Next.js com Styled Components permitiu uma implementação eficiente e escalável, mantendo a qualidade visual e a responsividade em diferentes dispositivos.

---

Desenvolvido por [Seu Nome] para o teste da Tropa Digital.
