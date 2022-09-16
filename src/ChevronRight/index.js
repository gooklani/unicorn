/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Chevron right.
 *
 * @function
 * @since       1.0.0
 * @name 		ChevronRight
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <ChevronRight />
 */
export default ( props ) => (
	<Icon
		d="M15.258 12.665a1 1 0 00-.009-1.518L6.66 3.865a1.002 1.002 0 011.29-1.532l8.682 7.295a3 3 0 01.023 4.573l-8.698 7.462a1.004 1.004 0 01-1.312-1.52l8.612-7.478z"
		{ ...props }
	/>
);
