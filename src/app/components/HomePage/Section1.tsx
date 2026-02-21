import Link from "next/link";
import { IoSearch } from "react-icons/io5";

export const Section1 = () => {
    const dataLocation =
        [
            {
                location: "Hà Nội",
            },
            {
                location: "Đà Nẵng"
            },
            {
                location: "Hồ Chí Minh"
            },
        ]

    const dataJob =
        [
            {
                job: "ReactJS",
                link: "#"
            },
            {
                job: "JavaScript",
                link: "#",
            },
            {
                job: "NodeJS",
                link: "#"
            }
        ]
    return (
        <>
            <div className="bg-[#000065] py-[60px]">
                <div className="container">
                    <h1 className="text-white font-[700] text-[28px] text-center mb-[30px]">
                        887 Việc làm IT cho Developer &quot;Chất&quot;
                    </h1>
                    <form action="/search" className="flex items-center md:flex-nowrap flex-wrap gap-y-[12px] gap-x-[15px] mb-[30px]">
                        {dataLocation && (
                            <select name="" id="" className="md:w-[240px] w-full h-[56px] bg-white rounded-[4px] text-[#121212] font-[500] text-[16px] px-[20px]">
                                {dataLocation.map((item, index) => (
                                    <option key={index} value="">{item.location}</option>
                                ))}
                            </select>
                        )}
                        <input
                            type="text"
                            className="md:flex-1 w-full h-[56px] bg-white rounded-[4px] text-[#121212] font-[500] text-[16px] px-[20px]"
                            placeholder="Nhập từ khóa..." />
                        <button className="cursor-pointer md:w-[240px] w-full h-[56px] bg-[#0088FF] rounded-[4px] text-white font-[500] text-[16px] flex items-center justify-center gap-x-[10px]">
                            <IoSearch className="text-[20px]" /> Tìm Kiếm
                        </button>
                    </form>
                    <div className="flex flex-wrap items-center gap-x-[12px] gap-y-[15px]">
                        <div className="font-[500] text-[16px] text-[#DEDEDE]">Mọi người đang tìm kiếm:</div>
                        {dataJob && (
                            <div className="flex flex-wrap gap-[10px]">
                                {dataJob.map((item, index) => (
                                    <Link key={index} href={item.link} className="hover:bg-[#414042] bg-[#121212] border-[1px] px-[22px] py-[8px] border-[#414042] font-[500] text-[16px] text-[#DEDEDE] rounded-[20px]">{item.job}</Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}