import{q as l,j as e,d as r}from"./app-944f06d7.js";import"./ThemeConfig-49c8c6b2.js";import d from"./FlashMessage-319a291c.js";import a from"./Mainlayout-530935e5.js";import{u as o}from"./Sidebar-5060a96a.js";import"./Footer-7b39564e.js";import"./Header-18d6c8e3.js";import"./Dropdown-a74d5901.js";import"./nonIterableRest-c1aee06f.js";function c(){const{roles:i,flash:t,permissions:m}=l().props,{t:n}=o();return e.jsxs(e.Fragment,{children:[e.jsx(d,{flash:t}),e.jsx("div",{className:"grid xl:grid-cols-1 gap-6 grid-cols-1",children:e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Roles List"}),e.jsx(r,{href:"/admin/roles/create",method:"get",className:"px-7 py-2 bg-indigo-600 text-white rounded-md text-[15px]",children:n("Create")})]}),e.jsx("div",{className:"table-responsive mb-5",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Permissions"}),e.jsx("th",{className:"text-center",children:"Action"})]})}),e.jsx("tbody",{children:i.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"whitespace-nowrap",children:s.role_name})}),e.jsx("td",{children:e.jsxs("span",{className:"singlePermission",style:{border:"1px solid #cdcdcd",padding:"2px 5px",margin:"2px",backgroundColor:"#f8f8f8",borderRadius:"4px",display:"inline-block"},children:[permission.permission_name,e.jsx("span",{style:{display:"none"},children:permission.id})]},index)}),e.jsx("td",{className:"text-center action-btns",children:e.jsxs("div",{className:"flex items-center w-max mx-auto gap-2",children:[e.jsx(r,{href:`/admin/roles/${s.id}/edit`,method:"get",className:"btn btn-sm btn-outline-primary",children:"Edit"}),e.jsx(r,{href:`/admin/roles/${s.id}/delete`,method:"get",className:"btn btn-sm btn-outline-danger",children:"Delete"})]})})]},s.id))})]})})]})})]})}c.layout=i=>e.jsx(a,{children:i});export{c as default};
