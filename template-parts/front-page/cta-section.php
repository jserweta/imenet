<?php
/**
 * Template part for displaying cta section
 *
 * @package imenet
 */
$cta = get_field('cta_section');

if (!empty($cta) && isset($cta)):
    $cta_elements = $cta['cta_box'];
    if (!empty($cta_elements) && isset($cta_elements)):?>
        <section id="oferta-kafle" class="cta-section">
            <div class="container l-two-col m-two-col s-one-col">
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
                <a href="<?= esc_url($url); ?>" class="js-trigger cta-section__box" target="<?= esc_attr($url_target); ?>">
                    <div class="cta-section__icon">
                        <?= $icon; ?>
                    </div>
                    <h2 class="sub-heading cta-section__header">
                        <?= $header; ?>
                    </h2>
                </a>
            <?php } ?>
            </div>
        </section>
    <?php endif;
endif;
?>
