import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ onSubmit }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);
  const [novidades, setNovidades] = useState(false);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          onSubmit({ nome, sobrenome, cpf, novidades, promocoes });
        }
      }}
    >
      <TextField //NOME
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        id="nome"
        name="nome"
        required
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField //SOBRENOME
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel //PROMOÇÕES
        label="Promoções"
        control={
          <Switch
            name="promocoes"
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="novidades"
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            color="primary"
          />
        }
      />

      <Button variant="contained" color="primary" type="submit">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
