/* eslint-disable consistent-return */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

// define use states
const Singup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [img, setImg] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submit, setSubmit] = useState(false);
  const [agree, setAgree] = useState(false);

  let valid = 0;
  // manipualte use states

  const handleAgree = () => {
    if (!agree) {
      setAgree(true);
      valid += 1;
    } else {
      setAgree(false);
      valid -= 1;
    }
    console.log(valid, agree);
  };

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

  const handleSubmit = () => {
    setSubmit(!submit);
  };

  // other functions

  // eslint-disable-next-line consistent-return
  const validateEmail = () => {
    if (email !== '') {
      if (
        email.includes('@') &&
        email.includes('.com') &&
        !email.includes(' ')
      ) {
        valid += 1;
        return 'Email is valid';
      }
      return 'Email is not valid!';
    }
  };

  const validateImage = () => {
    if (img !== '') {
      if (!img.includes(' ')) {
        valid += 1;
        console.log(valid);
      } else {
        return "Image URL shoudn't contain spaces!";
      }
    }
  };

  const validtaConfirm = () => {
    if (confirmPassword !== '') {
      if (password === confirmPassword) {
        valid += 1;
        return 'passwords match';
      }
      return "passwords don't match";
    }
  };

  const validateFirstName = () => {
    if (firstName !== '') {
      if (!firstName.includes(' ') && firstName.length >= 5 && firstName.length <= 10) {
        valid += 1;
      } else if (firstName.length < 5 || firstName.length > 10) {
        return 'First name should be between 5-10 characters';
      } else {
        return "First Name shoudn'nt contain spaces";
      }
    }
  };

  const validateLasttName = () => {
    if (lastName !== '') {
      if (!lastName.includes(' ') && lastName.length >= 5 && lastName.length <= 10) {
        valid += 1;
      } else if (lastName.length < 5 || lastName.length > 10) {
        return 'First name should be between 5-10 characters';
      } else {
        return "First Name shoudn'nt contain spaces";
      }
    }
  };

  const validataPassword = () => {
    if (password !== '') {
      if (password.includes(' ')) {
        return "Password can't contain spaces";
      }
      if (password.length < 8 || password.length > 32) {
        return 'Password should be between 8-32 characters!';
      }
      let capital = 0;
      let small = 0;
      let sybmbol = 0;
      let number = 0;
      const passArr = password.split('');
      const specialChars = [
        '`',
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '+',
        '-',
        '=',
        '[',
        ']',
        '{',
        '}',
        ';',
        "'",
        ':',
        '"',
        '\\',
        '|',
        ',',
        '.',
        '<',
        '>',
        '/',
        '?',
        '~',
      ];

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < passArr.length; i++) {
        if (passArr[i].match(/[a-z]/i)) {
          if (passArr[i] === passArr[i].toUpperCase()) {
            capital = 1;
          } else if (passArr[i] === passArr[i].toLowerCase()) {
            small = 1;
          }
        }
        if (specialChars.includes(passArr[i])) {
          sybmbol = 1;
        }
        // eslint-disable-next-line no-restricted-globals
        if (!isNaN(passArr[i])) {
          number = 1;
        }
      }

      if (capital + small + sybmbol + number === 4) {
        valid += 1;
      } else {
        return 'password should contain capital letter, samll letter, numbers, ans symbols';
      }
    }
  };

  return (
    <div id="singupelement">
      <form className="signupform">
        <div id="description">
          <h3 id="singupword">Rgister Yourserlf</h3>
          <p id="maddow">Begin You jerney with us today</p>
        </div>
        <div id="emailandpassword">
          <input
            placeholder="  Email"
            id="singupemail"
            value={email}
            onChange={handleEmailChange}
          />
          <p className="massage">{null || validateEmail()}</p>
          <input
            placeholder="  First Name"
            id="singupusername"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <p className="massage">{validateFirstName()}</p>
          <input
            placeholder="  Last Name"
            id="singupusername"
            value={lastName}
            onChange={handleSecondNameChange}
          />
          <p className="massage">{validateLasttName()}</p>
          <input
            placeholder="  Password"
            id="singuppassword"
            value={password}
            onChange={handlePasswordChange}
          />
          <p className="massage">{null || validataPassword()}</p>
          <input
            placeholder="  Confirm Password"
            id="singupconfirmpassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <p>{validtaConfirm()}</p>
          <input
            placeholder="  You Image URL"
            value={img}
            id="singupuserimage"
            onChange={handleImgChange}
          />
          <p>{validateImage()}</p>
          <button type="button" id="singupsubmit" value={submit} onClick={handleSubmit}>
            Continue
          </button>
        </div>
        <div id="termsofuse">
          <input type="checkbox" id="checkbox" value={agree} onChange={handleAgree} />
          <span>I agree to the terms of use</span>
        </div>
        <div id="aleadyhaveaccount">
          Already signed up?
          <a href="/login"> Log In</a>
        </div>
      </form>
    </div>
  );
};

export default Singup;
