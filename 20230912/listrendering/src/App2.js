// import React, { useState } from "react";

// const App2 = () => {
//   const [items, setItems] = useState([
//     {
//       title: "개발자 무릎 담요",
//       price: 17500,
//       id: 101,
//     },
//     {
//       title: "Hack Your Life 개발자 노트북 파우치",
//       price: 29000,
//       id: 102,
//     },
//     {
//       title: "우당탕탕 라이켓의 실험실 스티커북",
//       price: 29000,
//       id: 103,
//     },
//     {
//       title: "버그를 Java라 버그잡는 개리씨 키링",
//       price: 29000,
//       id: 104,
//     },
//   ]);

//   const deleteItem = (id) => {
//     const updatedItems = items.filter((item) => item.id !== id);
//     setItems(updatedItems);
//   };

//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item.id}>
//           <h2>{item.title}</h2>
//           <strong>{item.price}</strong>
//           <button onClick={() => deleteItem(item.id)}>삭제</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default App2;

////////////////////////////////////////////////////////////////
//강사님 코드
import React, { useState } from "react";
import Counter from "./Counter";

export default function App2() {
  const [data, setData] = useState([
    {
      title: "개발자 무릎 담요",
      price: 17500,
      id: 101,
    },
    {
      title: "Hack Your Life 개발자 노트북 파우치",
      price: 29000,
      id: 102,
    },
    {
      title: "우당탕탕 라이켓의 실험실 스티커북",
      price: 29000,
      id: 103,
    },
    {
      title: "버그를 Java라 버그잡는 개리씨 키링",
      price: 29000,
      id: 104,
    },
  ]);

  // 콜백함수 사용x
  //   function deleteFunc(id) {
  //     setData(
  //       data.filter((item) => {
  //         return item.id !== id;
  //       })
  //     );
  //   }

  //콜백함수 사용
  //이러한 방식을 함수형 업데이트라고 함.
  //함수형 업데이트의 장점은 콜백함수의 인자에 이전의 상태가 들어가는것을 리액트가 보장
  function deleteFunc(id) {
    setData((prevData) => {
      return prevData.filter((item) => {
        return item.id !== id;
      });
    });
  }

  return (
    <>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <strong>{item.price}</strong>
              <button onClick={() => deleteFunc(item.id)}>삭제</button>
            </li>
          );
        })}
      </ul>
      <Counter />
    </>
  );
}
