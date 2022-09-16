/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Link.
 *
 * @function
 * @since       1.0.0
 * @name 		Link
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <Link />
 */
export default ( props ) => (
	<Icon
		d="M21.216 6.524l-4.49 4.49-.943.942a.667.667 0 000 .943 1.334 1.334 0 001.886 0l4.962-4.96a4.65 4.65 0 00-6.577-6.577l-4.96 4.96a1.336 1.336 0 000 1.889.67.67 0 00.945 0l.942-.942-.002-.003 4.49-4.49a2.65 2.65 0 013.747 3.748zM2.784 17.476l4.49-4.49.943-.942a.667.667 0 000-.943 1.334 1.334 0 00-1.886 0L1.37 16.062a4.65 4.65 0 106.576 6.576l4.96-4.96a1.336 1.336 0 000-1.889.668.668 0 00-.945 0l-.942.942.003.003-4.49 4.49a2.65 2.65 0 01-3.748-3.748zm12.243-8.504a1 1 0 00-1.414 0l-4.646 4.646a1 1 0 101.414 1.415l4.646-4.647a1 1 0 000-1.414z"
		{ ...props }
	/>
);
