import tailwind from '../../Assets/images/skills/tailwindcss.png';
import javascript from '../../Assets/images/skills/javascript.png';
import typescript from '../../Assets/images/skills/typescript.png';
import react from '../../Assets/images/skills/react.png';
import redux from '../../Assets/images/skills/redux.png';
import angular from '../../Assets/images/skills/angular.png';
import vue from '../../Assets/images/skills/vuejs.png';
import php from '../../Assets/images/skills/php.png';
import laravel from '../../Assets/images/skills/laravel.png';
import nodejs from '../../Assets/images/skills/nodejs.png';
import mysql from '../../Assets/images/skills/mysql.png';
import mongo from '../../Assets/images/skills/mongodb.png';
import postsql from '../../Assets/images/skills/postgresql.png';
import rust from '../../Assets/images/skills/rust.png';
import contract from '../../Assets/images/skills/contract.png';
import solidity from '../../Assets/images/skills/solidity.png';
import web3 from '../../Assets/images/skills/web3.png';

export const skillCat = {
	web: {
		categoryName: 'Frontend Dev',
		percentage: 100,
		skillList: [
			{ name: 'Tailwind CSS', icon: tailwind },
			{ name: 'JavaScript', icon: javascript },
			{ name: 'TypeScript', icon: typescript },
			{ name: 'React', icon: react },
			{ name: 'Redux', icon: redux },
			{ name: 'React Native', icon: react },
			{ name: 'Angular.js', icon: angular },
			{ name: 'Vue.js', icon: vue },
		],
	},
	game: {
		categoryName: 'Backend Dev',
		percentage: 100,
		skillList: [
			{ name: 'PHP', icon: php },
			{ name: 'Laravel', icon: laravel },
			{ name: 'Node.js', icon: nodejs },
			{ name: 'MySQL', icon: mysql },
			{ name: 'MongoDB', icon: mongo },
			{ name: 'PostgreSQL', icon: postsql },
		],
	},
	Blockchain: {
		categoryName: 'Blockchain Dev',
		percentage: 100,
		skillList: [
			{ name: 'Rust', icon: rust },
			{ name: 'Smart Contract', icon: contract },
			{ name: 'Solidity', icon: solidity },
			{ name: 'Web3.js', icon: web3 },
		],
	},
	soft: {
		categoryName: ['Creative', 'Patient', 'Enthusiastic', 'Hardworking', 'Teamplayer'],
		percentage: 100,
	},
};
