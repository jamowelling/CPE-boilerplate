<?php
add_action( 'wp_enqueue_scripts', 'angular_theme_styles_and_scripts' );
function angular_theme_styles_and_scripts() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

	$script_loc = get_template_directory_uri() . '/dist/';
	if ( defined( 'WP_ENV' ) && 'LOCAL' === WP_ENV ) {
		$script_loc = '//localhost:4200/';
	}

	$scripts = [
		[
			'key' => 'runtime-bundle',
			'script' => 'runtime.js',
		],
		[
			'key' => 'polyfills-bundle',
			'script' => 'polyfills.js',
		],
		[
			'key' => 'styles-bundle',
			'script' => 'styles.js',
		],
		[
			'key' => 'vendor-bundle',
			'script' => 'vendor.js',
		],
		[
			'key' => 'main-bundle',
			'script' => 'main.js',
		],
	];

	foreach ( $scripts as $key => $value ) {
		$prev_key = ( $key > 0 ) ? $scripts[$key-1]['key'] : 'jquery';
		wp_enqueue_script( $value['key'], $script_loc . $value['script'], array( $prev_key ), '1.0', true );
	}
	wp_localize_script( 'main-bundle', 'api_settings', array(
		'root' => esc_url_raw( rest_url() ),
		'nonce' => wp_create_nonce( 'wp_rest' )
	) );
}

add_action( 'wp_head', 'add_base_href', 99 );
function add_base_href() {
	if ( is_front_page() ) {
		echo '<base href="/">';
	}
}

add_action( 'init', 'angular_rewrite', 999, 0 );
function angular_rewrite() {
	add_rewrite_rule( 'posts/([^/]*)/?', 'index.php?pagename=app-page', 'top' );
	add_rewrite_rule( 'pages/([^/]*)/?', 'index.php?pagename=app-page', 'top' );
}

add_filter( 'template_redirect', 'angular_remove_redirect', 1, 0 );
function angular_remove_redirect() {
	if ( is_front_page() ) {
		remove_filter( 'template_redirect', 'redirect_canonical' );
	}
}

/**
 * Customize the preview button in the WordPress admin to point to the headless client.
 *
 * @param  str $link The WordPress preview link.
 * @return str The headless WordPress preview link.
 */
function set_headless_preview_link( $link ) {
	if (defined( 'WP_ENV' ) && 'LOCAL' === WP_ENV ) {
		return 'http://localhost:4200/'
			. '_preview/'
            . wp_get_post_parent_id(get_the_id()) . '/'
			. wp_create_nonce( 'wp_rest' );
	} else {
		return 'https://<your_production_url>/'
			. '_preview/'
			. get_the_ID() . '/'
			. wp_create_nonce( 'wp_rest' );
	}
}

add_filter( 'preview_post_link', 'set_headless_preview_link' );

add_action(
	'rest_api_init',
	function () {
			if ( ! function_exists( 'use_block_editor_for_post_type' ) ) {
					require ABSPATH . 'wp-admin/includes/post.php';
			}
			// Surface all Gutenberg blocks in the WordPress REST API
			$post_types = get_post_types_by_support( [ 'editor' ] );
			foreach ( $post_types as $post_type ) {
					if ( use_block_editor_for_post_type( $post_type ) ) {
							register_rest_field(
									$post_type,
									'blocks',
									[
											'get_callback' => function ( array $post ) {
													return parse_blocks( $post['content']['raw'] );
											},
									]
							);
					}
			}
	}
);
