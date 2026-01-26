import Image from "next/image";

interface ModelCardProps {
  image: string;
  title: string;
  model: string;
  onImageClick: () => void;
}

export default function ModelCard({ image, title, model, onImageClick }: ModelCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-shadow">
      <div className="aspect-square relative cursor-pointer" onClick={onImageClick}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:opacity-80 transition-opacity"
        />
      </div>
      <div className="p-4 border-t border-white dark:border-zinc-600">
        <h3 className="text-lg font-medium text-black dark:text-white">
          {title}
        </h3>
      </div>
    </div>
  );
}