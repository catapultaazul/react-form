import { Container, Typography } from '@material-ui/core';
import './App.css';
import FormularioCadastro from './components/FormularioDeCadastro/FormularioCadastro';
import 'fontsource-roboto'

function App() {
  return (
    <Container
    component='article'
    maxWidth='sm'>
      <Typography
      variant='h3' 
      align='center' 
      component='h1'
      >Formulário de cadastro
      </Typography>
      
      <FormularioCadastro onSubmit={onSubmitForm} validarCPF={validarCPF}/>
    </Container>
  );
}

function onSubmitForm(dados){
  console.log(dados)
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 digitos."}
  }else{
    return {valido:true, texto:""}
  }
}

export default App;
