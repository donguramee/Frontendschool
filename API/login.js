import React, { useState } from "react";
import { api } from "../api/Auth/api";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const inputEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };
  const submitLogin = async (e) => {
    // async await을 왜하면
    // await하면서 기다리면서 데이터를 받아오기 때문에
    e.preventDefault();
    const { login } = api();
    const res = await login(email, password);
    if (res.hasOwnProperty("user")) {
      localStorage.setItem("token", res.user.token);
      localStorage.setItem("accountname", res.user.accountname);
      localStorage.setItem("username", res.user.username);
    } else {
      console.log(res);
    }
  };
  const userInfo = async (e) => {
    const { myInfo } = api();
    const user = await myInfo();
    setUser(user);
  };

  return (
    <>
      <h1>로그인</h1>
      <form onSubmit={submitLogin}>
        <input type="email" placeholder="이메일입력" onChange={inputEmail} />
        <input
          type="password"
          placeholder="비밀번호입력"
          onChange={inputPassword}
        />
        <button type="submit">로그인</button>
      </form>

      {user && <p>{user.username}</p>}
    </>
  );
}
