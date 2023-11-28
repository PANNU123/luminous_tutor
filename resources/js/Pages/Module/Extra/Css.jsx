import React, { useState } from "react";
import MainLayout from "../../Layout/Mainlayout";
import FlashMessage from "../../Component/FlashMessage";
import {Link, router, usePage} from "@inertiajs/react";
import {useForm} from "react-hook-form";


function Index() {
    const { flash , file_content} = usePage().props;
    const { register, handleSubmit,setValue,formState: { errors } } = useForm({
        defaultValues: {
            file_content:file_content,
        },
    });

    function onSubmit(data) {
        // console.log(data);
        router.post("/admin/custom-css/save", data);
    }

    return (
        <>
            <FlashMessage flash={flash} />

            <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 ">
                <div className="rounded-full  bg-[#ff6243] p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3 h-[35px] w-[35px] flex items-center justify-center">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                    >
                        <path
                            d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        />
                        <path
                            opacity="0.5"
                            d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
                <ul className="flex space-x-2 rtl:space-x-reverse">
                    <li className="table-list-title">
                        <Link href="#" className="text-[#FF6243] hover:underline text-base">
                            Custom Css Style
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="pt-5 grid lg:grid-cols-1 grid-cols-1 gap-6">
                <div className="panel" id="forms_grid">
                    <div className="mb-5">
                        <form
                            className="space-y-5"
                            onSubmit={handleSubmit(onSubmit)} method="post"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                                <div>
                                    <textarea
                                        placeholder="Enter Custom Css"
                                        className="form-input h-screen"
                                        {...register("file_content")}
                                    ></textarea>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary !mt-6"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

Index.layout = (page) => <MainLayout children={page} title="HR || Admin Dashboard" />;

export default Index;
