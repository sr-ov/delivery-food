import React from 'react'
import cn from 'classnames'
import { ButtonProps } from 'react-html-props'

function Button({ children, className, ...props }: ButtonProps) {
	return (
		<button className={cn('button', className)} {...props}>
			<span className="button-cart-svg"></span>
			<span className="button-text">{children}</span>
		</button>
	)
}

export default Button
