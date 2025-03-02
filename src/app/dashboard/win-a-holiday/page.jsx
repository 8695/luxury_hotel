"use client"
import WinHolidayForm from "@component/components/dashLayout/WinHolidayForm";
import AuthDasbard from "@component/helper/AuthDasbard";

const page = () => {
    
    return (
        <>
           <WinHolidayForm />
        </>
    )
}

export default AuthDasbard(page);
