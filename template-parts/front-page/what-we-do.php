<?php
/**
 * Template part for displaying what we do section
 *
 * @package imenet
 */
$what_we_do = get_field('what_we_do');

if (!empty($what_we_do) && isset($what_we_do)):?>
    <section id="oferta" class="what-we-do">
        <?php 
        $header = $what_we_do['section_header'];
        if (!empty($header) && isset($header)): ?>
            <h2 class="what-we-do__section-header section-header"><?= $header; ?></h2>
        <?php endif;
        
        $line_of_business = $what_we_do['line_of_business'];
        $counter = 1;
        foreach ($line_of_business as $lob){
            if ($lob):
                $heading = $lob['header'];
                $company_logo = $lob['logo'];
                $desc = $lob['description'];
                $link = $lob['link'];
                $image = $lob['image'];
                
                if($link):
                    $url = $link['url'];
                    $url_title = $link['title'];
                    $url_target = $link['target'] ? $link['target'] : '_self';
                endif;

                $id = strtolower(preg_replace(array('/\s/','/\./'), '-', $heading));
            endif; ?>
        
            <div id="<?= $id; ?>" class="container l-two-col s-one-col">
                <?php ($counter % 2)? $class="": $class="image-first"; ?>
                <div class="what-we-do__data-col <?= $class; ?>">

                    <?php
                    if (!empty($heading) && isset($heading)): ?>
                        <h2 class="what-we-do__header sub-heading"><?= $heading; ?></h2>
                    <?php endif; 
                    
                    if (!empty($company_logo) && isset($company_logo)): ?>
                        <img class="what-we-do__logo" <?php awesome_acf_responsive_image($company_logo['id'], 'large', '230px'); ?> alt="<?= esc_html($company_logo['alt']);?>">
                    <?php endif;

                    if (!empty($desc) && isset($desc)): ?>
                        <p class="what-we-do__desc"><?= $desc; ?></p>
                    <?php endif; 
                    
                    if (!empty($link) && isset($link)):?>
                        <a href="<?= esc_url($url); ?>" class="button-border-blue what-we-do__link" target="<?= esc_attr($url_target); ?>">
                            <?= esc_html($url_title); ?>
                        </a>
                    <?php endif; ?>

                </div>
                
                <div class="what-we-do__image-col <?= $class; ?>">

                    <?php
                    if (!empty($image) && isset($image)): ?>
                        <img class="what-we-do__image" <?php awesome_acf_responsive_image($image['id'], 'large', ''); ?> alt="<?= esc_html($image['alt']);?>">
                    <?php endif; ?>

                </div>
            </div>
        <?php 
            $counter++;
        } ?>
    </section>
<?php endif; ?>

