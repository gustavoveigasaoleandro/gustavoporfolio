"use client";
import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

interface ListItem {
  text: string;
  subItems?: Array<{ text: string }>;
}

interface DynamicNestedListProps {
  header: string;
  items: ListItem[];
}

export const DynamicNestedList: React.FC<DynamicNestedListProps> = ({
  header,
  items,
}) => {
  // Controle de estado para abrir/fechar itens
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  // Alterna o estado de um item específico
  const handleToggle = (text: string) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [text]: !prevState[text],
    }));
  };

  return (
    <List>
      {items.map((item) => (
        <React.Fragment key={item.text}>
          {/* Botão para o item principal */}
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

          {/* Renderização de subitens com scroll */}
          {item.subItems && (
            <Collapse in={!!openItems[item.text]} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                sx={{
                  maxHeight: "150px", // Define a altura máxima apenas para os subitens
                  overflowY: "auto", // Ativa o scroll vertical
                  "&::-webkit-scrollbar": { width: "8px" }, // Customiza a barra de rolagem
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
                  <ListItemButton key={subItem.text} sx={{ pl: 4 }}>
                    <ListItemText
                      primary={subItem.text}
                      sx={{ color: "white" }}
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
