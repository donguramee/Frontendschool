import React from "react";
import styles from "./Home.module.css";
import DiaryForm from "./DiaryForm";

export default function Home() {
  return (
    <div className="container">
      <main className={styles["diary-main"]}>
        <h2 className="heart">2023.06.08의 비밀일기</h2>
        <DiaryForm></DiaryForm>
      </main>
      <section>
        <h2 className="a11y-hidden">일기 목록</h2>
        <ul></ul>
      </section>
    </div>
  );
}
