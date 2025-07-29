import svgPaths from "./svg-9nr1684alr";
import imgABackgroundOfSoftAbstractGradientsMeantToInduceFeelingsOfTrustAndGrowth from "figma:asset/717b9edd51feb353dc1181c107cfe4e83599422b.png";
import imgAiAndMachineLearningService from "figma:asset/b68a143e0db68c23a8b308a5c0706f4e32d195b4.png";
import imgCyberSecurityAbstractArtwork from "figma:asset/935263785d2ce46ec0e8791c5dbc7d8321d0657f.png";
import imgCloudComputingRealisticImage from "figma:asset/62f433e11d6103cb0660e405329f3f010c983dfc.png";
import imgAGroupOfProfessionalsCollaboratingInAModernOfficeSpaceWithLaptopsAndCloudTechnologyGraphicsOnAScreen from "figma:asset/38f6c3472cc00ebfba53447668a3c9e5604b2231.png";
import imgBUsinessIntelligence from "figma:asset/804035de5a9a1b26773f55533f953833bbdbf982.png";
import imgMobileAppDevelopmentScreensUsingIphones from "figma:asset/a7b132a5724f4768cf66a4dac5120b018584cf16.png";
import imgDigitalProductCustomizationForBusinessesHyperRealistic from "figma:asset/97af82e1542d56c3e308ca25c533bbac927d1af0.png";
import imgWebAndCustomAppDevelopmentRealistic from "figma:asset/b1cdce3504553d3fb71520aee8a018f40ee61cc2.png";
import imgNewDigitalProductDevelopmentRealisticNoTextInvolved from "figma:asset/acaf0ca442b45fd1e63d1434159bcf3947681c7f.png";
import imgUiUxDesignRealisticNoText from "figma:asset/2d0893de21f609735baa768a6f680afa5c0b1a15.png";
import imgAutomationDigitalRealisticNoText from "figma:asset/1f38fbad714bddc21c42cb4673650b2c00485fb8.png";
import imgOptimizationOfCodeRealisticNoOverlayText from "figma:asset/f2d490d79a72bd944297d4dde2b2c4d888edc6dc.png";

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

function ABackgroundOfSoftAbstractGradientsMeantToInduceFeelingsOfTrustAndGrowth() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[400px] rounded-2xl shrink-0 w-[796px]"
      data-name="A background of soft, abstract gradients meant to induce feelings of trust and growth"
      style={{
        backgroundImage: `url('${imgABackgroundOfSoftAbstractGradientsMeantToInduceFeelingsOfTrustAndGrowth}')`,
      }}
    />
  );
}

function Frame19() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 h-[400px] items-center justify-center p-0 relative shrink-0 w-full">
      <div
        className="basis-0 font-['Roboto:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#1c1c1c] text-[57px] text-left tracking-[-0.25px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[64px]">
          Professional and highly dedicated services.
        </p>
      </div>
      <ABackgroundOfSoftAbstractGradientsMeantToInduceFeelingsOfTrustAndGrowth />
    </div>
  );
}

function AiAndMachineLearningService() {
  return (
    <div
      className="aspect-[416/248] bg-center bg-cover bg-no-repeat relative rounded-lg shrink-0 w-full"
      data-name="Ai and machine learning service"
      style={{ backgroundImage: `url('${imgAiAndMachineLearningService}')` }}
    >
      <div className="absolute border-[1.5px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function TextContent() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#1c1c1c] text-left w-full"
      data-name="textContent"
    >
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[28px] text-nowrap w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[36px] overflow-inherit">{`AI & Machine Learning`}</p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">
          Design and deploy custom AI models, predictive tools, and automation
          to enhance decision-making and user experiences.
        </p>
      </div>
    </div>
  );
}

function ButtonFilledStandard() {
  return (
    <div
      className="bg-[#1c1c1c] box-border content-stretch flex flex-row gap-4 items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="buttonFilledStandard"
    >
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function ServiceItemFixed() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow h-[400px] items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="serviceItem[fixed]"
    >
      <AiAndMachineLearningService />
      <TextContent />
      <ButtonFilledStandard />
    </div>
  );
}

function CyberSecurityAbstractArtwork() {
  return (
    <div
      className="aspect-[416/248] bg-center bg-cover bg-no-repeat relative rounded-lg shrink-0 w-full"
      data-name="Cyber security abstract artwork"
      style={{ backgroundImage: `url('${imgCyberSecurityAbstractArtwork}')` }}
    >
      <div className="absolute border-[1.5px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function TextContent1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#1c1c1c] text-left w-full"
      data-name="textContent"
    >
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[0px] text-nowrap w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p
          className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[36px] overflow-inherit text-[28px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Cybersecurity
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">
          Protect your digital infrastructure with end-to-end security audits,
          penetration testing, and threat mitigation strategies.
        </p>
      </div>
    </div>
  );
}

function ButtonFilledStandard1() {
  return (
    <div
      className="bg-[#1c1c1c] box-border content-stretch flex flex-row gap-4 items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="buttonFilledStandard"
    >
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function ServiceItem() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow h-[400px] items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="serviceItem"
    >
      <CyberSecurityAbstractArtwork />
      <TextContent1 />
      <ButtonFilledStandard1 />
    </div>
  );
}

function CloudComputingRealisticImage() {
  return (
    <div
      className="aspect-[416/248] bg-center bg-cover bg-no-repeat relative rounded-lg shrink-0 w-full"
      data-name="Cloud computing realistic image"
      style={{ backgroundImage: `url('${imgCloudComputingRealisticImage}')` }}
    >
      <div className="absolute border-[1.5px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function TextContent2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#1c1c1c] text-left w-full"
      data-name="textContent"
    >
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[0px] text-nowrap w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p
          className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[36px] overflow-inherit text-[28px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Cloud Computing
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">
          Build scalable, cost-efficient infrastructure on AWS, Azure, or GCP
          with seamless migration and management.
        </p>
      </div>
    </div>
  );
}

function ButtonFilledStandard2() {
  return (
    <div
      className="bg-[#1c1c1c] box-border content-stretch flex flex-row gap-4 items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="buttonFilledStandard"
    >
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function ServiceItem1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow h-[400px] items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="serviceItem"
    >
      <CloudComputingRealisticImage />
      <TextContent2 />
      <ButtonFilledStandard2 />
    </div>
  );
}

function ServicesContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-12 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Services Container"
    >
      <ServiceItemFixed />
      <ServiceItem />
      <ServiceItem1 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="box-border content-stretch flex flex-col gap-12 items-start justify-start p-0 relative shrink-0 w-full">
      <ServicesContainer />
    </div>
  );
}

function AGroupOfProfessionalsCollaboratingInAModernOfficeSpaceWithLaptopsAndCloudTechnologyGraphicsOnAScreen() {
  return (
    <div
      className="aspect-[416/248] bg-center bg-cover bg-no-repeat relative rounded-lg shrink-0 w-full"
      data-name="A group of professionals collaborating in a modern office space with laptops and cloud technology graphics on a screen."
      style={{
        backgroundImage: `url('${imgAGroupOfProfessionalsCollaboratingInAModernOfficeSpaceWithLaptopsAndCloudTechnologyGraphicsOnAScreen}')`,
      }}
    >
      <div className="absolute border-[1.5px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function TextContent3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#1c1c1c] text-left w-full"
      data-name="textContent"
    >
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[0px] text-nowrap w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p
          className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[36px] overflow-inherit text-[28px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          DevSecOps
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">
          Integrate security into every stage of your development pipeline for
          safer, faster software delivery.
        </p>
      </div>
    </div>
  );
}

function ButtonFilledStandard3() {
  return (
    <div
      className="bg-[#1c1c1c] box-border content-stretch flex flex-row gap-4 items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="buttonFilledStandard"
    >
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function ServiceItemFixed1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow h-[400px] items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="serviceItem[fixed]"
    >
      <AGroupOfProfessionalsCollaboratingInAModernOfficeSpaceWithLaptopsAndCloudTechnologyGraphicsOnAScreen />
      <TextContent3 />
      <ButtonFilledStandard3 />
    </div>
  );
}

function BUsinessIntelligence() {
  return (
    <div
      className="aspect-[416/248] bg-center bg-cover bg-no-repeat relative rounded-lg shrink-0 w-full"
      data-name="BUsiness intelligence"
      style={{ backgroundImage: `url('${imgBUsinessIntelligence}')` }}
    >
      <div className="absolute border-[1.5px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function TextContent4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#1c1c1c] text-left w-full"
      data-name="textContent"
    >
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[0px] text-nowrap w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p
          className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[36px] overflow-inherit text-[28px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Business Intelligence
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">
          Transform raw data into actionable insights through real-time
          dashboards and custom analytics solutions.
        </p>
      </div>
    </div>
  );
}

function ButtonFilledStandard4() {
  return (
    <div
      className="bg-[#1c1c1c] box-border content-stretch flex flex-row gap-4 items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="buttonFilledStandard"
    >
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function ServiceItem2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow h-[400px] items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="serviceItem"
    >
      <BUsinessIntelligence />
      <TextContent4 />
      <ButtonFilledStandard4 />
    </div>
  );
}

function MobileAppDevelopmentScreensUsingIphones() {
  return (
    <div
      className="aspect-[416/248] bg-center bg-cover bg-no-repeat relative rounded-lg shrink-0 w-full"
      data-name="Mobile app development screens using iphones"
      style={{
        backgroundImage: `url('${imgMobileAppDevelopmentScreensUsingIphones}')`,
      }}
    >
      <div className="absolute border-[1.5px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function TextContent5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#1c1c1c] text-left w-full"
      data-name="textContent"
    >
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[0px] text-nowrap w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p
          className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[36px] overflow-inherit text-[28px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Mobile App Development
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">
          Deliver robust, user-friendly mobile apps across Android and iOS
          tailored for high performance and engagement.
        </p>
      </div>
    </div>
  );
}

function ButtonFilledStandard5() {
  return (
    <div
      className="bg-[#1c1c1c] box-border content-stretch flex flex-row gap-4 items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="buttonFilledStandard"
    >
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function ServiceItem3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow h-[400px] items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="serviceItem"
    >
      <MobileAppDevelopmentScreensUsingIphones />
      <TextContent5 />
      <ButtonFilledStandard5 />
    </div>
  );
}

function ServicesContainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-12 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Services Container"
    >
      <ServiceItemFixed1 />
      <ServiceItem2 />
      <ServiceItem3 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="box-border content-stretch flex flex-col gap-12 items-start justify-start p-0 relative shrink-0 w-full">
      <ServicesContainer1 />
    </div>
  );
}

function DigitalProductCustomizationForBusinessesHyperRealistic() {
  return (
    <div
      className="aspect-[416/248] bg-center bg-cover bg-no-repeat relative rounded-lg shrink-0 w-full"
      data-name="Digital product customization for businesses, Hyper realistic"
      style={{
        backgroundImage: `url('${imgDigitalProductCustomizationForBusinessesHyperRealistic}')`,
      }}
    >
      <div className="absolute border-[1.5px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function TextContent6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#1c1c1c] text-left w-full"
      data-name="textContent"
    >
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[0px] text-nowrap w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p
          className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[36px] overflow-inherit text-[28px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Product Customization
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">
          Adapt and enhance off-the-shelf platforms like Odoo or Zoho to fit
          your specific business workflows.
        </p>
      </div>
    </div>
  );
}

function ButtonFilledStandard6() {
  return (
    <div
      className="bg-[#1c1c1c] box-border content-stretch flex flex-row gap-4 items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="buttonFilledStandard"
    >
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function ServiceItemFixed2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow h-[400px] items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="serviceItem[fixed]"
    >
      <DigitalProductCustomizationForBusinessesHyperRealistic />
      <TextContent6 />
      <ButtonFilledStandard6 />
    </div>
  );
}

function WebAndCustomAppDevelopmentRealistic() {
  return (
    <div
      className="aspect-[416/248] bg-center bg-cover bg-no-repeat relative rounded-lg shrink-0 w-full"
      data-name="web and custom app development realistic"
      style={{
        backgroundImage: `url('${imgWebAndCustomAppDevelopmentRealistic}')`,
      }}
    >
      <div className="absolute border-[1.5px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function TextContent7() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#1c1c1c] text-left w-full"
      data-name="textContent"
    >
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[0px] text-nowrap w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p
          className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[36px] overflow-inherit text-[28px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >{`Web & Custom App Development`}</p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">
          Build scalable, secure, and high-performance web applications tailored
          to your business needs.
        </p>
      </div>
    </div>
  );
}

function ButtonFilledStandard7() {
  return (
    <div
      className="bg-[#1c1c1c] box-border content-stretch flex flex-row gap-4 items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="buttonFilledStandard"
    >
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function ServiceItem4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow h-[400px] items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="serviceItem"
    >
      <WebAndCustomAppDevelopmentRealistic />
      <TextContent7 />
      <ButtonFilledStandard7 />
    </div>
  );
}

function NewDigitalProductDevelopmentRealisticNoTextInvolved() {
  return (
    <div
      className="aspect-[416/248] bg-center bg-cover bg-no-repeat relative rounded-lg shrink-0 w-full"
      data-name="New digital product development realistic, no text involved"
      style={{
        backgroundImage: `url('${imgNewDigitalProductDevelopmentRealisticNoTextInvolved}')`,
      }}
    >
      <div className="absolute border-[1.5px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function TextContent8() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#1c1c1c] text-left w-full"
      data-name="textContent"
    >
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[0px] text-nowrap w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p
          className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[36px] overflow-inherit text-[28px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          New Product Development
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">
          From ideation to MVP and beyond, we help bring your SaaS or enterprise
          software vision to life.
        </p>
      </div>
    </div>
  );
}

function ButtonFilledStandard8() {
  return (
    <div
      className="bg-[#1c1c1c] box-border content-stretch flex flex-row gap-4 items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="buttonFilledStandard"
    >
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function ServiceItem5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow h-[400px] items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="serviceItem"
    >
      <NewDigitalProductDevelopmentRealisticNoTextInvolved />
      <TextContent8 />
      <ButtonFilledStandard8 />
    </div>
  );
}

function ServicesContainer2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-12 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Services Container"
    >
      <ServiceItemFixed2 />
      <ServiceItem4 />
      <ServiceItem5 />
    </div>
  );
}

function UiUxDesignRealisticNoText() {
  return (
    <div
      className="aspect-[416/248] bg-center bg-cover bg-no-repeat relative rounded-lg shrink-0 w-full"
      data-name="UI/UX design realistic, no text"
      style={{ backgroundImage: `url('${imgUiUxDesignRealisticNoText}')` }}
    >
      <div className="absolute border-[1.5px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function TextContent9() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#1c1c1c] text-left w-full"
      data-name="textContent"
    >
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[0px] text-nowrap w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p
          className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[36px] overflow-inherit text-[28px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          UI/UX Design
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">
          Craft intuitive, accessible, and conversion-optimized digital
          experiences across devices.
        </p>
      </div>
    </div>
  );
}

function ButtonFilledStandard9() {
  return (
    <div
      className="bg-[#1c1c1c] box-border content-stretch flex flex-row gap-4 items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="buttonFilledStandard"
    >
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function ServiceItemFixed3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow h-[400px] items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="serviceItem[fixed]"
    >
      <UiUxDesignRealisticNoText />
      <TextContent9 />
      <ButtonFilledStandard9 />
    </div>
  );
}

function AutomationDigitalRealisticNoText() {
  return (
    <div
      className="aspect-[416/248] bg-center bg-cover bg-no-repeat relative rounded-lg shrink-0 w-full"
      data-name="automation digital, realistic, no text"
      style={{
        backgroundImage: `url('${imgAutomationDigitalRealisticNoText}')`,
      }}
    >
      <div className="absolute border-[1.5px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function TextContent10() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#1c1c1c] text-left w-full"
      data-name="textContent"
    >
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[0px] text-nowrap w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p
          className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[36px] overflow-inherit text-[28px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Robotic Process Automation
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">
          Automate repetitive workflows and back-office tasks to increase
          efficiency and reduce manual errors.
        </p>
      </div>
    </div>
  );
}

function ButtonFilledStandard10() {
  return (
    <div
      className="bg-[#1c1c1c] box-border content-stretch flex flex-row gap-4 items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="buttonFilledStandard"
    >
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function ServiceItem6() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow h-[400px] items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="serviceItem"
    >
      <AutomationDigitalRealisticNoText />
      <TextContent10 />
      <ButtonFilledStandard10 />
    </div>
  );
}

function OptimizationOfCodeRealisticNoOverlayText() {
  return (
    <div
      className="aspect-[416/248] bg-center bg-cover bg-no-repeat relative rounded-lg shrink-0 w-full"
      data-name="Optimization of code, realistic, no overlay text"
      style={{
        backgroundImage: `url('${imgOptimizationOfCodeRealisticNoOverlayText}')`,
      }}
    >
      <div className="absolute border-[1.5px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function TextContent11() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#1c1c1c] text-left w-full"
      data-name="textContent"
    >
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[0px] text-nowrap w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p
          className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[36px] overflow-inherit text-[28px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Re-Engineering (Optimization)
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">
          Modernize legacy systems with improved architecture, performance
          tuning, and updated technology stacks.
        </p>
      </div>
    </div>
  );
}

function ButtonFilledStandard11() {
  return (
    <div
      className="bg-[#1c1c1c] box-border content-stretch flex flex-row gap-4 items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="buttonFilledStandard"
    >
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function ServiceItem7() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow h-[400px] items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="serviceItem"
    >
      <OptimizationOfCodeRealisticNoOverlayText />
      <TextContent11 />
      <ButtonFilledStandard11 />
    </div>
  );
}

function ServicesContainer3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-12 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Services Container"
    >
      <ServiceItemFixed3 />
      <ServiceItem6 />
      <ServiceItem7 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="box-border content-stretch flex flex-col gap-12 items-start justify-start p-0 relative shrink-0 w-full">
      <ServicesContainer2 />
      <ServicesContainer3 />
    </div>
  );
}

function MainContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-16 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Main Container"
    >
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
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
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px order-1 p-0 relative shrink-0"
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
        <div className="box-border content-stretch flex flex-row-reverse items-start justify-start p-[48px] relative w-full">
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

export default function Services() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col-reverse items-start justify-start p-0 relative size-full"
      data-name="services"
    >
      <Header />
      <Container />
      <SoftwareCompanyFooter />
    </div>
  );
}