/**
 * BLOCK: my-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
//  Import CSS.
import './editor.scss';
import './style.scss';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
const {
	RichText,
} = wp.blockEditor;
registerBlockType( 'cgb/block-my-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'CPE Sample Block' ), // Block title.
	icon: 'buddicons-replies', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'corteva-blocks' ),
		__( 'Sample Block' ),
		__( 'create-guten-block' ),
	],
	// attributes and setAttributes is the gutenberg version of state and setState
	attributes: {
		inputTitle: {
			type: 'string',
			default: '',
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
		return (
			<div className={ props.className }>
				<h3>— Hello from the backend!.</h3>
				<p>Add text to the input below and preview the page to get a sense for how information is posted</p>
				<RichText
					className="btn btn--primary"
					value={ props.attributes.inputValue }
					placeholder="Place Sample Text"
					onChange={
						// notice, rather than taking in an event as the first argument it takes in 'value'
						( value ) => props.setAttributes( { inputValue: value } )
					}
				/>
				<title
					value={ props.attributes.inputTitle }></title>
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
				<p>— Hello from the frontend.</p>
				<p>{ props.attributes.inputValue }</p>
				<title
					value={ props.attributes.inputTitle }></title>
			</div>
		);
	},
} );
