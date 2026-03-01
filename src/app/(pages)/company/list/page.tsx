import { Section2 } from "@/app/components/HomePage/Section2"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Danh sách công ty",
    description: "Mô tả trang danh sách công ty..."
}


export default function CompanyListPage() {
    return (
        <>
            <Section2 name="Danh sách công ty" pagination = {true}/>
        </>
    )
}