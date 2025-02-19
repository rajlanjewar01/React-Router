import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchInput() {
	const [term, setTerm] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		navigate(`/search?term=${term}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='input-group mb-3'>
				<input 
					type='text'
					className='form-control'
					placeholder='Search NPM packages'
					value={term}
					onChange={e => setTerm(e.target.value)}
				/>
				<span className="input-group-text"><i className="fa-solid fa-magnifying-glass" role='button'></i></span>
			</div>
		</form>
	);
}
