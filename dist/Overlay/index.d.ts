import React from 'react';
import { type OverlayProps } from 'react-bootstrap/Overlay';
import { type OverlayTriggerProps, type OverlayTriggerType } from 'react-bootstrap/OverlayTrigger';
import PropTypes from 'prop-types';
declare function Overlay(props: OverlayProps): import("react/jsx-runtime").JSX.Element;
declare namespace Overlay {
    var propTypes: {
        /** Specifies the content of the `Overlay`. */
        children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        /**
         * A component instance, DOM node, or function that returns either.
         * The overlay will be positioned in relation to the target.
         */
        container: PropTypes.Requireable<NonNullable<((...args: any[]) => any) | PropTypes.ReactComponentLike | null | undefined>>;
        /** Callback fired before the `Overlay` transitions in. */
        onEnter: PropTypes.Requireable<(...args: any[]) => any>;
        /** Callback fired after the `Overlay` finishes transitioning in. */
        onEntered: PropTypes.Requireable<(...args: any[]) => any>;
        /** Callback fired as the `Overlay` begins to transition in. */
        onEntering: PropTypes.Requireable<(...args: any[]) => any>;
        /** Callback fired right before the `Overlay` transitions out */
        onExit: PropTypes.Requireable<(...args: any[]) => any>;
        /** Callback fired after the `Overlay` finishes transitioning out. */
        onExited: PropTypes.Requireable<(...args: any[]) => any>;
        /** Callback fired as the Overlay begins to transition out. */
        onExiting: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * A callback invoked by the overlay when it wishes to be hidden.
         * Required if `rootClose` is specified.
         */
        onHide: PropTypes.Requireable<(...args: any[]) => any>;
        /** The placement of the `Overlay` in relation to it's target. */
        placement: PropTypes.Requireable<import("@popperjs/core").Placement>;
        /** A set of popper options and props passed directly to `Popper`. */
        popperConfig: PropTypes.Requireable<PropTypes.InferProps<{}>>;
        /** Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay. */
        rootClose: PropTypes.Requireable<boolean>;
        /** Specify event for triggering a “root close” toggle. */
        rootCloseEvent: PropTypes.Requireable<string>;
        /** Set the visibility of the `Overlay`. */
        show: PropTypes.Requireable<boolean>;
        /**
         * The visibility of the `Overlay`. `show` is a controlled prop so should
         * be paired with `onToggle` to avoid breaking user interactions.
         *
         * Manually toggling show does not wait for delay to change the visibility.
         *
         * Controls `onToggle`.
         */
        target: PropTypes.Requireable<NonNullable<((...args: any[]) => any) | PropTypes.ReactComponentLike | null | undefined>>;
        /**
         * Animate the entering and exiting of the Overlay. `true` will use the `<Fade>` transition,
         * or a custom react-transition-group `<Transition>` component can be provided.
         */
        transition: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
    };
    var defaultProps: {
        container: undefined;
        onEnter: undefined;
        onEntered: undefined;
        onEntering: undefined;
        onExit: undefined;
        onExited: undefined;
        onExiting: undefined;
        onHide: undefined;
        placement: string;
        popperConfig: {};
        rootClose: boolean;
        rootCloseEvent: undefined;
        show: boolean;
        target: undefined;
        transition: React.ForwardRefExoticComponent<import("react-bootstrap/Fade").FadeProps & React.RefAttributes<import("react-transition-group/Transition").default<any>>>;
    };
}
declare function OverlayTrigger(props: OverlayTriggerProps): import("react/jsx-runtime").JSX.Element;
declare namespace OverlayTrigger {
    var propTypes: {
        /** Specifies the content of the `OverlayTrigger`. */
        children: PropTypes.Validator<NonNullable<NonNullable<PropTypes.ReactElementLike | ((...args: any[]) => any) | null | undefined>>>;
        /** An element or text to overlay next to the target. */
        overlay: PropTypes.Validator<NonNullable<NonNullable<PropTypes.ReactElementLike | ((...args: any[]) => any) | null | undefined>>>;
        /** The initial visibility state of the `Overlay`. */
        defaultShow: PropTypes.Requireable<boolean>;
        /** A millisecond delay amount to show and hide the `Overlay` once triggered. */
        delay: PropTypes.Requireable<PropTypes.InferPropsInner<Pick<{}, never>> & Partial<PropTypes.InferPropsInner<Pick<{}, never>>>>;
        /** The initial flip state of the `Overlay`. */
        flip: PropTypes.Requireable<boolean>;
        onHide: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * A callback that fires when the user triggers a change in tooltip visibility.
         * `onToggle` is called with the desired next show, and generally should be
         * passed back to the `show` prop. `onToggle` fires after the configured `delay`.
         *
         * Controls `show`.
         */
        onToggle: PropTypes.Requireable<(...args: any[]) => any>;
        /** The placement of the `Overlay` in relation to it's target. */
        placement: PropTypes.Requireable<import("@popperjs/core").Placement>;
        /** A `Popper.js` config object passed to the the underlying popper instance. */
        popperConfig: PropTypes.Requireable<PropTypes.InferProps<{}>>;
        /**
         * The visibility of the `Overlay`. `show` is a controlled prop so should
         * be paired with `onToggle` to avoid breaking user interactions.
         *
         * Manually toggling show does not wait for delay to change the visibility.
         *
         * Controls `onToggle`.
         */
        show: PropTypes.Requireable<boolean>;
        target: PropTypes.Requireable<EventTarget>;
        /** Specify which action or actions trigger `Overlay` visibility. */
        trigger: PropTypes.Requireable<NonNullable<OverlayTriggerType | (OverlayTriggerType | null | undefined)[] | null | undefined>>;
    };
    var defaultProps: {
        defaultShow: boolean;
        delay: undefined;
        flip: undefined;
        onHide: undefined;
        onToggle: undefined;
        placement: undefined;
        popperConfig: {};
        show: undefined;
        target: undefined;
        trigger: string[];
    };
}
export { OverlayTrigger };
export default Overlay;
