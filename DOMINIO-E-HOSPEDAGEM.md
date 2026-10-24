# Domínio próprio — somente depois da avaliação do cliente

Recomendação para o escopo atual: registrar um `.com.br` no Registro.br, em nome da Agrovila, e hospedar os arquivos estáticos no Cloudflare Pages em conta da empresa. O site não precisa comprar um domínio para ser apresentado. Não foi feita compra, criação de conta, alteração de DNS ou contratação.

## Nome sugerido

Primeira opção: `agrovilapocos.com.br`. Mantém a marca e situa o negócio. A consulta RDAP do Registro.br em 24/10/2026 retornou 404, sem registro encontrado, tanto para esse nome quanto para `agrovilapet.com.br`. Isso não reserva o nome nem garante que o cadastro aceitará o registro; confirme na busca oficial no momento da compra. A decisão final pertence à empresa.

## Passo a passo para a empresa

1. Acesse [Registro.br](https://registro.br/novo-dominio/) e pesquise o nome escolhido.
2. Cadastre o titular correto: de preferência o CNPJ da Agrovila e email controlado pela empresa. O prestador pode ser contato técnico, sem ficar como dono do domínio. Não envie senha ou documento em uma conversa de suporte.
3. Confira o valor e prazo exibidos no checkout, aceite os termos e faça o pagamento. O preço do domínio é separado da hospedagem; confira também a renovação.
4. Crie a hospedagem em uma conta controlada pela Agrovila. No Cloudflare Pages, use Direct Upload para o ZIP publicável ou Git integration para atualizações por repositório. Projetos Direct Upload e Git têm diferenças de migração; escolha antes da publicação principal.
5. Publique e teste primeiro o endereço temporário gerado pela hospedagem. O site continua funcionando enquanto se decide o domínio.
6. No projeto Pages, adicione o nome em **Custom domains**. Para o domínio raiz, a documentação orienta adicionar a zona à conta Cloudflare e usar seus nameservers; para subdomínio, pode ser usado o CNAME indicado. Copie os valores específicos gerados no painel — não invente IPs ou registros.
7. Se já houver email no domínio, preserve MX, SPF, DKIM e DMARC antes de mudar nameservers. Domínio e hospedagem de site não criam caixa de email automaticamente.
8. Aguarde a ativação do DNS e do certificado HTTPS no painel. Configure a versão preferencial (com ou sem www) e redirecione a outra. Não prometa prazo fixo de propagação.
9. Execute `python scripts/configure_domain.py https://DOMINIO-REGISTRADO` antes da publicação definitiva do pacote. Isso atualiza canonical, Open Graph, sitemap e robots. Nunca use um domínio apenas sugerido como se já estivesse registrado.
10. Teste HTTPS, versão www, links, imagens, 404 e WhatsApp no domínio real. Só então informe domínio conectado.

## Custos e entrega

O cliente paga o registro/renovação e serviços escolhidos. Cloudflare Pages tem opções gratuitas, sujeitas às condições e limites vigentes; recursos extras podem ter custos. A entrega do código não transfere a conta Sites automaticamente nem obriga a manter a hospedagem nela. A empresa deve receber domínio, hospedagem, código e contatos de recuperação sob seu controle.

Fontes oficiais consultadas em 24/10/2026:

- [Registro e titularidade](https://registro.br/ajuda/tutoriais-administrativos/)
- [Registro.br](https://registro.br/novo-dominio/)
- [Cloudflare Pages — Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/)
- [Cloudflare Pages — integração Git](https://developers.cloudflare.com/pages/get-started/git-integration/)
- [Cloudflare Pages — domínio próprio](https://developers.cloudflare.com/pages/configuration/custom-domains/)
