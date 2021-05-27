/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const x = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M5.177 5.173a1 1 0 000 1.414L10.59 12l-5.41 5.41a1 1 0 101.413 1.415l5.411-5.41 5.407 5.406a1 1 0 001.414-1.414L13.418 12l5.41-5.409a1 1 0 00-1.415-1.414l-5.409 5.409-5.413-5.413a1 1 0 00-1.414 0z"
		/>
	</SVG>
);

export default x;
