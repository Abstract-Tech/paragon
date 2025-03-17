import React from 'react';
import type { ComponentWithAsProp } from '../utils/types/bootstrap';
export interface Props {
    as?: string;
    children: React.ReactNode;
    className?: string;
}
type HeaderType = ComponentWithAsProp<'div', Props>;
declare const ModalDialogHeader: HeaderType;
export default ModalDialogHeader;
