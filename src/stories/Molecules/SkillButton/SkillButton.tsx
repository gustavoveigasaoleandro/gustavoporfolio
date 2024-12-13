"use client";
import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StaticImageData } from "next/image";
import { SkillButtonProps } from "@/interfaces/SkillButton";

export const SkillButton = ({
  image,
  fallback,
  description,
}: SkillButtonProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Avatar
        className="desktop:w-2xl bg-white desktop:h-xl mobile:w-lg mobile:h-[93px] shadow-2xl m-0 p-0"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <AvatarImage
          src={typeof image === "string" ? image : image.src}
          alt={fallback}
        />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: "none" }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>{description}</Typography>
      </Popover>
    </div>
  );
};
