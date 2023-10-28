import { useState } from "react";



function Login (){
    const {validacion, setValidacion} = useState()

    return(
        <div className="bg">
          <div>
            <label htmlFor="">usuario</label>
            <input type="text" name="name" id="name" placeholder="usuario" />
          </div>
          <div>
            <label htmlFor="">password</label>
            <input type="password" name="pass" id="pass" placeholder="password" />
          </div>
        </div>
    );
}

export default Login;