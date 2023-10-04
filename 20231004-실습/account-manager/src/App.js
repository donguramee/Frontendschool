import ExpenseInput from "./components/ExpenseInput/ExpenseInput";

function App() {
  return (
    <article>
      <header>
        {/* 사용자의 한달 월급을 입력합니다. */}
        수입 input
        <ExpenseInput />
      </header>
      <main>
        {/* 사용자가 구입한 상품의 이름과 가격을 입력합니다. */}
        지출 input
        <div>
          {/* 사용자가 그동한 구입한 상품의 목록이 랜더링됩니다. */}
          지출 기록
          <div>
            {/* 사용자가 구입한 상품의 지출액의 총합 */}
            지출 총합
          </div>
        </div>
      </main>
    </article>
  );
}
export default App;
