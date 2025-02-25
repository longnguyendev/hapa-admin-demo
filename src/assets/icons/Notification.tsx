import { SvgIcon, SvgIconProps } from '@mui/material';

export function NotificationIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 7V9H20V7H16ZM14 13.61C14.96 14.32 16.21 15.26 17.2 16C17.6 15.47 18 14.93 18.4 14.4C17.41 13.66 16.16 12.72 15.2 12C14.8 12.54 14.4 13.08 14 13.61ZM18.4 1.6C18 1.07 17.6 0.53 17.2 0C16.21 0.74 14.96 1.68 14 2.4C14.4 2.93 14.8 3.47 15.2 4C16.16 3.28 17.41 2.35 18.4 1.6ZM2 5C0.9 5 0 5.9 0 7V9C0 10.1 0.9 11 2 11H3V15H5V11H6L11 14V2L6 5H2ZM13.5 8C13.5 6.67 12.92 5.47 12 4.65V11.34C12.92 10.53 13.5 9.33 13.5 8Z"
          fill="#F3F5F7"
        />
      </svg>
    </SvgIcon>
  );
}
