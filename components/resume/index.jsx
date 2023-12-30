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
                                            <li className='mb-[20px]'> <span className="capitalize text-gray-400">phone :</span> <span className="font-semibold text-[#666]">+91 9587586425</span> </li>
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
                                        <li className='flex items-center gap-2'><FaReact />Angular 13 & Universal,nest js</li>
                                        <li className='flex items-center gap-2'><FaReact />Vue 3 & Next js</li>
                                        <li className='flex items-center gap-2'><FaReact />Ant design & Material Ui</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className='pb-3'>
                                    <span className='text-[20px] font-semibold text-gray-700 py-[2px] px-[20px] mb-[10px] rounded-[20px] font-semibold bg-[#eee]'>Database (Managed & Unmanaged)</span>
                                </div>
                                <div className='border-[1px] border-gray-300 rounded-xl'>
                                    <ul className='px-6 py-4 leading-[2rem] grid grid-cols-2'>
                                        <li className='flex items-center gap-2'><FaReact />MySql</li>
                                        <li className='flex items-center gap-2'><FaReact />Postgre Sql</li>
                                        <li className='flex items-center gap-2'><FaReact />AWS Dynamo DB</li>
                                        <li className='flex items-center gap-2'><FaReact />AWS Document DB</li>
                                        <li className='flex items-center gap-2'><FaReact />Mongo DB</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className='pb-3'>
                                    <span className='text-[20px] font-semibold text-gray-700 py-[2px] px-[20px] mb-[10px] rounded-[20px] font-semibold bg-[#eee]'>Backend & Server Side</span>
                                </div>
                                <div className='border-[1px] border-gray-300 rounded-xl'>
                                    <ul className='px-6 py-4 leading-[2rem] grid grid-cols-2'>
                                        <li className='flex items-center gap-2'><FaReact />Node js,Express js & Fastify</li>
                                        <li className='flex items-center gap-2'><FaReact />PHP & Laravel</li>
                                        <li className='flex items-center gap-2'><FaReact />Wordpress</li>
                                        <li className='flex items-center gap-2'><FaReact />Python(Basic)</li>
                                        <li className='flex items-center gap-2'><FaReact />Java(Basic)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-span-2'>
                                <div className='pb-3'>
                                    <span className='text-[20px] font-semibold text-gray-700 py-[2px] px-[20px] mb-[10px] rounded-[20px] font-semibold bg-[#eee]'>Dev Oops & Project Management Tools</span>
                                </div>
                                <div className='border-[1px] border-gray-300 rounded-xl'>
                                    <ul className='px-6 py-4 leading-[2rem] grid grid-cols-3 gap-x-20'>
                                        <li className='col-span-3 flex items-center gap-2'><FaReact />AWS Cloud (EC2,Route S3,RDS,ACM,LoadBalancer,Lemda,API Gateway,Cloudfront,S3,SES & Live Streming)</li>
                                        <li className='flex items-center gap-2'><FaReact />Zoho Sprint</li>
                                        <li className='flex items-center gap-2'><FaReact />Jira</li>
                                        <li className='flex items-center gap-2'><FaReact />Bit Bucket</li>
                                        <li className='flex items-center gap-2'><FaReact />Gitlab</li>
                                        <li className='flex items-center gap-2'><FaReact />Github & Git</li>
                                        <li className='flex items-center gap-2'><FaReact />Digital Ocean</li>
                                        <li className='flex items-center gap-2'><FaReact />Azure</li>
                                        <li className='flex items-center gap-2'><FaReact />Apache Kafka</li>
                                        <li className='flex items-center gap-2'><FaReact />Kubernetis</li>
                                        <li className='flex items-center gap-2'><FaReact />Docker</li>
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
                                                <span className="text-[12px] py-[1px] px-[10px] mb-[10px] rounded-[20px] font-semibold bg-[#eee] uppercase open-sans-font">Jan-2022 - Present</span>
                                                <h5 className="mt-[7px] mb-[10px] font-semibold text-[18px] uppercase">MERN Full-Stack Developer <span className="text-[15px] font-medium text-gray-400 open-sans-font">-- Techsunset</span></h5>
                                                <p className="text-[#666] text-[15px]">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit, </p>
                                            </div>
                                        </li>
                                        <li className='flex gap-5 pr-[20px] pb-[60px] text-[#666]'>
                                            <div className="flex items-center justify-center bg-[#72b626] rounded-full h-[40px] w-[40px]">
                                                <p className='m-4'><FaBriefcase className='text-white' /></p>
                                            </div>
                                            <div>
                                                <span className="text-[12px] py-[1px] px-[10px] mb-[10px] rounded-[20px] font-semibold bg-[#eee] uppercase open-sans-font">2021</span>
                                                <h5 className="mt-[7px] mb-[10px] font-semibold text-[18px] uppercase">MERN Full-stack Developer Course <span className="text-[15px] font-medium text-gray-400">-- Wap Institute</span></h5>
                                                <p className="text-[#666] text-[15px]">Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt</p>
                                            </div>
                                        </li>
                                        <li className='flex gap-5 pr-[20px] pb-[60px] text-[#666]'>
                                            <div className="flex items-center justify-center bg-[#72b626] rounded-full h-[40px] w-[40px]">
                                                <p className='m-4'><FaBriefcase className='text-white' /></p>
                                            </div>
                                            <div>
                                                <span className="text-[12px] py-[1px] px-[10px] mb-[10px] rounded-[20px] font-semibold bg-[#eee] uppercase open-sans-font">2005 - 2013</span>
                                                <h5 className="mt-[7px] mb-[10px] font-semibold text-[18px] uppercase">Consultant <span className="text-[15px] font-medium text-gray-400">-- Videohive</span></h5>
                                                <p className="text-[#666] text-[15px]">Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt</p>
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
                                                <span className="text-[12px] py-[1px] px-[10px] mb-[10px] rounded-[20px] font-semibold bg-[#eee] uppercase">2021</span>
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
                                                <h5 className="mt-[7px] mb-[10px] font-semibold text-[18px] uppercase">Bachelor Degree <span className="text-[15px] font-medium text-gray-400">-- Shree Divya Public Sr. Sec. School,Jaipur</span></h5>
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