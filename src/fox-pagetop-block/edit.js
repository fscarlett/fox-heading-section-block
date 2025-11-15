/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";

import {
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
	TextareaControl,
	Button,
	ResponsiveWrapper,
	__experimentalDivider as Divider,
} from "@wordpress/components";

import { useSelect } from "@wordpress/data";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	const { className, ...blockProps } = useBlockProps();

	// Get the current post/page title
	const page_title = useSelect((select) => {
		const currentPostId = select("core/editor").getCurrentPostId();
		const currentPost = select("core").getEntityRecord(
			"postType",
			select("core/editor").getCurrentPostType(),
			currentPostId,
		);
		return currentPost?.title?.rendered || "";
	}, []);

	return (
		<>
			<section className={`${className}`} {...blockProps}>
				{!!props.attributes.isH1 && (
					<h1>
						{props.attributes.headingIsPagetitle
							? page_title
							: props.attributes.heading}
					</h1>
				)}

				{!props.attributes.isH1 && <h2>{props.attributes.heading}</h2>}
				<h3 className="subhead">{props.attributes.subhead}</h3>
				<p>{props.attributes.paragraph}</p>
			</section>
			<InspectorControls>
				<PanelBody title="Heading Section Settings" opened="true">
					<TextControl
						label="Heading"
						value={props.attributes.heading}
						onChange={(newValue) => {
							props.setAttributes({ heading: newValue });
						}}
						disabled={props.attributes.headingIsPagetitle && "disabled"}
						style={{
							backgroundColor: props.attributes.headingIsPagetitle
								? "#bbb"
								: "transparent",
						}}
					/>

					<ToggleControl
						label="Make Heading H1"
						checked={props.attributes.isH1}
						onChange={(newValue) => {
							props.setAttributes({
								isH1: newValue,
							});
						}}
					/>

					{!!props.attributes.isH1 && (
						<ToggleControl
							label="Use Page Title for Heading"
							checked={props.attributes.headingIsPagetitle}
							onChange={(newValue) => {
								props.setAttributes({
									headingIsPagetitle: newValue,
								});
							}}
						/>
					)}

					<TextControl
						label="Subheading"
						value={props.attributes.subhead}
						onChange={(newValue) => {
							props.setAttributes({ subhead: newValue });
						}}
					/>

					<TextareaControl
						label="Paragraph"
						value={props.attributes.paragraph}
						onChange={(newValue) => {
							props.setAttributes({ paragraph: newValue });
						}}
					/>
					<Divider />
				</PanelBody>
			</InspectorControls>
		</>
	);
}
