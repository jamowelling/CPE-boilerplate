/**
 * BLOCK: my-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
import { TextControl } from '@wordpress/components';
//  Import CSS.
import './editor.scss';
import './style.scss';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
registerBlockType( 'cgb/top-nav', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'CPE Top Nav' ), // Block title.
	icon: 'menu', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'corteva', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'corteva-blocks' ),
		__( 'Top Nav' ),
	],
	// attributes and setAttributes is the gutenberg version of state and setState
	attributes: {
		searchEnabled: {
			type: 'boolean',
			default: true,
		},
		links: {
			type: 'array',
			default: new Array( 6 ).fill( {
				displayName: '',
				href: '',
			} ),
		},
	},
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
		const toggleSearch = () => {
			const { attributes, setAttributes } = props;
			setAttributes( {
				searchEnabled: ! attributes.searchEnabled,
			} );
		};

		return (
			<div className={ props.className }>
				<h4>Global Header (Top Nav)</h4>
				<label>
					<input onClick={ toggleSearch } type="checkbox" checked={ props.attributes.searchEnabled } />
					Text Search
				</label>
				<ul>
					{
						props.attributes.links.map( ( link, idx ) => {
							return <li key={ link.displayName }>
								<div>{ idx + 1 }</div>
								<TextControl
									label="Display Name"
									value={ props.attributes.links[ idx ].displayName }
									onChange={ newValue => props.setAttributes( { links: [
										...props.attributes.links.slice( 0, idx ),
										{
											...props.attributes.links[ idx ],
											displayName: newValue,
										},
										...props.attributes.links.slice( idx + 1 ),
									] } ) }
								/>
								<TextControl
									label="URL or slug"
									value={ props.attributes.links[ idx ].href }
									onChange={ newValue => props.setAttributes( { links: [
										...props.attributes.links.slice( 0, idx ),
										{
											...props.attributes.links[ idx ],
											href: newValue,
										},
										...props.attributes.links.slice( idx + 1 ),
									] } ) }
									help="External links should include the full URL (e.g. https://www.google.com). Links to other pages in the Product Explore should be everything after the base url (e.g. products for www.example.com/products)"
								/>
							</li>;
						} )
					}
				</ul>
			</div>
		);
	},
	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
		return (
			<div className={ props.className }>
			</div>
		);
	},
} );
