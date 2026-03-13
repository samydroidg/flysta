import { useState } from "react";

function Careers() {

const [openForm,setOpenForm] = useState(false)

return (

<div className="bg-[#f7fafc] text-gray-800 overflow-hidden">


{/* HERO */}

<section className="pt-36 pb-28 relative">

<div className="absolute w-150 h-150 bg-[#2fa4a9]/10 blur-[140px] rounded-full -top-40 -left-40"></div>
<div className="absolute w-125 h-125 bg-[#243b55]/10 blur-[140px] rounded-full bottom-0 right-0"></div>

<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">


{/* LEFT */}

<div>

<h1 className="text-5xl font-bold leading-tight text-[#243b55]">
Build the Future of Logistics
</h1>

<p className="mt-6 text-lg text-gray-600 max-w-lg">
Flysta is building modern software infrastructure for
transport companies. Join a focused team building
technology that powers real logistics operations.
</p>

<button
onClick={()=>setOpenForm(true)}
className="mt-8 bg-[#2fa4a9] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
>
Apply Now
</button>

</div>


{/* RIGHT VISUAL */}

<div className="grid grid-cols-2 gap-6">

<div className="p-6 bg-white rounded-2xl shadow-sm border">
<h3 className="font-semibold text-[#243b55]">
Real Product Impact
</h3>
<p className="text-sm text-gray-600 mt-2">
Build systems used in real logistics operations.
</p>
</div>

<div className="p-6 bg-white rounded-2xl shadow-sm border">
<h3 className="font-semibold text-[#243b55]">
Focused Engineering
</h3>
<p className="text-sm text-gray-600 mt-2">
Work on meaningful software challenges.
</p>
</div>

<div className="p-6 bg-white rounded-2xl shadow-sm border">
<h3 className="font-semibold text-[#243b55]">
Startup Environment
</h3>
<p className="text-sm text-gray-600 mt-2">
Collaborate directly with builders and founders.
</p>
</div>

<div className="p-6 bg-white rounded-2xl shadow-sm border">
<h3 className="font-semibold text-[#243b55]">
Rapid Growth
</h3>
<p className="text-sm text-gray-600 mt-2">
Grow alongside a fast-moving product team.
</p>
</div>

</div>

</div>

</section>



{/* LIFE AT FLYSTA */}

<section className="py-24">

<div className="max-w-6xl mx-auto px-6 text-center">

<h2 className="text-4xl font-bold text-[#243b55]">
Life at Flysta
</h2>

<p className="mt-4 text-gray-600 max-w-2xl mx-auto">
Our team focuses on building practical technology,
solving logistics challenges and continuously
improving the platform.
</p>

</div>


<div className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-3 gap-8">

<div className="p-8 bg-white rounded-2xl border hover:shadow-lg transition">

<h3 className="font-semibold text-lg text-[#243b55]">
Product Ownership
</h3>

<p className="text-gray-600 mt-2 text-sm">
Team members contribute directly to product
features and system design.
</p>

</div>


<div className="p-8 bg-white rounded-2xl border hover:shadow-lg transition">

<h3 className="font-semibold text-lg text-[#243b55]">
Collaborative Culture
</h3>

<p className="text-gray-600 mt-2 text-sm">
Engineers and designers work closely to ship
practical solutions.
</p>

</div>


<div className="p-8 bg-white rounded-2xl border hover:shadow-lg transition">

<h3 className="font-semibold text-lg text-[#243b55]">
Continuous Improvement
</h3>

<p className="text-gray-600 mt-2 text-sm">
We constantly refine our systems to improve
logistics operations.
</p>

</div>

</div>

</section>



{/* WHAT YOU'LL BUILD */}

<section className="py-28 bg-white">

<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div>

<h2 className="text-4xl font-bold text-[#243b55]">
What You Will Work On
</h2>

<p className="mt-6 text-gray-600">
At Flysta, the team builds systems that power
modern logistics operations.
</p>

<ul className="mt-6 space-y-3 text-gray-700">

<li>Transportation management systems</li>
<li>Real-time fleet tracking platforms</li>
<li>Logistics analytics dashboards</li>
<li>Automation for transport workflows</li>

</ul>

</div>


<div className="grid grid-cols-2 gap-6">

<div className="p-6 rounded-xl border bg-gray-50">
Platform Architecture
</div>

<div className="p-6 rounded-xl border bg-gray-50">
Logistics Automation
</div>

<div className="p-6 rounded-xl border bg-gray-50">
Fleet Intelligence
</div>

<div className="p-6 rounded-xl border bg-gray-50">
Operational Analytics
</div>

</div>

</div>

</section>



{/* FORM POPUP */}

{openForm && (

<div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">

<div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">

<button
onClick={()=>setOpenForm(false)}
className="absolute top-4 right-4 text-gray-500 hover:text-black"
>
✕
</button>

<h2 className="text-2xl font-bold text-[#243b55]">
Apply to Flysta
</h2>

<form
action="https://formsubmit.co/gouravojha9999@gmail.com"
method="POST"
className="mt-6 space-y-4"
>

<input
type="text"
name="name"
placeholder="Full Name"
required
className="w-full border border-gray-300 rounded-lg px-4 py-3"
/>

<input
type="email"
name="email"
placeholder="Email Address"
required
className="w-full border border-gray-300 rounded-lg px-4 py-3"
/>

<input
type="tel"
name="phone"
placeholder="Mobile Number"
required
className="w-full border border-gray-300 rounded-lg px-4 py-3"
/>

<select
name="role"
required
className="w-full border border-gray-300 rounded-lg px-4 py-3"
>

<option value="">Career Interest</option>
<option>Frontend Development</option>
<option>Backend Development</option>
<option>UI / UX Design</option>
<option>Product Management</option>
<option>Marketing</option>

</select>

<textarea
name="message"
placeholder="Tell us about yourself"
className="w-full border border-gray-300 rounded-lg px-4 py-3"
></textarea>

<button
type="submit"
className="w-full bg-[#2fa4a9] text-white py-3 rounded-xl font-semibold"
>
Submit Application
</button>

</form>

</div>

</div>

)}

</div>

)

}

export default Careers