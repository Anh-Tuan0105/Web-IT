/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight, FaUserTie } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoBriefcase } from "react-icons/io5";


export const metadata: Metadata = {
    title: "Chi tiết công việc",
    description: "Mô tả trang chi tiết công việc..."
}



export default async function JobDetailPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params

    const dataLogoCompany =
        [
            {
                id: 1,
                images: "/assets/images/logo cty.svg",
            },
            {
                id: 2,
                images: "/assets/images/logomb.png"
            },
            {
                id: 3,
                images: "/assets/images/logo-3.png"
            }
        ]

    const logoCompany = dataLogoCompany.find(item => item.id === parseInt(id))?.images;
    const idCompany = dataLogoCompany.find(item => item.id === parseInt(id))?.id;

    return (
        <>
            <div className="pt-[30px] pb-[60px]">
                <div className="container">
                    <div className="flex flex-wrap gap-[20px]">
                        {/* Left */}
                        <div className="lg:w-[65%] w-full">
                            <div className="py-[20px] px-[20px] border border-[#DEDEDE] rounded-[8px] mb-[20px]">
                                {/* Thông tin công việc */}
                                <h1 className="sm:text-[28px] text-[24px] font-[700] text-[#121212] mb-[10px]">Front End Developer ( Javascript, ReactJS)</h1>
                                <div className="font-[400] text-[16px] text-[#414042] mb-[10px]">LG CNS Việt Nam</div>
                                <div className="text-[20px] font-[700] text-[#0088FF] sm:mb-[20px] mb-[10px]">1.000$ - 1.500$</div>
                                <Link href="#apply-form" className="flex w-full h-[48px] mb-[20px] justify-center bg-[#0088FF] text-[16px] font-[700] text-white py-[14px] rounded-[4px]">Ứng tuyển</Link>
                                <div className="grid grid-cols-3 sm:gap-[16px] gap-[8px] mb-[20px]">
                                    <img src="/assets/images/anh-cty.jpg" alt="" className="w-full aspect-[232/145] rounded-[4px] object-cover" />
                                    <img src="/assets/images/anh-cty2.jpg" alt="" className="w-full aspect-[232/145] rounded-[4px] object-cover" />
                                    <img src="/assets/images/anh-cty3.jpg" alt="" className="w-full aspect-[232/145] rounded-[4px] object-cover" />
                                </div>
                                <div className="font-[400] text-[14px] flex items-center gap-x-[8px] mb-[10px]">
                                    <FaUserTie className="text-[16px]" /> Fresher
                                </div>
                                <div className="font-[400] text-[14px] flex items-center gap-x-[8px] mb-[10px]">
                                    <IoBriefcase className="text-[16px]" /> Tại văn phòng
                                </div>
                                <div className="font-[400] text-[14px] flex items-center gap-x-[8px] mb-[10px]">
                                    <FaLocationDot className="text-[16px]" /> Tầng 15, tòa Keangnam Landmark 72, Mễ Trì, Nam Tu Liem, Ha Noi
                                </div>
                                <div className="flex items-center gap-x-[8px] gap-y-[8px] flex-wrap">
                                    <div className="border-[1px] border-[#DEDEDE] rounded-[20px] text-[#414042] px-[16px] py-[6px] text-[14px]">ReactJS</div>
                                    <div className="border-[1px] border-[#DEDEDE] rounded-[20px] text-[#414042] px-[16px] py-[6px] text-[14px]">NextJS</div>
                                    <div className="border-[1px] border-[#DEDEDE] rounded-[20px] text-[#414042] px-[16px] py-[6px] text-[14px]">Javascript</div>
                                </div>
                            </div>
                            <div className="border border-[#DEDEDE] p-[20px] rounded-[8px] mb-[20px]">
                                {/* Mô tả */}
                                <div className="mb-[25px]">
                                    <div className="font-[700] text-[20px] text-[#000000] mb-[20px]">
                                        What is Lorem Ipsum?
                                    </div>
                                    <div className="font-[400] text-[14px] text-[#000000]">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting,
                                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                                        including versions of Lorem Ipsum.
                                    </div>
                                </div>
                                <div className="mb-[25px]">
                                    <div className="font-[700] text-[20px] text-[#000000] mb-[20px]">
                                        Why do we use it?
                                    </div>
                                    <div className="font-[400] text-[14px] text-[#000000]">
                                        It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum
                                        is that it has a more-or-less normal distribution of letters, as opposed to
                                        using &apos;Content here, content here&apos;, making it look like readable
                                        English. Many desktop publishing packages and web page editors now use Lorem
                                        Ipsum as their default model text, and a search for &apos;lorem ipsum&apos;
                                        will uncover many web sites still in their infancy. Various versions have
                                        evolved over the years, sometimes by accident, sometimes on purpose
                                        (injected humour and the like).
                                    </div>
                                </div>
                                <div className="">
                                    <div className="font-[700] text-[20px] text-[#000000] mb-[20px]">
                                        Where does it come from?
                                    </div>
                                    <div className="font-[400] text-[14px] text-[#000000]">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                                        It has roots in a piece of classical Latin literature from 45 BC,
                                        making it over 2000 years old. Richard McClintock, a Latin professor at
                                        Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                                        words, consectetur, from a Lorem Ipsum passage, and going through the cites
                                        of the word in classical literature, discovered the undoubtable source.
                                        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de
                                        Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero,
                                        written in 45 BC. This book is a treatise on the theory of ethics,
                                        very popular during the Renaissance. The first line of Lorem Ipsum,
                                        &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.
                                    </div>
                                </div>
                            </div>
                            <div id="apply-form" className="scroll-mt-20 border border-[#DEDEDE] p-[20px] rounded-[8px]">
                                {/* Ứng tuyển */}
                                <h2 className="font-[700] text-[20px] text-[#000000] mb-[20px]">Ứng tuyển ngay</h2>
                                <form action="" className="flex flex-col gap-[15px]">
                                    <div className="flex flex-col gap-[5px]">
                                        <label htmlFor="fullname" className="font-[500] text-[14px] text-[#000000]">Họ tên *</label>
                                        <input type="text" name="" id="fullname" placeholder="Nguyen Van A" className="border border-[#DEDEDE] rounded-[4px] w-full h-[46px] px-[20px]" />
                                    </div>
                                    <div className="flex flex-col gap-[5px]">
                                        <label htmlFor="email" className="font-[500] text-[14px] text-[#000000]">Email *</label>
                                        <input type="text" name="" id="email" placeholder="levana@gmail.com" className="border border-[#DEDEDE] rounded-[4px] w-full h-[46px] px-[20px]" />
                                    </div>
                                    <div className="flex flex-col gap-[5px]">
                                        <label htmlFor="phone" className="font-[500] text-[14px] text-[#000000]">Số điện thoại *</label>
                                        <input type="text" name="" id="phone" placeholder="0123456789" className="border border-[#DEDEDE] rounded-[4px] w-full h-[46px] px-[20px]" />
                                    </div>
                                    <div className="flex flex-col gap-[5px]">
                                        <label htmlFor="filepdf" className="font-[500] text-[14px] text-[#000000]">File CV dạng PDF *</label>
                                        <input type="file" name="" accept=".pdf" id="filepdf" className="border border-[#DEDEDE] rounded-[4px] w-full h-[46px] px-[20px] file:py-[11px] text-[14px] font-[500] text-[#000000]" />
                                    </div>
                                    <button className="cursor-pointer w-full h-[48px] bg-[#0088FF] text-white font-[700] text-[16px] rounded-[4px]">Gửi CV ứng tuyển</button>
                                </form>
                            </div>
                        </div>
                        {/* Right */}
                        <div className="flex-1">
                            {/* Thông tin công ty */}
                            <div className="bg-white border border-[#DEDEDE] rounded-[8px] p-[20px]">
                                <div className="flex gap-x-[12px] mb-[20px]">
                                    <div className="w-[100] h-[100]">
                                        <img src={logoCompany} alt="" className="aspect-square object-cover" />
                                    </div>
                                    <div className="">
                                        <div className="font-[700] text-[18px] text-[#121212]">LG CNS Việt Nam</div>
                                        <Link href={`/company/detail/${idCompany}`} className="flex items-center gap-x-[8px] font-[400] text-[16px] text-[#0088FF]">Xem công ty <FaArrowRight className="text-[16px] text-[#0088FF]" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex justify-between items-center mb-[10px]">
                                        <div className="font-[400] text-[16px] text-[#A6A6A6]">Mô hình công ty</div>
                                        <div className="font-[400] text-[16px] text-[#121212] text-right">Sản phẩm</div>
                                    </div>
                                    <div className="flex justify-between items-center mb-[10px]">
                                        <div className="font-[400] text-[16px] text-[#A6A6A6]">Quy mô công ty</div>
                                        <div className="font-[400] text-[16px] text-[#121212] text-right">151 - 300 nhân viên</div>
                                    </div>
                                    <div className="flex justify-between items-center mb-[10px]">
                                        <div className="font-[400] text-[16px] text-[#A6A6A6]">Thời gian làm việc</div>
                                        <div className="font-[400] text-[16px] text-[#121212] text-right">Thứ 2 - Thứ 6</div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="font-[400] text-[16px] text-[#A6A6A6]">Làm việc ngoài giờ</div>
                                        <div className="font-[400] text-[16px] text-[#121212] text-right">Không có OT</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}