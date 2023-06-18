const React = require('react');
const { useState } = require('react');

const userData = [
  { id: 1, name: 'ABC', email: 'abc@gmail.com', password: '12' },
  { id: 2, name: 'DEF', email: 'def@gmail.com', password: '1234' },
  { id: 3, name: 'GHI', email: 'ghi@gmail.com', password: '123456' },
];

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Find the user with the given email
    const user = userData.find((user) => user.email === email);

    if (!user) {
      setUserError('User not found');
      setPasswordError('');
    } else if (user.password !== password) {
      setUserError('');
      setPasswordError('Password incorrect');
    } else {
      setUserError('');
      setPasswordError('');

      // Simulate a delay of 3000ms before logging the user data
      setTimeout(() => {
        console.log(user);
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="input-email">Email:</label>
        <input
          id="input-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="input-password">Password:</label>
        <input
          id="input-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div id="user-error">{userError}</div>
      <div id="password-error">{passwordError}</div>
      <button id="submit-form-btn" type="submit">Submit</button>
    </form>
  );
};

module.exports = LoginForm;
