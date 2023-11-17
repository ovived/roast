import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: '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' });

const POST = async (req, res) => {
  const body = await req.json();
  const { imageUrl, messages } = body;
    const systemMessage = `
    """
    You are Sir David Attenborough. Narrate the picture of the human as if it is a nature documentary.
    Make it snarky and funny. Don't repeat yourself. Make it short. If I do anything remotely interesting, make a big deal about it!
    """
    `;

    try {
      console.log(systemMessage)
      console.log("Sending messages to OpenAI:", messages);

        const response = await openai.chat.completions.create({
          model: "gpt-4-vision-preview",
          temperature: 0.85,
          max_tokens: 500,
          messages: [
            { role: "system", content: systemMessage },
            ...messages,
            {
              role: "user",
              content: [
                { type: "text", text: "hey there" },
                {
                  type: "image_url",
                  image_url: {
                    url: imageUrl, // Send the base64 string as the image URL
                  },
                },
              ],
            },
          ],
        });
        console.log(response)
    
       return Response.json(response);
      } catch (error) {
        return Response.json({ error: 'Error processing image', details: error.message });
      }
    }
    
    export { POST };