# Aprendendo microsserviços

A ideia é criar um projeto simples para aplicar a arquitetura de microsserviços,
pelo menos aquela que eu acho que é microsserviços pelo o que tenho lido.

## A aplicação

Um sistema simples de lojinha, com usuário, produtos, estoque e categorias por
enquanto.

### Stack

Todas as tecnologias utilizadas foram escolhidas para eu aprender como funciona
todas juntas e como elas se comportam em um cenário real. Por enquanto todos os
serviços estarão na mesma linguagem somente por motivos de conforto. Assim que
finalizar irei refazer cada serviço cada um com uma linguagem diferente.

- Javascript
- Docker
- Mysql
- Apache Kafka

### Serviços

Será criado 4 serviços, um para cada domínio, + 1 de sessão para validar as
requisições entre serviços e +1 para ser o gateway.

- service.user
- service.product
- service.stock
- service.category
- service.session
- api.gateway
