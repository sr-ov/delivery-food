import { memo } from 'react'
import { InputProps } from 'react-html-props'
import cn from 'classnames'

function Input({ className, ...props }: InputProps) {
	return <input type="text" className={cn('input', className)} {...props} />
}

export default memo(Input)
