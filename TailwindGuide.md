# Guia Detalhado de Classes Tailwind CSS

Este documento explica as principais classes do Tailwind CSS que podem ser usadas no atributo `className` de elementos React, como no arquivo `App.tsx`. O Tailwind é um framework de CSS utilitário que permite estilizar componentes diretamente via classes. Aqui, focamos em tamanhos, posições, layouts e outras categorias essenciais. Todas as classes são baseadas na documentação oficial do Tailwind (versão 3.x).

## 1. Layout e Posicionamento (Layout & Positioning)
Essas classes controlam como os elementos são posicionados na página.

- **Display**: Controla o tipo de exibição do elemento.
  - `block`: Exibe como bloco (ocupa toda a largura).
  - `inline`: Exibe inline (não quebra linha).
  - `inline-block`: Combina inline e bloco.
  - `flex`: Ativa Flexbox para layouts flexíveis.
  - `grid`: Ativa CSS Grid para layouts em grade.
  - `hidden`: Oculta o elemento.

- **Flexbox (usado com `flex`)**: Para alinhamento e distribuição.
  - `flex-row`: Itens em linha horizontal (padrão).
  - `flex-col`: Itens em coluna vertical.
  - `justify-start`: Alinha itens ao início (esquerda para row).
  - `justify-center`: Centraliza itens horizontalmente.
  - `justify-end`: Alinha ao fim (direita para row).
  - `justify-between`: Espaça itens igualmente com espaço entre.
  - `justify-around`: Espaça itens com espaço ao redor.
  - `items-start`: Alinha itens ao topo (para colunas).
  - `items-center`: Centraliza itens verticalmente.
  - `items-end`: Alinha ao fundo.
  - `items-stretch`: Estica itens para preencher altura.

- **Posicionamento Absoluto/Relativo**:
  - `relative`: Posicionamento relativo ao fluxo normal.
  - `absolute`: Posicionamento absoluto (relativo ao ancestral posicionado).
  - `fixed`: Fixo na viewport.
  - `sticky`: Gruda ao rolar até um limite.
  - `top-0`, `right-0`, `bottom-0`, `left-0`: Define offsets (0 a 96, em unidades de 0.25rem).

- **Z-Index**: Controla a ordem de empilhamento.
  - `z-0` a `z-50`: Valores de 0 a 50.

## 2. Tamanhos (Sizing)
Classes para definir largura, altura e espaçamentos.

- **Largura (Width)**:
  - `w-0` a `w-full`: De 0rem a 100% (ex.: `w-4` = 1rem, `w-1/2` = 50%).
  - `w-screen`: Largura da viewport.
  - `w-min`, `w-max`: Largura mínima/máxima do conteúdo.

- **Altura (Height)**:
  - `h-0` a `h-full`: De 0rem a 100% (ex.: `h-4` = 1rem, `h-screen` = altura da viewport).
  - `h-auto`: Altura automática.

- **Espaçamentos (Padding/Margin)**:
  - Padding: `p-0` a `p-96` (todos os lados), `px-` (horizontal), `py-` (vertical), `pt-`, `pr-`, `pb-`, `pl-` (lados específicos).
  - Margin: `m-0` a `m-96` (negativos com `-`), `mx-`, `my-`, etc.
  - Unidades: Cada número representa 0.25rem (ex.: `p-4` = 1rem).

## 3. Tipografia (Typography)
Para texto e fontes.

- **Tamanho da Fonte**: `text-xs` (0.75rem) a `text-9xl` (8rem).
- **Peso da Fonte**: `font-light` (300) a `font-black` (900), `font-bold` (700).
- **Cor do Texto**: `text-black`, `text-white`, `text-gray-500`, etc. (tons de cinza, cores primárias).
- **Alinhamento**: `text-left`, `text-center`, `text-right`, `text-justify`.
- **Decoração**: `underline`, `line-through`, `no-underline`.

## 4. Cores e Fundo (Colors & Background)
- **Fundo**: `bg-white`, `bg-black`, `bg-gray-100`, etc. (tons de cinza, cores).
- **Bordas**: `border`, `border-2` (largura), `border-gray-300` (cor), `rounded` (bordas arredondadas, de `rounded-sm` a `rounded-full`).

## 5. Responsividade e Estados (Responsive & States)
- **Breakpoints**: Prefixos como `sm:`, `md:`, `lg:`, `xl:` para telas maiores (ex.: `md:flex` ativa flex em telas médias+).
- **Estados**: `hover:`, `focus:`, `active:` (ex.: `hover:bg-blue-500` muda fundo ao passar mouse).

## 6. Outros Úteis
- **Visibilidade**: `visible`, `invisible`.
- **Overflow**: `overflow-hidden`, `overflow-scroll`.
- **Cursor**: `cursor-pointer`, `cursor-not-allowed`.
- **Transições**: `transition`, `duration-300` (duração em ms).

## Exemplo de Uso no App.tsx
No seu `App.tsx`, você usou:
- `flex items-center justify-center`: Layout flexível centralizado.
- `h-screen`: Altura total da tela.
- `font-bold`: Texto em negrito.

Para mais detalhes, consulte a [documentação oficial do Tailwind](https://tailwindcss.com/docs). Este guia cobre o essencial para começar.
