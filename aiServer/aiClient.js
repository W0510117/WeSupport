const AI_BASE_URL = process.env.REACT_APP_AI_URL || "http://localhost:5000";

export async function startAI() {
  const res = await fetch(`${AI_BASE_URL}/api/ai/start`, {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  });

  if (!res.ok) throw new Error("AI server error");
  return res.json(); // { reply: "Hello! ..." }
}

export async function chatWithAI(message) {
  const res = await fetch(`${AI_BASE_URL}/api/ai/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  if (!res.ok) throw new Error("AI server error");
  return res.json();
}
export async function getAIResponseStream(message, onData) {
  const res = await fetch(`${AI_BASE_URL}/api/ai/stream`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });
    if (!res.ok) throw new Error("AI server error");
    const reader = res.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let done = false;
    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      onData(chunkValue);
    }
}