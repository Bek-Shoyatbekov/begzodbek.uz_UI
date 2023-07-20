import "./Footer.css";


export function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <div className="footer_container">
                <div className="footer_content" data-oas="fade-up" data-aos-duration="1500">
                    <h1 className="footer_text">
                        © Bek's Blog {year}
                    </h1>
                </div>
            </div>
        </>
    )
}