import Layout from '../shared/layout'

const Portfolio = () => {
    return (
        <Layout>
            <div>
                <div className="md:px-[8.5rem] py-16 bg-gray-50">
                    <div className="mb-4 flex justify-center">
                        <h1 className="text-[3.5rem] font-extrabold text-[#666] pt-[0.2rem] mb-[3.8rem]">MY <span className="text-[#72b626]">PORTFOLIO</span></h1>
                    </div>
                    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-6 gap-y-12">
                        <div class="border shadow-lg rounded-xl">
                            <a target="_blank" href="https://www.christschool.info/">
                                <div
                                    class="h-[250px] cursor-pointer project_1 rounded-lg"
                                    style={{
                                        backgroundImage: `url('/images/christschool.png')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'top',
                                        transition: 'background-position 1s',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundPosition = 'bottom')}
                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundPosition = 'top')}
                                >
                                </div>
                            </a>
                        </div>
                        <div class="border shadow-lg rounded-xl">
                            <a target="_blank" href="https://www.foodaddaindia.com/">
                                <div
                                    class="h-[250px] cursor-pointer project_1 rounded-lg"
                                    style={{
                                        backgroundImage: `url('/images/foodaddaindia.png')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'top',
                                        transition: 'background-position 1s',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundPosition = 'bottom')}
                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundPosition = 'top')}
                                >
                                </div>
                            </a>
                        </div>
                        <div class="border shadow-lg rounded-xl">
                            <a target="_blank" href="http://www.hotelsimna.com/">
                                <div
                                    class="h-[250px] cursor-pointer project_1 rounded-lg"
                                    style={{
                                        backgroundImage: `url('/images/hotelsimna.png')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'top',
                                        transition: 'background-position 1s',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundPosition = 'bottom')}
                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundPosition = 'top')}
                                >
                                </div>
                            </a>
                        </div>
                        <div class="border shadow-lg rounded-xl">
                            <a target="_blank" href="https://www.shootorder.com/">
                                <div
                                    class="h-[250px] cursor-pointer project_1 rounded-lg"
                                    style={{
                                        backgroundImage: `url('/images/shootorder.png')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'top',
                                        transition: 'background-position 1s',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundPosition = 'bottom')}
                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundPosition = 'top')}
                                >
                                </div>
                            </a>
                        </div>
                        <div class="border shadow-lg rounded-xl">
                            <a target="_blank" href="https://shop.aubree.in/">
                                <div
                                    class="h-[250px] cursor-pointer project_1 rounded-lg"
                                    style={{
                                        backgroundImage: `url('/images/shop-aubree.png')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'top',
                                        transition: 'background-position 1s',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundPosition = 'bottom')}
                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundPosition = 'top')}
                                >
                                </div>
                            </a>
                        </div>
                        <div class="border shadow-lg rounded-xl rounded-lg">
                            <a target="_blank" href="https://www.aquastore.in/">
                                <div
                                    class="h-[250px] cursor-pointer project_1 rounded-lg"
                                    style={{
                                        backgroundImage: `url('/images/aquastore.png')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'top',
                                        transition: 'background-position 1s',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundPosition = 'bottom')}
                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundPosition = 'top')}
                                >
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Portfolio;