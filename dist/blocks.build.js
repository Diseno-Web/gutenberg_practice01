/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: rs-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar _wp$editor = wp.editor,\n    InspectorAdvancedControls = _wp$editor.InspectorAdvancedControls,\n    InnerBlocks = _wp$editor.InnerBlocks,\n    RichText = _wp$editor.RichText,\n    MediaUpload = _wp$editor.MediaUpload,\n    PlainText = _wp$editor.PlainText;\nvar _wp$compose = wp.compose,\n    createHigherOrderComponent = _wp$compose.createHigherOrderComponent,\n    withState = _wp$compose.withState;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    ButtonGroup = _wp$components.ButtonGroup,\n    ToggleControl = _wp$components.ToggleControl,\n    ColorPicker = _wp$components.ColorPicker;\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\n\n/*\nInspectorAdvancedControls es un tag que muestra todo su contenido en el lado derecho del editor del bloque\n\n<InspectorAdvancedControls>\n\t<PanelColorSettings \n\t\ttitle={ __( 'Background Color', 'atomic-blocks' ) }\n\t\tinitialOpen={ false }\n\t\tcolorSettings={ [ {\n\t\t\tvalue: profileBackgroundColor,\n\t\t\tonChange:  onChangeBackgroundColor,\n\t\t\tlabel: __( 'Background Color', 'atomic-blocks' ),\n\t\t} ] }\n\t>\n\t</PanelColorSettings >\n</InspectorAdvancedControls>\n\n*/\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('cgb/block-rs-block', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('rs-block - CGB Block'), // Block title.\n\ticon: 'universal-access-alt', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('rs-block — CGB Block'), __('CGB Example'), __('create-guten-block')],\n\n\tattributes: {\n\t\ttitle: {\n\t\t\tsource: 'text',\n\t\t\tselector: '.card__title'\n\t\t},\n\t\tbody: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: '.card__body'\n\t\t},\n\t\timageAlt: {\n\t\t\tattribute: 'alt',\n\t\t\tselector: '.card__image'\n\t\t},\n\t\timageUrl: {\n\t\t\tattribute: 'src',\n\t\t\tselector: '.card__image'\n\t\t},\n\t\tcolor: 'String',\n\t\tlayerColor: {\n\t\t\ttype: 'string',\n\t\t\tdefault: 'rgba(21,186,200,0.6)'\n\t\t},\n\t\tvisibleLayer: {\n\t\t\ttype: 'Boolean',\n\t\t\tdefault: true\n\t\t},\n\t\timg_background: {\n\t\t\ttype: 'Bolean',\n\t\t\tdefault: true\n\t\t}\n\t},\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    className = _ref.className,\n\t\t    setAttributes = _ref.setAttributes,\n\t\t    props = _ref.props;\n\n\t\t// Creates a <p class='wp-block-cgb-block-rs-block'></p>.\n\n\t\tvar img_background = attributes.img_background,\n\t\t    profileBackgroundColor = attributes.profileBackgroundColor,\n\t\t    visibleLayer = attributes.visibleLayer,\n\t\t    layerColor = attributes.layerColor;\n\t\tvar PanelColorSettings = wp.editor.PanelColorSettings;\n\n\n\t\tvar MyButtonGroup = function MyButtonGroup() {\n\t\t\treturn wp.element.createElement(\n\t\t\t\tButtonGroup,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tButton,\n\t\t\t\t\t{ isPrimary: true },\n\t\t\t\t\t'Button 1'\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tButton,\n\t\t\t\t\t{ isPrimary: true },\n\t\t\t\t\t'Button 2'\n\t\t\t\t)\n\t\t\t);\n\t\t};\n\n\t\tvar MyColorPicker = withState({\n\t\t\tcolor: attributes.layerColor\n\t\t})(function (_ref2) {\n\t\t\tvar color = _ref2.color,\n\t\t\t    setState = _ref2.setState;\n\n\t\t\treturn wp.element.createElement(ColorPicker, {\n\t\t\t\tcolor: layerColor,\n\t\t\t\tvalue: layerColor,\n\t\t\t\tonChangeComplete: function onChangeComplete(value) {\n\t\t\t\t\treturn setAttributes({ layerColor: value.hex });\n\t\t\t\t}\n\t\t\t});\n\t\t});\n\n\t\tfunction onChangeBackgroundColor(event) {\n\n\t\t\tattributes.profileBackgroundColor = event;\n\n\t\t\tconsole.log(event.rgba);\n\t\t};\n\n\t\tvar getImageButton = function getImageButton(openEvent) {\n\t\t\tif (attributes.imageUrl) {\n\t\t\t\treturn wp.element.createElement('img', {\n\t\t\t\t\tsrc: attributes.imageUrl,\n\t\t\t\t\tonClick: openEvent,\n\t\t\t\t\tclassName: 'image'\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'button-container' },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\tButton,\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tonClick: openEvent,\n\t\t\t\t\t\t\tclassName: 'button button-large'\n\t\t\t\t\t\t},\n\t\t\t\t\t\t'Imagen de Fondo'\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t}\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\tonSelect: function onSelect(media) {\n\t\t\t\t\tsetAttributes({ imageAlt: media.alt, imageUrl: media.url });\n\t\t\t\t},\n\t\t\t\ttype: 'image',\n\t\t\t\tvalue: attributes.imageID,\n\t\t\t\trender: function render(_ref3) {\n\t\t\t\t\tvar open = _ref3.open;\n\t\t\t\t\treturn getImageButton(open);\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(\n\t\t\t\tInspectorAdvancedControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(PanelColorSettings, {\n\t\t\t\t\ttitle: __('Background Color', 'atomic-blocks'),\n\t\t\t\t\tinitialOpen: false,\n\t\t\t\t\tcolorSettings: [{\n\t\t\t\t\t\tvalue: profileBackgroundColor,\n\t\t\t\t\t\tonChange: onChangeBackgroundColor,\n\t\t\t\t\t\tlabel: __('Background Color', 'atomic-blocks')\n\t\t\t\t\t}]\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(MyButtonGroup, null),\n\t\t\t\twp.element.createElement(MyColorPicker, null),\n\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\tlabel: __('Mostrar Imagen de Fondo'),\n\t\t\t\t\tchecked: !!img_background,\n\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\treturn setAttributes({ img_background: !img_background });\n\t\t\t\t\t},\n\t\t\t\t\thelp: !!img_background ? __('Mostrar Background de Imgen.') : __('Ocultar Background de Imagen.')\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\tlabel: __('Activar Overlay'),\n\t\t\t\t\tchecked: !!visibleLayer,\n\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\treturn setAttributes({ visibleLayer: !visibleLayer });\n\t\t\t\t\t},\n\t\t\t\t\thelp: !!visibleLayer ? __('Mostrar Overlay.') : __('Ocultar Overlay.')\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(PlainText, {\n\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\treturn setAttributes({ title: content });\n\t\t\t\t},\n\t\t\t\tvalue: attributes.title,\n\t\t\t\tplaceholder: 'Your card title',\n\t\t\t\tkeepPlaceholderOnFocus: 'true',\n\t\t\t\tclassName: 'heading'\n\t\t\t}),\n\t\t\twp.element.createElement(RichText, {\n\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\treturn setAttributes({ body: content });\n\t\t\t\t},\n\t\t\t\tvalue: attributes.body,\n\t\t\t\tmultiline: 'p',\n\t\t\t\tplaceholder: 'Your card text',\n\t\t\t\tkeepPlaceholderOnFocus: 'true',\n\t\t\t\tformattingControls: ['bold', 'italic', 'underline'],\n\t\t\t\tisSelected: attributes.isSelected,\n\t\t\t\tstyle: { color: layerColor }\n\n\t\t\t}),\n\t\t\twp.element.createElement(InnerBlocks, null)\n\t\t);\n\n\t\t/*return (\n  \t\n  \t <div className={ props.className }>\n                <InnerBlocks />\n          </div>\n  );*/\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tsave: function save(props) {\n\n\t\treturn wp.element.createElement(\n\t\t\t'section',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHJzLWJsb2NrXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgSW5zcGVjdG9yQWR2YW5jZWRDb250cm9scyA9IF93cCRlZGl0b3IuSW5zcGVjdG9yQWR2YW5jZWRDb250cm9scyxcbiAgICBJbm5lckJsb2NrcyA9IF93cCRlZGl0b3IuSW5uZXJCbG9ja3MsXG4gICAgUmljaFRleHQgPSBfd3AkZWRpdG9yLlJpY2hUZXh0LFxuICAgIE1lZGlhVXBsb2FkID0gX3dwJGVkaXRvci5NZWRpYVVwbG9hZCxcbiAgICBQbGFpblRleHQgPSBfd3AkZWRpdG9yLlBsYWluVGV4dDtcbnZhciBfd3AkY29tcG9zZSA9IHdwLmNvbXBvc2UsXG4gICAgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQgPSBfd3AkY29tcG9zZS5jcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCxcbiAgICB3aXRoU3RhdGUgPSBfd3AkY29tcG9zZS53aXRoU3RhdGU7XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIEJ1dHRvbiA9IF93cCRjb21wb25lbnRzLkJ1dHRvbixcbiAgICBCdXR0b25Hcm91cCA9IF93cCRjb21wb25lbnRzLkJ1dHRvbkdyb3VwLFxuICAgIFRvZ2dsZUNvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5Ub2dnbGVDb250cm9sLFxuICAgIENvbG9yUGlja2VyID0gX3dwJGNvbXBvbmVudHMuQ29sb3JQaWNrZXI7XG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxuXG4vKlxuSW5zcGVjdG9yQWR2YW5jZWRDb250cm9scyBlcyB1biB0YWcgcXVlIG11ZXN0cmEgdG9kbyBzdSBjb250ZW5pZG8gZW4gZWwgbGFkbyBkZXJlY2hvIGRlbCBlZGl0b3IgZGVsIGJsb3F1ZVxuXG48SW5zcGVjdG9yQWR2YW5jZWRDb250cm9scz5cblx0PFBhbmVsQ29sb3JTZXR0aW5ncyBcblx0XHR0aXRsZT17IF9fKCAnQmFja2dyb3VuZCBDb2xvcicsICdhdG9taWMtYmxvY2tzJyApIH1cblx0XHRpbml0aWFsT3Blbj17IGZhbHNlIH1cblx0XHRjb2xvclNldHRpbmdzPXsgWyB7XG5cdFx0XHR2YWx1ZTogcHJvZmlsZUJhY2tncm91bmRDb2xvcixcblx0XHRcdG9uQ2hhbmdlOiAgb25DaGFuZ2VCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRsYWJlbDogX18oICdCYWNrZ3JvdW5kIENvbG9yJywgJ2F0b21pYy1ibG9ja3MnICksXG5cdFx0fSBdIH1cblx0PlxuXHQ8L1BhbmVsQ29sb3JTZXR0aW5ncyA+XG48L0luc3BlY3RvckFkdmFuY2VkQ29udHJvbHM+XG5cbiovXG5cbi8qKlxuICogUmVnaXN0ZXI6IGFhIEd1dGVuYmVyZyBCbG9jay5cbiAqXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGJsb2NrIGlzIG1hZGUgZWRpdG9yIGFzIGFuIG9wdGlvbiB0byBhbnlcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9cbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICogQHJldHVybiB7P1dQQmxvY2t9ICAgICAgICAgIFRoZSBibG9jaywgaWYgaXQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDsgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxuICovXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjZ2IvYmxvY2stcnMtYmxvY2snLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oJ3JzLWJsb2NrIC0gQ0dCIEJsb2NrJyksIC8vIEJsb2NrIHRpdGxlLlxuXHRpY29uOiAndW5pdmVyc2FsLWFjY2Vzcy1hbHQnLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG5cdGNhdGVnb3J5OiAnY29tbW9uJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbX18oJ3JzLWJsb2NrIOKAlCBDR0IgQmxvY2snKSwgX18oJ0NHQiBFeGFtcGxlJyksIF9fKCdjcmVhdGUtZ3V0ZW4tYmxvY2snKV0sXG5cblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHRzb3VyY2U6ICd0ZXh0Jyxcblx0XHRcdHNlbGVjdG9yOiAnLmNhcmRfX3RpdGxlJ1xuXHRcdH0sXG5cdFx0Ym9keToge1xuXHRcdFx0dHlwZTogJ2FycmF5Jyxcblx0XHRcdHNvdXJjZTogJ2NoaWxkcmVuJyxcblx0XHRcdHNlbGVjdG9yOiAnLmNhcmRfX2JvZHknXG5cdFx0fSxcblx0XHRpbWFnZUFsdDoge1xuXHRcdFx0YXR0cmlidXRlOiAnYWx0Jyxcblx0XHRcdHNlbGVjdG9yOiAnLmNhcmRfX2ltYWdlJ1xuXHRcdH0sXG5cdFx0aW1hZ2VVcmw6IHtcblx0XHRcdGF0dHJpYnV0ZTogJ3NyYycsXG5cdFx0XHRzZWxlY3RvcjogJy5jYXJkX19pbWFnZSdcblx0XHR9LFxuXHRcdGNvbG9yOiAnU3RyaW5nJyxcblx0XHRsYXllckNvbG9yOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6ICdyZ2JhKDIxLDE4NiwyMDAsMC42KSdcblx0XHR9LFxuXHRcdHZpc2libGVMYXllcjoge1xuXHRcdFx0dHlwZTogJ0Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdH0sXG5cdFx0aW1nX2JhY2tncm91bmQ6IHtcblx0XHRcdHR5cGU6ICdCb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdH1cblx0fSxcblxuXHQvKipcbiAgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG4gICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuICAqXG4gICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKi9cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzLFxuXHRcdCAgICBwcm9wcyA9IF9yZWYucHJvcHM7XG5cblx0XHQvLyBDcmVhdGVzIGEgPHAgY2xhc3M9J3dwLWJsb2NrLWNnYi1ibG9jay1ycy1ibG9jayc+PC9wPi5cblxuXHRcdHZhciBpbWdfYmFja2dyb3VuZCA9IGF0dHJpYnV0ZXMuaW1nX2JhY2tncm91bmQsXG5cdFx0ICAgIHByb2ZpbGVCYWNrZ3JvdW5kQ29sb3IgPSBhdHRyaWJ1dGVzLnByb2ZpbGVCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0ICAgIHZpc2libGVMYXllciA9IGF0dHJpYnV0ZXMudmlzaWJsZUxheWVyLFxuXHRcdCAgICBsYXllckNvbG9yID0gYXR0cmlidXRlcy5sYXllckNvbG9yO1xuXHRcdHZhciBQYW5lbENvbG9yU2V0dGluZ3MgPSB3cC5lZGl0b3IuUGFuZWxDb2xvclNldHRpbmdzO1xuXG5cblx0XHR2YXIgTXlCdXR0b25Hcm91cCA9IGZ1bmN0aW9uIE15QnV0dG9uR3JvdXAoKSB7XG5cdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRCdXR0b25Hcm91cCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdEJ1dHRvbixcblx0XHRcdFx0XHR7IGlzUHJpbWFyeTogdHJ1ZSB9LFxuXHRcdFx0XHRcdCdCdXR0b24gMSdcblx0XHRcdFx0KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdEJ1dHRvbixcblx0XHRcdFx0XHR7IGlzUHJpbWFyeTogdHJ1ZSB9LFxuXHRcdFx0XHRcdCdCdXR0b24gMidcblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0dmFyIE15Q29sb3JQaWNrZXIgPSB3aXRoU3RhdGUoe1xuXHRcdFx0Y29sb3I6IGF0dHJpYnV0ZXMubGF5ZXJDb2xvclxuXHRcdH0pKGZ1bmN0aW9uIChfcmVmMikge1xuXHRcdFx0dmFyIGNvbG9yID0gX3JlZjIuY29sb3IsXG5cdFx0XHQgICAgc2V0U3RhdGUgPSBfcmVmMi5zZXRTdGF0ZTtcblxuXHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChDb2xvclBpY2tlciwge1xuXHRcdFx0XHRjb2xvcjogbGF5ZXJDb2xvcixcblx0XHRcdFx0dmFsdWU6IGxheWVyQ29sb3IsXG5cdFx0XHRcdG9uQ2hhbmdlQ29tcGxldGU6IGZ1bmN0aW9uIG9uQ2hhbmdlQ29tcGxldGUodmFsdWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IGxheWVyQ29sb3I6IHZhbHVlLmhleCB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRmdW5jdGlvbiBvbkNoYW5nZUJhY2tncm91bmRDb2xvcihldmVudCkge1xuXG5cdFx0XHRhdHRyaWJ1dGVzLnByb2ZpbGVCYWNrZ3JvdW5kQ29sb3IgPSBldmVudDtcblxuXHRcdFx0Y29uc29sZS5sb2coZXZlbnQucmdiYSk7XG5cdFx0fTtcblxuXHRcdHZhciBnZXRJbWFnZUJ1dHRvbiA9IGZ1bmN0aW9uIGdldEltYWdlQnV0dG9uKG9wZW5FdmVudCkge1xuXHRcdFx0aWYgKGF0dHJpYnV0ZXMuaW1hZ2VVcmwpIHtcblx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuXHRcdFx0XHRcdHNyYzogYXR0cmlidXRlcy5pbWFnZVVybCxcblx0XHRcdFx0XHRvbkNsaWNrOiBvcGVuRXZlbnQsXG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAnaW1hZ2UnXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ2J1dHRvbi1jb250YWluZXInIH0sXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0QnV0dG9uLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRvbkNsaWNrOiBvcGVuRXZlbnQsXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZTogJ2J1dHRvbiBidXR0b24tbGFyZ2UnXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0J0ltYWdlbiBkZSBGb25kbydcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChNZWRpYVVwbG9hZCwge1xuXHRcdFx0XHRvblNlbGVjdDogZnVuY3Rpb24gb25TZWxlY3QobWVkaWEpIHtcblx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgaW1hZ2VBbHQ6IG1lZGlhLmFsdCwgaW1hZ2VVcmw6IG1lZGlhLnVybCB9KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuaW1hZ2VJRCxcblx0XHRcdFx0cmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoX3JlZjMpIHtcblx0XHRcdFx0XHR2YXIgb3BlbiA9IF9yZWYzLm9wZW47XG5cdFx0XHRcdFx0cmV0dXJuIGdldEltYWdlQnV0dG9uKG9wZW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0SW5zcGVjdG9yQWR2YW5jZWRDb250cm9scyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBhbmVsQ29sb3JTZXR0aW5ncywge1xuXHRcdFx0XHRcdHRpdGxlOiBfXygnQmFja2dyb3VuZCBDb2xvcicsICdhdG9taWMtYmxvY2tzJyksXG5cdFx0XHRcdFx0aW5pdGlhbE9wZW46IGZhbHNlLFxuXHRcdFx0XHRcdGNvbG9yU2V0dGluZ3M6IFt7XG5cdFx0XHRcdFx0XHR2YWx1ZTogcHJvZmlsZUJhY2tncm91bmRDb2xvcixcblx0XHRcdFx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZUJhY2tncm91bmRDb2xvcixcblx0XHRcdFx0XHRcdGxhYmVsOiBfXygnQmFja2dyb3VuZCBDb2xvcicsICdhdG9taWMtYmxvY2tzJylcblx0XHRcdFx0XHR9XVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KE15QnV0dG9uR3JvdXAsIG51bGwpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTXlDb2xvclBpY2tlciwgbnVsbCksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUb2dnbGVDb250cm9sLCB7XG5cdFx0XHRcdFx0bGFiZWw6IF9fKCdNb3N0cmFyIEltYWdlbiBkZSBGb25kbycpLFxuXHRcdFx0XHRcdGNoZWNrZWQ6ICEhaW1nX2JhY2tncm91bmQsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBpbWdfYmFja2dyb3VuZDogIWltZ19iYWNrZ3JvdW5kIH0pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0aGVscDogISFpbWdfYmFja2dyb3VuZCA/IF9fKCdNb3N0cmFyIEJhY2tncm91bmQgZGUgSW1nZW4uJykgOiBfXygnT2N1bHRhciBCYWNrZ3JvdW5kIGRlIEltYWdlbi4nKVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRvZ2dsZUNvbnRyb2wsIHtcblx0XHRcdFx0XHRsYWJlbDogX18oJ0FjdGl2YXIgT3ZlcmxheScpLFxuXHRcdFx0XHRcdGNoZWNrZWQ6ICEhdmlzaWJsZUxheWVyLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdmlzaWJsZUxheWVyOiAhdmlzaWJsZUxheWVyIH0pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0aGVscDogISF2aXNpYmxlTGF5ZXIgPyBfXygnTW9zdHJhciBPdmVybGF5LicpIDogX18oJ09jdWx0YXIgT3ZlcmxheS4nKVxuXHRcdFx0XHR9KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChQbGFpblRleHQsIHtcblx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGNvbnRlbnQpIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiBjb250ZW50IH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy50aXRsZSxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICdZb3VyIGNhcmQgdGl0bGUnLFxuXHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzOiAndHJ1ZScsXG5cdFx0XHRcdGNsYXNzTmFtZTogJ2hlYWRpbmcnXG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuXHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoY29udGVudCkge1xuXHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgYm9keTogY29udGVudCB9KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuYm9keSxcblx0XHRcdFx0bXVsdGlsaW5lOiAncCcsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiAnWW91ciBjYXJkIHRleHQnLFxuXHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzOiAndHJ1ZScsXG5cdFx0XHRcdGZvcm1hdHRpbmdDb250cm9sczogWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnXSxcblx0XHRcdFx0aXNTZWxlY3RlZDogYXR0cmlidXRlcy5pc1NlbGVjdGVkLFxuXHRcdFx0XHRzdHlsZTogeyBjb2xvcjogbGF5ZXJDb2xvciB9XG5cblx0XHRcdH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLCBudWxsKVxuXHRcdCk7XG5cblx0XHQvKnJldHVybiAoXG4gIFx0XG4gIFx0IDxkaXYgY2xhc3NOYW1lPXsgcHJvcHMuY2xhc3NOYW1lIH0+XG4gICAgICAgICAgICAgICAgPElubmVyQmxvY2tzIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICk7Ki9cblx0fSxcblxuXHQvKipcbiAgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuICAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cbiAgKlxuICAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAqXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAqL1xuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J3NlY3Rpb24nLFxuXHRcdFx0eyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLkNvbnRlbnQsIG51bGwpXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);