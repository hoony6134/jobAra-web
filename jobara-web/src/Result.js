import Wordmark from "./wordmark.png";
import Logo from "./logo.png";
import { useState } from "react"; // Import useState hook
import { Link } from "react-router-dom";

const Result = () => {
    const resultList = JSON.parse(localStorage.getItem("result"));
    const redirect = () => {
        localStorage.clear();
        window.location.href = "/step1";
    }

    const showDetail = (id) => {
        window.location.href = `https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${id}`;
    }

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
                    <div className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-col">
                                <div className="h-1 bg-purple-200 rounded overflow-hidden">
                                    <div className="w-full h-full bg-primary" />
                                </div>
                                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                                    <span className="sm:w-2/5 text-primary font-semibold title-font text-2xl mb-2 sm:mb-0">
                                        {localStorage.getItem("name")}님을 위한 <span className="text-secondary">추천 진로</span>
                                    </span>
                                    <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                                        {localStorage.getItem("name")}님에게 딱 맞는 진로를 가져와 봤어요. 각 직업 명칭을 눌러 자세한 정보를 확인해보세요.
                                    </p>
                                </div>
                                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                                    {resultList.map((item, index) => (
                                        <>
                                            <div className="w-full sm:w-1/2 lg:w-1/3 p-4" onClick={() => showDetail(item["additionalInfo"][0]["job_cd"])}>
                                                <div className="flex relative">
                                                    <img
                                                        alt="gallery"
                                                        className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl"
                                                        src={Logo}
                                                    />
                                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-white bg-white opacity-95 hover:border-primary rounded-2xl">
                                                        <h1 className="title-font text-xl font-bold text-primary mb-3">
                                                            {item["job_nm"]}
                                                        </h1>
                                                        <h2 className="text-sm title-font font-medium text-gray-800 mb-1">
                                                            {item["additionalInfo"][0]["aptit_name"]}
                                                        </h2>
                                                        <span className="title-font font-medium text-2xl text-primary">
                                                            <img src={Logo} alt="" className="w-6 h-6 inline-block mr-2" />
                                                            {item["score"]}점
                                                        </span>
                                                        <p className="leading-relaxed">
                                                            {item["직업소개"]}
                                                        </p>
                                                        <span
                                                            className="text-primary inline-flex items-center mt-4"
                                                        >
                                                            자세히 보기
                                                            <svg
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                className="w-4 h-4 ml-2"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </div>
                                <button className="flex mx-auto text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-secondary rounded text-lg" onClick={redirect}>다시 시작하기</button>
                            </div>
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
    );
}
export default Result;
