import { useEffect } from "react"
import { useStorage } from "../hooks/useStorage"
import { motion } from "framer-motion"

// with {}
export const ProgressBar = ({file, setFile}) => {

    const { progress, url } = useStorage(file)
    
    useEffect(() => {
        if(url){
            setFile(null)
        }
    }, [url, setFile])

    return (
        <motion.div
            className="progress-bar"
            initial={{width: 0}}
            animate={{width: progress + '%'}}
        ></motion.div>
    )
}



// without {}
// export default function ProgressBar() {
//   return (
//     <div className="progress-bar">progress</div>
//   )
// }
