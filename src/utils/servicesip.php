<?php


get_header();
?>
<section class="wrapper services">
    <div class="container py-3">
        <?php
        $post_slug = get_post_field('post_name');
        $current_id = get_the_ID();



        ?>
        <div class="inner-container <?php echo esc_attr($post_slug) ?> active">

            <div class="main-wrapper">
                <!-- Slider main container -->
                <div class="slider-wrapper py-5">
                    <?php
                    get_template_part('inc/slider');
                    ?>

                </div>



                <div class="content-wrapper text-center active <?php echo $post->post_name ?> ">
                    <h1 class="post-title">
                        <?php

                        $custom_title = get_field('custom_title');

                        if ($custom_title) :
                            echo $custom_title;
                        else :
                            the_title();
                        endif;
                        ?>
                    </h1>

                    <div class="fw-normal px-md-5 px-lg-5 p-font post-desc">
                        <?php the_field('services_content'); ?>


                    </div>

                    <div class="terms-wrapper">

                        <?php
                        $terms = get_the_terms(get_the_ID(), 'service_category');
                        if ($terms && !is_wp_error($terms)) {
                            echo '<div class="term-box d-flex flex-wrap justify-content-center text-center fw-bolder py-4 ">';
                            foreach ($terms as $term) {
                                echo '<a class="term-link py-3 px-2 mx-1 my-3 rounded" href="' . get_term_link($term) . '"><div >' . esc_html($term->name) . '</div></a>';
                            }
                            echo '</div>';
                        }

                        ?>
                    </div>
                </div>

                <?php
                $args = array(
                    'post_type' => 'service',
                    'posts_per_page' => -1,
                    'order_by' => 'DESC',
                    'post__not_in' => array($post->ID)

                );
                $services = new WP_Query($args);

                while ($services->have_posts()) :
                    $services->the_post();
                    $post_slug = get_post_field('post_name');
                ?>

                    <div class="content-wrapper text-center <?php echo esc_attr($post_slug) ?>">
                        <h1 class="post-title">
                            <?php

                            $custom_title = get_field('custom_title');

                            if ($custom_title) :
                                echo $custom_title;
                            else :
                                the_title();
                            endif;
                            ?>
                        </h1>

                        <div class="fw-normal px-md-5 px-lg-5 p-font post-desc">
                            <?php the_field('services_content');                           ?>


                        </div>

                        <div class="terms-wrapper">

                            <?php
                            $terms = get_the_terms(get_the_ID(), 'service_category');
                            if ($terms && !is_wp_error($terms)) {
                                echo '<div class="term-box d-flex flex-wrap justify-content-center text-center fw-bolder py-4 ">';
                                foreach ($terms as $term) {
                                    echo '<a class="term-link py-3 px-2 mx-1 my-3 rounded" href="' . get_term_link($term) . '"><div >' . esc_html($term->name) . '</div></a>';
                                }
                                echo '</div>';
                            }

                            ?>
                        </div>
                    </div>

                <?php
                endwhile;
                wp_reset_postdata();
                ?>

            </div>


        </div>

    </div>

</section>

<?php

get_footer();


?>
<script>
    let bev = $(".rev_slider");

    function toggleContentVisibility() {
        var activeSlide = $('.slick-active');
        var activeSlug = activeSlide.data('slug'); // Assuming you store the slug as a data attribute

        // Remove the 'active-service' class from all content sections
        // $('.service-content').removeClass('active-service');

        // Add the 'active-service' class to the content section with the corresponding slug

        $('.content-wrapper').removeClass('active');


        console.log('.' + activeSlug + '.content-wrapper')
        $('.' + activeSlug + '.content-wrapper').addClass('active');
    }

    // Initial toggle when the page loads
    // toggleContentVisibility();

    // Handle "After Change" event (e.g., when "Next" button is clicked)
    bev.on('afterChange', function(event, slick, currentSlide) {
        toggleContentVisibility();
    });
</script>