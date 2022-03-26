import { AnimatePresence, motion } from "framer-motion"
import { PropsWithChildren } from "react"

interface Props {}

export function PageTransition(props: PropsWithChildren<Props>) {
  return (
    <AnimatePresence>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            opacity: 0,
          },
        }}
        transition={{ duration: 0.4 }}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  )
}
