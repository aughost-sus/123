import { AppBar, Toolbar } from "@mui/material";
import Image from "next/image";
import LogoImage from "./img/psslailogo.png";

const Navbar = () => {
    return (
        <AppBar position="static" elevation={9}>
            <Toolbar disableGutters style={{ backgroundColor: '#f8f9fa', padding: '10px'}}>
            <Image
                  src={LogoImage}
                  alt="psslai-logo"
                  height={45}
                  width={120}
                  style={{ alignSelf: "center" }}
                />
            </Toolbar>
       </AppBar>
    );
}

export default Navbar;
