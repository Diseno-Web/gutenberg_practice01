/**
 * BLOCK: rs-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { InspectorAdvancedControls, InnerBlocks, RichText, MediaUpload, PlainText } = wp.editor;
const { createHigherOrderComponent, withState } = wp.compose;
const { registerBlockType } = wp.blocks;
const { Button, ButtonGroup, ToggleControl, ColorPicker } = wp.components;

const { __ } = wp.i18n; // Import __() from wp.i18n


/*
InspectorAdvancedControls es un tag que muestra todo su contenido en el lado derecho del editor del bloque

<InspectorAdvancedControls>
	<PanelColorSettings 
		title={ __( 'Background Color', 'atomic-blocks' ) }
		initialOpen={ false }
		colorSettings={ [ {
			value: profileBackgroundColor,
			onChange:  onChangeBackgroundColor,
			label: __( 'Background Color', 'atomic-blocks' ),
		} ] }
	>
	</PanelColorSettings >
</InspectorAdvancedControls>

*/


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
registerBlockType('cgb/block-rs-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('rs-block - CGB Block'), // Block title.
	icon: 'universal-access-alt', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__('rs-block — CGB Block'),
		__('CGB Example'),
		__('create-guten-block'),
	],

	attributes: {
		title: {
			source: 'text',
			selector: '.card__title'
		},
		body: {
			type: 'array',
			source: 'children',
			selector: '.card__body'
		},
		imageAlt: {
			attribute: 'alt',
			selector: '.card__image'
		},
		imageUrl: {
			attribute: 'src',
			selector: '.card__image'
		},
		color: 'String',
		layerColor:{
			type: 'string',
			default: 'rgba(21,186,200,0.6)'
		},
		visibleLayer:{
			type: 'Boolean',
			default: true
		},
		img_background:{
			type: 'Bolean',
			default: true
		}
	},


	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function ({ attributes, className, setAttributes, props }) {
		// Creates a <p class='wp-block-cgb-block-rs-block'></p>.

		const {
			img_background,
			profileBackgroundColor,
			visibleLayer,
			layerColor,
		} = attributes;

		const {
			PanelColorSettings,
		} = wp.editor;

		const MyButtonGroup = () => (
			<ButtonGroup>
				<Button isPrimary>Button 1</Button>
				<Button isPrimary>Button 2</Button>
			</ButtonGroup>
		);





		const MyColorPicker = withState({
			color: attributes.layerColor,
		})(({ color, setState }) => {
			return (
				<ColorPicker
					color={layerColor}
					value={layerColor}
					onChangeComplete={(value) => setAttributes( { layerColor: value.hex } )}
				/>
			);
		});



		function onChangeBackgroundColor(event) {

			attributes.profileBackgroundColor = event

			console.log(event.rgba)

		};



		const getImageButton = (openEvent) => {
			if (attributes.imageUrl) {
				return (
					<img
						src={attributes.imageUrl}
						onClick={openEvent}
						className="image"
					/>
				);
			}
			else {
				return (
					<div className="button-container">
						<Button
							onClick={openEvent}
							className="button button-large"
						>
							Imagen de Fondo
				  </Button>
					</div>
				);
			}
		};


		return (


			<div className={ className }>
				<MediaUpload
					onSelect={media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url }); }}
					type="image"
					value={attributes.imageID}
					render={({ open }) => getImageButton(open)}
				/>

				<InspectorAdvancedControls>

					<PanelColorSettings
						title={__('Background Color', 'atomic-blocks')}
						initialOpen={false}
						colorSettings={[{
							value: profileBackgroundColor,
							onChange: onChangeBackgroundColor,
							label: __('Background Color', 'atomic-blocks'),
						}]}
					>
					</PanelColorSettings >

					<MyButtonGroup></MyButtonGroup>

					<MyColorPicker></MyColorPicker>

					<ToggleControl
						label={__('Mostrar Imagen de Fondo')}
						checked={!!img_background}
						onChange={() => setAttributes({ img_background: !img_background })}
						help={!!img_background ? __('Mostrar Background de Imgen.') : __('Ocultar Background de Imagen.')}
					/>

					<ToggleControl
						label={__('Activar Overlay')}
						checked={!!visibleLayer}
						onChange={() => setAttributes({ visibleLayer: !visibleLayer })}
						help={!!visibleLayer ? __('Mostrar Overlay.') : __('Ocultar Overlay.')}
					/>

				</InspectorAdvancedControls>

				<PlainText
					onChange={content => setAttributes({ title: content })}
					value={attributes.title}
					placeholder="Your card title"
					keepPlaceholderOnFocus="true"
					className="heading"
				/>

				<RichText
					onChange={content => setAttributes({ body: content })}
					value={attributes.body}
					multiline="p"
					placeholder="Your card text"
					keepPlaceholderOnFocus="true"
					formattingControls={['bold', 'italic', 'underline']}
					isSelected={attributes.isSelected}
					style = {{ color: layerColor }}
				/>

				<InnerBlocks /> 
			</div>



		);

		/*return (
			
			 <div className={ props.className }>
                <InnerBlocks />
	         </div>
		);*/
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function (props) {

		
		return (
			<section className={props.className}>
				
				<InnerBlocks.Content />
			</section>
		);
	},
});
