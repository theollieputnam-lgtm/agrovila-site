# Agrovila — código próprio e apresentação ao cliente

Implementação da proposta visual 2 escolhida pelo usuário em 24/10/2026. Site institucional responsivo com consultas pelo WhatsApp. O cliente visualiza a apresentação antes de decidir sobre domínio próprio.

## Arquivos

- `dist/index.html`: conteúdo e estrutura da página.
- `dist/style.css`: layout responsivo, cores, estados e movimento reduzido.
- `dist/fonts.css`: tipografia local Barlow Condensed e DM Sans.
- `dist/site.js`: menu, encaminhamento ao WhatsApp, privacidade e efeitos progressivos.
- `dist/assets/`: logo original, imagens de campanha, fontes e ícones licenciados.
- `scripts/check_site.py`: verificação de arquivos, links, IDs e rótulos.
- `scripts/configure_domain.py`: configuração de URL canônica e sitemap após registro do domínio.

É HTML, CSS e JavaScript, sem dependência de construtor ou mensalidade de software para abrir o código. Hospedagem, domínio, email e manutenção são serviços separados. Não há painel administrativo, estoque ou checkout. A edição é feita nos arquivos por um profissional.

## Visualizar e publicar

Sirva a pasta `dist` em qualquer hospedagem estática. Para teste local, com Python instalado: `python -m http.server 8768 --directory dist`. Abra o endereço local informado pelo servidor. A versão hospedada no Sites mantém o acesso atual da conta; confirme o acesso do cliente antes de enviar. Não confundir esse link de apresentação com domínio público já conectado.

O arquivo `agrovila-publicacao.zip` contém o conteúdo publicável na raiz; não publicar a pasta de documentos ou arquivos de credenciais. Para Cloudflare Pages, é possível enviar esse ZIP por Direct Upload. Para manutenção contínua, pode-se criar um repositório na conta da Agrovila e conectar via Git; a pasta de publicação é `dist`, sem build de framework. O pacote `agrovila-codigo-e-guia.zip` contém o código e as instruções para entrega.

## Identidade e imagens

A imagem oficial é `assets/marca-oficial.jpeg`, idêntica ao arquivo fornecido. Nenhuma letra, animal, cor ou proporção foi redesenhada. O fundo branco do cabeçalho e do rodapé permite aplicá-la sem criar um bloco visual isolado. As fotos de campanha foram criadas com Image Gen e estão identificadas como ilustrativas; não representam clientes, equipe ou instalações reais. Substituir por fotos próprias autorizadas quando disponíveis. Fontes sob OFL e ícones Tabler sob MIT têm licenças junto aos arquivos.

## Conteúdo comercial

WhatsApp verificado: +55 35 99146-5090. Cidade: Poços de Caldas, MG. Pet, Agro e Jardim, mais de 30 anos, entregas na cidade/atendimento rural e consulta de compra programada foram baseados nas páginas fornecidas. Não inventar endereço, horários, marcas, preço, estoque, avaliações ou serviços veterinários. Endereço e horários continuam sendo confirmados pelo atendimento. Para uma presença local completa, a empresa deve fornecer esses dados e revisar o conteúdo antes de divulgar ao público.

## Manutenção

Guardar uma cópia do ZIP aprovado antes de alterações. Atualizar imagens e texto no código, testar a navegação e o WhatsApp e publicar novamente. A mensagem é montada no navegador; o visitante revisa e envia no WhatsApp. Não informar sucesso de pedido ou pagamento, pois essa confirmação acontece fora deste site.
