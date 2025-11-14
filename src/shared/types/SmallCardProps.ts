import type { IconType } from "react-icons";

export type SmallCardProps = {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    className?: string;
    icon?: IconType;
    iconSize?: number | string;
    iconClassName?: string;
    link?: string;
    target?: string;
};