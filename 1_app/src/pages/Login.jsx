import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate()

    const fnConfirmar =  async (event) => {
        event.preventDefault()
        console.log("EVENTO CONFIRMAR =>", event)        

        const username = event.target.form.username.value;
        const password = event.target.form.password.value;
        const urirest = `http://localhost:8080/rest/users?userName=${username.toLowerCase()}`
        
        console.log("username =>", username)
        console.log("password =>", password)
        console.log("URI Rest =>", urirest)

        try{

            const response = await fetch(urirest, {
                method: 'GET',
                headers: {
                    'Authorization': `Basic ${btoa(username + ':' + password)}`,
                    'Accept': 'application/json'
                },                
            })

            const jsonlogin = await response.json()
            
            console.log("RESPONSE =>", response)
            console.log("JSONLOGIN =>", jsonlogin)            

            if(jsonlogin.resources.length === 1){
                localStorage.setItem("@1app/displayname", jsonlogin.resources[0].displayName)
                navigate('/')
                window.location.reload()
            }

        }catch(err){
            console.log("ERRO =>", err)
        }

    }

    const fnCancelar = (event) => {
        event.preventDefault()
        console.log("EVENTO CANCELAR =>", event)
        navigate('/')
    }

    
    return(
        <div className="container-login">
            <form className="form-login">
                <h1>{'</Login>'}</h1>
                <label>Login</label>
                <input type="text" name="username" />
                <label>Senha</label>
                <input type="password" name="password" />
                <div className="buttons">
                    <button className="button-confirmar" onClick={(event) => fnConfirmar(event)}>Confirmar</button>
                    <button className="button-cancelar" onClick={(event) => fnCancelar(event)}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default Login
