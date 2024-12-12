import { Header } from "./sections/Header/Header";
import { SectionFor } from "./sections/SectionFor/SectionFor";
import { SectionOne } from "./sections/SectionOne/SectionOne";

export default function Manufactured() {
    return (
        <div>
            <Header/>
            <SectionOne/>
            <SectionFor/>
        </div>
    );
}