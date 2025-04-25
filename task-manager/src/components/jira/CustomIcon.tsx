import { IconType } from "react-icons";

interface CustomIconProps {
  Icon: IconType; // El ícono se pasa como componente
  size?: number;
  color?: string;
}

// const CustomIcon: React.FC<CustomIconProps> = ({ Icon, size = 24, color = 'black' }) => {
//   return <Icon size={size} color={color} />;
// };

export const CustomIcon = ({ Icon, size = 24, color = 'black' }: CustomIconProps) => {
  return (
    <Icon size={size} color={color} />
  )
}

