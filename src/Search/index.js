/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Search.
 *
 * @function
 * @since       1.0.0
 * @name 		Search
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <Search />
 */
export default ( props ) => (
	<Icon
		d="M14 8A6 6 0 112 8a6 6 0 0112 0zm-1.094 6.32a8 8 0 111.414-1.414l2.068 2.068a1 1 0 011.141.194l5.786 5.786a1.688 1.688 0 11-2.388 2.388l-5.785-5.786a1 1 0 01-.177-1.176l-2.06-2.06z"
		{ ...props }
	/>
);
