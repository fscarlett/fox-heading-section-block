<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
	<?php 
	$heading = $attributes['heading'];
	if ($attributes['headingIsPagetitle']) {
		$heading = get_the_title();
	}

	?>

	<section class="fox-pagetop-block-content wp-block-create-block-fox-pagetop-block">
				<?php if ($attributes['headingIsH1']) { ?>
					<h1><?php echo esc_html($heading); ?></h1>
				<?php } ?>
				<?php if (!$attributes['headingIsH1']) { ?>
					<h2><?php echo esc_html($heading); ?></h2>
				<?php } ?>
				<h3 class="subhead"><?php echo esc_html($attributes['subhead']); ?></h3>
				<p><?php echo esc_html($attributes['paragraph']); ?></p>
			</section>
	
</p>
