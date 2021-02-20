import React, { useState } from 'react';
import Spinner from '../components/Spinner';

const Test = () => {
	let [values, setValues] = useState({
		loading: true,
	});

	//destructuring
	const { loading } = values;

	const clickHandler = () => {
		setValues({ loading: !loading });
	};
	return (
		<div className="container">
			<br />
			<h1>테스트 해보고 싶은거 아무거나 여기서 해보셔용🦄 </h1>
			<div style={{ textAlign: 'center', marginTop: '50px' }}>
				<button onClick={clickHandler}>
					{loading ? 'Stop Spinner' : 'Start Spinner'}
				</button>
			</div>
			<Spinner loading={loading} />
		</div>
	);
};

export default Test;
