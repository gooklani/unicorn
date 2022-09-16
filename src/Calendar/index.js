/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Calendar.
 *
 * @function
 * @since       1.0.0
 * @name 		Calendar
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <Calendar />
 */
export default ( props ) => (
	<Icon
		d="M6.5.5A1.5 1.5 0 005 2v.5H2a2 2 0 00-2 2v17a2 2 0 002 2h20a2 2 0 002-2v-17a2 2 0 00-2-2h-3V2a1.5 1.5 0 00-3 0v.5H8V2A1.5 1.5 0 006.5.5zm1.5 4h8V5a1.5 1.5 0 003 0v-.5h2a1 1 0 011 1v3H2v-3a1 1 0 011-1h2V5a1.5 1.5 0 103 0v-.5zm-6 6h20v10a1 1 0 01-1 1H3a1 1 0 01-1-1v-10z"
		{ ...props }
	/>
);
