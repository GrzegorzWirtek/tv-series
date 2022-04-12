import EmptyImage from '../EmptyImage/EmptyImage';
import './People.scss';

const People = ({ people }) => {
	const dateNow = new Date();
	const year = dateNow.getFullYear();

	const peopleArr = people.map((item) => {
		const { character, person } = item;

		const age = person.birthday ? year - person.birthday.slice(0, 4) : null;
		return (
			<article className='person' key={person.id}>
				{character.image ? (
					<img
						src={character.image.medium}
						alt={person.name}
						className='person__img'
					/>
				) : (
					<EmptyImage subClass={'person__subclass'} />
				)}
				<p className='person__name'>{person.name}</p>
				<p className='person__age'>(age: {age})</p>
				<p className='person__as'>as</p>
				<p className='person__character'>{character.name}</p>
			</article>
		);
	});

	return (
		<>
			<p className='people__title'>Cast</p>
			<section className='people'>{peopleArr}</section>
		</>
	);
};

export default People;
