import Colaborador from '../Colaborador'
import './Time.css'


export const Time = (props)=>{
    console.log(props.colaboradores)
    return(
        (props.colaboradores.lenght > 0) && <section
            className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            
        <div className='colaboradores-time'>
            {props.colaboradores.map(
                colaborador =><Colaborador
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}/>)}
        </div>
        </section>
        
        
    )

}