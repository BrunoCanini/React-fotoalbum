import TheNav from "../components/TheNav";
import TheFooter from "../components/TheFooter";
import { Outlet } from "react-router-dom";

export default function DefoultLayout(){
    return(
        <div id="containerCustom" className="">
            <TheNav></TheNav>
            <main>
                <Outlet></Outlet>
            </main>
            <TheFooter></TheFooter>
        </div>
    )
}