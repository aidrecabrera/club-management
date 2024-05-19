import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useLink, useRouterContext, useRouterType } from "@refinedev/core";
import type { RefineLayoutThemedTitleProps } from "@refinedev/mui";
import React from "react";

const defaultText = "Clubsphere";

export const ThemedTitleV2: React.FC<RefineLayoutThemedTitleProps> = ({
  collapsed,
  wrapperStyles,
  icon,
  text = defaultText,
}) => {
  const routerType = useRouterType();
  const Link = useLink();
  const { Link: LegacyLink } = useRouterContext();

  const ActiveLink = routerType === "legacy" ? LegacyLink : Link;

  return (
    <MuiLink
      to="/"
      component={ActiveLink}
      underline="none"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        ...wrapperStyles,
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/en/a/a8/University_of_Mindanao_Logo.png"
        alt="Clubsphere"
        className={`my-10 ${collapsed ? "w-8 h-8" : "w-10 h-10"}`}
      />
      {!collapsed && (
        <Typography
          variant="h6"
          fontWeight={700}
          color="text.primary"
          fontSize="1.25rem"
          textOverflow="ellipsis"
          overflow="hidden"
        >
          {text}
        </Typography>
      )}
    </MuiLink>
  );
};
