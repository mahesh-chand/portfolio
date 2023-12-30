import Head from 'next/head';
import { FaUser, FaHome, FaBriefcase, FaEnvelope } from "react-icons/fa";
import Link from 'next/link';
import { FloatButton } from 'antd';

const menuItems = [
    {
        icon: <FaHome className='h-5 w-5 m-[17px]' />,
        text: "HOME",
        href: '/'
    },
    {
        icon: <FaUser className='h-5 w-5 m-[17px]' />,
        text: "RESUME",
        href: '/resume'
    },
    {
        icon: <FaBriefcase className='h-5 w-5 m-[17px]' />,
        text: "PORTFOLIO",
        href: '/portfolio'
    },
    {
        icon: <FaEnvelope className='h-5 w-5 m-[17px]' />,
        text: "CONTACT",
        href: '/contact'
    },
];
const Layout = ({ children, description, keywords }) => {

    return (
        <>
            <Head>
                <title>portfolio</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="robots" content="index,follow" />
                <meta property="og:title" content={process.env.NEXT_PUBLIC_BRAND_NAME} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={process.env.NEXT_PUBLIC_BRAND_LOGO} />
                <meta property="og:url" content="website" />
            </Head>
            <div>{children}</div>
            <div>
                <FloatButton.Group
                    shape="circle"
                    style={{
                        right: 180,
                        bottom: 150
                    }}
                >
                    <ul className=''>
                        {menuItems.map((element, index) => {
                            return (
                                <li key={index} className='flex justify-end text-[#666] font-bold w-48 mb-6'>
                                    <Link href={element.href} legacyBehavior>
                                        <div className={`flex gap-2 py-[16px] justify-end inline-block rounded-full truncate items-center cursor-pointer relative uppercase text-[15px] font-semibold group hover:bg-[#72b626]`}>
                                            <p className="pl-[2rem] text-white font-bold pr-16 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0">
                                                {element.text}
                                            </p>
                                            <p
                                                className={`text-gray-800 transition-all duration-300 group-hover:text-white bg-gray-200 transition-all duration-300 group-hover:bg-[#72b626] overflow-visible absolute rounded-[35px] flex items-center justify-center`}
                                            >
                                                {element.icon}
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </FloatButton.Group>
            </div>
        </>
    )
}

export default Layout;