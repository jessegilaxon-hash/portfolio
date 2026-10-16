import { useState } from 'react';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let errorMessage = '';

  if (!email.includes('.')) { 
    errorMessage = 'Email in wrong format'
};

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("submit!");
  };

  return (
    <form onSubmit={handleSubmit} className='pl-2 m-2 flex flex-col gap-2 outline-2 outline-solid outline-gray-400 bg-gray-100 max-w-65 text-red-900'>
      <h1 className=''>Sign Up</h1>
      <p>Currently signing up: {email}</p>
      <p className='text-red-500 font-medium text-lg'> </p>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
        />

      <input
        type="text"
        placeholder="email"
        id=''
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />  

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
      <button type="submit" className='m-5 outline-full outline-2 bg-gray-600 rounded-full w-20 align-middle items-center text-white'>Sign Up</button>
      <p>Already have an account?{' '}
          <a href="#">Sign in</a>
      </p>
    </form>
  );
}