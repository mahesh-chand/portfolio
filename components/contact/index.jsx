import { useState } from 'react';
import Layout from '../shared/layout';
import Link from 'next/link';
import { Form, Input, message } from 'antd';
import { FaPhone, FaEnvelope, FaPaperPlane, FaFacebookF, FaTwitter, FaYoutube, FaDribbble } from 'react-icons/fa';

const Contact = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const formDataToSend = form.getFieldsValue();

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });

      if (response.ok) {
        message.success('Email sent successfully');
        form.resetFields();
      } else {
        message.error('Error sending email');
      }
    } catch (error) {
      message.error('Error sending email');
    }
  };

  return (
    <Layout>
      <div>
        <div className="px-[8.5rem] py-[3.8rem]">
          <div className="flex justify-center">
            <h1 className="text-[3.5rem] font-extrabold text-[#666] pt-[0.2rem]">
              CONTACT <span className="text-[#72b626]">ME</span>
            </h1>
          </div>
        </div>
      </div>
      <section className="flex justify-center">
        <div className="container px-[76px] flex gap-1 w-full">
          <div className="w-[33.333%]">
            <div className="pr-4">
              <h2 className="text-[26px] font-bold text-[#666]">DON&quot;T BE SHY !</h2>
              <p className="text-[#666] text-[16px] py-3">
                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities
                to be part of your visions.
              </p>
              <div className="flex font-medium leading-[21px] pt-[10px] mb-[1rem]">
                <div>
                  <FaEnvelope className="text-[#72b626] text-[33px]" />
                </div>
                <div className="pl-4">
                  <span className="uppercase text-[17px] text-gray-400">MAIL ME</span>
                  <p className="text-[#666] pt-[1px]">mheshpk678@gmail.com</p>
                </div>
              </div>
              <div className="flex font-medium leading-[21px] pt-[5px] mb-[1rem]">
                <div className="bg-[#72b626] mt-[2px] h-[33px] w-[33px] text-white rounded-lg flex justify-center items-center">
                  <FaPhone className="text-[25px]" />
                </div>
                <div className="pl-4">
                  <span className="uppercase text-[17px] text-gray-400">CALL ME</span>
                  <p className="text-[#666] pt-[1px]">+91 9587586425</p>
                </div>
              </div>
              <div>
                <ul className="flex gap-4 pt-2">
                  <li className="bg-gray-200 rounded-full h-10 w-10 hover:bg-[#72b626]">
                    <Link href={'/'} legacyBehavior>
                      <a className="text-gray-700 h-full w-full flex items-center justify-center hover:text-white">
                        <FaFacebookF />
                      </a>
                    </Link>
                  </li>
                  <li className="bg-gray-200 rounded-full h-10 w-10 hover:bg-[#72b626]">
                    <Link href={'/'} legacyBehavior>
                      <a className="text-gray-700 h-full w-full flex items-center justify-center hover:text-white">
                        <FaTwitter />
                      </a>
                    </Link>
                  </li>
                  <li className="bg-gray-200 rounded-full h-10 w-10 hover:bg-[#72b626]">
                    <Link href={'/'} legacyBehavior>
                      <a className="text-gray-700 h-full w-full flex items-center justify-center hover:text-white">
                        <FaYoutube />
                      </a>
                    </Link>
                  </li>
                  <li className="bg-gray-200 rounded-full h-10 w-10 hover:bg-[#72b626]">
                    <Link href={'/'} legacyBehavior>
                      <a className="text-gray-700 h-full w-full flex items-center justify-center hover:text-white">
                        <FaDribbble />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[66.667%]">
            <div className="ml-[1px] mr-4 pt-1">
              <Form form={form} className="grid grid-cols-3 gap-x-9 gap-y-1" onFinish={handleSubmit}>
                <Form.Item name="name">
                  <Input placeholder="Your Name" className="h-12 pl-6 rounded-full text-gray-600 text-xl" onChange={handleChange} />
                </Form.Item>
                <Form.Item name="email">
                  <Input placeholder="Your Mail" className="h-12 pl-6 rounded-full text-gray-600 text-xl" onChange={handleChange} />
                </Form.Item>
                <Form.Item name="subject">
                  <Input placeholder="Your Subject" className="h-12 pl-6 rounded-full text-gray-600 text-xl" onChange={handleChange} />
                </Form.Item>
                <Form.Item name="message" className="col-span-3">
                  <Input.TextArea placeholder="Your Message" className="h-[10.2rem] pl-6 pb-28 rounded-2xl text-gray-600 text-xl" onChange={handleChange} />
                </Form.Item>
                <Form.Item className="flex justify-end text-[#666] font-bold w-56 border-[1px] border-[#72b626] rounded-[35px] hover:bg-[#72b626] hover:text-white">
                  <button className="flex gap-2 py-[16px] justify-end inline-block truncate items-center cursor-pointer relative uppercase text-[15px] font-semibold">
                    <p className="pr-[4.5rem] font-bold">SEND MESSAGE</p>
                    <p className="bg-[#72b626] absolute rounded-[35px] flex items-center justify-center">
                      <FaPaperPlane className="text-white m-[21px]" />
                    </p>
                  </button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;