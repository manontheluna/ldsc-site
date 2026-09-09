<template>
    <header>
        <div class="mobile-toggle">
            <div class="burger" @click="emit('toggleNav')">
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
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['toggleNav', 'toggleLang'])

const { locale } = useI18n()

const activeLanguage = computed(() => locale.value)
const markerRight = computed(() => locale.value === 'en')

function toggleLang(lang) {
    emit('toggleLang', lang)
}
</script>

<style lang="sass">
    header.site-header
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
    .mobile-toggle
        height: 3.5rem
        background: var(--primary-dark)
        padding: 0 1.5rem
        display: flex
        align-items: center
        justify-content: space-between
        @media (min-width: 979px)
            display: none
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