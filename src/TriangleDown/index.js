/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Triangle down.
 *
 * @function
 * @since       1.0.0
 * @name 		TriangleDown
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <TriangleDown />
 */
export default ( props ) => (
	<Icon
		d="M19.933 7.571l-7.147 8.492a1.03 1.03 0 01-1.576 0L4.062 7.57h15.871zm-5.57 9.819a3.09 3.09 0 01-4.73 0L2.486 8.898C1.358 7.558 2.31 5.51 4.062 5.51h15.871c1.752 0 2.705 2.048 1.577 3.388l-7.148 8.492z"
		{ ...props }
	/>
);
