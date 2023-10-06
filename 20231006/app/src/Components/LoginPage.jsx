import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (email, password) => {
    const baseUrl = "https://api.mandarin.weniv.co.kr";
    const reqPath = "/user/login";
    const reqUrl = baseUrl + reqPath;

    const loginData = {
      user: {
        email: email,
        password: password,
      },
    };
    try {
      // 로그인해서 token꺼내기~!
      const res = await fetch(reqUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const json = await res.json();
      console.log(json);

      const token = json.user.token;
      console.log(token);
      // 로컬스토리지에 토큰 저장하기.
      localStorage.setItem("token", token);
    } catch (error) {
      alert("로그인에 실패했습니다!");
    }
  };

  const inputEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };
  const submitLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <>
      <h1>로그인</h1>
      <section>
        <h2>이메일, 비밀번호 입력하는곳</h2>
        <form onSubmit={submitLogin}>
          <input
            type="text"
            placeholder="이메일입력"
            onChange={inputEmail}
            value={email}
          />
          <input
            type="text"
            placeholder="비밀번호입력"
            onChange={inputPassword}
            value={password}
          />
          <button>로그인</button>
        </form>
      </section>
    </>
  );
}

export default LoginPage;
//fetch의 기본 동작은 GET이기 때문에 다른 메서드를 지정하기 위해서는 두번째 인자로 객체를 넣어서 요청에 대한 정보를 전달해야 한다. 이때, 주의할 점은 body의 값은 문자열로 주기에 문자열로 변환해줄 JSON.stringify(문자열로 변환할 객체)를 사용한다.
