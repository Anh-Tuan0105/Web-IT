import { Section1 } from "@/app/components/HomePage/Section1"
import { Section3 } from "@/app/components/Search/Section3"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Kết quả tìm kiếm",
    description: "Kết quả tìm kiếm công việc..."
}

export default function SearchPage() {
    return (
        <>
            <Section1/>
            {/* Section 3 */}
            <Section3/>
            {/* End Section 3 */}
        </>
    )
}