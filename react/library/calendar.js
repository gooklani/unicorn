/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const calendar = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M6.5.5A1.5 1.5 0 005 2v.5H2a2 2 0 00-2 2v17a2 2 0 002 2h20a2 2 0 002-2v-17a2 2 0 00-2-2h-3V2a1.5 1.5 0 00-3 0v.5H8V2A1.5 1.5 0 006.5.5zm1.5 4h8V5a1.5 1.5 0 003 0v-.5h2a1 1 0 011 1v3H2v-3a1 1 0 011-1h2V5a1.5 1.5 0 103 0v-.5zm-6 6h20v10a1 1 0 01-1 1H3a1 1 0 01-1-1v-10z"
		/>
	</SVG>
);

export default calendar;
