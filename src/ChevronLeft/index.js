/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Chevron left.
 *
 * @function
 * @since       1.0.0
 * @name 		ChevronLeft
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <ChevronLeft />
 */
export default ( props ) => (
	<Icon
		d="M8.744 12.665a1 1 0 01.01-1.518l8.59-7.282a1.002 1.002 0 00-1.293-1.532L7.37 9.628a3 3 0 00-.024 4.573l8.699 7.462a1.004 1.004 0 001.312-1.52l-8.613-7.478z"
		{ ...props }
	/>
);
