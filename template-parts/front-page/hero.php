<?php
/**
 * Template part for displaying hero baner
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package imenet
 */
$hero = get_field('hero');

if (!empty($hero) && isset($hero)):
    $hero_elements = $hero['hero_elements'];
    if (!empty($hero_elements) && isset($hero_elements)):?>

    <div class="swiper-container">
        <div class="swiper-wrapper">
        <?php
        foreach ($hero_elements as $he){
        if ($he):
            $hero_background = $he['background_image'];
            $hero_heading = $he['heading'];
            $hero_desc = $he['description'];
            $hero_link = $he['link'];
            $hero_company_logo = $he['logo'];

            if($hero_link):
                $hero_url = $hero_link['url'];
                $hero_url_title = $hero_link['title'];
                $hero_url_target = $hero_link['target'] ? $hero_link['target'] : '_self';
            endif;
        endif;
            
            ?>
            <div class="swiper-slide">
                <!-- <div class="swiper-slide-container container"> -->
                    <div class="swiper-content container">
                        <?php if(!empty($hero_company_logo) && isset($hero_company_logo)):?>
                        <img class="swiper-content__logo" <?php awesome_acf_responsive_image($hero_company_logo['id'], 'medium', '300px'); ?> alt="<?= esc_html       ($hero_company_logo['alt']);?>">
                        <?php endif;

                        if(!empty($hero_heading) && isset($hero_heading)):?>
                        <h1 class="swiper-content__heading"><?= $hero_heading; ?></h1>
                        <?php endif;

                        if(!empty($hero_desc) && isset($hero_desc)):?>
                        <p class="swiper-content__desc"> <?= $hero_desc;?></p>
                        <?php endif;

                        if(!empty($hero_link) && isset($hero_link)):?>
                        <a href="<?= esc_url($hero_url); ?>" class="js-trigger button-white-border swiper-content__link" target="<?= esc_attr($hero_url_target); ?>">
                            <?= esc_html($hero_url_title); ?>
                        </a>
                        <?php endif; ?>

                    </div>
                    <div class="image-wrapper">
                        <div class="overlay"></div>
                        <img class="swiper-image" <?php awesome_acf_responsive_image($hero_background['id'], 'full', '2000px'); ?> alt="<?= esc_html($hero_background['alt']);?>">
                    </div>
                    
                
                </div>
            <!-- </div> -->
            <?php
            }?>
        </div>
        <!-- <div class="container"> -->
            <div class="swiper-pagination"></div>
        <!-- </div> -->
        
    </div>

    <?php endif;?>
<?php endif;?>