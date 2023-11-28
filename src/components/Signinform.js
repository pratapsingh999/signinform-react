// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// const SignInForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const navigate = useNavigate();

//   const signIn = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/posts');
//       console.log(response,"response");
//       const users = response.data;
//       console.log('Fetched users:', response.data); 
//       // Check if users data is received

//       const user = users.find(u => u.email === username && u.password === password);
//       console.log('Matching user:', user); // Check if the matching user is found

//       if (user) {
//         alert('Sign-in successful!');
//         navigate('/dashboard');
//         // Perform actions after successful sign-in (e.g., redirecting to a new page)
//       } else {
//         setError('Invalid username or password');
//       }
//     } 
//     catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div className="signin-container">
//       <h2>Sign In</h2>
//       <input
//         type="text"
//         value={username}
//         placeholder="Username"
//         onChange={(e) => setUsername(e.target.value)}
//       /><br />
//       <input
//         type="password"
//         value={password}
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       /><br />
//       <button onClick={signIn}>Sign In</button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default SignInForm;



import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.get('http://localhost:3000/posts');
      const users = response.data;
      console.log('Fetched users:', response.data);

      const user = users.find(u => u.email === data.username && u.password === data.password);
      console.log('Matching user:', user);

      if (user) {
        alert('Sign-in successful!');
        navigate('/dashboard');
      } else {
        // setError('Invalid username or password');
        console.log('Invalid username or password');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Username"
          {...register('username', { required: 'Username is required' })}
        />
        {errors.username && <p>{errors.username.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
