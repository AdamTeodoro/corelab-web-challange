
TECNOLOGIAS:
FRONT-END: REACTJS, AXIOS, JOI
BACK-END: NODEJS, EXPRESS, POSTGRESQL, SEQUELIZE, JOI, 

Para desenvolver anotei as tarefas no Microsoft to do e fui eliminando as tarefas conforme foram sendo concluídas.
Durante o desenvolvimento da API, utilizei o patern middleware para aplicar o conceito de DRY. Desenvolver essa aplicação
foi um desafio uma vez que o usuário não faz autenticação no sistema, mas pode criar, alterar e ler dados no banco, 
nesse caso, quando o usuário entra na aplicação, o sistema gera uma senha que é "embalada com bcrypt" gerando um hash padrão
 que é assinado com JWT, gerando uma autorização, e sendo por ela que o usuário pode alterar, escrever e ler os dados. Já no desenvolvimento das interfaces do usuário eu tive bastante dificuldade com a organização e comunicação dos componentes, especialmente os componentes de listagem, que 
não consegui reutiliza-los já que os botões variavam de acordo com as listas de dados, por exemplo: O BOTÃO DE EDITAR, SÓ DEVERIA APARECER
PARA EDITAR OS "MEUS VEÍCULOS", ENTÃO ESSE BOTÃO NÃO DEVERIA APARECER EM TODAS AS LISTAGENS DE VEÍCULOS, E O USUÁRIO PODE APAGAR SOMENTE O 
VEÍCULO QUE ELE MESMO CRIOU, EM OUTRAS PALAVRAS O USUÁRIO NÃO PODE APAGAR VEÍCULOS DOS OUTROS, MAS NA LISTAGEM DAS BUSCAS DE VEÍCULOS ELE PODE ELIMINAR UM 
VEÍCULO NA LISTA LOCAL DA MÁQUINA DELE.

MOBILE


![image](https://user-images.githubusercontent.com/66885644/178533901-84fd7a05-b7f5-45a7-9925-3c6e243e20e7.png)

![image](https://user-images.githubusercontent.com/66885644/178534000-c715b8e8-89f2-42dd-a709-c61de6eeb153.png)

![image](https://user-images.githubusercontent.com/66885644/178534201-722ba1f9-4abf-4c9f-b6de-0c7889562f39.png)

![image](https://user-images.githubusercontent.com/66885644/178534267-b336d09d-4411-4f18-ae02-bf1aa70cfafd.png)

![image](https://user-images.githubusercontent.com/66885644/178534563-4a94c65a-4a0b-4e05-8186-91f17951ff9e.png)


DESKTOP
![image](https://user-images.githubusercontent.com/66885644/178533773-c5671a9f-0905-48d5-801d-7b25cb3e2f38.png)

