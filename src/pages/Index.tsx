import { Chat } from "@/components/Chat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container py-6">
          <h1 className="text-2xl font-bold text-center">
            Chat de Filosofía
          </h1>
          <p className="text-center text-muted-foreground mt-2">
            Participa en discusiones para mejorar en la coherencia y consistencia de tus ideas
          </p>
        </div>
      </header>
      <main className="container py-6">
        <Chat />
      </main>
    </div>
  );
};

export default Index;
