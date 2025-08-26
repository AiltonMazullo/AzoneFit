# AzoneFit - Aplicação de Formulário Interativo

> Um formulário multi-etapas moderno e responsivo construído com React e Vite, com animações suaves e tipos de input dinâmicos.

## 🚀 Funcionalidades

- **Fluxo de Formulário Multi-etapas**: 9 perguntas interativas com transições suaves
- **Tipos de Input Dinâmicos**: Texto, email, textarea, radio buttons e checkboxes
- **Design Responsivo**: Otimizado para desktop e dispositivos móveis
- **Animações Suaves**: Transições CSS com efeitos de slide entre perguntas
- **Acompanhamento de Progresso**: Barra de progresso visual no topo
- **Validação de Formulário**: Validação em tempo real para todos os tipos de input
- **Interface Moderna**: Design limpo e profissional com estilização consistente
- **Tela de Agradecimento**: Tela de conclusão elegante com transição

## 🛠️ Stack Tecnológica

- **React 18** - React moderno com hooks
- **Vite** - Ferramenta de build rápida e servidor de desenvolvimento
- **CSS Modules** - Estilização com escopo e variáveis CSS
- **JavaScript ES6+** - Recursos modernos do JavaScript

## 📦 Instalação

```bash
# Clone o repositório
git clone <repository-url>

# Navegue para o diretório do projeto
cd azonefit-project

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🎯 Como Usar

1. **Inicie a aplicação**: Execute `npm run dev`
2. **Navegue pelas perguntas**: Use os inputs do formulário ou as setas de navegação
3. **Complete o formulário**: Responda todas as 9 perguntas
4. **Visualize a conclusão**: Veja a mensagem "Thank you!"

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── Form/
│   │   ├── FormContainer/     # Componente principal do formulário
│   │   └── ProgressBar/       # Indicador de progresso
│   └── UI/                    # Componentes UI reutilizáveis
├── data/
│   └── questions.js           # Configuração das perguntas do formulário
├── hooks/
│   └── useFormState.js        # Gerenciamento de estado do formulário
└── index.css                  # Estilos globais e variáveis CSS
```

## ✨ Componentes Principais

### FormContainer
Componente principal que gerencia a lógica do formulário, animações e renderização das perguntas.

### ProgressBar
Indicador visual de progresso mostrando a porcentagem de conclusão.

### useFormState Hook
Hook customizado que gerencia o estado do formulário, navegação e armazenamento de respostas.

## 🎨 Características de Design

- **Variáveis CSS**: Esquema de cores consistente e tematização
- **Transições Suaves**: Animações de slide de 300ms entre perguntas
- **Layout Responsivo**: Abordagem mobile-first com breakpoints
- **Elementos Interativos**: Estados de hover e feedback visual
- **Tipografia**: Hierarquia de fontes limpa e legível

## 🔧 Configuração

As perguntas podem ser facilmente modificadas em `src/data/questions.js`:

```javascript
{
  id: 1,
  type: "text", // text, email, textarea, radio, checkbox
  question: "Sua pergunta aqui?",
  placeholder: "Texto do placeholder...",
  required: true
}
```

## 📱 Design Responsivo

- **Desktop**: Layout de largura total com espaçamento otimizado
- **Mobile**: Layout compacto com interações touch-friendly
- **Tablet**: Design adaptativo para telas médias

## 🚀 Performance

- **Carregamento Rápido**: Processo de build otimizado do Vite
- **Bundle Mínimo**: Tree-shaking e code splitting
- **Animações Suaves**: Transições CSS aceleradas por hardware
- **Renderização Eficiente**: Otimização do DOM virtual do React

## 📄 Licença

Este projeto foi desenvolvido para a AzoneFit.

---

**Construído com ❤️ usando React + Vite**