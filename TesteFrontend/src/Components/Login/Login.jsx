import { FaUser, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { useState } from "react";
import "./Login.css";

const schema = object({
  email: string().required("Campo obrigatório."),
  password: string()
    .required("Campo obrigatório.")
    .min(6, "Inválido. O mínimo é 6 caracteres."),
});

const Login = () => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const {
    register,
    handleSubmit: onSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSubmit = (data) => {
    if (data.email === "teste@teste.com" && data.password === "123456") {
      setMessage("Login realizado com sucesso!");
      setMessageType("success");
    } else {
      setMessage("Email ou senha inválidos.");
      setMessageType("error");
    }
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit(handleSubmit)}>
        <h1>Acesse o Sistema</h1>
        <div className="input-field">
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            {...register("email")}
          />
          <FaUser className="icon" />
          <span className="errors">{errors?.email?.message}</span>
        </div>
        <div className="input-field">
          <input
            type="password"
            id="password"
            placeholder="Senha"
            {...register("password")}
          />
          <FaLock className="icon" />
          <span className="errors">{errors?.password?.message}</span>
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button>Entrar</button>

        {message && (
          <div className={`message ${messageType}`}>
            {message}
          </div>
        )}

        <div className="signup-link">
          <p>
            Não tem conta? <a href="#">Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
