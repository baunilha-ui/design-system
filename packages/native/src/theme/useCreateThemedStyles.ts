import { ThemeMode } from "@baunilha/tokens";
import { useTheme } from "./ThemeProvider";

import { StyleSheet } from "react-native";

type CreateStyles<Return, Props> = (theme: ThemeMode, props: Props) => Return & StyleSheet.NamedStyles<any>

export const useCreateThemedStyles = <Props, Return extends StyleSheet.NamedStyles<Return>>(createStyles: CreateStyles<Return, Props>) => {
    const { theme } = useTheme();

    return (props: Props = {} as Props) => StyleSheet.create(createStyles(theme, props));
}

// In Styles
type MockType = {
    disabled: boolean
}

export const useStyles = useCreateThemedStyles((theme, props: MockType) => ({
    button: {
        backgroundColor: theme.colors.primary.brand[100],
        alignItems: 'center',
        justifyContent: 'center',
        opacity: props.disabled ? 0.5 : 1
    }
}))

export const useOtherStyles = useCreateThemedStyles((theme) => ({
    other: {
        backgroundColor: theme.colors.primary.brand[100],
    }
}))

// In Component
const styles = useStyles({ disabled: true });
const otherStyles = useOtherStyles();

styles.button
otherStyles.other




















// import { StyleSheet } from "react-native";
// import { ThemeMode } from "@baunilha/tokens";

// import { useTheme } from "./ThemeProvider";

// export type StyleSheetThemedProps<Props> = {
//     theme: ThemeMode;
//     props: Props;
// }

// type Styles<Return, Props> = (theme: ThemeMode, props: Props) => Return

// export const useCreateThemedStyles = <Props, Return extends StyleSheet.NamedStyles<Return>>(createStyles: Styles<Return, Props>) => {
//     const { theme } = useTheme();

//     return (props: Props) => createStyles(theme, props);
// };

// // In Styles
// type MockType = {
//     disabled: boolean
// }

// export const useStyles = useCreateThemedStyles((theme, props: MockType) => StyleSheet.create({
//     button: {
//         backgroundColor: theme.colors.primary.brand[100],
//         opacity: props.disabled ? 0.5 : 1
//     }
// }))

// export const useOtherStyles = useCreateThemedStyles<MockType>((theme, props) => StyleSheet.create({
//     other: {
//         backgroundColor: theme.colors.primary.brand[100],
//     }
// }))

// // In Component
// const styles = useStyles({ disabled: true, lol: true });
// const otherStyles = useOtherStyles({ disabled: true, lol: true });

// styles.button
// otherStyles.other