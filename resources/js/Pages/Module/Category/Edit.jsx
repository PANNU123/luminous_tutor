import React, { useState } from "react";
import MainLayout from "../../Layout/Mainlayout";
import { Link, router, usePage } from "@inertiajs/react";
import FlashMessage from "../../Component/FlashMessage.jsx";
import Select from 'react-select';
import { useForm,Controller } from "react-hook-form";
function Add() {
    const { flash, categories,result } = usePage().props;
    const [isSvgShow , setSvgShow] = useState(false);
    const { control,register, handleSubmit, setValue, reset,formState: { errors } } = useForm({
        defaultValues : {
            id:result.id,
            name:result.name,
            slug:result.slug,
            parent_id:result?.parent_id ? result.parent_id : null,
        }
    });


    const options = categories.map((item) => ({
        value: item?.id,
        label: item?.name ? `${item.name}` : '',
    }));

    const handleSelectChange = (selectedOption) => {
        setValue('parent_id', selectedOption?.value);
    };
    const [selectedImage, setSelectedImage] = useState(result?.thumbnail ? `/storage/category/${result?.thumbnail}` : '/assets/images/user-profile.jpeg');
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSvgShow(true);
            setSelectedImage(URL.createObjectURL(file));
        }
    };
    function handleDeleteImage() {
        setSelectedImage(null);
        reset({ thumbnail: '' });
    }
    function onSubmit(data) {
        // console.log(data);
        router.post("/admin/category/update", data);
    }
    return (
        <>
            <FlashMessage flash={flash} />
            <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 ">
                <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
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
                        <Link href="#" className="text-primary hover:underline">
                            Category
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                        <span>Add</span>
                    </li>
                </ul>
            </div>
            <div className="pt-5 grid lg:grid-cols-1 grid-cols-1 gap-6">
                <div className="panel" id="forms_grid">
                    <div className="flex items-center justify-between mb-5">
                        <h5 className="font-semibold text-lg dark:text-white-light">
                            Category Add Form
                        </h5>
                    </div>
                    <div className="mb-5">
                        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} method="post">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="hidden"
                                    {...register("id")}
                                />
                                <div>
                                    <label>Name</label>
                                    <input
                                        {...register("name",{ required: "Category Name Is required" })}
                                        type="text"
                                        className="form-input"
                                        placeholder="Enter Category Name"
                                    />
                                    {errors.name && <p className="text-red-600 pt-2">{errors.name.message}</p>}
                                </div>
                                <div>
                                    <label>Slug</label>
                                    <input
                                        {...register("slug")}
                                        type="text"
                                        className="form-input"
                                        placeholder="Enter Category Slug"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                                <div className="md:col-span-2">
                                    <label>Parent Category</label>
                                    <Controller
                                        control={control}
                                        name="parent_id"
                                        render={({ field }) => (
                                            <Select
                                                placeholder="Select an option"
                                                options={options}
                                                value={options.find((option) => option.value === field.value)}
                                                onChange={handleSelectChange}
                                            />
                                        )}
                                    />
                                </div>
                                <div>
                                    <label>Thumbnail</label>
                                    <input
                                        type="file"
                                        className="form-input"
                                        {...register("thumbnail")}
                                        onChange={handleImageChange}
                                    />
                                </div>
                                <>
                                    {selectedImage && (
                                        <div style={{ position: 'relative' }}>
                                            <img className="rounded-lg max-w-[100px]" src={selectedImage} alt="Selected Avatar" />
                                            {result?.thumbnail && isSvgShow && (
                                                <span
                                                    onClick={handleDeleteImage}
                                                    className="absolute top-[-15px] left-[23%] bg-white text-red-700 rounded-full p-1 shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
                                                >
                                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                                        <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                                                        <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                                                    </svg>
                                                </span>
                                            )}
                                        </div>
                                    )}

                                </>
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

Add.layout = (page) => (
    <MainLayout children={page} title="HR || Add Group Of Company" />
);

export default Add;
