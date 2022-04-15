import EmptyImage from '../EmptyImage/EmptyImage';
import './People.scss';

const People = ({ people, isRole, isCrew, isFullCast, title }) => {
	const dateNow = new Date();
	const year = dateNow.getFullYear();

	const peopleArr = people.map((item) => {
		const { character, person, type } = item;
		const whatRole = isFullCast
			? person
			: isRole
			? character.image
				? character
				: person
			: person;

		const age = person.birthday
			? person.deathday
				? `${person.birthday.slice(0, 4)}-${person.deathday.slice(0, 4)}`
				: `age: ${year - person.birthday.slice(0, 4)}`
			: null;

		return (
			<article className='person' key={person.id}>
				{whatRole.image ? (
					<img
						src={whatRole.image.medium}
						alt={person.name}
						className='person__img'
					/>
				) : (
					<EmptyImage subClass={'person__subclass'} />
				)}
				<p className='person__name'>{person.name}</p>
				{person.birthday && <p className='person__age'>{age}</p>}
				{!isCrew && <p className='person__as'>as</p>}
				<p className='person__character'>{isCrew ? type : character.name}</p>
			</article>
		);
	});

	return (
		<>
			<p className='people__title'>{title}</p>
			<section className='people'>{peopleArr}</section>
		</>
	);
};

export default People;
