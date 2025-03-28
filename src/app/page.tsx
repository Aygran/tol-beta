import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Full Tree Stone.png"
          alt="Tree of Life Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Semi-transparent overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-4xl font-bold text-center text-white drop-shadow-lg">
            Tree of Life <br />
            TTRPG
          </div>
        </div>
        <div className="text-sm text-gray-200 text-center pb-8">
          <div className="bg-white/90 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Join Our Discord Server</h2>
            <p className="text-lg mb-4">
              Join the Tree of Life Discord server to get the latest updates and help with the app. 
            </p>
            <a
              href="https://discord.gg/5RkvTgBTjP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-[#5865F2] text-white rounded hover:bg-[#4752C4] transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Join Discord
            </a>
          </div>
        </div>
        <div className="text-sm text-gray-200 text-center pb-8">
          This is a beta version of the Tree of Life character sheet app. <br />
          It utilizes cookies to save your character sheet and abilities, and does not store any data on the server. <br />
          If you clear your cookies, your character sheet and abilities will be lost.
        </div>
        <div className="text-sm text-gray-200 text-center pb-8">
          An immersive world and TTRPG
        </div>
      </div>
    </div>
  );
}
