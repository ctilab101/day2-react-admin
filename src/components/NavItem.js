import {
  NavLink as RouterLink,
  matchPath,
  useLocation,
} from "react-router-dom";
import PropTypes from "prop-types";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Button from "@mui/material/Button";

const NavItem = ({ href, icon: Icon, title, ...rest }) => {
  const location = useLocation();

  const active = href
    ? !!matchPath(
        {
          path: href,
          end: false,
        },
        location.pathname
      )
    : false;

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        py: 0,
      }}
      {...rest}
    >
      <Button
        component={RouterLink}
        sx={{
          py: 1.25,
          width: "100%",
          letterSpacing: 0,
          color: "#888",
          fontWeight: "medium",
          justifyContent: "flex-start",
          textTransform: "none",
          ...(active && {
            color: "#888",
          }),
          "& svg": {
            mr: 1,
          },
        }}
        to={href}
      >
        <ListItemIcon sx={{ pl: 1.5, pr: 2 }}>
          <Icon sx={{ fontSize: 28 }} />
        </ListItemIcon>
        <ListItemText>{title}</ListItemText>
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string,
};

export default NavItem;
