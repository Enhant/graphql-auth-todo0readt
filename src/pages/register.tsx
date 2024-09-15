import React from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_MUTATION } from "../lib/mutations";
import AuthForm from "../components/AuthForm";

const Register: React.FC = () => {
  const [register, { data, loading, error }] = useMutation(REGISTER_MUTATION);

  const handleRegister = (username: string, password: string) => {
    register({ variables: { registerInput: { username, password } } })
      .then((response) => {
        if (response.data.register) {
          console.log("Registration successful");
        } else {
          console.error("Registration failed");
        }
      })
      .catch((err) => {
        console.log("error", error);
        console.error("Registration error:", err);
      });
  };

  return (
    <div>
      <AuthForm onSubmit={handleRegister} buttonText="Register" />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error.message}</p>}
      {data && <p className="text-green-500">Registered successfully!</p>}
    </div>
  );
};

export default Register;
