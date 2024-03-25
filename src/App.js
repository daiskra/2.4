import { useState } from "react";
import styles from "./App.module.css";

export const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [errors, setErrors] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password, passwordCheck });
  };

  let error = null;

  const emailChange = ({ target }) => {
    setEmail(target.value);

    setErrors(error);
  };

  const emailBlur = () => {
    if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
      setErrors(
        "Неверный email. Email должен содержать: имя пользователя, символ @, доменное имя и доменное расширение"
      );
    }
  };

  const passwordChange = ({ target }) => {
    setPassword(target.value);

    setErrors(error);
  };

  const passwordCheckChange = ({ target }) => {
    setPasswordCheck(target.value);

    setErrors(error);
  };

  const passwordBlur = () => {
    if (password.length < 6) {
      setErrors("Неверный пароль. Пароль должен быть не короче 5 символов");
    }
  };

  const passwordCheckBlur = () => {
    if (password !== passwordCheck) {
      setErrors("Пароль не совпадает");
    }
  };

  return (
    <div className={styles.App}>
      <form onSubmit={onSubmit}>
        {setErrors && <div className={styles.errorLabel}>{errors}</div>}
        <input
          name="email"
          type="text"
          placeholder="Введите email"
          value={email}
          onChange={emailChange}
          onBlur={emailBlur}
        />

        <input
          name="password"
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={passwordChange}
          onBlur={passwordBlur}
        />

        <input
          name="password"
          type="password"
          placeholder="Повторите пароль"
          value={passwordCheck}
          onChange={passwordCheckChange}
          onBlur={passwordCheckBlur}
        />

        <button
          type="submit"
          disabled={
            !email || !password || !passwordCheck || password !== passwordCheck
          }
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};
