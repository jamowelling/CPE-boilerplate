<?php
/**
 * Plugin Name: corteva-blocks — CGB Gutenberg Block Plugin
 * Description: corteva-blocks — is a Gutenberg plugin created via create-guten-block.
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';

/**
 * Enqueue block JavaScript and CSS for the editor
 */
function my_block_plugin_editor_scripts() {
	// Enqueue block editor JS
	// TODO - currently a placeholder example until angular elements are set up
    wp_enqueue_script(
        'app-hello-world',
        'http://127.0.0.1:45571/angular-elements/hello-world-angular-element.js',
        array(),
        '4.3.1',
        true
    );
}
// Hook the enqueue functions into the editor
add_action( 'enqueue_block_editor_assets', 'my_block_plugin_editor_scripts' );

function corteva_blocks_cgb_block_categories( $categories, $post ) {
	return array_merge(
		array(
			array(
				'slug' => 'corteva',
				'title' => __( 'Corteva', 'corteva_blocks_cgb' ),
			),
		),
		$categories
	);
}
add_filter( 'block_categories', 'corteva_blocks_cgb_block_categories', 10, 2 );
