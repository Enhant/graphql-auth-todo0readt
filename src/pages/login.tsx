import React from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../lib/mutations';
import AuthForm from '../components/AuthForm';

const Login: React.FC = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const handleLogin = (username: string, password: string) => {
    login({ variables: { loginInput: { username, password } } })
    .then(({ data }) => {
      console.log(data)
      localStorage.setItem('token', data.login);
    })
    .catch(err => console.log('err', err));
  };

  return (
    <div>
      <AuthForm onSubmit={handleLogin} buttonText="Login" />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error.message}</p>}
      {data && <p className="text-green-500">Logged in successfully!</p>}
    </div>
  );
};

export default Login;
