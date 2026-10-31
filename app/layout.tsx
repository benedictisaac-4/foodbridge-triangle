import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'FoodBridge Triangle — A little help, closer to home',description:'Find Raleigh food resources, understand published requirements, and plan your next step.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
