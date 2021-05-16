/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const helicopter = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M21.374 9.777l2.122-4.663a1 1 0 10-1.82-.828l-2.118 4.653-5.62.351H10.98c-.087-.466-.46-.863-.981-1.09V6.114l6.122-.08a.898.898 0 00.879-.92.897.897 0 00-.9-.895l-14.222.187A.898.898 0 001 5.324c.006.501.41.902.9.895L8 6.14v2.062c-.538.233-.917.649-.988 1.134A7.858 7.858 0 000 17.147a3.143 3.143 0 003.143 3.143h4.532a6 6 0 005.844-4.64l1.023-4.394 5.191-.324 1.859 2.23a1 1 0 001.536-1.28l-1.754-2.105zM7.857 11.29h4.624l-.91 3.907a4 4 0 01-3.896 3.093H3.143A1.143 1.143 0 012 17.147a5.857 5.857 0 015.857-5.857z"
		/>
	</SVG>
);

export default helicopter;
