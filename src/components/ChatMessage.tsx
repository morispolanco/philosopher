import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

export const ChatMessage = ({ message, isUser }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "p-4 rounded-lg max-w-[80%] animate-fade-in",
        isUser ? "bg-chat-user ml-auto" : "bg-chat-bot"
      )}
    >
      {isUser ? (
        <p className="text-sm md:text-base leading-relaxed">{message}</p>
      ) : (
        <div 
          className="text-sm md:text-base leading-relaxed prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  );
};