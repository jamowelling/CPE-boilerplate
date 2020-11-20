import { Button, TextControl } from '@wordpress/components';

const LinkableElement = ( props ) => {
	const {
		titleLabel,
		linkLabel,
		handleInputChange,
		handleAddNew,
		handleRemove,
		addNewTitle,
		list,
	} = props;

	return (
		<div>

			<Button
				isPrimary
				onClick={ handleAddNew }
			>
				{ addNewTitle }
			</Button>
			{
				list.map( item => {
					return (
						<div
							key={ item.id }
						>
							<TextControl
								label={ titleLabel }
								value={ item.title }
								onChange={ ( val ) => handleInputChange( val, 'title', item.id ) }
							/>

							<TextControl
								label={ linkLabel }
								value={ item.url }
								onChange={ ( val ) => handleInputChange( val, 'url', item.id ) }
							/>
							{
								list.length > 1 ?
									(
										<div>
											<Button
												isSecondary
												onClick={ () => handleRemove( item.id ) }
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
	);
};

export default LinkableElement;
