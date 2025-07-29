import svgPaths from "./svg-xyycuaa76q";
import imgImage4 from "figma:asset/ef61c3e964fccf13b4beac249abdcd131186b256.png";

function Logomark() {
  return (
    <div className="relative shrink-0 size-7" data-name="logomark">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="logomark">
          <path
            d={svgPaths.p1d5a9040}
            id="Icon"
            stroke="var(--stroke-0, #30B6D0)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-8 items-center justify-start p-0 relative shrink-0"
      data-name="logo"
    >
      <Logomark />
      <div
        className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#30b6d0] text-[14px] text-left text-nowrap tracking-[0.1px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Planfirma
        </p>
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div
      className="absolute left-[102px] size-4 top-2.5"
      data-name="chevron-down"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="chevron-down">
          <path
            d="M4 6L8 10L12 6"
            id="Icon"
            stroke="var(--stroke-0, #1C1C1C)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Buttons() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-4 py-2 relative shrink-0 w-[132px]"
      data-name="Buttons"
    >
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] text-center tracking-[0.1px] w-[72px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[20px]">Services</p>
      </div>
      <ChevronDown />
    </div>
  );
}

function Buttons1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-6 py-2 relative shrink-0"
      data-name="Buttons"
    >
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] text-center text-nowrap tracking-[0.1px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          About Us
        </p>
      </div>
    </div>
  );
}

function Buttons2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-6 py-2 relative shrink-0"
      data-name="Buttons"
    >
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] text-center text-nowrap tracking-[0.1px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Contact Us
        </p>
      </div>
    </div>
  );
}

function PageLinks() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-8 items-start justify-start p-0 relative shrink-0"
      data-name="pageLinks"
    >
      <Buttons />
      <Buttons1 />
      <Buttons2 />
    </div>
  );
}

function Div() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-12 items-center justify-start p-0 relative shrink-0"
      data-name="Div"
    >
      <Logo />
      <PageLinks />
      <div
        className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#1f7a8c] text-[14px] text-left text-nowrap tracking-[0.1px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Planfirma.ai
        </p>
      </div>
      <div
        className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#1f7a8c] text-[14px] text-left text-nowrap tracking-[0.1px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Planfirma.cloud
        </p>
      </div>
    </div>
  );
}

function Buttons3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-6 py-2 relative shrink-0"
      data-name="Buttons"
    >
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] text-center text-nowrap tracking-[0.1px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Get a Quote
        </p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div
      className="bg-[#ffffff] order-3 shrink-0 sticky top-0 w-full"
      data-name="Header"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-16 py-4 relative w-full">
          <Div />
          <Buttons3 />
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#e1e5f2] box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-4 py-2 relative rounded-[99999px] shrink-0">
      <div
        className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] text-left text-nowrap tracking-[0.1px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Contact us
        </p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="basis-0 bg-[#e1e5f2] grow h-12 min-h-px min-w-px relative rounded-lg shrink-0">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-12 items-center justify-start px-6 py-2 relative w-full">
          <div
            className="font-['Roboto:Italic',_sans-serif] font-normal italic leading-[0] relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap tracking-[0.5px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
              Name
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="basis-0 bg-[#e1e5f2] grow h-12 min-h-px min-w-px relative rounded-lg shrink-0">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-12 items-center justify-start px-6 py-2 relative w-full">
          <div
            className="font-['Roboto:Italic',_sans-serif] font-normal italic leading-[0] relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap tracking-[0.5px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
              Company name
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame53 />
      <Frame55 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="basis-0 bg-[#e1e5f2] grow h-12 min-h-px min-w-px relative rounded-lg shrink-0">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-12 items-center justify-start px-6 py-2 relative w-full">
          <div
            className="font-['Roboto:Italic',_sans-serif] font-normal italic leading-[0] relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap tracking-[0.5px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
              E-mail
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="basis-0 bg-[#e1e5f2] grow h-12 min-h-px min-w-px relative rounded-lg shrink-0">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-12 items-center justify-start px-6 py-2 relative w-full">
          <div
            className="font-['Roboto:Italic',_sans-serif] font-normal italic leading-[0] relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap tracking-[0.5px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
              Phone number (optional)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame59 />
      <Frame60 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-[#e1e5f2] h-40 relative rounded-lg shrink-0 w-full">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-40 items-start justify-start px-6 py-2 relative w-full">
          <div
            className="font-['Roboto:Italic',_sans-serif] font-normal italic leading-[0] relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap tracking-[0.5px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
              Write us a message
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-[303px]"
      data-name="Label"
    >
      <div
        className="flex flex-col font-['Roboto:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap tracking-[0.1px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Schedule a call
        </p>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div
      className="absolute right-5 size-6 top-1/2 translate-y-[-50%]"
      data-name="arrow_right"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="filled">
          <path
            d={svgPaths.p111424c0}
            fill="var(--fill-0, white)"
            id="vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#1f7a8c] box-border content-stretch flex flex-row gap-2.5 h-12 items-center justify-center px-5 py-4 relative rounded-lg shrink-0"
      data-name="Button"
    >
      <Label />
      <ArrowRight />
    </div>
  );
}

function Frame51() {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start overflow-clip p-[10px] relative shrink-0 w-[800px]">
      <Frame56 />
      <Frame62 />
      <Frame54 />
      <Button />
    </div>
  );
}

function Frame50() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Roboto:Regular',_sans-serif] font-normal gap-6 items-start justify-center leading-[0] p-0 relative shrink-0 text-[#1c1c1c] text-[0px] text-left text-nowrap tracking-[0.5px]">
      <div
        className="relative shrink-0 whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p
          className="adjustLetterSpacing block font-['Roboto:Medium',_sans-serif] font-medium leading-[24px] mb-0 text-[16px] tracking-[0.5px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Call us at:
        </p>
        <a
          className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] adjustLetterSpacing block cursor-pointer leading-[20px] text-[14px] tracking-[0.25px]"
          href="tel:8151053268"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          +91 815 105 3268
        </a>
      </div>
      <div
        className="relative shrink-0 whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p
          className="adjustLetterSpacing block font-['Roboto:Medium',_sans-serif] font-medium leading-[24px] mb-0 text-[16px] tracking-[0.5px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Email here for any queries:
        </p>
        <p
          className="adjustLetterSpacing block font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] mb-0 text-[14px] tracking-[0.25px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          info@planfirma.com
        </p>
        <p
          className="adjustLetterSpacing block font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] text-[14px] tracking-[0.25px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          sales@planfirma.com
        </p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative shrink-0">
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#1c1c1c] text-[0px] text-left text-nowrap tracking-[0.5px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p
          className="adjustLetterSpacing block font-['Roboto:Medium',_sans-serif] font-medium leading-[24px] mb-0 text-[16px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Countries where we are present?
        </p>
        <p
          className="adjustLetterSpacing block leading-[20px] text-[14px] tracking-[0.25px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          United States of America
          <br />
          United Kingdom
          <br />
          United Arab Emirates
          <br />
          Australia
          <br />
          South Africa
          <br />
          India
        </p>
      </div>
      <Frame50 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3.5 items-start justify-start p-0 relative shrink-0">
      <div
        className="bg-center bg-cover bg-no-repeat h-[27px] shrink-0 w-10"
        data-name="image 4"
        style={{ backgroundImage: `url('${imgImage4}')` }}
      />
      <div
        className="bg-center bg-cover bg-no-repeat h-[27px] shrink-0 w-10"
        data-name="image 5"
        style={{ backgroundImage: `url('${imgImage4}')` }}
      />
      <div
        className="bg-center bg-cover bg-no-repeat h-[27px] shrink-0 w-10"
        data-name="image 6"
        style={{ backgroundImage: `url('${imgImage4}')` }}
      />
      <div
        className="bg-center bg-cover bg-no-repeat h-[27px] shrink-0 w-10"
        data-name="image 7"
        style={{ backgroundImage: `url('${imgImage4}')` }}
      />
      <div
        className="bg-center bg-cover bg-no-repeat h-[27px] shrink-0 w-10"
        data-name="image 8"
        style={{ backgroundImage: `url('${imgImage4}')` }}
      />
      <div
        className="bg-center bg-cover bg-no-repeat h-[27px] shrink-0 w-10"
        data-name="image 9"
        style={{ backgroundImage: `url('${imgImage4}')` }}
      />
      <div
        className="bg-center bg-cover bg-no-repeat h-[27px] shrink-0 w-10"
        data-name="image 10"
        style={{ backgroundImage: `url('${imgImage4}')` }}
      />
      <div
        className="bg-center bg-cover bg-no-repeat h-[27px] shrink-0 w-10"
        data-name="image 11"
        style={{ backgroundImage: `url('${imgImage4}')` }}
      />
    </div>
  );
}

function Frame63() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3.5 items-start justify-start p-0 relative shrink-0">
      <Frame49 />
      <Frame61 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full">
      <Frame51 />
      <Frame63 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
      <Frame24 />
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#1c1c1c] text-[57px] text-left tracking-[-0.25px]"
        style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[64px]">Schedule a consultation with us</p>
      </div>
      <Frame52 />
    </div>
  );
}

function MainContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-16 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Main Container"
    >
      <Frame23 />
    </div>
  );
}

function BusinessEstablishmentServicesCarousel() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-12 items-start justify-start order-1 px-0 py-8 relative shrink-0 w-full"
      data-name="Business Establishment Services Carousel"
    >
      <MainContainer />
      <div
        className="absolute bottom-0 h-0 left-[-96px] right-[-82px]"
        data-name="divider"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g id="divider"></g>
        </svg>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div
      className="box-border content-stretch flex flex-col-reverse items-start justify-start order-1 p-0 relative shrink-0 w-full"
      data-name="Main Content"
    >
      <BusinessEstablishmentServicesCarousel />
    </div>
  );
}

function Container() {
  return (
    <div className="order-2 relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col-reverse gap-16 items-start justify-start p-[48px] relative w-full">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Frame">
      <div className="absolute bottom-[-0.75px] left-[-7.317%] right-[-7.317%] top-[-0.75px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1504 2"
        >
          <g id="Frame">
            <path
              d="M0 1H1504"
              id="divider"
              stroke="var(--stroke-0, #264E36)"
              strokeOpacity="0.2"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Logomark1() {
  return (
    <div className="relative shrink-0 size-7" data-name="logomark">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="logomark">
          <path
            d={svgPaths.p1d5a9040}
            id="Icon"
            stroke="var(--stroke-0, #A8D5BA)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-8 items-center justify-start p-0 relative shrink-0"
      data-name="logo"
    >
      <Logomark1 />
      <div className="font-['Sen:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#a8d5ba] text-[28px] text-left text-nowrap tracking-[-1.12px]">
        <p className="adjustLetterSpacing block leading-none whitespace-pre">
          Planfirma
        </p>
      </div>
    </div>
  );
}

function Facebook() {
  return (
    <div className="relative shrink-0 size-6" data-name="facebook">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="facebook">
          <path
            d={svgPaths.p6a67100}
            fill="var(--fill-0, #D2EADC)"
            fillOpacity="0.62"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Instagram() {
  return (
    <div className="relative shrink-0 size-6" data-name="instagram">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="instagram">
          <path
            d={svgPaths.p39559c70}
            fill="var(--fill-0, #D2EADC)"
            fillOpacity="0.62"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Twitter() {
  return (
    <div className="relative shrink-0 size-6" data-name="twitter">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="twitter">
          <path
            d={svgPaths.p20e7b7c0}
            fill="var(--fill-0, #D2EADC)"
            fillOpacity="0.62"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Facebook />
      <Instagram />
      <Twitter />
    </div>
  );
}

function Logos() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px p-0 relative self-stretch shrink-0"
      data-name="logos"
    >
      <Logo1 />
      <Container1 />
    </div>
  );
}

function FooterLinkColumn() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium gap-2 items-start justify-center leading-[0] p-0 relative shrink-0 text-[15px] text-left w-[200px]"
      data-name="footerLinkColumn"
    >
      <div className="relative shrink-0 text-[#d7e4dc] w-full">
        <p className="block leading-[20px]">Company</p>
      </div>
      <div className="relative shrink-0 text-[rgba(210,234,220,0.62)] w-full">
        <p className="block leading-[20px]">About Us</p>
      </div>
      <div className="relative shrink-0 text-[rgba(210,234,220,0.62)] w-full">
        <p className="block leading-[20px]">Careers</p>
      </div>
      <div className="relative shrink-0 text-[rgba(210,234,220,0.62)] w-full">
        <p className="block leading-[20px]">Press</p>
      </div>
      <div className="relative shrink-0 text-[rgba(210,234,220,0.62)] w-full">
        <p className="block leading-[20px]">Blog</p>
      </div>
    </div>
  );
}

function FooterLinkColumn1() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium gap-2 items-start justify-center leading-[0] p-0 relative shrink-0 text-[15px] text-left w-[200px]"
      data-name="footerLinkColumn"
    >
      <div className="relative shrink-0 text-[#d7e4dc] w-full">
        <p className="block leading-[20px]">Resources</p>
      </div>
      <div className="relative shrink-0 text-[rgba(210,234,220,0.62)] w-full">
        <p className="block leading-[20px]">Documentation</p>
      </div>
      <div className="relative shrink-0 text-[rgba(210,234,220,0.62)] w-full">
        <p className="block leading-[20px]">API Reference</p>
      </div>
      <div className="relative shrink-0 text-[rgba(210,234,220,0.62)] w-full">
        <p className="block leading-[20px]">Community</p>
      </div>
      <div className="relative shrink-0 text-[rgba(210,234,220,0.62)] w-full">
        <p className="block leading-[20px]">Support</p>
      </div>
    </div>
  );
}

function FooterLinkColumn2() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium gap-2 items-start justify-center leading-[0] p-0 relative shrink-0 text-[15px] text-left w-[200px]"
      data-name="footerLinkColumn"
    >
      <div className="relative shrink-0 text-[#d7e4dc] w-full">
        <p className="block leading-[20px]">Legal</p>
      </div>
      <div className="relative shrink-0 text-[rgba(210,234,220,0.62)] w-full">
        <p className="block leading-[20px]">Privacy Policy</p>
      </div>
      <div className="relative shrink-0 text-[rgba(210,234,220,0.62)] w-full">
        <p className="block leading-[20px]">Terms of Service</p>
      </div>
      <div className="relative shrink-0 text-[rgba(210,234,220,0.62)] w-full">
        <p className="block leading-[20px]">Cookie Policy</p>
      </div>
    </div>
  );
}

function FooterLinkColumn3() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium gap-2 items-start justify-center leading-[0] p-0 relative shrink-0 text-[15px] text-left w-[200px]"
      data-name="footerLinkColumn"
    >
      <div className="relative shrink-0 text-[#d7e4dc] w-full">
        <p className="block leading-[20px]">Contact</p>
      </div>
      <div className="relative shrink-0 text-[rgba(210,234,220,0.62)] w-full">
        <p className="block leading-[20px]">Contact Us</p>
      </div>
      <div className="relative shrink-0 text-[rgba(210,234,220,0.62)] w-full">
        <p className="block leading-[20px]">Sales</p>
      </div>
      <div className="relative shrink-0 text-[rgba(210,234,220,0.62)] w-full">
        <p className="block leading-[20px]">Partnerships</p>
      </div>
    </div>
  );
}

function PageLinks1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-12 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="pageLinks"
    >
      <Logos />
      <FooterLinkColumn />
      <FooterLinkColumn1 />
      <FooterLinkColumn2 />
      <FooterLinkColumn3 />
    </div>
  );
}

function SoftwareCompanyFooter() {
  return (
    <div
      className="bg-[#000000] box-border content-stretch flex flex-col gap-6 h-[300px] items-start justify-start order-1 pb-12 pt-24 px-16 relative shrink-0 w-[1440px]"
      data-name="Software Company Footer"
    >
      <Frame />
      <PageLinks1 />
    </div>
  );
}

export default function ContactUs() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col-reverse items-start justify-start p-0 relative size-full"
      data-name="Contact us"
    >
      <Header />
      <Container />
      <SoftwareCompanyFooter />
    </div>
  );
}