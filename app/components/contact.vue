<template>
    <section class="contact" id="contact">
        <div class="wrapper">
            <div class="contact-form">
                <form>
                    <label>
                        {{ t('contact-form.labels.name') }}
                        <input type="text" name="name">
                    </label>
                    <label>
                        {{ t('contact-form.labels.phone') }}
                        <input type="number" name="number">
                    </label>
                    <label>
                        {{ t('contact-form.labels.day') }}
                        <input type="date" name="date">
                    </label>
                    <label>
                        {{ t('contact-form.labels.event') }}
                        <select>
                            <option v-for="(e, index) in events" :key="index">
                                {{ e.label }}
                            </option>
                        </select>
                    </label>
                    <label class="message">
                        {{ t('contact-form.labels.message') }}
                        <textarea name="message"></textarea>
                    </label>
                    <button>
                        {{ t('contact-form.labels.button') }}
                    </button>
                </form>
            </div>
            <div class="call-cta">
                <h2>
                    {{ t('contact.heading') }}
                </h2>
                <p>
                    <strong>
                        {{ t('contact.copy-strong') }}
                    </strong>
                    <br>
                    {{ t('contact.copy') }}
                </p>
                <div class="contact-people">
                    <div class="contact-person">
                        <span>Valente Rodriguez:</span>
                        <a href="/">(323) 334-7555</a>
                    </div>
                    <div class="contact-person">
                        <span>Antelmo Ortega:</span>
                        <a href="/">(323) 571-5121</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
const { t, tm, rt } = useI18n()

const eventType = [
    'Birthdays',
    'Weddings',
    'Quinceañeras',
    'Anniversaries',
    'Baby Showers',
    'Graduations',
    'Communions',
    'Baptisms',
    'Divorces'
]

const events = computed(() => {
    return tm('contact-form.events').map(event => ({
        label: rt(event.label)
    }))
})

</script>

<style lang="sass">
.contact
    background: var(--primary-dark)
    .wrapper
        padding: 1.5rem
        background: var(--primary-dark)
        display: flex
        flex-direction: column
        gap: 1.5rem
        min-height: 732px
        margin: 0 auto
        max-width: 1200px
        @media (max-width: 980px)
            height: 100vh
        @media (min-width: 743px)
            flex-direction: row-reverse
        .call-cta
            display: flex
            flex-direction: column
            gap: 1rem
            @media (min-width: 743px)
                flex: 1
                justify-content: center
            h2
                font-family: var(--section-heading-font)
                color: var(--primary-light)
                text-transform: uppercase
                @media (min-width: 1024px)
                    font-size: 2rem
            p
                font-family: var(--copy-font)
                color: var(--primary-light)
                @media (min-width: 743px)
                    font-size: 1.25rem
                @media (min-width: 1024px)
                    max-width: 24rem
            .contact-people
                span
                    font-family: var(--section-heading-font)
                    color: var(--primary-light)
                    text-transform: uppercase
                    font-size: .75rem
                    margin-right: .5rem
        .contact-form
            flex: 1
            display: flex
            flex-direction: column
            @media (min-width: 743px)
                flex: 1
            form
                display: flex
                flex-direction: column
                gap: .5rem
                height: 100%
                flex: 1
                button
                    // width: 11.25rem
                    height: 3rem
                    font-family: var(--section-heading-font)
                    text-transform: uppercase
                    border: none
                    border-radius: .25rem
                label
                    display: flex
                    flex-direction: column
                    gap: .5rem
                    font-family: var(--section-heading-font)
                    font-size: .75rem
                    text-transform: uppercase
                    color: var(--primary-light)
                input, select, textarea
                    padding: .5rem
                    border-radius: .2rem
                    border: none
                    background: rgba(255, 255, 255, 0.12)
                    resize: none
                    color: var(--primary-light)
                    font-family: var(--copy-font)
                    &:focus
                        outline: none
                option
                    width: 100%
                    background: var(--primary-dark)
        .contact-person
            a
                color: var(--primary-contrast-light)
        .message
            display: flex
            flex-direction: column
            flex: 1
            textarea
                flex: 1
</style>