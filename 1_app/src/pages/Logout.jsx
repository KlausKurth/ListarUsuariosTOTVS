import { useNavigate } from "react-router-dom"

function Logout() {
    
    const navigate = useNavigate()

    const fnLogout = (event) => {
        event.preventDefault()
        localStorage.clear()
        navigate('/')
        window.location.reload()
    }

    const fnCancelar = (event) => {
        navigate('/users')
    }
    
    return (
        <div className="container-logout">            
            <div className="componentes">
                <h1>{'</Logout>'}</h1>
                <div className="buttons">                
                    <button className="button-confirmar" onClick={(event) => fnLogout(event)}>Confirmar</button>
                    <button className="button-cancelar" onClick={(event) => fnCancelar(event)}>Cancelar</button>
                </div>
            </div>            
        </div>
    )
}

export default Logout
