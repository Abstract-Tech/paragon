import React from 'react';
import PropTypes from 'prop-types';
interface Props {
    /** Specifies contents of the component. */
    children: React.ReactNode;
    /** Specifies whether the component should be displayed with inline styling. */
    isInline?: boolean;
}
declare function FormLabel({ children, isInline, ...props }: Props & React.ComponentPropsWithoutRef<'label'>): React.ReactElement<Omit<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref">, string | React.JSXElementConstructor<any>>;
declare namespace FormLabel {
    var propTypes: {
        /** Specifies class name to append to the base element. */
        className: PropTypes.Requireable<string>;
        /** Specifies contents of the component. */
        children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        /** Specifies whether the component should be displayed with inline styling. */
        isInline: PropTypes.Requireable<boolean>;
    };
}
export default FormLabel;
