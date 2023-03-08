import { FC, ReactNode } from 'react';
import Head from 'next/head';

interface Props {
    title: string;
    children: ReactNode
}

export const AuthLayout:FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name='og:title' content={title} />
            </Head>
            
            <div className="container px-4 m-auto">
                <main>
                    { children }
                </main>
            </div>
        </>
    )
}