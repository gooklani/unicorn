/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Chevron left double.
 *
 * @function
 * @since       1.0.0
 * @name 		ChevronLeftDouble
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <ChevronLeftDouble />
 */
export default ( props ) => (
	<Icon
		d="M11.754 11.147a1 1 0 00-.01 1.518l8.613 7.478a1.004 1.004 0 01-1.312 1.52l-8.699-7.462a3 3 0 01.024-4.573l8.681-7.295a1.002 1.002 0 011.293 1.532l-8.59 7.282zm-6 0a1 1 0 00-.01 1.518l8.613 7.478a1.004 1.004 0 01-1.312 1.52l-8.699-7.462a3 3 0 01.024-4.573l8.681-7.295a1.002 1.002 0 011.293 1.532l-8.59 7.282z"
		{ ...props }
	/>
);
