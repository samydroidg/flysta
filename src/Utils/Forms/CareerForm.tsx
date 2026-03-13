type CareerFormProps = {
isOpen: boolean
onClose: ()=>void
}

function CareerForm({isOpen,onClose}:CareerFormProps){

if(!isOpen) return null

return(

<div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">

<div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">

<button
onClick={onClose}
className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
>
✕
</button>

<h2 className="text-2xl font-bold">
Apply to Flysta
</h2>

<p className="text-gray-600 mt-2">
Tell us about yourself and we will get in touch.
</p>

<form
action="https://formsubmit.co/gouravojha9999@gmail.com"
method="POST"
className="mt-6 space-y-4"
>

<input type="hidden" name="_captcha" value="false"/>
<input type="hidden" name="_subject" value="New Career Application"/>

<input
type="text"
name="name"
placeholder="Full Name"
required
className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2fa4a9]"
/>

<input
type="email"
name="email"
placeholder="Email Address"
required
className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2fa4a9]"
/>

<input
type="tel"
name="phone"
placeholder="Mobile Number"
required
className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2fa4a9]"
/>

<input
type="text"
name="role"
placeholder="Role you are interested in"
className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2fa4a9]"
/>

<textarea
name="message"
placeholder="Tell us about yourself"
className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2fa4a9]"
></textarea>

<button
type="submit"
className="w-full bg-[#2fa4a9] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition"
>

Submit Application

</button>

</form>

</div>

</div>

)

}

export default CareerForm