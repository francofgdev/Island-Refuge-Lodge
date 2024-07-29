import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";   

function Profile() {
    const {login} = useContext(UserContext)
    
    return (
        <div className='perfil'>
            {login ? 'Dados do usuário' : 'FAÇA SEU LOGIN PARA TER ACESSO ÀS INFOS'}
        </div>
    )
}

export default Profile;