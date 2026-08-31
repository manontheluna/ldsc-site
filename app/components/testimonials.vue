<template>
    <section class="testimonials" id="testimonials">
        <h2>
            Testimonials
        </h2>
        <carousel :cardData="TESTIMONIALS" />
    </section>
</template>

<script setup>
const TESTIMONIALS = [
    {
        author: 'Michael R.',
        copy: 'Edward was fantastic to work with from start to finish. He was professional, responsive, and made sure everything sounded great.',
        date: '08/12/26',
        rating: 5
    },
    {
        author: 'Sarah M.',
        copy: 'We could not have asked for a better experience. The music was exactly what we wanted, and Edward kept everything running smoothly throughout the event.',
        date: '07/26/26',
        rating: 5
    },
    {
        author: 'David T.',
        copy: 'Edward did an amazing job at our event. He was punctual, professional, and really knew how to keep the energy going.',
        date: '07/08/26',
        rating: 5
    },
    {
        author: 'Jennifer L.',
        copy: 'Everything was seamless from setup to the last song. Our guests had a great time and several people commented on how good the music was.',
        date: '06/21/26',
        rating: 5
    },
    {
        author: 'Carlos G.',
        copy: 'Highly recommend Edward for any event. The sound quality was excellent, and he was incredibly easy to work with.',
        date: '06/05/26',
        rating: 5
    },
    {
        author: 'Amanda P.',
        copy: 'Edward helped make our celebration one to remember. He was reliable, professional, and played exactly the kind of music we were hoping for.',
        date: '05/17/26',
        rating: 5
    },
    {
        author: 'Brian H.',
        copy: 'Great experience all around. Edward arrived early, had everything set up on time, and kept the music going all night.',
        date: '04/29/26',
        rating: 5
    },
    {
        author: 'Nicole S.',
        copy: 'We were so happy with how everything turned out. Edward was professional, friendly, and did an excellent job keeping everyone entertained.',
        date: '04/11/26',
        rating: 5
    },
    {
        author: 'Daniel W.',
        copy: 'Edward was exactly what we needed for our event. The music, sound, and overall service were excellent from beginning to end.',
        date: '03/22/26',
        rating: 5
    },
    {
        author: 'Rachel B.',
        copy: 'I would absolutely recommend Edward. He made the entire process easy and delivered a great experience for us and our guests.',
        date: '02/14/26',
        rating: 5
    }
];
</script>

<style lang="sass">
.testimonials
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
</style>