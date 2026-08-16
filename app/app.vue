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
    // global styles
    :root
        --secondary-dark: #121516
        --primary-light: #EEEEEE
        --primary-contrast: #FFEFD7
        --primary-contrast-light: #FFB66D
        --primary-contrast-saturated: #CB9032
    // reset
    *
        margin: 0
        padding: 0
        box-sizing: border-box
    // styles
    .es, .en
        width: 1.875rem
        height: 1.5rem
        display: flex
        align-items: center
        justify-content: center
        background: var(--primary-light)
        color: var(--secondary-dark)
        font-size: .75rem
        &.active
            background: var(--primary-contrast-light)
            color: var(--primary-light)
        h4
            position: relative
            z-index: 2
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
        background: var(--secondary-dark)
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
</style>