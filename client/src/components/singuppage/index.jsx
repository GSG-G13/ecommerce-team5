import React, { useState, useEffect } from 'react';


// define use states
const Singup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [img, setImg] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submit, setSubmit] = useState(false)
  const [agree, setAgree] = useState(false);

// manipualte use states 
 
  const handleAgree = (newagree) => {
    setAgree(!newagree);
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleSecondNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleImgChange = (event) => {
    setImg(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

// other functions

  
    const validateEmail = () => {
      if (email !== '') {
        if (email.includes('@') && email.includes('.com') && !email.includes(' ')) {
          return 'Email is valid';
        } else {
          return 'Email is not valid!';
        }
      }
    }

    const validateImage = () => {
      if (img !== '') {
        if (img.includes(' ')) {
          return 'Image URL shoudn\'t contain spaces!'
        } 

      }
    }

    const validtaConfirm = () => {
     if (confirmPassword != '') {
      if (password === confirmPassword) {
        return 'passwords match'
      } else {
        return 'passwords don\'t match';
      }
     }
    }

    const validateFirstName = () => {
      if (firstName !== '') {

        if (firstName.length < 5 || firstName.length > 10) {
          return 'First name should be between 5-10 characters';
        } else if (firstName.includes(' ')) {
          return 'First Name shoudn\'nt contain spaces';
        }
      }
    }


    const validateLasttName = () => {
      if (lastName !== '') {

        if (lastName.length < 5 || lastName.length > 10) {
          return 'First name should be between 5-10 characters';
        } else if (lastName.includes(' ')) {
          return 'First Name shoudn\'nt contain spaces';
        }
      }
    }


    const validataPassword = () => {
      if (password !=='') {
        if (password.includes(' ')) {
          return "Password can't contain spaces"
        } else if (password.length < 8 || password.length > 32) {
          return "Password should be between 8-32 characters!"
        } else {
          let capital = 0;
          let small = 0;
          let sybmbol = 0;
          let number = 0;
          let passArr = password.split('')
          const specialChars = [
            '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+',
            '-', '=', '[', ']', '{', '}', ';', '\'', ':', '"', '\\', '|', ',',
            '.', '<', '>', '/', '?', '~'
          ];
  
          for (let i =0; i<passArr.length; i++) {
            if (passArr[i].match(/[a-z]/i)) {
              if (passArr[i] === passArr[i].toUpperCase()) {
                capital = 1;
              } else if (passArr[i] === passArr[i].toLowerCase()) {
                small = 1; 
              }
            }
            if (specialChars.includes(passArr[i])) {
              sybmbol =1;
            }
            if ( !isNaN(passArr[i])) {
              number =1; 
            }
          }
         
          if (!capital || !small || !sybmbol || !number) {
            return 'password should contain capital letter, samll letter, numbers, ans symbols';
          } 
          
        }
  
      }
          }

  return (
    <div id='singupelement'>

    <form className='signupform'>
        <div id='description'>
            <h3 id='singupword' >Rgister Yourserlf</h3>
            <p id='maddow'>Begin You jerney with us today</p>
        </div>
        <div id='emailandpassword'>

        <input placeholder='  Email' id='singupemail' value={email} onChange={handleEmailChange}></input>
        <p className='massage'>{null || validateEmail()}</p>
         <input placeholder='  First Name' id='singupusername' value={firstName} onChange={handleFirstNameChange}></input> 
         <p className='massage'>{validateFirstName()}</p>
        <input placeholder='  Last Name' id='singupusername' value={lastName} onChange={handleSecondNameChange}></input>
        <p className='massage'>{validateLasttName()}</p>
        <input placeholder='  Password'  id='singuppassword' value={password} onChange={ handlePasswordChange}></input>
        <p className='massage'>{null || validataPassword()}</p> 
        <input placeholder='  Confirm Password'  id='singupconfirmpassword' value={confirmPassword} onChange={ handleConfirmPasswordChange}></input> 
        <p>{validtaConfirm()}</p>
        <input placeholder='  You Image URL' value={img} id='singupuserimage' onChange={ handleImgChange}></input>
        <p>{validateImage()}</p>
        <button id='singupsubmit' onClick={() => han}>Continue</button>
        </div>
        <div id='termsofuse'> <input type="checkbox" id="checkbox"></input>I agree to the terms  of use</div>
        <div id="aleadyhaveaccount">Already signed up? <a href="/login">  Log In</a></div>


    </form>
    </div>
  );
};

export default Singup;
