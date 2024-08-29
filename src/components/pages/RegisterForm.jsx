import { useForm } from "react-hook-form";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { register: registerUser } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      await registerUser(data.email, data.password);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          placeholder="Password"
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
