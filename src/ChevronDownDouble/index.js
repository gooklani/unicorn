/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Chevron down double.
 *
 * @function
 * @since       1.0.0
 * @name 		ChevronDownDouble
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <ChevronDownDouble />
 */
export default ( props ) => (
	<Icon
		d="M12.856 12.25a1 1 0 01-1.518.009L3.861 3.646A1.004 1.004 0 002.34 4.958l7.462 8.699a3 3 0 004.574-.024l7.294-8.681a1.002 1.002 0 00-1.532-1.293l-7.282 8.59zm0 6a1 1 0 01-1.518.009L3.861 9.646a1.004 1.004 0 00-1.521 1.312l7.462 8.699a3 3 0 004.574-.024l7.294-8.681a1.002 1.002 0 00-1.532-1.293l-7.282 8.59z"
		{ ...props }
	/>
);
