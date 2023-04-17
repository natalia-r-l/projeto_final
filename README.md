# Projeto Final - Sistema de reserva de ambientes para condomínios

O projeto consiste em dois CRUDS.
Um CRUD para cadastro de moradores do condominio e outro CRUD para cadastro de reservas para áreas comuns do condomínio

## Massas para o banco:
- É necessário o token para usar os endpoints

### Token:
- POST http://localhost:3000/moradores/authorization
- exemplo payload:
            {
                "documento": "77409003030",
                "senha": "234567"
            }

### CRUD MORADOR:
### Lista Moradores: 
- GET http://localhost:3000/moradores
- precisa do token no Bearer

### Get por Documento Morador: 
- GET http://localhost:3000/moradores/documento 
- precisa do token no Bearer
- exemplo: http://localhost:3000/moradores/77409003030

### Criar Morador:
- POST http://localhost:3000/moradores
- precisa do token no Bearer
- exemplo paylod: 
        {
            "nome": "Raul",
            "documento": "78698643078",
            "email": "raul@gmail",
            "senha": "111111",
            "unidade": 102,
            "bloco": "A",
            "idade": 30
        }

### Deletar Morador:
- DELETE http://localhost:3000/moradores/remove
- precisa do token no Bearer
- exemplo payload:
        {
            "documento": "78698643078"
        }

### Alterar Morador:
- PUT http://localhost:3000/moradores/atualizar
- precisa do token no Bearer
- exemplo payload:
        {
            "documento": "77409003030",
            "idade": 70
        }


### CRUD RESERVA:
### Lista Reserva: 
- http://localhost:3000/reservas
- precisa do token no Bearer

### Get por ID Reserva: 
- GET http://localhost:3000/reservas/id 
- precisa do token no Bearer
- exemplo: http://localhost:3000/reservas/64395158ab922a4dbd2f6dc4

### Criar Reserva:
- POST http://localhost:3000/reservas
- precisa do token no Bearer
- exemplo paylod: 
        {
            "lugar": "salao de jogos",
            "data": "10/02/2023",
            "morador": "Natalia",
            "email": "natalia@gmail",
            "unidade": 608,
            "bloco": "B",
            "taxa": 20
        }

### Deletar Reserva:
- DELETE http://localhost:3000/reservas/remove
- precisa do token no Bearer
- exemplo payload:
        {
	        "id": "64395158ab922a4dbd2f6dc4"
        }

### Alterar Reserva:
- PUT http://localhost:3000/reservas/atualizar
- precisa do token no Bearer
- exemplo payload:
        {
            "id": "643950bd18dd7370898a6622",
            "taxa": 120
        }
