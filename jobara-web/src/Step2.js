import Wordmark from "./wordmark.png"
import Logo from "./logo.png"
import { Link } from "react-router-dom"

const Step2 = () => {

    const handleClick = () => {
        const profit = document.getElementById('profit-slider').value;
        const wlb = document.getElementById('wlb-slider').value;
        const social = document.getElementById('social-slider').value;
        localStorage.setItem('profit', profit);
        localStorage.setItem('wlb', wlb);
        localStorage.setItem('social', social);
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
                                    <div className="w-3/5 h-full bg-primary" />
                                </div>
                                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                                    <span className="sm:w-2/5 text-primary font-semibold title-font text-2xl mb-2 sm:mb-0">
                                        Step 2 <span className="text-secondary">&nbsp; 진로 조건 선택</span>
                                    </span>
                                    <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                                        {localStorage.getItem('name')}님에게 맞는 진로를 찾기 위해 아래 진로 조건에 대해 얼마만큼 중요하게 생각하는지 선택해주세요.
                                    </p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                                <div className="flex flex-wrap -m-2">
                                    {/* slider */}
                                    <div className="p-2 w-full">
                                        <div className="relative my-8">
                                            <label htmlFor="profit-slider" className="leading-7 text-xl font-semibold text-primary">소득 수준</label>
                                            <input
                                                type="range"
                                                id="profit-slider"
                                                name="profit-slider"
                                                min="0"
                                                max="100"
                                                className="w-full h-2 bg-gradient-to-r from-purple-200 to-primary rounded-lg appearance-none cursor-pointer"
                                                style={{ outline: "none" }}
                                            />
                                            <style>
                                                {`
                                                    #profit-slider::-webkit-slider-thumb {
                                                        background-color: white;
                                                        border: 2px solid #701ec7;
                                                        -webkit-appearance: none;
                                                        appearance: none;
                                                        width: 20px;
                                                        height: 20px;
                                                        border-radius: 50%;
                                                        cursor: pointer;
                                                    }

                                                    #profit-slider::-moz-range-thumb {
                                                        background-color: white;
                                                        border: 2px solid #701ec7;
                                                        appearance: none;
                                                        width: 20px;
                                                        height: 20px;
                                                        border-radius: 50%;
                                                        cursor: pointer;
                                                    }

                                                    #profit-slider::-ms-thumb {
                                                        background-color: white;
                                                        border: 2px solid #701ec7;
                                                        appearance: none;
                                                        width: 20px;
                                                        height: 20px;
                                                        border-radius: 50%;
                                                        cursor: pointer;
                                                    }
                                                `}
                                            </style>
                                            <span class="font-semibold text-purple-400 absolute start-0 -bottom-6">낮아도 상관 없음</span>
                                            <span class="font-semibold text-purple-400 absolute end-0 -bottom-6">높아야 함</span>
                                        </div>
                                        <div className="relative my-8">
                                            <label htmlFor="wlb-slider" className="leading-7 text-xl font-semibold text-primary">직장과 삶의 균형 (워라밸)</label>
                                            <input type="range"
                                                id="wlb-slider"
                                                name="wlb-slider"
                                                min="0"
                                                max="100"
                                                className="w-full h-2 bg-gradient-to-r from-purple-200 to-primary rounded-lg appearance-none cursor-pointer"
                                                style={{ outline: "none" }}
                                            />
                                            <style>
                                                {`
                                                    #wlb-slider::-webkit-slider-thumb {
                                                        background-color: white;
                                                        border: 2px solid #701ec7;
                                                        -webkit-appearance: none;
                                                        appearance: none;
                                                        width: 20px;
                                                        height: 20px;
                                                        border-radius: 50%;
                                                        cursor: pointer;
                                                    }

                                                    #wlb-slider::-moz-range-thumb {
                                                        background-color: white;
                                                        border: 2px solid #701ec7;
                                                        appearance: none;
                                                        width: 20px;
                                                        height: 20px;
                                                        border-radius: 50%;
                                                        cursor: pointer;
                                                    }

                                                    #wlb-slider::-ms-thumb {
                                                        background-color: white;
                                                        border: 2px solid #701ec7;
                                                        appearance: none;
                                                        width: 20px;
                                                        height: 20px;
                                                        border-radius: 50%;
                                                        cursor: pointer;
                                                    }
                                                `}
                                            </style>
                                            <span class="font-semibold text-purple-400 absolute start-0 -bottom-6">중요하지 않음</span>
                                            <span class="font-semibold text-purple-400 absolute end-0 -bottom-6">중요함</span>
                                        </div>
                                        <div className="relative my-8">
                                            <label htmlFor="social-slider" className="leading-7 text-xl font-semibold text-primary">사회적 영향력</label>
                                            <input type="range"
                                                id="social-slider"
                                                name="social-slider"
                                                min="0"
                                                max="100"
                                                className="w-full h-2 bg-gradient-to-r from-purple-200 to-primary rounded-lg appearance-none cursor-pointer"
                                                style={{ outline: "none" }}
                                            />
                                            <style>
                                                {`
                                                    #social-slider::-webkit-slider-thumb {
                                                        background-color: white;
                                                        border: 2px solid #701ec7;
                                                        -webkit-appearance: none;
                                                        appearance: none;
                                                        width: 20px;
                                                        height: 20px;
                                                        border-radius: 50%;
                                                        cursor: pointer;
                                                    }

                                                    #social-slider::-moz-range-thumb {
                                                        background-color: white;
                                                        border: 2px solid #701ec7;
                                                        appearance: none;
                                                        width: 20px;
                                                        height: 20px;
                                                        border-radius: 50%;
                                                        cursor: pointer;
                                                    }

                                                    #social-slider::-ms-thumb {
                                                        background-color: white;
                                                        border: 2px solid #701ec7;
                                                        appearance: none;
                                                        width: 20px;
                                                        height: 20px;
                                                        border-radius: 50%;
                                                        cursor: pointer;
                                                    }
                                                `}
                                            </style>
                                            <span class="font-semibold text-purple-400 absolute start-0 -bottom-6">중요하지 않음</span>
                                            <span class="font-semibold text-purple-400 absolute end-0 -bottom-6">중요함</span>
                                        </div>
                                    </div>
                                    <div className="p-2 w-full"></div>
                                    <Link to="/step1" className="flex mx-auto text-primary bg-purple-200 border-0 py-2 px-16 focus:outline-none hover:bg-secondary rounded text-lg">&larr; 이전</Link>
                                    <Link to="/step3" onClick={handleClick} className="flex mx-auto text-white bg-primary border-0 py-2 px-16 focus:outline-none hover:bg-secondary rounded text-lg">다음 &rarr;</Link>
                                </div>
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
export default Step2;