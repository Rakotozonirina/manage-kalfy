import React from "react"
import { useFormik } from "formik"

function Form() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return(
        
<div class="flex flex-col w-full px-4 py-8 bg-[#ffd79b] rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
    <div class="self-center mb-6 text-xl shadow-inner font-light text-[#40a259] sm:text-2xl">
        Connectez-vous à votre compte Admin
    </div>
    <div class="mt-8">
        <form action="#" autoComplete="off" onSubmit={formik.handleSubmit}>
            <div class="flex flex-col mb-2">
                <div class="flex relative ">
                    <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-[#876156] border-l border-b  border-[#f9794b] text-[#eda328] shadow-sm text-sm">
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                            </path>
                        </svg>
                    </span>
                    <input name="email" type="email" id="email" class=" rounded-r-lg flex-1 appearance-none border border-[#f9794b] w-full py-2 px-4 bg-[#876156] text-[#eda328] placeholder-[#eda328] shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#f9794b] focus:border-transparent" placeholder="Votre email" onChange={formik.handleChange} value={formik.values.email} />
                    </div>
                </div>
                <div class="flex flex-col mb-6">
                    <div class="flex relative ">
                        <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-[#876156] border-l border-b  border-[#f9794b] text-[#eda328] shadow-sm text-sm">
                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                </path>
                            </svg>
                        </span>
                        <input type="password" id="password" name="password" class=" rounded-r-lg flex-1 appearance-none border border-[#f9794b] w-full py-2 px-4 bg-[#876156] text-[#eda328] placeholder-[#eda328] shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#f9794b] focus:border-transparent" onChange={formik.handleChange} value={formik.values.password} placeholder="Votre mot de passe"/>
                        </div>
                    </div>
                    <div class="flex items-center mb-6 -mt-4">
                        <div class="flex ml-auto">
                            <a href="#" class="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">
                                Mot de passe oublié?
                            </a>
                        </div>
                    </div>
                    <div class="flex w-full">
                        <button type="submit" class="py-2 px-4  bg-[#e35172] hover:bg-[#7c5775] focus:ring-[#e35172] focus:ring-offset-purple-200 text-white/80 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Se connecter
                        </button>
                    </div>
                </form>
            </div>
            <div class="flex items-center justify-center mt-6">
                <a href="#" target="_blank" class="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                    <span class="ml-2">
                        Vous n'avez pas de compte ?
                    </span>
                </a>
            </div>
        </div>

    )
}

export default function Login() {
    return(
        <>
            <main className='w-full h-[100dvh] flex items-center justify-center bg-custom-image bg-bottom bg-no-repeat bg-cover'>
                <div className="w-[45%]">
                    <Form/>
                </div>
            </main>
        </>
    )
}