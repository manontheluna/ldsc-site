<template>
    <section class="contact">
        <div class="contact-form">
            <form>
                <label>
                    Name
                    <input type="text" name="name">
                </label>
                <label>
                    Phone
                    <input type="number" name="number">
                </label>
                <label>
                    Date
                    <input type="date" name="date">
                </label>
                <label>
                    Type of Event
                    <select>
                        <option v-for="(type, index) in eventType" :key="index">
                            {{ type }}
                        </option>
                    </select>
                </label>
                <label class="message">
                    Message
                    <textarea name="message"></textarea>
                </label>
            </form>
        </div>
        <div class="call-cta">
            <h2>
                Have Questions?
            </h2>
            <p>
                <strong>Prefer to speak to someone directly?</strong>
                <br>
                We’re happy to answer any questions, discuss your event, and help you plan the perftct experience.
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
    </section>
</template>

<script setup>
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
</script>

<style lang="sass">
.contact
    padding: 1.5rem
    background: var(--primary-dark)
    display: flex
    flex-direction: column
    gap: 1.5rem
    min-height: 732px
    height: 90vh
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