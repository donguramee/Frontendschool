
const user = null 

console.log(user?.name) //null출력 null, undefined는 뒤에 .(점표기법)이 붙을 수 없기때문에 ?를 붙혀준다

-----예제-----
const userA = {
	name: 'RAMI',
	age: 30,
	address: {
		country: 'Korea',
		city: 'Seoul'
	}
}
const userB = {
	name: 'NEO',
	age: 22,
}

function getCity(user) {
	return user.address?.city  //점표기로 체이닝 ?을 붙일 경우 데이터가 없다면 undefiend라고 출력
}

console.log(getCity(userA))  //Seoul 출력
console.log(getCity(userB))  //undefined 출력->city뒤에 또는 연산자(||)를 적용-> return user.address?.city|| '주소없음' 으로 코드작성 시 '주소없음'출력

