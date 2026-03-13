
function Industries() {

const industries = [
{
title: "Healthcare",
desc: "Manage the transportation of medical supplies, equipment, and pharmaceutical shipments with reliable tracking, delivery visibility, and operational control."
},
{
title: "Transportation",
desc: "Digitize fleet operations, shipment management, and delivery workflows with a centralized platform built for modern transport businesses."
},
{
title: "Logistics",
desc: "Streamline logistics operations from shipment booking to delivery confirmation with complete operational visibility and automated workflows."
},
{
title: "Supply Chain",
desc: "Connect transportation, warehousing, and distribution operations into a single intelligent platform for better planning and execution."
},
{
title: "Third-Party Logistics (3PL)",
desc: "Empower 3PL providers with tools to manage multiple clients, track shipments, generate manifests, and deliver real-time operational insights."
},
{
title: "Agriculture",
desc: "Optimize agri supply chains by managing crop movement, warehouse dispatches, and delivery logistics with real-time operational tracking."
},
{
title: "Warehousing",
desc: "Manage warehouse dispatches, shipment allocation, and inventory movement while seamlessly connecting warehouse operations with transportation workflows."
},
{
    title: "FMCG Distribution",
    desc: "Track high-volume goods movement across distributors, warehouses, and retailers with operational dashboards and delivery intelligence."
},
{
    title: "E-commerce Fulfillment",
    desc: "Manage order shipments, delivery workflows, and distribution networks efficiently to meet modern e-commerce fulfillment demands."
}
]

return (

<section className="py-28 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center">
Industries We Serve
</h2>

<p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
Flysta powers logistics operations across multiple industries
by providing real-time tracking, automation and analytics.
</p>

<div className="grid md:grid-cols-3 gap-8 mt-16">

{industries.map((item,i)=>(
  
<div
key={i}
className="group p-8 rounded-2xl border border-gray-200 bg-white hover:border-[#2fa4a9] hover:shadow-xl transition"
>

{/* TOP BAR */}
<div className="w-10 h-1 bg-[#2fa4a9] rounded-full mb-6"></div>

<h3 className="text-xl font-semibold text-[#243b55]">
{item.title}
</h3>

<p className="mt-3 text-gray-600 leading-relaxed text-sm">
{item.desc}
</p>

{/* HOVER LINE */}
<div className="mt-6 h-[2px] w-0 bg-[#2fa4a9] group-hover:w-full transition-all duration-300"></div>

</div>

))}

</div>

</div>

</section>

)

}

export default Industries