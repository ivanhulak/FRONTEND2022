"use strict";
let a = ''; //first number
let b = ''; //second number
let sign = ''; //sign math operation
let finish = false; 

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['+','-','x','/'];
const other_actions = ['sin', 'cos', 'asinh', 'acosh','tan', 'π', 'ln', 'e',
							 'x2', 'x3', '10x', 'ex', 'x!', 'Random', '√x', '√x3' ,'x-1',
							 'log10'];

let out = document.querySelector('.calc__screen p');

function clearAll(){
	a = '';
	b = '';
	sign = '';
	finish = false;
	out.textContent = 0;
}
function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}

// ***********  Additional Functions  ******************
let more = document.querySelector('.more');
let calc_main = document.querySelector('.calc__main');
let calc_more = document.querySelector('.calc__more');
let calc_screen = document.querySelector('.calc__screen');

more.addEventListener('click', function(){
	more.classList.toggle('active');
	calc_main.classList.toggle('active');
	calc_more.classList.toggle('active');
	calc_screen.classList.toggle('active');
});

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
	// pressed no button (space between buttons)
	if (!event.target.classList.contains('btn')) return;
	// pressed button ac (clearAll)
	if (event.target.classList.contains('ac')) return;

	out.textContent = '';
	// receive value from pressed button
	const key = event.target.textContent;

	// check if pressed 0-9 or dot (.)
	if (digit.includes(key)){
		if (b === '' && sign === ''){
			a += key;
			out.textContent = a;
		}
		else if (a!=='' && b!=='' && finish){
			b = key;
			finish = false;
			out.textContent = b;

		} else {
			b += key;
			out.textContent = b;
		}
	};
	// check if pressed sign (-,+,/,x)
	if (action.includes(key)){
		sign = key;
		out.textContent = sign;
		return;
	};
	// when equal pressed
	if (key === '='){
		if (b === '') b = a;
		switch (sign){
			case '+':
				let res_p = (+a) + (+b);
				a = (Number.isInteger(res_p)) ? res_p : res_p.toFixed(4);
				break;
			case '-':
				let res_m = a - b;
				a = (Number.isInteger(res_m)) ? res_m : res_m.toFixed(4);
				break;
			case 'x':
				let res_mult = a * b;
				a = (Number.isInteger(res_mult)) ? res_mult : res_mult.toFixed(4);
				break;
			case '/':
				if (b === '0'){
					out.textContent = 'Ошибка';
					a = '';
					b = '';
					sign = '';
					return;
				};
				a = (a / b).toFixed(5);
				break;
		};
		finish = true;
		out.textContent = a;
	};
	if (key === '%'){
		let percent = a / 100;
		a = (Number.isInteger(percent * 10000)) ? percent : percent.toFixed(6);
		out.textContent = percent;
		finish = true;
	};
}


document.querySelector('.buttons__more').onclick = (event) => {
	// pressed no button (space between buttons)
	if (!event.target.classList.contains('btn')) return;
	// pressed button ac (clearAll)
	if (event.target.classList.contains('ac')) return;

	out.textContent = '';
	// receive value from pressed button
	const key = event.target.textContent;


	if (other_actions.includes(key)){
		switch (key){
			case 'cos':
				a = (Number.isInteger(Math.cos(a))) ? Math.cos(a) : Math.cos(a).toFixed(4);
				break;
			case 'sin':
				a = (Number.isInteger(Math.sin(a))) ? Math.sin(a) : Math.sin(a).toFixed(4);
				break;
			case 'acosh':
				a = (Number.isInteger(Math.acosh(a))) ? Math.acosh(a) : Math.acosh(a).toFixed(4);
				break;
			case 'asinh':
				a = (Number.isInteger(Math.asinh(a))) ? Math.asinh(a) : Math.asinh(a).toFixed(4);
				break;
			case 'tan':
				a = (Number.isInteger(Math.tan(a))) ? Math.tan(a) : Math.tan(a).toFixed(4);
				break;
			case 'π':
				if (a === ''){
					var res_pi = Math.PI;
				} else res_pi = Math.PI * a;
				a = (Number.isInteger(res_pi)) ? res_pi : res_pi.toFixed(6);
				break;
			case 'ln':
				a = Math.log(a);
				a = (Number.isInteger(res_ln)) ? res_ln : res_ln.toFixed(6);
				break;
			case 'e':
				if (a === ''){
					var res_e = Math.E;
				} else res_e = Math.E * a;
				a = (Number.isInteger(res_e)) ? res_e : res_e.toFixed(6);
				break;
			case 'x2':
				let x_squre = a * a;
				a = (Number.isInteger(x_squre)) ? x_squre : x_squre.toFixed(6);
				break;
			case 'x3':
				let x_cube = a * a * a;
				a = (Number.isInteger(x_cube)) ? x_cube : x_cube.toFixed(6);
				break;
			case '10x':
				let ten_x = Math.pow(10, a);
				a = (Number.isInteger(ten_x)) ? ten_x : ten_x.toFixed(6);
				break;
			case 'ex':
				let e_degree_x = Math.pow(Math.E, a);
				a = (Number.isInteger(e_degree_x)) ? e_degree_x : e_degree_x.toFixed(6);
				break;
			case 'Random':
				a = Math.random().toFixed(6);
				break;
			case 'x!':
				let factorial_x = factorialize(a);
				a = (Number.isInteger(factorial_x)) ? factorial_x : factorial_x.toFixed(6);
				break;
			case '√x':
				let square_root = Math.pow(a, 0.5);
				a = (Number.isInteger(square_root)) ? square_root : square_root.toFixed(6);
				break;
			case '√x3':
				let cube_root = Math.pow(a, 1/3);
				a = (Number.isInteger(cube_root)) ? cube_root : cube_root.toFixed(6);
				break;
			case 'x-1':
				let x_degree_min_one = Math.pow(a, -1);
				a = (Number.isInteger(x_degree_min_one)) ? x_degree_min_one : x_degree_min_one.toFixed(6);
				break;
			case 'log10':
				let log10 = Math.log10(a);
				a = (Number.isInteger(log10)) ? log10 : log10.toFixed(6);
				break;
		};
		finish = true;
		out.textContent = a;
	};
};



















