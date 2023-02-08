import './Botao.css'

export const Botao = (props) =>{
    return(
        <button className='botao' trype="Button">{props.children}</button>
    )
}