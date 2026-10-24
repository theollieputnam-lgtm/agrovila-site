# Revisão da proposta 2 — 24/10/2026

final result: passed

Escopo: implementação institucional da direção visual selecionada, preservando logo original e funções de atendimento existentes. Não é uma cópia pixel a pixel do raster gerado. A referência tem 946 × 1664 px; para comparação da abertura foi normalizada a 1440 px de largura, com recorte de 1000 px. Captura de implementação: viewport CSS 1440 × 1000, screenshot 1425 × 1000 incluindo reserva lateral de scrollbar. A diferença de 15 px da barra não foi classificada como erro visual.

## Evidências comparadas

- Referência: `exec-d5de1dd7-7dbb-402a-8b67-bcf9141a6483.png`.
- Primeira comparação: `../redesign/comparacao-hero.png`.
- Comparação após correção de escala: `../redesign/comparacao-final.png`.
- Página completa: `../redesign/pagina-completa.png`.
- Celular: `../redesign/05-mobile-390.png` e `09-mobile-320.png`.
- Tablet após correção: `../redesign/10-tablet.png`.
- Rodapé: `../redesign/06-footer-mobile.png` e `07-footer-desktop.png`; esta última antecede o ajuste pequeno da seta para alinhamento horizontal.

As imagens foram abertas e inspecionadas. A abertura foi comparada no mesmo arquivo lado a lado. O conjunto da página e os recortes de rodapé/mobile foram inspecionados em separado para legibilidade.

## Falhas encontradas e corrigidas

1. P2: escala da chamada menor que a referência na primeira implementação. Aumentados peso e corpo do título, descrição e CTA de desktop; nova captura 08-final-desktop e comparação-final confirmam hierarquia mais próxima.
2. P2: botão de menu encolhia em 320 px. Definidos largura mínima 44 px e ícone 24 px; reduzidos logo e espaçamento apenas nesse breakpoint. Nova leitura DOM confirma essas medidas e ausência de overflow.
3. P2: links de cabeçalho quebravam no tablet 768 px. Menu compacto aplicado até 900 px; captura 10-tablet confirma correção.
4. P2: texto de rodapé unia palavras quando a quebra de linha era ocultada no celular. Inseridos espaços literais. Link de retorno teve flex horizontal restabelecido.

## Superfícies obrigatórias

- Tipografia: Barlow Condensed 800 nos títulos e DM Sans no texto, carregadas localmente; verificado estado loaded. Título em linha no desktop e quebra natural em celular, sem truncamento. A família reproduz a direção condensada, com diferenças ópticas do mock registradas como aceitáveis.
- Espaçamento/layout: abertura central, tríptico, três linhas editoriais por departamento e rodapé agrupado correspondem à estrutura escolhida. As seções de como pedir, história, contato e dúvidas mantêm a jornada funcional solicitada no escopo original.
- Cores: floresta, creme e lima; cabeçalho/rodapé brancos integram o campo branco do JPEG original sem cortar ou regenerar logo. Essa adaptação é imposta pela preservação da marca.
- Imagens: três fotos de campanha geradas individualmente, coesas e responsivas. Animais, mãos e recortes inspecionados. Nenhuma fachada fictícia, produto inventado ou imagem de equipe foi publicada. Ícones Tabler, sem desenhos aproximados de código. Os painéis usam fundo escuro localizado nas legendas para leitura, em vez de depender do contraste variável da foto.
- Conteúdo: títulos curtos, informações comerciais confirmadas, consulta real no WhatsApp. Não há preços, checkout, avaliações ou resultados fictícios. Ano corrigido para 2026, em vez do 2024 existente no mock.

## Funcionalidade e limites

Menu abre e fecha; Escape fecha menu e diálogo. Privacidade abre em diálogo nativo. Formulário com assunto Entrega e mensagem com acentos abriu o WhatsApp +55 35 99146-5090 com texto correto; nenhuma mensagem foi enviada. Script e estrutura aprovados. Ausência de overflow foi verificada em 320, 390, 768 e 1440 px. CSS respeita prefers-reduced-motion; movimento não é requisito para conteúdo aparecer. Não foi feita auditoria WCAG integral nem medição de Core Web Vitals em usuários reais.

## Refinamentos não impeditivos

P3: ornamentos vegetais e sublinhado pictórico do mock foram omitidos em favor da fotografia e hierarquia; não há substituição por arte CSS. A página tem mais conteúdo funcional que a imagem inicial porque preserva informações necessárias ao atendimento. Essas diferenças não impedem a jornada nem constituem promessa de reprodução pixel a pixel.

## Checklist de entrega

- Logo binariamente idêntico ao original: confirmado.
- 34 links e 45 referências de assets verificados, sem destinos internos ausentes.
- Sintaxe JavaScript aprovada; fonte e ícones com licenças locais.
- Script de domínio testado em cópia temporária, inclusive execução repetida sem duplicar canonical.
- Domínio e DNS não comprados/configurados: cliente decide depois da apresentação.

## Correção posterior de enquadramento

O usuário identificou corte de cabeças nas fotos largas à direita dos departamentos. O recorte cover em uma faixa horizontal foi removido; imagens agora usam contain, proporção original, altura de 190 px e borda direita alinhada em coluna dedicada. A foto vertical Pet permanece vertical: não foi esticada para preencher um quadrado. Evidência nova: ../redesign/11-imagens-sem-corte.png. Esta correção substitui a aceitação anterior desses recortes.

## Revisão solicitada: eliminar repetição de artes

Substituídas as três linhas com miniatura e foto duplicada por três blocos editoriais, cada um com uma arte inédita, criada no formato 3:2 do componente. Pet: cão brincando; Agro: grãos em saco de juta; Jardim: vasos e plantas. Removida também a repetição da foto de plantio na história. A nova composição substitui explicitamente o detalhe do mock anterior por solicitação do usuário.

Evidências: ../redesign/12-artes-novas-desktop.png e 13-artes-novas-mobile.png. Inspeção em desktop, 390 e 320 px. Zero elementos department-thumb/department-scene; exatamente três imagens na seção e seis fontes fotográficas distintas no main, cada uma usada uma vez. Imagens contidas no aspecto 3:2, sem distorção nem corte do sujeito. Bordas, títulos e CTAs alinhados. Sem overflow em 320 e 390 px. Marca oficial não modificada. final result: passed para o escopo desta revisão.

## Correção da abertura e revisão da base

O print do usuário revelou outra instância do problema na abertura. A foto Pet original era vertical (1024×1536); a caixa horizontal fixa com cover cortava o topo em telas largas. Essa falha não havia sido resolvida pela revisão anterior de outra seção. A foto foi recomposta em formato quadrado com espaço ao redor dos animais e exportada como hero-pet-quadrado-{480,960}.webp. Os três blocos agora exibem os arquivos completos na proporção 1:1, com contain e altura natural. As legendas ficam fora das fotografias; zoom de hover que recortava a imagem foi removido. Equalizado espaçamento por gap em vez de bordas de largura desigual.

Evidências atuais: ../redesign/14-hero-sem-corte-1920.png e 15-hero-sem-corte-mobile.png. Inspeção visual em 1920 e 390 px; leitura DOM em 320, 1440 e 1920. Proporção de todas as caixas igual à dos arquivos (1), sem overflow; legendas de desktop com início na mesma altura (415 px na sessão 1440). Cabeças, orelhas, patas e mãos preservadas conforme os originais; sem imagens repetidas. final result: passed para esta correção.

Base de conhecimento: adicionada referência enquadramento-e-revisao-visual.md e linkada pela skill, incluindo diagnóstico por slot, proporção, ponto focal, hover e revisão do conjunto. Não constitui garantia universal de ausência de defeitos.
