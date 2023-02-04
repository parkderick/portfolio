const baseStyle = {
  tablist: {
    color: "slate.300",
    height: 'min-content'
  },
  tabpanel: {
    padding: 0,
  },
  tab: {
    opacity: 0.5,
    _active: {
      bg: "inherit",
    },
    _selected: {
      color: "green.200",
      opacity: 1,
    },
    _hover: {
      opacity: 1,
    },
  },
};

export default {
  baseStyle,
};
