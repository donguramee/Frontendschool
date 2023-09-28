for (초기화; 조건; 증감) {
	//반복 실행할 코드
}
-----예제-----
for (let i = 0; i < 10; i += 1) {   //i는 숫자 0으로 시작해서 10보다 작으니 반복이 시작될 것이고 반복이 끝나면 i가 1 증가함
	console.log(i)
}
//
0
1
2
3
4
5
6
7
8
9가 출력

----------
For of 반복문 - 배열데이터에 사용

-일반 for 반복문
const fruits = ['Apple', 'Banana', 'Cherry']

for (let i = 0; i < fruits.length; i += 1) {
	console.log(fruits[i])
}
-for of 반복문
const fruits = ['Apple', 'Banana', 'Cherry']

for (cosnt a of fruits) {
	console.log(a) //a는 자유롭게 적용 가능
}
//
Apple
Banana
Cherry 출력

-----예제-----
const user = [
	{
		name: 'Rami',
		age: 30
	},
	{
		name: 'Neo',
		age: 34
	},
	{
		name: 'DongDong',
		age: 25
	}
]

for (let i = 0; i < users.length; i += 1) {
	console.log(user[])
}
//
{name: 'Rami', age: '30'}
{name: 'Neo', age: '34'}
{name: 'DongDong', age: '25'}출력

for (const user of users) {
	console.log(user)
}
//
{name: 'Rami', age: '30'}
{name: 'Neo', age: '34'}
{name: 'DongDong', age: '25'}출력 <-간소화 하기위해 for of 반복문 사용 가능

----------
For in 반복문 - 객체데이터에 사용

const user = {
	name: 'Rami',
	age: '30',
	isValid: true,
	email: 'sanulim94@naver.com'
}

for (const key in user) {  //user객체의 key를 출력 
	console.log(key)
}
//
Rami
30
isValid
sanulim94@naver.com 출력

console.log(user['name']) // Rami 출력

for (const key in user) {
	console.log(key)
	console.log(user[key])
}
//
name
Rami
isValid
true
email
sanulim94@naver.com 출력 ->순서대로 출력이 안될 수 있음