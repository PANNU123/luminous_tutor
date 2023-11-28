import React, { useState } from "react";
import MainLayout from "../../Layout/Mainlayout";
import FlashMessage from "../../Component/FlashMessage";
import {Link, usePage} from "@inertiajs/react";
import DeleteModal from "../../Component/DeleteModal";

function Index() {
    const { flash , backups ,base_url } = usePage().props;
    const [isDeleteNoteModal, setIsDeleteNoteModal] = useState(false);
    const [fileToDelete, setFileToDelete] = useState(null);
    function handleDeleteClick(fileName) {
        setFileToDelete(fileName);
        setIsDeleteNoteModal(true);
    }
    return (
        <>
            <FlashMessage flash={flash} />
            <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 ">
                <div className="rounded-full bg-[#ff6243] p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3 h-[35px] w-[35px] flex items-center justify-center">
                    <svg
                        width="27"
                        height="27"
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
                    <li>
                        <Link href="#" className="text-[#FF6243] hover:underline text-base">
                            Backup File and Database
                        </Link>
                    </li>
                </ul>
                <div className="ml-auto">
                    <Link
                        href={`${base_url}/admin/backup/save`}
                        method="get"
                        className="flex items-center px-7 py-2 bg-[#ff6243] text-white rounded-md text-[15px] shadow-lg transition-transform transform-gpu hover:scale-105"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 shrink-0 ltr:mr-2 rtl:ml-2">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>

                        Backup
                    </Link>
                </div>
            </div>

            <div className="pt-5">
                <div className="grid lg:grid-cols-1 grid-cols-1 gap-6">
                    <div className="panel h-full w-full">
                        <div className="table-responsive custom-scroll">
                            <table>
                                <thead>
                                <tr>
                                    <th className="ltr:rounded-l-md rtl:rounded-r-md">File</th>
                                    <th className="ltr:rounded-l-md rtl:rounded-r-md">Size</th>
                                    <th className="ltr:rounded-l-md rtl:rounded-r-md">Date</th>
                                    <th className="ltr:rounded-l-md rtl:rounded-r-md">Age</th>
                                    <th className="ltr:rounded-l-md rtl:rounded-r-md">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {backups?.map((backup,index) => (
                                        <tr key={index} className="text-white-dark hover:text-black dark:hover:text-white-light/90 group">
                                            <td className="min-w-[150px] text-black dark:text-white">
                                                <div className="flex items-center">
                                                    <span className="whitespace-nowrap">{backup['file_name']}</span>
                                                </div>
                                            </td>
                                            <td className="min-w-[150px] text-black dark:text-white">
                                                <div className="flex items-center">
                                                    <span className="whitespace-nowrap">{backup['file_size']}</span>
                                                </div>
                                            </td>
                                            <td className="min-w-[150px] text-black dark:text-white">
                                                <div className="flex items-center">
                                                    <span className="whitespace-nowrap">{backup['date_created']}</span>
                                                </div>
                                            </td>
                                            <td className="min-w-[150px] text-black dark:text-white">
                                                <div className="flex items-center">
                                                    <span className="whitespace-nowrap">{backup['date_ago']}</span>
                                                </div>
                                            </td>
                                            <td className="min-w-[150px] text-black dark:text-white">
                                                <div className="flex items-center gap-2">
                                                    <a
                                                        href={`${base_url}/admin/backup/download/`+ backup['file_name']}
                                                        method="get"
                                                        className="btn btn-sm btn-outline-primary"
                                                        >
                                                        Download
                                                    </a>
                                                    <button onClick={() => handleDeleteClick(backup['file_name'])} className="btn btn-sm btn-outline-danger">
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <DeleteModal isDeleteNoteModal = {isDeleteNoteModal} setIsDeleteNoteModal={setIsDeleteNoteModal} fileToDelete={fileToDelete} name={"Backup"} route="backup"></DeleteModal>
        </>
    );
}
Index.layout = (page) => (
    <MainLayout children={page} title="HR || Group Of Company" />
);
export default Index;
