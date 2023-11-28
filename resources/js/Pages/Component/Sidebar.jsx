import React, { useEffect, useState } from 'react'
import {themeConfig } from '../Store/ThemeConfig'
import { Link, usePage } from '@inertiajs/react'
import AnimateHeight from 'react-animate-height';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';

function Sidebar({handleToggleSidebar}) {
    const { base_url, permissions } = usePage().props
    const [toggleSidebar, setToggleSidebar] = useState(true);
    const [currentMenu, setCurrentMenu] = useState('');
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const semidark = themeConfig.semidark;
    const { t } = useTranslation();
const toggleMenu = (value) => {
    setCurrentMenu((oldValue) => {
        return oldValue === value ? '' : value;
    });
};
useEffect(() => {
    const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
    if (selector) {
        selector.classList.add('active');
        const ul = selector.closest('ul.sub-menu');
        if (ul) {
            let ele = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
            if (ele.length) {
                ele = ele[0];
                setTimeout(() => {
                    ele.click();
                });
            }
        }
    }
}, []);

useEffect(() => {
    if (window.innerWidth < 1024 && themeConfig.sidebar) {
        setToggleSidebar(!toggleSidebar);
    }
}, []);

  return (
    <div className={semidark ? 'dark' : ''}>
    <nav
        className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
    >
        <div className="bg-white dark:bg-black h-full">
            <div className="flex justify-between items-center px-4 py-3">
                <Link href="/" className="main-logo flex items-center shrink-0">
                    <img className="w-8 ml-[5px] flex-none" src="/assets/images/logo.svg" alt="logo" />
                    <span className="text-xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light">{t('LUMINOUS ESHOP')}</span>
                </Link>
                <button
                    type="button"
                    className="11collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180"
                    onClick={handleToggleSidebar}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 m-auto">
                        <path d="M13 19L7 12L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path opacity="0.5" d="M16.9998 19L10.9998 12L16.9998 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>


            <PerfectScrollbar className="h-[calc(100vh-80px)] relative verticlescroll scrollwidth-0">
                <ul className="relative font-semibold space-y-0.5 p-4 py-0">
                    <div className='mt-2 mb-2'></div>
                    <li className="nav-item">
                        <ul>
                            <li className="nav-item">
                                <Link href={`${base_url}/admin/dashboard`} className="group">
                                    <div className="flex items-center">

                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.5013 1.66699H3.33464C2.41416 1.66699 1.66797 2.41318 1.66797 3.33366V9.16699C1.66797 10.0875 2.41416 10.8337 3.33464 10.8337H7.5013C8.42178 10.8337 9.16797 10.0875 9.16797 9.16699V3.33366C9.16797 2.41318 8.42178 1.66699 7.5013 1.66699Z" fill="#888EA8"/>
                                            <path d="M16.6654 1.66699H12.4987C11.5782 1.66699 10.832 2.41318 10.832 3.33366V5.83366C10.832 6.75413 11.5782 7.50033 12.4987 7.50033H16.6654C17.5858 7.50033 18.332 6.75413 18.332 5.83366V3.33366C18.332 2.41318 17.5858 1.66699 16.6654 1.66699Z" fill="#888EA8"/>
                                            <path d="M7.5013 12.5H3.33464C2.41416 12.5 1.66797 13.2462 1.66797 14.1667V16.6667C1.66797 17.5871 2.41416 18.3333 3.33464 18.3333H7.5013C8.42178 18.3333 9.16797 17.5871 9.16797 16.6667V14.1667C9.16797 13.2462 8.42178 12.5 7.5013 12.5Z" fill="#888EA8"/>
                                            <path d="M16.6654 9.16699H12.4987C11.5782 9.16699 10.832 9.91318 10.832 10.8337V16.667C10.832 17.5875 11.5782 18.3337 12.4987 18.3337H16.6654C17.5858 18.3337 18.332 17.5875 18.332 16.667V10.8337C18.332 9.91318 17.5858 9.16699 16.6654 9.16699Z" fill="#888EA8"/>
                                        </svg>

                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Dashboard')}</span>
                                    </div>
                                </Link>
                            </li>

                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'manage_configure' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('manage_configure')}>
                                    <div className="flex items-center">

                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.114 1.87478C5.5445 1.81306 1.81404 5.54353 1.87575 10.1131C1.93669 14.4955 5.50505 18.0638 9.88747 18.1248C14.4578 18.1873 18.1875 14.4568 18.125 9.88728C18.0648 5.50408 14.4965 1.93572 10.114 1.87478ZM15.0523 14.658C15.0368 14.6748 15.0177 14.688 14.9965 14.6966C14.9752 14.7053 14.9524 14.7091 14.9295 14.7079C14.9066 14.7067 14.8842 14.7005 14.864 14.6897C14.8438 14.6789 14.8262 14.6638 14.8125 14.6455C14.4631 14.1883 14.0352 13.797 13.5488 13.4896C12.5543 12.8513 11.2941 12.4998 10.0008 12.4998C8.7074 12.4998 7.44724 12.8513 6.45271 13.4896C5.96633 13.7968 5.53845 14.1881 5.18904 14.6451C5.17531 14.6634 5.15771 14.6786 5.13749 14.6893C5.11728 14.7001 5.09493 14.7064 5.07204 14.7075C5.04916 14.7087 5.02629 14.7049 5.00505 14.6962C4.98382 14.6876 4.96475 14.6744 4.94919 14.6576C3.80297 13.4202 3.15368 11.8034 3.12575 10.117C3.06208 6.31579 6.18122 3.13415 9.98396 3.12478C13.7867 3.1154 16.8758 6.20329 16.8758 9.99978C16.8771 11.7269 16.2258 13.3907 15.0523 14.658Z" fill="#888EA8"/>
                                            <path d="M9.99956 5.625C9.22925 5.625 8.53276 5.91367 8.03784 6.43828C7.54292 6.96289 7.29565 7.68828 7.35151 8.4668C7.4648 10 8.65269 11.25 9.99956 11.25C11.3464 11.25 12.532 10 12.6476 8.46719C12.7054 7.69609 12.4601 6.97734 11.957 6.44297C11.4601 5.91563 10.7648 5.625 9.99956 5.625Z" fill="#888EA8"/>
                                        </svg>

                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Configuration')}</span>
                                    </div>

                                    <div className={currentMenu === 'manage_configure' ? 'rotate-90' : 'rtl:rotate-180'}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 5L15 12L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </button>

                                <AnimateHeight duration={300} height={currentMenu === 'manage_configure' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">

                                        <li>
                                            <Link href={`${base_url}/admin/qualification`}>{t('Qualification')}</Link>
                                        </li>
                                        <li>
                                            <Link href={`${base_url}/admin/specialization`}>{t('Specialization')}</Link>
                                        </li>

                                    </ul>
                                </AnimateHeight>
                            </li>

                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'users' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('users')}>
                                    <div className="flex items-center">

                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.114 1.87478C5.5445 1.81306 1.81404 5.54353 1.87575 10.1131C1.93669 14.4955 5.50505 18.0638 9.88747 18.1248C14.4578 18.1873 18.1875 14.4568 18.125 9.88728C18.0648 5.50408 14.4965 1.93572 10.114 1.87478ZM15.0523 14.658C15.0368 14.6748 15.0177 14.688 14.9965 14.6966C14.9752 14.7053 14.9524 14.7091 14.9295 14.7079C14.9066 14.7067 14.8842 14.7005 14.864 14.6897C14.8438 14.6789 14.8262 14.6638 14.8125 14.6455C14.4631 14.1883 14.0352 13.797 13.5488 13.4896C12.5543 12.8513 11.2941 12.4998 10.0008 12.4998C8.7074 12.4998 7.44724 12.8513 6.45271 13.4896C5.96633 13.7968 5.53845 14.1881 5.18904 14.6451C5.17531 14.6634 5.15771 14.6786 5.13749 14.6893C5.11728 14.7001 5.09493 14.7064 5.07204 14.7075C5.04916 14.7087 5.02629 14.7049 5.00505 14.6962C4.98382 14.6876 4.96475 14.6744 4.94919 14.6576C3.80297 13.4202 3.15368 11.8034 3.12575 10.117C3.06208 6.31579 6.18122 3.13415 9.98396 3.12478C13.7867 3.1154 16.8758 6.20329 16.8758 9.99978C16.8771 11.7269 16.2258 13.3907 15.0523 14.658Z" fill="#888EA8"/>
                                            <path d="M9.99956 5.625C9.22925 5.625 8.53276 5.91367 8.03784 6.43828C7.54292 6.96289 7.29565 7.68828 7.35151 8.4668C7.4648 10 8.65269 11.25 9.99956 11.25C11.3464 11.25 12.532 10 12.6476 8.46719C12.7054 7.69609 12.4601 6.97734 11.957 6.44297C11.4601 5.91563 10.7648 5.625 9.99956 5.625Z" fill="#888EA8"/>
                                        </svg>

                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Users')}</span>
                                    </div>

                                    <div className={currentMenu === 'users' ? 'rotate-90' : 'rtl:rotate-180'}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 5L15 12L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </button>

                                <AnimateHeight duration={300} height={currentMenu === 'users' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        <li>
                                            <Link href={`${base_url}/admin/users`}>{t('All Users')}</Link>
                                        </li>
                                        <li>
                                            <Link href={`${base_url}/admin/roles`}>{t('Roles')}</Link>
                                        </li>
                                        <li>
                                            <Link href={`${base_url}/admin/permissions`}>{t('Permissions')}</Link>
                                        </li>
                                        <li>
                                            <Link href={`${base_url}/admin/modules`}>{t('Modules')}</Link>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li>


                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'extra' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('extra')}>
                                    <div className="flex items-center">

                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.114 1.87478C5.5445 1.81306 1.81404 5.54353 1.87575 10.1131C1.93669 14.4955 5.50505 18.0638 9.88747 18.1248C14.4578 18.1873 18.1875 14.4568 18.125 9.88728C18.0648 5.50408 14.4965 1.93572 10.114 1.87478ZM15.0523 14.658C15.0368 14.6748 15.0177 14.688 14.9965 14.6966C14.9752 14.7053 14.9524 14.7091 14.9295 14.7079C14.9066 14.7067 14.8842 14.7005 14.864 14.6897C14.8438 14.6789 14.8262 14.6638 14.8125 14.6455C14.4631 14.1883 14.0352 13.797 13.5488 13.4896C12.5543 12.8513 11.2941 12.4998 10.0008 12.4998C8.7074 12.4998 7.44724 12.8513 6.45271 13.4896C5.96633 13.7968 5.53845 14.1881 5.18904 14.6451C5.17531 14.6634 5.15771 14.6786 5.13749 14.6893C5.11728 14.7001 5.09493 14.7064 5.07204 14.7075C5.04916 14.7087 5.02629 14.7049 5.00505 14.6962C4.98382 14.6876 4.96475 14.6744 4.94919 14.6576C3.80297 13.4202 3.15368 11.8034 3.12575 10.117C3.06208 6.31579 6.18122 3.13415 9.98396 3.12478C13.7867 3.1154 16.8758 6.20329 16.8758 9.99978C16.8771 11.7269 16.2258 13.3907 15.0523 14.658Z" fill="#888EA8"/>
                                            <path d="M9.99956 5.625C9.22925 5.625 8.53276 5.91367 8.03784 6.43828C7.54292 6.96289 7.29565 7.68828 7.35151 8.4668C7.4648 10 8.65269 11.25 9.99956 11.25C11.3464 11.25 12.532 10 12.6476 8.46719C12.7054 7.69609 12.4601 6.97734 11.957 6.44297C11.4601 5.91563 10.7648 5.625 9.99956 5.625Z" fill="#888EA8"/>
                                        </svg>

                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Extra')}</span>
                                    </div>

                                    <div className={currentMenu === 'extra' ? 'rotate-90' : 'rtl:rotate-180'}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 5L15 12L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </button>

                                <AnimateHeight duration={300} height={currentMenu === 'extra' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        {/*<li>*/}
                                        {/*    <Link href={`${base_url}/admin/category`}>{t('env')}</Link>*/}
                                        {/*</li>*/}
                                        {/*<li>*/}
                                        {/*    <Link href={`${base_url}/admin/category`}>{t('Backup')}</Link>*/}
                                        {/*</li>*/}
                                        <li>
                                            <Link href={`${base_url}/admin/custom-css`}>{t('Custom Css')}</Link>
                                        </li>
                                        <li>
                                            <Link href={`${base_url}/admin/backup`}>{t('Backup')}</Link>
                                        </li>

                                    </ul>
                                </AnimateHeight>
                            </li>

                        </ul>
                    </li>
                </ul>
            </PerfectScrollbar>
        </div>
    </nav>
</div>
  )
}

export default Sidebar
