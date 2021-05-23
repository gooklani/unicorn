/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const comment = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M6 3.45h12a4 4 0 014 4v4.064a3.936 3.936 0 01-3.936 3.936c-.469 0-.935.15-1.322.443a4.47 4.47 0 00-1.731 2.74l-2.538-2.539a2.2 2.2 0 00-1.556-.644H7a5 5 0 01-5-5v-3a4 4 0 014-4zm11.948 14.039c-1.047.79-1.16 1.922-.955 3.125l.013.076a11.754 11.754 0 00.172.765c.245.941-.688 1.485-1.375.798L11.06 17.51a.2.2 0 00-.142-.059H7a7 7 0 01-7-7v-3a6 6 0 016-6h12a6 6 0 016 6v4.064a5.936 5.936 0 01-5.936 5.936.196.196 0 00-.116.039zM5.5 6.45a.5.5 0 000 1h13a.5.5 0 000-1h-13zM5 8.95a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zm.5 1.5a.5.5 0 000 1h9a.5.5 0 100-1h-9z"
		/>
	</SVG>
);

export default comment;