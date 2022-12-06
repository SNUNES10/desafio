import Base from './_base.page'
import {Login as log, Cadastro, Lista_cadastro} from './components/cadastro.elements'

export class Cadastro extends Base {

    static acessar_pagina_cadastro_usuario(){
      cy.visit('/')
    }

    static logar_sauce_demo(user_type){
      super.typeValue(log.INP_USER, user_type)
      super.typeValue(log.INP_PASSWORD, 'secret_sauce')
      super.clickOnElement()
    }

    static validar_campo_nome(nome){
      super.waitElementAndSelectOption(Cadastro.INP_NOME, nome)
    }

    static validar_campo_email(email){
      super.waitElementAndSelectOption(Cadastro.INP_EMAIL, email)
    }

    static validar_campo_senha(senha){
      super.waitElementAndSelectOption(Cadastro.INP_SENHA, senha)
    }

    static validar_mensagem_validacao(value, mensagem){
      super.validateText(value, mensagem)
    }

    static excluir_cadastro(){
      super.clickOnElement(Lista_cadastro.BTN_EXCLUIR)
    }

    static validar_item_lista(lista_usuario, id_usuario){
     super.validarPrimeiroElementoDoArray(lista_usuario, id_usuario)
    }

}
