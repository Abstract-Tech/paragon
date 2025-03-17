import { type TooltipProps as BaseTooltipProps } from 'react-bootstrap/Tooltip';
import type { ComponentWithAsProp } from '../utils/types/bootstrap';
interface TooltipProps extends BaseTooltipProps {
    variant?: 'light';
}
declare const Tooltip: ComponentWithAsProp<'div', TooltipProps>;
export default Tooltip;
