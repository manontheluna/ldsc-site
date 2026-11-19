import { Resend } from 'resend'
import { createError, defineEventHandler, readBody } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async e => {
    const config = useRuntimeConfig(e)
    const body = await readBody(e)

    const {
        name,
        number,
        date,
        type,
        message,
        website
    } = body

    if (website) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid Submission'
        })
    }

    if (!name || !number || !date || !type || !message) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Please fill out all required fields'
        })
    }

    const resend = new Resend(config.resendApiKey)

    const { data, error } = await resend.emails.send({
        from: 'Los De South Central Website:  <no-reply@notifications.losdesouthcentral.com>',
        to: [
            'aortega0514@gmail.com',
            'valenterodriguez73@icloud.com'
        ],
        subject: `New inquiry for gig`,
        html: `
            <h2>New Booking Inquiry</h2>
            <p>
                <strong>Name: </strong>
                ${ name }
            </p>
            <p>
                <strong>Phone: </strong>
                ${ number }
            </p>
            <p>
                <strong>Event Date: </strong>
                ${ date }
            </p>
            <p>
                <strong>Event type: </strong>
                ${ type }
            </p>
            <h3>Message</h3>
            <p>
                ${ message || 'No message provided' }
            </p>
        `
    })

    if (error) {
        console.error('Resend error: ', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Unable to send inquiry'
        })
    }

    return {
        success: true,
        id: data?.id
    }
})