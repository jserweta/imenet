  <?php
  /**
   * The template for displaying front page
   *
   * Contains the closing of the #content div and all content after.
   * Initial styles for front page template.

   * @package imenet
   * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
   */


  get_header(); ?>

  <div class="content-area">
    <main id="main" class="site-main">
      <?php get_template_part("template-parts/front-page/hero"); ?>
      <?php get_template_part("template-parts/front-page/about-us"); ?>
      <?php get_template_part("template-parts/front-page/cta-section"); ?>
      <?php get_template_part("template-parts/front-page/what-we-do"); ?>
      <?php get_template_part("template-parts/front-page/contact"); ?>

      <section id="map" class="map-section">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6162.885929753672!2d18.76283764511005!3d50.87914646068248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710bfd49232619f%3A0x8d0482dbb66c5516!2sStig.pl%20-%20Intermedia!5e0!3m2!1spl!2spl!4v1618312604123!5m2!1spl!2spl" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          <!-- <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script> -->
      </section>
     
    </main><!-- #main -->
  </div><!-- #primary -->

  <?php get_footer();
