import { SvgIcon, SvgIconProps } from '@mui/material';

export function Home(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="20"
        height="17"
        viewBox="0 0 20 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z"
          fill="#F3F5F7"
        />
      </svg>
    </SvgIcon>
  );
}
