import React from 'react';
import { motion } from 'framer-motion';
import { aboutAnim, iconsAnim } from './Education.anime';
import { useChangeDocumentTitle } from '../../helpers/useChangeDocumentTitle';

export default function Education({ pageTitle }) {
	useChangeDocumentTitle(pageTitle);
	return (
		<motion.section className='about' variants={aboutAnim} initial='init' animate='anim' exit='end'>
			<motion.h3 variants={iconsAnim}> The University of Tokyo </motion.h3>
			<br/>
			<motion.h5 variants={iconsAnim}>- Bachelor's degree in Computer Science -</motion.h5>
		</motion.section>
	);
}
