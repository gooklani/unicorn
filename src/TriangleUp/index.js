/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Triangle up.
 *
 * @function
 * @since       1.0.0
 * @name 		TriangleUp
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <TriangleUp />
 */
export default ( props ) => (
	<Icon
		d="M19.933 16.429l-7.147-8.492a1.03 1.03 0 00-1.576 0L4.062 16.43h15.871zm-5.57-9.819a3.09 3.09 0 00-4.73 0l-7.147 8.492c-1.128 1.34-.176 3.387 1.576 3.387h15.871c1.752 0 2.705-2.047 1.577-3.387L14.362 6.61z"
		{ ...props }
	/>
);
