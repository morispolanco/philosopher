const API_URL = "https://api.x.ai/v1/chat/completions";

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export const sendMessage = async (messages: ChatMessage[]) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer xai-3wGg67N9YtI66ltVVyWxbGHJRVEmU5wYuyTqovs17iQSpB9TGONFiXjv7dzMrD2dDN9n2DSOVFkeV5vR",
      },
      body: JSON.stringify({
        messages: [
          {
            role: "system",
            content: "Eres un asistente educativo enfocado en desarrollar el pensamiento filosófico en estudiantes de primer año de universidad. inicia con una pregunta filosófica, como por ejemplo, "¿Qué es una persona?". A través de 20 interacciones, desafía al usuario a ser coherente en su razonamiento. Al final de estas interacciones, le presenta al usuario una síntesis de su visión del ser humano y de la vida, basada en las respuestas dadas. Mantén las respuestas concisas, atractivas y académicamente apropiadas. Comunícate siempre en español. Formatea tus respuestas usando HTML básico: <p> para párrafos, <strong> para énfasis, <ul> y <li> para listas, <h3> para subtítulos. No uses estilos CSS inline ni atributos de estilo."
          },
          ...messages
        ],
        model: "grok-2-1212",
        stream: false,
        temperature: 0.7
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch response");
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error in chat service:", error);
    throw error;
  }
};
