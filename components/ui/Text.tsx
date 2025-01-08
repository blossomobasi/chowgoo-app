import { FONTS } from "@/constants/typography";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

interface CustomTextProps extends RNTextProps {
	variant?: "light" | "regular" | "medium" | "semiBold" | "bold" | "extraBold";
	children: React.ReactNode;
}

const Text = ({ variant = "regular", style, children, ...props }: CustomTextProps) => {
	return (
		<RNText style={[{ fontFamily: FONTS[variant] }, style]} {...props}>
			{children}
		</RNText>
	);
};

export default Text;
