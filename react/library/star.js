/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const star = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.005 3.308L9.95 8.247a2.2 2.2 0 01-1.856 1.348l-5.332.427 4.062 3.48a2.2 2.2 0 01.71 2.182l-1.242 5.203 4.565-2.788a2.2 2.2 0 012.293 0l4.565 2.788-1.24-5.203a2.2 2.2 0 01.708-2.182l4.063-3.48-5.332-.427a2.2 2.2 0 01-1.856-1.348l-2.054-4.94zM13.39 1.43c-.513-1.232-2.258-1.232-2.77 0L8.104 7.479a.2.2 0 01-.169.122l-6.53.524c-1.33.107-1.87 1.766-.856 2.634l4.975 4.262a.2.2 0 01.065.198l-1.52 6.373c-.31 1.298 1.102 2.324 2.24 1.628l5.591-3.415a.2.2 0 01.209 0l5.59 3.415c1.14.696 2.551-.33 2.242-1.628l-1.52-6.372a.2.2 0 01.064-.199l4.976-4.262c1.013-.868.474-2.527-.856-2.634l-6.53-.524a.2.2 0 01-.17-.122l-2.515-6.05z"
		/>
	</SVG>
);

export default star;
