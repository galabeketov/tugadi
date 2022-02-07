import FooterWrapper from "./FooterWrapper";
import Image from "./algo.png";
const Footer = () => {
  return (
    <FooterWrapper>
      <div className="flex-1">
        <img src={Image} alt="Algorismic" />
      </div>
    </FooterWrapper>
  );
};

export default Footer;
