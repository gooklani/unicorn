/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Menu.
 *
 * @function
 * @since       1.0.0
 * @name 		Menu
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <Menu />
 */
export default ( props ) => (
	<Icon d="M3 4a1 1 0 000 2h18a1 1 0 100-2H3zm-1 8a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zm0 7a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z" { ...props } />
);
