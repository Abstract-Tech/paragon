import React from 'react';
import PropTypes from 'prop-types';
export declare const MODAL_DIALOG_CLOSE_LABEL = "Close";
interface Props {
    /** Specifies the content of the dialog */
    children: React.ReactNode;
    /** The aria-label of the dialog */
    title: string;
    /** A callback to close the modal dialog, e.g. when Escape is pressed */
    onClose: () => void;
    /** Is the modal dialog open or closed? */
    isOpen?: boolean;
    /** The close 'x' icon button in the top right of the dialog box */
    hasCloseButton?: boolean;
    /** Size determines the maximum width of the dialog box */
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';
    /** The visual style of the dialog box */
    variant?: 'default' | 'warning' | 'danger' | 'success' | 'dark';
    /** The label supplied to the close icon button if one is rendered */
    closeLabel?: string;
    /** Specifies class name to append to the base element */
    className?: string;
    /**
     * Determines where a scrollbar should appear if a modal is too large for the
     * viewport. When false, the ``ModalDialog``. Body receives a scrollbar, when true
     * the browser window itself receives the scrollbar.
     */
    isFullscreenScroll?: boolean;
    /** To show full screen view on mobile screens */
    isFullscreenOnMobile?: boolean;
    /** Prevent clicking on the backdrop or pressing Esc to close the modal */
    isBlocking?: boolean;
    /** Specifies the z-index of the modal */
    zIndex?: number;
    /** Specifies whether overflow is visible in the modal */
    isOverflowVisible?: boolean;
}
declare function ModalDialog({ children, title, isOpen, onClose, size, variant, hasCloseButton, closeLabel, isFullscreenScroll, className, isFullscreenOnMobile, isBlocking, zIndex, isOverflowVisible, }: Props): import("react/jsx-runtime").JSX.Element;
declare namespace ModalDialog {
    var propTypes: {
        /**
         *  Specifies the content of the dialog
         */
        children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        /**
         * The aria-label of the dialog
         */
        title: PropTypes.Validator<string>;
        /**
         * A callback to close the modal dialog
         */
        onClose: PropTypes.Validator<(...args: any[]) => any>;
        /**
         * Is the modal dialog open or closed
         */
        isOpen: PropTypes.Requireable<boolean>;
        /**
         * The close 'x' icon button in the top right of the dialog box
         */
        hasCloseButton: PropTypes.Requireable<boolean>;
        /**
         * Sizes determine the maximum width of the dialog box
         */
        size: PropTypes.Requireable<string>;
        /**
         * The visual style of the dialog box
         */
        variant: PropTypes.Requireable<string>;
        /**
         * The label supplied to the close icon button if one is rendered
         */
        closeLabel: PropTypes.Requireable<string>;
        /**
         *  Specifies class name to append to the base element
         */
        className: PropTypes.Requireable<string>;
        /**
         * Determines where a scrollbar should appear if a modal is too large for the
         * viewport. When false, the ``ModalDialog``. Body receives a scrollbar, when true
         * the browser window itself receives the scrollbar.
         */
        isFullscreenScroll: PropTypes.Requireable<boolean>;
        /**
         * To show full screen view on mobile screens
         */
        isFullscreenOnMobile: PropTypes.Requireable<boolean>;
        /**
         * Prevent clicking on the backdrop or pressing Esc to close the modal
         */
        isBlocking: PropTypes.Requireable<boolean>;
        /**
         * Specifies the z-index of the modal
         */
        zIndex: PropTypes.Requireable<number>;
        /** Specifies whether overflow is visible in the modal */
        isOverflowVisible: PropTypes.Requireable<boolean>;
    };
    var Header: import("react-bootstrap/esm/helpers").BsPrefixRefForwardingComponent<"div", import("./ModalDialogHeader").Props>;
    var Title: any;
    var Footer: any;
    var CloseButton: any;
    var Body: any;
    var Hero: any;
}
export default ModalDialog;
