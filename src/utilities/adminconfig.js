import { SvgIcon } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import TimerIcon from "@mui/icons-material/Timer";

const HomeIcon = () => {
  return (
    <SvgIcon>
      <path d="M9.75 4.15625L4 8.90625V14C4 14.2812 4.21875 14.5 4.5 14.5H8C8.25 14.5 8.46875 14.2812 8.46875 14V11C8.46875 10.75 8.71875 10.5 8.96875 10.5H10.9688C11.25 10.5 11.4688 10.75 11.4688 11V14C11.4688 14.2812 11.7188 14.5 11.9688 14.5H15.5C15.75 14.5 16 14.2812 16 14V8.875L10.2188 4.15625C10.1562 4.09375 10.0625 4.0625 10 4.0625C9.90625 4.0625 9.8125 4.09375 9.75 4.15625ZM18.8438 7.375L16.25 5.21875V0.90625C16.25 0.6875 16.0625 0.53125 15.875 0.53125H14.125C13.9062 0.53125 13.75 0.6875 13.75 0.90625V3.15625L10.9375 0.84375C10.6875 0.65625 10.3438 0.53125 10 0.53125C9.625 0.53125 9.28125 0.65625 9.03125 0.84375L1.125 7.375C1.03125 7.4375 0.96875 7.5625 0.96875 7.65625C0.96875 7.75 1.03125 7.84375 1.0625 7.90625L1.875 8.875C1.9375 8.96875 2.03125 9 2.15625 9C2.25 9 2.34375 8.96875 2.40625 8.90625L9.75 2.875C9.8125 2.8125 9.90625 2.78125 10 2.78125C10.0625 2.78125 10.1562 2.8125 10.2188 2.875L17.5625 8.90625C17.625 8.96875 17.7188 9 17.8125 9C17.9375 9 18.0312 8.96875 18.0938 8.875L18.9062 7.90625C18.9688 7.84375 19 7.75 19 7.65625C19 7.5625 18.9375 7.4375 18.8438 7.375Z" />
    </SvgIcon>
  );
};

export const menuItems = [
  {
    type: "item",
    key: "user",
    title: "User Management",
    url: "./",
    icon: <HomeIcon />,
  },
  {
    type: "item",
    key: "course",
    title: "Course Management",
    url: "./admincourse",
    icon: <TimerIcon />,
  },
];