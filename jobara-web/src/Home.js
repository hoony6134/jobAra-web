import Logo from './logo.png';
import Wordmark from './wordmark.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Home = () => {
    return (
        <div>
            <div className="bg-white">
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav
                        className="flex items-center justify-between p-6 lg:px-8"
                        aria-label="Global"
                    >
                        <div className="flex lg:flex-1">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">jobAra</span>
                                <img className="h-8 w-auto" src={Wordmark} alt="" />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">메인 메뉴 열기</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <Link to="/step1" className="text-sm font-semibold leading-6 text-gray-900">
                                시작하기 <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </nav>
                    {/* Mobile menu, show/hide based on menu open state. */}
                </header>
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                커리어넷에서 제공하는 API를 이용합니다.{" "}
                                <a href="https://www.career.go.kr/cnet/front/openapi/openApiMainCenter.do" className="font-semibold text-primary">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    더 알아보기 <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div> */}
                        <div className="text-center">
                            <img className="h-16 w-auto mx-auto mb-6" src={Logo} alt="jobAra" />
                            <span className="text-4xl font-bold text-gray-900 sm:text-6xl">
                                개인 맞춤형 <span className="text-primary">진로 추천 서비스</span>
                            </span>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                개인의 성향과 직업에 대한 정보를 분석하여 가장 적합한 직업을 추천해드립니다.<br />직업에 대한 정보를 얻고, 진로를 선택하는 데에 도움을 받아보세요.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link to="/step1"
                                    className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    시작하기
                                </Link>
                                <a href="https://github.com/hoony6134/jobAra-web" className="text-sm font-semibold leading-6 text-gray-900">
                                    소스코드 보기 <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                            }}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;