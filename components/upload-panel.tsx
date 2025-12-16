'use client'
import { useState } from 'react'


export default function UploadPanel() {
const [file, setFile] = useState<File | null>(null)


const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
if (e.target.files?.[0]) setFile(e.target.files[0])
}


const handleSubmit = () => {
if (file) alert(`File ${file.name} uploaded! (backend integration pending)`)
}


return (
<div className="border border-white/10 rounded-xl p-6">
<h3 className="text-lg font-semibold">Upload Files</h3>
<input type="file" onChange={handleUpload} className="mt-4" />
<button onClick={handleSubmit} className="mt-4 px-4 py-2 rounded bg-cyan-500 hover:bg-cyan-400">Upload</button>
</div>
)
}
