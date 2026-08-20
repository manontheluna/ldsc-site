<template>
    <div class="app">
        <header>
            <div class="mobile-nav">
                <div class="burger" @click="(() => { navOpen = true })">
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
        <nav v-if="navOpen">
            <button class="close-mobile-nav" @click="() => { navOpen = false }">
                <span>
                    Close Mobile Navigation
                </span>
            </button>
            <ul>
                <li v-for="(link, index) in NAV_LINKS" :key="index">
                    {{ link }}
                </li>
            </ul>
        </nav>
        <hero />
        <trust-section />
        <events-we-play />
        <see-us-live />
    </div>
</template>
<script setup>
import { ref } from 'vue'

const NAV_LINKS = [
    'events',
    'videos',
    'why us',
    'gallery',
    'faqs',
    'testimonials',
    'contact'
]

const activeLanguage = ref('es')
const markerRight = ref(false)
const navOpen = ref(false)

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
        --secondary-dark: #031019
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
    button
        cursor: pointer
    // styles
    header
        position: fixed
        top: 0
        left: 0
        width: 100%
        z-index: 4
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
        cursor: pointer
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
        padding: 0 1.5rem
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

    // navigation (mobile)
    nav
        position: fixed
        top: 0
        left: 0
        height: 100%
        width: 100%
        z-index: 5
        background: var(--primary-dark)
        display: flex
        align-items: center
        justify-content: center
        padding: 1.5rem
        ul
            list-style: none
            display: flex
            flex-direction: column
            gap: 1.5rem
            li
                font-family: var(--section-heading-font)
                font-size: 1.5rem
                text-transform: uppercase
                text-align: center
                color: var(--primary-light)
        .close-mobile-nav
            height: 1.5rem
            width: 1.5rem
            position: absolute
            top: 1.5rem
            left: 1.5rem
            background: none
            border: none
            &:before
                position: absolute
                top: 0
                transform: rotate(45deg)
                content: ''
                height: 1.5rem
                width: 3px
                background: var(--primary-light)
            &:after
                position: absolute
                top: 0
                left: 50%
                transform: rotate(-45deg)
                content: ''
                height: 1.5rem
                width: 3px
                background: var(--primary-light)
            span
                display: none
</style>