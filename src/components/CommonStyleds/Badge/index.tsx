import styled from "styled-components";
import { getContrastText, lightenDarkenColor } from "core/libs/utils/colors";

const Badge = styled.span`
  padding: 5px 5px;
  margin: 5px 5px;
  border: 1px solid ${({ color }) => color ? `${lightenDarkenColor(color, 20)}` : '#e5e5e5'};
  border-radius: 4px;
  color: ${({ color }) => getContrastText(color)};
  background-color: ${({ color }) => color ? color : '#f7f7f7'};
  font-size: 12px;
  text-transform: uppercase;
`;

export default Badge;