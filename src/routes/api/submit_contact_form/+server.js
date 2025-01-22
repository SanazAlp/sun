import { BOT_TOKEN, TELEGRAM_ID } from '$env/static/private';

export async function POST({ request }) {
    const data = await request.json();
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_ID,
            text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
        }),
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
}
