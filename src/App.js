import { Container, Typography } from "@material-ui/core";
import "./App.css";
import FormularioCadastro from "./components/FormularioDeCadastro/FormularioCadastro";
import "fontsource-roboto";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

import { validarCPF, validarSenha } from "./models/cadastro";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">
        Formulário de cadastro
      </Typography>

      <ValidacoesCadastro.Provider
        value={{
          cpf: validarCPF,
          senha: validarSenha,
          nome: validarSenha,
        }}
      >
        <FormularioCadastro onSubmit={onSubmitForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function onSubmitForm(dados) {
  console.log(dados);
}

export default App;
