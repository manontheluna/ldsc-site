<template>
    <div class="image-carousel">
        <ul
            class="image-cards"
            ref="uiCards"
            :style="{ '--current-index': currentIndex }"
        >
            <li v-for="(card, index) in images" :key="index">
                <img :src="card.url" :alt="card.alt">
            </li>
        </ul>
        <div class="controls">
            <button class="left" @click="moveCards('left')">
                <span>Move Carousel Left</span>
            </button>
            <button class="right" @click="moveCards">
                <span>
                    Move carousel Right
                </span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    images: {
        type: Array,
        default: () => []
    }
})

const currentIndex = ref(0)
const uiCards = ref()
function moveCards(dir = 'right') {
    if (dir === 'left') {
        if (currentIndex.value === 0) return
        else currentIndex.value--
    } else {
        currentIndex.value++
        if (currentIndex.value >= props.images.length) {
            currentIndex.value = 0
        }
    }
}
</script>

<style lang="sass">
.image-cards
    list-style: none
    display: flex
    gap: 1.25rem
    top: 0
    left: 0
    transform: translateX(calc(var(--current-index) * -1 * (20rem + 1.25rem)))
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
        flex-shrink: 0
        gap: 1.5rem
        width: 20rem
        height: 25rem
        img
            height: 100%
            width: 100%
            object-fit: cover
            object-position: center
        @media (min-width: 743px)
            width: 20rem
    @media (min-width: 743px)
        transform: translateX(calc(var(--current-index) * -1 * (20rem + 1.25rem)))
        li
            width: 20rem
.image-carousel
    width: 100%
    overflow: hidden
    max-width: 100%
    position: relative
    gap: 1.5rem
    display: flex
    flex-direction: column
    small
        color: var(--primary-contrast-light)
        font-family: var(--section-heading-font)
        text-transform: uppercase
.controls
    display: flex
    gap: 1rem
    .left, .right
        height: 4rem
        width: 3rem
        background: var(--primary-contrast-light)
        display: flex
        align-items: center
        justify-content: center
        border: none
        span
            display: none
    .left
        &:before
            content: ''
            width: 0
            height: 0
            border-top: 10px solid transparent
            border-bottom: 10px solid transparent
            border-right: 10px solid #000
            display: block
            cursor: pointer
    .right
        &:before
            content: ''
            width: 0
            height: 0
            border-top: 10px solid transparent
            border-bottom: 10px solid transparent
            border-left: 10px solid #000
            display: block
</style>