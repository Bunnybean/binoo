import URL from '../config';

const header = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
};

const signup = ({ name, email, password }) => {
	return fetch(`${URL}/signup`, {
		method: 'POST',
		headers: header,
		body: JSON.stringify({ name, email, password }),
	})
		.then(response => {
			return response.json();
		})
		.catch(err => {
			console.log(err);
		});
};

const login = ({ email, password }) => {
	return fetch(`${URL}/signin`, {
		method: 'POST',
		headers: header,
		body: JSON.stringify({ email, password }),
	})
		.then(response => {
			return response.json();
		})
		.catch(err => {
			console.log(err);
		});
};

const logout = next => {
	if (typeof window !== 'undefined') {
		localStorage.removeItem('jwtNuser');
		next();

		return fetch(`${URL}/logout`, {
			method: 'GET',
		})
			.then(response => {
				console.log('logout', response);
			})
			.catch(err => console.log);
	}
};

//기존 const authenticate
const jwtNuserToLocalStorage = (data, next) => {
	//data: backend에서 받은 token&user인포
	if (typeof window !== 'undefined') {
		localStorage.setItem('jwtNuser', JSON.stringify(data));
		next();
	}
};

// nav에 로그인을 한 상태면 signout 버튼만 보이게 하고
// 로그인 하지 않은 상태면 signin과 signup 버튼만 보이게 하기위해 만든 함수
// 기존 const isAuthenticated
const isLoginMode = () => {
	// if (typeof window == 'undefined') {
	if (window.localStorage.length == 0) {
		return false;
	}

	// if (localStorage.getItem('jwt')) {
	if (localStorage.getItem('jwtNuser')) {
		return JSON.parse(localStorage.getItem('jwtNuser'));
	} else {
		return false;
	}
};

export { signup, login, logout, jwtNuserToLocalStorage, isLoginMode };
