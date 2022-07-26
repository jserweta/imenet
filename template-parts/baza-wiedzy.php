<?php
/**
 * Template Name: Baza wiedzy
 * Template part for displaying doc categories section
 *
 * @package imenet
 */

get_header();

$doc = get_field('doc_categories');

if (!empty($doc) && isset($doc)):
    $cta_elements = $doc['cta_box'];
    if (!empty($cta_elements) && isset($cta_elements)):?>
        <section id="baza-wiedzy" class="doc-categories">
            <div class="container">
                <h2 class="section-header">
                    <?php echo get_the_title(); ?>
                </h2>
                <div class="cta-section l-two-col m-two-col s-one-col"> 
                <?php foreach ($cta_elements as $ce){
                    if ($ce):
                        $icon = $ce['icon'];
                        $header = $ce['header'];
                        $link = $ce['link'];
            
                        if($link):
                            $url = $link['url'];
                            $url_title = $link['title'];
                            $url_target = $link['target'] ? $link['target'] : '_self';
                        endif;
                    endif;?>
                    <a href="<?= esc_url($url); ?>" class="cta-section__box" target="<?= esc_attr($url_target); ?>">
                        <div class="cta-section__icon">
                            <?= $icon; ?>
                        </div>
                        <h2 class="sub-heading cta-section__header">
                            <?= $header; ?>
                        </h2>
                    </a>
                <?php } ?>
                </div>
            </div>
        </section>
    <?php endif;
endif;

get_footer();