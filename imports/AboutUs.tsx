import svgPaths from "./svg-kf8d7llyvu";
import imgABackgroundOfSoftAbstractGradientsMeantToInduceFeelingsOfTrustAndGrowth from "figma:asset/717b9edd51feb353dc1181c107cfe4e83599422b.png";

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
      className="bg-[#ffffff] order-4 shrink-0 sticky top-0 w-full"
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
      className="bg-center bg-cover bg-no-repeat h-[400px] rounded-2xl shrink-0 w-[600px]"
      data-name="A background of soft, abstract gradients meant to induce feelings of trust and growth"
      style={{
        backgroundImage: `url('${imgABackgroundOfSoftAbstractGradientsMeantToInduceFeelingsOfTrustAndGrowth}')`,
      }}
    />
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
          About Us
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
          Check our services
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
      className="bg-[#1f7a8c] box-border content-stretch flex flex-row gap-2.5 h-14 items-center justify-center px-5 py-4 relative rounded-lg shrink-0"
      data-name="Button"
    >
      <Label />
      <ArrowRight />
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-6 grow h-[400px] items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
      <Frame24 />
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#1c1c1c] text-[57px] text-left tracking-[-0.25px]"
        style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[64px]">
          Expert Business Consulting Solutions
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#1c1c1c] text-[16px] text-left tracking-[0.5px]"
        style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">
          We help businesses innovate, grow, and optimise operations with
          tailored solutuions. Our expertise spans multiple industries, ensuring
          impactful results.
        </p>
        <p className="block mb-0">&nbsp;</p>
        <p className="block">
          Partner with us to drive success and achieve sustainable growth.
        </p>
      </div>
      <Button />
    </div>
  );
}

function MainContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-16 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Main Container"
    >
      <ABackgroundOfSoftAbstractGradientsMeantToInduceFeelingsOfTrustAndGrowth />
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
      className="box-border content-stretch flex flex-col-reverse items-start justify-start order-2 p-0 relative shrink-0 w-full"
      data-name="Main Content"
    >
      <BusinessEstablishmentServicesCarousel />
    </div>
  );
}

function Frame41() {
  return (
    <div className="box-border content-stretch flex flex-row font-['Roboto:Regular',_sans-serif] font-normal gap-12 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#1c1c1c] text-[24px] text-center text-nowrap">
      <div
        className="relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[32px] text-nowrap whitespace-pre">
          150+ Projects completed
        </p>
      </div>
      <div
        className="relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[32px] text-nowrap whitespace-pre">
          100+ Satisfied customers
        </p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between order-1 p-0 relative shrink-0 w-full">
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#1c1c1c] text-[45px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[52px] whitespace-pre">
          14+ Years of work experience
        </p>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-[#1c1c1c] h-full shrink-0 w-0.5" />
      </div>
      <Frame41 />
    </div>
  );
}

function Container() {
  return (
    <div className="order-3 relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col-reverse gap-16 items-start justify-start p-[48px] relative w-full">
          <MainContent />
          <Frame40 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Roboto:Medium',_sans-serif] font-medium gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-center w-full">
      <div
        className="-webkit-box css-cuk6wl overflow-ellipsis overflow-hidden relative shrink-0 text-[#1f7a8c] text-[57px] tracking-[-0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[64px]">2011</p>
      </div>
      <div
        className="-webkit-box css-agwa8z overflow-ellipsis overflow-hidden relative shrink-0 text-[#022b3a] text-[32px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[40px]">Company Inception</p>
      </div>
      <div
        className="-webkit-box css-a9ms2l overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(28,28,28,0.6)] tracking-[0.15px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">
          Planfirma was founded, embarking on its mission to deliver innovative
          solutions.
        </p>
      </div>
    </div>
  );
}

function ValuePropositionVertical() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[312px] min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="Value Proposition Vertical"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 h-[312px] items-center justify-center p-[40px] relative w-full">
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Roboto:Medium',_sans-serif] font-medium gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-center w-full">
      <div
        className="-webkit-box css-cuk6wl overflow-ellipsis overflow-hidden relative shrink-0 text-[#1f7a8c] text-[57px] tracking-[-0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[64px]">2013</p>
      </div>
      <div
        className="-webkit-box css-agwa8z overflow-ellipsis overflow-hidden relative shrink-0 text-[#022b3a] text-[32px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[40px]">National Expansion</p>
      </div>
      <div
        className="-webkit-box css-a9ms2l overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(28,28,28,0.6)] tracking-[0.15px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">
          Expanded operations across various states in India, establishing a
          strong domestic presence.
        </p>
      </div>
    </div>
  );
}

function ValuePropositionVertical1() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[312px] min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="Value Proposition Vertical"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 h-[312px] items-center justify-center p-[40px] relative w-full">
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Roboto:Medium',_sans-serif] font-medium gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-center w-full">
      <div
        className="-webkit-box css-cuk6wl overflow-ellipsis overflow-hidden relative shrink-0 text-[#1f7a8c] text-[57px] tracking-[-0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[64px]">2016</p>
      </div>
      <div
        className="-webkit-box css-agwa8z overflow-ellipsis overflow-hidden relative shrink-0 text-[#022b3a] text-[32px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[40px]">Government Sector Engagement</p>
      </div>
      <div
        className="-webkit-box css-a9ms2l overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(28,28,28,0.6)] tracking-[0.15px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">
          Began strategic collaborations and service delivery to government
          entities.
        </p>
      </div>
    </div>
  );
}

function ValuePropositionVertical2() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[312px] min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="Value Proposition Vertical"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 h-[312px] items-center justify-center p-[40px] relative w-full">
          <Frame27 />
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="box-border content-stretch flex flex-row gap-12 items-start justify-start p-0 relative shrink-0 w-full">
      <ValuePropositionVertical />
      <ValuePropositionVertical1 />
      <ValuePropositionVertical2 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Roboto:Medium',_sans-serif] font-medium gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-center w-full">
      <div
        className="-webkit-box css-cuk6wl overflow-ellipsis overflow-hidden relative shrink-0 text-[#1f7a8c] text-[57px] tracking-[-0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[64px]">2018</p>
      </div>
      <div
        className="-webkit-box css-agwa8z overflow-ellipsis overflow-hidden relative shrink-0 text-[#022b3a] text-[32px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[40px]">Achieving Client Success</p>
      </div>
      <div
        className="-webkit-box css-a9ms2l overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(28,28,28,0.6)] tracking-[0.15px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">
          Celebrated serving over 100 satisfied customers, a testament to our
          commitment to excellence.
        </p>
      </div>
    </div>
  );
}

function ValuePropositionVertical3() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[312px] min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="Value Proposition Vertical"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 h-[312px] items-center justify-center p-[40px] relative w-full">
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Roboto:Medium',_sans-serif] font-medium gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-center w-full">
      <div
        className="-webkit-box css-cuk6wl overflow-ellipsis overflow-hidden relative shrink-0 text-[#1f7a8c] text-[57px] tracking-[-0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[64px]">2022</p>
      </div>
      <div
        className="-webkit-box css-agwa8z overflow-ellipsis overflow-hidden relative shrink-0 text-[#022b3a] text-[32px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[40px]">{`Global Reach & Partnerships`}</p>
      </div>
      <div
        className="-webkit-box css-a9ms2l overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(28,28,28,0.6)] tracking-[0.15px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">
          Established a global presence and forged strategic partnerships
          worldwide, extending our international footprint.
        </p>
      </div>
    </div>
  );
}

function ValuePropositionVertical4() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[312px] min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="Value Proposition Vertical"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 h-[312px] items-center justify-center p-[40px] relative w-full">
          <Frame29 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Roboto:Medium',_sans-serif] font-medium gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-center w-full">
      <div
        className="-webkit-box css-cuk6wl overflow-ellipsis overflow-hidden relative shrink-0 text-[#1f7a8c] text-[57px] tracking-[-0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[64px]">2025</p>
      </div>
      <div
        className="-webkit-box css-agwa8z overflow-ellipsis overflow-hidden relative shrink-0 text-[#022b3a] text-[32px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[40px]">Strategic Vertical Expansion</p>
      </div>
      <div
        className="-webkit-box css-a9ms2l overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(28,28,28,0.6)] tracking-[0.15px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">
          Launched new, high-growth verticals in Artificial Intelligence (AI)
          and Cloud technologies.
        </p>
      </div>
    </div>
  );
}

function ValuePropositionVertical5() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[312px] min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="Value Proposition Vertical"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 h-[312px] items-center justify-center p-[40px] relative w-full">
          <Frame30 />
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="box-border content-stretch flex flex-row gap-12 items-start justify-start p-0 relative shrink-0 w-full">
      <ValuePropositionVertical3 />
      <ValuePropositionVertical4 />
      <ValuePropositionVertical5 />
    </div>
  );
}

function Row() {
  return (
    <div className="order-1 relative shrink-0 w-full" data-name="row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-12 items-start justify-center p-0 relative w-full">
        <Frame42 />
        <Frame43 />
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="box-border content-stretch flex flex-col-reverse gap-16 items-start justify-start order-5 px-0 py-16 relative shrink-0 w-full">
      <div
        className="flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center leading-[0] order-2 relative shrink-0 text-[#000000] text-[45px] text-center w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[52px]">
          Smart and effective business solutions since 2011
        </p>
      </div>
      <Row />
    </div>
  );
}

function Frame46() {
  return <div className="bg-[#353535] rounded-[9999px] shrink-0 size-64" />;
}

function Frame45() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip p-[10px] relative shrink-0">
      <Frame46 />
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[0px] text-center text-nowrap tracking-[0.15px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p
          className="adjustLetterSpacing block leading-[44px] mb-0 text-[36px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Arun Srivastav
        </p>
        <p className="adjustLetterSpacing block leading-[24px] text-[16px]">
          CEO
        </p>
      </div>
    </div>
  );
}

function Frame49() {
  return <div className="bg-[#353535] rounded-[9999px] shrink-0 size-64" />;
}

function Frame50() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip p-[10px] relative shrink-0">
      <Frame49 />
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[0px] text-center text-nowrap tracking-[0.15px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p
          className="adjustLetterSpacing block leading-[44px] mb-0 text-[36px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Anuradha Srivastava
        </p>
        <p className="adjustLetterSpacing block leading-[24px] text-[16px]">
          CTO
        </p>
      </div>
    </div>
  );
}

function Frame51() {
  return <div className="bg-[#353535] rounded-[9999px] shrink-0 size-64" />;
}

function Frame47() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip p-[10px] relative shrink-0">
      <Frame51 />
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[0px] text-center text-nowrap tracking-[0.15px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p
          className="adjustLetterSpacing block leading-[44px] mb-0 text-[36px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Swati Rao
        </p>
        <p className="adjustLetterSpacing block leading-[24px] text-[16px]">
          Finance manager
        </p>
      </div>
    </div>
  );
}

function Frame52() {
  return <div className="bg-[#353535] rounded-[9999px] shrink-0 size-64" />;
}

function Frame48() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip p-[10px] relative shrink-0">
      <Frame52 />
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[0px] text-center text-nowrap tracking-[0.15px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p
          className="adjustLetterSpacing block leading-[44px] mb-0 text-[36px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Kinjal Gandhi
        </p>
        <p className="adjustLetterSpacing block leading-[24px] text-[16px]">
          Product Manager
        </p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between order-2 p-0 relative shrink-0 w-full"
      data-name="row"
    >
      <Frame45 />
      <Frame50 />
      <Frame47 />
      <Frame48 />
    </div>
  );
}

function Frame53() {
  return <div className="bg-[#353535] rounded-[9999px] shrink-0 size-64" />;
}

function Frame54() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip p-[10px] relative shrink-0">
      <Frame53 />
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[0px] text-center text-nowrap tracking-[0.15px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p
          className="adjustLetterSpacing block leading-[44px] mb-0 text-[36px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Ravinder Singh
        </p>
        <p className="adjustLetterSpacing block leading-[24px] text-[16px]">
          Delivery Manager
        </p>
      </div>
    </div>
  );
}

function Frame55() {
  return <div className="bg-[#353535] rounded-[9999px] shrink-0 size-64" />;
}

function Frame56() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip p-[10px] relative shrink-0">
      <Frame55 />
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[0px] text-center text-nowrap tracking-[0.15px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p
          className="adjustLetterSpacing block leading-[44px] mb-0 text-[36px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Vinod Shirke
        </p>
        <p className="adjustLetterSpacing block leading-[24px] text-[16px]">
          Delivery Manager
        </p>
      </div>
    </div>
  );
}

function Frame57() {
  return <div className="bg-[#353535] rounded-[9999px] shrink-0 size-64" />;
}

function Frame58() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip p-[10px] relative shrink-0">
      <Frame57 />
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[0px] text-center text-nowrap tracking-[0.15px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p
          className="adjustLetterSpacing block leading-[44px] mb-0 text-[36px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Joji Varghese
        </p>
        <p className="adjustLetterSpacing block leading-[24px] text-[16px]">
          Project Manager
        </p>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-12 items-center justify-center order-1 p-0 relative shrink-0 w-full"
      data-name="row"
    >
      <Frame54 />
      <Frame56 />
      <Frame58 />
    </div>
  );
}

function ValuePropositionSection() {
  return (
    <div
      className="bg-[rgba(191,219,247,0.2)] order-2 relative shrink-0 w-full"
      data-name="Value Proposition Section"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col-reverse gap-16 items-start justify-center px-16 py-[72px] relative w-full">
          <Frame44 />
          <div
            className="absolute bottom-0 h-0 left-[-96px] order-4 right-[-96px]"
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
          <div
            className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] min-w-full order-3 relative shrink-0 text-[#1c1c1c] text-[45px] text-center"
            style={{
              width: "min-content",
              fontVariationSettings: "'wdth' 100",
            }}
          >
            <p className="block leading-[52px]">
              Committed staff are ready to help you
            </p>
          </div>
          <Row1 />
          <Row2 />
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

export default function AboutUs() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col-reverse items-start justify-start p-0 relative size-full"
      data-name="About Us"
    >
      <Header />
      <Container />
      <ValuePropositionSection />
      <SoftwareCompanyFooter />
    </div>
  );
}