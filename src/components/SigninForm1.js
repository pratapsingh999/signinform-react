// SigninForm.js
import React from 'react';
import { useState ,useEffect } from 'react';


const SigninForm = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/posts'); // Adjust the path
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      // Replace with your actual API endpoint
    //   const response = await fetch("../db.json");
    //   console.log(response ,"res");
    //   const users = await response.json();
         const users = data;
         console.log("users" ,users);

      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        // Redirect to dashboard or home page after successful signin
        history.push('/dashboard');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Signin Form</h2>
      <form onSubmit={handleSignin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signin</button>
      </form>
    </div>
  );
};

export default SigninForm;
