<template>
    <div class="app">
        <header>
            <div class="mobile-nav">
                <div class="burger" @click="(() => { console.log('ay yo') })">
                    <div
                        v-for="(p, index) in 3"
                        :key="index"
                        :class="['hamburger-patty', `hamburger-patty-${index + 1}`]"
                    >
                        <span>
                            hamburger patty
                        </span>
                    </div>
                </div>
                <div class="language-toggle">
                    <div
                        @click="toggleLang('es')"
                        :class="['es', { active: activeLanguage === 'es' }]"
                    >
                        <h4>
                            ES
                        </h4>
                    </div>
                    <div
                        @click="toggleLang('en')"
                        :class="['en', { active: activeLanguage === 'en' }]"
                    >
                        <h4>
                            EN
                        </h4>
                    </div>
                    <div class="language-marker" :class="{ 'marker-right': markerRight }">
                        <span>language marker</span>
                    </div>
                </div>
            </div> 
        </header>
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
                    Professional norteno entertainment across Southern California with over 20 years of live perfomance experience.
                </p>
                <div class="hero-content-ctas">
                    <button class="book-now">
                        Book Now
                    </button>
                    <button class="call-now">
                        Call Us
                    </button>                    
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const activeLanguage = ref('es')
const markerRight = ref(false)

function toggleLang(lang) {
    activeLanguage.value = lang
    markerRight.value = lang === 'en'
}
</script>
<style lang="sass">
    @font-face
        font-family: 'Sekuya Regular'
        src: url('/fonts/sekuya-regular.woff2') format('woff2')
    @font-face
        font-family: 'Krona One'
        src: url('/fonts/krona-one.woff2') format('woff2')
    @font-face
        font-family: 'Quattrocento Regular'
        src: url('/fonts/quattrocento-regular.woff2') format('woff2')
    // global styles
    :root
        --primary-dark: #121516
        --primary-light: #EEEEEE
        --primary-contrast: #FFEFD7
        --primary-contrast-light: #FFB66D
        --primary-contrast-saturated: #CB9032
        --section-heading-font: 'Krona One'
        --display-font: 'Sekuya Regular'
        --copy-font: 'Quattrocento Regular'
    // reset
    *
        margin: 0
        padding: 0
        box-sizing: border-box
    html, body
        margin: 0
        width: 100%
    // styles
    header
        position: fixed
        top: 0
        left: 0
        width: 100%
        z-index: 9
    .es, .en
        width: 1.875rem
        height: 1.5rem
        display: flex
        align-items: center
        justify-content: center
        background: var(--primary-light)
        color: var(--primary-dark)
        font-size: .75rem
        &.active
            background: var(--primary-contrast-light)
            color: var(--primary-light)
        h4
            position: relative
            z-index: 2
            font-family: var(--section-heading-font)
            font-size: .625em
    .es
        border-radius: .25rem 0 0 .25rem
    .en
        border-radius: 0 .25rem .25rem 0
    .language-toggle
        display: flex
        position: relative
        .language-marker
            height: 18px
            width: 24px
            background: var(--primary-contrast-saturated)
            border-radius: .25rem
            position: absolute
            top: 3px
            left: 3px
            z-index: 1
            transition: transform .25s ease
            &.marker-right
                transform: translateX(30px)
            span
                display: none
    .mobile-nav
        height: 3.5rem
        background: var(--primary-dark)
        padding: 0 1rem
        display: flex
        align-items: center
        justify-content: space-between
        .hamburger-patty
            height: .25rem
            margin-bottom: .25rem
            span
                display: none
        .hamburger-patty-1
            width: 1.5rem
            background: var(--primary-light)
        .hamburger-patty-2
            width: 1rem
            background: var(--primary-light)
        .hamburger-patty-3
            width: 1.25rem
            background: var(--primary-light)
            margin-bottom: 0

    // hero section
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
            h1
                font-family: var(--display-font)
                font-size: 1.5rem
                line-height: 2rem
                color: var(--primary-contrast)
            p
                font-family: var(--copy-font)
                color: var(--primary-light)
            .hero-content-ctas
                display: flex
                flex-direction: column
                gap: 1.5rem
                button
                    width: 11.25rem
                    height: 3rem
                    font-family: var(--section-heading-font)
                    text-transform: uppercase
                    border: none
                    color: var(--primary-dark)
                    border-radius: .25rem
                    &.book-now
                        background: var(--primary-light)
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
            background: linear-gradient(to bottom, color-mix(in srgb, var(--primary-dark) 65%, transparent) 0%, var(--primary-dark) 100%)
</style>