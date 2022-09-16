/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Arrow right.
 *
 * @function
 * @since       1.0.0
 * @name 		ArrowRight
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <ArrowRight />
 */
export default ( props ) => (
	<Icon
		d="M21.17 12.999l-8.213 7.138a1.002 1.002 0 001.293 1.532l8.681-7.47c1.418-1.191 1.429-3.193.024-4.399l-8.699-7.46a1.004 1.004 0 00-1.312 1.52L21.167 11H1a1 1 0 100 2h20.17z"
		{ ...props }
	/>
);
