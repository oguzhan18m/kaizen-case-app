import {
	NavigationContainer,
	getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import type { DiscoverStackParamList } from "@/types/navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteNames } from "./route-names";
import { Campaign, Discover, Portal, Wallet } from "@/screens";
import { createStackNavigator } from "@react-navigation/stack";
import AppHeader from "@/components/app-header/AppHeader";
import { Dimensions, Image, StyleSheet, View } from "react-native";

const Tab = createBottomTabNavigator();
const DiscoverStack = createStackNavigator<DiscoverStackParamList>();
const PortalStack = createStackNavigator();
const WalletStack = createStackNavigator();

const height = Dimensions.get("window").height;

function ApplicationNavigator() {
	function DiscoverStackScreen() {
		return (
			<DiscoverStack.Navigator
				initialRouteName={RouteNames.discover}
				screenOptions={{
					header: () => <AppHeader />,
				}}>
				<DiscoverStack.Screen name={RouteNames.discover} component={Discover} />
				<DiscoverStack.Screen
					name={RouteNames.campaign}
					component={Campaign}
					options={{
						headerShown: false,
					}}
				/>
			</DiscoverStack.Navigator>
		);
	}

	function PortalStackScreen() {
		return (
			<PortalStack.Navigator
				screenOptions={{
					header: () => <AppHeader />,
				}}>
				<PortalStack.Screen name={RouteNames.portal} component={Portal} />
			</PortalStack.Navigator>
		);
	}

	function WalletStackScreen() {
		return (
			<WalletStack.Navigator
				screenOptions={{
					header: () => <AppHeader />,
				}}>
				<WalletStack.Screen name={RouteNames.wallet} component={Wallet} />
			</WalletStack.Navigator>
		);
	}

	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => {
					const routeName = getFocusedRouteNameFromRoute(route);
					return {
						tabBarStyle: {
							display: routeName === RouteNames.campaign ? "none" : "flex",
						},
						tabBarActiveTintColor: "#1D1E1C",
						tabBarInactiveTintColor: `#ECEEEF`,
						headerShown: false,
						tabBarBackground() {
							return <View style={styles.tabBar} />;
						},
					};
				}}>
				<Tab.Screen
					name={RouteNames.discoverStack}
					component={DiscoverStackScreen}
					options={{
						tabBarLabel: "KEŞFET",
						tabBarLabelStyle: styles.label,
						tabBarIcon: () => (
							<Image
								source={require("@/theme/assets/images/discover.png")}
								style={{
									width: 26,
									height: 26,
									marginBottom: 10,
								}}
							/>
						),
					}}
				/>
				<Tab.Screen
					name={RouteNames.portalStack}
					component={PortalStackScreen}
					options={{
						tabBarLabel: "",
						tabBarIcon: () => (
							<Image
								source={require("@/theme/assets/images/portal.png")}
								style={{
									width: 70,
									height: 70,
									marginBottom: 20,
								}}
							/>
						),
					}}
				/>
				<Tab.Screen
					name={RouteNames.walletStack}
					component={WalletStackScreen}
					options={{
						tabBarLabel: "DAHA CÜZDAN",
						tabBarLabelStyle: styles.label,
						tabBarIcon: () => (
							<Image
								source={require("@/theme/assets/images/favs.png")}
								style={{
									width: 26,
									height: 26,
									marginBottom: 10,
								}}
							/>
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default ApplicationNavigator;

const styles = StyleSheet.create({
	label: {
		textAlign: "center",
		fontFamily: "Helvetica",
		fontSize: 10,
		fontWeight: "700",
		letterSpacing: 0.5,
	},
	tabBar: {
		position: "absolute",
		display: "flex",
		alignItems: "center",
		width: "100%",
		bottom: 0,
		left: 0,
		right: 0,
		height: height / 10,
		backgroundColor: "white",
		borderWidth: 1.5,
		borderColor: "#ECEEEF",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		elevation: 2,
	},
});
