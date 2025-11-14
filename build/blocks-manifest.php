<?php
// This file is generated. Do not modify it manually.
return array(
	'fox-pagetop-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/fox-pagetop-block',
		'version' => '0.1.0',
		'title' => 'Fox Heading Block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'A Gutenberg block for a heading and subhead section',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => ''
			),
			'headingIsH1' => array(
				'type' => 'boolean',
				'default' => false
			),
			'headingIsPagetitle' => array(
				'type' => 'boolean',
				'default' => false
			),
			'subhead' => array(
				'type' => 'string',
				'default' => ''
			),
			'paragraph' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'fox-pagetop-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
