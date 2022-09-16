/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Check circle.
 *
 * @function
 * @since       1.0.0
 * @name 		CheckCircle
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <CheckCircle />
 */
export default ( props ) => (
	<Icon
		d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-7.98-5.038a1 1 0 111.619 1.176l-6.467 8.9a1 1 0 01-1.397.222l-3.194-2.32a1 1 0 011.174-1.619l2.389 1.73 5.877-8.089z"
		{ ...props }
	/>
);
