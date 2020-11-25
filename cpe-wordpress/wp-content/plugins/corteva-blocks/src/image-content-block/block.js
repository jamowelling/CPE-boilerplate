import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	BaseControl,
	Button,
	RadioControl,
	ToggleControl,
	TextControl,
	ColorPalette,
	PanelBody,
	PanelRow,
} = wp.components;
const {
	RichText,
	InspectorControls,
	MediaUploadCheck,
	MediaUpload,
} = wp.blockEditor;

const BACKGROUND_COLORS = [
	{
		color: '#0072ce',
		name: 'Corteva Blue',
		slug: 'corteva-blue',
	},
	{
		color: '#459aff',
		name: 'Candy Blue',
		slug: 'candy-blue',
	},
	{
		color: '#88c9ff',
		name: 'Sky Blue',
		slug: 'sky-blue',
	},
	{
		color: '#F1F3F5',
		name: 'Fill 1',
		slug: 'fill-1',
	},
	{
		color: '#ECF6FF',
		name: 'Fill 2',
		slug: 'fill-2',
	},
	{
		color: '#88C9FF',
		name: 'Fill 3',
		slug: 'fill-3',
	},
	{
		color: '#7A9ECD',
		name: 'Fill 4',
		slug: 'fill-4',
	},
	{
		color: '#464A54',
		name: 'Fill 5',
		slug: 'fill-5',
	},
	{
		color: '#C4C9D4',
		name: 'Fill 6',
		slug: 'fill-6',
	},
	{
		color: '#FFFFFF',
		name: 'Fill 7',
		slug: 'fill-7',
	},
	{
		color: '#000000',
		name: 'Fill 8',
		slug: 'fill-8',
	},
	{
		color: 'radial-gradient(#F1F3F5, #C4C9D4)',
		name: 'Radial Grey Gradient',
		slug: 'radial-grey-gradient',
	},
	{
		color: 'linear-gradient(to bottom, #C4C9D4, #C4C9D4)',
		name: 'Linear Grey Gradient',
		slug: 'linear-grey-gradient',
	},
	{
		color: 'linear-gradient(to bottom, #F5FAFE, #FFFFFF)',
		name: 'Blue White Linear Gradient',
		slug: 'blue-white-linear-gradient',
	},
	{
		color: 'linear-gradient(to bottom, #ECF6FF, #F5FAFE)',
		name: 'Light Blue Linear Gradient',
		slug: 'light-blue-linear-gradient',
	},
	{
		color: 'linear-gradient(to bottom, #FFFFFF, #D8EBFD)',
		name: 'White Blue Linear Gradient',
		slug: 'white-blue-linear-gradient',
	},
	{
		color: 'linear-gradient(to bottom, #FFFFFF, #E1E5EA)',
		name: 'Light Grey Linear Gradient',
		slug: 'light-grey-linear-gradient',
	},
];

registerBlockType( 'cgb/image-content-block', {
	title: __( 'Image Content Block' ),
	icon: 'cover-image',
	category: 'corteva',
	keywords: [
		__( 'corteva-blocks' ),
	],
	attributes: {
		backgroundColor: {
			type: 'string',
		},
		textContentIconEnabled: {
			type: 'boolean',
		},
		textContentIcon: {
			type: 'string',
		},
		textContentHeadlineEnabled: {
			type: 'boolean',
		},
		textContentHeadline: {
			type: 'string',
		},
		textContentSubHeadingEnabled: {
			type: 'boolean',
		},
		textContentSubHeading: {
			type: 'string',
		},
		textContentBodyEnabled: {
			type: 'boolean',
		},
		textContentBody: {
			type: 'string',
		},
		mediaAlignment: {
			type: 'string',
			default: 'left',
		},
		imageSrc: {
			type: 'string',
		},
		videoEnabled: {
			type: 'boolean',
		},
		video: {
			type: 'object',
			default: {
				url: '',
				mime: '',
			}
		},
		callToActionEnabled: {
			type: 'boolean',
		},
		callToActionText: {
			type: 'string',
		},
		callToActionLocation: {
			type: 'string',
		},
		callToActionButtonColor: {
			type: 'string',
		},
		callToActionButtonTextColor: {
			type: 'string',
		},
		linksEnabled: {
			type: 'boolean',
		},
		links: {
			type: 'array',
			default: [{
				href: '',
				displayName: '',
			}],
		}
	},
	edit: ( props ) => {
		const {
			attributes: {
				backgroundColor,
				textContentIconEnabled,
				textContentIcon,
				textContentHeadlineEnabled,
				textContentHeadline,
				textContentSubHeadingEnabled,
				textContentSubHeading,
				textContentBodyEnabled,
				textContentBody,
				mediaAlignment,
				imageSrc,
				videoEnabled,
				video,
				callToActionEnabled,
				callToActionText,
				callToActionLocation,
				callToActionButtonColor,
				callToActionButtonTextColor,
				linksEnabled,
				links,
			},
			setAttributes,
		} = props;

		return (
			<div>
				<InspectorControls>
					<PanelBody title="General" initialOpen={ true }>
						<PanelRow>
							<BaseControl
								id="id"
								label="Background Color">
								<ColorPalette
									colors={ BACKGROUND_COLORS }
									value={ backgroundColor }
									onChange={ ( color ) => setAttributes( { backgroundColor: color } ) }
								/>
							</BaseControl>
						</PanelRow>
					</PanelBody>
					<PanelBody title="Text Content" initialOpen={ false }>
						<ToggleControl
							label="Toggle Icon"
							checked={ textContentIconEnabled }
							onChange={ boolean => setAttributes( { textContentIconEnabled: boolean } ) }
						/>
						{
							textContentIconEnabled ?
								<TextControl
									label="Icon"
									value={ textContentIcon }
									onChange={ value => setAttributes( { textContentIcon: value } ) }
								/>
								: ''
						}
						<ToggleControl
							label="Toggle Headline"
							checked={ textContentHeadlineEnabled }
							onChange={ boolean => setAttributes( { textContentHeadlineEnabled: boolean } ) }
						/>
						{
							textContentHeadlineEnabled ?
								<TextControl
									label="Headline"
									value={ textContentHeadline }
									onChange={ value => setAttributes( { textContentHeadline: value }) }
								/>
								: ''
						}
						<ToggleControl
							label="Toggle Sub Heading"
							checked={ textContentSubHeadingEnabled }
							onChange={ boolean => setAttributes( { textContentSubHeadingEnabled: boolean } ) }
						/>
						{
							textContentSubHeadingEnabled ?
								<TextControl
									label="Sub Heading"
									value={ textContentSubHeading }
									onChange={ value => setAttributes( { textContentSubHeading: value }) }
								/>
								: ''
						}
						<ToggleControl
							label="Toggle Body"
							checked={ textContentBodyEnabled }
							onChange={ boolean => setAttributes( { textContentBodyEnabled: boolean } ) }
						/>
						{
							textContentBodyEnabled ?
								<TextControl
									label="Body"
									value={ textContentBody }
									onChange={ value => setAttributes( { textContentBody: value }) }
								/>
								: ''
						}
					</PanelBody>
					<PanelBody title="Media Content" initialOpen={ false }>
						<RadioControl
							label="Media Alignment"
							selected={ mediaAlignment }
							options={
								[
									{ label: 'Left', value: 'left' },
									{ label: 'Right', value: 'right' },
								]
							}
							onChange={ value => setAttributes( { mediaAlignment: value } ) }
						/>
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
						<BaseControl label="Video Content">
							<ToggleControl
								label="Enable Video Content"
								checked={ videoEnabled }
								onChange={ value => setAttributes( { videoEnabled: value } ) }
							/>
							{
								videoEnabled ?
									<MediaUploadCheck>
										<MediaUpload
											onSelect={ ( media ) => { setAttributes( { video: media } ); } }
											allowedTypes={ [ "video" ] }
											render={ ( { open } ) => (
												<Button onClick={ open } isPrimary icon="insert">
													Upload Video Content
												</Button>
											) }
										/>
									</MediaUploadCheck>
									: ''
							}
						</BaseControl>
					</PanelBody>
					<PanelBody title="Call To Action" initialOpen={ false }>
						<ToggleControl
							label="Enable Call To Action"
							checked={ callToActionEnabled }
							onChange={ value => setAttributes( { callToActionEnabled: value } ) }
						/>
						<TextControl
							label="Text"
							value={ callToActionText }
							onChange={ value => setAttributes( { callToActionText: value } ) }
						/>
						<TextControl
							label="Link"
							value={ callToActionLocation }
							onChange={ value => setAttributes( { callToActionLocation: value } ) }
						/>
						<BaseControl
							label="Background Color">
							<ColorPalette
								colors={ BACKGROUND_COLORS }
								value={ callToActionButtonColor }
								onChange={ ( color ) => setAttributes( { callToActionButtonColor: color } ) }
							/>
						</BaseControl>
						<BaseControl
							label="Text Color">
							<ColorPalette
								colors={ BACKGROUND_COLORS }
								value={ callToActionButtonTextColor }
								onChange={ ( color ) => setAttributes( { callToActionButtonTextColor: color } ) }
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody title="Links" initialOpen={ false }>
						<ToggleControl
							label="Links Enabled"
							checked={ linksEnabled }
							onChange={ boolean => setAttributes( { linksEnabled: boolean } ) }
						/>
						{
							linksEnabled ?
								links.map((link, index) => {
									return <BaseControl label={ "Link " + (index + 1) }>
										<TextControl
											label="Link"
											value={ links[index].link }
											onChange={
												value => {
													links[index] = {
														href: value,
														displayName: links[index].text,
													}
													setAttributes( { links: [...links] } );
												}
											}
										/>
										<TextControl
											label="Display Text"
											value={ links[index].text }
											onChange={
												value => {
													links[index] = {
														href: links[index].link,
														displayName: value,
													}
													setAttributes( { links: [...links] } );
												}
											}
										/>
										<Button isSecondary onClick={ () => {
											links.splice(index, 1);
											setAttributes( { links: [...links] })
										} }>Remove Link</Button>
									</BaseControl>
								})
								: ''
						}
						{
							linksEnabled ?
								<Button isPrimary onClick={ () => {
									let newLinks = [...links, { href: '', displayName: '' }];
									setAttributes( { links: newLinks })
								} }>Add Link</Button>
								: ''
						}
					</PanelBody>
				</InspectorControls>
				<div>General</div>
				<div>Background Color: {backgroundColor}</div>
				<div>Text Content</div>
				{
					textContentIconEnabled ?
						<div>Icon: <i className={`fas ${textContentIcon}`} /></div>
						: ''
				}
				{
					textContentHeadlineEnabled ?
						<div>Headline:</div>
					: ''
				}
				{
					textContentHeadlineEnabled ?
						<RichText
							autoFocus="false"
							value={textContentHeadline}
							placeholder="Headline"
							onChange={
								(value) => setAttributes({textContentHeadline: value})
							}/>
						: ''
				}
				{
					textContentSubHeadingEnabled ?
						<div>Sub Heading: {textContentSubHeading}</div>
					: ''
				}
				{
					textContentBodyEnabled ?
						<div>Body: {textContentBody}</div>
					: ''
				}
				<div>Media Content</div>
				<div>Alignment: {mediaAlignment}</div>
				<div>Image: <img src={imageSrc} alt/></div>
				{
					videoEnabled ?
						<div>Video:
							<video controls>
								<source src={video.url} type={video.mime} />
							</video>
						</div>
					: ''
				}
				{
					callToActionEnabled ?
						<div>
							<div>Call To Action</div>
							<div>Button Text: {callToActionText}</div>
							<div>Button Link: {callToActionLocation}</div>
							<div>Background Color: {callToActionButtonColor}</div>
							<div>Text Color: {callToActionButtonTextColor}</div>
						</div>
					: ''
				}
				{
					linksEnabled ?
						<div>
							<div>Links</div>
							{
								links.map((link, index) => {
									return <div>
										<div>Link {index + 1}</div>
										<div>Link: { links[index].href }</div>
										<div>Display Text: { links[index].displayName }</div>
									</div>;
								})
							}
						</div>
						: ''
				}
			</div>
		);
	},
	save: ( props ) => {
		return (
			<div className={ props.className }>
				<p>Saved Image Content Block</p>
			</div>
		);
	},
} );
