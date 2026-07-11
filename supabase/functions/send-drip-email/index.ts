import "jsr:@supabase/functions-js/edge-runtime.d.ts";

// Create a Resend class instance directly since we're in Deno
// We can use fetch to call the Resend API
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      },
    });
  }

  try {
    const payload = await req.json();

    // Support both direct invocation ({ email: '...' }) and Supabase Webhook ({ record: { email: '...' } })
    const email = payload.record?.email || payload.email;

    if (!email) {
      throw new Error("No email provided in payload");
    }

    if (!RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set. Simulating email send for:", email);
      return new Response(JSON.stringify({ status: "simulated", email }), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Founders <founders@vibecraft.app>", // User needs to configure verified domain
        to: [email],
        subject: "Here's what your AI output looks like with Pro vibes \uD83D\uDD25",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #111;">Hey there! \uD83D\uDC4B</h1>
            <p style="color: #444; font-size: 16px; line-height: 1.5;">
              Thanks for checking out VibeCraft! We noticed you recently downloaded your generated AI instructions.
            </p>
            <p style="color: #444; font-size: 16px; line-height: 1.5;">
              Did you know that with <strong>VibeCraft Pro</strong>, you can get access to:
            </p>
            <ul style="color: #444; font-size: 16px; line-height: 1.5;">
              <li>Custom framework support</li>
              <li>Advanced rule configurations</li>
              <li>Priority support & faster generations</li>
            </ul>
            <p style="color: #444; font-size: 16px; line-height: 1.5;">
              Upgrade today and take your AI generation to the next level.
            </p>
            <a href="https://vibecraft.app/pricing" style="display: inline-block; background-color: #b1ff62; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; margin-top: 10px;">
              Get Pro Vibes
            </a>
          </div>
        `,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      });
    } else {
      console.error("Resend error:", data);
      return new Response(JSON.stringify({ error: data }), {
        headers: { "Content-Type": "application/json" },
        status: 400,
      });
    }
  } catch (error) {
    console.error("Function error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
});
