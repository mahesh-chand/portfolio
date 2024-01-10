import Image from 'next/image';
import Layout from '../shared/layout';

const Home = () => {
    const handleDownloadCV = () => {
        const cvUrl = "./Mahesh.pdf";
        const downloadLink = document.createElement("a");

        downloadLink.href = cvUrl;
        downloadLink.download = "Mahesh.pdf";

        document.body.appendChild(downloadLink);
        downloadLink.click();

        document.body.removeChild(downloadLink);
    };

    return (
        <Layout>
            <section className="flex">
                <div className="md:bg-[#72b626] md:fixed md:h-screen md:w-72"></div>
                <div className="md:absolute p-10">
                    <div className="md:flex md:items-center">
                        <div className="rounded-xl">
                            <Image
                                height={60}
                                width={470}
                                src="/images/mahesh1.jpg"
                                className="rounded-3xl md:h-[32.9rem] md:w-[28.4rem] sm:w-full"
                                alt=""
                            />
                        </div>
                        <div className="md:w-[670px] md:pl-[8rem]">
                            <h1 className="text-[51px] leading-[62px] font-bold relative font-sans text-[#72b626]">-- I&quot;M MAHESH CHAND PRAJAPAT.
                                <span className="text-[#666]"><br />Full-Stack MERN Developer</span>
                            </h1>
                            <p className="text-[16px] leading-[35px] py-[15px]">A highly skilled Full-Stack MERN Developer, I specialize in crafting robust web applications, bringing expertise in MongoDB, Express.js, React, and Node.js. My experience spans both front-end and back-end development, allowing me to deliver scalable and user-friendly solutions.</p>
                            <button onClick={handleDownloadCV} className="rounded-[35px] border-[1px] border-gray-500 w-44 px-6 py-3 text-medium hover:bg-[#72b626] hover:text-white">DOWNLOAD CV</button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Home;