<template>
    <section class="site-footer">
        <div class="wrapper">
            <div class="footer-content">
                <div class="footer-tagline">
                    <h2>
                        Los De South Central
                    </h2>
                    <p>
                        Bringing authentic Norteño music to weddings, quinceañeras, private events, and celebrations throughout Southern California.
                    </p>
                    <div class="social">
                        <a href="#">
                            [Instagram]
                        </a>
                        <a href="#">
                            [Tik Tok]
                        </a>
                    </div>
                </div>
                <div class="footer-links">
                    <h3>
                        Quick Links
                    </h3>
                    <ul>
                        <li v-for="(link, index) in NAV_LINKS" :key="index">
                            <a href="">
                                {{ link }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h3>
                        Contact
                    </h3>
                    <div class="contact-people">
                        <div class="contact-person">
                            <span>Valente Rodriguez:</span>
                            <a href="/">(323) 334-7555</a>
                        </div>
                        <div class="contact-person">
                            <span>Antelmo Ortega:</span>
                            <a href="/">(323) 571-5121</a>
                        </div>
                    </div>
                </div>
                <div class="service-area">
                    <h3>Service Area</h3>
                    <ul>
                        <li>Greater Los Angeles</li>
                        <li>Orange County</li>
                        <li>Inland Empire</li>
                    </ul>
                </div>
            </div>
            <div class="rights">
                &copy; Los De South Central, All rights reserved.
            </div>
        </div>
    </section>
</template>

<script setup>
const NAV_LINKS = [
    'Events',
    'Videos',
    'Faqs',
    'Why us',
    'Gallery',
    'Testimonials',
    'Contact'
]
</script>

<style lang="sass">
.site-footer
    background: var(--primary-dark)
    padding: 1.5rem
    min-height: 20rem
    h2, h3
        font-family: var(--section-heading-font)
        color: var(--primary-contrast)
        text-transform: uppercase
        font-weight: lighter
    a
        text-decoration: none
    a, p, li, span
        font-family: var(--copy-font)
        color: var(--primary-light)
        font-weight: lighter
    ul
        list-style: none
    span
        margin-right: .5rem
    .footer-content
        display: flex
        flex-direction: column
        gap: 1.5rem
        @media (min-width: 1010px)
            flex-direction: row
            justify-content: space-around
    .footer-tagline,
    .footer-links,
    .footer-contact,
    .service-area    
        display: flex
        flex-direction: column
        gap: .5rem
        @media (min-width: 1010px)
            width: calc(100% / 4)
    .rights
        padding: 1rem 0
        color: var(--primary-light)
        font-size: .75rem
        font-family: var(--copy-font)
    .social
        display: flex
        flex-direction: column
        gap: .5rem
    .wrapper
        max-width: 1200px
        margin: 0 auto
</style>