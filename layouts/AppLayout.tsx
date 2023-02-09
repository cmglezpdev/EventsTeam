import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Footer, NavBar } from '@/components';

interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children: ReactNode
}

export const AppLayout:FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name='description' content={pageDescription} />
                <meta name='og:title' content={title} />
                <meta name='og:description' content={pageDescription} />
                
                {
                    imageFullUrl && (
                        <meta name='og:image' content={imageFullUrl} />
                    )
                }
            </Head>
            
            <div className="container px-4 m-auto">
                <NavBar />
                <main>
                    { children }
                </main>
                <Footer />
            </div>
        </>
    )
}