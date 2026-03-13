function Industries() {

const industries = [
{
title: "Transport Companies",
desc: "Manage fleet operations, shipments and delivery workflows from one centralized logistics platform."
},
{
title: "Fleet Operators",
desc: "Track vehicles in real time, optimize routes and monitor driver performance easily."
},
{
title: "3PL Logistics",
desc: "Coordinate multiple clients, shipments and warehouse operations efficiently."
},
{
title: "E-commerce Delivery",
desc: "Handle high volume deliveries with automated dispatching and tracking."
},
{
title: "Freight Forwarders",
desc: "Track cargo movement and manage international logistics workflows."
},
{
title: "Warehouse Operators",
desc: "Connect warehouse operations with transportation and shipment tracking."
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