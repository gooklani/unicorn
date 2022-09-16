/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Arrow up.
 *
 * @function
 * @since       1.0.0
 * @name 		ArrowUp
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <ArrowUp />
 */
export default ( props ) => (
	<Icon
		d="M13 2.831l7.138 8.213a1.002 1.002 0 001.532-1.292L14.2 1.07c-1.19-1.417-3.193-1.428-4.398-.023L2.34 9.745a1.004 1.004 0 001.52 1.313L11 2.835V23a1 1 0 102 0V2.831z"
		{ ...props }
	/>
);
