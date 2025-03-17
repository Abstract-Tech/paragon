import React, { KeyboardEventHandler, MouseEventHandler } from 'react';
import PropTypes from 'prop-types';
import { STYLE_VARIANTS } from './constants';
export type ChipIconProps = {
    className: string;
    src: React.ComponentType;
    variant: typeof STYLE_VARIANTS[keyof typeof STYLE_VARIANTS];
    disabled?: boolean;
} & ({
    onClick: KeyboardEventHandler<HTMLButtonElement> & MouseEventHandler<HTMLButtonElement>;
    alt: string;
} | {
    onClick?: undefined;
    alt?: undefined;
});
declare function ChipIcon({ className, src, onClick, alt, variant, disabled, }: ChipIconProps): import("react/jsx-runtime").JSX.Element;
declare namespace ChipIcon {
    var propTypes: {
        className: PropTypes.Validator<string>;
        src: PropTypes.Validator<NonNullable<NonNullable<PropTypes.ReactElementLike | ((...args: any[]) => any) | null | undefined>>>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        alt: PropTypes.Requireable<string>;
        variant: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
    };
    var defaultProps: {
        onClick: undefined;
        alt: undefined;
        variant: "light";
        disabled: boolean;
    };
}
export default ChipIcon;
