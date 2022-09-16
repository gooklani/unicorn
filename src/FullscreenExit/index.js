/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Full-screen exit.
 *
 * @function
 * @since       1.0.0
 * @name 		FullscreenExit
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <FullscreenExit />
 */
export default ( props ) => (
	<Icon
		d="M24 6v2h-5a3 3 0 01-3-3V0h2v5a1 1 0 001 1h5zm0 12v-2h-5a3 3 0 00-3 3v5h2v-5a1 1 0 011-1h5zM0 8V6h5a1 1 0 001-1V0h2v5a3 3 0 01-3 3H0zm0 10v-2h6a2 2 0 012 2v6H6v-5a1 1 0 00-1-1H0z"
		{ ...props }
	/>
);
