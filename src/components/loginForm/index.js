import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "../../styles/styles";

const LoginForm = ({ teddyController }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(undefined);

  const [login, setLogin] = useState({ password: "", email: "" });

  let isDisabled = login.password.length < 5 ?? login.email.length < 5;

  useEffect(() => {
    if (status !== undefined) {
      setStatus(undefined);
      teddyController("idle");
    }
  }, [login]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    /* requisição fake para simular uma chamada a api */
    var fakeRequest = new Promise((resolve, reject) => {
      setTimeout(() => {
        const { email, password } = login;
        if (email === "reactflare" && password === "reactflare")
          return resolve();
        return reject();
      }, 3000);
    });

    fakeRequest
      .then(() => {
        teddyController("success");
        setStatus(true);
      })
      .catch(() => {
        teddyController("fail");
        setStatus(false);
      })
      .finally(() => setLoading(false));
  };

  const updateField = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form onSubmit={handleSubmit} status={status}>
      <Input
        autoComplete="off"
        placeholder="Email"
        name="email"
        value={login.email}
        onChange={updateField}
      />
      <Input
        placeholder="Senha"
        type="password"
        onChange={updateField}
        name="password"
        value={login.password}
      />
      <Button disabled={isDisabled || loading} loading={loading}>
        {loading && "Carregando"}
        {!loading &&
          (status === undefined
            ? "Entrar"
            : status
            ? "Yuuup!!"
            : "Usuário ou senha inválido")}
      </Button>
    </Form>
  );
};

export default LoginForm;
