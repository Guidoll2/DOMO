import Image from "next/image";
import Navbar from "./navbar";

export default function Home() {
  return (
    
    <main className="flex flex-col items-center md:p-10">
   
      <Navbar/>
      <Image src='/back.jpg' width={1000} height={1000} alt={"backgroundimage"} className="absolute top-1/4 md:-top-24 right-0 md:w-1/2 -z-[10]"></Image>
      
      <div id="Hero" className="px-8 py-16 w-screen md:w-3/5 md:-translate-x-60 md:translate-y-10">
        <h1 className="text-white text-2xl font-semibold mb-2 md:text-5xl">We build beautiful and reliable web solutions</h1>
        <p className="text-gray-400 break-words">We strongly believe that communication, trust and transparency <br></br> are the essential elements of successful business relationship.<br></br> 
          Ready for the journey?
        </p>
        <div className="flex flex-col-2 gap-4 py-5">
        <button className="border-[1px] px-4 py-1 text-xs md:text-l md:px-8 md:py-3 rounded border-gray-500 text-gray-400 font-bold" >Learn more</button>
        <button className="border-[1px] px-4 py-1 text-xs md:text-l md:px-8 md:py-3 rounded border-gray-500 text-white font-bold bg-[#3568e6] flex items-center hover:animate-pulse">
         Our Projects
         <Image src='/rightblanca.png' width={1000} height={1000} alt="Flechahaciaderecha" className="w-4 h-4 ml-2"/>
        </button></div>
       </div>

       <div id="seccion2" className="flex flex-col items-center px-16 py-56 gap-5 ">
        <p className="text-white text-xl font-semibold md:text-4xl">Our Services</p>
        <p className="text-gray-400 text-center font-bold text-xs md:text-xl md:px-40 py-1">We feel very strong about our skills when it comes to planning, designing and coding applications. Here is what we love to do!</p>
       </div>
    
  <section id="Cuadrosservicios" className="md:flex md:gap-4 md:px-40 md:py-40 md:-translate-y-64 -translate-y-40 z-20">
  
  <div className="bg-white rounded-[2px] flex flex-col justify-center items-center md:w-4/12 py-10 px-2 ml-8 mr-8 md:ml-0 md:mr-0">
  <div className="flex justify-center items-center rounded-full bg-[#3871ff] w-14 h-14 mb-4">
    <Image src='/docwhite.png' className="p-1 ml-1 w-8 h-8" width={1000} height={1000} alt="Icon"/>
  </div>
  <p className="text-black text-l font-bold text-center">Business & Product Concept</p>
  <p className="text-gray-400 font-semibold mb-8 text-[13px] text-center leading-6 p-5">Analyse business and product concepts at Start-up Workshops or Ongoin Projects' Audits and prepare a viable and sensible product roadmap for achieving a perfect market fit</p>
  <button className="border-[2px] px-4 py-1 text-xs md:text-l md:px-8 md:py-3 rounded border-gray-300 text-gray-400 font-bold">Learn more</button>
</div>

<div className="bg-white rounded-[2px] flex flex-col justify-center items-center md:w-4/12 py-10 px-2 mt-4 md:mt-0 ml-8 mr-8 md:ml-0 md:mr-0">
  <div className="flex justify-center items-center rounded-full bg-[#3871ff] w-14 h-14 mb-4">
    <Image src='/rdesign.png' className="p-1 w-8 h-8" width={1000} height={1000} alt="Icon"/>
  </div>
  <p className="text-black text-l font-bold text-center">Web & Mobile Development</p>
  <p className="text-gray-400 font-semibold mb-8 text-[13px] text-center leading-6 p-5">Plan, develop and test high-quality web- applications using AngularJS, NodeJS, Javascript, Typescript, HTML5 and SASS/ CSS3 frameworks and native mobile languages.</p>
  <button className="border-[2px] px-4 py-1 text-xs md:text-l md:px-8 md:py-3 rounded border-gray-300 text-gray-400 font-bold">Learn more</button>
</div>

<div className="bg-white rounded-[2px] flex flex-col justify-center items-center md:w-4/12 py-10 px-2 mt-4 md:mt-0 ml-8 mr-8 md:ml-0 md:mr-0">
  <div className="flex justify-center items-center rounded-full bg-[#3871ff] w-14 h-14 mb-4">
    <Image src='/regla.png' className=" w-8 h-8" width={1000} height={1000} alt="Icon"/>
  </div>
  <p className="text-black text-l font-bold text-center">UX & UI Desing</p>
  <p className="text-gray-400 font-semibold mb-8 text-[13px] text-center leading-6 p-5">Sketch information architecture and simple mock-ups, convert them into clickable prototypes and finish with usable interface designs to deliver a good and reliable user experience.</p>
  <button className="border-[2px] px-4 py-1 text-xs md:text-l md:px-8 md:py-3 rounded border-gray-300 text-gray-400 font-bold ">Learn more</button>
</div>

  
</section>

<section id="parteazul">
 <div className="flex grid grid-cols-1 bg-[#3871ff] w-screen md:p-24 -translate-y-56 z-[10] md:grid-cols-2 md:-translate-y-[450px]  ">
<div className="p-20 ">
<p className="text-white text-2xl mt-5">We use cutting edge technology</p>
<p className="mt-4 text-gray-300 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ex excepturi sapiente dignissimos obcaecati exercitationem veniam fugiat suscipit incidunt iste maxime, corrupti ab nulla quas itaque nobis aliquam corporis reprehenderit.</p>
</div>

<div className="md:hidden flex grid grid-cols-6 p-5 -translate-y-8">  
  <Image src='/html-5.png' width={1000} height={1000} alt="html5logo" className="w-14"/>
   <Image src='/sass.png' width={1000} height={1000} alt="html5logo" className="w-14"/>
    <Image src='/angularjs.svg' width={1000} height={1000} alt="html5logo" className="w-12 "/>
    <Image src='/css-3.png' width={1000} height={1000} alt="html5logo" className="w-14"/>
     <Image src='/node.svg' width={1000} height={1000} alt="html5logo" className="w-14 "/>
   <Image src='/python.png' width={1000} height={1000} alt="html5logo" className="w-14 "/>
   </div>

 <div className="hidden md:flex md:grid md:grid-cols-2 md:py-0 p-48 md:mt-20">
   <div className="">
   <Image src='/html-5.png' width={1000} height={1000} alt="html5logo" className="w-14"/>
   <Image src='/sass.png' width={1000} height={1000} alt="html5logo" className="w-14 mt-5"/>
    
    <Image src='/angularjs.svg' width={1000} height={1000} alt="html5logo" className="w-12 mt-5"/>
     </div>
     <div>
     <Image src='/css-3.png' width={1000} height={1000} alt="html5logo" className="w-14"/>
     <Image src='/node.svg' width={1000} height={1000} alt="html5logo" className="w-14 mt-5"/>

   <Image src='/python.png' width={1000} height={1000} alt="html5logo" className="w-14 mt-5"/>
   </div>
  </div>
  </div>

</section>

<section id="cuadromarcas">
  <div className="bg-white w-screen h-3/6 md:-translate-y-[450px] -translate-y-[230px] flex grid grid-cols-1">
  <div className="">
    <p className="text-center font-bold text-gray-400 text-[10px] md:mt-24 mt-10 mb-5">CLIENTS WE WORKED WITH</p>
  </div>

  <div className="flex grid grid-cols-5 md:p-36 p-8 -translate-y-5 md:-translate-y-32">
  <Image src='/tnw.svg' width={1000} height={1000} alt="html5logo" className="md:w-24 md:mt-9 mt-4 w-12"/>
  <Image src='/googleit.png' width={1000} height={1000} alt="html5logo" className="md:w-24 w-12"/>
  <Image src='/nike.svg' width={1000} height={1000} alt="html5logo" className="md:w-24 w-12"/>
  <Image src='/airbnb.svg' width={1000} height={1000} alt="html5logo" className="md:w-24 w-12"/>
  <Image src='/itnews.png' width={1000} height={1000} alt="html5logo" className="w-34 md:mt-6 mt-4"/>
  </div>
  </div> 

  <div className="flex grid grid-cols-1 md:grid-cols-2 -translate-y-32 p-5 md:-translate-y-[600px] md:p-36 w-screen  md:gap- gap-2 md:mt-0 -mt-5">
  
  <div id="getintouch" className="flex grid grid-cols-1 bg-[#3871ff] p-8 h-3/4 md:w-4/5 -translate-y-32 md:translate-x-24 rounded-[5px]">
    <p className="text-white font-semibold md:text-xl">Get in touch with us</p>
    <p className="text-gray-200 text-[12px] mb-4 leading-6">Maecenas sed diam eget risus varius <br></br>blandit sit amet non magna</p>
    <button className="border-[1px] text-[10px] md:text-l px-6 mb-12 h-1/2 md:px-6 rounded-[2px] border-gray-300 text-white w-fit">Hire us</button>
  </div>

  <div id="projects" className="flex bg-[#3871ff] md:p-8 h-full md:h-3/4 md:w-4/5 -translate-y-32 rounded-[5px] -mt-8 md:mt-0 p-8">
  <div className="flex flex-col justify-center md:w-1/2">
    <p className="text-white font-semibold md:text-xl md:mt-10">Our Projects</p>
    <p className="text-gray-200 text-[12px] mb-4 leading-6">Maecenas sed diam eget risus varius <br></br> blandit sit amet non magna</p>
    <button className="border-[1px] text-[10px] px-6 p-2 md:mb-12  md:px-6 rounded-[2px] border-gray-300 text-white w-fit">See projects</button>
  </div>
  <div className="flex justify-center items-center w-2/5 md:w-2/5">
    <Image src='/celuDOMO.png' width={1000} height={1000} alt="cellphonelogo" className="max-w-full translate-y-4 translate-x-8 md:translate-y-1 md:translate-x-10" />
  </div>
</div>
  
  </div>


  </section>

<footer className=" flex grid grid-cols-4 px-32 h-24 -translate-y-[800px]">
  
  <div className="flex grid grid-cols-1 w-full gap-2">
    <p className="text-white">compleet labs</p>
    <p className="text-gray-300 text-xs leading-6">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla</p>
    <div className="flex grid grid-cols-4 mt-2">
    <Image src='/xdomo.png' width={1000} height={1000} alt="xlogo" className="w-6" />
    <Image src='/dribble.png' width={1000} height={1000} alt="dribblelogo" className="w-6" />
    <Image src='/facebook.svg' width={1000} height={1000} alt="facebooklogo" className="w-6" />
    <Image src='/instagramdomo.png' width={1000} height={1000} alt="instragamlogo" className="w-6" /></div>
  </div>
  <div className="flex grid grid-cols-1 ml-56">
    <p className="text-white text-[10px]">SITEMAP</p>
    <p className="text-gray-400 text-xs">Home</p>
    <p className="text-gray-400 text-xs">Technology</p>
    <p className="text-gray-400 text-xs">Services</p>
    <p className="text-gray-400 text-xs">About</p>
  </div>
  <div className="flex grid grid-cols-1 ml-56 w-full">
    <p className="text-white text-[10px]">CASE STUDIES</p>
    <p className="text-gray-400 text-xs">Swiss Airlines</p>
    <p className="text-gray-400 text-xs">Google</p>
    <p className="text-gray-400 text-xs">Apple</p>
    <p className="text-gray-400 text-xs">Nike</p>
  </div>
  <div className="flex grid grid-cols-1 ml-56">
    <p className="text-white text-[10px]">Contact</p>
    <p className="text-gray-400 text-xs -translate-y-4">Jobs</p>
    <p className="text-gray-400 text-xs -translate-y-8">Hire us</p>
  </div>

</footer> 
    </main>
  );
}
