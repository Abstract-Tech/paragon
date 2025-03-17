import React from 'react';
import PropTypes from 'prop-types';
export declare const TOAST_CLOSE_LABEL_TEXT = "Close";
export declare const TOAST_DELAY = 5000;
interface ToastAction {
    label: string;
    href?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}
interface ToastProps {
    children: string;
    onClose: () => void;
    show: boolean;
    action?: ToastAction;
    closeLabel?: string;
    delay?: number;
    className?: string;
}
declare function Toast({ action, children, className, closeLabel, onClose, show, ...rest }: ToastProps): import("react/jsx-runtime").JSX.Element;
declare namespace Toast {
    var defaultProps: {
        action: null;
        closeLabel: undefined;
        delay: number;
        className: undefined;
    };
    var propTypes: {
        /** A string or an element that is rendered inside the main body of the `Toast`. */
        children: PropTypes.Validator<string>;
        /**
         * A function that is called on close. It can be used to perform
         * actions upon closing of the `Toast`, such as setting the "show"
         * element to false.
         * */
        onClose: PropTypes.Validator<(...args: any[]) => any>;
        /** Boolean used to control whether the `Toast` shows */
        show: PropTypes.Validator<boolean>;
        /**
         * Fields used to build optional action button.
         * `label` is a string rendered inside the button.
         * `href` is a link that will render the action button as an anchor tag.
         * `onClick` is a function that is called when the button is clicked.
         */
        action: PropTypes.Requireable<PropTypes.InferProps<{
            label: PropTypes.Validator<string>;
            href: PropTypes.Requireable<string>;
            onClick: PropTypes.Requireable<(...args: any[]) => any>;
        }>>;
        /**
         * Alt text for the `Toast`'s dismiss button. Defaults to 'Close'.
         */
        closeLabel: PropTypes.Requireable<string>;
        /** Time in milliseconds for which the `Toast` will display. */
        delay: PropTypes.Requireable<number>;
        /** Class names for the `BaseToast` component */
        className: PropTypes.Requireable<string>;
    };
}
export default Toast;
