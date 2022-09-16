/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Chevron down.
 *
 * @function
 * @since       1.0.0
 * @name 		ChevronDown
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <ChevronDown />
 */
export default ( props ) => (
	<Icon
		d="M11.338 15.259a1 1 0 001.518-.01l7.282-8.59a1.002 1.002 0 011.532 1.293l-7.294 8.681a3 3 0 01-4.574.024L2.34 7.958a1.004 1.004 0 011.52-1.312l7.478 8.613z"
		{ ...props }
	/>
);
