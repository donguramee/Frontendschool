let n = 0
while (n < 4) {
	console.log(n)
	n += 1
}
//
0
1
2
3 출력 ->1이 추가가안된다면 무한으로 반복하기 때문에 멈출 수 있음

----------
Do While 반복문 - 거짓이 있더라도 최초 한번은 실행

let n = 0

do {
	console.log(n)
	n += 1
} while (n < 4)
//
0
1
2
3