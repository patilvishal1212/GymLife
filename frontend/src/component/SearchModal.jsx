import React, { useState } from "react";

export default function SearchModal(){
  const [open, setOpen] = useState(false);

  // आपण navbar मध्ये data-search-open बटणला event listener लावू शकतो किंवा context वापरू शकतो.
  // सध्या सरळ खाली एक floating search icon demo आहे.
  return (
    <>
      <div className="fixed bottom-6 right-6">
        <button className="bg-orange-500 text-white px-3 py-2 rounded" onClick={()=>setOpen(true)}>Search</button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Search</h3>
              <button onClick={()=>setOpen(false)}>✕</button>
            </div>
            <input className="w-full border px-3 py-2" placeholder="Search here..." />
          </div>
        </div>
      )}
    </>
  );
}
