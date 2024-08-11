import React from 'react';
import { CgAdd } from "react-icons/cg";
import { CgBulb } from "react-icons/cg";


const Page1 = () => {
  return (
    <div className=''>
    {/* <div className="font-sans antialiased text-gray-900">
   <nav className="bg-white py-3 shadow-md justify-around">
      <div className="flex flex-wrap flex-nowrap justify-around items-center ">
        <div>
          <img src="/path-to-your-logo.png" alt="Logo" className="h-10" />
        </div>
        <div className="flex md:space-x-8 space-x-3 text-lg list-none">
          <li>
            <a href="#" className="hover:text-gray-700 py-1 px-3 md:px-8">How to Start</a>
          </li>
          <li >
            <a href="#" className="hover:text-gray-700 py-1">Services</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700 py-1">Technologies</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700 py-1">Careers</a>
          </li>
          <li>
          <button className="bg-orange-500 text-white px-4 py-1 rounded-md hover:bg-orange-600">
            Build a Team
          </button>
          </li>
        </div>
       
        <div>
            <a href="#" className="hover:text-gray-700 list-none">Meet your team</a>
          </div>
        </div>
      
    </nav>
    </div> */}
    

    <header className="bg-white">
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
      </a>
    </div>
    <div className="flex lg:hidden">
      <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <span className="sr-only">Open main menu</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div className="hidden lg:flex lg:gap-x-12">
      <div className="relative">
        <button type="button" className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-expanded="false">
          Product
          <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </button>

        
       
      </div>

      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Features</a>
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Company</a>
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
    </div>
  </nav>
  <div className="lg:hidden md:hidden hidden" role="dialog" aria-modal="true">
    <div className="fixed inset-0 z-10"></div>
    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
        </a>
        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Close menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            <div className="-mx-3">
              <button type="button" className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
              </button>
              <div className="mt-2 space-y-2" id="disclosure-1">
                <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
              </div>
            </div>
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
          </div>
          <div className="py-6">
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>



    <div className="bg-white flex justify-center text-center py-8 md:px-20">
  <div className="flex flex-wrap max-w-6xl w-full">
   
    <div className=" md:relative left-14 top-20 h-[450px] md:w-3/6 px-4 bg-white shadow-md rounded-tr-[68px] flex flex-col items-center">
      <h1 className="text-5xl lg:text-5xl md:text-2xl font-bold">
        Custom Software Solutions for Business Leaders
      </h1>
      <p className="mt-4 text-lg">
        We specialize in creating custom software solutions that solve complex business challenges for small to mid-sized businesses. With a combination of US-based management and offshore development expertise, we deliver top-notch services that maximize your ROI.
      </p>
      <div className="mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Build a Team
        </button>
      </div>
    </div>
    <div className=" md:w-3/6 flex justify-center">
      <img src="https://media.istockphoto.com/id/1530802302/photo/focus-hand-of-businessman-show-virtual-graphic-data-connect-with-ai-using-ai-to-sucess.webp?b=1&s=170667a&w=0&k=20&c=Vd0qxIaRW0AvF1oTGZSRncmnCpqwT49GILXnr4GifFA=" alt="Custom Software Solutions" className="rounded-lg shadow-lg w-full h-[580px]" />
    </div>
  </div>
</div>

    
      <section className="bg-gray-100 py-8">
        <div className=" text-center justify-between">
          <h2 className="text-2xl font-bold">Amazing clients who trust us</h2>
          <div className="md:flex  flex-coljustify-between mt-4 justify-around">
            <div className="bg-white shadow-md p-4 rounded-md">Client 1</div>
            <div className="bg-white shadow-md p-4 rounded-md">Client 2</div>
            <div className="bg-white shadow-md p-4 rounded-md">Client 3</div>
            <div className="bg-white shadow-md p-4 rounded-md">Client 4</div>
            <div className="bg-white shadow-md p-4 rounded-md">Client 4</div>
          </div>
        </div>
      </section>

      
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center">What We Do</h2>
        <div className="md:flex lg:flex justify-between justify-around mt-8  spaace-x-2">
          <div className="md:w-1/4 w-full bg-gray-100 p-6 rounded-md shadow-md">
          <h3 className="text-xl font-bold"><CgAdd size={25} /></h3>

            <h3 className="text-xl font-bold mt-2">Custom Software Development</h3>
            <p className="mt-4">
              We build custom software solutions tailored to your business needs.
              We build custom software solutions tailored to your business needs.
              We build custom software solutions tailored to your business needs.

            </p>
          </div>
          <div className="md:w-1/4 w-full bg-gray-100 p-6 rounded-md shadow-md">
          <h3 className="text-xl font-bold"><CgAdd size={25}/></h3>

            <h3 className="text-xl font-bold mt-2">Mobile App Development</h3>
            <p className="mt-4">
              Our team develops user-friendly mobile applications for various platforms.
              Our team develops user-friendly mobile applications for various platforms.
              Our team develops user-friendly mobile applications for various platforms.

            </p>
          </div>
          <div className="md:w-1/4 w-full bg-gray-100 p-6 rounded-md shadow-md">
          <h3 className="text-xl font-bold"><CgAdd size={25}/></h3>

            <h3 className="text-xl font-bold mt-2">Web Development</h3>
            <p className="mt-4">
              We create responsive and modern websites to help you reach a wider audience.
              We create responsive and modern websites to help you reach a wider audience.
              We create responsive and modern websites to help you reach a wider audience.

            </p>
          </div>
        </div>
      </section>

     
      <section className="bg-blue-500 text-white py-12">
        <div className=" mx-auto text-center">
        <p className="text-3xl font-bold">How to start</p>
          <h2 className="text-3xl font-bold">Easy Process</h2>
          <p className="text-3xl font-bold">We specalize in helping a team of developers and  testers and leaders</p>
           </div>
          <div className="flex md:flex-row flex-col md:justify-between justify-center text-center mt-8 ">
          <div className="md:w-1/5 w-full">
            <div className="text-5xl flex justify-center"><CgBulb /></div>
            <div className='flex justify-center'>
              <p className="text-xl font-bold mt-2">01</p>
            <h3 className="text-xl font-bold mt-2 ml-3">You Review</h3>
            </div>
            </div>
            <div className="md:w-1/5 w-full">
            <div className="text-5xl flex justify-center"><CgBulb /></div>
            <div className='flex justify-center'>
            <p className="text-xl font-bold mt-2">02</p>
            <h3 className="text-xl font-bold mt-2 ml-3">We Process</h3>
            </div>
            </div>
            <div className="md:w-1/5 w-full">
            <div className="text-5xl flex justify-center"><CgBulb /></div>
            <div className='flex justify-center'>
            <p className="text-xl font-bold mt-2">03</p>
            <h3 className="text-xl font-bold mt-2 ml-3">You Review</h3>
            </div>
            </div>
            <div className="md:w-1/5 w-full text-center ">
            <div className="text-5xl flex justify-center"><CgBulb /></div>
            <div className='flex justify-center'>

          <p className="text-xl font-bold mt-2">04</p>
            <h3 className="text-xl font-bold mt-2 ml-3">You Review</h3>
            </div>
            </div>
          </div>
      </section>

    
      <section className="bg-gray-800 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Contact Us Today to Discuss Your Project</h2>
          <div className="flex justify-center mt-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

    
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center">Hire Permanent and Remote Developers</h2>
        <div className="flex justify-center mt-8 space-x-8">
          <div className="w-1/3 bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold">Permanent Developers</h3>
            <p className="mt-4">
              Hire full-time developers to join your team and work on-site.
            </p>
          </div>
          <div className="w-1/3 bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold">Permanent Developers</h3>
            <p className="mt-4">
              Hire full-time developers to join your team and work on-site.
            </p>
          </div>
          <div className="w-1/3 bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold">Permanent Developers</h3>
            <p className="mt-4">
              Hire full-time developers to join your team and work on-site.
            </p>
          </div>
          <div className="w-1/3 bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold">Remote Developers</h3>
            <p className="mt-4">
              Hire remote developers to work on your projects from anywhere.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Specialized Staff We Provide</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-10 mx-auto" style={{ maxWidth: '1200px' }}>
          {['Blockchain', 'Web3', 'K8s', 'Java', 'NFT', 'Python', 'Golang', 'Vue', 'Figma', 'Angular', 'Svelte', 'React'].map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={`path/to/${tech.toLowerCase()}-icon.png`} alt={tech} className="h-16 w-16" />
              <p className="mt-2">{tech}</p>
            </div>
          ))}
        </div>
      </section>
    
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center">Specialized Staff We Provide</h2>
        <div className="flex justify-center mt-8 space-x-4">
          <div className="bg-gray-100 p-6 rounded-md shadow-md">Staff 1</div>
          <div className="bg-gray-100 p-6 rounded-md shadow-md">Staff 2</div>
          <div className="bg-gray-100 p-6 rounded-md shadow-md">Staff 3</div>
          <div className="bg-gray-100 p-6 rounded-md shadow-md">Staff 4</div>
        </div>
      </section> 
    </div> 
  );
};

export default Page1; 
