export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className="bg-[#000065] py-[24px]">
                <div className="container">
                    <div className="text-white font-[800] text-[28px] text-center mb-[10px]">
                        28.ITJobs
                    </div>
                    <div className="font-[400] text-[#A6A6A6] text-[14px] text-center">
                        Copyright © {currentYear} IT VIEC JSC
                    </div>
                </div>
            </div>
        </>
    )
}