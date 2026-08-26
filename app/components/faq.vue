<template>
    <section class="faq">
        <h2>FAQ</h2>
        <ul class="questions">
            <li v-for="(q, index) in FAQS" >
                <div class="toggle-question" @click="toggleQuestion(index)">
                    <h3>
                        {{ q.question }}
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
                        {{ q.answer }}
                    </p>
                </div>
                <hr :style="{ height: '1px', background: 'black', border: 'none', marginTop: '1.5rem' }">
            </li>
        </ul>
    </section>
</template>

<script setup>
import { ref } from 'vue'
const FAQS = [
    {
        question: 'How many members are in the band?',
        answer: 'We have five members: a lead singer, guitarist, bassist, drummer, and accordion player.'
    },
    {
        question: 'Do you provide your own sound system?',
        answer: 'Yes. We bring a high-quality, well-balanced sound system that’s professionally tuned to ensure great sound throughout your event.'
    },
    {
        question: 'How Much do you charge?',
        answer: 'Our rates typically range from $550–$750 per hour, depending on the event location and travel distance. Contact us for a personalized quote, we’re happy to discuss your event and provide accurate pricing.'
    },
    {
        question: 'Is there a minimum?',
        answer: 'Yes. We require a 3-hour minimum for all bookings. To reserve your date, a deposit equal to the first hour’s performance is required.'
    },
    {
        question: 'Do you travel for events?',
        answer: 'Absolutely! We perform throughout the Greater Los Angeles area and across Southern California. Travel fees may apply for events outside our local service area.'
    },
    {
        question: 'What type of music do you play?/Do you play a variety?',
        answer: 'We specialize in Norteño music, but we’re a versatile band capable of learning and performing almost any song. Our repertoire includes cumbias, huapangos, románticas, corridos, and many other regional Mexican styles. If there’s a special song you’d like to hear, let us know, we’re happy to make it part of your event.'
    },
    {
        question: 'Do you take song requests?',
        answer: 'Yes! We can learn up to five songs in advance for your event. During the performance, we’re also happy to take requests. We have an extensive catalog of music, but because every event is different, we can’t guarantee that we’ll know or be able to perform every requested song.'
    },
    {
        question: 'Do you play music during the break?',
        answer: 'Yes. We can provide background music during our breaks for an additional $100. The fee covers the extra equipment, setup, and sound configuration needed to keep the music playing seamlessly throughout your event.'
    },
    {
        question: 'How far in advance should I book?',
        answer: 'We recommend booking as early as possible, especially for weekends and holidays, as dates fill up quickly.'
    },
    {
        question: 'How do I book the band?',
        answer: 'Booking is easy! Simply fill out the contact form on our website or give us a call with your event details, including the date, location, and type of event. Once we confirm our availability, a deposit secures your booking.'
    },
    {
        question: 'How long are you performance sets?',
        answer: 'We perform throughout your booked time with short breaks in between sets.'
    },
    {
        question: 'Can you perform outdoors?',
        answer: 'Yes, as long as there is adequate space, access to power, and protection from the weather.'
    },
    {
        question: 'What do you need from the venue?',
        answer: 'We ask for a safe, level performance area, access to electrical outlets for our sound equipment, and a dedicated parking space close to the performance area. This helps us safely transport and set up our instruments and sound equipment efficiently.'
    },
    {
        question: 'Can you accommodate special announcements or dedications?',
        answer: 'Yes! We’d be happy to help make your event more memorable with special announcements or dedications when arranged in advance.'
    }
]

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