#language:pt

Funcionalidade: Cadastro de Usuario

    Contexto: Iniciar na página
      Dado que esteja na página Cadastro de Usuario

    Esquema do Cenario: Validar Campos de Cadastro
      Quando insiro os dados "<Nome>" , "<Email>" e "<Senha>"
      Então deverá ser mostrado uma "<Mensagem>"
      Exemplos:
        | Nome                         | Email                           | Senha      | Mensagem                                   |
        |                              | email@exemplo.com               | 1234@678   | O campo Nome é obrigatorio.                |
        | João da Silva                |                                 | 1234@678   | O campo E-mail é obrigatorio.              |
        | João da Silva                | email@exemplo.com               |            | O campo Senha é obrigatorio.               |
        | João                         | email@exemplo.com               | 1234@678   | Por favor, insira um nome completo.        |
        | João da Silva                | email.exemplo.com               | 1234@678   | Por favor, insira um e-mail válido.        |
        | João da Silva                | email@exemplo.com               | 1234567    | A senha deve conter ao menos 8 caracteres. |
        | João da Silva                | email@exemplo.com               | 1234@678   | Usuários cadastrados                       |
        | Roberto Carlos da Silva      | robertinho.carlos@gmail.com     | 8903#@123  | Usuários cadastrados                       |

    Cenario: Excluir Cadastro
     Quando solicito a exclusão do usuario desejado
     Entao o "id_usuario" nao devera estar na "lista_usuario" 





# Dado ou Given == Pré requisito
# Quando ou When == Ações
# Então ou Then == validações das ações 