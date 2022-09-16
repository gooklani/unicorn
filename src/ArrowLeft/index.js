/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Arrow left.
 *
 * @function
 * @since       1.0.0
 * @name 		ArrowLeft
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <ArrowLeft />
 */
export default ( props ) => (
	<Icon
		d="M2.833 12.999l8.213 7.138a1.002 1.002 0 01-1.293 1.532l-8.681-7.47C-.346 13.008-.357 11.006 1.048 9.8l8.699-7.46a1.004 1.004 0 011.312 1.52L2.836 11H23a1 1 0 110 2H2.833z"
		{ ...props }
	/>
);
