import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	BaseControl,
	Button,
	ToggleControl,
	TextControl,
	PanelBody,
} = wp.components;
const {
	RichText,
	InspectorControls,
	MediaUploadCheck,
	MediaUpload,
} = wp.blockEditor;

registerBlockType( 'cgb/featured-team-member', {
	title: __( 'CPE Featured Team Member Block' ),
	icon: 'id',
	category: 'corteva',
	keywords: [
		__( 'corteva-blocks' ),
	],
	attributes: {
		textContentH1Enabled: {
			type: 'boolean',
		},
		textContentH1: {
			type: 'string',
		},
		textContentH2Enabled: {
			type: 'boolean',
		},
		textContentH2: {
			type: 'string',
		},
		textContentH3Enabled: {
			type: 'boolean',
		},
		textContentH3: {
			type: 'string',
		},
		textContentDescriptionEnabled: {
			type: 'boolean',
		},
		textContentDescription: {
			type: 'string',
		},
		imageSrc: {
			type: 'string',
		}
	},
	edit: ( props ) => {
		const {
			attributes: {
				textContentH1Enabled,
				textContentH1,
				textContentH2Enabled,
				textContentH2,
				textContentH3Enabled,
				textContentH3,
				textContentDescriptionEnabled,
				textContentDescription,
				imageSrc,
			},
			setAttributes,
		} = props;

		return (
			<div>
				<InspectorControls>
					<PanelBody title="Text Content" initialOpen={ false }>
						<ToggleControl
							label="Toggle H1"
							checked={ textContentH1Enabled }
							onChange={ boolean => setAttributes( { textContentH1Enabled: boolean } ) }
						/>
						{
							textContentH1Enabled ?
								<TextControl
									label="H1"
									value={ textContentH1 }
									onChange={ value => setAttributes( { textContentH1: value }) }
								/>
								: ''
						}
						<ToggleControl
							label="Toggle H2"
							checked={ textContentH2Enabled }
							onChange={ boolean => setAttributes( { textContentH2Enabled: boolean } ) }
						/>
						{
							textContentH2Enabled ?
								<TextControl
									label="H2"
									value={ textContentH2 }
									onChange={ value => setAttributes( { textContentH2: value }) }
								/>
								: ''
						}
						<ToggleControl
							label="H3"
							checked={ textContentH3Enabled }
							onChange={ boolean => setAttributes( { textContentH3Enabled: boolean } ) }
						/>
						{
							textContentH3Enabled ?
								<TextControl
									label="H3"
									value={ textContentH3 }
									onChange={ value => setAttributes( { textContentH3: value }) }
								/>
								: ''
						}
						<ToggleControl
							label="Description"
							checked={ textContentDescriptionEnabled }
							onChange={ boolean => setAttributes( { textContentDescriptionEnabled: boolean } ) }
						/>
						{
							textContentDescriptionEnabled ?
								<TextControl
									label="Description"
									value={ textContentDescription }
									onChange={ value => setAttributes( { textContentDescription: value }) }
								/>
								: ''
						}
					</PanelBody>
					<PanelBody title="Media Content" initialOpen={ false }>
						<BaseControl label="Image Content">
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ ( media ) => { setAttributes( { imageSrc: media.url } ) } }
									allowedTypes={ [ "image" ] }
									render={ ( { open } ) => (
										<Button onClick={ open } isPrimary icon="insert">
											Upload Image Content
										</Button>
									) }
								/>
							</MediaUploadCheck>
						</BaseControl>
					</PanelBody>
				</InspectorControls>
				<div>Text Content</div>
				{
					textContentH1Enabled ?
						<div>H1:</div>
					: ''
				}
				{
					textContentH1Enabled ?
						<RichText
							autoFocus="false"
							value={textContentH1}
							placeholder="H1"
							onChange={
								(value) => setAttributes({textContentH1: value})
							}/>
						: ''
				}
				{
					textContentH2Enabled ?
						<div>H2:</div>
						: ''
				}
				{
					textContentH2Enabled ?
						<RichText
							autoFocus="false"
							value={textContentH2}
							placeholder="H2"
							onChange={
								(value) => setAttributes({textContentH2: value})
							}/>
					: ''
				}
				{
					textContentH3Enabled ?
						<div>H3:</div>
						: ''
				}
				{
					textContentH3Enabled ?
						<RichText
							autoFocus="false"
							value={textContentH3}
							placeholder="H3"
							onChange={
								(value) => setAttributes({textContentH3: value})
							}/>
					: ''
				}
				{
					textContentDescriptionEnabled ?
						<div>Description: {textContentDescription}</div>
						: ''
				}
				<div>Media Content</div>
				<div>Image: <img src={imageSrc} alt/></div>
			</div>
		);
	},
	save: ( props ) => {
		return (
			<div className={ props.className }>
				<p>Saved Featured Team Member Block</p>
			</div>
		);
	},
} );
