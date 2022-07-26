<?php
/**
 * Template part for displaying about us section
 *
 * @package imenet
 */
$about_us = get_field('about_us');

if (!empty($about_us) && isset($about_us)):?>
    <section id="o-firmie" class="about-us">
        <div class="container">
            <?php $header = $about_us['header'];
            $desc = $about_us['description'];

            if (!empty($header) && isset($header)): ?>
                <h2 class="about-us__header section-header"><?= $header; ?></h2>
            <?php endif; 

            if (!empty($desc) && isset($desc)): ?>
                <p class="about-us__desc"><?= $desc; ?></p>
            <?php endif; ?>

        </div>
    </section>
<?php endif; ?>

