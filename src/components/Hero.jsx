import { HERO } from "../constants";
import dev from "../assets/dev.png";
import { motion } from "framer-motion"


const Hero = () => {
    return (
        <section className="flex min-h-screen flex-wrap items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2">
                <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
                    {HERO.name}
                </h2>
                <p className="p-2 text-4xl tracking-tighter lg:text[1xl] ">
                    {HERO.greet}
                </p>
                <p className="mb-8 p-2 text-xl ">
                    {HERO.description}
                </p>
                <button
                    type="submit"
                    className="mb-4 inline-block h-16 px-10 bg-transparent border border-gray-400 text-gray-400 font-medium rounded-lg hover:bg-white/70 hover:text-black hover:font-bold"
                    onClick={() => {
                        const link = document.createElement("a");
                        link.href = "./Anuj_Resume.pdf";
                        link.download = "Anuj Resume";
                        link.click();
                    }}
                >
                    Resume
                </button>

            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        src={dev} width={550} height={550} alt="Anuj Tiwari" className="rounded-3xl" />
                </div>
            </motion.div>
        </section>
    )
}
export default Hero