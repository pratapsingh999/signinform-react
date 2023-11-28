// // SignupForm.js
// import React from 'react';
// import { useState } from 'react';
// import { useNavigate } from "react-router-dom";



// const SignupForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

// const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       // Replace with your actual API endpoint
//       const response = await fetch('http://localhost:3000/posts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response) {
//         // Redirect to signin after successful signup
//         // history.push('/signin');
//         navigate('/signin');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Signup Form</h2>
//       <form onSubmit={handleSignup}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;



// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';

// const SignupForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     try {
//       // Replace with your actual API endpoint
//       const response = await fetch('http://localhost:3000/posts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data), // Use the data object from onSubmit
//       });

//       if (response.ok) {
//         // navigate('/signin');
//         navigate('/dashboard');

//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Signup Form</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           type="email"
//           placeholder="Email"
//           {...register('email', { required: 'Email is required' })}
//         />
//         {errors.email && <p>{errors.email.message}</p>}

//         <input
//           type="password"
//           placeholder="Password"
//           {...register('password', { required: 'Password is required' })}
//         />
//         {errors.password && <p>{errors.password.message}</p>}

//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;





import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Assuming the backend can differentiate between email checking and signup based on the provided data
      
      // Send a request to check if the email exists
      const response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'checkEmail', email: data.email }),
      });
      console.log(response,"res");


      if (response.ok) {
        const responseData = await response.json();
console.log(responseData,"respomsessss");

        if (responseData.exists) {
          // If email exists, navigate to the sign-in form
          navigate('/signin');
        } else {
          // If email doesn't exist, proceed with signup
        //   const signupResponse = await fetch('http://localhost:3000/posts', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ action: 'signup', ...data }),
        //   });
        navigate('/dashboard');

        //   if (signupResponse.ok) {
        //     // If signup is successful, navigate to dashboard or other route
        //     navigate('/dashboard');
        //   }
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;

