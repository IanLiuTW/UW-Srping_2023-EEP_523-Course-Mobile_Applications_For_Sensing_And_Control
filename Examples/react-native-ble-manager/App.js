// in your index.ios.js or index.android.js
import { AppRegistry } from "react-native";
import App from "react-native-ble-manager/example/App"; //<-- simply point to the example js!
/* 
Note: The react-native-ble-manager/example directory is only included when cloning the repo, the above import will not work 
if trying to import react-native-ble-manager/example from node_modules
*/
AppRegistry.registerComponent("MyAwesomeApp", () => App);
export default App;