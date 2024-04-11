import ExperienceTheProduct from "../component/ExperienceEtc";
import Footer from "../component/Footer";
import Home from "../component/Home";
import { NavigationBar } from "../component/NavigationBar";
import ProductBenefits from "../component/ProductBenefits";
import ProductDescription from "../component/ProductDescription";
import WhyThisProduct from "../component/WhyThisProduct";


export default function Homepage() {
    return <>
        <NavigationBar></NavigationBar>
        <Home></Home>
        <ProductDescription></ProductDescription>
        <ProductBenefits></ProductBenefits>
        <WhyThisProduct></WhyThisProduct>
        <ExperienceTheProduct></ExperienceTheProduct>
        <Footer></Footer>
    </>
}