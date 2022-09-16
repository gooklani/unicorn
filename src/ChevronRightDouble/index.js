/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Chevron right double.
 *
 * @function
 * @since       1.0.0
 * @name 		ChevronRightDouble
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <ChevronRightDouble />
 */
export default ( props ) => (
	<Icon
		d="M18.25 11.147a1 1 0 01.008 1.518l-8.612 7.478a1.004 1.004 0 001.312 1.52l8.698-7.462a3 3 0 00-.023-4.573l-8.682-7.295A1.002 1.002 0 009.66 3.865l8.59 7.282zm-6 0a1 1 0 01.008 1.518l-8.612 7.478a1.004 1.004 0 001.312 1.52l8.698-7.462a3 3 0 00-.023-4.573L4.951 2.333A1.002 1.002 0 003.66 3.865l8.59 7.282z"
		{ ...props }
	/>
);
