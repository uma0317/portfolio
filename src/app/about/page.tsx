import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            {/* <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
                    <defs>
                        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
                    </svg>
                    <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div> */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-indigo-600">About Me</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">山崎 悠雅</h1>
                            <p className="mt-6 text-xl leading-8 text-white-700">
                                関東在住のエンジニアです。<br />
                                コーディング、映像制作、CG制作、ギターが好きです。<br />
                                嫌いなものは紙が必要な手続きです。
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-6 -mt-6 p-6 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <Image
                        src="/works/vj.jpg"
                        width={400}
                        height={400}
                        alt="Picture of the author"
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-white-700 lg:max-w-lg">
                            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white-900">職歴</h2>
                            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Aug. 2018 1 week</time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Amazon Web Services Japan インターン</h3>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">個人でのバグ修正コンペでは1位、AWSを使用したグループハッカソンでは2位を獲得。</p>
                                </li>
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Sep. 2018 2 week</time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">株式会社コロプラ インターン</h3>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">サーバーサイド、データベース開発を経験。</p>
                                </li>
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Sep. 2018 1 month</time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">楽天 インターン</h3>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Angular.jsを使用したフロントエンド開発に従事し、新しい機能の追加を行いました。</p>
                                </li>
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Mar. 2020</time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">北見工業大学 情報システム工学科 卒業</h3>
                                </li>
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Apr. 2020 ~ Oct. 2022</time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Amazon Web Services Japan クラウドサポートエンジニア</h3>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Amazon S3 等のストレージサービスを中心としたテクニカルサポートに従事しました。</p>
                                </li>
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Oct. 2022 ~</time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">無職</h3>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Youtube登録者数6万人、Tiktokフォロワー3万人を獲得。</p>
                                </li>
                            </ol>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-white-900">前職では何をしていたの?</h2>
                            <p className="mt-6">
                                Amazon Web Servicesでクラウドサポートエンジニア（CSE）をやっていました。これは一般的にテクニカルサポート職として知られているものに近いと思います。<br />
                                個人および企業のお客様に対してAWSに関連するさまざまな課題の解決、最適なサービスの選定、および改善をサポートすることが主な役割でした。<br />
                                直接的なコーディングは行いませんでしたが、お客様から提供されたソースコードを分析し、問題を特定したり、AWS Lambdaを使用したソリューションの提案を行う際にプログラミング能力を活用しました。<br />
                                また、作業効率を向上させるためのツール開発も行っていました。(業務内容には含まれない)
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link href="/works" className="text-sm font-semibold leading-6">My Works <span aria-hidden="true">→</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
