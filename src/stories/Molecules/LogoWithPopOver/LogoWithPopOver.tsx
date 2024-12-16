"use client";

import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Image, { StaticImageData } from "next/image";

interface LogoWithPopoverProps {
  src: string | StaticImageData;
  alt: string;
  description: string;
  animationDelay?: string;
}

export const LogoWithPopover = ({
  src,
  alt,
  description,
  animationDelay = "0s",
}: LogoWithPopoverProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div
      className="w-[15%] transition-transform transform hover:scale-125 float"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
      style={{
        animationDelay, // Adiciona o delay à animação
      }}
    >
      <Image
        src={src}
        alt={alt}
        className="w-full"
        style={{ objectFit: "contain" }}
      />
      <Popover
        id={`popover-${alt}`}
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