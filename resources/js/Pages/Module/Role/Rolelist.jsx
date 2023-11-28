import { Link, usePage } from '@inertiajs/react';
import React, { useState } from 'react'
import Tippy from '@tippyjs/react';
import { useTranslation } from 'react-i18next';
import { themeConfig } from '../../Store/ThemeConfig';
import FlashMessage from '../../Component/FlashMessage';
import MainLayout from '../../Layout/Mainlayout';

function Rolelist() {
    const { roles, flash, permissions } = usePage().props
    const { t } = useTranslation();
  return (
    <>
        <FlashMessage flash={flash}/>
        <div className="grid xl:grid-cols-1 gap-6 grid-cols-1">
            {/* Simple */}
            <div className="panel">
                <div className="flex items-center justify-between mb-5">
                    <h5 className="font-semibold text-lg dark:text-white-light">Roles List</h5>
                             <Link
                             href={`/admin/roles/create`}
                             method="get"
                             className="px-7 py-2 bg-[#ff6243] text-white rounded-md text-[15px]"
                         >
                         {t('Create')}
                         </Link>
                </div>
                <div className="table-responsive mb-5">


                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Permissions</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        {roles.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <td>
                                        <div className="whitespace-nowrap">{data.role_name}</div>
                                    </td>
                                    {/* <td>{data.permission_names.join(', ')}</td>   */}
                                    <td>

                                            <span className='singlePermission' key={index} style={{ border: '1px solid #cdcdcd', padding: '2px 5px', margin: '2px', backgroundColor: '#f8f8f8', borderRadius: '4px', display: 'inline-block' }}>
                                                {permission.permission_name}
                                                <span style={{ display: 'none' }}>{permission.id}</span>
                                            </span>
                                    </td>
                                    <td className="text-center action-btns">
                                        <div className="flex items-center w-max mx-auto gap-2">
                                                <Link
                                                    href={`/admin/roles/${data.id}/edit`}
                                                    method="get"
                                                    className="btn btn-sm btn-outline-primary"
                                                >
                                                    Edit
                                                </Link>


                                                <Link
                                                    href={`/admin/roles/${data.id}/delete`}
                                                    method="get"
                                                    className="btn btn-sm btn-outline-danger"
                                                >
                                                    Delete
                                                </Link>

                                        </div>
                                    </td>
                                </tr>
                            );
                        })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

Rolelist.layout = page => <MainLayout children={page} />

export default Rolelist