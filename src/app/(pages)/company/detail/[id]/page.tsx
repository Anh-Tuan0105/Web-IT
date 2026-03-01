/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next"
import Link from "next/link"
import { FaUserTie } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoBriefcase } from "react-icons/io5";


export const metadata: Metadata = {
    title: "Chi tiết công ty",
    description: "Mô tả trang chi tiết công ty..."
}

export default async function CompanyDetailPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params;
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

    const dataCompany =
        [
            {
                name: "Frontend Engineer (ReactJS)",
                link: "/job/detail/1",
                image: "/assets/images/logo-1.png"
            },
            {
                name: "MB Bank",
                link: "/job/detail/2",
                image: "/assets/images/logo-2.png"
            },
            {
                name: "FPT Software",
                link: "/job/detail/3",
                image: "/assets/images/logo-3.png"
            },
        ]

    const logoCompany = dataLogoCompany.find(item => item.id === parseInt(id))?.images;
    return (
        <>
            <div className="pt-[30px] pb-[60px]">
                <div className="container">
                    <div className="bg-white border border-[#DEDEDE] rounded-[8px] p-[20px] mb-[20px]">
                        <div className="flex gap-x-[12px] mb-[20px] flex-wrap">
                            <div className="w-[100] h-[100] sm:mb-0 mb-[16px]">
                                <img src={logoCompany} alt="" className="aspect-square object-cover" />
                            </div>
                            <div className="flex flex-col gap-y-[10px]">
                                <div className="font-[700] text-[18px] text-[#121212]">LG CNS Việt Nam</div>
                                <Link href={"#"} className="flex items-center gap-x-[8px] font-[400] text-[14px] text-[#121212]">
                                    <FaLocationDot className="text-[12px] text-[#000000]" />
                                    Tầng 15, tòa Keangnam Landmark 72, Mễ Trì, Nam Tu Liem, Ha Noi
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center mb-[10px] gap-[5px]">
                                <div className="font-[400] text-[16px] text-[#A6A6A6]">Mô hình công ty:</div>
                                <div className="font-[400] text-[16px] text-[#121212] text-left">Sản phẩm</div>
                            </div>
                            <div className="flex items-center mb-[10px] gap-[5px]">
                                <div className="font-[400] text-[16px] text-[#A6A6A6]">Quy mô công ty:</div>
                                <div className="font-[400] text-[16px] text-[#121212] text-left">151 - 300 nhân viên</div>
                            </div>
                            <div className="flex items-center mb-[10px] gap-[5px]">
                                <div className="font-[400] text-[16px] text-[#A6A6A6]">Thời gian làm việc:</div>
                                <div className="font-[400] text-[16px] text-[#121212] text-left">Thứ 2 - Thứ 6</div>
                            </div>
                            <div className="flex items-center mb-[10px] gap-[5px]">
                                <div className="font-[400] text-[16px] text-[#A6A6A6]">Làm việc ngoài giờ:</div>
                                <div className="font-[400] text-[16px] text-[#121212] text-left">Không có OT</div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-[#DEDEDE] p-[20px] rounded-[8px] mb-[30px]">
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
                    <div className="flex flex-col gap-[20px]">
                        <h2 className="font-[700] text-[28px] text-[#121212]">Công ty có 6 việc làm</h2>
                        {dataCompany && (
                            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-x-[20px] gap-x-[10px] gap-y-[20px]">
                                {dataCompany.map((item, index) => (
                                    <Link key={index} href={item.link} className="relative border-[1px] border-[#DEDEDE] rounded-[8px] bg-[linear-gradient(180deg,_#F6F6F6_2.38%,_#FFFFFF_70.43%)] flex flex-col overflow-hidden">
                                        <img
                                            src="assets/images/Frame.svg"
                                            className="absolute top-0 left-0 w-full h-auto"
                                            alt=""
                                        />
                                        <div className="relative flex flex-col flex-1">
                                            <div className="flex-1">
                                                <div className="w-[116px] aspect-square sm:mt-[32px] mt-[20px] sm:mb-[24px] mb-[6px] mx-auto rounded-[8px] bg-white shadow-[0px_4px_24px_0px_#0000001F]">
                                                    <img src={item.image} alt="" className="w-full h-full object-contain" />
                                                </div>
                                                <h3 className="font-[700] sm:text-[18px] text-[14px] text-[#121212] text-center line-clamp-2">{item.name}</h3>
                                                <div className="font-[400] text-[14px] text-[#121212] text-center mb-[12px]">LG CNS Việt Nam</div>
                                                <div className="font-[600] text-[16px] text-[#0088FF] text-center mb-[6px]">1.000$ - 1.500$</div>
                                                <div className="font-[400] text-[14px] flex items-center justify-center gap-x-[8px] mb-[6px]">
                                                    <FaUserTie className="text-[16px]" /> Fresher
                                                </div>
                                                <div className="font-[400] text-[14px] flex items-center justify-center gap-x-[8px] mb-[6px]">
                                                    <IoBriefcase className="text-[16px]" /> Tại văn phòng
                                                </div>
                                                <div className="font-[400] text-[14px] flex items-center justify-center gap-x-[8px] mb-[12px]">
                                                    <FaLocationDot className="text-[16px]" /> Ha Noi
                                                </div>
                                                <div className="flex items-center justify-center gap-x-[8px] gap-y-[8px] mb-[20px] flex-wrap">
                                                    <div className="border-[1px] border-[#DEDEDE] rounded-[20px] text-[#414042] px-[16px] py-[6px] text-[14px]">ReactJS</div>
                                                    <div className="border-[1px] border-[#DEDEDE] rounded-[20px] text-[#414042] px-[16px] py-[6px] text-[14px]">NextJS</div>
                                                    <div className="border-[1px] border-[#DEDEDE] rounded-[20px] text-[#414042] px-[16px] py-[6px] text-[14px]">Javascript</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}