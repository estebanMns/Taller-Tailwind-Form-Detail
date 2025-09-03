export default function Home() {
  return (
    <div className="flex items-center justify-center bg-neutral-100 min-h-screen">
      <main className="flex flex-col divide-y gap-6 w-[600px] bg-white rounded-3xl p-8 shadow-lg">
        
        
        <section className="flex flex-col gap-1 pb-4">
          <h1 className="text-black text-2xl font-bold">Appearance</h1>
          <p className="text-gray-400 text-sm">Set or customize your preferences for the system</p>
        </section>

        
        <section className="flex flex-col gap-2 ">
        <div className="flex justify-between items-center pb-4">
          <div>
            <h2 className="text-gray-600 font-bold">Language</h2>
            <p className="text-gray-400 text-sm">Select the language of the platform</p>
          </div>
          <select className="w-32 border border-gray-300 rounded-lg px-2 py-1 text-sm text-gray-600 focus:outline-none focus:ring-* focus:ring-purple-500">
            <option>English</option>
            <option>Español</option>
            <option>中文</option>
          </select>
        </div>
        </section>

        
        <section className="flex flex-col gap-2 pb-4">
          <h2 className="text-gray-600 font-bold">Interface Theme</h2>
          <p className="text-gray-400 text-sm">Customize your application appearance</p>
          <div className="grid grid-cols-3 gap-4 justify-items-center items-center text-center">
            <div className=" bg-gray-200 rounded-2xl w-30 h-25"></div>
            <div className="bg-gray-100 rounded-2xl w-30 h-25"></div>
            <div className="bg-indigo-800 rounded-2xl w-30 h-25"></div>
            <span className=" text-gray-400 text-sm">Auto</span>
            <span className=" text-gray-400 text-sm">Light</span>
            <span className=" text-gray-400 text-sm">Dark</span>
          </div>
        </section>

        
        <section className="flex flex-col gap-2">
          <div className="flex justify-between items-start pb-4">
            <div>
              <h2 className="text-gray-600 font-bold">Accent Color</h2>
              <p className="text-gray-400 text-sm">Pick your platform's main color</p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-6 h-6 rounded-full bg-red-500"></div>
              <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
              <div className="w-6 h-6 rounded-full bg-green-500"></div>
              <div className="w-6 h-6 rounded-full bg-blue-500"></div>
              <div className="w-6 h-6 rounded-full bg-purple-500"></div>
            </div>
            </div>
        </section>

        
        <section className="flex flex-col gap-4 divide-y">
          <section className="flex items-center justify-between pb-4">
            <h2 className="text-gray-600 font-bold">✳︎ Reduce motion</h2>
            <input
              type="checkbox"
              className="appearance-none w-14 h-7 rounded-full bg-gray-300 checked:bg-indigo-500 relative transition duration-300 cursor-pointer
              before:content-[''] before:absolute before:w-6 before:h-6 before:bg-white before:rounded-full before:top-0.5 before:left-0.5
              before:transition-all checked:before:translate-x-7"
              defaultChecked
            />
          </section>

          <section className="flex items-center justify-between pb-4">
            <h2 className="text-gray-600 font-bold">▷ Auto play</h2>
            <input
              type="checkbox"
              className="appearance-none w-14 h-7 rounded-full bg-gray-300 checked:bg-indigo-500 relative transition duration-300 cursor-pointer
              before:content-[''] before:absolute before:w-6 before:h-6 before:bg-white before:rounded-full before:top-0.5 before:left-0.5
              before:transition-all checked:before:translate-x-7"
              defaultChecked
            />
          </section>

          <section className="flex items-center justify-between pb-4">
            <h2 className="text-gray-600 font-bold">🖼️ High quality photo</h2>
            <input
              type="checkbox"
              className="appearance-none w-14 h-7 rounded-full bg-gray-300 checked:bg-indigo-500 relative transition duration-300 cursor-pointer
              before:content-[''] before:absolute before:w-6 before:h-6 before:bg-white before:rounded-full before:top-0.5 before:left-0.5
              before:transition-all checked:before:translate-x-7"
              defaultChecked
            />
          </section>
        </section>
        

      
        <section className="flex justify-between items-center gap-3 pt-4">
          <p className="text-gray-400 text-sm cursor-pointer hover:underline">Reset to default</p>
          <div className="flex gap-4 ">
            <button className="text-black font-bold border rounded-lg px-4 py-2 bg-white">Cancel</button>
            <button className="text-white font-bold border rounded-lg px-4 py-2 bg-indigo-600">Save Preferences</button>
          </div>
        </section>

      </main>
    </div>
  );
}
