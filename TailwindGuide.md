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

## 3. Espaçamentos (Spacing)
Classes para padding, margin e gap (espaçamento entre itens).

- **Padding**: `p-0` a `p-96` (todos os lados), `px-` (horizontal), `py-` (vertical), `pt-`, `pr-`, `pb-`, `pl-` (lados específicos). Ex.: `p-4` = 1rem em todos os lados.
- **Margin**: `m-0` a `m-96` (negativos com `-`), `mx-`, `my-`, `mt-`, `mr-`, `mb-`, `ml-`. Ex.: `m-4` = -1rem.
- **Gap**: Para Flexbox/Grid: `gap-0` a `gap-96` (espaçamento entre filhos). Ex.: `gap-2` = 0.5rem.

## 4. Container
O `container` é uma classe utilitária para centralizar conteúdo responsivo com larguras máximas em breakpoints.

- `container`: Define largura máxima baseada em breakpoints (ex.: `max-w-sm` em telas pequenas, `max-w-2xl` em grandes). Adicione `mx-auto` para centralizar.
- Exemplos: `container mx-auto px-4` (centralizado com padding lateral).

## 5. Tipografia (Typography)
Para texto e fontes.

- **Tamanho da Fonte**: `text-xs` (0.75rem) a `text-9xl` (8rem).
- **Peso da Fonte**: `font-light` (300) a `font-black` (900), `font-bold` (700).
- **Cor do Texto**: `text-black`, `text-white`, `text-gray-500`, etc. (tons de cinza, cores primárias).
- **Alinhamento**: `text-left`, `text-center`, `text-right`, `text-justify`.
- **Decoração**: `underline`, `line-through`, `no-underline`.

## 6. Cores e Fundo (Colors & Background)
- **Fundo**: `bg-white`, `bg-black`, `bg-gray-100`, etc. (tons de cinza, cores).
- **Bordas**: `border`, `border-2` (largura), `border-gray-300` (cor), `rounded` (bordas arredondadas, de `rounded-sm` a `rounded-full`).

## 7. Bordas (Borders)
Classes para bordas, cantos arredondados e larguras.

- **Largura**: `border`, `border-0`, `border-2`, `border-4`, etc.
- **Cor**: `border-gray-300`, `border-primary`, etc.
- **Estilo**: `border-solid`, `border-dashed`, `border-dotted`.
- **Cantos**: `rounded`, `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-full` (para bordas arredondadas). `rounded-tl`, `rounded-br`, etc. (cantos específicos).

## 8. Sombras (Shadows)
Para adicionar profundidade visual.

- `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`: Tamanhos de sombra.
- `shadow-inner`: Sombra interna.
- `shadow-none`: Sem sombra.

## 9. Efeitos (Effects)
Transições, opacidade e outros efeitos.

- **Transições**: `transition`, `transition-all`, `duration-300` (duração), `ease-in`, `ease-out`.
- **Opacidade**: `opacity-0` a `opacity-100` (0% a 100%).
- **Transformações**: `scale-95`, `rotate-12`, `translate-x-4`.

## 10. Responsividade e Estados (Responsive & States)
- **Breakpoints**: Prefixos como `sm:`, `md:`, `lg:`, `xl:` para telas maiores (ex.: `md:flex` ativa flex em telas médias+).
- **Estados**: `hover:`, `focus:`, `active:` (ex.: `hover:bg-blue-500` muda fundo ao passar mouse).

## 11. Outros Úteis
- **Cursor**: `cursor-pointer`, `cursor-not-allowed`.
- **Overflow**: `overflow-hidden`, `overflow-scroll`, `overflow-auto`.
- **Visibilidade**: `visible`, `invisible`, `collapse`.

## 12. Componentes shadcn/ui
shadcn/ui é um conjunto de componentes reutilizáveis construídos com Tailwind CSS. Aqui, documentamos as classes e variantes dos componentes principais, como o Button.

### Button
O componente Button usa `class-variance-authority` (cva) para gerenciar variantes. Ele combina classes base com variantes para `variant` e `size`.

- **Classes Base**: `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`

- **Variantes de Variant**:
  - `default`: `bg-primary text-primary-foreground hover:bg-primary/90` (fundo primário, texto claro, hover mais escuro).
  - `destructive`: `bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60` (para ações destrutivas, vermelho).
  - `outline`: `border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50` (borda com fundo transparente).
  - `secondary`: `bg-secondary text-secondary-foreground hover:bg-secondary/80` (fundo secundário).
  - `ghost`: `hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50` (sem fundo, hover sutil).
  - `link`: `text-primary underline-offset-4 hover:underline` (estilo de link).

- **Variantes de Size**:
  - `default`: `h-9 px-4 py-2 has-[>svg]:px-3` (altura 2.25rem, padding padrão).
  - `sm`: `h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5` (menor, altura 2rem).
  - `lg`: `h-10 rounded-md px-6 has-[>svg]:px-4` (maior, altura 2.5rem).
  - `icon`: `size-9` (quadrado para ícones, 2.25rem).
  - `icon-sm`: `size-8` (menor ícone, 2rem).
  - `icon-lg`: `size-10` (maior ícone, 2.5rem).

- **Uso**: `<Button variant="default" size="lg">Clique</Button>`. Personalize com `className` adicional.

- **Variante Animada (GetStartedButton)**: Extensão do Button com animação hover. Props: `iconSize` (padrão 16), `iconStrokeWidth` (padrão 2), `children` (padrão "Get Started").
  - **Classes Adicionais no Button**: `group relative overflow-hidden`.
  - **Span do Texto**: `mr-8 transition-opacity duration-300 group-hover:opacity-0` (texto some no hover).
  - **Span do Ícone**: `absolute right-1 top-1 bottom-1 rounded-sm z-10 flex items-center justify-center w-1/4 transition-all duration-300 bg-primary-foreground/15 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95` (ícone expande no hover, escala no active).
  - **Uso**: `<GetStartedButton>Texto</GetStartedButton>`. Anima com ícone ChevronRight.

Para outros componentes shadcn/ui (como NavigationMenu), consulte a documentação oficial. Eles seguem padrões similares com Tailwind.

## Exemplo de Uso no App.tsx
No seu `App.tsx`, você usou:
- `flex items-center justify-center`: Layout flexível centralizado.
- `h-screen`: Altura total da tela.
- `font-bold`: Texto em negrito.

Para mais detalhes, consulte a [documentação oficial do Tailwind](https://tailwindcss.com/docs). Este guia cobre o essencial para começar.
