/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { FaUserTie } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { IoBriefcase } from "react-icons/io5"

export const Section3 = () => {

    const dataCompany =
        [
            {
                name: "Frontend Engineer (ReactJS)",
                link: "#",
                image: "assets/images/logo-1.png"
            },
            {
                name: "MB Bank",
                link: "#",
                image: "assets/images/logo-2.png"
            },
            {
                name: "FPT Software",
                link: "#",
                image: "assets/images/logo-3.png"
            },
        ]
    const level =
        [
            {
                level: "Cấp bậc",
            },
            {
                level: "Intern",
            },
            {
                level: "Junior",
            }
        ]

    const work =
        [
            {
                work: "Online"
            },
            {
                work: "Offline"
            }
        ]

    return (
        <>
            <div className="py-[60px]">
                <div className="container">
                    <h2 className="font-[700] text-[28px] text-[#121212] mb-[30px]">76 việc làm <span className="text-[#0088FF]">reactjs</span></h2>
                    <div className="flex items-center gap-x-[12px] rounded-[8px] bg-white mb-[30px] shadow-[0px_4px_20px_0px_#0000000F] py-[10px] px-[20px] flex-wrap gap-y-[12px]">
                        {level && (
                            <select name="" id="" className="border-[1px] border-[#DEDEDE] rounded-[20px] py-[8px] px-[18px] w-[148px] font-[400] text-[16px] text-[#414042]">
                                {level.map((item, index) => (
                                    <option key={index} value="">{item.level}</option>
                                ))}
                            </select>
                        )}
                        {work && (
                            <select name="" id="" className="border-[1px] border-[#DEDEDE] rounded-[20px] py-[8px] px-[18px] w-[206px] font-[400] text-[16px] text-[#414042]">
                                {work.map((item, index) => (
                                    <option key={index} value="">{item.work}</option>
                                ))}
                            </select>
                        )}
                    </div>
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
                    <div className="mt-[30px]">
                        <select name="" id="" className="border border-[#DEDEDE] rounded-[8px] py-[12px] px-[18px] font-[400] text-[16px] text-[#414042]">
                            <option value="">Trang 1</option>
                            <option value="">Trang 2</option>
                            <option value="">Trang 3</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}