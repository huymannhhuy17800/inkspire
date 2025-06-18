import React from "react";
import Image from "./image";

const Comment = () => {
  return (
    <div className="p-4 bg-gray-300 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src="avatar.jpg"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-medium">John Cena</span>
        <span className="text-sm">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum est le texte de remplissage le plus connu et provient de
          plusieurs passages d'un livre de Cicéron, écrit en 45 avant JC.
        </p>
      </div>
    </div>
  );
};

export default Comment;
