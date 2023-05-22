import { useState } from "react";
import React from "react";


const Singup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [img, setImg] = useState('');
    const [password, setPassword] = useState('');
    
    const handleNameChange = (newName) => {
        setName(newName);
    }
    const handleEmailChange = (newEmail) => {
        setEmail(newEmail);
    }
    const handleImgChange = (newImg) => {
        setImg(newEmail);
    }
    const handlePasswordChange = (newPassword) => {
        setPassword(newPassword)
    }


    return (
        <div>
            bla bla bla
        </div>
    )


}

export default Singup;