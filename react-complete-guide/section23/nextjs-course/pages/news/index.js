import Link from "next/link";

function NewsPage() {
    return (
        <>
            <h1>News page</h1>
            <ul>
                <li>
                    <Link href="/news/nextjs">NextJS</Link>
                </li>
            </ul>
        </>
    );
}

export default NewsPage;
