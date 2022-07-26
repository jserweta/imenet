<?php
/**
 * Template Name: Doc Category
 * 
 *  Template part for displaying about us section
 *
 * @package imenet
 */
?>

<?php get_header(); ?>

<section id="dokumentacje" class="doc-section pass-protected-form">
    <div class="container">
        <?php
        if ( post_password_required() ) :
            // if your post is password protected with our Pro version, show our password form instead
            echo get_the_password_form();
        else :?>
            <h2 class="section-header">
                <?php echo single_post_title(); ?>
            </h2>
            
            <?php the_content();
        endif;
        ?>
    </div>
</section>

<?php get_footer();?>