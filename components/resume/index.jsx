import Link from 'next/link';
import Layout from '../shared/layout'
import { FaDownload, FaBriefcase, FaReact } from "react-icons/fa";

const Resume = () => {
    const handleDownloadCV = () => {
        const cvUrl = './Mahesh.pdf';
        const downloadLink = document.createElement('a');

        downloadLink.href = cvUrl;
        downloadLink.download = 'Mahesh.pdf';

        document.body.appendChild(downloadLink);
        downloadLink.click();

        document.body.removeChild(downloadLink);
    };

    return (
        <Layout>
            <div>
                <div className="px-[8.5rem] py-16">
                    <div className="flex justify-center">
                        <h1 className="text-[3.5rem] font-extrabold text-[#666] pt-[0.2rem]">ABOUT <span className="text-[#72b626]">ME</span></h1>
                    </div>
                </div>
            </div>
            <section className='flex justify-center'>
                <div className='container px-[70px]'>
                    <div className='row flex'>
                        <div className="col-12 col-lg-5 col-xl-6 w-[50%] px-[15px]">
                            <div className="row">
                                <div className="col-12">
                                    <h3 className="uppercase text-[#666] text-[26px] pb-[22px] font-semibold">personal infos</h3>
                                </div>
                                <div className="col-12 d-block d-sm-none">
                                    {/* <img src="img/img-mobile-light.jpg" className="img-fluid main-img-mobile" alt="my picture" /> */}
                                </div>
                                <div className='flex'>
                                    <div className="col-6 w-[50%]">
                                        <ul className="font-sans mb-[1rem] text-[16px]">
                                            <li className='mb-[20px]'> <span className="capitalize text-gray-400">first name :</span> <span className="font-semibold text-[#666]">Mahesh Chand</span> </li>
                                            <li className='mb-[20px]'> <span className="capitalize text-gray-400">last name :</span> <span className="font-semibold text-[#666]">Prajapat</span> </li>
                                            <li className='mb-[20px]'> <span className="capitalize text-gray-400">Age :</span> <span className="font-semibold text-[#666]">26 Years</span> </li>
                                            <li className='mb-[20px]'> <span className="capitalize text-gray-400">Nationality :</span> <span className="font-semibold text-[#666]">Indian</span> </li>
                                            <li className='mb-[20px]'> <span className="capitalize text-gray-400">Freelance :</span> <span className="font-semibold text-[#666]">Available</span> </li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul className="font-sans mb-[1rem] text-[16px]">
                                            <li className='mb-[20px]'> <span className="capitalize text-gray-400">Address :</span> <span className="font-semibold text-[#666]">Jaipur</span> </li>
                                            <li className='mb-[20px]'> <span className="capitalize text-gray-400">phone :</span> <span className="font-semibold text-[#666]">+91 8005605097</span> </li>
                                            <li className='mb-[20px]'> <span className="capitalize text-gray-400">Email :</span> <span className="font-semibold text-[#666]">mheshpk@gmail.com</span> </li>
                                            <li className='mb-[20px]'> <span className="capitalize text-gray-400">Skype :</span> <span className="font-semibold text-[#666]">mahesh prajapat</span> </li>
                                            <li className='mb-[20px]'> <span className="capitalize text-gray-400">langages :</span> <span className="font-semibold text-[#666]">Hindi, English</span> </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex justify-end mt-3 text-[#666] font-medium w-52 border-[1px] border-[#72b626] rounded-[35px] hover:bg-[#72b626] hover:duration-200 hover:text-white">
                                    <button onClick={handleDownloadCV} className="flex gap-2 py-[16px] justify-end inline-block truncate items-center cursor-pointer relative uppercase text-[15px] font-semibold" >
                                        <p className='pr-16'>Download CV</p>
                                        <p className="bg-[#72b626] absolute rounded-[35px] flex items-center justify-center"><FaDownload className='text-white m-[21px]' /></p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0 pl-[45px] relative">
                            <div className="row grid grid-cols-2">
                                <div className="col-6 px-[15px]">
                                    <div className="border-[1px] border-[#ddd] rounded-lg pt-[20px] pb-[25px] pl-[40px] pr-[30px] mb-[30px]">
                                        <h3 className="text-[#72b626] text-[50px] font-bold inline-block poppins-font relative">2<sup>+</sup></h3>
                                        <p className="pl-[45px] open-sans-font m-0 relative uppercase text-[#666] text-[16px]">years of <span className="d-block">experience</span></p>
                                    </div>
                                </div>
                                <div className="col-6 px-[15px]">
                                    <div className="border-[1px] border-[#ddd] rounded-lg pt-[20px] pb-[25px] pl-[40px] pr-[30px] mb-[30px]">
                                        <h3 className="text-[#72b626] text-[50px] font-bold inline-block poppins-font relative">97<sup>+</sup></h3>
                                        <p className="pl-[45px] open-sans-font m-0 relative uppercase text-[#666] text-[16px]">completed <span className="d-block">projects</span></p>
                                    </div>
                                </div>
                                <div className="col-6 px-[15px]">
                                    <div className="border-[1px] border-[#ddd] rounded-lg pt-[20px] pb-[25px] pl-[40px] pr-[30px] mb-[30px]">
                                        <h3 className="text-[#72b626] text-[50px] font-bold inline-block poppins-font relative">81<sup>+</sup></h3>
                                        <p className="pl-[45px] open-sans-font m-0 relative uppercase text-[#666] text-[16px]">Happy<br /><span className="d-block">customers</span></p>
                                    </div>
                                </div>
                                <div className="col-6 px-[15px]">
                                    <div className="border-[1px] border-[#ddd] rounded-lg pt-[20px] pb-[25px] pl-[40px] pr-[30px] mb-[30px]">
                                        <h3 className="text-[#72b626] text-[50px] font-bold inline-block poppins-font relative">53<sup>+</sup></h3>
                                        <p className="pl-[45px] open-sans-font m-0 relative uppercase text-[#666] text-[16px]">awards<br /><span className="d-block">won</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center py-9'>
                        <div className='bg-gray-300 h-[1px] w-[26rem]'></div>
                    </div>
                    <div className="row">
                        <div className="col-12 px-[15px] flex justify-center text-[#666]">
                            <h3 className="uppercase text-[26px] font-semibold pb-[3rem] mb-0 text-left text-sm-center custom-title ft-wt-600">MY SKILLS</h3>
                        </div>
                        <div className='grid grid-cols-2 gap-x-20 gap-y-10 pr-4'>
                            <div>
                                <div className='pb-3'>
                                    <span className='text-[20px] font-semibold text-gray-700 py-[2px] px-[20px] mb-[10px] rounded-[20px] font-semibold bg-[#eee]'>Front-end & UI</span>
                                </div>
                                <div className='border-[1px] border-gray-300 rounded-xl'>
                                    <ul className='px-6 py-4 leading-[2rem] grid grid-cols-2 gap-x-6'>
                                        <li className='flex items-center gap-2'><FaReact />HTML and CSS</li>
                                        <li className='flex items-center gap-2'><FaReact />Bootstrap</li>
                                        <li className='flex items-center gap-2'><FaReact />Tailwind CSS</li>
                                        <li className='flex items-center gap-2'><FaReact />Material Ui</li>
                                        <li className='flex items-center gap-2'><FaReact />Adobe XD</li>
                                        <li className='flex items-center gap-2'><FaReact />Figma</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className='pb-3'>
                                    <span className='text-[20px] font-semibold text-gray-700 py-[2px] px-[20px] mb-[10px] rounded-[20px] font-semibold bg-[#eee]'>Javascript Framwork & Library</span>
                                </div>
                                <div className='border-[1px] border-gray-300 rounded-xl h-[130px]'>
                                    <ul className='px-6 py-4 leading-[2rem] grid grid-cols-2'>
                                        <li className='flex items-center gap-2'><FaReact />React js & Next js</li>
                                        <li className='flex items-center gap-2'><FaReact />Vue 3 & Next js</li>
                                        <li className='flex items-center gap-2'><FaReact />Ant design & Material Ui</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className='pb-3'>
                                    <span className='text-[20px] font-semibold text-gray-700 py-[2px] px-[20px] mb-[10px] rounded-[20px] font-semibold bg-[#eee]'>Backend and Database (Managed & Unmanaged)</span>
                                </div>
                                <div className='border-[1px] border-gray-300 rounded-xl  h-[160px]'>
                                    <ul className='px-6 py-4 leading-[2rem] grid grid-cols-2'>
                                        <li className='flex items-center gap-2'><FaReact />Node js,Express js & Fastify</li>
                                        <li className='flex items-center gap-2'><FaReact />PHP & Laravel</li>
                                        <li className='flex items-center gap-2'><FaReact />Wordpress</li>
                                        <li className='flex items-center gap-2'><FaReact />MySql</li>
                                        <li className='flex items-center gap-2'><FaReact />Mongo DB</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className='pb-3'>
                                    <span className='text-[20px] font-semibold text-gray-700 py-[2px] px-[20px] mb-[10px] rounded-[20px] font-semibold bg-[#eee]'>Dev Oops & Project Management Tools</span>
                                </div>
                                <div className='border-[1px] border-gray-300 rounded-xl'>
                                    <ul className='px-6 py-4 leading-[2rem] grid grid-cols-2'>
                                        <li className='col-span-2 row-span-2 flex gap-2'><FaReact className='h-7 w-7 mt-1' />AWS Cloud (EC2,Route S3,RDS,ACM,LoadBalancer,Lemda,API Gateway,Cloudfront,S3,SES & Live Streming)</li>
                                        <li className='flex items-center gap-2'><FaReact />Github & Git</li>
                                        <li className='flex items-center gap-2'><FaReact />Zoho Sprint</li>
                                        <li className='flex items-center gap-2'><FaReact />Jira</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center py-12'>
                        <div className='bg-gray-300 h-[1px] w-[26rem]'></div>
                    </div>
                    <div className="row">
                        <div className="col-12 px-[15px] flex justify-center text-[#666]">
                            <h3 className="uppercase text-[26px] font-semibold pb-[3rem] mb-0 text-left text-sm-center custom-title ft-wt-600">Experience <span>&amp;</span> Education</h3>
                        </div>
                        <div className='flex'>
                            <div className="col-lg-6 px-[15px] w-[50%]">
                                <div className="resume-box">
                                    <ul>
                                        <li className='flex gap-5 pr-[20px] pb-[60px] text-[#666]'>
                                            <div className="flex items-center justify-center bg-[#72b626] rounded-full h-[40px] w-[40px]">
                                                <p className='m-4'><FaBriefcase className='text-white' /></p>
                                            </div>
                                            <div>
                                                <span className="text-[12px] py-[1px] px-[10px] mb-[10px] rounded-[20px] font-semibold bg-[#eee] uppercase open-sans-font">June-2021 - Present</span>
                                                <h5 className="mt-[7px] mb-[10px] font-semibold text-[18px] uppercase">MERN Full-Stack Developer <span className="text-[20px] font-medium text-gray-500 open-sans-font capitalize">-- Techsunset<Link href='https://techsunset.com' target='_blank' className='text-blue-600 font-normal text-[16px]'>(https://techsunset.com)</Link></span></h5>
                                                <h5 className="mt-[7px] mb-[10px] font-semibold text-[18px] capitalize">1.Project Title : <span className="text-[15px] font-medium text-gray-400 open-sans-font">Christschool <Link href='https://www.christschool.info/' target='_blank' className='text-blue-600 font-normal'>(https://www.christschool.info/)</Link></span></h5>
                                                <p className="text-[#666] text-[15px]">Christ School CBSE, is the newest branch of Christ Group of Schools, Bangalore, which was begun in June 2017, and now in the current academic year has classes up to Grade IX, with 1800 students.</p>
                                                <h5 className="mt-[7px] mb-[10px] font-semibold text-[18px] capitalize">2.Project Title : <span className="text-[15px] font-medium text-gray-400 open-sans-font">Foodaddaindia <Link href='https://www.foodaddaindia.com/' target='_blank' className='text-blue-600 font-normal'>(https://www.foodaddaindia.com/)</Link></span></h5>
                                                <p className="text-[#666] text-[15px]">Food Adda is one of the finest places to satiate all your cheese cravings. They offer some delicious pizza sandwiches burgers drinks desserts and much more. The star of the show is their Lamboo</p>
                                                <h5 className="mt-[7px] mb-[10px] font-semibold text-[18px] capitalize">3.Project Title : <span className="text-[15px] font-medium text-gray-400 open-sans-font">Hotel Simna <Link href='http://www.hotelsimna.com/' target='_blank' className='text-blue-600 font-normal'>(http://www.hotelsimna.com/)</Link></span></h5>
                                                <p className="text-[#666] text-[15px]">Hotel Simna International Find a Room When you want to be our guest? No. of Rooms     Rooms Type Simna Hotel We provide the most luxurious services From our hotel, you can visit attractive places</p>
                                                <h5 className="mt-[7px] mb-[10px] font-semibold text-[18px] capitalize">4.Project Title : <span className="text-[15px] font-medium text-gray-400 open-sans-font">Shootorder <Link href='https://www.shootorder.com/' target='_blank' className='text-blue-600 font-normal'>(https://www.shootorder.com/)</Link></span></h5>
                                                <p className="text-[#666] text-[15px]">ShootOrder® is one of the globally awarded digital marketing agency in Hyderabad, India. We are amongst the top ranked digital marketing companies with 300+ clients across the globe driving bes</p>
                                                <h5 className="mt-[7px] mb-[10px] font-semibold text-[18px] capitalize">5.Project Title : <span className="text-[15px] font-medium text-gray-400 open-sans-font">Aubree <Link href='https://shop.aubree.in/' target='_blank' className='text-blue-600 font-normal'>(https://shop.aubree.in/)</Link></span></h5>
                                                <p className="text-[#666] text-[15px]">Aubree is a website that offers a variety of chocolates, cakes, and desserts made with love and passion. You can order online and get same day or next day delivery of choco-bites, cakes, tres-leches, and more in amazing flavors and designs.</p>
                                                <h5 className="mt-[7px] mb-[10px] font-semibold text-[18px] capitalize">6.Project Title : <span className="text-[15px] font-medium text-gray-400 open-sans-font">Aquastore <Link href='https://www.aquastore.in/' target='_blank' className='text-blue-600 font-normal'>(https://www.aquastore.in/)</Link></span></h5>
                                                <p className="text-[#666] text-[15px]">AQUAStore.in deals with premium quality aquarium products including different varieties of Aquarium products, Aquarium decorative, finest fish foods, fish medicines, accessories.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 px-[15px] w-[50%]">
                                <div className="resume-box">
                                    <ul>
                                        <li className='flex gap-5 pr-[20px] pb-[60px] text-[#666]'>
                                            <div className="flex items-center justify-center bg-[#72b626] rounded-full h-[40px] w-[40px]">
                                                <p className='m-4'><FaBriefcase className='text-white' /></p>
                                            </div>
                                            <div>
                                                <span className="text-[12px] py-[1px] px-[10px] mb-[10px] rounded-[20px] font-semibold bg-[#eee] uppercase open-sans-font">2021</span>
                                                <h5 className="mt-[7px] mb-[10px] font-semibold text-[18px] uppercase">MERN Full-stack Developer Course <span className="text-[20px] font-medium text-gray-500 capitalize">-- <br/>Wap Institute<Link href='https://wapinstitute.com/certified' target='_blank' className='text-blue-600 font-normal text-[16px]'>(https://wapinstitute.com/)</Link></span></h5>
                                                <p className="text-[#666] text-[15px]">Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt</p>
                                            </div>
                                        </li>
                                        <li className='flex gap-5 pr-[20px] pb-[60px] text-[#666]'>
                                            <div className="flex items-center justify-center bg-[#72b626] rounded-full h-[40px] w-[40px]">
                                                <p className='m-4'><FaBriefcase className='text-white' /></p>
                                            </div>
                                            <div>
                                                <span className="text-[12px] py-[1px] px-[10px] mb-[10px] rounded-[20px] font-semibold bg-[#eee] uppercase">2016 - 2021</span>
                                                <h5 className="mt-[7px] mb-[10px] font-semibold text-[18px] uppercase">Bachelor Degree <span className="text-[15px] font-medium text-gray-400">-- SS Jain Subodh PG Collage,Jaipur</span></h5>
                                                <p className="text-[#666] text-[15px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore</p>
                                            </div>
                                        </li>
                                        <li className='flex gap-5 pr-[20px] pb-[60px] text-[#666]'>
                                            <div className="flex items-center justify-center bg-[#72b626] rounded-full h-[40px] w-[40px]">
                                                <p className='m-4'><FaBriefcase className='text-white' /></p>
                                            </div>
                                            <div>
                                                <span className="text-[12px] py-[1px] px-[10px] mb-[10px] rounded-[20px] font-semibold bg-[#eee] uppercase  uppercase">2016</span>
                                                <h5 className="mt-[7px] mb-[10px] font-semibold text-[18px] uppercase">Intermediate <span className="text-[15px] font-medium text-gray-400">-- Sanjay Gandhi Sr. Sec. School, Jaipur</span></h5>
                                                <p className="text-[#666] text-[15px]">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut adipisicing</p>
                                            </div>
                                        </li>
                                        <li className='flex gap-5 pr-[20px] pb-[60px] text-[#666]'>
                                            <div className="flex items-center justify-center bg-[#72b626] rounded-full h-[40px] w-[40px]">
                                                <p className='m-4'><FaBriefcase className='text-white' /></p>
                                            </div>
                                            <div>
                                                <span className="text-[12px] py-[1px] px-[10px] mb-[10px] rounded-[20px] font-semibold bg-[#eee] uppercase  uppercase">2012</span>
                                                <h5 className="mt-[7px] mb-[10px] font-semibold text-[18px] uppercase">Secondary <span className="text-[15px] font-medium text-gray-400">-- Shree Divya Public Sr. Sec. School,Jaipur</span></h5>
                                                <p className="text-[#666] text-[15px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Resume;