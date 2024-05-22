import { SkillMeterProps } from "@/interfaces/SkillMeter";
import { Text } from "@/stories/Atoms/Text/Text";
import { ProgressBar } from "@/stories/Molecules/ProgressBar/ProgressBar";

export const SkillMeter = ({ progress, skill }: SkillMeterProps) => {
  return (
    <div>
      <Text color="white">
        {"<"}
        {skill}
        {">"}
      </Text>
      <div className="flex w-[552px] mobile:w-[265px] align-middle items-center gap-5">
        <ProgressBar progressValue={progress} />
        <Text color="white" type="small">
          {progress}%
        </Text>
      </div>
    </div>
  );
};
