/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Chevron up double.
 *
 * @function
 * @since       1.0.0
 * @name 		ChevronUpDouble
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <ChevronUpDouble />
 */
export default ( props ) => (
	<Icon
		d="M12.856 5.754a1 1 0 00-1.518-.01l-7.477 8.614a1.004 1.004 0 01-1.521-1.313l7.462-8.698a3 3 0 014.574.023l7.294 8.682a1.002 1.002 0 01-1.532 1.293l-7.282-8.591zm0 6a1 1 0 00-1.518-.01l-7.477 8.614a1.004 1.004 0 01-1.521-1.313l7.462-8.698a3 3 0 014.574.023l7.294 8.682a1.002 1.002 0 01-1.532 1.293l-7.282-8.591z"
		{ ...props }
	/>
);
