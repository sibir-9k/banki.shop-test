import birthOfVenus from '../assets/birth-of-Venus.jpg';
import secretEvening from '../assets/secret-evening.jpg';
import creationOfAdam from '../assets/creation-of-Adam.jpg';
import anatomyLesson from '../assets/anatomy-lesson.jpg';

const data = [
	{
		id: 1,
		imgUrl: birthOfVenus,
		title: '«Рождение Венеры» Сандро Боттичелли',
		oldPrice: 2000000,
		newPrice: 1000000,
	},
	{
		id: 2,
		imgUrl: secretEvening,
		title: 'Тайная вечеря»  Леонардо да Винчи',
		newPrice: 3000000,
	},
	{
		id: 3,
		imgUrl: creationOfAdam,
		title: '«Сотворение Адама» Микеланджело',
		oldPrice: 6000000,
		newPrice: 5000000,
	},
	{
		id: 4,
		imgUrl: anatomyLesson,
		title: '«Урок анатомии»  Рембрандт',
	},
];


export default data;