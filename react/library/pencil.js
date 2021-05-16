/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const pencil = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M10.93 4.63l6.914 11.975.096 2.855-1.068.691-2.486-1.55L7.548 6.759c.504-.686.996-1.168 1.566-1.508.499-.297 1.079-.5 1.816-.62zm1.707-1.043L19.7 15.822c.082.142.127.302.133.466l.215 6.365a1 1 0 01-1.528.883l-5.405-3.37a1 1 0 01-.337-.348l-8.7-15.07a.966.966 0 01-.009-.966C5.488 1.33 6.961.502 10.12.302c.37-.024.719.17.904.492l1.56 2.701h.051l.002.092zm-2.237.125a5.766 5.766 0 00-1.798.68c-.603.36-1.115.834-1.595 1.429l-.892-1.545c.472-.713.888-1.095 1.321-1.343.469-.268 1.115-.47 2.178-.582l.786 1.36z"
		/>
	</SVG>
);

export default pencil;
