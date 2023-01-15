import './App.css';

const App = () => {
	const saludo = 'Hola Mundo';
	const time = new Date().toLocaleDateString();
	return (
		<div className='App'>
			<h1>{`${saludo} desde una variable`}</h1>
			<h1>{`Fecha ${time}`}</h1>
		</div>
	);
};

export default App;
