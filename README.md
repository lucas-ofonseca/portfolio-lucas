# Portfólio — Lucas Fonseca

> Desenvolvedor Full Stack | *Conectando dados, lógica e código.*

Portfólio pessoal moderno e responsivo, desenvolvido com **Next.js 14** e **TypeScript**. Este projeto serve como vitrine para meus trabalhos, habilidades e experiência.

## 🚀 Tecnologias e Stack

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** CSS-in-JS com variáveis globais (Custom Properties)
- **Fontes:** Syne (Display) e JetBrains Mono (Código)
- **Deploy:** Vercel

## 📁 Estrutura do Projeto

```text
src/
├── app/
│   ├── layout.tsx        # Layout principal e configuração de fontes SEO
│   └── page.tsx          # Página principal organizando os componentes Hero, Projects, Skills, Contact
├── components/
│   ├── ui/               # Componentes visuais básicos (ex: Navbar, Tag, SectionHeader)
│   └── sections/         # Seções principais e blocos inteiros do site
├── lib/
│   └── data.ts           # 📝 FONTE ÚNICA DE DADOS - Todo o conteúdo da página
└── styles/
    └── globals.css       # Tokens de design, cores, animações e reset padrão
```

## 🛠 Como executar o projeto localmente

1. Clone o repositório:
```bash
git clone https://github.com/lucas-ofonseca/portfolio-lucas.git
```

2. Entre na pasta do projeto:
```bash
cd portfolio-lucas
```

3. Instale as dependências:
```bash
npm install
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

5. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📝 Como gerenciar o conteúdo

Toda a infraestrutura de dados do site foi planejada para facilitar atualizações. A edição de dados pessoais, projetos e tecnologias está centralizada no arquivo `src/lib/data.ts`.
Para adicionar, por exemplo, um novo projeto na vitrine, basta atualizar o array `projects`:

```typescript
{
  index: "02",
  slug: "novo-projeto",
  name: "Sistema de Novo",
  nameHighlight: "Projeto",
  type: "Aplicação web · Projeto",
  description: "Descrição sucinta do sistema...",
  architecture: [
    { layer: "frontend", tags: ["React", "TypeScript"] },
    { layer: "backend", tags: ["Node.js"] }
  ],
  demoUrl: "https://seu-link-aqui.com",
  live: true,
}
```

## 🌐 Contato e Perfis

- **LinkedIn:** [in/lucas-ofonseca](https://www.linkedin.com/in/lucas-ofonseca/)
- **GitHub:** [lucas-ofonseca](https://github.com/lucas-ofonseca)
- **Localização:** Belo Horizonte, MG

---

Desenvolvido por **Lucas Fonseca**.
