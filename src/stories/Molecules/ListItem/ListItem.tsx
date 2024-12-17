"use client";
import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DownloadIcon from "@/assets/images/icons/downloadIcon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ListItem {
  text: string;
  link?: string; // Link específico para cada item
  subItems?: Array<{ text: string; link?: string }>;
}

interface DynamicNestedListProps {
  header: string;
  items: ListItem[];
}

export const DynamicNestedList: React.FC<DynamicNestedListProps> = ({
  header,
  items,
}) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  // Alterna o estado de expansão do item principal
  const handleToggle = (text: string) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [text]: !prevState[text],
    }));
  };

  // Redireciona para o link especificado
  const handleRedirect = (link?: string) => {
    if (link) {
      window.open(link, "_blank"); // Abre o link em uma nova guia
    }
  };

  return (
    <List className=" overflow-y-auto no-scrollbar max-h-[50vh]">
      {items.map((item) => (
        <React.Fragment key={item.text}>
          {/* Item Principal */}
          <ListItemButton onClick={() => handleToggle(item.text)}>
            <ListItemText sx={{ color: "#e25813" }} primary={item.text} />
            {item.subItems ? (
              openItems[item.text] ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )
            ) : null}
          </ListItemButton>

          {/* Subitens */}
          {item.subItems && (
            <Collapse in={!!openItems[item.text]} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                sx={{
                  maxHeight: "150px",
                  overflowY: "auto",
                  "&::-webkit-scrollbar": { width: "8px" },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#e25813",
                    borderRadius: "4px",
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "#1e1e1e",
                  },
                }}
              >
                {item.subItems.map((subItem) => (
                  <ListItemButton
                    key={subItem.text}
                    onClick={() => handleRedirect(subItem.link)} // Redireciona ao clicar
                    sx={{
                      pl: 4,
                      display: "flex",
                      alignItems: "center",
                      "&:hover": {
                        "& .image": {
                          opacity: 1,
                          transition: "opacity 0.3s ease",
                        },
                      },
                    }}
                  >
                    <ListItemText
                      primary={subItem.text}
                      sx={{ color: "white", marginRight: 1 }}
                    />
                    {/* Ícone de Download */}
                    <Image
                      className="image mobile:w-[20px] tablet:w-[30px] laptop:w-[35px] opacity-0 transition-opacity duration-300 ease-in-out"
                      src={DownloadIcon}
                      alt="Download icon"
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </List>
  );
};
