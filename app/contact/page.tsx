export default function ContactPage() {
return (
<div className="max-w-5xl mx-auto py-20">
<h2 className="text-4xl font-bold text-cyan-400">Contact Us</h2>
<p className="mt-4 text-white/70 text-lg">Reach out to our team for inquiries, enterprise partnerships, or technical support.</p>
<form className="mt-8 flex flex-col gap-4">
<input type="text" placeholder="Name" className="p-3 rounded bg-black border border-white/10" />
<input type="email" placeholder="Email" className="p-3 rounded bg-black border border-white/10" />
<textarea placeholder="Message" className="p-3 rounded bg-black border border-white/10" rows={5}></textarea>
<button type="submit" className="px-6 py-3 rounded bg-cyan-500 hover:bg-cyan-400">Send Message</button>
</form>
</div>
)
}
