import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

import "./App.css";
import ContactUs from "./Component/ContactUs/ContactUs";
import ContactUsShow from "./Component/ContactUs/ContactUsShow";
import Navbar from "./Component/Navbar/Navbar";
import Gallery from "./Component/Gallery/Gallery";
import Admin from "./Component/Admin/Admin";

import Notice from "./Component/Notice/Notice";
function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/admin" element={<Admin />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/" element={<Notice />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/contactreq" element={<ContactUsShow />} />
                </Routes>
		</Router>
	);
}

export default App;
