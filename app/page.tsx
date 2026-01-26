"use client";

import { useState } from "react";
import ModelCard from "./components/model-card";
import ModelViewer from "./components/model-viewer";
import { models } from "./data/models";

export default function Home() {
  const [selectedModel, setSelectedModel] = useState<{
    path: string;
    title: string;
  } | null>(null);

  const handleImageClick = (modelPath: string, title: string) => {
    setSelectedModel({ path: modelPath, title });
  };

  const closeModal = () => {
    setSelectedModel(null);
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50 text-center mb-12">
          My Blender Masterpiece
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {models.map((model, index) => (
            <ModelCard
              key={index}
              image={model.image}
              title={model.title}
              model={model.model}
              onImageClick={() => handleImageClick(model.model, model.title)}
            />
          ))}
        </div>
      </main>

      <ModelViewer
        modelPath={selectedModel?.path || ""}
        isOpen={!!selectedModel}
        onClose={closeModal}
        title={selectedModel?.title || ""}
      />
    </div>
  );
}
