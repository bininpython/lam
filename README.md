# Lamacon Showroom

Showroom digital da Lamacon Materiais de Construção, em Timóteo, Minas Gerais.

## Stack

- React 18 com TypeScript estrito
- Vite 6 para desenvolvimento e build
- Lucide React para iconografia
- CSS responsivo com tokens de marca (`src/styles.css`, organizado por seção)

## Seções do site

1. **Início** — chamada principal, ações e ilustração arquitetônica
2. **Faixa de confiança** — públicos atendidos e localização da loja
3. **Atendimento** — casa & reforma, construtores e profissionais
4. **Etapas da obra** — fundação, hidráulica, elétrica e acabamento
5. **Catálogo** — espaço reservado do showroom digital
6. **Orçamento** — lista de materiais salva no navegador e mensagem pronta para o WhatsApp
7. **Dúvidas frequentes**
8. **A loja** — endereço, mapa incorporado e rota no Google Maps
9. **Chamada final e rodapé**

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
