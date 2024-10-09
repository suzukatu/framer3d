import { motion } from "framer-motion"
import ThreeModel from "./components/ThreeModel"

function App() {

  return (
    <>
      <div className="h-screen bg-slate-900">
        <div className="container mx-auto">
          {/* header */}
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 1,
              delay: 0.5,
              stiffness: 130
            }}
            className="flex justify-between items-center text-white h-16">
            <span className="font-bold text-2xl">-Framer Website-</span>
            <nav>
              <ul className="flex items-center gap-4">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </nav>
          </motion.header>
          {/* hero */}
          <section className="lg:py-48">
            <div className="flex items-center">
              {/* left */}
              <div className="space-y-3">
                <motion.h2
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    duration: 1,
                    delay: 0.5,
                    stiffness: 130
                  }}
                  className="text-white lg:text-9xl md:text-8xl font-bold lg:max-w-[40rem]">
                  Framer 3D Website
                </motion.h2>
                <motion.p
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    duration: 1,
                    delay: 0.8,
                    stiffness: 130
                  }}
                  className="text-white lg:max-w-[40rem] lg:text-5xl font-semibold">
                  The <span className="text-orange-500">next</span> generation
                </motion.p>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    duration: 1,
                    delay: 0.9,
                    stiffness: 130
                  }}
                  className="flex items-center gap-4">
                  <button className="py-3 px-6 rounded-md border-2 my-4 hover:translate-y-1 duration-150">
                    <span className="font-bold text-white">More Details</span>
                  </button>
                  <button className="py-3 px-6 rounded-md border-2 my-4 hover:translate-y-1 duration-150">
                    <span className="font-bold text-orange-500">Samples</span>
                  </button>
                </motion.div>

              </div>

              {/* right 3d model */}
              <div className="w-1/2">
                <ThreeModel />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
