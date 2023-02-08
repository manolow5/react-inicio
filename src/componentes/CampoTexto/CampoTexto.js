import { useState } from 'react'
import './CampoTexto.css'


export const CampoTexto = (props)=>{ 

    

    const aoDigitado = (event) =>{
       props.aoAlterado(event.target.value)

    }

    return(
        <div className='campo-texto'>
             <label className='label-texto' htmlFor="fullname">{props.label}</label>
             
            <input value={props.valor} 
                    onChange={aoDigitado} 
                    required={props.obrigatorio} 
                    className="input-txt" 
                    type="text" 
                    placeholder={props.placeholder}/>
        </div>

    )
}

