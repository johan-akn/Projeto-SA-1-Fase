// INPUTS CADASTRO
let elementoInptEmail = document.getElementById('inptEmail')
let elementoInptCNPJ = document.getElementById('inptCNPJ')
let elementoInptEndereco = document.getElementById('inptEndereco')
let elementoInptSenha = document.getElementById('inptSenha')
let elementoInptSenhaConfirm = document.getElementById('inptSenhaConfirm')

//INPUT LOGIN
let elementoInptEmailLogin = document.getElementById('inptEmailLogin')
let elementoInptSenhaLogin = document.getElementById('inptSenhaLogin')

let elementoInptEmailRec = document.getElementById('inptEmailRec')
let elementoInptSenhaRec = document.getElementById('inptSenhaRec')
let elementoInptSenhaConfirmRec = document.getElementById('inptSenhaConfirmRec')

let elementoAvisoErro = document.getElementById('avisoErro')
let avisoMudanca = document.getElementById('avisoMudanca')


let labelEstado = document.getElementById('labelEstado')
let labelEstado2 = document.getElementById('labelEstado2')
let labelEstado3 = document.getElementById('labelEstado3')
let labelEstado4= document.getElementById('labelEstado4')
let labelEstado5 = document.getElementById('labelEstado5')


let elementoInptEmailPerfil = document.getElementById('inptEmailPerfil')
let elementoInptSenhaPerfil = document.getElementById('inptSenhaPerfil')
let elementoInptCNPJPerfil = document.getElementById('inptCNPJPerfil')
let elementoInptEnderecoPerfil = document.getElementById('inptEnderecoPerfil')

let elementoInptPesquisa = document.getElementById('inptPesquisa')

let botaoEditar = document.getElementById('botaoEditar')
let botaoEnviar = document.getElementById('botaoEnviar')

//INPUT ENDERECO CARD PRODUTO
let elementoInputEnderecoProduto = document.getElementById('inptEnderecoProduto')


let vetorEmails = []
let vetorSenhas = []
let vetorCNPJ = []
let vetorEnderecos = []

let elementoListaEmail = document.getElementById('listaEmail')
let elementoListaSenha = document.getElementById('listaSenha')

// let vetorProdutos = ['Amoxilina', 'Ibuprofeno', 'Cetoconazol', 'Dipirona', 'Clonazepam']

let inptEnderecoProduto = document.getElementById('inptEnderecoProduto')

let posicaoUser


// MOSTRAR PRODUTOS

function BotaoListarProdutos(){

  window.location.href="/FarmaFind - Resultado/resultado.html"
}

// MOSTRAR FARMACIAS
function BotaoListarFarmacias(){

  window.location.href="/FarmaFind - Listar/listar.html"
}


//CADASTRO
function BotaoCadastro(){

  vetorEmails = JSON.parse(localStorage.getItem('EmailsSalvos'))
  vetorSenhas = JSON.parse(localStorage.getItem('PassSalvos'))
  vetorCNPJ = JSON.parse(localStorage.getItem('CNPJSalvos'))
  vetorEnderecos = JSON.parse(localStorage.getItem('EnderecosSalvos'))


  if(elementoInptEmail.value != '' && elementoInptCNPJ.value != '' && elementoInptEndereco.value != '' && elementoInptSenha.value != '' && elementoInptSenhaConfirm.value != ''){

  if(elementoInptSenha.value == elementoInptSenhaConfirm.value){

        if(vetorEmails == null){

             vetorEmails = []
             vetorSenhas = []
             vetorCNPJ = []
             vetorEnderecos = []

             ConfirmaCadastro()
             

        }
        else{
           ConfirmaCadastro()
        }
  }

  else{
    elementoAvisoErro.innerHTML = 'As senhas são diferentes!'
  }
}
  else{
    elementoAvisoErro.innerHTML = 'Você deve preencher todos os dados!'
  }
}



//LOGIN
function BotaoLogin(){

  vetorEmails = JSON.parse(localStorage.getItem('EmailsSalvos'))
  vetorSenhas = JSON.parse(localStorage.getItem('PassSalvos'))

  posicaoUser = vetorEmails.indexOf(elementoInptEmailLogin.value) 

  if(posicaoUser != -1){

      if(elementoInptEmailLogin.value == vetorEmails[posicaoUser] && elementoInptSenhaLogin.value == vetorSenhas[posicaoUser]){

          alert('Login bem-sucedido!')

          
          userLogado = vetorEmails[posicaoUser]
          localStorage.setItem('UserLogado', JSON.stringify(userLogado))
          window.location.href = '/FarmaFind - Menu/menu.html'
      }
      else{

          elementoAvisoErro.innerHTML = 'Os dados não conferem!'
          limpar()
      }

      
  }else{
      
    elementoAvisoErro.innerHTML = 'Usuário inexistente!'
      
  }

}


//ALTERAR SENHA
function AlterarSenha(){

  vetorEmails = JSON.parse(localStorage.getItem('EmailsSalvos'))
  vetorSenhas = JSON.parse(localStorage.getItem('PassSalvos'))

  posicaoUser = vetorEmails.indexOf(elementoInptEmailRec.value) 

  if(elementoInptEmailRec.value == vetorEmails[posicaoUser]){

    if(elementoInptSenhaRec.value != '' && elementoInptSenhaConfirmRec.value != ''){

      if(elementoInptSenhaRec.value == elementoInptSenhaConfirmRec.value){
        
        vetorSenhas[posicaoUser] = elementoInptSenhaRec.value
        localStorage.setItem('PassSalvos', JSON.stringify(vetorSenhas))
        alert('Senha alterada com sucesso!')
        
      }
      else{
        
        elementoAvisoErro.innerHTML ='As senhas são diferentes!'
      }
    }
    else{
      elementoAvisoErro.innerHTML ='Senha inválida'

    }

  }
  else{

    elementoAvisoErro.innerHTML ='Usuário não encontrado'
  }
}
//ALTERAR SENHA



//PERFIL//
function EditarPerfil(){

  if(elementoInptEmailPerfil.disabled == true){

    elementoInptEmailPerfil.disabled = false
    elementoInptSenhaPerfil.disabled = false
    elementoInptCNPJPerfil.disabled = false
    elementoInptEnderecoPerfil.disabled = false


    botaoEditar.innerText = ('Cancelar')
    botaoEnviar.disabled = false


  }
  else if(elementoInptEmailPerfil.disabled == false){

    elementoInptEmailPerfil.disabled = true
    elementoInptSenhaPerfil.disabled = true
    elementoInptCNPJPerfil.disabled = true
    elementoInptEnderecoPerfil.disabled = true
    botaoEditar.innerText = ('Editar')
    botaoEnviar.disabled = true

  }

}

function EnviarEdicao(){

  if(elementoInptEmailPerfil.disabled == false){


    userLogado = JSON.parse(localStorage.getItem('UserLogado'))

    vetorEmails = JSON.parse(localStorage.getItem('EmailsSalvos'))
    vetorSenhas = JSON.parse(localStorage.getItem('PassSalvos'))
    vetorCNPJ = JSON.parse(localStorage.getItem('CNPJSalvos'))
    vetorEnderecos = JSON.parse(localStorage.getItem('EnderecosSalvos'))
    
    posicaoUser = vetorEmails.indexOf(userLogado)
    
    vetorEmails[posicaoUser] = elementoInptEmailPerfil.value
    vetorSenhas[posicaoUser] = elementoInptSenhaPerfil.value
    vetorCNPJ[posicaoUser] = elementoInptCNPJPerfil.value
    vetorEnderecos[posicaoUser] = elementoInptEnderecoPerfil.value

    
    localStorage.setItem('EmailsSalvos', JSON.stringify(vetorEmails))
    localStorage.setItem('PassSalvos', JSON.stringify(vetorSenhas))
    localStorage.setItem('CNPJSalvos', JSON.stringify(vetorCNPJ))
    localStorage.setItem('EnderecosSalvos', JSON.stringify(vetorEnderecos))


    alert('Dados alterados com sucesso!')
    
    userLogado = vetorEmails[posicaoUser]
    localStorage.setItem('UserLogado', JSON.stringify(userLogado))

  }
  
   
}



function PuxarDados(){

  userLogado = JSON.parse(localStorage.getItem('UserLogado'))
  
  vetorEmails = JSON.parse(localStorage.getItem('EmailsSalvos'))
  vetorSenhas = JSON.parse(localStorage.getItem('PassSalvos'))
  vetorCNPJ = JSON.parse(localStorage.getItem('CNPJSalvos'))
  vetorEnderecos = JSON.parse(localStorage.getItem('EnderecosSalvos'))
  

  posicaoUser = vetorEmails.indexOf(userLogado)
  
  if (posicaoUser != -1) {
    
    
    elementoInptEmailPerfil.value = vetorEmails[posicaoUser];
    elementoInptSenhaPerfil.value = vetorSenhas[posicaoUser];
    elementoInptCNPJPerfil.value = vetorCNPJ[posicaoUser];
    elementoInptEnderecoPerfil.value = vetorEnderecos[posicaoUser];
  }
}

function BotaoExcluir(){

  window.location.href="/FarmaFind - Excluir/excluir.html"
}
//PERFIL//



function ConfirmaCadastro(){

  vetorEmails.push(elementoInptEmail.value)
  vetorSenhas.push(elementoInptSenha.value)
  vetorCNPJ.push(elementoInptCNPJ.value)
  vetorEnderecos.push(elementoInptEndereco.value)

  localStorage.setItem('EmailsSalvos', JSON.stringify(vetorEmails))
  localStorage.setItem('PassSalvos', JSON.stringify(vetorSenhas))
  localStorage.setItem('CNPJSalvos', JSON.stringify(vetorCNPJ))
  localStorage.setItem('EnderecosSalvos', JSON.stringify(vetorEnderecos))
  
  alert('Cadastro realizado com sucesso!')
   window.location.href='/FarmaFind - Login/login-sa.html'
}


function MostrarSenha(){

    if(elementoInptSenha.type == 'password' && elementoInptSenhaConfirm.type == 'password'){

        elementoInptSenha.type = 'text'
        elementoInptSenhaConfirm.type = 'text'
  }
  else{

    elementoInptSenha.type = 'password'
    elementoInptSenhaConfirm.type = 'password'
  }}

  function limpar(){
    elementoInptSenhaLogin.value = ''
}


function BotaoDisponivel(){

    avisoMudanca.innerHTML = 'Produto editado: Disponível'

  
}

function Botaoindisponivel(){

  avisoMudanca.innerHTML = 'Produto editado: Indisponível'
}

function ExcluirConta(){

  posicaoUser = vetorEmails.indexOf(elementoInptEmail.value)
  
  if (posicaoUser != -1) {

    if(elementoInptEmail.value == vetorEmails[posicaoUser] && elementoInptSenha.value == vetorSenhas[posicaoUser]){

      
      vetorEmails.splice(posicaoUser, 1)
      vetorCNPJ.splice(posicaoUser, 1)
      vetorEnderecos.splice(posicaoUser, 1)
      vetorSenhas.splice(posicaoUser, 1)
      userLogado = null

      
      localStorage.setItem('EmailsSalvos', JSON.stringify(vetorEmails))
      localStorage.setItem('PassSalvos', JSON.stringify(vetorSenhas))
      localStorage.setItem('CNPJSalvos', JSON.stringify(vetorCNPJ))
      localStorage.setItem('EnderecosSalvos', JSON.stringify(vetorEnderecos))
      localStorage.setItem('UserLogado', JSON.stringify(userLogado))

  
    }else{

    elementoAvisoErro.innerHTML ='Os dados não conferem'

    }
      
  }else{

    elementoAvisoErro.innerHTML ='Usuário não encontrado'
  }


}

// LOGIN TELA INICIAL

function LoginInicio(){

  window.location.href="/FarmaFind - Login/login-sa.html"

}

// CADASTRO TELA INICIAL

function CadastroInicio(){

  window.location.href="/FarmaFind - Cadastro/cadastro-sa.html"

}


function ListaDados(){

  vetorEmails = JSON.parse(localStorage.getItem('EmailsSalvos'))
  vetorEnderecos = JSON.parse(localStorage.getItem('EnderecosSalvos'))

  // tamanhoEmails = vetorEmails.length
  // tamanhoSenhas = vetorSenhas.length

 
  // for(i=0; i<tamanhoEmails; i++){

  //   listaEmails += vetorEmails[i] + '\n'

  // }

  
  elementoListaEmail.innerHTML = vetorEmails
  elementoListaSenha.innerHTML = vetorEnderecos

}

function BotaoDisp(){

    valorEstado = 'Disponível'
    localStorage.setItem('valorEstado', JSON.stringify(valorEstado))
  
}

function BotaoIndisp(){

    valorEstado = 'Indisponível'
    localStorage.setItem('valorEstado', JSON.stringify(valorEstado))
}

function BotaoDisp2(){

  valorEstado2 = 'Disponível'
  localStorage.setItem('valorEstado2', JSON.stringify(valorEstado2))

}

function BotaoIndisp2(){

  valorEstado2 = 'Indisponível'
  localStorage.setItem('valorEstado2', JSON.stringify(valorEstado2))
}


function BotaoDisp3(){

  valorEstado3 = 'Disponível'
  localStorage.setItem('valorEstado3', JSON.stringify(valorEstado3))

}

function BotaoIndisp3(){

  valorEstado3 = 'Indisponível'
  localStorage.setItem('valorEstado3', JSON.stringify(valorEstado3))
}


function BotaoDisp4(){

  valorEstado4 = 'Disponível'
  localStorage.setItem('valorEstado4', JSON.stringify(valorEstado4))

}

function BotaoIndisp4(){

  valorEstado4 = 'Indisponível'
  localStorage.setItem('valorEstado4', JSON.stringify(valorEstado4))
}


function BotaoDisp5(){

  valorEstado5 = 'Disponível'
  localStorage.setItem('valorEstado5', JSON.stringify(valorEstado5))

}

function BotaoIndisp5(){

  valorEstado5 = 'Indisponível'
  localStorage.setItem('valorEstado5', JSON.stringify(valorEstado5))
}



function PuxarEstado(){

  
  labelEstado.innerHTML = JSON.parse(localStorage.getItem('valorEstado'))
  labelEstado2.innerHTML  = JSON.parse(localStorage.getItem('valorEstado2'))
  labelEstado3.innerHTML  = JSON.parse(localStorage.getItem('valorEstado3'))
  labelEstado4.innerHTML  = JSON.parse(localStorage.getItem('valorEstado4'))
  labelEstado5.innerHTML  = JSON.parse(localStorage.getItem('valorEstado5'))

}

function PuxarEndereco(){

  userLogado = JSON.parse(localStorage.getItem('UserLogado'))
  vetorEmails = JSON.parse(localStorage.getItem('EmailsSalvos'))
  vetorEnderecos = JSON.parse(localStorage.getItem('EnderecosSalvos'))

  posicaoUser = vetorEmails.indexOf(userLogado)

  inptEnderecoProduto.value = vetorEnderecos[posicaoUser]
}




// Funções para abrir e fechar o popup

function abrirPopup() {
  document.getElementById('popup').style.display = 'flex';
}

// Função para fechar o popup
function fecharPopup() {
  document.getElementById('popup').style.display = 'none';
}

// Adicionar eventos aos botões de abrir e fechar o popup
document.getElementById('openPopup').addEventListener('click', abrirPopup);
document.getElementById('closePopup').addEventListener('click', fecharPopup);

// Adicionar eventos aos botões de "Disponível" e "Indisponível"
function adicionarEventosBotao() {
  // Botões "Disponível"
  document.getElementById('botaoDisponivel1').addEventListener('click', abrirPopup);
  document.getElementById('botaoDisponivel2').addEventListener('click', abrirPopup);
  
  // Botões "Indisponível"
  document.getElementById('botaoIndisponivel1').addEventListener('click', abrirPopup);
  document.getElementById('botaoIndisponivel2').addEventListener('click', abrirPopup);
}

adicionarEventosBotao();


function BotaoProdutos(){

  window.location.href="/FarmaFind - Editar/item.html"
}

function BotaoListar(){

  window.location.href="/FarmaFind - Listar/listar.html"
}



