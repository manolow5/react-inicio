import './Formulario.css'
import CampoTexto from '../CampoTexto'
import SuspendList from '../SuspendList'
import Botao from '../Botao'
import { useState } from 'react'

export const Formulario = (props)=>{ 

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    
    const aoSalvar= (event) =>{
        event.preventDefault()
        props.aoAlcolaborador({
            nome,
            cargo,
            imagem,
            time
        })
    }
    return(
       <section className='formulario'>
        <form onSubmit={aoSalvar} className='formulario-form'>
            <h2>Preencha os dados para criar o card do elaborador.</h2>
            <CampoTexto obrigatorio={true}  
                         label="Nome" 
                         placeholder = "Digite o seu nome"
                         value={nome}
                         aoAlterado={valor => setNome(valor)}/>

            <CampoTexto obrigatorio={true} 
                        label="Cargo" 
                        placeholder = "Digite o seu cargo"
                        value={cargo}
                        aoAlterado={valor => setCargo(valor)}/>

            <CampoTexto obrigatorio={true} 
                        label="Imagem" 
                        placeholder = "Digite o endereço da imagem"
                        value={imagem}
                        aoAlterado={valor => setImagem(valor)}/>

            <SuspendList obrigatorio={true}
                         label="Times"
                         itens={props.times}
                         value={time}
                         aoAlterado={valor => setTime(valor)}/>
            <Botao>
                Criar Card
            </Botao>
        </form>
       </section>
    )
}