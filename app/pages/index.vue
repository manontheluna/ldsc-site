<template>
    <div class="app">
        <site-header
            @toggle-nav="() => { navOpen = true }"
            @toggle-lang="switchLanguage"
        />
        <nav>
            <transition name="slide-fade">
                <div v-if="navOpen" class="mobile-nav">
                    <button class="close-mobile-nav" @click="() => { navOpen = false }">
                        <span>
                            Close Mobile Navigation
                        </span>
                    </button>
                    <ul>
                        <li v-for="(link, index) in links" :key="index">
                            <a :href="`#${link.anchor}`" @click="navOpen = false">
                                {{ link.label }}
                            </a>
                        </li>
                    </ul>
                </div>
            </transition>
            <div class="desktop-nav" :class="{ scrolled: isScrolled }">
                <ul>
                    <li v-for="(link, index) in links" :key="index">
                        <a :href="`#${link.anchor}`">
                            {{ link.label }}
                        </a>
                    </li>
                </ul>
                <div class="language-toggle desktop-toggle">
                    <div
                        @click="switchLanguage('es')"
                        :class="['es', { active: activeLanguage === 'es' }]"
                    >
                        <h4>
                            ES
                        </h4>
                    </div>
                    <div
                        @click="switchLanguage('en')"
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
        </nav>
        <hero />
        <trust-section />
        <events-we-play />
        <see-us-live />
        <gallery />
        <why-us />
        <faq />
        <testimonials />
        <footer-cta />
        <contact />
        <site-footer />
    </div>
</template>
<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const { locale, t, tm, rt } = useI18n()
const switchLocalePath = useSwitchLocalePath()

async function switchLanguage(lang) {
    await navigateTo(switchLocalePath(lang))
}

const activeLanguage = computed(() => locale.value)
const markerRight = computed(() => locale.value === 'en')

const links = computed(() => {
    return tm('navigation.links').map(link => ({
        label: rt(link.label),
        anchor: rt(link.anchor)
    }))
})

const navOpen = ref(false)

function toggleLang(lang) {
    activeLanguage.value = lang
    markerRight.value = lang === 'en'
}

const isScrolled = ref(false)
function handleScroll() {
    isScrolled.value = window.scrollY > 25
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
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
        scroll-behavior: smooth
    button
        cursor: pointer

    // navigation
    .desktop-nav
        padding: 2rem 1.5rem
        position: fixed
        top: 0
        left: 0
        width: 100%
        z-index: 9
        transition: all .2s ease-in-out
        @media (max-width: 979px)
            display: none
        &.scrolled
            background: var(--primary-dark)
            padding: 1.5rem
        ul
            display: flex
            list-style: none
            justify-content: center
            gap: 1.5rem
            font-size: 1rem
            font-family: var(--section-heading-font)
            text-transform: uppercase
            color: #fff
            li
                font-size: .9rem
                a
                    color: var(--primary-light)
                    text-decoration: none
    .desktop-toggle
        position: absolute
        top: 50%
        transform: translate(0, -50%)
        right: 1.5rem
    .mobile-nav
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
                a
                    color: var(--primary-light)
                    text-decoration: none
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
.slide-fade-enter-active
    transition: all .2s ease-out
.slide-fade-leave-active
    transition: all .2s cubic-bezier(1, .5, .8, 1)
.slide-fade-enter-from,
.slide-fade-leave-to
    transform: translateX(100%)
    opacity: 0
</style>