import { PROJECT_EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

const  ProjectExperience = () => {
    return (
        <section className="pt-20" id="work">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="p-8 text-center text-4xl font-semibold tracking-tighter">
                Project Experience
            </motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="space-y-8 p-10">
                {PROJECT_EXPERIENCES.map((experience, index) => (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        key={index} className="rounded-xl border border-stone-50/30 bg-white/10 p-4">
                        <h3 className="text-2xl font-semibold">{experience.project_name}</h3>
                        <p className="text-xl"><strong>Language:</strong> {experience.language}</p>
                        <p className="text-xl"><strong>Software:</strong> {experience.software}</p>
                        <p className="text-sm text-stone-300"><strong>Duration:</strong> {experience.duration}</p>
                        <p className="mt-2 text-base"><strong>Problem Faced:</strong> {experience.problem_Faced}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default ProjectExperience
