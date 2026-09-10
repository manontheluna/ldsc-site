<template>
    <section class="events-we-play" id="events-we-play">
        <h2>
            {{ t('events.heading') }}
        </h2>
        <carousel :cardData="cardItems" />
        <p class="events-soft-cta">
            <strong>{{ t('events.hook') }}</strong> {{ t('events.cta') }}
        </p>
    </section>
</template>

<script setup>
import { computed, ref } from 'vue'
const { t, tm, rt } = useI18n()

const cardItems = computed(() => {
    return tm('events.cards').map(item => ({
        label: rt(item.label),
        copy: rt(item.copy)
    }))
})
</script>

<style lang="sass" scoped>
.events-we-play
    background: var(--primary-contrast)
    padding: 3rem 1.5rem
    display: flex
    flex-direction: column
    gap: 1.5rem
    @media (min-width: 743px)
        gap: 3rem
    h2
        font-size: 1.5rem
        font-family: var(--display-font)
        color: var(--primary-dark)
        @media (min-width: 743px)
            font-size: 3rem
            text-align: center
    .events-soft-cta
        font-size: 1.5rem
        font-family: var(--copy-font)
        position: relative
        @media (min-width: 743px)
            font-size: 1.75rem
            text-align: center
            max-width: 821px
            margin: 0 auto
</style>