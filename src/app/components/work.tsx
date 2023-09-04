'use client';

import Image from 'next/image'
type Props = {
    title: string
    tags: string[]
    imagePath?: string
    alt?: string
    iconType?: string
    url?: string
    onClick?: any
    children: React.ReactNode
}


export default function Work({ title, tags, imagePath, alt, iconType, url, onClick, children }: Props) {
    const tagsEl = tags.map((tag, index) => {
        return <span key={index} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mr-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-500/10">{tag}</span >
    })

    return (
        <li>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    {(imagePath && alt && onClick) && <Image
                        className="h-32 w-32 object-cover object-center cursor-pointer"
                        src={imagePath}
                        width={100}
                        height={100}
                        alt={alt}
                        onClick={() => onClick(imagePath)}
                    />}

                    {iconType === "Github" && <svg className="w-max h-max text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                    </svg>}


                    {iconType === "twitter" && <svg className="w-max h-max text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z" />
                    </svg>}
                </div>

                <div className='col-span-2'>
                    {url
                        ? <a href={url} target='blank' className='flex justify-start items-center'>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-white-900 mr-1">
                                {title}
                            </h3>
                            <svg className="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" />
                                <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" />
                            </svg>
                        </a>
                        : <h3 className="text-base font-semibold leading-7 tracking-tight text-white-900">{title}</h3>
                    }

                    {tagsEl}
                    <p className="mt-1 text-xs leading-5 text-white-500">
                        {children}
                    </p>
                </div>
            </div>
        </li>
    )
}