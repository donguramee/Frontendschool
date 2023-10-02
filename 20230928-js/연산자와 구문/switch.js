switch (조건) {
	case 값1:
		//조건이 '값1'일 때 실행
		break //break 가 없으면 값이 1이어서 실행되고도 밑으로 넘어가서 실행
	case 값2:
		//조건이 '값2'일 때 실행
		break
	default:
		//조건이 '값1'도 '값2'도 아닐 때 실행

-----예제-----
function price(fruit) {
	let p 
	switch (fruit) {
		case 'Apple':
			p = 1000
			break
		case 'Banana':
			p = 1500
			break
		case 'Cherry':
			p = 2000
			break
		default:
			p = 0
	}
	return p
}

console.log(price('Apple')) //1000 출력
console.log(price('Banana')) //1500 출력
console.log(price('Cherry')) //2000 출력
console.log(price('Hello')) //0 출력

상황에 따라 break를 없애고 return을 사용했을 경우->
function price(fruit) {
	switch (fruit) {
		case 'Apple':
			return 1000
			break
		case 'Banana':
			return 1500
			break
		case 'Cherry':
			return 2000
			break
		default:
			return 0
	}
}

console.log(price('Apple')) //1000 출력
console.log(price('Banana')) //1500 출력
console.log(price('Cherry')) //2000 출력
console.log(price('Hello')) //0 출력