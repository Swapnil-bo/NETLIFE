const OLLAMA_BASE_URL = import.meta.env.VITE_OLLAMA_BASE_URL || 'http://localhost:11434'
const OLLAMA_MODEL = import.meta.env.VITE_OLLAMA_MODEL || 'mistral:7b-instruct'

export async function generateShowConcept(fields) {
  const prompt = `You are a creative Netflix show writer. Based on the following real person's life details, generate a dramatic Netflix Original Series concept.

PERSON DETAILS:
- Name: ${fields.name}
- Job/What they do: ${fields.job}
- City: ${fields.city}
- Biggest quirk or trait: ${fields.quirk}
- Dramatic life moment: ${fields.drama}

Generate a full Netflix show concept. You MUST respond with ONLY a valid JSON object, no markdown, no backticks, no explanation. Just raw JSON.

The JSON must follow this exact structure:
{
  "show_title": "string",
  "tagline": "string",
  "genre": "string",
  "netflix_rating": "string",
  "content_warnings": "string",
  "logline": "string",
  "protagonist": {
    "name": "string",
    "age": "string",
    "flaw": "string",
    "secret": "string"
  },
  "supporting_cast": [
    { "name": "string", "role": "string", "description": "string" },
    { "name": "string", "role": "string", "description": "string" },
    { "name": "string", "role": "string", "description": "string" }
  ],
  "season_arc": {
    "act1": "string",
    "act2": "string",
    "act3": "string"
  },
  "episodes": [
    { "number": 1, "title": "string", "description": "string" },
    { "number": 2, "title": "string", "description": "string" },
    { "number": 3, "title": "string", "description": "string" },
    { "number": 4, "title": "string", "description": "string" },
    { "number": 5, "title": "string", "description": "string" },
    { "number": 6, "title": "string", "description": "string" },
    { "number": 7, "title": "string", "description": "string" },
    { "number": 8, "title": "string", "description": "string" }
  ],
  "trailer_script": "string"
}`

  const response = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: OLLAMA_MODEL,
      messages: [{ role: 'user', content: prompt }],
      stream: false,
      format: 'json'
    })
  })

  if (!response.ok) {
    throw new Error(`Ollama error: ${response.status} — is Ollama running?`)
  }

  const data = await response.json()
  const raw = data.message?.content || ''

  try {
    return JSON.parse(raw)
  } catch {
    const match = raw.match(/\{[\s\S]*\}/)
    if (match) return JSON.parse(match[0])
    throw new Error('Failed to parse JSON from model response.')
  }
}