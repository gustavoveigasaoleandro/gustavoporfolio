import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image"; // Ajuste a importação
import { Box } from "../Box/Box";
import { Text } from "@/stories/Atoms/Text/Text";
import { ProjectProps } from "@/components/ui/project";

const imageVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const textVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const Project: React.FC<ProjectProps> = ({
  imageSrc,
  imageAlt,
  description,
  title,
  buttonText,
  buttonLink,
}) => {
  return (
    <Box type="big">
      <div className="w-full h-full flex mobile:flex-col laptop:flex-row items-center">
        <motion.div
          className="laptop:w-1/2 mobile:w-full h-full flex justify-center align-middle items-center relative"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ duration: 1 }}
        >
          <div className="mobile:w-[70%] mobile:pt-1 laptop:p-0 laptop:w-[85%]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              style={{ objectFit: "cover" }}
              className="rounded-md hover:shadow-2xl hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </motion.div>

        <motion.div
          className="laptop:w-1/2 mobile:w-[90%] h-full pl-[2%] flex flex-col justify-center text-left relative"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 1 }}
        >
          <Text type="small" color="secondary" costumStyle="font-bold">
            {title}
          </Text>
          <Text type="small" costumStyle="tablet:w-[90%] mb-2">
            {description}
          </Text>

          <a href={buttonLink}>
            <button className="w-fit border-primary-default hover:border-secondary-default border-[1px] transition-transform duration-3000 rounded-md p-1">
              <Text type="small" color="white">
                {buttonText}
              </Text>
            </button>
          </a>
        </motion.div>
      </div>
    </Box>
  );
};
