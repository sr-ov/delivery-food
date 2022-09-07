import { PropsWithChildren } from 'react'
import { CSSTransition } from 'react-transition-group'

import styles from './Fade.module.css'

interface FadeProps {
	start: boolean
}

const Fade = ({ children, start }: PropsWithChildren<FadeProps>) => {
	return (
		<CSSTransition
			in={start}
			timeout={200}
			mountOnEnter
			unmountOnExit
			classNames={styles}
		>
			{children}
		</CSSTransition>
	)
}

export default Fade
