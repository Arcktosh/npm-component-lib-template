import { CSSProperties, DetailedHTMLProps, FunctionComponent } from 'react'

export interface IButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string
    color?: string
}

export const Button: FunctionComponent<IButtonProps> = (props) => {
    const { children, backgroundColor, color, style } = props

    let _style: CSSProperties = style || {}

    /** Override Defaults */
    if (backgroundColor && _style) _style.backgroundColor = backgroundColor
    if (color && _style) _style.color = color

    return (
        <button style={_style} {...props}>
            {children}
        </button>
    )
}
