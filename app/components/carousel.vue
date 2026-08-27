<template>
    <div class="carousel">
        <ul
            class="event-cards"
            ref="uiCards"
            :style="{ '--current-index': currentIndex }"
        >
            <li v-for="(card, index) in cardData" :key="index">
                <h3>
                    {{ card.label}}
                </h3>
                <p>
                    {{ card.copy }}
                </p>
                <small v-if="card.author && card.date">
                    {{ card.author }} - {{ card.date }}
                </small>
            </li>
        </ul>
        <div class="right" @click="moveCards">
            <span>
                Move carousel
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    cardData: {
        type: Array,
        default: () => []
    }
})

const currentIndex = ref(0)
const uiCards = ref()
function moveCards() {
    currentIndex.value++
    if (currentIndex.value >= props.cardData.length) {
        currentIndex.value = 0
    }
}
</script>

<style lang="sass">
.event-cards
    list-style: none
    display: flex
    gap: 1.5rem
    position: absolute
    top: 0
    left: 0
    transform: translateX(calc(var(--current-index) * -1 * (18.375rem + 1.5rem)))
    transition: transform 0.4s ease
    h3
        font-size: 1.5rem
        font-family: var(--section-heading-font)
        text-transform: uppercase
        color: var(--primary-contrast-light)
    p
        color: var(--primary-light)
        font-family: var(--copy-font)
    li
        background: var(--primary-dark)
        padding: 1.5rem
        height: 25rem
        width: 18.375rem
        flex-shrink: 0
        background: var(--primary-dark)
        padding: 1.5rem
        height: 25rem
        width: 18.375rem
        flex-shrink: 0
        display: flex
        flex-direction: column
        gap: 1.5rem
        @media (min-width: 743px)
            width: 20rem
    @media (min-width: 743px)
        transform: translateX(calc(var(--current-index) * -1 * (20rem + 1.5rem)))
        li
            width: 20rem
.carousel
    width: 100%
    overflow: hidden
    max-width: 100%
    height: 400px
    position: relative
    small
        color: var(--primary-contrast-light)
        font-family: var(--section-heading-font)
        text-transform: uppercase
    .right
        position: absolute
        top: 0
        right: 0
        z-index: 2
        height: 100%
        width: 3rem
        background: linear-gradient(to left, #000, rgba(0, 0, 0, 0))
        cursor: pointer
        span
            display: none
</style>