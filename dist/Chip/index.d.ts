import React, { KeyboardEventHandler, MouseEventHandler } from 'react';
import { STYLE_VARIANTS } from './constants';
export declare const CHIP_PGN_CLASS = "pgn__chip";
export interface IChip {
    children: React.ReactNode;
    onClick?: KeyboardEventHandler & MouseEventHandler;
    className?: string;
    variant?: typeof STYLE_VARIANTS[keyof typeof STYLE_VARIANTS];
    iconBefore?: React.ComponentType;
    iconBeforeAlt?: string;
    iconAfter?: React.ComponentType;
    iconAfterAlt?: string;
    onIconBeforeClick?: KeyboardEventHandler & MouseEventHandler;
    onIconAfterClick?: KeyboardEventHandler & MouseEventHandler;
    disabled?: boolean;
    isSelected?: boolean;
}
declare const Chip: React.ForwardRefExoticComponent<IChip & React.RefAttributes<HTMLDivElement>>;
export default Chip;
