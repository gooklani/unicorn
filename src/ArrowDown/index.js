/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Arrow down.
 *
 * @function
 * @since       1.0.0
 * @name 		ArrowDown
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <ArrowDown />
 */
export default ( props ) => (
	<Icon
		d="M13 21.169l7.138-8.213a1.002 1.002 0 011.532 1.292L14.2 22.93c-1.19 1.417-3.193 1.428-4.398.023L2.34 14.255a1.004 1.004 0 011.52-1.313L11 21.166V1a1 1 0 112 0v20.169z"
		{ ...props }
	/>
);
