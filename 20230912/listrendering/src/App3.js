//내 코드

// import React, { useState } from "react";

// const App3 = () => {
//   const [data, setData] = useState([
//     {
//       id: 1,
//       name: "Alice",
//       email: "alice@example.com",
//       job: "Engineer",
//       isDetailsVisible: false,
//     },
//     {
//       id: 2,
//       name: "Bob",
//       email: "bob@example.com",
//       job: "Designer",
//       isDetailsVisible: false,
//     },
//     {
//       id: 3,
//       name: "Charlie",
//       email: "charlie@example.com",
//       job: "Manager",
//       isDetailsVisible: false,
//     },
//   ]);

//   const toggleDetails = (id) => {
//     setData((prevData) =>
//       prevData.map((item) => {
//         if (item.id === id) {
//           return { ...item, isDetailsVisible: !item.isDetailsVisible };
//         }
//         return item;
//       })
//     );
//   };

//   return (
//     <ul>
//       <h1>User List</h1>
//       {data.map((item) => (
//         <li key={item.id}>
//           <h2 onClick={() => toggleDetails(item.id)}>{item.name}</h2>
//           {item.isDetailsVisible && (
//             <div>
//               <p>Email: {item.email}</p>
//               <p>Job: {item.job}</p>
//             </div>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default App3;

//강사님 코드
import React, { useState } from "react";

function UserItem({ user }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <li onClick={() => setShowInfo(!showInfo)}>
      {user.name}
      {showInfo ? (
        <div>
          <div>email : {user.email}</div>
          <div>job : {user.job}</div>
        </div>
      ) : null}
    </li>
  );
}

function UserList({ users }) {
  return (
    <ul>
      {users.map((item) => {
        return <UserItem key={item.id} user={item} />;
      })}
    </ul>
  );
}

export default function App3() {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com", job: "Engineer" },
    { id: 2, name: "Bob", email: "bob@example.com", job: "Designer" },
    { id: 3, name: "Charlie", email: "charlie@example.com", job: "Manager" },
  ];

  return (
    <div>
      <h1>user list</h1>
      <UserList users={users} />
    </div>
  );
}
