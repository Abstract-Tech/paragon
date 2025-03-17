import { type ContainerProps as RBContainerProps } from 'react-bootstrap/Container';
import type { ComponentWithAsProp } from '../utils/types/bootstrap';
declare enum ContainerSizeClass {
    xs = "container-mw-xs",
    sm = "container-mw-sm",
    md = "container-mw-md",
    lg = "container-mw-lg",
    xl = "container-mw-xl"
}
export type ContainerSize = keyof typeof ContainerSizeClass;
interface ContainerProps extends RBContainerProps {
    size?: ContainerSize;
}
type ContainerType = ComponentWithAsProp<'div', ContainerProps>;
declare const Container: ContainerType;
export default Container;
