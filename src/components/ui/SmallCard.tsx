import React from "react";
import type { IconType } from "react-icons";

// src/components/ui/SmallCard.tsx

type SmallCardProps = {
    icon?: IconType;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    className?: string;
    iconSize?: number | string;
    iconClassName?: string;
};

const SmallCard: React.FC<SmallCardProps> = ({
    icon: Icon,
    title,
    subtitle,
    className = "",
    iconSize = 24,
    iconClassName = "",
}) => {
    return (
        <div className={`small-card ${className}`.trim()}>
            {Icon && <Icon className={`small-card_icon ${iconClassName}`.trim()} size={iconSize} />}
            <h4>{title}</h4>
            {subtitle && <small>{subtitle}</small>}
        </div>
    );
};

export default SmallCard;