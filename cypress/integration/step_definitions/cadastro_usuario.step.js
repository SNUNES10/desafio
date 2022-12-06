<reference types="cypress" />
import {Dado, Quando, Entao } from 'cypress-cucumber-preprocessor/steps'
import {Cadastro} from '../../pages/cadastro.page'
import { Cadastro } from '../../pages/components/cadastro.elements';


Dado(`que esteja na página Cadastro de Usuario`, () => {
  Cadastro.acessar_pagina_cadastro_usuario()
});

Quando(`solicito a exclusão do usuario desejado`, () => {
  Cadastro.excluir_cadastro()
});

Quando(`insiro os dados {string}, {string} e {string}`, (nome, email, senha) => {
  Cadastro.validar_campo_nome(nome)
  Cadastro.validar_campo_email(email)
  Cadastro.validar_campo_senha(senha)
});

Então(`deverá ser mostrado uma {string}`, (mensagem) => {
  Cadastro.validar_mensagem_validacao(mensagem)
});

Então(`o {string} nao devera estar na {string}`, (lista_usuario, id_usuario) => {
  Cadastro.validar_item_lista(lista_usuario, id_usuario)
});
