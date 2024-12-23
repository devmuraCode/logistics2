import { ReviewSection } from "../(home)/sections/ReviewSection/ReviewSection";
import Header from "./sections/Header/Header";
import { SectionFor } from "./sections/SectionFor/SectionFor";
import { SectionOne } from "./sections/SectionOne/SectionOne";
import { SectionThree } from "./sections/SectionThree/SectionThree";
import { SectionTwo } from "./sections/SectionTwo/SectionTwo";


export default function SupplierVerification() {
    return (
        <div>
            <Header/>
            <SectionOne/>
            <SectionTwo/>
            <SectionFor/>
            <SectionThree/>
            <ReviewSection/>
        </div>
    );
}