import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { ChatAnthropic } from "@langchain/anthropic";
import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { NextResponse } from "next/server";
import { AIMessage } from "@langchain/core/messages";

const model = new ChatAnthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
    model: "claude-3-7-sonnet-latest"
});

const agent = createReactAgent({
    llm: model,
    tools: []
});

// API handler
export async function POST(request) {
    const body = await request.json();

    const prompt = body.prompt
    const result = await agent.invoke(
        {
            messages: [{
                role: "user",
                content: prompt
            }]
        }
    )
    const aiMessage = result.messages.find((msg) => msg instanceof AIMessage)

    if (aiMessage) {
        return NextResponse.json({ response: aiMessage.content })
    } else {
        return NextResponse.json({ error: "AI message not found." });
    }
}
