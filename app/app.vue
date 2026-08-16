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
                    <div class="es" :class="{ active: activeLanguage }">
                        <h4>
                            ES
                        </h4>
                    </div>
                    <div class="en">
                        <h4>
                            EN
                        </h4>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const activeLanguage = ref(true)
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
    .language-toggle
        display: flex
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