import{q as x,r as m,j as e,R as f,y as b}from"./app-944f06d7.js";import j from"./Mainlayout-530935e5.js";import"./ThemeConfig-49c8c6b2.js";import"./Footer-7b39564e.js";import"./Header-18d6c8e3.js";import"./Dropdown-a74d5901.js";import"./nonIterableRest-c1aee06f.js";import"./Sidebar-5060a96a.js";function g(){const{role:n,allPermissions:a,currentpermission:c}=x().props;m.useEffect(()=>{t({id:n.id,role_name:n.role_name,selectedPermissions:c})},[n]);const u=(s,l)=>{t(l?i=>({...i,selectedPermissions:[...i.selectedPermissions,s]}):i=>({...i,selectedPermissions:i.selectedPermissions.filter(r=>r!==s)}))},[o,t]=m.useState({id:"",role_name:"",selectedPermissions:[]}),d=s=>{const{name:l,value:i}=s.target;t({...o,[l]:i})},h=async s=>{s.preventDefault(),b.post("/admin/roles/update",o)};return e.jsx("div",{className:"grid xl:grid-cols-1 gap-6 grid-cols-1",children:e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Edit Role"})}),e.jsx("div",{className:"createuser-form",children:e.jsx("div",{className:"w-full mx-auto",children:e.jsxs("form",{onSubmit:h,className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",children:[e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"hidden",name:"id",id:"id",value:o.id,onChange:d,required:!0}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Role Name"}),e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",name:"role_name",id:"role_name",value:o.role_name,onChange:d,required:!0})]}),e.jsx("div",{className:"all-permission-lists",children:a.sort((s,l)=>s.module_id-l.module_id).map((s,l,i)=>{var r;return e.jsxs(f.Fragment,{children:[l===0||s.module_id!==i[l-1].module_id?e.jsx("div",{className:"module-title",id:`moduleid-${s.module_id}`,children:e.jsx("h4",{children:(r=s==null?void 0:s.module)==null?void 0:r.name})}):null,e.jsxs("label",{className:"inline-flex mr-3","data-moduleid":s.module_id,children:[e.jsx("input",{type:"checkbox",className:"form-checkbox",name:"permissions[]",id:`permission-${s.id}`,checked:o.selectedPermissions.includes(s.id),onChange:p=>u(s.id,p.target.checked)}),e.jsx("span",{children:s.permission_name})]})]},s.id)})}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsx("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Update"})})]})})})]})})}g.layout=n=>e.jsx(j,{children:n});export{g as default};