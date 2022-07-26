<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package imenet
 */


$phones = get_field('phones', 'option');
$emails = get_field('e-mails', 'option');
$logo_svg = get_field('logo', 'option');
$logo_png = get_field('logo_png', 'option');
$slogan = get_field('slogan', 'option');
?>

<footer id="colophon" class="site-footer">

	<div class="container site-footer__company-info l-two-col">

		<div class="site-footer__site-branding">
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

			<?php if (!empty($slogan) && isset($slogan)) : ?>
				<span class="slogan"><?php echo $slogan ?></span>
			<?php endif; ?>
		</div><!-- .site-branding -->

		<div class="site-footer__other-info l-two-col m-two-col">
			
			<div class="site-footer__footer-menu">
				<h3>Menu</h3>
				<nav class="nav-footer" role="navigation">

					<?php wp_nav_menu(array(
						'theme_location'    => 'primary',
						'container'         => false,
						'depth'             => 4,
						'menu_class'        => 'menu-items',
						'menu_id'           => 'footer-menu',
						'echo'              => true,
						'fallback_cb'       => 'Nav_Walker::fallback',
						'items_wrap'     	=> '<ul role="menu" id="%1$s" class="%2$s">%3$s</ul>',
						'walker'         	=> new Nav_Walker(),
					)); ?>

				</nav><!-- #nav -->
			</div>


			<div class="site-footer__contact">
				<h3>Kontakt</h3>
				<?php if (!empty($emails) && isset($emails)) : ?>
				<ul class="site-footer__e-mails remove-ul-styling">
					<?php foreach ($emails as $e) {
						if ($e) :
							$email = $e['e-mail'];
						endif ?>
						<li class="site-footer__e-mail">
							<a class="site-footer__e-mail-link" href="mailto:<?php echo $email ?>" aria-label="<?php echo $email ?>"><?php echo $email ?></a>
						</li>
					<?php } ?>
				</ul>
				<?php endif; ?>
				<?php if (!empty($phones) && isset($phones)) : ?>
				<ul class="site-footer__phones remove-ul-styling">
					<?php foreach ($phones as $p) {
						if ($p) :
							$phone_without_spaces = $p['phone_without_spaces'];
							$phone_with_spaces = $p['phone_with_spaces'];
						endif ?>
						<li class="site-footer__phone">
							<a class="site-footer__phone-link" href="tel:<?php echo $phone_without_spaces ?>" aria-label="<?php echo $phone_without_spaces ?>"><?php echo $phone_with_spaces ?></a>
						</li>
					<?php } ?>
				</ul>
				<?php endif; ?>
			</div>

		</div>
	
	</div>
	<div class="container site-footer__theme-info">
		<div class="site-footer__copyright">
			<span><?php echo esc_html('interMEDIA © 2020 • '); ?></span>
			<span><?php esc_html_e('Uszyte na ', 'imenet'); ?><a href="<?php echo esc_url('https://wordpress.org/') ?>"><?php echo esc_html('WordPress'); ?></a></span>
			<span><?php esc_html_e(' przez ', 'imenet'); ?><a href="<?php echo esc_url('https://imenet.pl/') ?>"><?php echo esc_html('imenet'); ?></a></span>
		</div>
		<div class="site-footer__privacy-policy">
			<span><?php esc_html_e('Ta strona używa Cookies • ', 'imenet'); ?></span>
			<a href="<?php echo esc_url('/polityka-prywatnosci') ?>" class="no-external-link-indicator"><?php esc_html_e('Polityka Prywatności'); ?></a>
		</div>
	</div>
	<p class="back-to-top"><a href="#page" class="js-trigger top no-text-link no-external-link-indicator" data-mt-duration="300"><span class="screen-reader-text"><?php echo esc_html('Powrót do góry strony'); ?></span><?php include get_theme_file_path('/svg/chevron-up.svg'); ?></a></p>
</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>


</body>

</html>