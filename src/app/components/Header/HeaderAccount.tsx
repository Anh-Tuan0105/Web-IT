import Link from "next/link"


export const HeaderAccount = () => {
    return (
        <div className="font-[600] text-[#FFFFFF] sm:text-[16px] text-[12px] leading-[100%] gap-x-[5px] inline-flex">
            <Link href="#" className="">
                Đăng nhập
            </Link>
            <span className="">/</span>
            <Link href="#" className="">
                Đăng Ký
            </Link>
        </div>
    )
}