<template>
    <section class="faq" id="faq">
        <h2>FAQ</h2>
        <ul class="questions">
            <li v-for="(q, index) in tm('faq.questions')" >
                <div class="toggle-question" @click="toggleQuestion(index)">
                    <h3>
                        {{ rt(q.question) }}
                    </h3>
                    <button :class="{ rotated: open.includes(index) }">
                        <span>
                            Toggle FAQ Question
                        </span>
                    </button>
                </div>
                <div :class="['answer-wrapper', { toggled: open.includes(index) }]">
                    <p
                        :class="['answer', { closed: !(open.includes(index)) }]">
                        {{ rt(q.answer) }}
                    </p>
                </div>
                <hr :style="{ height: '1px', background: 'black', border: 'none', marginTop: '1.5rem' }">
            </li>
        </ul>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const { t, tm, rt } = useI18n()

const isOpen = ref(false)
const open = ref([])

function toggleQuestion(index) {
    console.log(index)
    if (open.value.includes(index)) {
        open.value = open.value.filter(i => i !== index)
        console.log('remove index: ', open.value)
    } else {
        open.value.push(index)
        console.log('add new index: ', open.value)
    }
}

</script>

<style lang="sass">
.faq
    padding: 3rem 1.5rem
    background: var(--primary-contrast)
    display: flex
    flex-direction: column
    gap: 1.5rem
    @media (min-width: 743px)
        gap: 3rem
    h2
        font-family: var(--display-font)
        color: var(--primary-dark)
        @media (min-width: 743px)
            font-size: 3rem
            text-align: center
    ul
        list-style: none
        display: flex
        flex-direction: column
        gap: 1.5rem
        max-width: 821px
        margin: 0 auto
        button
            height: 1rem
            width: 1rem
            background: none
            flex-shrink: 0
            display: flex
            justify-content: center
            position: relative
            border: none
            transition: all .2s ease-in-out
            span
                display: none
            // create plus sign
            // vertical bar
            &:before
                content: ''
                height: .75rem
                width: 2px
                background: var(--primary-contrast-saturated)
                position: absolute
                top: 50%
                transform: translate(0, -50%)
            // horizontal bar
            &:after
                content: ''
                width: .75rem
                height: 2px
                background: var(--primary-contrast-saturated)
                position: absolute
                top: 50%
                transform: translate(0, -50%)
            &.rotated
                transform: rotate(-45deg)
                transition: all .2s ease-in-out
        h3
            font-family: var(--section-heading-font)
            text-transform: uppercase

        li
            .toggle-question
                display: flex
                justify-content: space-between
                gap: 1rem
                cursor: pointer
            .answer-wrapper
                height: 0
                overflow: hidden
                interpolate-size: allow-keywords
                transition: height .2s ease-in-out

                &.toggled
                    height: auto

                .answer
                    font-family: var(--copy-font)
                    margin: 0
                    padding: 1.5rem 0 .25rem 0
</style>