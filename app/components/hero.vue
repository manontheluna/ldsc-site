<template>
    <section class="hero">
        <div class="hero-bg-video">
            <video autoplay muted loop playsinline>
                <source src="/videos/los-de-south-central-hero-video.mp4" type="video/mp4">
            </video>
        </div>
        <div class="overlay"></div>
        <div class="content">
            <h1>
                Live Norteño Music For Weddings, Parties, &amp; Special Events
            </h1>
            <p>
                Professional norteño entertainment across Southern California with over 20 years of live perfomance experience.
            </p>
            <div class="hero-content-ctas">
                <a href="#contact">
                    <button class="book-now">
                        Book Now
                    </button>
                </a>
                <a href="#contact">
                    <button class="call-now">
                        Call Us
                    </button>
                </a>                  
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="sass">
.hero
    position: relative
    height: 100dvh
    overflow: hidden
    display: flex
    flex-direction: column
    justify-content: flex-end
    .content
        position: relative
        z-index: 2
        height: calc(100% / 2)
        padding: 0 1.5rem
        display: flex
        flex-direction: column
        gap: 1.5rem
        max-width: 875px
        margin: 0 auto
        h1
            font-family: var(--display-font)
            font-size: 1.5rem
            line-height: 2rem
            color: var(--primary-contrast)
            @media (min-width: 599px)
                font-size: 2.25rem
                line-height: 2.25rem
                text-align: center
            @media (min-width: 1019px)
                font-size: 3rem
                line-height: 3rem
        p
            font-family: var(--copy-font)
            color: var(--primary-light)
            @media (min-width: 599px)
                font-size: 1.5rem
                text-align: center
            @media (min-width: 1019px)
                font-size: 1.5rem
        .hero-content-ctas
            display: flex
            flex-direction: column
            gap: 1.5rem
            @media (min-width: 599px)
                flex-direction: row
                justify-content: center
            button
                width: 11.25rem
                height: 3rem
                font-family: var(--section-heading-font)
                text-transform: uppercase
                border: none
                border-radius: .25rem
                &.book-now
                    background: var(--primary-light)
                    color: var(--secondary-dark)
                &.call-now
                    background: none
                    border: 1px solid var(--primary-light)
                    color: var(--primary-contrast-light)
    .hero-bg-video
        position: absolute
        inset: 0
        z-index: 0
        video
            width: 100%
            height: 100%
            object-fit: cover
            object-position: center
    .overlay
        position: absolute
        height: 100%
        width: 100%
        inset: 0
        z-index: 1
        background: linear-gradient(to bottom, color-mix(in srgb, var(--primary-dark) 50%, transparent) 0%, var(--primary-dark) 100%)
</style>