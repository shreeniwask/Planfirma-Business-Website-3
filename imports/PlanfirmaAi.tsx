import svgPaths from "./svg-h4bm1mvxxh";
import imgAvatars3DAvatar5 from "figma:asset/4f5f4fc24d4fb323844cbdd0f8c3864a98b89c8b.png";
import imgContainer from "figma:asset/92c63555da3d5a51725a4714124480deba13c922.png";
import imgAGroupOfDiverseProfessionalsEngagedInADiscussionAroundATableInABrightModernOfficeShowcasingCloudMigrationStrategies from "figma:asset/4d4dd65efff360322011f5020c218670b85603d6.png";
import imgAGroupOfDiverseProfessionalsEngagedInADiscussionAroundATableInABrightModernOffice from "figma:asset/9a841fc18610bd5bb142b7f46bc8c767cd6315f9.png";
import imgAGroupOfProfessionalsCollaboratingInAModernOfficeSpaceWithLaptopsAndTechEquipment from "figma:asset/88a042744782b4034ef734d5011b72cd40761d9a.png";

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
            stroke="var(--stroke-0, white)"
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
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center tracking-[0.1px] w-[72px]"
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
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap tracking-[0.1px]"
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
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap tracking-[0.1px]"
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
        className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#30b6d0] text-[14px] text-left text-nowrap tracking-[0.1px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Planfirma.ai
        </p>
      </div>
      <div
        className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#30b6d0] text-[14px] text-left text-nowrap tracking-[0.1px]"
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
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap tracking-[0.1px]"
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
      className="backdrop-blur backdrop-filter bg-[rgba(0,8,22,0.1)] order-4 relative shrink-0 w-full"
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

function Group() {
  return (
    <div
      className="absolute bottom-[12.5%] left-[5.693%] right-[3.52%] top-[20.248%]"
      data-name="Group"
    >
      <div className="absolute bottom-0 left-0 right-[-0.001%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 22 17"
        >
          <g id="Group">
            <path
              d={svgPaths.p15f17d00}
              fill="var(--fill-0, #30B6D0)"
              id="Vector"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div
      className="absolute bottom-[12.5%] contents left-[5.693%] right-[3.52%] top-[20.248%]"
      data-name="Group"
    >
      <Group />
    </div>
  );
}

function IncreaseSvgrepoCom1() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-6"
      data-name="increase-svgrepo-com 1"
    >
      <Group1 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.05)] box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-4 py-2 relative rounded-[99999px] shrink-0">
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[99999px]" />
      <IncreaseSvgrepoCom1 />
      <div
        className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap tracking-[0.1px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Proven Results for Growing Businesses
        </p>
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
          Schedule a consultation
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
      className="backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.05)] box-border content-stretch flex flex-row gap-2.5 h-14 items-center justify-start px-4 py-2 relative rounded-lg shrink-0"
      data-name="Button"
    >
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-lg" />
      <Label />
      <ArrowRight />
    </div>
  );
}

function Component3DAvatars5() {
  return (
    <div className="relative shrink-0 size-6" data-name="3D Avatars / 5">
      <div
        className="absolute bg-center bg-cover bg-no-repeat inset-0"
        data-name="Avatars / 3d_avatar_5"
        style={{ backgroundImage: `url('${imgAvatars3DAvatar5}')` }}
      />
    </div>
  );
}

function Label1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Label"
    >
      <Component3DAvatars5 />
      <div
        className="flex flex-col font-['Roboto:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap tracking-[0.1px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          View success stories
        </p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-4 relative shrink-0 w-[343px]"
      data-name="Button"
    >
      <Label1 />
    </div>
  );
}

function Button2() {
  return (
    <div
      className="backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.05)] h-14 relative rounded-lg shrink-0"
      data-name="Button"
    >
      <div className="box-border content-stretch flex flex-col gap-2.5 h-14 items-center justify-center overflow-clip px-4 py-2 relative">
        <Button1 />
      </div>
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start px-0 py-2 relative shrink-0">
      <Button />
      <Button2 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-6 grow h-[400px] items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <Frame24 />
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#ffffff] text-[57px] text-center tracking-[-0.25px]"
        style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[64px]">
          <span>
            Transform Your Business
            <br />
            {`with `}
          </span>
          <span className="text-[#30b6d0]">Smart AI Solutions</span>
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#bfdbf7] text-[16px] text-center tracking-[0.5px]"
        style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">
          Planfirma helps businesses of all sizes streamline operations, make
          better decisions, and grow faster with custom AI solutions that
          actually work.
        </p>
      </div>
      <Frame12 />
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
      className="box-border content-stretch flex flex-col gap-12 items-center justify-center order-1 px-0 py-8 relative shrink-0 w-full"
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
      className="box-border content-stretch flex flex-col-reverse items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Main Content"
    >
      <BusinessEstablishmentServicesCarousel />
    </div>
  );
}

function SecurityCheck() {
  return (
    <div className="relative shrink-0 size-6" data-name="security-check">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="security-check">
          <path
            d={svgPaths.p3d108500}
            id="Vector"
            stroke="var(--stroke-0, #BFDBF7)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p27a5f900}
            id="Vector_2"
            stroke="var(--stroke-0, #BFDBF7)"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start overflow-clip p-[10px] relative shrink-0">
      <SecurityCheck />
      <div
        className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#bfdbf7] text-[14px] text-left text-nowrap tracking-[0.1px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">{`Secure & Reliable`}</p>
      </div>
    </div>
  );
}

function Smile() {
  return (
    <div className="relative shrink-0 size-6" data-name="smile">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="smile">
          <path
            d={svgPaths.pace200}
            id="Vector"
            stroke="var(--stroke-0, #BFDBF7)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p4b90860}
            id="Vector_2"
            stroke="var(--stroke-0, #BFDBF7)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M8.00897 9H8M16 9H15.991"
            id="Vector_3"
            stroke="var(--stroke-0, #BFDBF7)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start overflow-clip p-[10px] relative shrink-0">
      <Smile />
      <div
        className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#bfdbf7] text-[14px] text-left text-nowrap tracking-[0.1px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          100+ Happy Clients
        </p>
      </div>
    </div>
  );
}

function Zap() {
  return (
    <div className="relative shrink-0 size-6" data-name="zap">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="zap">
          <path
            d={svgPaths.p1c312e00}
            id="Vector"
            stroke="var(--stroke-0, #BFDBF7)"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start overflow-clip p-[10px] relative shrink-0">
      <Zap />
      <div
        className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#bfdbf7] text-[14px] text-left text-nowrap tracking-[0.1px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Quick Implementation
        </p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-[10px] relative shrink-0">
      <Frame38 />
      <Frame36 />
      <Frame39 />
    </div>
  );
}

function Container() {
  return (
    <div
      className="[background-size:auto,_cover] bg-[position:0%_0%,_50%_50%] box-border content-stretch flex flex-col h-[956px] items-center justify-start order-3 px-0 py-[120px] relative shrink-0 w-full"
      data-name="Container"
      style={{
        backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 956\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(4.4087e-15 47.8 -119.35 -4.553e-16 720 478)\\'><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), url('${imgContainer}')`,
      }}
    >
      <MainContent />
      <Frame40 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center leading-[0] p-0 relative shrink-0 text-[#ffffff] text-center w-full">
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium relative shrink-0 text-[45px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[52px]">Real Results for Real Businesses</p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal opacity-80 relative shrink-0 text-[16px] tracking-[0.5px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">
          Our clients see meaningful improvements in their operations within
          weeks, not months.
        </p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-center w-full">
      <div
        className="-webkit-box css-b500of font-['Roboto:Regular',_sans-serif] font-normal overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[22px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[28px]">Less Manual Work</p>
      </div>
      <div
        className="-webkit-box css-fhzqfx font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[#1f7a8c] text-[14px] tracking-[0.1px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">Average time savings</p>
      </div>
    </div>
  );
}

function ValuePropositionVertical() {
  return (
    <div
      className="backdrop-blur-sm backdrop-filter basis-0 bg-[rgba(255,255,255,0.05)] grow min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="Value Proposition Vertical"
    >
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-2xl" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-center justify-center px-6 py-8 relative w-full">
          <div
            className="-webkit-box css-dnr1hc font-['Roboto:Medium',_sans-serif] font-medium leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#30b6d0] text-[45px] text-center w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[52px]">45%</p>
          </div>
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-center w-full">
      <div
        className="-webkit-box css-b500of font-['Roboto:Regular',_sans-serif] font-normal overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[22px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[28px]">Increased Efficiency</p>
      </div>
      <div
        className="-webkit-box css-fhzqfx font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[#1f7a8c] text-[14px] tracking-[0.1px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">Improved workflow speed</p>
      </div>
    </div>
  );
}

function ValuePropositionVertical1() {
  return (
    <div
      className="backdrop-blur-sm backdrop-filter basis-0 bg-[rgba(255,255,255,0.05)] grow min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="Value Proposition Vertical"
    >
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-2xl" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-center justify-center px-6 py-8 relative w-full">
          <div
            className="-webkit-box css-dnr1hc font-['Roboto:Medium',_sans-serif] font-medium leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#30b6d0] text-[45px] text-center w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[52px]">60%</p>
          </div>
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-center w-full">
      <div
        className="-webkit-box css-b500of font-['Roboto:Regular',_sans-serif] font-normal overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[22px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[28px]">Enhanced Accuracy</p>
      </div>
      <div
        className="-webkit-box css-fhzqfx font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[#1f7a8c] text-[14px] tracking-[0.1px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">Reduced error rates</p>
      </div>
    </div>
  );
}

function ValuePropositionVertical2() {
  return (
    <div
      className="backdrop-blur-sm backdrop-filter basis-0 bg-[rgba(255,255,255,0.05)] grow min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="Value Proposition Vertical"
    >
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-2xl" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-center justify-center px-6 py-8 relative w-full">
          <div
            className="-webkit-box css-dnr1hc font-['Roboto:Medium',_sans-serif] font-medium leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#30b6d0] text-[45px] text-center w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[52px]">30%</p>
          </div>
          <Frame30 />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-center w-full">
      <div
        className="-webkit-box css-b500of font-['Roboto:Regular',_sans-serif] font-normal overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[22px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[28px]">Less Manual Work</p>
      </div>
      <div
        className="-webkit-box css-fhzqfx font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[#1f7a8c] text-[14px] tracking-[0.1px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">Average time savings</p>
      </div>
    </div>
  );
}

function ValuePropositionVertical3() {
  return (
    <div
      className="backdrop-blur-sm backdrop-filter basis-0 bg-[rgba(255,255,255,0.05)] grow min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="Value Proposition Vertical"
    >
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-2xl" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-center justify-center px-6 py-8 relative w-full">
          <div
            className="-webkit-box css-dnr1hc font-['Roboto:Medium',_sans-serif] font-medium leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#30b6d0] text-[45px] text-center w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[52px]">3x</p>
          </div>
          <Frame31 />
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-12 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="row"
    >
      <ValuePropositionVertical />
      <ValuePropositionVertical1 />
      <ValuePropositionVertical2 />
      <ValuePropositionVertical3 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="box-border content-stretch flex flex-col gap-12 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame28 />
      <Row />
    </div>
  );
}

function Frame32() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center leading-[0] p-0 relative shrink-0 text-[#ffffff] text-center text-nowrap w-full">
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium relative shrink-0 text-[45px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[52px] text-nowrap whitespace-pre">
          AI Solutions That Make Sense
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal opacity-80 relative shrink-0 text-[16px] tracking-[0.5px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre">
          We build AI tools that solve real business problems and integrate
          seamlessly with how you already work.
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="absolute backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.05)] h-60 left-9 rounded-lg top-[84px] w-[437px]"
      data-name="Container"
    >
      <div className="box-border content-stretch flex flex-col gap-9 h-60 items-start justify-center overflow-clip p-[24px] relative w-[437px]">
        <div
          className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#022b3a] text-[28px] text-left text-nowrap"
          style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[36px] overflow-inherit">
            Cloud Solutions
          </p>
        </div>
        <div
          className="bg-[rgba(255,255,255,0.3)] h-8 opacity-50 rounded-lg shrink-0 w-full"
          data-name="Placeholder"
        />
        <div
          className="bg-[rgba(255,255,255,0.3)] h-8 opacity-50 rounded-lg shrink-0 w-[172px]"
          data-name="Placeholder"
        />
        <div
          className="bg-[rgba(255,255,255,0.3)] h-8 opacity-50 rounded-lg shrink-0 w-52"
          data-name="Placeholder"
        />
        <div
          className="bg-[rgba(255,255,255,0.3)] h-8 opacity-50 rounded-lg shrink-0 w-[261px]"
          data-name="Placeholder"
        />
      </div>
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function NestedContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Nested Container"
    >
      <div
        className="bg-[rgba(255,255,255,0.3)] h-8 opacity-50 rounded-lg shrink-0 w-[177px]"
        data-name="Rounded Rectangle"
      />
      <div
        className="bg-[rgba(255,255,255,0.3)] h-8 opacity-50 rounded-lg shrink-0 w-[207px]"
        data-name="Rounded Rectangle"
      />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="absolute backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.05)] h-32 rounded-lg top-[175px] translate-x-[-50%] w-[255px]"
      data-name="Container"
      style={{ left: "calc(50% + 56.5px)" }}
    >
      <div className="box-border content-stretch flex flex-col gap-9 h-32 items-start justify-center overflow-clip p-[24px] relative w-[255px]">
        <NestedContainer />
      </div>
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function AGroupOfDiverseProfessionalsEngagedInADiscussionAroundATableInABrightModernOfficeShowcasingCloudMigrationStrategies() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat inset-0 rounded-[1048.95px]"
      data-name="A group of diverse professionals engaged in a discussion around a table in a bright, modern office, showcasing Cloud Migration strategies."
      style={{
        backgroundImage: `url('${imgAGroupOfDiverseProfessionalsEngagedInADiscussionAroundATableInABrightModernOfficeShowcasingCloudMigrationStrategies}')`,
      }}
    >
      <div className="absolute border-[#1f7a8c] border-[1.575px] border-solid inset-0 pointer-events-none rounded-[1048.95px]" />
    </div>
  );
}

function Profile() {
  return (
    <div
      className="absolute overflow-clip rounded-[1048.95px] size-[84px] top-2 translate-x-[-50%]"
      data-name="profile"
      style={{ left: "calc(50% + 165px)" }}
    >
      <AGroupOfDiverseProfessionalsEngagedInADiscussionAroundATableInABrightModernOfficeShowcasingCloudMigrationStrategies />
    </div>
  );
}

function AGroupOfDiverseProfessionalsEngagedInADiscussionAroundATableInABrightModernOffice() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat inset-0 rounded-[1048.95px]"
      data-name="A group of diverse professionals engaged in a discussion around a table in a bright, modern office."
      style={{
        backgroundImage: `url('${imgAGroupOfDiverseProfessionalsEngagedInADiscussionAroundATableInABrightModernOffice}')`,
      }}
    >
      <div className="absolute border-[#1f7a8c] border-[1.575px] border-solid inset-0 pointer-events-none rounded-[1048.95px]" />
    </div>
  );
}

function Profile1() {
  return (
    <div
      className="absolute overflow-clip right-[53px] rounded-[1048.95px] size-[132px] top-[117px]"
      data-name="profile"
    >
      <AGroupOfDiverseProfessionalsEngagedInADiscussionAroundATableInABrightModernOffice />
    </div>
  );
}

function AGroupOfProfessionalsCollaboratingInAModernOfficeSpaceWithLaptopsAndTechEquipment() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat inset-0 rounded-[1048.95px]"
      data-name="A group of professionals collaborating in a modern office space with laptops and tech equipment."
      style={{
        backgroundImage: `url('${imgAGroupOfProfessionalsCollaboratingInAModernOfficeSpaceWithLaptopsAndTechEquipment}')`,
      }}
    >
      <div className="absolute border-[#1f7a8c] border-[1.575px] border-solid inset-0 pointer-events-none rounded-[1048.95px]" />
    </div>
  );
}

function Profile2() {
  return (
    <div
      className="absolute overflow-clip rounded-[1048.95px] size-[84px] top-[326px] translate-x-[-50%]"
      data-name="profile"
      style={{ left: "calc(50% + 182px)" }}
    >
      <AGroupOfProfessionalsCollaboratingInAModernOfficeSpaceWithLaptopsAndTechEquipment />
    </div>
  );
}

function UiSnippet() {
  return (
    <div className="h-[440px] relative shrink-0 w-full" data-name="ui snippet">
      <Container1 />
      <Container2 />
      <Profile />
      <Profile1 />
      <Profile2 />
    </div>
  );
}

function ImageDiv() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Image div"
    >
      <UiSnippet />
    </div>
  );
}

function Frame34() {
  return (
    <div className="box-border content-stretch flex flex-col gap-20 items-start justify-center overflow-clip p-0 shrink-0 sticky top-0 w-[784px]">
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#30b6d0] text-[22px] text-left w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[28px]">
          React Quickly to Changes. Make Better Decisions. Grow More
          Efficiently.
        </p>
      </div>
      <ImageDiv />
    </div>
  );
}

function Automation4PSvgrepoCom1() {
  return (
    <div
      className="h-9 relative shrink-0 w-[35.406px]"
      data-name="automation-4p-svgrepo-com 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="automation-4p-svgrepo-com 1">
          <rect
            fill="var(--fill-0, #E1E5F2)"
            fillOpacity="0.1"
            height="36"
            rx="8"
            width="35.4062"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p210c6100}
            fill="var(--fill-0, #E1E5F2)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start leading-[0] p-0 relative shrink-0 text-left">
      <div
        className="-webkit-box css-dnr1hc font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[#30b6d0] text-[22px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[28px]">Smart Automation</p>
      </div>
      <div
        className="-webkit-box css-u1xfv font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#bfdbf7] text-[14px] tracking-[0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">{`Automate repetitive tasks and free up your team to focus on `}</p>
        <p className="block">what matters most to your business.</p>
      </div>
      <div
        className="-webkit-box font-['Roboto:Regular',_sans-serif] font-normal opacity-60 overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] tracking-[0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <ul className="css-ed5n1g list-disc">
          <li className="mb-0 ms-[21px]">
            <span className="leading-[20px]">Streamline daily workflows</span>
          </li>
          <li className="mb-0 ms-[21px]">
            <span className="leading-[20px]">Reduce manual errors</span>
          </li>
          <li className="mb-0 ms-[21px]">
            <span className="leading-[20px]">Save time and money</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ValuePropositionVertical4() {
  return (
    <div
      className="backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.05)] bg-gradient-to-b box-border content-stretch flex flex-col from-[#00000000] gap-9 h-[356px] items-start justify-center p-[24px] relative rounded-2xl shrink-0 to-[#30b6d00a] w-[440px]"
      data-name="Value Proposition Vertical"
    >
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-2xl" />
      <Automation4PSvgrepoCom1 />
      <Frame35 />
    </div>
  );
}

function Automation4PSvgrepoCom2() {
  return (
    <div
      className="h-9 relative shrink-0 w-[35.406px]"
      data-name="automation-4p-svgrepo-com 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="automation-4p-svgrepo-com 1">
          <rect
            fill="var(--fill-0, #E1E5F2)"
            fillOpacity="0.1"
            height="36"
            rx="8"
            width="35.4062"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p210c6100}
            fill="var(--fill-0, #E1E5F2)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start leading-[0] p-0 relative shrink-0 text-left w-full">
      <div
        className="-webkit-box css-dnr1hc font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[#30b6d0] text-[22px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[28px]">Data Insights</p>
      </div>
      <div
        className="-webkit-box css-u1xfv font-['Roboto:Regular',_sans-serif] font-normal overflow-ellipsis overflow-hidden relative shrink-0 text-[#bfdbf7] text-[14px] tracking-[0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">
          Turn your business data into clear insights that help you make better
          decisions faster.
        </p>
      </div>
      <div
        className="-webkit-box font-['Roboto:Regular',_sans-serif] font-normal opacity-60 overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] tracking-[0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <ul className="css-ed5n1g list-disc mb-0">
          <li className="mb-0 ms-[21px]">
            <span className="leading-[20px]">Easy-to-understand reports</span>
          </li>
          <li className="mb-0 ms-[21px]">
            <span className="leading-[20px]">Spot trends early</span>
          </li>
          <li className="mb-0 ms-[21px]">
            <span className="leading-[20px]">Make data-driven choices</span>
          </li>
        </ul>
        <p className="block leading-[20px]">&nbsp;</p>
      </div>
    </div>
  );
}

function ValuePropositionVertical5() {
  return (
    <div
      className="backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.05)] bg-gradient-to-b box-border content-stretch flex flex-col from-[#00000000] gap-9 h-[356px] items-start justify-center p-[24px] relative rounded-2xl shrink-0 to-[#30b6d00a] w-[440px]"
      data-name="Value Proposition Vertical"
    >
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-2xl" />
      <Automation4PSvgrepoCom2 />
      <Frame37 />
    </div>
  );
}

function Automation4PSvgrepoCom3() {
  return (
    <div
      className="h-9 relative shrink-0 w-[35.406px]"
      data-name="automation-4p-svgrepo-com 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="automation-4p-svgrepo-com 1">
          <rect
            fill="var(--fill-0, #E1E5F2)"
            fillOpacity="0.1"
            height="36"
            rx="8"
            width="35.4062"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p210c6100}
            fill="var(--fill-0, #E1E5F2)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start leading-[0] p-0 relative shrink-0 text-left w-full">
      <div
        className="-webkit-box css-dnr1hc font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[#30b6d0] text-[22px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[28px]">Customer Understanding</p>
      </div>
      <div
        className="-webkit-box css-u1xfv font-['Roboto:Regular',_sans-serif] font-normal overflow-ellipsis overflow-hidden relative shrink-0 text-[#bfdbf7] text-[14px] tracking-[0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">
          Better understand your customers and deliver experiences that keep
          them coming back.
        </p>
      </div>
      <div
        className="-webkit-box font-['Roboto:Regular',_sans-serif] font-normal opacity-60 overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] tracking-[0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <ul className="css-ed5n1g list-disc">
          <li className="mb-0 ms-[21px]">
            <span className="leading-[20px]">Understand customer needs</span>
          </li>
          <li className="mb-0 ms-[21px]">
            <span className="leading-[20px]">Personalise experiences</span>
          </li>
          <li className="mb-0 ms-[21px]">
            <span className="leading-[20px]">Increase satisfaction</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ValuePropositionVertical6() {
  return (
    <div
      className="backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.05)] bg-gradient-to-b box-border content-stretch flex flex-col from-[#00000000] gap-9 h-[356px] items-start justify-center p-[24px] relative rounded-2xl shrink-0 to-[#30b6d00a] w-[440px]"
      data-name="Value Proposition Vertical"
    >
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-2xl" />
      <Automation4PSvgrepoCom3 />
      <Frame41 />
    </div>
  );
}

function Row1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-12 items-start justify-center px-6 py-0 relative shrink-0"
      data-name="row"
    >
      <ValuePropositionVertical4 />
      <ValuePropositionVertical5 />
      <ValuePropositionVertical6 />
    </div>
  );
}

function Column() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-between px-0 py-[72px] relative shrink-0 w-full"
      data-name="column"
    >
      <Frame34 />
      <Row1 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="box-border content-stretch flex flex-col gap-12 items-start justify-center px-0 py-12 relative shrink-0 w-full">
      <Frame32 />
      <Column />
    </div>
  );
}

function Frame43() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center leading-[0] p-0 relative shrink-0 text-[#ffffff] text-center w-full">
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium relative shrink-0 text-[45px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[52px]">
          <span>{`Why Businesses Choose `}</span>
          <span className="text-[#30b6d0]">Planfirma</span>
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal opacity-80 relative shrink-0 text-[16px] tracking-[0.5px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">
          We make AI accessible and practical for businesses that want results,
          not complexity.
        </p>
      </div>
    </div>
  );
}

function Automation4PSvgrepoCom4() {
  return (
    <div
      className="relative shrink-0 size-9"
      data-name="automation-4p-svgrepo-com 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="automation-4p-svgrepo-com 1">
          <rect
            fill="var(--fill-0, #E1E5F2)"
            fillOpacity="0.1"
            height="36"
            rx="8"
            width="36"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p24562280}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-left w-full">
      <div
        className="-webkit-box css-dnr1hc font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[#30b6d0] text-[22px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[28px]">{`Simple & Clear Approach`}</p>
      </div>
      <div
        className="-webkit-box css-u1xfv font-['Roboto:Regular',_sans-serif] font-normal overflow-ellipsis overflow-hidden relative shrink-0 text-[#bfdbf7] text-[14px] tracking-[0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">
          We explain everything in plain English and work with you every step of
          the way to ensure success.
        </p>
      </div>
    </div>
  );
}

function ValuePropositionVertical7() {
  return (
    <div
      className="backdrop-blur-sm backdrop-filter basis-0 bg-[rgba(255,255,255,0.08)] grow h-60 min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="Value Proposition Vertical"
    >
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-2xl" />
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-9 h-60 items-start justify-center p-[24px] relative w-full">
          <Automation4PSvgrepoCom4 />
          <Frame44 />
        </div>
      </div>
    </div>
  );
}

function Automation4PSvgrepoCom5() {
  return (
    <div
      className="relative shrink-0 size-9"
      data-name="automation-4p-svgrepo-com 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="automation-4p-svgrepo-com 1">
          <rect
            fill="var(--fill-0, #E1E5F2)"
            fillOpacity="0.1"
            height="36"
            rx="8"
            width="36"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p24562280}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-left w-full">
      <div
        className="-webkit-box css-dnr1hc font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[#30b6d0] text-[22px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[28px]">{`Secure & Reliable`}</p>
      </div>
      <div
        className="-webkit-box css-u1xfv font-['Roboto:Regular',_sans-serif] font-normal overflow-ellipsis overflow-hidden relative shrink-0 text-[#bfdbf7] text-[14px] tracking-[0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">
          Your data stays safe with industry-standard security measures and
          reliable systems you can count on.
        </p>
      </div>
    </div>
  );
}

function ValuePropositionVertical8() {
  return (
    <div
      className="backdrop-blur-sm backdrop-filter basis-0 bg-[rgba(255,255,255,0.08)] grow h-60 min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="Value Proposition Vertical"
    >
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-2xl" />
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-9 h-60 items-start justify-center p-[24px] relative w-full">
          <Automation4PSvgrepoCom5 />
          <Frame45 />
        </div>
      </div>
    </div>
  );
}

function Automation4PSvgrepoCom6() {
  return (
    <div
      className="relative shrink-0 size-9"
      data-name="automation-4p-svgrepo-com 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="automation-4p-svgrepo-com 1">
          <rect
            fill="var(--fill-0, #E1E5F2)"
            fillOpacity="0.1"
            height="36"
            rx="8"
            width="36"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p24562280}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame46() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-left w-full">
      <div
        className="-webkit-box css-dnr1hc font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[#30b6d0] text-[22px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[28px]">Full Support</p>
      </div>
      <div
        className="-webkit-box css-u1xfv font-['Roboto:Regular',_sans-serif] font-normal overflow-ellipsis overflow-hidden relative shrink-0 text-[#bfdbf7] text-[14px] tracking-[0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">
          From planning to launch and beyond, our team supports you with
          training, maintenance, and ongoing improvements.
        </p>
      </div>
    </div>
  );
}

function ValuePropositionVertical9() {
  return (
    <div
      className="backdrop-blur-sm backdrop-filter basis-0 bg-[rgba(255,255,255,0.08)] grow h-60 min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="Value Proposition Vertical"
    >
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-2xl" />
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-9 h-60 items-start justify-center p-[24px] relative w-full">
          <Automation4PSvgrepoCom6 />
          <Frame46 />
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-12 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="row"
    >
      <ValuePropositionVertical7 />
      <ValuePropositionVertical8 />
      <ValuePropositionVertical9 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="box-border content-stretch flex flex-col gap-16 items-center justify-center p-0 relative shrink-0 w-full">
      <Frame43 />
      <Row2 />
    </div>
  );
}

function Label2() {
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
          Schedule a consultation
        </p>
      </div>
    </div>
  );
}

function ArrowRight1() {
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

function Button3() {
  return (
    <div
      className="backdrop-blur-sm backdrop-filter bg-[#44c9e41a] box-border content-stretch flex flex-row gap-2.5 h-14 items-center justify-start px-4 py-2 relative rounded-lg shrink-0"
      data-name="Button"
    >
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-lg" />
      <Label2 />
      <ArrowRight1 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[45px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[52px] whitespace-pre">
          Get a free personal business consultation?
        </p>
      </div>
      <Button3 />
    </div>
  );
}

function ValuePropositionSection() {
  return (
    <div
      className="bg-[#000000] order-2 relative shrink-0 w-full"
      data-name="Value Proposition Section"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[120px] items-start justify-center px-16 py-[72px] relative w-full">
          <Frame33 />
          <div
            className="absolute bottom-0 h-0 left-[-96px] right-[-96px]"
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
          <Frame42 />
          <Frame29 />
          <Frame27 />
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
            stroke="var(--stroke-0, #44C9E4)"
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
      <div className="font-['Sen:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#44c9e4] text-[28px] text-left text-nowrap tracking-[-1.12px]">
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
            fill="var(--fill-0, #E1E5F2)"
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
            fill="var(--fill-0, #E1E5F2)"
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
            fill="var(--fill-0, #E1E5F2)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
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
      <Container3 />
    </div>
  );
}

function FooterLinkColumn() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium gap-2 items-start justify-center leading-[0] p-0 relative shrink-0 text-[15px] text-left w-[200px]"
      data-name="footerLinkColumn"
    >
      <div className="relative shrink-0 text-[#bfdbf7] w-full">
        <p className="block leading-[20px]">Company</p>
      </div>
      <div className="relative shrink-0 text-[#e1e5f2] w-full">
        <p className="block leading-[20px]">About Us</p>
      </div>
      <div className="relative shrink-0 text-[#e1e5f2] w-full">
        <p className="block leading-[20px]">Careers</p>
      </div>
      <div className="relative shrink-0 text-[#e1e5f2] w-full">
        <p className="block leading-[20px]">Press</p>
      </div>
      <div className="relative shrink-0 text-[#e1e5f2] w-full">
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
      <div className="relative shrink-0 text-[#bfdbf7] w-full">
        <p className="block leading-[20px]">Resources</p>
      </div>
      <div className="relative shrink-0 text-[#e1e5f2] w-full">
        <p className="block leading-[20px]">Documentation</p>
      </div>
      <div className="relative shrink-0 text-[#e1e5f2] w-full">
        <p className="block leading-[20px]">API Reference</p>
      </div>
      <div className="relative shrink-0 text-[#e1e5f2] w-full">
        <p className="block leading-[20px]">Community</p>
      </div>
      <div className="relative shrink-0 text-[#e1e5f2] w-full">
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
      <div className="relative shrink-0 text-[#bfdbf7] w-full">
        <p className="block leading-[20px]">Legal</p>
      </div>
      <div className="relative shrink-0 text-[#e1e5f2] w-full">
        <p className="block leading-[20px]">Privacy Policy</p>
      </div>
      <div className="relative shrink-0 text-[#e1e5f2] w-full">
        <p className="block leading-[20px]">Terms of Service</p>
      </div>
      <div className="relative shrink-0 text-[#e1e5f2] w-full">
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
      <div className="relative shrink-0 text-[#bfdbf7] w-full">
        <p className="block leading-[20px]">Contact</p>
      </div>
      <div className="relative shrink-0 text-[#e1e5f2] w-full">
        <p className="block leading-[20px]">Contact Us</p>
      </div>
      <div className="relative shrink-0 text-[#e1e5f2] w-full">
        <p className="block leading-[20px]">Sales</p>
      </div>
      <div className="relative shrink-0 text-[#e1e5f2] w-full">
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

export default function PlanfirmaAi() {
  return (
    <div
      className="bg-[#000000] box-border content-stretch flex flex-col-reverse items-start justify-start p-0 relative size-full"
      data-name="Planfirma.ai"
    >
      <Header />
      <Container />
      <ValuePropositionSection />
      <SoftwareCompanyFooter />
    </div>
  );
}