// 01
// fetch(<url>) : fetch를 이용해 get요청을 보내게된다.
// fetch(url, [option]) : fetch에 Url뿐만 아닌 다른 속성을 객체형태로 넘겨주어 요청을 보낸다.

// fetch란 -> get요청 : 서버에게 데이터를 받아오는 과정, post : 서버에게 데이터를 보내는 과정
//fetch로 get요청 보내기, 옵션을 넣지 않으면 get요청이다.
fetch("요청할주소");

//fetch에 옵션을 넣어 POST요청 보내기
fetch("요청할 주소", {
  method: "POST",
  header: {
    "Content-Type": "application/json",
  },
  body: "{text:'안녕하세요')",
});
