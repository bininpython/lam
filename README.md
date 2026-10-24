# Lamacon Showroom

Showroom digital da Lamacon Materiais de Construção, em Timóteo, Minas Gerais.

## Stack

- React 18 com TypeScript estrito
- Vite 6 para desenvolvimento e build
- Lucide React para iconografia
- CSS responsivo com tokens de marca

## Executar localmente

```bash
npm install
npm run dev
```

## Gerar build

```bash
npm run build
npm run preview
```

O resultado de produção é gerado em `dist/`. O site é um catálogo institucional sem checkout: apresenta o atendimento da loja, organiza pedidos de orçamento e informa sua localização. Categorias e fotos permanecem reservadas até o envio de conteúdo real.

Para habilitar o envio pelo WhatsApp, preencha `WHATSAPP_NUMBER` em `src/App.tsx` com DDI, DDD e número, somente dígitos.
