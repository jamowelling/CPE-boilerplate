/* eslint-disable no-shadow */
/**
 * BLOCK: my-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
//  Import CSS.
import './editor.scss';
import './style.scss';

import LinkableElement from './components/linkableElement';

import { InspectorControls } from '@wordpress/block-editor';
import { __experimentalGetSettings } from '@wordpress/date';
import { more } from '@wordpress/icons';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

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
	Button,
	DateTimePicker,
	Flex,
	FlexItem,
	FormFileUpload,
	Icon,
	PanelBody,
	PanelRow,
	TextControl,
	TextareaControl,
} = wp.components;

registerBlockType( 'cgb/article-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'CPE Article Block' ), // Block title.
	icon: 'text', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'corteva-blocks' ),
		__( 'Article Block' ),
		__( 'create-guten-block' ),
	],
	// attributes and setAttributes is the gutenberg version of state and setState
	attributes: {
		media: {
			type: 'object',
			default: null,
		},
		title: {
			type: 'string',
			default: '',
		},
		date: {
			type: 'object',
			default: null,
		},
		description: {
			type: 'string',
			default: '',
		},
		linkList: {
			type: 'array',
			default: [
				{
					id: uuidv4(),
					title: '',
					url: '',
				},
			],
		},
		ctaList: {
			type: 'array',
			default: [
				{
					id: uuidv4(),
					title: '',
					url: '',
				},
			],
		},
		tagList: {
			type: 'array',
			default: [
				{
					id: uuidv4(),
					value: '',
				},
			],
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
		const {
			attributes: {
				ctaList,
				date,
				description,
				media,
				linkList,
				tagList,
				title,
			},
			setAttributes,
		} = props;

		// wp function
		// eslint-disable-next-line no-restricted-syntax
		const settings = __experimentalGetSettings();

		// To know if the current timezone is a 12 hour time with look for "a" in the time format.
		// We also make sure this a is not escaped by a "/".
		const is12HourTime = /a(?!\\)/i.test(
			settings.formats.time
				.toLowerCase() // Test only the lower case a
				.replace( /\\\\/g, '' ) // Replace "//" with empty strings
				.split( '' ).reverse().join( '' ) // Reverse the string and test for "a" not followed by a slash
		);

		const handleLinkableInputChange = ( val, fieldName, id, attributeListName, list ) => {
			const updatedList = list.map( ( tempLink ) => tempLink.id === id ? { ...tempLink, [ fieldName ]: val } : tempLink );
			setAttributes( { [ attributeListName ]: updatedList } );
		};

		return (
			<div className={ props.className }>
				<div>
					<div
						style={ { height: 200, width: '100%', background: '#F5F5F5' } }
					></div>

					<p
						style={ {
							fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif',
							fontSize: 13,
							marginBottom: 8,
						} }
					>
						{
							date ? moment( date ).format( 'll' ) : 'May 8, 1926'
						}
					</p>

					<h2
						style={ {
							fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif',
							marginTop: 8,
							marginBottom: 8,
						} }
					>
						{
							title ? title : 'Article Title'
						}
					</h2>

					<div>
						<Flex justify="start">
							<FlexItem>
								<Button
									isSecondary
								>
									Events
								</Button>
							</FlexItem>
							<FlexItem>
								<Button
									isSecondary
								>
									Spotlight
								</Button>
							</FlexItem>
							<FlexItem>
								<Button
									isSecondary
								>
									News
								</Button>
							</FlexItem>
						</Flex>
					</div>

					<div>
						<p
							style={ {
								fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif',
								fontSize: 13,
								marginBottom: 8,
							} }
						>
							{
								description ? description									:
									`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
								ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
								ullamco laboris...`
							}

						</p>
					</div>

					<Button
						isPrimary
					>
						CTA Button
					</Button>

				</div>
				<InspectorControls>

					<PanelBody title="Article Media" icon={ more } initialOpen={ false }>
						<PanelRow>
							<div>
								<FormFileUpload
									style={ { marginBottom: 10 } }
									isPrimary
									accept="image/*, video/*"
									onChange={ ( e ) => {
										setAttributes( { media: e.target.files } );
									} }
									icon="insert"
								>
									Upload Image/Video
								</FormFileUpload>
								{ media ?
									(
										<div
											style={ { display: 'flex', justifyContent: 'center', alignItems: 'center' } }
										>

											<Button
												onClick={ () => setAttributes( { media: null } ) }
												style={ { marginRight: 8 } }
											>
												<Icon icon="no" />
											</Button>
											{ media[ 0 ].name }
										</div>
									) :
									'' }
							</div>
						</PanelRow>
					</PanelBody>

					<PanelBody title="Article Date" icon={ more } initialOpen={ false }>
						<PanelRow>
							<DateTimePicker
								currentDate={ date }
								onChange={ ( date ) => setAttributes( { date } ) }
								locale={ settings.l10n.locale }
								is12Hour={ is12HourTime }
							/>
						</PanelRow>
					</PanelBody>

					<PanelBody title="Article Title" icon={ more } initialOpen={ false }>
						<PanelRow>
							<TextControl
								label="Add Title"
								value={ title }
								onChange={ ( title ) => setAttributes( { title } ) }
							/>
						</PanelRow>
					</PanelBody>

					<PanelBody title="Article Description" icon={ more } initialOpen={ false }>
						<PanelRow>
							<TextareaControl
								label="Add Description"
								value={ description }
								onChange={ ( description ) => setAttributes( { description } ) }
							/>
						</PanelRow>
					</PanelBody>

					<PanelBody title="Article Call To Action Button (CTA)" icon={ more } initialOpen={ false }>
						<PanelRow>
							<LinkableElement
								list={ ctaList }
								addNewTitle="Add New CTA"
								titleLabel="Add CTA Title"
								linkLabel="Add CTA URL"
								handleAddNew={ () => {
									setAttributes( { ctaList: [ ...ctaList, { id: uuidv4(), title: '', url: '' } ] } );
								} }
								handleRemove={ ( id ) => {
									const filtered = ctaList.filter( tempCta => tempCta.id !== id );
									setAttributes( { ctaList: filtered } );
								} }
								handleInputChange={ ( val, fieldName, id ) => handleLinkableInputChange( val, fieldName, id, 'ctaList', ctaList ) }
							/>
						</PanelRow>
					</PanelBody>

					<PanelBody title="Article Optional Link" icon={ more } initialOpen={ false }>
						<PanelRow>
							<LinkableElement
								list={ linkList }
								addNewTitle="Add New Link"
								titleLabel="Add Link Title"
								linkLabel="Add Link URL"
								handleAddNew={ () => {
									setAttributes( { linkList: [ ...linkList, { id: uuidv4(), title: '', url: '' } ] } );
								} }
								handleRemove={ ( id ) => {
									const filtered = linkList.filter( tempLink => tempLink.id !== id );
									setAttributes( { linkList: filtered } );
								} }
								handleInputChange={ ( val, fieldName, id ) => handleLinkableInputChange( val, fieldName, id, 'linkList', linkList ) }
							/>
						</PanelRow>
					</PanelBody>

					<PanelBody title="Article Tags" icon={ more } initialOpen={ false }>
						<PanelRow>
							<div>
								<Button
									isPrimary
									onClick={ () => {
										setAttributes( { tagList: [ ...tagList, { id: uuidv4(), value: '' } ] } );
									} }
								>
									Add New Tag
								</Button>

								{
									tagList.map( tag => {
										return (
											<div
												key={ tag.id }
											>
												<TextControl
													label="Add New Tag"
													value={ tag.value }
													onChange={ ( value ) => {
														const updatedList = tagList.map( ( tempTag ) => tempTag.id === tag.id ? { ...tempTag, value } : tempTag );
														setAttributes( { tagList: updatedList } );
													} }
												/>
												{
													tagList.length > 1 ?
														(
															<div>
																<Button
																	isSecondary
																	onClick={ () => {
																		const filtered = tagList.filter( tempTag => tempTag.id !== tag.id );
																		setAttributes( { tagList: filtered } );
																	} }
																>
																	Remove
																</Button>
																<hr></hr>
															</div>
														) : ''
												}
											</div>
										);
									} )
								}
							</div>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
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
				<p>Article Block Lives!</p>
			</div>
		);
	},
} );
