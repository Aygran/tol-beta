import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-4xl font-bold text-center">
          Tree of Life
        </div>
      </div>
      <div className="text-sm text-gray-600 text-center pb-8">
        An immersive world and TTRPG
      </div>
    </div>
  );
}
