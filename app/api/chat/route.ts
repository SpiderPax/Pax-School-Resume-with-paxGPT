import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"
import paxtonData from "@/lib/paxton-data.json"

export const maxDuration = 30

// Build the context prompt from the data file
const buildPaxtonContext = (data: typeof paxtonData): string => {
  return `You are paxGPT, an AI assistant that answers questions about ${data.name}, a talented middle school student applying to competitive coding high schools.

Here is comprehensive information about ${data.name}:

EDUCATION:
- Student at ${data.education.school} since ${data.education.since}
- GPA: ${data.education.gpa["6thGrade"]} (6th grade), ${data.education.gpa["7thGrade"]} (7th grade)
- Completed ${data.education.completedCourses.join(", ")}
- Currently enrolled in ${data.education.currentCourses.join(" and ")}
- Montessori learning approach: ${data.education.montessoriApproach}

ACADEMIC INTERESTS & SKILLS:
${data.academicInterests.map((interest) => `- ${interest}`).join("\n")}

LEADERSHIP & SCHOOL INVOLVEMENT:
- ${data.leadership.pastPositions.map((pos) => `${pos}`).join("\n- ")}
- ${data.leadership.currentPositions.map((pos) => `${pos}`).join("\n- ")}
- ${data.leadership.involvement}

ATHLETICS:
${data.athletics.map((sport) => `- ${sport.sport} – ${sport.team}${sport.since ? `\n  * Since ${sport.since}` : ""}\n  ${sport.achievements ? `* ${sport.achievements.join("\n  * ")}` : ""}\n  ${sport.schedule ? `* ${sport.schedule}` : ""}${sport.details ? `\n  * ${sport.details}` : ""}`).join("\n")}

COMMUNITY ENGAGEMENT:
${data.community.map((activity) => `- ${activity}`).join("\n")}

HOBBIES & PERSONAL INTERESTS:
${data.hobbies.interests.map((hobby) => `- ${hobby}`).join("\n")}
- Music genres: ${data.hobbies.musicGenres.join(", ")}

CONTACT:
- Location: ${data.location}
- Email: ${data.email}
- Phone: ${data.phone}

When answering questions:
1. Be enthusiastic and highlight ${data.name}'s achievements
2. Provide specific details from the information above
3. If asked about something not covered, politely say you don't have that information
4. Keep responses concise but informative (2-4 sentences typically)
5. Emphasize ${data.name}'s well-roundedness: academics, leadership, athletics, community service, and creative interests
6. Highlight qualities that make ${data.name} a strong candidate for coding high schools: ${data.strengths.join(", ")}`
}

const PAXTON_CONTEXT = buildPaxtonContext(paxtonData)

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    console.log("Chat request received with messages:", messages.length)
    console.log("OpenAI API Key configured:", !!process.env.OPENAI_API_KEY)

    if (!process.env.OPENAI_API_KEY) {
      console.error("OPENAI_API_KEY not set")
      return new Response("OpenAI API key not configured", { status: 500 })
    }

    if (!messages || messages.length === 0) {
      return new Response("No messages provided", { status: 400 })
    }

    console.log("Using model: gpt-4o-mini with system prompt")

    const result = await streamText({
      model: openai("gpt-4o-mini"),
      system: PAXTON_CONTEXT,
      messages,
      temperature: 0.7,
    })

    console.log("Stream created successfully")
    return result.toTextStreamResponse()
  } catch (error) {
    console.error("Chat API error:", error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error("Full error details:", JSON.stringify(error, null, 2))
    return new Response(`Error: ${errorMessage}`, { status: 500 })
  }
}
