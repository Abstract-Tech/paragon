import React from 'react';
import PropTypes from 'prop-types';
declare function ModalBackdrop({ onClick }: {
    onClick?: () => void;
}): import("react/jsx-runtime").JSX.Element;
declare namespace ModalBackdrop {
    var propTypes: {
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
}
declare function ModalContentContainer({ children }: {
    children?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
declare namespace ModalContentContainer {
    var propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
}
interface Props {
    /** Specifies the contents of the modal */
    children: React.ReactNode;
    /** A callback function for when the modal is dismissed */
    onClose: () => void;
    /** Is the modal dialog open or closed */
    isOpen: boolean;
    /** Prevent clicking on the backdrop or pressing Esc to close the modal */
    isBlocking?: boolean;
    /** Specifies the z-index of the modal */
    zIndex?: number;
}
/**
 * The ModalLayer should be used for any component that wishes to engage the user
 * in a "mode" where a layer on top of the application is interactive while the
 * rest of the application is made non-interactive. The assumption made by this
 * component is that if a modal object is visible then it is "enabled"
 */
declare function ModalLayer({ children, onClose, isOpen, isBlocking, zIndex, }: Props): import("react/jsx-runtime").JSX.Element | null;
declare namespace ModalLayer {
    var propTypes: {
        /** Specifies the contents of the modal */
        children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        /** A callback function for when the modal is dismissed */
        onClose: PropTypes.Validator<(...args: any[]) => any>;
        /** Is the modal dialog open or closed */
        isOpen: PropTypes.Validator<boolean>;
        /** Prevent clicking on the backdrop or pressing Esc to close the modal */
        isBlocking: PropTypes.Requireable<boolean>;
        /** Specifies the z-index of the modal */
        zIndex: PropTypes.Requireable<number>;
    };
}
export { ModalBackdrop, ModalContentContainer };
export default ModalLayer;
