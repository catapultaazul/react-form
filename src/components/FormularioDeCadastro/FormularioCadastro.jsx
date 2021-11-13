import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function FormularioCadastro({onSubmit, validarCPF}) {
    const [nome, setNome]= useState("");
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = useState('')
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(false)
    const[erros, setErros] = useState({cpf:{valido:true, texto:""}})

    return ( 
        <form
        onSubmit={(event) => {
            event.preventDefault();
            onSubmit({nome, sobrenome, cpf, novidades, promocoes})
        }}
        >
            <TextField //NOME
            value={nome} 
            onChange={(event)=>{
                setNome(event.target.value); 
            }}
            id='nome'
            label='Nome'
            variant='outlined'
            fullWidth
            margin='normal'/>

            <TextField //SOBRENOME
            value={sobrenome} 

            onChange={(event)=>{
                setSobrenome(event.target.value) 
            }}

            id='sobrenome'
            label='Sobrenome'
            variant='outlined'
            fullWidth
            margin='normal'/>

            <TextField
            value={cpf}
            onChange={(event) => {
            setCpf(event.target.value);
            }}
    
            onBlur={(event)=>{
            const ehValido = validarCPF(cpf);
            setErros({cpf:ehValido})
            }}
            error={!erros.cpf.valido}
            helperText={erros.cpf.texto}
            id="CPF"
            label="CPF"
            variant="outlined"
            margin="normal"
            fullWidth
            />


            <FormControlLabel //PROMOÇÕES
            label='Promoções'
            control ={<Switch name='promocoes' checked={promocoes} 
            onChange={event => {
                setPromocoes(event.target.checked)
            }}
            color='primary'/>}
            />

            <FormControlLabel 
            label='Novidades'
            control ={<Switch name='novidades' checked={novidades} 
            onChange={event => {
                setNovidades(event.target.checked)
            }} 
            color='primary'/>}
            />

            <Button 
            variant='contained'
            color='primary'
            type="submit"
            >Cadastrar
            </Button>
        </form>
     );
}

export default FormularioCadastro;
