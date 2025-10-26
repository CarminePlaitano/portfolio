import React from "react";
import type { IconType } from "react-icons";

type SmallCardProps = {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    className?: string;
    icon?: IconType;
    iconSize?: number | string;
    iconClassName?: string;
    link?: string;
    target?: string;
};

const SmallCard: React.FC<SmallCardProps> = ({
    title,
    subtitle,
    className = "",
    icon: Icon,
    iconSize = 24,
    iconClassName = "",
    link,
    target
}) => {
    if (link) {
        return (
            <a href={link} target={target} className={`small-card ${className}`.trim()}>
                {Icon && <Icon className={`small-card_icon ${iconClassName}`.trim()} size={iconSize} />}
                <h4>{title}</h4>
                {subtitle && <small>{subtitle}</small>}
            </a>
        );
    }

    return (
        <div className={`small-card ${className}`.trim()}>
            {Icon && <Icon className={`small-card_icon ${iconClassName}`.trim()} size={iconSize} />}
            <h4>{title}</h4>
            {subtitle && <small>{subtitle}</small>}
        </div>
    );
};

export default SmallCard;