import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* a태그와 Link차이 확인하기 a태그는 새로고침이 일어남  */}
      <a href="/cart">Cart</a>
      <Link to="/">홈</Link>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        {/* Outlet의 역할은 자식으로 있는 컴포넌트를 꺼내서 보여주는 컴포넌트 */}
        {/* <Route path="/users/*" element={<Outlet />}> */}
        <Route path="/users/*" element={<Users />}>
          {/* 이안에 중첩할 라우터 넣기 */}
          {/* /users */}
          {/* <Route path="" element={<Users />} /> */}
          {/* /users/coupon */}
          <Route path="coupon" element={<CouponPage />} />
          {/* /users/question */}
          <Route path="question" element={<QuestionPage />} />
          {/* /users/notice */}
          <Route path="notice" element={<NoticePage />} />
        </Route>
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route
          path="/products/:id/notice"
          element={<ProductDetailNoticePage />}
        />
      </Routes>
      <Button />
    </BrowserRouter>
  );
}

function Button() {
  const navigate = useNavigate();
  return <button onclick={() => navigate("/users")}>유저보기</button>;
}

function ProductDetailNoticePage() {
  const { id } = useParams();
  return <h1>{id}번 상품 상세 알림? 페이지</h1>;
}

function CouponPage() {
  return <h1>쿠폰</h1>;
}

function NoticePage() {
  return <h1>알림</h1>;
}

function QuestionPage() {
  return <h1>?</h1>;
}

function ProductDetailPage() {
  const { id } = useParams();
  return <h1>{id}번 상품 입니다~!</h1>;
}

function Cart() {
  return <h1>카트</h1>;
}

function Users() {
  return (
    <div>
      <h1>유저들</h1>
      {/* Outlet은 여기서도 사용 가능 */}
      <Outlet />
    </div>
  );
}

function HomePage() {
  return <h1>홈페이지</h1>;
}

export default App;
