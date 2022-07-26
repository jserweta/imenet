<?php
/**
 * Template part for displaying contact
 *
 * @package imenet
 */
$phones = get_field('phones', 'option');
$emails = get_field('e-mails', 'option');
$contact = get_field('contact');

if(!empty($contact) && isset($contact)):?>
    <section id="kontakt" class="contact">
        <div class="container l-two-col s-one-col">

            <div class="contact__details-wrapper">
            <?php 
            $contact_label = $contact['contact_label'];
            $contact_desc = $contact['contact_description'];
            $company_details_label = $contact['company_details_label'];
            $company_details = $contact['company_details']; ?>
                <div class="contact__details">
           
                <?php if (!empty($contact_label) && isset($contact_label)): ?>
                    <h2 class="sub-heading contact__label-con">
                            <?= $contact_label; ?>
                    </h2>
                <?php endif;

                if (!empty($contact_desc) && isset($contact_desc)): ?>
                    <span class="contact__desc">
                        <?= $contact_desc; ?>
                    </span>
                <?php endif;

                if (!empty($emails) && isset($emails)):
                    foreach ($emails as $m) {
                        $email = $m['e-mail'];
                        $email_icon = $m['icon'];?> 

                        <a href="mailto:<?= esc_html($email); ?>" aria-label="<?= esc_attr($email); ?>" class="contact__single" >
                            <?= $email_icon; ?>    
                            <?= esc_html($email); ?>                               
                        </a>

                    <?php }
                endif;

                if (!empty($phones) && isset($phones)):
                    foreach ($phones as $p) {
                        $phone_spaces = $p['phone_with_spaces'];
                        $phone = $p['phone_without_spaces'];
                        $phone_icon = $p['icon'];?>
                            <a href="tel:<?= esc_html($phone); ?>" class="contact__single" aria-label="<?= esc_attr($phone); ?>">
                                <?= $phone_icon; ?>	
                                <?= esc_html($phone_spaces); ?>
                            </a>
                    <?php }
                endif;


                if (!empty($company_details_label) && isset($company_details_label)): ?>
                    <h2 class="sub-heading contact__label-details">
                            <?= $company_details_label; ?>
                    </h2>
                <?php endif;

                if (!empty($company_details) && isset($company_details)): ?>
                        <?= $company_details; ?>
                <?php endif; ?>
                   
                </div>
            </div>

            <?php 
            $form_label = $contact['contact_form_label'];
            $form_code = $contact['contact_form'];
            if (!empty($form_code) && isset($form_code)): ?>
                <div class="contact__form-sec">

                <?php if (!empty($form_label) && isset($form_label)): ?>
                    <h2 class="sub-heading contact__form-label">
                            <?= $form_label; ?>
                    </h2>
                <?php endif;

                if (!empty($form_code) && isset($form_code)):
                    echo do_shortcode($form_code); 
                endif;?>

             </div>
             <?php endif; ?>
         </div>
         <div class="details-overlay"></div>
    </section>
<?php endif; ?>
