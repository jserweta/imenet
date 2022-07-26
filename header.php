<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package imenet
 */

$logo_svg = get_field('logo', 'option');
$logo_png = get_field('logo_png', 'option');

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class('no-js'); ?>>
	<div id="page" class="site">
		<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e('Przeskocz do treści', 'imenet'); ?></a>
		<div class="nav-container">
			<header class="site-header" role="banner">

			<div class="site-branding">
				<?php if (is_front_page() && is_home()) : ?>
					<a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
						<span class="screen-reader-text"><?php bloginfo('name'); ?></span>
						<?php if (!empty($logo_svg) && isset($logo_svg)) : ?>
							<!-- ACF SVG logo -->
							<span class="logo"><?php echo $logoSvg ?></span>
							
						<?php endif; ?>

						<?php if (!empty($logo_png) && isset($logo_png)) : ?>
							<!-- ACF PNG logo -->
							<img class="logo" src="<?php echo $logo_png['url'] ?>" alt="<?php echo $logo_png['alt'] ?>">
						<?php endif; ?>
					</a>
				<?php else : ?>
					<a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
						<span class="screen-reader-text"><?php bloginfo('name'); ?></span>
						<?php if (!empty($logo_svg) && isset($logo_svg)) : ?>
							<!-- ACF SVG logo -->
							<?php echo $logo_svg ?>
						<?php endif; ?>
						<?php if (!empty($logo_png) && isset($logo_png)) : ?>
							<!-- ACF PNG logo -->
							<img class="logo" src="<?php echo $logo_png['url'] ?>" alt="<?php echo $logo_png['alt'] ?>">
						<?php endif; ?>
					</a>
					<?php endif; ?>
					
				</div><!-- .site-branding -->

				<div class="main-navigation-wrapper" id="main-navigation-wrapper">
					<button id="nav-toggle" class="nav-toggle hamburger" type="button" aria-label="<?php esc_attr_e('Menu', 'imenet'); ?>">
						<span class="hamburger-box">
							<span class="hamburger-inner"></span>
						</span>
						<span id="nav-toggle-label" class="screen-reader-text" aria-label="<?php esc_attr_e('Menu', 'imenet'); ?>"><?php esc_attr_e('Menu', 'imenet'); ?></span>
					</button>

					<nav id="nav" class="nav-primary" role="navigation">

						<?php wp_nav_menu(array(
							'theme_location'    => 'primary',
							'container'         => false,
							'depth'             => 4,
							'menu_class'        => 'menu-items',
							'menu_id'           => 'main-menu',
							'echo'              => true,
							'fallback_cb'       => 'Nav_Walker::fallback',
							'items_wrap'     	=> '<ul role="menu" aria-label="menubar" id="%1$s" class="%2$s">%3$s</ul>',
							'walker'         	=> new Nav_Walker(),
						)); ?>

					</nav><!-- #nav -->
				</div>
			</header>
		</div><!-- .nav-container -->