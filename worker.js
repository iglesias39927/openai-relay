export default {
  async fetch(request, env) {
    if (request.method !== 'POST') return new Response('Use POST', { status: 200 });
    const body = await request.text();
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': Bearer ${env.OPENAI_API_KEY}, 'Content-Type': 'application/json' },
      body
    });
    return new Response(await r.text(), { status: r.status, headers: { 'Content-Type': 'application/json' } });
  }
}
