/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { FaUserTie } from "react-icons/fa";
import { Pagination } from "../Pagination/Pagination";

export const Section2 = (props: {
    name: string
    pagination: boolean
}) => {

    const { name, pagination } = props;

    const dataCompany =
        [
            {
                name: "LG Electronics Development Vietnam (LGEDV)",
                link: "#",
                image: "/assets/images/logo-1.png"
            },
            {
                name: "MB Bank",
                link: "#",
                image: "/assets/images/logo-2.png"
            },
            {
                name: "FPT Software",
                link: "#",
                image: "/assets/images/logo-3.png"
            },
        ]

    return (
        <>
            <div className="py-[60px]">
                <div className="container">
                    {name &&
                        <h2 className="font-[700] text-[#121212] sm:text-[28px] text-[24px] text-center mb-[30px]">{name}</h2>}
                    {dataCompany && (
                        <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-x-[20px] gap-x-[10px] gap-y-[20px]">
                            {dataCompany.map((item, index) => (
                                <Link key={index} href={item.link} className="relative border-[1px] border-[#DEDEDE] rounded-[8px] bg-[linear-gradient(180deg,_#F6F6F6_2.38%,_#FFFFFF_70.43%)] flex flex-col overflow-hidden">
                                    <img
                                        src="assets/images/Frame.svg"
                                        className="absolute top-0 left-0 w-full h-auto"
                                        alt=""
                                    />
                                    <div className="relative flex flex-col flex-1">
                                        <div className="flex-1">
                                            <div className="sm:w-[160px] w-[125px] aspect-square sm:mt-[32px] mt-[20px] sm:mb-[24px] mb-[16px] mx-auto rounded-[8px] bg-white shadow-[0px_4px_24px_0px_#0000001F]">
                                                <img src={item.image} alt="" className="w-full h-full object-contain" />
                                            </div>
                                            <h3 className="font-[700] sm:text-[18px] text-[14px] text-[#121212] text-center line-clamp-2">{item.name}</h3>
                                        </div>
                                        <div className="w-full px-[15px] py-[12px] flex sm:justify-between justify-center bg-[#F7F7F7] rounded-t-[8px] sm:mt-[24px] mt-[16px] flex-wrap items-center gap-[12px]">
                                            <div className="font-[400] text-[14px] text-[#414042]">Ho Chi Minh</div>
                                            <div className="flex gap-x-[6px] items-center font-[400] text-[14px] text-[#121212]">
                                                <FaUserTie className="text-[#000096]" /> 5 Việc làm</div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                    {pagination && (
                        <Pagination/>
                    )}
                </div>
            </div>
        </>
    )
}