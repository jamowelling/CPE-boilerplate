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

const ALLOWED_MEDIA_TYPES = [ 'video' ];

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
			default: '#FFFFFF'
		},
		textContentIcon: {
			type: 'boolean',
		},
		textContentHeadlineEnabled: {
			type: 'boolean',
			default: true,
		},
		textContentHeadline: {
			type: 'string',
			source: 'html',
			selector: 'h1',
		},
		textContentSubHeadingEnabled: {
			type: 'boolean',
			default: true,
		},
		textContentSubHeading: {
			type: 'string',
			source: 'html',
			selector: 'h5',
		},
		textContentBodyEnabled: {
			type: 'boolean',
			default: true,
		},
		textContentBody: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
		callToActionEnabled: {
			type: 'boolean',
			default: true,
		},
		callToActionText: {
			type: 'string',
			default: 'Call To Action',
		},
		callToActionLocation: {
			type: 'string',
			default: '',
		},
		callToActionButtonColor: {
			type: 'string',
			default: '#0072ce',
		},
		callToActionButtonTextColor: {
			type: 'string',
			default: '#FFFFFF',
		},
		mediaAlignment: {
			type: 'string',
			default: 'left',
		},
		media: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		src: {
			type: 'string',
			default: ''
		},
		video: {
			type: 'string',
			default: ''
		},
		inlineBlockStyle: {
			type: 'object',
		}
	},
	edit: ( props ) => {
		const containerStyle = {
			border: 'black solid 1px',
			width: '100%',
			'border-radius': '2px',
			background: props.attributes.backgroundColor,
		};
		const flexContainerStyle = {
			display: 'flex',
		};
		const flexChildrenStyle = {
			'flex-grow': 1,
		};
		props.attributes.inlineBlockStyle = {
			display: 'inline-flex',
			margin: 0,
			border: 0,
			cursor: 'pointer',
			'-webkit-appearance': 'none',
			background: 'none',
			transition: 'box-shadow 0.1s linear',
			'align-items': 'center',
			'box-sizing': 'border-box',
			padding: '6px 12px',
			'border-radius': '4px',
			'background-color': props.attributes.callToActionButtonColor,
			color: props.attributes.callToActionButtonTextColor,
			'text-decoration': 'none',
		};
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
									value={ props.attributes.backgroundColor }
									onChange={ ( color ) => props.setAttributes( { backgroundColor: color } ) }
								/>
							</BaseControl>
						</PanelRow>
					</PanelBody>
					<PanelBody title="Text Content" initialOpen={ false }>
						<ToggleControl
							label="Toggle Icon"
							checked={ props.attributes.textContentIcon }
							onChange={ boolean => props.setAttributes( { textContentIcon: boolean } ) }
						/>
						<ToggleControl
							label="Toggle Headline"
							checked={ props.attributes.textContentHeadlineEnabled }
							onChange={ boolean => props.setAttributes( { textContentHeadlineEnabled: boolean } ) }
						/>
						<ToggleControl
							label="Toggle Sub Heading"
							checked={ props.attributes.textContentSubHeadingEnabled }
							onChange={ boolean => props.setAttributes( { textContentSubHeadingEnabled: boolean } ) }
						/>
						<ToggleControl
							label="Toggle Body"
							checked={ props.attributes.textContentBodyEnabled }
							onChange={ boolean => props.setAttributes( { textContentBodyEnabled: boolean } ) }
						/>
					</PanelBody>
					<PanelBody title="Media Content" initialOpen={ false }>
						<RadioControl
							label="Media Alignment"
							selected={ props.attributes.mediaAlignment }
							options={
								[
									{ label: 'Left', value: 'left' },
									{ label: 'Right', value: 'right' },
								]
							}
							onChange={ value => props.setAttributes( { mediaAlignment: value } ) }
						/>
					</PanelBody>
					<PanelBody title="Call To Action" initialOpen={ false }>
						<ToggleControl
							label="Enable Call To Action"
							checked={ props.attributes.callToActionEnabled }
							onChange={ value => props.setAttributes( { callToActionEnabled: value } ) }
						/>
						<TextControl
							label="Text"
							value={ props.attributes.callToActionText }
							onChange={ value => props.setAttributes( { callToActionText: value } ) }
						/>
						<TextControl
							label="Link"
							value={ props.attributes.callToActionLocation }
							onChange={ value => props.setAttributes( { callToActionLocation: value } ) }
						/>
						<BaseControl
							label="Background Color">
							<ColorPalette
								colors={ BACKGROUND_COLORS }
								value={ props.attributes.callToActionButtonColor }
								onChange={ ( color ) => props.setAttributes( { callToActionButtonColor: color } ) }
							/>
						</BaseControl>
						<BaseControl
							label="Text Color">
							<ColorPalette
								colors={ BACKGROUND_COLORS }
								value={ props.attributes.callToActionButtonTextColor }
								onChange={ ( color ) => props.setAttributes( { callToActionButtonTextColor: color } ) }
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody title="Links" initialOpen={ false }>
					</PanelBody>
				</InspectorControls>

				{
					props.attributes.mediaAlignment === 'left' ?
						<div style={containerStyle}>
							<app-hello-world title={props.attributes.textContentHeadline}>

							</app-hello-world>
							<div style={flexContainerStyle}>
								<div style={flexChildrenStyle}>
									<MediaUploadCheck>
										<MediaUpload
											onSelect={ ( media ) => { props.attributes.src = media.url } }
											allowedTypes={ ALLOWED_MEDIA_TYPES }
											render={ ( { open } ) => (
												<Button onClick={ open }>
													Select Image
												</Button>
											) }
										/>
									</MediaUploadCheck>
									<div style={flexChildrenStyle}>
										<img src={props.attributes.src} />
									</div>
								</div>
								<div style={flexChildrenStyle}>
									{
										props.attributes.textContentHeadlineEnabled ?
											<RichText
												key="textContentHeadline"
												tagName="h1"
												onChange={ value => props.setAttributes( { textContentHeadline: value } ) }
												value={ props.attributes.textContentHeadline }
												placeholder="Headline"
											/> : ''
									}
									{
										props.attributes.textContentSubHeadingEnabled ?
											<RichText
												key="textContentSubHeading"
												tagName="h5"
												onChange={ value => props.setAttributes( { textContentSubHeading: value } ) }
												value={ props.attributes.textContentSubHeading }
												placeholder="Sub Heading"
											/> : ''
									}
									{
										props.attributes.textContentBodyEnabled ?
											<RichText
												key="textContentBody"
												tagName="p"
												onChange={ value => props.setAttributes( { textContentBody: value } ) }
												value={ props.attributes.textContentBody }
												placeholder="Body"
											/> : ''
									}
									{
										props.attributes.callToActionEnabled ?
											<a style={
												props.attributes.inlineBlockStyle
											} href={ '#' }>{ props.attributes.callToActionText }</a>
											: ''
									}
								</div>
							</div>
						</div>
						:
						<div></div>
						//radio right side
				}
			</div>
		);
	},
	save: ( props ) => {
		props.attributes.inlineBlockStyle = {
			display: 'inline-flex',
			margin: 0,
			border: 0,
			cursor: 'pointer',
			'-webkit-appearance': 'none',
			background: 'none',
			transition: 'box-shadow 0.1s linear',
			'align-items': 'center',
			'box-sizing': 'border-box',
			padding: '6px 12px',
			'border-radius': '4px',
			'background-color': props.attributes.callToActionButtonColor,
			color: props.attributes.callToActionButtonTextColor,
			'text-decoration': 'none',
		};
		return (
			<div className={ props.className }>
				<app-hello-world title={props.attributes.textContentHeadline}>

				</app-hello-world>
				<h1>{props.attributes.textContentHeadline}</h1>
				<h5>{props.attributes.textContentSubHeading}</h5>
				<p>{props.attributes.textContentBody}</p>
				<a style={ props.attributes.inlineBlockStyle }>{props.attributes.textContentBody}</a>
			</div>
		);
	},
} );
