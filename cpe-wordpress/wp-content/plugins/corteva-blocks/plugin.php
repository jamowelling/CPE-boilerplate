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
        'http://127.0.0.1:58020/angular-elements/hello-world-angular-element.js',
        array(),
        '4.3.1',
        true
    );
}
// Hook the enqueue functions into the editor
add_action( 'enqueue_block_editor_assets', 'my_block_plugin_editor_scripts' );

/**
 * Enqueue frontend and editor JavaScript and CSS
 */
function enqueue_frontend() {
    if ( is_admin() ) {
       return;
    }
   
    wp_enqueue_script( 'app-hello-world', 'http://127.0.0.1:58020/angular-elements/hello-world-angular-element.js', array(), '4.3.1', true );

}

add_action( 'wp_enqueue_scripts', 'enqueue_frontend' );
