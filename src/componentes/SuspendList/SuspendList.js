import './SuspendList.css'

export const SuspendList = (props)=>{
    return(
        <div className='div-lista'>
            <label className='label-lista'>{props.label}</label>
            <select 
                required={props.obrigatorio} 
                className='select-lista' 
                value={props.valor}
                onChange={event =>{
                    props.aoAlterado(event.target.value)}}>

                {props.itens.map(item => {
                    return <option key={item} className='itens-lista'>{item}</option>
                })}
            </select>
        </div>
    )
}