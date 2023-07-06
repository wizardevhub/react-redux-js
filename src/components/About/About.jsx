import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from './Skill/Skill';
import { aboutAnim, iconsAnim } from './About.anim';
import { SKILLS } from './About.constants';
import { useChangeDocumentTitle } from '../../helpers/useChangeDocumentTitle';
import { name } from '../../config/config'

export default function About({ pageTitle }) {
	useChangeDocumentTitle(pageTitle);

	return (
		<motion.section className='about' variants={aboutAnim} initial='init' animate='anim' exit='end'>
			<motion.h3 variants={iconsAnim}>Hello there, my name is</motion.h3>
			<motion.h2 variants={iconsAnim}>{name}</motion.h2>
			<motion.h5 variants={iconsAnim}>- <b>Full Stack | Blockchain | Web3.js Expert</b> -</motion.h5>
			<motion.h5 variants={iconsAnim}>- <b>Frontend</b>, <b>Backend</b>, <b>Blockchain</b> -</motion.h5>

			<motion.div className='skillsContainer' variants={iconsAnim}>
				{SKILLS.map((skill) => (
					<Skill key={skill.name} name={skill.name} icon={skill.icon} />
				))}
			</motion.div>
		</motion.section>
	);
}
