# 생성자 함수
생성자 함수는 사용자 정의 객체 타입 또는 내장 객체 타입의 인스턴스를 생성하는
new 연산자와 함께 호출해서 객체를 생성하여 반환하는 함수를 말함.

이후 프로퍼티 혹은 메서드를 추가하여 객체를 완성시킬 수 있음
생성자 함수는 새로운 객체를 만들고 사용자가 요구하는 함수를 구현할 수 있게 해주는데 이렇게 생성된 객체를
"인스턴스" 라고한다.

1)
const player = new Object();

player.name = "choi";
player.sayWinner = function() {
    console.log("Ladies and gentlemen, Champion is "+ this.name);
}

player.sayWinner()

// Ladies and gentlemen, Champion is choi 출력

