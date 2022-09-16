/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Triangle right.
 *
 * @function
 * @since       1.0.0
 * @name 		TriangleRight
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <TriangleRight />
 */
export default ( props ) => (
	<Icon
		d="M7.571 4.064l8.492 7.148a1.03 1.03 0 010 1.576L7.57 19.936V4.064zm9.819 5.571a3.09 3.09 0 010 4.73l-8.492 7.147c-1.34 1.128-3.388.175-3.388-1.576V4.064c0-1.751 2.048-2.704 3.388-1.576l8.492 7.147z"
		{ ...props }
	/>
);
