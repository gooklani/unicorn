/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Full-screen.
 *
 * @function
 * @since       1.0.0
 * @name 		Fullscreen
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <Fullscreen />
 */
export default ( props ) => (
	<Icon
		d="M16 2V0h5a3 3 0 013 3v5h-2V3a1 1 0 00-1-1h-5zm0 20v2h5a3 3 0 003-3v-5h-2v5a1 1 0 01-1 1h-5zM8 0v2H3a1 1 0 00-1 1v5H0V3a3 3 0 013-3h5zm0 22v2H2a2 2 0 01-2-2v-6h2v5a1 1 0 001 1h5z"
		{ ...props }
	/>
);
