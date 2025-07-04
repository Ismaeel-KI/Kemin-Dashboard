import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    console.log("Incoming messages:", messages)
    console.log("Using OpenAI key:", process.env.OPENAI_API_KEY?.slice(0, 8))

    const { textStream } = await streamText({
      model: openai("gpt-4o"),
      system: `You are a helpful customer service AI assistant for Industries...`, // truncated
      messages,
    })

    return new Response(textStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    })
  } catch (err) {
    console.error("Error in AI handler:", err)
    return new Response("Internal server error", { status: 500 })
  }
}
