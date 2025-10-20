import React from "react";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    classArray?: string[];
    href?: string;
    children?: React.ReactNode;
}

/**
 * Simple Button that accepts `classArray` (string[]) and optional `href`.
 * - If `href` is provided it renders an <a> element.
 * - Otherwise it renders a <button>.
 */
const Button: React.FC<ButtonProps> = ({ classArray = [], href, children, ...rest }) => {
    const className = classArray.join(" ").trim();

    if (!href) {
        return (
            <button className={className} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
                {children}
            </button>
        );
    }

    return (
        <a
            href={href}
            className={className}
            {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
>
            {children}
        </a>
    );
};

export default Button;