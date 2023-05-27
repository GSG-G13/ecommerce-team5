import { useState, useEffect } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmitChange = () => {
    setSubmit(!submit);
  };

  useEffect(() => {
    fetch('/loginform', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userEmail: email,
        userPassword: password,
      }),
    }).then((res) => res.json()).catch((err) => console.log(err));
  }, [submit]);

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
            value={email}
            onChange={handleEmailChange}
            id="singupemail"
          />

          <input
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            id="singuppassword"

          />
          <p className="massage"> </p>

          <button type="button" onClick={handleSubmitChange} id="singupsubmit">
            Continue
          </button>
        </div>

        <div id="aleadyhaveaccount">
          You dont have an account?
          <a href="/signup">Sign up</a>
        </div>
      </form>
    </div>

  );
};
export default Login;
